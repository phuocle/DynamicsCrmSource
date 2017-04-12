CREATE TABLE [dbo].[DuplicateRuleConditionBase]
(
[CreatedBy] [uniqueidentifier] NULL,
[OperatorParam] [int] NULL,
[OperatorCode] [int] NULL,
[ModifiedOn] [datetime] NOT NULL,
[BaseAttributeName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NOT NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[DuplicateRuleConditionId] [uniqueidentifier] NOT NULL,
[MatchingAttributeName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[IgnoreBlankValues] [bit] NULL CONSTRAINT [DF_DuplicateRuleConditionBase_IgnoreBlankValues] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DuplicateRuleConditionBase] ADD CONSTRAINT [cndx_PrimaryKey_DuplicateRuleCondition] PRIMARY KEY CLUSTERED  ([DuplicateRuleConditionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_DuplicateRule] ON [dbo].[DuplicateRuleConditionBase] ([RegardingObjectId]) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
