CREATE TABLE [dbo].[RecommendationCacheBase]
(
[ItemId] [uniqueidentifier] NULL,
[RecommendedItemId] [uniqueidentifier] NULL,
[RecommendationRating] [decimal] (23, 10) NOT NULL,
[RecommendationType] [int] NULL,
[RecommendationCacheId] [uniqueidentifier] NOT NULL,
[RecommendationModelId] [uniqueidentifier] NULL,
[RecommendationSource] [int] NOT NULL CONSTRAINT [DF_RecommendationCacheBase_RecommendationSource] DEFAULT ((1)),
[AdditionalDataRecordId] [uniqueidentifier] NULL,
[IsRecommendationActive] [bit] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendationCacheBase] ADD CONSTRAINT [PK_RecommendationCacheBase] PRIMARY KEY CLUSTERED  ([RecommendationCacheId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_itemid_modelid] ON [dbo].[RecommendationCacheBase] ([ItemId]) INCLUDE ([RecommendationModelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_itemid_recommendeditemid_modelid_additionaldatarecordid_recommendationsource] ON [dbo].[RecommendationCacheBase] ([ItemId], [RecommendedItemId], [RecommendationModelId], [AdditionalDataRecordId], [RecommendationSource]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_modelid] ON [dbo].[RecommendationCacheBase] ([RecommendationModelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendationCacheBase] ADD CONSTRAINT [Product_RecommendationCache_ItemId] FOREIGN KEY ([ItemId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[RecommendationCacheBase] ADD CONSTRAINT [Product_RecommendationCache_RecommendedItemId] FOREIGN KEY ([RecommendedItemId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[RecommendationCacheBase] ADD CONSTRAINT [ProductPriceLevel_RecommendationCache_AdditionalDataRecordId] FOREIGN KEY ([AdditionalDataRecordId]) REFERENCES [dbo].[ProductPriceLevelBase] ([ProductPriceLevelId])
GO
ALTER TABLE [dbo].[RecommendationCacheBase] ADD CONSTRAINT [RecommendationModel_RecommendationCache] FOREIGN KEY ([RecommendationModelId]) REFERENCES [dbo].[RecommendationModelBaseIds] ([RecommendationModelId])
GO
