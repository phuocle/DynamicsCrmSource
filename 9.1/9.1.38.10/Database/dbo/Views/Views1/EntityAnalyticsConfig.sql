


--
-- base view for EntityAnalyticsConfig
--
create view dbo.[EntityAnalyticsConfig]
 (
    -- logical attributes
    [ParentEntityIdName],
    [OrganizationIdName],

    -- physical attributes
    [EntityAnalyticsConfigId],
    [ComponentIdUnique],
    [ComponentState],
    [ParentEntityLogicalName],
    [ParentEntityId],
    [VersionNumber],
    [IsEnabledForADLS],
    [IsEnabledForTimeSeries],
    [IsManaged],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [OrganizationId]
) with view_metadata as
select
    -- logical attributes
    null,
    [organization_entityanalyticsconfig].[Name],

    -- physical attribute
    [T1].[EntityAnalyticsConfigId],
    [T1].[ComponentIdUnique],
    [T1].[ComponentState],
    [T1].[ParentEntityLogicalName],
    [T1].[ParentEntityId],
    [T1].[VersionNumber],
    [T1].[IsEnabledForADLS],
    [T1].[IsEnabledForTimeSeries],
    [T1].[IsManaged],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[OrganizationId]
from [EntityAnalyticsConfigBase] [T1]
    left join [Entity] [entity_entityanalyticsconfig] on ([T1].[ParentEntityId] = [entity_entityanalyticsconfig].[EntityId] and [entity_entityanalyticsconfig].OverwriteTime = 0 and [entity_entityanalyticsconfig].ComponentState = 0)
    left join [OrganizationBase] [organization_entityanalyticsconfig] on ([T1].[OrganizationId] = [organization_entityanalyticsconfig].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0