CREATE TABLE [dbo].[RecommendationCacheBase] (
    [ItemId]                 UNIQUEIDENTIFIER NULL,
    [RecommendedItemId]      UNIQUEIDENTIFIER NULL,
    [RecommendationRating]   DECIMAL (23, 10) NOT NULL,
    [RecommendationType]     INT              NULL,
    [RecommendationCacheId]  UNIQUEIDENTIFIER NOT NULL,
    [RecommendationModelId]  UNIQUEIDENTIFIER NULL,
    [RecommendationSource]   INT              CONSTRAINT [DF_RecommendationCacheBase_RecommendationSource] DEFAULT ((1)) NOT NULL,
    [AdditionalDataRecordId] UNIQUEIDENTIFIER NULL,
    [IsRecommendationActive] BIT              NULL,
    CONSTRAINT [PK_RecommendationCacheBase] PRIMARY KEY CLUSTERED ([RecommendationCacheId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [Product_RecommendationCache_ItemId] FOREIGN KEY ([ItemId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [Product_RecommendationCache_RecommendedItemId] FOREIGN KEY ([RecommendedItemId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [ProductPriceLevel_RecommendationCache_AdditionalDataRecordId] FOREIGN KEY ([AdditionalDataRecordId]) REFERENCES [dbo].[ProductPriceLevelBase] ([ProductPriceLevelId]),
    CONSTRAINT [RecommendationModel_RecommendationCache] FOREIGN KEY ([RecommendationModelId]) REFERENCES [dbo].[RecommendationModelBaseIds] ([RecommendationModelId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_itemid_recommendeditemid_modelid_additionaldatarecordid_recommendationsource]
    ON [dbo].[RecommendationCacheBase]([ItemId] ASC, [RecommendedItemId] ASC, [RecommendationModelId] ASC, [AdditionalDataRecordId] ASC, [RecommendationSource] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_modelid]
    ON [dbo].[RecommendationCacheBase]([RecommendationModelId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_itemid_modelid]
    ON [dbo].[RecommendationCacheBase]([ItemId] ASC)
    INCLUDE([RecommendationModelId]) WITH (FILLFACTOR = 80);

