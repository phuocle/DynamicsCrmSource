SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



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
