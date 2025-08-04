

-- use 'union all' to avoid distinct of regular union because correct @systemUserId should not intersect with any teamid
CREATE function [dbo].[fn_GetTeamIdsWithUserIdForUser] 
( 
	@systemUserId uniqueidentifier
) 
RETURNS TABLE 
AS
RETURN 
(
	SELECT TeamId as 'TeamIdOrUserId' FROM TeamMembership WHERE SystemUserId = @systemUserId
	union all
	SELECT @systemUserId  as 'TeamIdOrUserId'
)