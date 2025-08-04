

--
-- report view for systemuserroles
--
create view dbo.[FilteredSystemUserRoles] (
    [roleid],
    [systemuserid],
    [systemuserroleid],
    [versionnumber]
) with view_metadata as
select
    [SystemUserRoles].[RoleId],
    [SystemUserRoles].[SystemUserId],
    [SystemUserRoles].[SystemUserRoleId],
    [SystemUserRoles].[VersionNumber]
from SystemUserRoles

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSystemUserRoles] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSystemUserRoles] TO [CRMReaderRole]
    AS [dbo];

