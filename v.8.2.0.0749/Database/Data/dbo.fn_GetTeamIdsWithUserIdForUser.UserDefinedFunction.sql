USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetTeamIdsWithUserIdForUser]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- use 'union all' to avoid distinct of regular union because correct @systemUserId should not intersect with any teamid
create function [dbo].[fn_GetTeamIdsWithUserIdForUser] 
( 
	@systemUserId uniqueidentifier
) 
returns table 
as
return 
(
	select TeamId as 'TeamIdOrUserId' from TeamMembership where SystemUserId = @systemUserId
	union all
	select @systemUserId  as 'TeamIdOrUserId'
);
GO
