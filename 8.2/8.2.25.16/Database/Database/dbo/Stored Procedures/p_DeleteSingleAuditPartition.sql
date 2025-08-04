

create procedure [dbo].[p_DeleteSingleAuditPartition]
(
	@RangeToDrop datetime,
	@maxdop int = 4
)
as;
begin;
	-- First check whether Partition Mgmt enabled for this SQL server.	
	-- Value of Engine edition for Sql Enterprise edition is 3
	declare @edition int = convert(int, (select serverproperty('EngineEdition')));
	if (@edition = 3)
	begin;
		declare @PartitionAuditTableName nvarchar(100) = N'AuditBase';
		declare @NonPartitionAuditTableName nvarchar(100) = N'NonPartitionAuditTable';	
		declare @AuditPartitionNumberToScript int = 1, @AuditBaseCurrentPartitionNumber int = 0;		
		declare @strSQL nvarchar(4000);	
		
		if exists (select 1
				   from sys.tables
				   where Name = 'NonPartitionAuditTable')
		begin;
			drop table [NonPartitionAuditTable];
		end;
	
		-- Validate the Partition function exists. If it does, get the current partition #		
		if exists(select 1 from sys.partition_functions where name = 'AuditPFN')
		begin;
			set @AuditBaseCurrentPartitionNumber = $partition.AuditPFN(getutcdate());
			print 'Current AuditBase Partition # ' + cast(@AuditBaseCurrentPartitionNumber as varchar(30));
		end;
		else
		begin;
			RAISERROR('Partition function AuditPFN Not found. Exiting...', 16, 1);
			return 1;
		end;	

		if(@AuditPartitionNumberToScript = @AuditBaseCurrentPartitionNumber)
		begin;
			RAISERROR('Cannot delete current partition. Exiting...', 16, 1);
			return 2;
		end;

		-- Validate the input date range is a valid partition range.
		if not exists(select 1 from sys.partition_range_values where value = @RangeToDrop)
		begin;
			declare @errMessage varchar(500) = 'Input datetime ' + CAST(@RangeToDrop as varchar(30)) + ' is not a valid partition range. Check sys.partition_range_values for valid partition ranges. Exiting...';
			RAISERROR(@errMessage, 16, 1);
			return 3;
		end;

		-- Validate the input date range is for oldest AuditBase partition. We want to delete oldest partition first for both performance and functionality
		if not exists(select 1 from sys.partition_range_values where value = @RangeToDrop and boundary_id = @AuditPartitionNumberToScript)
		begin;
			declare @errOldestPartitionMessage varchar(500) = 'Input datetime ' + CAST(@RangeToDrop as varchar(30)) + ' is not oldest AuditBase partition. Please select oldest AuditBase partition number. Exiting...';
			RAISERROR(@errOldestPartitionMessage, 16, 1);
			return 4;
		end;

		-- Create a table with exactly same schema as AuditBase table for temporary purpose.
		select top(0) *
		into [dbo].[NonPartitionAuditTable]
		from AuditBase;
		
		-- Need similar Clustered & Non-clustered index on Partition scheme for fast swictching of partitions.
		-- Dynamically generate the Clustered & Non-clustered index list for both **Indexes on Partition & Index on FileGroup**
		-- any new non-clustered indexes created or indexes dropped would not break the partition switch functionality
		select N'CREATE ' 
			+ case when i.is_unique = 1 then N'UNIQUE ' else N'' end  				
			+ case when i.index_id = 1 then N'CLUSTERED ' else N'NONCLUSTERED ' end  + N' INDEX [' + i.name + N'] '
			+ N' ON [' + sc.name + N'].[<TABLENAME_PLACEHOLDER>] ' 
			+ N' (' + indexColumns + N') '
			+ case when includedColumns		IS NULL then N'' else N' INCLUDE (' + includedColumns + N') ' end
			+ case when i.filter_definition	IS NULL	then N'' else N' WHERE ' + i.filter_definition end
			+ N' WITH (ONLINE = ' + case when i.index_id = 1 then N' OFF' else ' ON' end		--clustered index is created on temporary table only & cannot be ONLINE due to BLOB
			+		case p.data_compression	when 0	then N'' when 1 then N' ,DATA_COMPRESSION = ROW ' when 2 then N' ,DATA_COMPRESSION = PAGE '  else N'' end
			+		case when ps.name IS NULL then N' , MAXDOP = ' + cast(@maxdop as nvarchar(10)) else N'' end		-- add maxdop for indexes that will be created back on AuditBase table.
			+		N')'
			+ case when ps.name IS NOT NULL then N' ON [' + ps.name + N'] ([' + PartitionColumn + N']); ' else N' ON [PRIMARY]; ' end as 'createIndexStatement',
			ps.name as 'PartitionName', i.index_id
		into #createIndexStatement			
			from sys.indexes i
				inner join sys.tables t ON i.object_id = t.object_id
				inner join sys.schemas sc ON t.schema_id = sc.schema_id				
				inner join sys.partitions p ON p.object_id = i.object_id and p.index_id = i.index_id
				left join sys.partition_schemes ps ON i.data_space_id = ps.data_space_id
			cross apply 
					( SELECT SUBSTRING(
						CAST(	(select ', ' + c.name + CASE ic.is_descending_key WHEN 0 then N' ASC' when 1 then N' DESC' ELSE N'' END
								from sys.index_columns ic 
									inner join sys.columns c on ic.object_id = c.object_id and ic.column_id = c.column_id and ic.key_ordinal > 0
								where ic.object_id = i.object_id and ic.index_id = i.index_id
								order by ic.key_ordinal 
							FOR XML PATH('')) as nvarchar(4000) ), 2, 4000 ) ) as IXcolumns (indexColumns)
			cross apply 
					( SELECT SUBSTRING(
						CAST(	(select ', ' + c.name 
								from sys.index_columns ic 
									inner join sys.columns c on ic.object_id = c.object_id and ic.column_id = c.column_id and ic.is_included_column = 1
								where ic.object_id = i.object_id and ic.index_id = i.index_id
								order by ic.key_ordinal 
							FOR XML PATH('')) as nvarchar(4000) ), 2, 4000 ) ) as IncColumns (includedColumns)
			cross apply
					( SELECT MAX(c.name) as partitionColumnName 
							FROM sys.index_columns  ic 
								inner join sys.columns c ON ic.column_id = c.column_id and ic.object_id=c.object_id
							WHERE ic.object_id = i.object_id and ic.index_id=i.index_id and ic.partition_ordinal = 1) AS partitioning_column (PartitionColumn)
			where i.object_id = object_id(@PartitionAuditTableName) and i.index_id not in (0) and p.partition_number = @AuditPartitionNumberToScript; 

		-- Create the Partitioned **Clustered & non-Clustered Indexes** on table NonPartitionAuditTable 		 
		declare curCreateIndexPartition cursor FAST_FORWARD
		for
		select createIndexStatement from #createIndexStatement where PartitionName IS NOT NULL

		open curCreateIndexPartition
		fetch next from curCreateIndexPartition into @strSQL
		
		while @@fetch_status = 0
		begin;			
			set @strSQL = replace(@strSQL, '<TABLENAME_PLACEHOLDER>', @NonPartitionAuditTableName)
				 
			print @strSQL;
			exec sp_executesql @strSQL;			

			fetch next from curCreateIndexPartition into @strSQL
		end;		
	
		close curCreateIndexPartition
		deallocate curCreateIndexPartition

		-- Delete the non-clustered index on AuditBase **file PRIMARY group** so that partitition can be switched.
		-- Dynamically generate the Non-clustered index list for **Indexes on PRIMARY**. The same Indexes can be recreated after partition switch
		-- any new non-clustered indexes created or indexes dropped would not break the partition switch functionality		
		declare curDropIndexOnPrimary cursor FAST_FORWARD
		for		
		select N'if exists(select 1 from sys.indexes where name = ''' + i.name + N''' and object_id = object_id(''' + t.name + N''') )
				begin;
					DROP INDEX [' + sc.name + N'].[' + t.name + N'].[' + i.name + N'] ;
				end; ' as 'dropIndexOnPrimary'
			from sys.indexes i
				inner join sys.tables t ON i.object_id = t.object_id
				inner join sys.schemas sc ON t.schema_id = sc.schema_id								
				left join sys.partition_schemes ps ON i.data_space_id = ps.data_space_id			
			where i.object_id = object_id(@PartitionAuditTableName) and i.index_id not in (0, 1) and ps.name IS NULL
			
		open curDropIndexOnPrimary
		fetch next from curDropIndexOnPrimary into @strSQL
		
		while @@fetch_status = 0
		begin;				 
			print @strSQL;
			exec sp_executesql @strSQL;			

			fetch next from curDropIndexOnPrimary into @strSQL
		end;		
	
		close curDropIndexOnPrimary
		deallocate curDropIndexOnPrimary


		-- Switch the first partition.
		alter table AuditBase
		switch partition 1 to [dbo].[NonPartitionAuditTable] partition 1;

		-- Merge the range so that empty partition does not show up in the Retrieve call anywhere.
		alter partition function AuditPFN() merge range (@RangeToDrop);


		-- Recreate **Non-Clustered indexes on the Primary FileGroup** so that select top(n) query works faster.
		-- WITH (ONLINE = ON): Makes application available for Auditing while AuditBase non-clustered index is created for large tables.

		-- [If we dont generate the create Index statement with ONLINE = ON dynamically, SQL Standard Edition reports syntax error while parsing the stored procedure
		--   even when we have IF condition for Enterprise Edition. This breaks CRM initial deployment; Bug #359608]
		 
		declare curCreateIndexOnPrimary cursor FAST_FORWARD
		for
		select createIndexStatement from #createIndexStatement where PartitionName IS NULL and index_id not in (0,1)

		open curCreateIndexOnPrimary
		fetch next from curCreateIndexOnPrimary into @strSQL
		
		while @@fetch_status = 0
		begin;			
			set @strSQL = replace(@strSQL, '<TABLENAME_PLACEHOLDER>', @PartitionAuditTableName)
				 
			print @strSQL;
			exec sp_executesql @strSQL;			

			fetch next from curCreateIndexOnPrimary into @strSQL
		end;		
	
		close curCreateIndexOnPrimary
		deallocate curCreateIndexOnPrimary

		-- Drop the temporary table, the partition is now empty.
		-- Drop is performed at the end as we want to make the PARTITIN SWITCH & Create Index work done at the earliest.
		drop table [dbo].[NonPartitionAuditTable];

		return 0;
	end;
	else
	begin;
		print 'Not SQL Enterprise Edition. Exiting...';
		return 5;
	end;
end;