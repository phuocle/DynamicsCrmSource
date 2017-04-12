SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_ReinitRecordCountSnapshots]
as;
begin;
    set nocount on;

    -- Create a temp table to store the new data in - we'll then copy the new data over to the existing table.
    -- We do it in steps so as to avoid dropping all of the data in this table, which leaves a window
    -- where we could end up getting no data for the cache.
    create table #RCSnapshotData (
        ObjectTypeCode int not null,
        Count bigint not null);

    create clustered index ndx_RCSnapshotData on #RCSnapshotData(ObjectTypeCode);

    insert into #RCSnapshotData (ObjectTypeCode, Count)
    select e.ObjectTypeCode,
           sum(row_count)
    from sys.dm_db_partition_stats
         inner join EntityView e
             on e.BaseTableName = object_name(object_id)
    where index_id = 0
          or index_id = 1
    group by object_id,
             e.ObjectTypeCode;

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
    set rcs.Count = rsd.Count
    from RecordCountSnapshot rcs
         inner join #RCSnapshotData rsd
             on rcs.ObjectTypeCode = rsd.ObjectTypeCode;

    -- Insert any new rows.
    insert into RecordCountSnapshot (RecordCountSnapshotId, Count, ObjectTypeCode)
    select newid(),
           rsd.Count,
           rsd.ObjectTypeCode
    from #RCSnapshotData rsd
         left outer join RecordCountSnapshot rcs
             on rcs.ObjectTypeCode = rsd.ObjectTypeCode
    where rcs.ObjectTypeCode is null;

    drop table #RCSnapshotData;
end;
GO
