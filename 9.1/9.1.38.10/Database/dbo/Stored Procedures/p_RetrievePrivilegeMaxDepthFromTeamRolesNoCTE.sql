
create procedure [dbo].[p_RetrievePrivilegeMaxDepthFromTeamRolesNoCTE](
    @userId uniqueidentifier)
as;
begin;
    set nocount on;
    --This version of stored procedure is to reduce the chance SQL pick TeamRole and Role Join first, 
    -- then Index scan on TeamMembership
    declare @ids EntityIdCollection;
    insert into @ids 
    select distinct r.ParentRootRoleId
    from Role r
    where r.RoleId in 
        (
            Select tr.RoleId
            from TeamRoles tr
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
         inner join @ids r
             on r.Id = rp.RoleId
         inner join Privilege p
             on p.PrivilegeId = rp.PrivilegeId
    group by p.PrivilegeId,
             p.IsDisabledWhenIntegrated,
             p.AccessRight
    order by p.PrivilegeId;
end;