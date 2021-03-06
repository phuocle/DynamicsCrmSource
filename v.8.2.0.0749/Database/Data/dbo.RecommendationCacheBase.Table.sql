USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RecommendationCacheBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RecommendationCacheBase](
	[ItemId] [uniqueidentifier] NULL,
	[RecommendedItemId] [uniqueidentifier] NULL,
	[RecommendationRating] [decimal](23, 10) NOT NULL,
	[RecommendationType] [int] NULL,
	[RecommendationCacheId] [uniqueidentifier] NOT NULL,
	[RecommendationModelId] [uniqueidentifier] NULL,
	[RecommendationSource] [int] NOT NULL,
	[AdditionalDataRecordId] [uniqueidentifier] NULL,
	[IsRecommendationActive] [bit] NULL,
 CONSTRAINT [PK_RecommendationCacheBase] PRIMARY KEY CLUSTERED 
(
	[RecommendationCacheId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_UniqueConstraint_itemid_recommendeditemid_modelid_additionaldatarecordid_recommendationsource]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_itemid_recommendeditemid_modelid_additionaldatarecordid_recommendationsource] ON [dbo].[RecommendationCacheBase]
(
	[ItemId] ASC,
	[RecommendedItemId] ASC,
	[RecommendationModelId] ASC,
	[AdditionalDataRecordId] ASC,
	[RecommendationSource] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendationCacheBase] ADD  CONSTRAINT [DF_RecommendationCacheBase_RecommendationSource]  DEFAULT ((1)) FOR [RecommendationSource]
GO
ALTER TABLE [dbo].[RecommendationCacheBase]  WITH CHECK ADD  CONSTRAINT [Product_RecommendationCache_ItemId] FOREIGN KEY([ItemId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[RecommendationCacheBase] CHECK CONSTRAINT [Product_RecommendationCache_ItemId]
GO
ALTER TABLE [dbo].[RecommendationCacheBase]  WITH CHECK ADD  CONSTRAINT [Product_RecommendationCache_RecommendedItemId] FOREIGN KEY([RecommendedItemId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[RecommendationCacheBase] CHECK CONSTRAINT [Product_RecommendationCache_RecommendedItemId]
GO
ALTER TABLE [dbo].[RecommendationCacheBase]  WITH CHECK ADD  CONSTRAINT [ProductPriceLevel_RecommendationCache_AdditionalDataRecordId] FOREIGN KEY([AdditionalDataRecordId])
REFERENCES [dbo].[ProductPriceLevelBase] ([ProductPriceLevelId])
GO
ALTER TABLE [dbo].[RecommendationCacheBase] CHECK CONSTRAINT [ProductPriceLevel_RecommendationCache_AdditionalDataRecordId]
GO
ALTER TABLE [dbo].[RecommendationCacheBase]  WITH CHECK ADD  CONSTRAINT [RecommendationModel_RecommendationCache] FOREIGN KEY([RecommendationModelId])
REFERENCES [dbo].[RecommendationModelBaseIds] ([RecommendationModelId])
GO
ALTER TABLE [dbo].[RecommendationCacheBase] CHECK CONSTRAINT [RecommendationModel_RecommendationCache]
GO
