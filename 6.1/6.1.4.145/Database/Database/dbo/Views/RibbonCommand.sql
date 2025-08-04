


--
-- base view for RibbonCommand
--
create view dbo.[RibbonCommand]
 (

    -- physical attributes
    [CommandDefinition],
    [Entity],
    [RibbonCommandUniqueId],
    [Command],
    [VersionNumber],
    [OrganizationId],
    [RibbonCommandId],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [RibbonCustomizationId],
    [IsManaged]
) with view_metadata as
select

    -- physical attribute
    [T1].[CommandDefinition],
    [T1].[Entity],
    [T1].[RibbonCommandUniqueId],
    [T1].[Command],
    [T1].[VersionNumber],
    [T1].[OrganizationId],
    [T1].[RibbonCommandId],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[RibbonCustomizationId],
    [T1].[IsManaged]
from [RibbonCommandBase] [T1]
where T1.OverwriteTime = 0 AND T1.ComponentState = 0