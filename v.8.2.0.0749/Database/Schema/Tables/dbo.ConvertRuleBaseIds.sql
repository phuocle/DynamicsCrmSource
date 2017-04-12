CREATE TABLE [dbo].[ConvertRuleBaseIds]
(
[ConvertRuleId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConvertRuleBaseIds] ADD CONSTRAINT [PK_ConvertRuleBaseIds] PRIMARY KEY CLUSTERED  ([ConvertRuleId]) ON [PRIMARY]
GO
