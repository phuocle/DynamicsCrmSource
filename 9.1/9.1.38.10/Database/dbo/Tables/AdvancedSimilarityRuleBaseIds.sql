CREATE TABLE [dbo].[AdvancedSimilarityRuleBaseIds] (
    [AdvancedSimilarityRuleId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_AdvancedSimilarityRuleBaseIds] PRIMARY KEY CLUSTERED ([AdvancedSimilarityRuleId] ASC)
);


GO
ALTER TABLE [dbo].[AdvancedSimilarityRuleBaseIds] SET (LOCK_ESCALATION = DISABLE);

