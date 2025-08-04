

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
    ON OBJECT::[dbo].[FilteredTeamSyncAttributeProfiles] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamSyncAttributeProfiles] TO [CRMReaderRole]
    AS [dbo];

