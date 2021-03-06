USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredTeamSyncAttributeProfiles]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
