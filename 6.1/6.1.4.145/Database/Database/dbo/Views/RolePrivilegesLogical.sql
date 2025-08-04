


--
-- logical view for RolePrivilegesLogical
--
create view dbo.[RolePrivilegesLogical]
 (

    -- physical attributes
    [PrivilegeId],
    [RoleId],
    [PrivilegeDepthMask],
    [RolePrivilegeId],
    [VersionNumber],
    [RolePrivilegeIdUnique],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [SolutionId],
    [IsManaged]
) with view_metadata as
select

    -- physical attribute
    [T1].[PrivilegeId],
    [T1].[RoleId],
    [T1].[PrivilegeDepthMask],
    [T1].[RolePrivilegeId],
    [T1].[VersionNumber],
    [T1].[RolePrivilegeIdUnique],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[IsManaged]
from [RolePrivilegesBase] [T1]
where T1.OverwriteTime = 0