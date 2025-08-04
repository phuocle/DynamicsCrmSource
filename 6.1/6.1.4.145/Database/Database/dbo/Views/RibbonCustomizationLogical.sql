


--
-- logical view for RibbonCustomizationLogical
--
create view dbo.[RibbonCustomizationLogical]
 (

    -- physical attributes
    [RibbonCustomizationId],
    [RibbonCustomizationUniqueId],
    [Entity],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [VersionNumber],
    [OrganizationId],
    [PublishedOn],
    [IsManaged]
) with view_metadata as
select

    -- physical attribute
    [T1].[RibbonCustomizationId],
    [T1].[RibbonCustomizationUniqueId],
    [T1].[Entity],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[VersionNumber],
    [T1].[OrganizationId],
    [T1].[PublishedOn],
    [T1].[IsManaged]
from [RibbonCustomizationBase] [T1]
where T1.OverwriteTime = 0