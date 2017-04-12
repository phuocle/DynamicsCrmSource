CREATE TABLE [dbo].[RecommendationModelBaseIds]
(
[RecommendationModelId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendationModelBaseIds] ADD CONSTRAINT [PK_RecommendationModelBaseIds] PRIMARY KEY CLUSTERED  ([RecommendationModelId]) ON [PRIMARY]
GO
