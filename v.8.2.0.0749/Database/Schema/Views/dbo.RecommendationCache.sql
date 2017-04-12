SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for RecommendationCache
--
create view [dbo].[RecommendationCache]
 (
    -- logical attributes
    [RecommendationModelIdName],
    [RecommendedItemIdName],
    [ItemIdName],

    -- physical attributes
    [RecommendationCacheId],
    [RecommendationModelId],
    [ItemId],
    [RecommendedItemId],
    [RecommendationRating],
    [RecommendationType],
    [RecommendationSource],
    [AdditionalDataRecordId],
    [IsRecommendationActive]
) with view_metadata as
select
    -- logical attributes
    [RecommendationModel_RecommendationCache].[Name],
    [Product_RecommendationCache_RecommendedItemId].[Name],
    [Product_RecommendationCache_ItemId].[Name],

    -- physical attribute
    [RecommendationCacheBase].[RecommendationCacheId],
    [RecommendationCacheBase].[RecommendationModelId],
    [RecommendationCacheBase].[ItemId],
    [RecommendationCacheBase].[RecommendedItemId],
    [RecommendationCacheBase].[RecommendationRating],
    [RecommendationCacheBase].[RecommendationType],
    [RecommendationCacheBase].[RecommendationSource],
    [RecommendationCacheBase].[AdditionalDataRecordId],
    [RecommendationCacheBase].[IsRecommendationActive]
from [RecommendationCacheBase] 
    left join [ProductBase] [Product_RecommendationCache_ItemId] on ([RecommendationCacheBase].[ItemId] = [Product_RecommendationCache_ItemId].[ProductId])
    left join [ProductBase] [Product_RecommendationCache_RecommendedItemId] on ([RecommendationCacheBase].[RecommendedItemId] = [Product_RecommendationCache_RecommendedItemId].[ProductId])
    left join [RecommendationModelBase] [RecommendationModel_RecommendationCache] on ([RecommendationCacheBase].[RecommendationModelId] = [RecommendationModel_RecommendationCache].[RecommendationModelId] and [RecommendationModel_RecommendationCache].OverwriteTime = 0 and [RecommendationModel_RecommendationCache].ComponentState = 0)
GO
