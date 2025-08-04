SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


/*
    This table value function retrieves all roles and parent root roles of those roles 
    for the specified system user and the teams that the user is member of.
*/


CREATE FUNCTION [dbo].[fn_RetrieveAllRoles](
    @systemUserId AS uniqueidentifier)
RETURNS @retRoles TABLE (
    RoleId uniqueidentifier PRIMARY KEY CLUSTERED,
    ParentRootRoleId uniqueidentifier)
AS
BEGIN;
    INSERT INTO @retRoles
    SELECT sur.roleId,
           r.parentRootRoleId
    FROM SystemUserRoles sur
         INNER JOIN [Role] r
             ON r.roleId = sur.RoleId
    WHERE sur.SystemUserId = @systemUserId
    UNION
        SELECT tr.roleId,
               r.ParentRootRoleId
        FROM TeamRoles tr
             INNER JOIN TeamMembership tm
                 ON tr.TeamId = tm.TeamId
             INNER JOIN [Role] r
                 ON tr.RoleId = r.RoleId
        WHERE tm.SystemUserId = @systemUserId;

    RETURN;
END;
GO
