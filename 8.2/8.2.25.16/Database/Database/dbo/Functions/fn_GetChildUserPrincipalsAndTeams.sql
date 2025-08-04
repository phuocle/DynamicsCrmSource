
CREATE FUNCTION dbo.fn_GetChildUserPrincipalsAndTeams
(
	@PrincipalId uniqueidentifier
)RETURNS TABLE 
AS
RETURN 
(															 
	select SystemUserId from [dbo].[SystemUserManagerMap]
	where ParentSystemUserId = @PrincipalId
	UNION ALL
	select TeamId from  [dbo].[TeamMembership] t
	where t.SystemUserId in (
		select SystemUserId from [dbo].[SystemUserManagerMap]
		where ParentSystemUserId = @PrincipalId
	)
)