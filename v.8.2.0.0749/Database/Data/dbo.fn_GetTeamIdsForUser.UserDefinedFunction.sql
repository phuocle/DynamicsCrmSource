USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetTeamIdsForUser]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_GetTeamIdsForUser] 
( 
	@systemUserId uniqueidentifier
) 
returns table 
as
return 
(
	select TeamId from TeamMembership where SystemUserId = @systemUserId
);
GO
