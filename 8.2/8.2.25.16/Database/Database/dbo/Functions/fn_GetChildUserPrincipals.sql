


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