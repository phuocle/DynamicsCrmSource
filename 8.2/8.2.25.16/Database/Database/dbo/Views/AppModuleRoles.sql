


--
-- base view for AppModuleRoles
--
create view dbo.[AppModuleRoles]
 (
    -- logical attributes
    [AppModuleIdName],
    [RoleIdName],

    -- physical attributes
    [AppModuleRoleId],
    [RoleId],
    [VersionNumber],
    [AppModuleId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [SolutionId],
    [SupportingSolutionId],
    [AppModuleRoleIdUnique]
) with view_metadata as
select
    -- logical attributes
    [appmodule_appmoduleroles].[Name],
    [role_appmoduleroles].[Name],

    -- physical attribute
    [T1].[AppModuleRoleId],
    [T1].[RoleId],
    [T1].[VersionNumber],
    [T1].[AppModuleId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[AppModuleRoleIdUnique]
from [AppModuleRolesBase] [T1]
    left join [AppModuleBase] [appmodule_appmoduleroles] on ([T1].[AppModuleId] = [appmodule_appmoduleroles].[AppModuleId] and [appmodule_appmoduleroles].OverwriteTime = 0 and [appmodule_appmoduleroles].ComponentState = 0)
    left join [RoleBase] [role_appmoduleroles] on ([T1].[RoleId] = [role_appmoduleroles].[RoleId] and [role_appmoduleroles].OverwriteTime = 0 and [role_appmoduleroles].ComponentState = 0)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0