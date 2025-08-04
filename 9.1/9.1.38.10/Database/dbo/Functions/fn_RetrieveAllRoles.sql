

/*
    This table value function retrieves all roles and parent root roles of those roles 
    for the specified system user and the teams that the user is member of.
*/

CREATE FUNCTION [dbo].[fn_RetrieveAllRoles](
    @systemUserId AS uniqueidentifier)
returns Table
As
Return
(
    SELECT sur.roleId as RoleId,
           r.parentRootRoleId as ParentRootRoleId
    FROM SystemUserRoles sur
         INNER JOIN [Role] r
             ON r.roleId = sur.RoleId
    WHERE sur.SystemUserId = @systemUserId
    UNION
        SELECT tr.roleId as RoleId,
               r.ParentRootRoleId as ParentRootRoleId
        FROM TeamRoles tr
             INNER JOIN TeamMembership tm
                 ON tr.TeamId = tm.TeamId
             INNER JOIN [Role] r
                 ON tr.RoleId = r.RoleId
        WHERE tm.SystemUserId = @systemUserId
)
