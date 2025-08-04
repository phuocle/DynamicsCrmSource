

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
    ON OBJECT::[dbo].[FilteredSystemUserProfiles] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSystemUserProfiles] TO [CRMReaderRole]
    AS [dbo];

