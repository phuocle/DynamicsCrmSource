CREATE TABLE [dbo].[AdvancedSimilarityRuleBaseIds]
(
[AdvancedSimilarityRuleId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AdvancedSimilarityRuleBaseIds] ADD CONSTRAINT [PK_AdvancedSimilarityRuleBaseIds] PRIMARY KEY CLUSTERED  ([AdvancedSimilarityRuleId]) ON [PRIMARY]
GO
