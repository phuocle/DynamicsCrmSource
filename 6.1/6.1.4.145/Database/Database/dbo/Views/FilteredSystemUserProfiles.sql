

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
    ON OBJECT::[dbo].[FilteredSystemUserProfiles] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSystemUserProfiles] TO [CRMReaderRole]
    AS [dbo];

