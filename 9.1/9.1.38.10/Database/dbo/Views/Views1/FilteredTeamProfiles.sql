

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
    ON OBJECT::[dbo].[FilteredTeamProfiles] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamProfiles] TO [CRMReaderRole]
    AS [dbo];

