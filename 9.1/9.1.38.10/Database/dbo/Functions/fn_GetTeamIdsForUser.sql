

-- https://dynamicscrm.visualstudio.com/OneCRM/_workitems/edit/1295203: replace multiple line TVF with inline TVF 
-- Benifit: Inline TVF work as "View", SQL server will expand inside TVF and optimize the SQL in whole
-- secondly, in Azure SQL, Table Variable usage is charged as customer IO quota, and will be throttled once IO exceeded threshhold
create function [dbo].[fn_GetTeamIdsForUser] 
( 
	@systemUserId uniqueidentifier
) 
returns Table
As
Return
(
	select TeamId as 'TeamId' from TeamMembership where SystemUserId = @systemUserId
)
GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetTeamIdsForUser] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetTeamIdsForUser] TO [CRMReaderRole]
    AS [dbo];

