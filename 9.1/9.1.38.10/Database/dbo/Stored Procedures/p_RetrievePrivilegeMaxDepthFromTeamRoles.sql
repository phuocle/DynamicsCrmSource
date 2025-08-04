

create procedure [dbo].[p_RetrievePrivilegeMaxDepthFromTeamRoles](
    @userId uniqueidentifier)
as;
begin;
    set nocount on;

    -- Collect only unique ParentRootRoleId and do aggregation for those roles only
    -- (Inherited roles are readonly and reuse ParentRootRoleId RolePrivileges)
    with UniqueRootRoles (ParentRootRoleId)
    as
    (
        select distinct r.ParentRootRoleId
        from Role r
           inner join TeamRoles tr
               on tr.RoleId = r.RoleId
           inner join TeamMembership tm
               on tm.TeamId = tr.TeamId
        where tm.SystemUserId = @userId
    )
    -- Retrieve privilege information for all roles assigned to teams in which user has membership. 
    select p.PrivilegeId,
           p.IsDisabledWhenIntegrated,
           p.AccessRight,
           max(rp.PrivilegeDepthMask) as PrivilegeDepthMask 
    from RolePrivileges rp
         inner join UniqueRootRoles r
             on r.ParentRootRoleId = rp.RoleId
         inner join Privilege p
             on p.PrivilegeId = rp.PrivilegeId
    group by p.PrivilegeId,
             p.IsDisabledWhenIntegrated,
             p.AccessRight
    order by p.PrivilegeId;
end;