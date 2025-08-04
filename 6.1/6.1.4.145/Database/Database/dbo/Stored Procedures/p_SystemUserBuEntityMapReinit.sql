

-- this stored procedure inits SystemUserBusinessUnitEntityMap for multiple users
-- If @UserIds are not passed in (null), then  UserIds are passed in caller populated temp table #SystemUsers
-- If parameter @ReadPrivilegesIdsPopulated is not null, then caller populated temp table #ReadPrivileges. Otherwise reinit will happen for all read privileges
CREATE     procedure [dbo].[p_SystemUserBuEntityMapReinit](@UserIds nvarchar(max), @DeletedRoleId uniqueidentifier = null, @ReadPrivilegesIdsPopulated bit = null) as
begin
SET NOCOUNT ON

-- Define and Set constants
declare @LOCAL_MASK int = 2 -- PRIVILEGE_DEPTH_MASK.LOCAL_MASK
declare @DEEP_MASK int = 4 -- PRIVILEGE_DEPTH_MASK.DEEP_MASK
declare @GLOBAL_MASK int = 8 -- PRIVILEGE_DEPTH_MASK.GLOBAL_MASK

declare @UserOwnedMask int = 1 -- OwnerShipTypes.UserOwned
declare @BusinessOwnedMask int = 4 -- OwnerShipTypes.BusinessOwned
declare @ReadAccessRight int = 1 -- AccessRights.ReadAccess
declare @OtcSystemUserBusinessUnitEntityMap int = 42 -- ObjectTypeCode 42

-- The logic is (for set of users and set of ReadPrivileges)
-- Populate Old set from table
-- Populate New set from all roles
-- Find and leave only rows for delete in Old set and delete them
-- Find and leave only new/updated rows in New set and insert them

-- use temp tables because total amount of rows in SystemUserBusinessUnitEntityMap table is O(B*U*E) 
--		where B - amount of BU; U - amount of systemUsers; E - amount of user owned + business owned entities.
--		Note: customization can add only user/org owned entities (no business owned entities).
-- Max estimates of rows for a user will be O(B*E)
if (@ReadPrivilegesIdsPopulated is null)
begin
    --  reinit for all read privileges
	create table #ReadPrivileges(PrivilegeId uniqueidentifier primary key clustered)	
	insert into  #ReadPrivileges(PrivilegeId) 
		select PrivilegeId from PrivilegeBase where PrivilegeBase.AccessRight = @ReadAccessRight 	
end

if (@UserIds is not null)
begin
create table #SystemUsers
(
	SystemUserId uniqueidentifier primary key clustered 
	,Type int not null default (8) -- user
)

insert into #SystemUsers(SystemUserId) select id from fn_GetGuidsFromString(@UserIds) 
--Create statistics, in big deployment could be a large number of users
create statistics systemusersstat on #SystemUsers(SystemUserId)
end
 
-- Populate Old set
create table #Old
(
	SystemUserBusinessUnitEntityMapId uniqueidentifier not null, -- for delete
	BusinessUnitId uniqueidentifier not null,
	SystemUserId uniqueidentifier not null, 
	ObjectTypeCode int not null, 
	ReadPrivilegeDepth int not null
	PRIMARY KEY CLUSTERED 
	(
		SystemUserId ASC,
		BusinessUnitId ASC,
		ObjectTypeCode
	)
)
insert into #Old(SystemUserBusinessUnitEntityMapId, BusinessUnitId, SystemUserId, ObjectTypeCode, ReadPrivilegeDepth ) 
	select SystemUserBusinessUnitEntityMapId, BusinessUnitId, SuBuMap.SystemUserId, SuBuMap.ObjectTypeCode, ReadPrivilegeDepth 
		from SystemUserBusinessUnitEntityMap as SuBuMap
	join #SystemUsers as su on su.SystemUserId = SuBuMap.SystemUserId
	join PrivilegeObjectTypeCodes potc on potc.ObjectTypeCode = SuBuMap.ObjectTypeCode
	join #ReadPrivileges pRecomp on pRecomp.PrivilegeId = potc.PrivilegeId

