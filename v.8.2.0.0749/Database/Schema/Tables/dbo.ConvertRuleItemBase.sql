CREATE TABLE [dbo].[ConvertRuleItemBase]
(
[ModifiedOn] [datetime] NULL,
[ConditionId] [uniqueidentifier] NULL,
[ConvertRuleItemIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ConvertRuleItemBase_ConvertRuleItemIdUnique] DEFAULT (newid()),
[ConvertRuleId] [uniqueidentifier] NOT NULL,
[QueueId] [uniqueidentifier] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ConvertRuleItemBase_IsManaged] DEFAULT ((0)),
[SequenceNumber] [int] NULL,
[PropertiesXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ConvertRuleItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ConditionXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ConvertRuleItemBase_OverwriteTime] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[CreatedOn] [datetime] NULL,
[ConvertRuleItemId] [uniqueidentifier] NOT NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ConvertRuleItemBase_ComponentState] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[WorkflowId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConvertRuleItemBase] ADD CONSTRAINT [cndx_PrimaryKey_ConvertRuleItemId] PRIMARY KEY CLUSTERED  ([ConvertRuleItemId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConvertRuleItemBase] ADD CONSTRAINT [UQ_ConvertRuleItem_ConvertRuleItemIdUnique] UNIQUE NONCLUSTERED  ([ConvertRuleItemIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[ConvertRuleItemBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
