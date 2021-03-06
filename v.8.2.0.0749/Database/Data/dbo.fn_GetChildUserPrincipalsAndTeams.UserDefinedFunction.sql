USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetChildUserPrincipalsAndTeams]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE FUNCTION [dbo].[fn_GetChildUserPrincipalsAndTeams]
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
