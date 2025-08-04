CREATE TABLE [dbo].[SimilarityRuleBaseIds] (
    [SimilarityRuleId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SimilarityRuleBaseIds] PRIMARY KEY CLUSTERED ([SimilarityRuleId] ASC)
);


GO
ALTER TABLE [dbo].[SimilarityRuleBaseIds] SET (LOCK_ESCALATION = DISABLE);

