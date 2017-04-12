SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for appmoduleroles
--
create view [dbo].[FilteredAppModuleRoles] (
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
GRANT SELECT ON  [dbo].[FilteredAppModuleRoles] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredAppModuleRoles] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
