CREATE TABLE [dbo].[ConvertRuleBaseIds] (
    [ConvertRuleId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_ConvertRuleBaseIds] PRIMARY KEY CLUSTERED ([ConvertRuleId] ASC)
);


GO
ALTER TABLE [dbo].[ConvertRuleBaseIds] SET (LOCK_ESCALATION = DISABLE);

