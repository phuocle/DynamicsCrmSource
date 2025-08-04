

--
-- report view for systemuserprofiles
--
create view dbo.[FilteredSystemUserProfiles] (
    [fieldsecurityprofileid],
    [systemuserid],
    [systemuserprofileid],
    [versionnumber]
) with view_metadata as
select
    [SystemUserProfiles].[FieldSecurityProfileId],
    [SystemUserProfiles].[SystemUserId],
    [SystemUserProfiles].[SystemUserProfileId],
    [SystemUserProfiles].[VersionNumber]
from SystemUserProfiles

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSystemUserProfiles] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSystemUserProfiles] TO [CRMReaderRole]
    AS [dbo];

