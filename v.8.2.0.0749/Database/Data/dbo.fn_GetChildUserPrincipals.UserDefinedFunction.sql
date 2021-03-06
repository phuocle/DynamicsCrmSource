USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetChildUserPrincipals]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
