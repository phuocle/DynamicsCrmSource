
 
-- This stored procedure reinit PrincipalEntityMap for given users with inherited basic depth roleprivileges from team roles
-- Use views for Privilege, PrivilegeObjectTypeCode, RolePrivileges and Role because they are solution aware entities.
 
CREATE     procedure dbo.p_PrincipalEntityMapReinitForUsersWithInheritance(@principalIds EntityIdCollection READONLY) as
begin
SET NOCOUNT ON
 
-- Define and Set constants
declare @BASIC_MASK int  = 1 -- PRIVILEGE_DEPTH_MASK.BASIC_MASK
declare @UserOwnedMask int = 1 -- OwnerShipTypes.UserOwned
declare @ReadAccessRight int = 1 -- AccessRights.ReadAccess
declare @OtcPrincipalEntityMap int = 41 -- ObjectTypeCode 41
 
-- Use in memory tables because PrincipalEntityMap is only for userowned entities (~hundred)
declare @Old table(ObjectTypeCode int, PrincipalId uniqueidentifier, primary key clustered (ObjectTypeCode, PrincipalId))
declare @New table(ObjectTypeCode int, PrincipalId uniqueidentifier, primary key clustered (ObjectTypeCode, PrincipalId))
 
declare     @CountInNewSet int
        ,@CountInOldSet int
        ,@CountInserted int
        ,@CountDeleted int = 0
 
-- Populate Old set 
insert into @Old(ObjectTypeCode, PrincipalId) 
    select pem.ObjectTypeCode, pem.PrincipalId from PrincipalEntityMap pem
    join @principalIds p on pem.PrincipalId = p.id
    order by ObjectTypeCode
 
select @CountInOldSet = @@ROWCOUNT
 
-- Populate New set
-- Basic read privileges from user explicit roles
insert into @New(ObjectTypeCode, PrincipalId)
    select distinct potc.ObjectTypeCode as ObjectTypeCode, pr.id from PrivilegeObjectTypeCodeView potc
        join Privilege p on p.PrivilegeId = potc.PrivilegeId
        join RolePrivileges rp on rp.PrivilegeId = p.PrivilegeId
        join Role r on r.ParentRootRoleId = rp.RoleId
        join SystemUserRoles sur on sur.RoleId = r.RoleId
        --  Join with EntityView is required to eleminate 'child' unowned entities with logical owner* attributes. Example is CustomerAddress
        join EntityView e on e.ObjectTypeCode = potc.ObjectTypeCode and e.OwnershipTypeMask = @UserOwnedMask
        join @principalIds pr on pr.id = sur.SystemUserId
    where p.AccessRight = @ReadAccessRight
        and (rp.PrivilegeDepthMask = @BASIC_MASK)
    union  -- inherited read privileges with basic depth from implicit inherited team roles
    select distinct potc.ObjectTypeCode as ObjectTypeCode, pr.id from PrivilegeObjectTypeCodeView potc
        join Privilege p on p.PrivilegeId = potc.PrivilegeId
        join RolePrivileges rp on rp.PrivilegeId = p.PrivilegeId
        join Role r on r.ParentRootRoleId = rp.RoleId
             and r.IsInherited = 1 --  role inheritance property
        join TeamRoles tr on tr.RoleId = r.RoleId
        join TeamMembership tm on tm.TeamId = tr.TeamId
        --  Join with EntityView is required to eleminate 'child' unowned entities with logical owner* attributes. Example is CustomerAddress
        join EntityView e on e.ObjectTypeCode = potc.ObjectTypeCode and e.OwnershipTypeMask = @UserOwnedMask
        join @principalIds pr on pr.id = tm.SystemUserId
    where p.AccessRight = @ReadAccessRight
        and (rp.PrivilegeDepthMask = @BASIC_MASK)
    order by ObjectTypeCode option (recompile)
 
select @CountInNewSet=@@ROWCOUNT
 
-- Insert added      
insert PrincipalEntityMap (PrincipalId, ObjectTypeCode)
    select PrincipalId, ObjectTypeCode from @New
    Except
    select PrincipalId, ObjectTypeCode from @Old option (recompile)
 
select @CountInserted=@@ROWCOUNT
 
-- if OldSet == NewSet do not execute delete
if (0<>@CountInserted or @CountInNewSet<>@CountInOldSet)
begin
    -- Delete removed with tracking deleted for offline sync
    delete PrincipalEntityMap 
            OUTPUT  DELETED.PrincipalEntityMapId, @OtcPrincipalEntityMap 
            into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
        from PrincipalEntityMap prm
        join
        (
            select PrincipalId, ObjectTypeCode from @Old
            Except
            select PrincipalId, ObjectTypeCode from @New
        ) deletedPrm
        on prm.PrincipalId = deletedPrm.PrincipalId and prm.ObjectTypeCode = deletedPrm.ObjectTypeCode option (recompile)
 
        select @CountDeleted = @@ROWCOUNT
end
 
--  Returns counts for telemetry logging from caller
select @CountInOldSet as CountInOldSet, @CountInNewSet as CountInNewSet, @CountInserted as CountInserted, @CountDeleted as CountDeleted
end
 