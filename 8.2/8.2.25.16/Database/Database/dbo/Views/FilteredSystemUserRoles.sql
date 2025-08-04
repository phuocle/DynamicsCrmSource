

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
    ON OBJECT::[dbo].[FilteredSystemUserRoles] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSystemUserRoles] TO [CRMReaderRole]
    AS [dbo];

