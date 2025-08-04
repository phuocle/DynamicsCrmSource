
-- BASIC ASSUMPTION OF THIS STORED PROCEDURE
-- 1. FCB is on  2. Always check if IsInherited is 1 in C# before calling this stored procedure.
-- This stored procedure will not check it!

-- This sp should be called when 
--    FCB is ON and inherited role @roleId is associated or disassociated with team @teamId.
 
-- The stored procedure add/delete rows to/from PrincipalEntityMap for a given inherited role R for all users Us 
-- implicitly associated with role R from given team T membership. 
-- Having entries in PrincipalEntityMap for all users team members is required for RetrieveMultiple to returns rows owned by users. 
 
-- Use views for Privilege, PrivilegeObjectTypeCode, RolePrivileges and Role because they are solution aware entities.
-- Parameter: @roleWasAdded = 1 or 0 when role is associated or disassociated with team.
 
-- Test Setup:  3 users - U1, U2 and U3; 3 roles - R, R1, R2. PEM - PrincipalEntityMap table
-- Role R has read privileges P1, P2, P3 with basic depth, P4 with local depth, P5 with deep depth and P6 with global depth
-- Team T has users U1, U2, U3. T is not associated with any role.
-- U1 has a role R1 with P1 basic, P2 local, P3 deep. U1 should have a row in PEM {U1, P1otc} from explicit role R1 - 1 rows
-- U2 has a role R2 with P4 basic. U2 should have a row in PEM {U2, P4otc} from explicit role R2 - 1 row
-- U3 has a role R. U3 should have rows in PEM {{U3, P1otc}, {U3, P2otc}, {U3, P3otc}} from explicit role R - 3 rows
--  Total: 5 rows in PEM for U1, U2, U3
 
-- Scenarious sequencial execution:
--  A) R was associated with T - call p_PrincipalEntityMapUpdateForInheritedRoleAndTeam(@roleId=R, @teamId=T, @roleWasAdded=1)
--     Verify: U1 should have rows in PEM: {U1, P1otc} from explicit role R1 and implicit role R, {U1, P2otc} and {U1, P3otc} from implicit role R - 3 rows
--             U2 should have rows in PEM: {U2, P4otc} from explicit role R2, {U2, P1otc}, {U2, P2otc} and {U2, P3otc} from implicit role R   - 4 rows
--             U3 should have same rows in PEM: {U3, P1otc}, {U3, P2otc} and {U3, P3otc} from explicit and implicit role R - 3 rows
--  Total: 10 rows 
 
--  B) R was disassociated with T - call p_PrincipalEntityMapUpdateForInheritedRoleAndTeam(@roleId=R, @teamId=T, @roleWasAdded=0)
--     Verify: same set of rows in PEM as after setup
 
CREATE     procedure dbo.p_PrincipalEntityMapUpdateForInheritedRoleAndTeam(@roleId uniqueidentifier, @teamId uniqueidentifier, @roleWasAdded bit) as
begin
    SET NOCOUNT ON
 
    -- find root role
    declare @parentRootRoleId uniqueidentifier  --  only parentRootRole privileges are present in RolePrivileges
    select @parentRootRoleId = r.ParentRootRoleId from Role r where r.RoleId = @roleId
    if (@@ROWCOUNT = 0)
        return  -- role was not found
 
    -- collect all users Us members of given team T
   declare @teamUsers table(SystemUserId uniqueidentifier primary key clustered)
   insert into @teamUsers(SystemUserId) select tm.SystemUserId from TeamMembership tm where tm.TeamId = @teamId
   if (@@ROWCOUNT = 0)
      return   --  nothing to do
 
    -- Define and Set constants
    declare @BASIC_MASK int = 1 -- PRIVILEGE_DEPTH_MASK.BASIC_MASK
    declare @UserOwnedMask int = 1 -- OwnerShipTypes.UserOwned
    declare @ReadAccessRight int = 1 -- AccessRights.ReadAccess
    declare @OtcPrincipalEntityMap int = 41 -- ObjectTypeCode 41 for PrincipalEntityMap entity
 
    -- Find all read role privileges Rs with basic depth of given role R with objectTypeCode
    --  Note: PrivilegeId can be shared by several entities. Example - activities have same set of privileges but different OTC
    declare @readPrivileges table(PrivilegeId uniqueidentifier, ObjectTypeCode int primary key clustered) 
    insert into @readPrivileges(PrivilegeId, ObjectTypeCode) 
        select p.PrivilegeId, potc.ObjectTypeCode from PrivilegeObjectTypeCodeView potc
            join Privilege p on p.PrivilegeId = potc.PrivilegeId
            join RolePrivileges rp on rp.PrivilegeId = p.PrivilegeId
            join Role r on r.RoleId = rp.RoleId
            --  Join with EntityView is required to eleminate 'child' unowned entities with logical owner* attributes. Example is CustomerAddress
            join EntityView e on e.ObjectTypeCode = potc.ObjectTypeCode and e.OwnershipTypeMask = @UserOwnedMask
        where r.RoleId = @parentRootRoleId
           and p.AccessRight = @ReadAccessRight
           and rp.PrivilegeDepthMask = @BASIC_MASK             
 
    if (@@ROWCOUNT = 0)
        return  -- no inherited read privileges were found
 
    if (@roleWasAdded = 1)
    begin
        -- add not existing rows into PrincipalEntityMap
         insert into PrincipalEntityMap (PrincipalId, ObjectTypeCode) 
           select u.SystemUserId, rp.ObjectTypeCode from @teamUsers u, @readPrivileges rp
             where not exists (select PrincipalId, ObjectTypeCode from PrincipalEntityMap pem 
                                    where pem.PrincipalId = u.SystemUserId and pem.ObjectTypeCode = rp.ObjectTypeCode
                              )
    end 
    else  --  role was removed from team
    begin
        -- Other possible implementations without @rowsToDelete table: using CTE or derived query set in one atomic delete statement
        declare @rowsToDelete table(PrincipalId uniqueidentifier, ObjectTypeCode int)
        insert into @rowsToDelete(PrincipalId, ObjectTypeCode) 
          --  all possible inherited read privileges    
          select u.SystemUserId as PrincipalId, ObjectTypeCode from @teamUsers u, @readPrivileges
          except
            --  User's basic depth rows from explicit roles
            select distinct pr.SystemUserId, potc.ObjectTypeCode from PrivilegeObjectTypeCodeView potc
                join Privilege p on p.PrivilegeId = potc.PrivilegeId
                join RolePrivileges rp on rp.PrivilegeId = p.PrivilegeId
                join Role r on r.ParentRootRoleId = rp.RoleId
                join SystemUserRoles sur on sur.RoleId = r.RoleId
                --  Join with EntityView is required to eleminate 'child' unowned entities with logical owner* attributes. Example is CustomerAddress
                join EntityView e on e.ObjectTypeCode = potc.ObjectTypeCode and e.OwnershipTypeMask = @UserOwnedMask
                join @teamUsers pr on pr.SystemUserId = sur.SystemUserId
            where p.AccessRight = @ReadAccessRight
                and (rp.PrivilegeDepthMask = @BASIC_MASK) option (recompile)
 
        if (@@ROWCOUNT = 0)
            return  -- no rows to delete were found
 
        delete PrincipalEntityMap 
            OUTPUT  DELETED.PrincipalEntityMapId, @OtcPrincipalEntityMap 
            into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)    
        from PrincipalEntityMap pem
            join @rowsToDelete rd on rd.PrincipalId = pem.PrincipalId and rd.ObjectTypeCode = pem.ObjectTypeCode 
    end
end
 