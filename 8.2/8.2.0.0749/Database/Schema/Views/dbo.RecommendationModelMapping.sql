SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for RecommendationModelMapping
--
create view [dbo].[RecommendationModelMapping]
 (
    -- logical attributes
    [OrganizationIdName],
    [RecommendationModelIdName],
    [RecommendationModelVersionIdName],
    [SupportedMapIdName],

    -- physical attributes
    [RecommendationModelMappingId],
    [MappingType],
    [Entity],
    [TransactionField],
    [AccountField],
    [ProductLineItemRelationship],
    [ProductField],
    [DataFilter],
    [TimeRangeFilter],
    [SynchronizedCount],
    [RecommendationModelId],
    [FilterXml],
    [OrganizationId],
    [RecommendationModelVersionId],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [RecommendationModelMappingIdUnique],
    [SupportedMapId],
    [ErrorCount],
    [AccountFieldPickList],
    [EntityPickList],
    [ProductFieldPickList],
    [ProductLineItemRelationshipPickList],
    [EntityDisplayName],
    [AccountFieldDisplayName],
    [ProductLineItemRelationshipDisplayName],
    [ProductFieldDisplayName]
) with view_metadata as
select
    -- logical attributes
    [organization_recommendationmodelmapping].[Name],
    [recommendationmodel_recommendationmodelmapping].[Name],
    [recommendationmodelversion_recommendationmodelmapping].[Name],
    [recommendationmodelmapping_recommendationmodelmapping_supportedmapid].[Entity],

    -- physical attribute
    [T1].[RecommendationModelMappingId],
    [T1].[MappingType],
    [T1].[Entity],
    [T1].[TransactionField],
    [T1].[AccountField],
    [T1].[ProductLineItemRelationship],
    [T1].[ProductField],
    [T1].[DataFilter],
    [T1].[TimeRangeFilter],
    [T1].[SynchronizedCount],
    [T1].[RecommendationModelId],
    [T1].[FilterXml],
    [T1].[OrganizationId],
    [T1].[RecommendationModelVersionId],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[RecommendationModelMappingIdUnique],
    [T1].[SupportedMapId],
    [T1].[ErrorCount],
    [T1].[AccountFieldPickList],
    [T1].[EntityPickList],
    [T1].[ProductFieldPickList],
    [T1].[ProductLineItemRelationshipPickList],
    [T1].[EntityDisplayName],
    [T1].[AccountFieldDisplayName],
    [T1].[ProductLineItemRelationshipDisplayName],
    [T1].[ProductFieldDisplayName]
from [RecommendationModelMappingBase] [T1]
    left join [OrganizationBase] [organization_recommendationmodelmapping] with(nolock) on ([T1].[OrganizationId] = [organization_recommendationmodelmapping].[OrganizationId])
    left join [RecommendationModelBase] [recommendationmodel_recommendationmodelmapping] on ([T1].[RecommendationModelId] = [recommendationmodel_recommendationmodelmapping].[RecommendationModelId] and [recommendationmodel_recommendationmodelmapping].OverwriteTime = 0 and [recommendationmodel_recommendationmodelmapping].ComponentState = 0)
    left join [RecommendationModelMappingBase] [recommendationmodelmapping_recommendationmodelmapping_supportedmapid] on ([T1].[SupportedMapId] = [recommendationmodelmapping_recommendationmodelmapping_supportedmapid].[RecommendationModelMappingId] and [recommendationmodelmapping_recommendationmodelmapping_supportedmapid].OverwriteTime = 0 and [recommendationmodelmapping_recommendationmodelmapping_supportedmapid].ComponentState = 0)
    left join [RecommendationModelVersionBase] [recommendationmodelversion_recommendationmodelmapping] on ([T1].[RecommendationModelVersionId] = [recommendationmodelversion_recommendationmodelmapping].[RecommendationModelVersionId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
