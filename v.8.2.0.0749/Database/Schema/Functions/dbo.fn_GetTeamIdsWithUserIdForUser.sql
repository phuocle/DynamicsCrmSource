SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
