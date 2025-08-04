

--
-- report view for teamroles
--
create view dbo.[FilteredTeamRoles] (
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamRoles] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamRoles] TO [CRMReaderRole]
    AS [dbo];

