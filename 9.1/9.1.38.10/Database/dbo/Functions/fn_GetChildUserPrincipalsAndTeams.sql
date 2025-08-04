
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
GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetChildUserPrincipalsAndTeams] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetChildUserPrincipalsAndTeams] TO [CRMReaderRole]
    AS [dbo];

