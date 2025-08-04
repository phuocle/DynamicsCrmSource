CREATE TABLE [dbo].[SimilarityRuleBaseIds]
(
[SimilarityRuleId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SimilarityRuleBaseIds] ADD CONSTRAINT [PK_SimilarityRuleBaseIds] PRIMARY KEY CLUSTERED  ([SimilarityRuleId]) ON [PRIMARY]
GO
