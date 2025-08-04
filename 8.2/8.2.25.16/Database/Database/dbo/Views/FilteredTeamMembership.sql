

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
    ON OBJECT::[dbo].[FilteredTeamMembership] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamMembership] TO [CRMReaderRole]
    AS [dbo];

