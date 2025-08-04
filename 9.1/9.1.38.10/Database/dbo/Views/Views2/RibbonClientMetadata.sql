


--
-- base view for RibbonClientMetadata
--
create view dbo.[RibbonClientMetadata]
 (

    -- physical attributes
    [RibbonId],
    [RibbonJson],
    [EntityLogicalName],
    [RibbonContext],
    [ComponentState],
    [VersionNumber],
    [RibbonIdUnique],
    [SolutionId]
) with view_metadata as
select

    -- physical attribute
    [RibbonClientMetadataBase].[RibbonId],
    [RibbonClientMetadataBase].[RibbonJson],
    [RibbonClientMetadataBase].[EntityLogicalName],
    [RibbonClientMetadataBase].[RibbonContext],
    [RibbonClientMetadataBase].[ComponentState],
    [RibbonClientMetadataBase].[VersionNumber],
    [RibbonClientMetadataBase].[RibbonIdUnique],
    [RibbonClientMetadataBase].[SolutionId]
from [RibbonClientMetadataBase] 
