

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
    ON OBJECT::[dbo].[FilteredTeamRoles] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTeamRoles] TO [CRMReaderRole]
    AS [dbo];

