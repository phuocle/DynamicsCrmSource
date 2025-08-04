


--
-- base view for GlobalSearchConfiguration
--
create view dbo.[GlobalSearchConfiguration]
 (

    -- physical attributes
    [GlobalSearchConfigurationId],
    [SearchProviderName],
    [SearchProviderResultsPage],
    [IsLocalized],
    [IsEnabled],
    [IsSearchBoxVisible],
    [ComponentState],
    [SolutionId],
    [IsManaged],
    [OverwriteTime],
    [GlobalSearchConfigurationidUnique],
    [SupportingSolutionId]
) with view_metadata as
select

    -- physical attribute
    [T1].[GlobalSearchConfigurationId],
    [T1].[SearchProviderName],
    [T1].[SearchProviderResultsPage],
    [T1].[IsLocalized],
    [T1].[IsEnabled],
    [T1].[IsSearchBoxVisible],
    [T1].[ComponentState],
    [T1].[SolutionId],
    [T1].[IsManaged],
    [T1].[OverwriteTime],
    [T1].[GlobalSearchConfigurationidUnique],
    [T1].[SupportingSolutionId]
from [GlobalSearchConfigurationBase] [T1]
where T1.OverwriteTime = 0 AND T1.ComponentState = 0