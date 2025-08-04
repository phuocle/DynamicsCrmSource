


--
-- base view for RibbonContextGroup
--
create view dbo.[RibbonContextGroup]
 (

    -- physical attributes
    [RibbonContextGroupUniqueId],
    [OrganizationId],
    [ContextGroupXml],
    [VersionNumber],
    [ContextGroupId],
    [RibbonContextGroupId],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [RibbonCustomizationId],
    [Entity],
    [IsManaged]
) with view_metadata as
select

    -- physical attribute
    [T1].[RibbonContextGroupUniqueId],
    [T1].[OrganizationId],
    [T1].[ContextGroupXml],
    [T1].[VersionNumber],
    [T1].[ContextGroupId],
    [T1].[RibbonContextGroupId],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[RibbonCustomizationId],
    [T1].[Entity],
    [T1].[IsManaged]
from [RibbonContextGroupBase] [T1]
where T1.OverwriteTime = 0 AND T1.ComponentState = 0