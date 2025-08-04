

--
-- report view for teammembership
--
create view dbo.[FilteredTeamMembership] (
    [systemuserid],
    [teamid],
    [teammembershipid],
    [versionnumber]
) with view_metadata as
select
    [TeamMembership].[SystemUserId],
    [TeamMembership].[TeamId],
    [TeamMembership].[TeamMembershipId],
    [TeamMembership].[VersionNumber]
from TeamMembership

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamMembership] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamMembership] TO [CRMReaderRole]
    AS [dbo];

