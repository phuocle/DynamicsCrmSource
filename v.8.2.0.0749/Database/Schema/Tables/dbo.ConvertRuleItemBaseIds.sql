CREATE TABLE [dbo].[ConvertRuleItemBaseIds]
(
[ConvertRuleItemId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConvertRuleItemBaseIds] ADD CONSTRAINT [PK_ConvertRuleItemBaseIds] PRIMARY KEY CLUSTERED  ([ConvertRuleItemId]) ON [PRIMARY]
GO
