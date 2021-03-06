USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredAppModuleRoles]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
