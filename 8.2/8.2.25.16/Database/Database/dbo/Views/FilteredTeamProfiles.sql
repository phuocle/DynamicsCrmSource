

--
-- report view for teamprofiles
--
create view dbo.[FilteredTeamProfiles] (
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamProfiles] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamProfiles] TO [CRMReaderRole]
    AS [dbo];

