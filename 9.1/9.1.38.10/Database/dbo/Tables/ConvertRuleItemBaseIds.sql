CREATE TABLE [dbo].[ConvertRuleItemBaseIds] (
    [ConvertRuleItemId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_ConvertRuleItemBaseIds] PRIMARY KEY CLUSTERED ([ConvertRuleItemId] ASC)
);


GO
ALTER TABLE [dbo].[ConvertRuleItemBaseIds] SET (LOCK_ESCALATION = DISABLE);

