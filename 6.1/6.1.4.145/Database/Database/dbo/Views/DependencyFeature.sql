


--
-- base view for DependencyFeature
--
create view dbo.[DependencyFeature]
 (

    -- physical attributes
    [DependencyFeatureId],
    [IntroducedVersion],
    [SolutionId],
    [SupportingSolutionId],
    [OverwriteTime],
    [ComponentState],
    [IsManaged],
    [DependencyFeatureIdUnique]
) with view_metadata as
select

    -- physical attribute
    [T1].[DependencyFeatureId],
    [T1].[IntroducedVersion],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[OverwriteTime],
    [T1].[ComponentState],
    [T1].[IsManaged],
    [T1].[DependencyFeatureIdUnique]
from [DependencyFeatureBase] [T1]
where T1.OverwriteTime = 0 AND T1.ComponentState = 0