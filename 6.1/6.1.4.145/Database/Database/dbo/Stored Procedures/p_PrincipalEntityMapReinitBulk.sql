

-- This stored procedure reinits PrincipalEntityMap for principals (owners): users and teams.
-- Parameters passed in are in two temp tables
--   #SystemUsers(SystemUserId uniqueidentifier, Type int) 
--   #ReadPrivileges(PrivilegeId uniqueidentifier primary key clustered)
CREATE     procedure [dbo].[p_PrincipalEntityMapReinitBulk] (@DeletedRoleId uniqueidentifier = null)  as
begin
SET NOCOUNT ON

-- Define and Set constants
declare @User int = 8
declare @Team int = 9
declare @BASIC_MASK int = 1 -- PRIVILEGE_DEPTH_MASK.BASIC_MASK
declare @UserOwnedMask int = 1 -- OwnerShipTypes.UserOwned
declare @ReadPrivilegesOtcPrincipalEntityMap int = 41 -- ObjectTypeCode 41
declare @NotExistingRoleId uniqueidentifier = '00000000-0000-0000-0000-000000000000'   -- Not existing roleId to be excluded from computation of #New set

if (@DeletedRoleId is null)
	set @DeletedRoleId = @NotExistingRoleId 

create table #Old (ObjectTypeCode int not null, PrincipalId uniqueidentifier not null)
create table #New (ObjectTypeCode int not null, PrincipalId uniqueidentifier not null)

CREATE UNIQUE CLUSTERED INDEX [cndx_PrimaryKey_OldPrincipalEntityMap] on #Old
(
	PrincipalId,
	ObjectTypeCode
)

CREATE UNIQUE CLUSTERED INDEX [cndx_PrimaryKey_NewPrincipalEntityMap] on #New
(
	PrincipalId,
	ObjectTypeCode
)

-- Populate Old set for given Read privileges and principals
insert into #Old(ObjectTypeCode, PrincipalId) 
	select pem.ObjectTypeCode, pem.PrincipalId 
	from PrincipalEntityMap pem
	join PrivilegeObjectTypeCodes potc on potc.ObjectTypeCode = pem.ObjectTypeCode
	join PrivilegeBase p on p.PrivilegeId = potc.PrivilegeId
	join #ReadPrivileges rp on rp.PrivilegeId = p.PrivilegeId
	join #SystemUsers su on su.SystemUserId = pem.PrincipalId

-- Optimization for a case if no users are passed in
if (exists(select top(1) 1 from #SystemUsers where Type = @User))
begin
-- Populate New set for given Read privileges and principals
insert into #New(ObjectTypeCode, PrincipalId)
	select distinct potc.ObjectTypeCode, su.SystemUserId
	from PrivilegeObjectTypeCodes potc    
		join PrivilegeBase p on p.PrivilegeId = potc.PrivilegeId
		join RolePrivileges rp on rp.PrivilegeId = p.PrivilegeId
		join Role r on r.ParentRootRoleId = rp.RoleId
		join SystemUserRoles sur on sur.RoleId = r.RoleId
		join EntityView e on e.ObjectTypeCode = potc.ObjectTypeCode
		join #ReadPrivileges readp on readp.PrivilegeId = p.PrivilegeId
		join #SystemUsers su on su.SystemUserId = sur.SystemUserId
		where (rp.PrivilegeDepthMask = @BASIC_MASK)
			and e.OwnershipTypeMask = @UserOwnedMask
			and r.ParentRootRoleId <> @DeletedRoleId   -- this condition excludes all inherited roles
end

-- Optimization for a case if no teams are passed in
if (exists(select top(1) 1 from #SystemUsers where Type = @Team))
begin
-- Populate New set for teams
insert into #New(ObjectTypeCode, PrincipalId)
	select distinct potc.ObjectTypeCode, su.SystemUserId 
	from PrivilegeObjectTypeCodes potc
		join PrivilegeBase p on p.PrivilegeId = potc.PrivilegeId
		join RolePrivileges rp on rp.PrivilegeId = p.PrivilegeId
		join Role r on r.ParentRootRoleId = rp.RoleId
		join TeamRoles tr on tr.RoleId = r.RoleId
		join EntityView e on e.ObjectTypeCode = potc.ObjectTypeCode
		join #ReadPrivileges readp on readp.PrivilegeId = p.PrivilegeId
		join #SystemUsers su on su.SystemUserId = tr.TeamId
		where (rp.PrivilegeDepthMask = @BASIC_MASK)
			and e.OwnershipTypeMask = @UserOwnedMask
			and r.ParentRootRoleId <> @DeletedRoleId   -- this condition excludes all inherited roles
end

-- Delete removed with tracking deleted for offline sync
delete PrincipalEntityMap
		OUTPUT  DELETED.PrincipalEntityMapId, @ReadPrivilegesOtcPrincipalEntityMap 
		into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
from PrincipalEntityMap pem
     join 
(  
	select ObjectTypeCode, PrincipalId from #Old
	EXCEPT
	select ObjectTypeCode, PrincipalId from #New
) as deletedRows 
		on deletedRows.PrincipalId = pem.PrincipalId and deletedRows.ObjectTypeCode=pem.ObjectTypeCode

-- Do insert only when role is not deleted: in delete role scenario nothing can be added
if (@DeletedRoleId = @NotExistingRoleId) 
begin
-- Insert added
insert PrincipalEntityMap (ObjectTypeCode, PrincipalId)
(
    select ObjectTypeCode, PrincipalId from #New 
	EXCEPT
	select ObjectTypeCode, PrincipalId from #Old
)
end

--CleanUp:
drop table #Old
drop table #New

end
