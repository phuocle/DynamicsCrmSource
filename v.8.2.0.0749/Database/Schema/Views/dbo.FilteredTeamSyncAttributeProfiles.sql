SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for teamsyncattributemappingprofiles
--
create view [dbo].[FilteredTeamSyncAttributeProfiles] (
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
GRANT SELECT ON  [dbo].[FilteredTeamSyncAttributeProfiles] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredTeamSyncAttributeProfiles] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
