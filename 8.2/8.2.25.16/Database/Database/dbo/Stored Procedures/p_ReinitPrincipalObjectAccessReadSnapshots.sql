

create procedure [dbo].[p_ReinitPrincipalObjectAccessReadSnapshots](
	@minimumCount int,
	@isHierarchicalSecurityModelEnabled bit)

as
begin;
	set nocount on;

	-- Create a temp table to store the new data in - we'll then copy the new data over to the existing table.  We
	-- do it in steps so as to avoid dropping all of the data in this table, which leaves a window where we could
	-- end up getting no data for the cache.
	declare @POASnapshotData table(
		PrincipalId uniqueidentifier,
		ObjectTypeCode int not null,
		count bigint not null,
		primary key clustered (PrincipalId, ObjectTypeCode));

	declare @POAValues table(
		TeamId uniqueidentifier,
		ObjectTypeCode int,
		CountRows int,
		primary key clustered (TeamId, ObjectTypeCode));

	-- first insert data for non-team principals
	insert into @POASnapshotData(PrincipalId, ObjectTypeCode, count)
		select PrincipalId, ObjectTypeCode, count(PrincipalObjectAccessId)
		from PrincipalObjectAccess POA
			where ((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 1) = 1
			and POA.PrincipalTypeCode <> 9	-- skip team
		group by PrincipalId, ObjectTypeCode
		having count(PrincipalObjectAccessId) > @minimumCount;

	-- insert *user* data corresponding to their team principals
	-- Use a temporary table to pull out values from POA, which will help perf if POA is particularly large
	
	insert into @POAValues (TeamId, ObjectTypeCode, CountRows)
		select PrincipalId, ObjectTypeCode, count(PrincipalObjectAccessId)
		from PrincipalObjectAccess POA
			where ((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 1) = 1
			and POA.PrincipalTypeCode = 9	-- just team
		group by PrincipalId, ObjectTypeCode
		having count(PrincipalObjectAccessId) > @minimumCount;

	merge @POASnapshotData as target
		using (select s.SystemUserId, p.ObjectTypeCode, sum(p.CountRows) as TeamShareCount 
				from @POAValues p
				join SystemUserPrincipals s
					on p.TeamId = s.PrincipalId
				group by s.SystemUserId, p.ObjectTypeCode) as Source
		on Source.SystemUserId = target.PrincipalId 
		and Source.ObjectTypeCode = target.ObjectTypeCode
			when MATCHED then
				update set target.count = Source.TeamShareCount + target.count
			when NOT MATCHED by target then
						insert (PrincipalId, ObjectTypeCode, count) 
						values (Source.SystemUserId, Source.ObjectTypeCode, Source.TeamShareCount);

	-- Delete anything that's not in @POASnapshotData
	delete from PrincipalObjectAccessReadSnapshot 
	where PrincipalObjectAccessReadSnapshotId in
		(select PrincipalObjectAccessReadSnapshotId 
		from PrincipalObjectAccessReadSnapshot poars
			left join @POASnapshotData psd 
				on poars.PrincipalId = psd.PrincipalId 
				and poars.ObjectTypeCode = psd.ObjectTypeCode
			where psd.ObjectTypeCode is null);

	-- Update rows that are in both
	update poars 
	set poars.count = psd.count
	from PrincipalObjectAccessReadSnapshot poars
		join @POASnapshotData psd 
		on poars.PrincipalId = psd.PrincipalId 
		and poars.ObjectTypeCode = psd.ObjectTypeCode;

	-- Insert any new rows
	insert into PrincipalObjectAccessReadSnapshot (PrincipalObjectAccessReadSnapshotId, PrincipalId, count, ObjectTypeCode)
		select newid(), psd.PrincipalId, psd.count, psd.ObjectTypeCode
		from @POASnapshotData psd
			left join PrincipalObjectAccessReadSnapshot poars 
				on poars.PrincipalId = psd.PrincipalId 
				and poars.ObjectTypeCode = psd.ObjectTypeCode
		where poars.PrincipalId is null;
	
	if @isHierarchicalSecurityModelEnabled = 1
		begin
		--Update Count for each Principal in POAReadSnapshot with shared count of user's in the hierarchy and child users count
			update PrincipalObjectAccessReadSnapshot  
			set count = ShareCount,ChildUserPrincipalsCount= childUserCount
				from (select sum(poars.count) as ShareCount, poars.PrincipalId as parentPrincipalId,
						case
							when 
								count(smp.SystemUserId) = 0 
							then 0 
							else 
								count(smp.SystemUserId) - 1
						end
						as childUserCount from PrincipalObjectAccessReadSnapshot poars
						left join SystemUserManagerMap smp 
							on poars.PrincipalId = smp.ParentSystemUserId
						group by poars.PrincipalId) poarsInner
						where PrincipalId = parentPrincipalId;

	--insert rows for managers which do not exist already
	--keep share count zero as no POA records are there , compute ChildUsers . 
		insert into PrincipalObjectAccessReadSnapshot (
			PrincipalObjectAccessReadSnapshotId, 
			PrincipalId, 
			count, 
			ObjectTypeCode,
			ChildUserPrincipalsCount)
			select pOuter.*
			from (select newid() POAReadSnapshotId,smp.ParentSystemUserId PrincipalId,0 Count,pInner.Objecttypecode ObjectTypeCode, count(smp.SystemUserId) childUsersCount
					from SystemUserManagerMap smp 
						right join (select distinct ObjectTypeCode from PrincipalObjectAccessReadSnapshot) pInner
							on pInner.ObjectTypeCode != 0
						where smp.ParentSystemUserId is not null
						group by smp.ParentSystemUserId,pInner.ObjectTypeCode
						having count(smp.SystemUserId) > 1) pOuter -- do not consider the self-referential row.
						left join PrincipalObjectAccessReadSnapshot poars 
						on poars.PrincipalId = pOuter.PrincipalId 
						where poars.PrincipalId is null;

		--update TeamPrincipalCount for all users and users in hierarchy
		update PrincipalObjectAccessReadSnapshot  
		set TeamPrincipalsCount = teamCount
		from (select count(pem.PrincipalId) as teamCount, poars.PrincipalId as parentPrincipalId
				from PrincipalEntityMap pem 
				inner join SystemUserPrincipals sup 
					on sup.PrincipalId = pem.PrincipalId 
				inner join SystemUserManagerMap smp 
					on smp.SystemUserId = sup.SystemUserId 
				inner join PrincipalObjectAccessReadSnapshot poars 
					on poars.PrincipalId = smp.ParentSystemUserId 
				group by poars.PrincipalId) poarsInner
		where PrincipalId = parentPrincipalId;
	end;
	--drop table #POASnapshotData;
end;