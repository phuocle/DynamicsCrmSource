


--
-- base view for EntityDataProvider
--
create view dbo.[EntityDataProvider]
 (

    -- physical attributes
    [EntityDataProviderId],
    [Name],
    [RetrievePlugin],
    [RetrieveMultiplePlugin],
    [CreatePlugin],
    [DeletePlugin],
    [UpdatePlugin],
    [DataSourceLogicalName],
    [EntityDataProviderIdUnique],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [IsManaged],
    [OverwriteTime],
    [IntroducedVersion],
    [OrganizationId],
    [Description],
    [IsCustomizable],
    [CreateMultiplePlugin],
    [UpdateMultiplePlugin],
    [UpsertMultiplePlugin],
    [UpsertPlugin],
    [RetrieveEntityChangesPlugin]
) with view_metadata as
select

    -- physical attribute
    [T1].[EntityDataProviderId],
    [T1].[Name],
    [T1].[RetrievePlugin],
    [T1].[RetrieveMultiplePlugin],
    [T1].[CreatePlugin],
    [T1].[DeletePlugin],
    [T1].[UpdatePlugin],
    [T1].[DataSourceLogicalName],
    [T1].[EntityDataProviderIdUnique],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[IsManaged],
    [T1].[OverwriteTime],
    [T1].[IntroducedVersion],
    [T1].[OrganizationId],
    [T1].[Description],
    [T1].[IsCustomizable],
    [T1].[CreateMultiplePlugin],
    [T1].[UpdateMultiplePlugin],
    [T1].[UpsertMultiplePlugin],
    [T1].[UpsertPlugin],
    [T1].[RetrieveEntityChangesPlugin]
from [EntityDataProviderBase] [T1]
where T1.OverwriteTime = 0 AND T1.ComponentState = 0