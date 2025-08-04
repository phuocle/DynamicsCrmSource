

CREATE function [dbo].[fn_GetTeamIdsForUser] 
( 
	@systemUserId uniqueidentifier
) 
RETURNS TABLE 
AS
RETURN 
(
	SELECT TeamId FROM TeamMembership WHERE SystemUserId = @systemUserId
)