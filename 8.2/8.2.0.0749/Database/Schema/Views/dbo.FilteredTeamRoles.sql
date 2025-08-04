SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for teamroles
--
create view [dbo].[FilteredTeamRoles] (
    [roleid],
    [teamid],
    [teamroleid],
    [versionnumber]
) with view_metadata as
select
    [TeamRoles].[RoleId],
    [TeamRoles].[TeamId],
    [TeamRoles].[TeamRoleId],
    [TeamRoles].[VersionNumber]
from TeamRoles
GO
GRANT SELECT ON  [dbo].[FilteredTeamRoles] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredTeamRoles] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
