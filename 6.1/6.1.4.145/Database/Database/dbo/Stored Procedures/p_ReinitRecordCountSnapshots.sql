

CREATE     procedure [dbo].[p_ReinitRecordCountSnapshots] as
begin
	SET NOCOUNT ON

	-- Create a temp table to store the new data in - we'll then copy the new data over to the existing table.  We
	-- do it in steps so as to avoid dropping all of the data in this table, which leaves a window where we could
	-- end up getting no data for the cache.
	create table #RCSnapshotData(ObjectTypeCode int not null, Count bigint not null)
	CREATE CLUSTERED INDEX ndx_RCSnapshotData ON #RCSnapshotData(ObjectTypeCode)

	insert into #RCSnapshotData(ObjectTypeCode, Count)
	select e.ObjectTypeCode, sum(row_count)
	FROM sys.dm_db_partition_stats with (nolock)
	join EntityView e with (nolock) on e.BaseTableName = OBJECT_NAME(object_id)
	where (index_id=0 or index_id=1)	-- Heap or clustered
	group by object_id, e.ObjectTypeCode

	-- Delete anything that's not in ##RCSnapshotData
	delete from RecordCountSnapshot where RecordCountSnapshotId in
	(select RecordCountSnapshotId from RecordCountSnapshot rcs
	left join #RCSnapshotData rsd on rcs.ObjectTypeCode = rsd.ObjectTypeCode
	where rsd.ObjectTypeCode is null)

	-- Update rows that are in both
	update rcs set rcs.Count = rsd.Count
	from RecordCountSnapshot rcs
	join #RCSnapshotData rsd on rcs.ObjectTypeCode = rsd.ObjectTypeCode

	-- Insert any new rows
	insert into RecordCountSnapshot (RecordCountSnapshotId, Count, ObjectTypeCode)
	select NEWID(), rsd.Count, rsd.ObjectTypeCode
	from #RCSnapshotData rsd
	left join RecordCountSnapshot rcs on rcs.ObjectTypeCode = rsd.ObjectTypeCode
	where rcs.ObjectTypeCode is null

	drop table #RCSnapshotData
end