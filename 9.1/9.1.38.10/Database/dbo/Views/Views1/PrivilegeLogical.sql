


--
-- logical view for PrivilegeLogical
--
create view dbo.[PrivilegeLogical]
 (

    -- physical attributes
    [PrivilegeId],
    [Name],
    [CanBeLocal],
    [CanBeDeep],
    [VersionNumber],
    [CanBeGlobal],
    [CanBeBasic],
    [AccessRight],
    [IsDisabledWhenIntegrated],
    [CanBeEntityReference],
    [CanBeParentEntityReference],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [PrivilegeRowId]
) with view_metadata as
select

    -- physical attribute
    [PrivilegeBase].[PrivilegeId],
    [PrivilegeBase].[Name],
    [PrivilegeBase].[CanBeLocal],
    [PrivilegeBase].[CanBeDeep],
    [PrivilegeBase].[VersionNumber],
    [PrivilegeBase].[CanBeGlobal],
    [PrivilegeBase].[CanBeBasic],
    [PrivilegeBase].[AccessRight],
    [PrivilegeBase].[IsDisabledWhenIntegrated],
    [PrivilegeBase].[CanBeEntityReference],
    [PrivilegeBase].[CanBeParentEntityReference],
    [PrivilegeBase].[SolutionId],
    [PrivilegeBase].[SupportingSolutionId],
    [PrivilegeBase].[ComponentState],
    [PrivilegeBase].[OverwriteTime],
    [PrivilegeBase].[IsManaged],
    [PrivilegeBase].[IntroducedVersion],
    [PrivilegeBase].[PrivilegeRowId]
from [PrivilegeBase] 
where PrivilegeBase.OverwriteTime = 0