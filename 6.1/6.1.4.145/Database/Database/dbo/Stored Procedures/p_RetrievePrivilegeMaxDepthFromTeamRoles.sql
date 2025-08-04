

CREATE PROCEDURE [dbo].[p_RetrievePrivilegeMaxDepthFromTeamRoles](@userId uniqueidentifier) AS
BEGIN

	SET NOCOUNT ON

	-- Collect only unique ParentRootRoleId and do aggregation for those roles only
	-- (Inherited roles are readonly and reuse ParentRootRoleId RolePrivileges)
	;WITH UniqueRootRoles(ParentRootRoleId)
	as
	(
 	SELECT DISTINCT r.ParentRootRoleId 
	  FROM Role r with (nolock)
	       INNER JOIN TeamRoles tr with (nolock) on tr.RoleId = r.RoleId
	       INNER JOIN TeamMembership tm with (nolock) on tm.SystemUserId = @userId and tm.TeamId = tr.TeamId
	)

	-- Retrieve privilege information for all roles assigned to teams in which user has membership. 
	SELECT p.PrivilegeId, p.IsDisabledWhenIntegrated, p.AccessRight, potc.ObjectTypeCode, max(rp.PrivilegeDepthMask) PrivilegeDepthMask 
	  FROM RolePrivileges rp with (nolock)
	       INNER JOIN UniqueRootRoles r on r.ParentRootRoleId = rp.RoleId
	       INNER JOIN Privilege p on p.PrivilegeId = rp.PrivilegeId
	       INNER JOIN PrivilegeObjectTypeCodes potc on potc.PrivilegeId = p.PrivilegeId
	GROUP BY p.PrivilegeId, p.IsDisabledWhenIntegrated, p.AccessRight, potc.ObjectTypeCode
	ORDER BY p.PrivilegeId

END