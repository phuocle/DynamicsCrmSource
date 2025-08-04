

create procedure [dbo].[p_ReinitRecordCountSnapshots]
as;
begin;
    set nocount on;

    -- Create a temp table to store the new data in - we'll then copy the new data over to the existing table.
    -- We do it in steps so as to avoid dropping all of the data in this table, which leaves a window
    -- where we could end up getting no data for the cache.
    create table #RCSnapshotData (
        ObjectTypeCode int not null,
        Count bigint not null,
		BaseTableName nvarchar(500),
		VersionNumberConverted bigint);

    create clustered index ndx_RCSnapshotData on #RCSnapshotData(ObjectTypeCode);

    insert into #RCSnapshotData (ObjectTypeCode, Count)
    select e.ObjectTypeCode,
           sum(row_count)
    from sys.dm_db_partition_stats
         inner join EntityView e
             on e.BaseTableName collate database_default = object_name(object_id)
    where e.IsActivity = 0 and e.IsSolutionAware = 0 and (index_id = 0
          or index_id = 1)
    group by object_id,
             e.ObjectTypeCode;
			 
	insert into #RCSnapshotData (ObjectTypeCode, Count, VersionNumberConverted)
	select ActivityTypeCode, count(*), (CONVERT(bigint, MAX(VersionNumber)))  from ActivityPointerBase 
	group by ActivityTypeCode 

    -- For solution aware entities, obtain record count from filtered index ndx_RecordCount because the base table can have multiple rows for the same record.
    insert into #RCSnapshotData (ObjectTypeCode, Count)
    select e.ObjectTypeCode, 
           sum(p.rows) 
    from sys.partitions p 
         inner join sys.indexes i on p.object_id = i.object_id and p.index_id = i.index_id
         inner join EntityView e on e.BaseTableName collate database_default = OBJECT_NAME(p.object_id)
    where i.name = 'ndx_RecordCount' and  e.IsSolutionAware = 1  AND (ObjectTypeCode < 9800 OR ObjectTypeCode > 9820)
    group by p.object_id,
             e.ObjectTypeCode

	update #RCSnapshotData set BaseTableName = e.BaseTableName 
		from #RCSnapshotData rcs
		inner join MetadataSchema.Entity e
		on  rcs.ObjectTypeCode = e.ObjectTypeCode
		inner join MetadataSchema.Attribute a
		on e.EntityId = a.EntityId
		where e.ComponentState = 0 and e.OverwriteTime = '1900-01-01 00:00:00.000' and e.BaseTableName != 'ActivityPointerBase'
		and a.Name = 'VersionNumber'

	declare @sqlCommand nvarchar(1000)
	declare @base_table_name nvarchar(75)			
	select @base_table_name = BaseTableName from #RCSnapshotData where BaseTableName is not null
	while @base_table_name is not null
	begin
		set @sqlCommand = 'update #RCSnapshotData set VersionNumberConverted = (select (CONVERT(bigint, MAX(VersionNumber))) from ' + QUOTENAME(@base_table_name) + ') WHERE BaseTableName = @base_table_name'
		EXECUTE sp_executesql @sqlCommand, N'@base_table_name varchar(75)', @base_table_name
		update #RCSnapshotData set BaseTableName = null where BaseTableName = @base_table_name
		set @base_table_name = NULL
		select @base_table_name = BaseTableName from #RCSnapshotData where BaseTableName is not null
	end 

	-- Delete anything that's not in ##RCSnapshotData.
    delete from RecordCountSnapshot
    where RecordCountSnapshotId in (
                select RecordCountSnapshotId
                from RecordCountSnapshot rcs
                     left outer join #RCSnapshotData rsd
                         on rcs.ObjectTypeCode = rsd.ObjectTypeCode
                where rsd.ObjectTypeCode is null);

    -- Update rows that are in both.
    update rcs
    set rcs.Count = rsd.Count, 
	rcs.VersionNumberConverted = rsd.VersionNumberConverted, 
	rcs.LastUpdated = GETUTCDATE()
    from RecordCountSnapshot rcs
         inner join #RCSnapshotData rsd
             on rcs.ObjectTypeCode = rsd.ObjectTypeCode;
	
	-- TODO : Temporary if clause, remove after the metadata changes are fully rolled out
	if (exists(select * from sys.columns 
	 where object_id = OBJECT_ID(N'dbo.RecordCountSnapshot') 
	 and (name in (N'LastUpdated', 'VersionNumberConverted'))))
    begin
		insert into RecordCountSnapshot (RecordCountSnapshotId, Count, ObjectTypeCode, VersionNumberConverted, LastUpdated)
				select newid(),
						rsd.Count,
						rsd.ObjectTypeCode, 
						rsd.VersionNumberConverted,
						GETUTCDATE()
				from #RCSnapshotData rsd
						left outer join RecordCountSnapshot rcs
							on rcs.ObjectTypeCode = rsd.ObjectTypeCode
				where rcs.ObjectTypeCode is null;
	end  
	else
	begin
		-- Insert any new rows.
		insert into RecordCountSnapshot (RecordCountSnapshotId, Count, ObjectTypeCode)
		select newid(),
			   rsd.Count,
			   rsd.ObjectTypeCode
		from #RCSnapshotData rsd
			 left outer join RecordCountSnapshot rcs
				 on rcs.ObjectTypeCode = rsd.ObjectTypeCode
		where rcs.ObjectTypeCode is null;
    end 

    drop table #RCSnapshotData;
end;