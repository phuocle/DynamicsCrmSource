SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for systemuserroles
--
create view [dbo].[FilteredSystemUserRoles] (
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
GRANT SELECT ON  [dbo].[FilteredSystemUserRoles] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSystemUserRoles] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