-- Populate New set
create table #New
(
	NewIdentityId int identity(1,1),
	BusinessUnitId uniqueidentifier not null,
	SystemUserId uniqueidentifier not null, 
	ObjectTypeCode int not null, 
	ReadPrivilegeDepth int not null
	 PRIMARY KEY CLUSTERED 
	(
		SystemUserId ASC,
		BusinessUnitId ASC,
		ObjectTypeCode 
	)
)

-- Get list of unique pair role/BU for a user into @roles
declare @roles table(
				RoleId uniqueidentifier not null,
				ParentRootRoleId uniqueidentifier not null,
				SystemUserId uniqueidentifier not null,
				BusinessUnitId uniqueidentifier not null
				PRIMARY KEY CLUSTERED 
				(
					ParentRootRoleId ASC, -- we do join on ParentRootRoleId
					RoleId ASC,
					SystemUserId ASC
				)
)

-- populate user roles
insert into @roles(RoleId, ParentRootRoleId, SystemUserId, BusinessUnitId) 
	select r.RoleId, r.ParentRootRoleId, sur.SystemUserId, r.BusinessUnitId 
	from Role r
		join SystemUserRoles sur on sur.RoleId = r.RoleId
		join #SystemUsers su on sur.SystemUserId = su.SystemUserId
	union  --  duplicate rows are removed by sql
-- populate user's teams roles
	select distinct r.RoleId, r.ParentRootRoleId, sup.SystemUserId, r.BusinessUnitId 
	from Role r
		join TeamRoles tr on tr.RoleId = r.RoleId
		join SystemUserPrincipals sup on sup.PrincipalId = tr.TeamId
		join #SystemUsers su on sup.SystemUserId = su.SystemUserId

-- Exclude deleted role from computation of #New set
if (@DeletedRoleId is not null)
  delete @roles where RoleId = @DeletedRoleId

-- ObjectTypeCodes for which user has global access
declare @globalOtc 
	table(ObjectTypeCode int,
	SystemUserId uniqueidentifier not null
	PRIMARY KEY CLUSTERED 
	(
		SystemUserId ASC,
		ObjectTypeCode ASC
	)
)
insert into @globalOtc (ObjectTypeCode, SystemUserId)
	select distinct potc.ObjectTypeCode, r.SystemUserId from PrivilegeObjectTypeCodes potc
				join  #ReadPrivileges p on p.PrivilegeId = potc.PrivilegeId
				join  RolePrivileges rp on rp.PrivilegeId = p.PrivilegeId
				join  @roles r on r.ParentRootRoleId = rp.RoleId
				join  EntityView e on e.ObjectTypeCode = potc.ObjectTypeCode
			where 
			  (rp.PrivilegeDepthMask = @GLOBAL_MASK)
			  and e.OwnershipTypeMask in (@UserOwnedMask, @BusinessOwnedMask)
			order by potc.ObjectTypeCode, r.SystemUserId

-- Handle local depth first
insert into #New( BusinessUnitId, SystemUserId, ObjectTypeCode, ReadPrivilegeDepth ) 
	select distinct r.BusinessUnitId, r.SystemUserId, potc.ObjectTypeCode, @LOCAL_MASK  
			from PrivilegeObjectTypeCodes potc
				join  #ReadPrivileges p on p.PrivilegeId = potc.PrivilegeId
				join  RolePrivileges rp on rp.PrivilegeId = p.PrivilegeId
				join  @roles r on r.ParentRootRoleId = rp.RoleId
				join  EntityView e on e.ObjectTypeCode = potc.ObjectTypeCode
			where 
			  (rp.PrivilegeDepthMask = @LOCAL_MASK)
			  and e.OwnershipTypeMask in (@UserOwnedMask, @BusinessOwnedMask)
			  and NOT EXISTS (select 1 from @globalOtc g where g.ObjectTypeCode = potc.ObjectTypeCode AND g.SystemUserId = r.SystemUserId)	

