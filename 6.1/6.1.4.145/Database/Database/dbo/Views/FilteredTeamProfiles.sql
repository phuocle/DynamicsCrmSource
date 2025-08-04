

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
    ON OBJECT::[dbo].[FilteredTeamProfiles] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamProfiles] TO [CRMReaderRole]
    AS [dbo];

