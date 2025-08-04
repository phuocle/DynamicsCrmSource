


--
-- logical view for EntityDataSourceLogical
--
create view dbo.[EntityDataSourceLogical]
 (
    -- logical attributes
    [EntityDataProviderIdName],

    -- physical attributes
    [EntityDataSourceId],
    [EntityName],
    [ConnectionDefinition],
    [ComponentState],
    [OverwriteTime],
    [SolutionId],
    [IsManaged],
    [SupportingSolutionId],
    [IntroducedVersion],
    [OrganizationId],
    [EntityDataSourceIdUnique],
    [Name],
    [ConnectionDefinitionSecrets],
    [EntityDataProviderId],
    [IsCustomizable],
    [Description]
) with view_metadata as
select
    -- logical attributes
    [entitydataprovider_datasource].[Name],

    -- physical attribute
    [T1].[EntityDataSourceId],
    [T1].[EntityName],
    [T1].[ConnectionDefinition],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[IsManaged],
    [T1].[SupportingSolutionId],
    [T1].[IntroducedVersion],
    [T1].[OrganizationId],
    [T1].[EntityDataSourceIdUnique],
    [T1].[Name],
    [T1].[ConnectionDefinitionSecrets],
    [T1].[EntityDataProviderId],
    [T1].[IsCustomizable],
    [T1].[Description]
from [EntityDataSourceBase] [T1]
    left join [EntityDataProviderBase] [entitydataprovider_datasource] on ([T1].[EntityDataProviderId] = [entitydataprovider_datasource].[EntityDataProviderId] and [entitydataprovider_datasource].OverwriteTime = 0 and [entitydataprovider_datasource].ComponentState = 0)
where T1.OverwriteTime = 0