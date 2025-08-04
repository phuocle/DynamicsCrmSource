

CREATE     procedure [dbo].[p_ReinitPrincipalObjectAccessReadSnapshots](@minimumCount int) as
begin
	SET NOCOUNT ON

	-- Create a temp table to store the new data in - we'll then copy the new data over to the existing table.  We
	-- do it in steps so as to avoid dropping all of the data in this table, which leaves a window where we could
	-- end up getting no data for the cache.
	create table #POASnapshotData(PrincipalId uniqueidentifier, ObjectTypeCode int not null, Count bigint not null)
	CREATE CLUSTERED INDEX ndx_POASnapshotData ON #POASnapshotData(PrincipalId, ObjectTypeCode)

	-- first insert data for non-team principals
	insert into #POASnapshotData(PrincipalId, ObjectTypeCode, Count)
	select PrincipalId, ObjectTypeCode, COUNT(PrincipalObjectAccessId)
	from PrincipalObjectAccess POA with (nolock)
	where ((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 1) = 1
	and POA.PrincipalTypeCode <> 9	-- skip team
	group by PrincipalId, ObjectTypeCode
	having COUNT(PrincipalObjectAccessId) > @minimumCount

	-- insert *user* data corresponding to their team principals
	-- Use a temporary table to pull out values from POA, which will help perf if POA is particularly large
	declare @POAValues table (TeamId uniqueidentifier, ObjectTypeCode int, CountRows int, Primary Key clustered (TeamId, ObjectTypeCode))
	
	insert into @POAValues (TeamId, ObjectTypeCode, CountRows)
	select PrincipalId, ObjectTypeCode, COUNT(PrincipalObjectAccessId)
	from PrincipalObjectAccess POA with (nolock)
	where ((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 1) = 1
	and POA.PrincipalTypeCode = 9	-- just team
	group by PrincipalId, ObjectTypeCode
	having COUNT(PrincipalObjectAccessId) > @minimumCount

	MERGE #POASnapshotData AS Target
	USING
	(select s.SystemUserId, p.ObjectTypeCode, SUM(p.CountRows) as TeamShareCount from @POAValues p
	join SystemUserPrincipals s WITH (nolock)
	on p.TeamId = s.PrincipalId
	group by s.SystemUserId, p.ObjectTypeCode
		)  AS Source
	ON Source.SystemUserId = Target.PrincipalId AND Source.ObjectTypeCode = Target.ObjectTypeCode
	WHEN MATCHED THEN
		UPDATE SET Target.Count = Source.TeamShareCount + Target.Count
	WHEN NOT MATCHED BY TARGET THEN
		INSERT (PrincipalId, ObjectTypeCode, Count) VALUES 
		(Source.SystemUserId, Source.ObjectTypeCode, Source.TeamShareCount);

	-- Delete anything that's not in #POASnapshotData
	delete from PrincipalObjectAccessReadSnapshot where PrincipalObjectAccessReadSnapshotId in
	(select PrincipalObjectAccessReadSnapshotId from PrincipalObjectAccessReadSnapshot poars
	left join #POASnapshotData psd on poars.PrincipalId = psd.PrincipalId and poars.ObjectTypeCode = psd.ObjectTypeCode
	where psd.ObjectTypeCode is null)

	-- Update rows that are in both
	update poars set poars.Count = psd.Count
	from PrincipalObjectAccessReadSnapshot poars
	join #POASnapshotData psd on poars.PrincipalId = psd.PrincipalId and poars.ObjectTypeCode = psd.ObjectTypeCode

	-- Insert any new rows
	insert into PrincipalObjectAccessReadSnapshot (PrincipalObjectAccessReadSnapshotId, PrincipalId, Count, ObjectTypeCode)
	select NEWID(), psd.PrincipalId, psd.Count, psd.ObjectTypeCode
	from #POASnapshotData psd
	left join PrincipalObjectAccessReadSnapshot poars on poars.PrincipalId = psd.PrincipalId and poars.ObjectTypeCode = psd.ObjectTypeCode
	where poars.PrincipalId is null

	drop table #POASnapshotData
end