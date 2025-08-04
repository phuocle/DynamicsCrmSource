


--
-- base view for AttributeImageConfig
--
create view dbo.[AttributeImageConfig]
 (

    -- physical attributes
    [AttributeImageConfigId],
    [AttributeLogicalName],
    [ParentEntityLogicalName],
    [CanStoreFullImage],
    [VersionNumber],
    [ComponentIdUnique],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [SolutionId],
    [SupportingSolutionId]
) with view_metadata as
select

    -- physical attribute
    [T1].[AttributeImageConfigId],
    [T1].[AttributeLogicalName],
    [T1].[ParentEntityLogicalName],
    [T1].[CanStoreFullImage],
    [T1].[VersionNumber],
    [T1].[ComponentIdUnique],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId]
from [AttributeImageConfigBase] [T1]
where T1.OverwriteTime = 0 AND T1.ComponentState = 0