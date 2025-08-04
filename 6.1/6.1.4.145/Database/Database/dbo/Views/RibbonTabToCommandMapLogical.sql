


--
-- logical view for RibbonTabToCommandMapLogical
--
create view dbo.[RibbonTabToCommandMapLogical]
 (

    -- physical attributes
    [TabId],
    [RibbonTabToCommandMapUniqueId],
    [OrganizationId],
    [ControlId],
    [VersionNumber],
    [Entity],
    [Command],
    [RibbonTabToCommandMapId],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [RibbonDiffId],
    [IsManaged]
) with view_metadata as
select

    -- physical attribute
    [T1].[TabId],
    [T1].[RibbonTabToCommandMapUniqueId],
    [T1].[OrganizationId],
    [T1].[ControlId],
    [T1].[VersionNumber],
    [T1].[Entity],
    [T1].[Command],
    [T1].[RibbonTabToCommandMapId],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[RibbonDiffId],
    [T1].[IsManaged]
from [RibbonTabToCommandMapBase] [T1]
where T1.OverwriteTime = 0