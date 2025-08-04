

--
-- report view for teamsyncattributemappingprofiles
--
create view dbo.[FilteredTeamSyncAttributeProfiles] (
    [syncattributemappingprofileid],
    [teamid],
    [teamsyncattributemappingprofileid],
    [versionnumber]
) with view_metadata as
select
    [TeamSyncAttributeMappingProfiles].[SyncAttributeMappingProfileId],
    [TeamSyncAttributeMappingProfiles].[TeamId],
    [TeamSyncAttributeMappingProfiles].[TeamSyncAttributeMappingProfileId],
    [TeamSyncAttributeMappingProfiles].[VersionNumber]
from TeamSyncAttributeMappingProfiles

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamSyncAttributeProfiles] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamSyncAttributeProfiles] TO [CRMReaderRole]
    AS [dbo];

