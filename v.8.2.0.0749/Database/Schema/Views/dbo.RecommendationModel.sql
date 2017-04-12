SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for RecommendationModel
--
create view [dbo].[RecommendationModel]
 (
    -- logical attributes
    [AzureServiceConnectionIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [RecommendationModelVersionIdName],
    [OrganizationIdName],

    -- physical attributes
    [AzureModelId],
    [AzureServiceConnectionId],
    [BasketDataLastSynchronizationStatus],
    [BasketDataLastSynchronizedOn],
    [CatalogLastSynchronizationStatus],
    [CatalogLastSynchronizedOn],
    [Description],
    [MaxRecommendations],
    [MinRecommendationRating],
    [Name],
    [OrganizationId],
    [ProductCatalogAccessoryLinkRating],
    [ProductCatalogCrosssellLinkRating],
    [ProductCatalogName],
    [RecommendationModelId],
    [RecommendationModelVersionId],
    [StateCode],
    [StatusCode],
    [ValidUntil],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [RecommendationModelIdUnique],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [RecommendationModelVersionCount],
    [MaximumVersions]
) with view_metadata as
select
    -- logical attributes
    [azureserviceconnection_recommendationmodel].[Name],
    [lk_recommendationmodel_modifiedonbehalfby].[FullName],
    [lk_recommendationmodel_modifiedonbehalfby].[YomiFullName],
    [lk_recommendationmodel_createdby].[FullName],
    [lk_recommendationmodel_createdonbehalfby].[YomiFullName],
    [lk_recommendationmodel_createdonbehalfby].[FullName],
    [lk_recommendationmodel_modifiedby].[FullName],
    [recommendationmodelversion_recommendationmodel].[Name],
    [organization_recommendationmodel].[Name],

    -- physical attribute
    [T1].[AzureModelId],
    [T1].[AzureServiceConnectionId],
    [T1].[BasketDataLastSynchronizationStatus],
    [T1].[BasketDataLastSynchronizedOn],
    [T1].[CatalogLastSynchronizationStatus],
    [T1].[CatalogLastSynchronizedOn],
    [T1].[Description],
    [T1].[MaxRecommendations],
    [T1].[MinRecommendationRating],
    [T1].[Name],
    [T1].[OrganizationId],
    [T1].[ProductCatalogAccessoryLinkRating],
    [T1].[ProductCatalogCrosssellLinkRating],
    [T1].[ProductCatalogName],
    [T1].[RecommendationModelId],
    [T1].[RecommendationModelVersionId],
    [T1].[StateCode],
    [T1].[StatusCode],
    [T1].[ValidUntil],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[RecommendationModelIdUnique],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[RecommendationModelVersionCount],
    [T1].[MaximumVersions]
from [RecommendationModelBase] [T1]
    left join [AzureServiceConnectionBase] [azureserviceconnection_recommendationmodel] on ([T1].[AzureServiceConnectionId] = [azureserviceconnection_recommendationmodel].[AzureServiceConnectionId])
    left join [SystemUserBase] [lk_recommendationmodel_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_recommendationmodel_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_recommendationmodel_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_recommendationmodel_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_recommendationmodel_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_recommendationmodel_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_recommendationmodel_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_recommendationmodel_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_recommendationmodel] with(nolock) on ([T1].[OrganizationId] = [organization_recommendationmodel].[OrganizationId])
    left join [RecommendationModelVersionBase] [recommendationmodelversion_recommendationmodel] on ([T1].[RecommendationModelVersionId] = [recommendationmodelversion_recommendationmodel].[RecommendationModelVersionId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
