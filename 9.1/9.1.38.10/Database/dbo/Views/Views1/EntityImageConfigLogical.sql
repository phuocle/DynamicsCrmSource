


--
-- logical view for EntityImageConfigLogical
--
create view dbo.[EntityImageConfigLogical]
 (

    -- physical attributes
    [EntityImageConfigId],
    [PrimaryImageAttribute],
    [ParentEntityLogicalName],
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
    [T1].[EntityImageConfigId],
    [T1].[PrimaryImageAttribute],
    [T1].[ParentEntityLogicalName],
    [T1].[VersionNumber],
    [T1].[ComponentIdUnique],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId]
from [EntityImageConfigBase] [T1]
where T1.OverwriteTime = 0