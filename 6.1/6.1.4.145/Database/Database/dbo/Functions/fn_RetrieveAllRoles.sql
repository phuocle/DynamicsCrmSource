

/*
	This table value function retrieves all roles and parent root roles of those roles 
	for the specified system user and the teams that the user is member of.
*/


CREATE function [dbo].[fn_RetrieveAllRoles](@systemUserId as uniqueidentifier)
RETURNS @retRoles TABLE
(
 RoleId uniqueidentifier primary key clustered, ParentRootRoleId uniqueidentifier
)

as
BEGIN
	INSERT INTO @retRoles 
	SELECT sur.roleId, r.parentRootRoleId 
	FROM SystemUserRoles sur 
	INNER JOIN [Role] r ON r.roleId = sur.RoleId 
	WHERE sur.SystemUserId = @systemUserId

	UNION

	SELECT tr.roleId, r.ParentRootRoleId FROM TeamRoles tr 
	INNER JOIN TeamMembership tm ON tr.TeamId = tm.TeamId
	INNER JOIN [Role] r on tr.RoleId = r.RoleId
	WHERE tm.SystemUserId = @systemUserId

	RETURN
END