-- Handle DEEP depth in 2 stages
-- 1) Collect BU/Otc with deep read privilege
create table #Deep (
				BusinessUnitId uniqueidentifier not null,
				SystemUserId uniqueidentifier not null,
				ObjectTypeCode int not null
	PRIMARY KEY CLUSTERED 
	(
		SystemUserId ASC,
		BusinessUnitId ASC,
		ObjectTypeCode 
	)
)
insert into #Deep( BusinessUnitId, SystemUserId , ObjectTypeCode) 
	select distinct r.BusinessUnitId, r.SystemUserId, potc.ObjectTypeCode
			from PrivilegeObjectTypeCodes potc
				join  #ReadPrivileges p on p.PrivilegeId = potc.PrivilegeId
				join  RolePrivileges rp on rp.PrivilegeId = p.PrivilegeId
				join  @roles r on r.ParentRootRoleId = rp.RoleId
				join  EntityView e on e.ObjectTypeCode = potc.ObjectTypeCode
			where 
			  (rp.PrivilegeDepthMask = @DEEP_MASK)
			  and e.OwnershipTypeMask in (@UserOwnedMask, @BusinessOwnedMask)
			  and not exists (select * from @globalOtc g where g.ObjectTypeCode = potc.ObjectTypeCode AND g.SystemUserId = r.SystemUserId )	

-- 2) Foreach BU/Otc with deep privilege expand BU subtree
if (@@rowcount > 0)
begin
	declare @buId uniqueidentifier
	declare @suId uniqueidentifier
	declare @otc int
	declare c cursor local FORWARD_ONLY READ_ONLY for select BusinessUnitId, SystemUserId, ObjectTypeCode from #Deep
	open c
	fetch next from c into @buId, @suId, @otc
	while (@@fetch_status = 0)
	begin
		-- delete from #New to avoid PK violation (same BU/otc with local depth for example)
	    delete #New 
			where BusinessUnitId in (select SubBusinessId from BusinessUnitMap where BusinessId = @buId)
				and ObjectTypeCode = @otc and SystemUserId = @suId

		-- insert into #New
		insert into #New( BusinessUnitId, SystemUserId, ObjectTypeCode, ReadPrivilegeDepth ) 
			select SubBusinessId, @suId, @otc, @DEEP_MASK from BusinessUnitMap 
				where BusinessId = @buId

		fetch next from c into @buId, @suId, @otc

	end -- c cursor
	close c
	deallocate c
end

--  Delete rows from #Old set which are present in #New set
--		and collect id of identical rows from #New in @ids table
declare @ids table (NewIdentityId int not null)
delete #Old
	OUTPUT  n.NewIdentityId  into @ids
from #Old o
	join #New n on (n.BusinessUnitId = o.BusinessUnitId and 
					n.SystemUserId = o.SystemUserId and
					n.ObjectTypeCode = o.ObjectTypeCode and
					n.ReadPrivilegeDepth = o.ReadPrivilegeDepth)

if (@@rowcount>0) -- if identical rows were found
begin
	-- Remove identical rows from #New
	delete from #New 
	where NewIdentityId in (select NewIdentityId from @ids) 
end


-- Delete in SystemUserBusinessUnitEntityMap first (to avoid unique contraint violation) 
--	and track deleted for offline sync
delete SystemUserBusinessUnitEntityMap
		OUTPUT  DELETED.SystemUserBusinessUnitEntityMapId, @OtcSystemUserBusinessUnitEntityMap
		into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
	where SystemUserBusinessUnitEntityMapId in 
		(select SystemUserBusinessUnitEntityMapId from #Old)
	
-- Insert new/updated rows (only those rows are left in #New here)
insert into SystemUserBusinessUnitEntityMap
	(SystemUserId, BusinessUnitId, ObjectTypeCode, ReadPrivilegeDepth)
	select SystemUserId,
			BusinessUnitId, ObjectTypeCode, ReadPrivilegeDepth from #New 

drop table #Deep
drop table #New
drop table #Old
if (@UserIds is not null)
	drop table #SystemUsers
if (@ReadPrivilegesIdsPopulated is null)
	drop table #ReadPrivileges
end