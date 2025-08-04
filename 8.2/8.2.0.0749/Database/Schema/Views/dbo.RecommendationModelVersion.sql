SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for RecommendationModelVersion
--
create view [dbo].[RecommendationModelVersion]
 (
    -- logical attributes
    [ModifiedByName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [RecommendationModelIdName],
    [OrganizationIdName],

    -- physical attributes
    [RecommendationModelVersionId],
    [Name],
    [Description],
    [StatusCode],
    [BuildEndedOn],
    [BuildStartedOn],
    [CatalogSynchronizationStatus],
    [BasketDataSynchronizationStatus],
    [CatalogCoverage],
    [PercentileRank],
    [RecommendationModelId],
    [AzureBuildId],
    [AzureModelBuildStatus],
    [OrganizationId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Duration],
    [LogicAppRunId]
) with view_metadata as
select
    -- logical attributes
    [lk_recommendationmodelversion_modifiedby].[FullName],
    [lk_recommendationmodelversion_createdby].[FullName],
    [lk_recommendationmodelversion_createdonbehalfby].[FullName],
    [lk_recommendationmodelversion_createdonbehalfby].[YomiFullName],
    [lk_recommendationmodelversion_modifiedonbehalfby].[YomiFullName],
    [lk_recommendationmodelversion_modifiedonbehalfby].[FullName],
    [recommendationmodel_recommendationmodelversion].[Name],
    [organization_recommendationmodelversion].[Name],

    -- physical attribute
    [RecommendationModelVersionBase].[RecommendationModelVersionId],
    [RecommendationModelVersionBase].[Name],
    [RecommendationModelVersionBase].[Description],
    [RecommendationModelVersionBase].[StatusCode],
    [RecommendationModelVersionBase].[BuildEndedOn],
    [RecommendationModelVersionBase].[BuildStartedOn],
    [RecommendationModelVersionBase].[CatalogSynchronizationStatus],
    [RecommendationModelVersionBase].[BasketDataSynchronizationStatus],
    [RecommendationModelVersionBase].[CatalogCoverage],
    [RecommendationModelVersionBase].[PercentileRank],
    [RecommendationModelVersionBase].[RecommendationModelId],
    [RecommendationModelVersionBase].[AzureBuildId],
    [RecommendationModelVersionBase].[AzureModelBuildStatus],
    [RecommendationModelVersionBase].[OrganizationId],
    [RecommendationModelVersionBase].[CreatedBy],
    [RecommendationModelVersionBase].[CreatedOn],
    [RecommendationModelVersionBase].[CreatedOnBehalfBy],
    [RecommendationModelVersionBase].[ModifiedBy],
    [RecommendationModelVersionBase].[ModifiedOn],
    [RecommendationModelVersionBase].[ModifiedOnBehalfBy],
    [RecommendationModelVersionBase].[Duration],
    [RecommendationModelVersionBase].[LogicAppRunId]
from [RecommendationModelVersionBase] 
    left join [SystemUserBase] [lk_recommendationmodelversion_createdby] with(nolock) on ([RecommendationModelVersionBase].[CreatedBy] = [lk_recommendationmodelversion_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_recommendationmodelversion_createdonbehalfby] with(nolock) on ([RecommendationModelVersionBase].[CreatedOnBehalfBy] = [lk_recommendationmodelversion_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_recommendationmodelversion_modifiedby] with(nolock) on ([RecommendationModelVersionBase].[ModifiedBy] = [lk_recommendationmodelversion_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_recommendationmodelversion_modifiedonbehalfby] with(nolock) on ([RecommendationModelVersionBase].[ModifiedOnBehalfBy] = [lk_recommendationmodelversion_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_recommendationmodelversion] with(nolock) on ([RecommendationModelVersionBase].[OrganizationId] = [organization_recommendationmodelversion].[OrganizationId])
    left join [RecommendationModelBase] [recommendationmodel_recommendationmodelversion] on ([RecommendationModelVersionBase].[RecommendationModelId] = [recommendationmodel_recommendationmodelversion].[RecommendationModelId] and [recommendationmodel_recommendationmodelversion].OverwriteTime = 0 and [recommendationmodel_recommendationmodelversion].ComponentState = 0)
GO
