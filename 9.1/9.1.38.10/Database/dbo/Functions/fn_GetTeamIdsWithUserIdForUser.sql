

-- https://dynamicscrm.visualstudio.com/OneCRM/_workitems/edit/1295203: replace multiple line TVF with inline TVF 
-- replace multiple line TVF with inline TVF
create function [dbo].[fn_GetTeamIdsWithUserIdForUser] 
( 
	@systemUserId uniqueidentifier
) 
returns Table
As
Return
(
	-- use 'union all' to avoid distinct of regular union because correct @systemUserId should not intersect with any teamid
	select TeamId as 'TeamIdOrUserId' from TeamMembership where SystemUserId = @systemUserId
	union all
	select @systemUserId  as 'TeamIdOrUserId'
)
GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetTeamIdsWithUserIdForUser] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetTeamIdsWithUserIdForUser] TO [CRMReaderRole]
    AS [dbo];

