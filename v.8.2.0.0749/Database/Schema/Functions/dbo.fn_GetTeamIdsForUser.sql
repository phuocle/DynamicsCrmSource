SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
