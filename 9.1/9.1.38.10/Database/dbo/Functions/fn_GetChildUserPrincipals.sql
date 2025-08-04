


CREATE FUNCTION [dbo].[fn_GetChildUserPrincipals]
(
	@PrincipalId uniqueidentifier
)RETURNS TABLE 
AS
RETURN 
(
	select SystemUserId from [dbo].[SystemUserManagerMap]
	where ParentSystemUserId = @PrincipalId
)
GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetChildUserPrincipals] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetChildUserPrincipals] TO [CRMReaderRole]
    AS [dbo];

