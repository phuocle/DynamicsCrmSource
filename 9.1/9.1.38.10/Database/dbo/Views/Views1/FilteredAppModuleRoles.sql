

--
-- report view for appmoduleroles
--
create view dbo.[FilteredAppModuleRoles] (
    [appmoduleid],
    [appmoduleidname],
    [appmoduleroleid],
    [appmoduleroleidunique],
    [componentstate],
    [introducedversion],
    [ismanaged],
    [overwritetime],
    [overwritetimeutc],
    [roleid],
    [roleidname],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [AppModuleRoles].[AppModuleId],
    [AppModuleRoles].[AppModuleIdName],
    [AppModuleRoles].[AppModuleRoleId],
    [AppModuleRoles].[AppModuleRoleIdUnique],
    [AppModuleRoles].[ComponentState],
    [AppModuleRoles].[IntroducedVersion],
    [AppModuleRoles].[IsManaged],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModuleRoles].[OverwriteTime],
			us.TimeZoneCode),
        [AppModuleRoles].[OverwriteTime],
    [AppModuleRoles].[RoleId],
    [AppModuleRoles].[RoleIdName],
    [AppModuleRoles].[SolutionId],
    [AppModuleRoles].[VersionNumber]
from AppModuleRoles
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppModuleRoles] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppModuleRoles] TO [CRMReaderRole]
    AS [dbo];

