SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for teamprofiles
--
create view [dbo].[FilteredTeamProfiles] (
    [fieldsecurityprofileid],
    [teamid],
    [teamprofileid],
    [versionnumber]
) with view_metadata as
select
    [TeamProfiles].[FieldSecurityProfileId],
    [TeamProfiles].[TeamId],
    [TeamProfiles].[TeamProfileId],
    [TeamProfiles].[VersionNumber]
from TeamProfiles
GO
GRANT SELECT ON  [dbo].[FilteredTeamProfiles] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredTeamProfiles] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
