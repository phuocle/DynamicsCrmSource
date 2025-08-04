CREATE TABLE [dbo].[ConvertRuleBase]
(
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ConvertRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[AllowUnknownSender] [bit] NULL CONSTRAINT [DF_ConvertRuleBase_AllowUnknownSender] DEFAULT ((0)),
[SendAutomaticResponse] [bit] NULL CONSTRAINT [DF_ConvertRuleBase_SendAutomaticResponse] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CheckBlockedSocialProfile] [bit] NULL CONSTRAINT [DF_ConvertRuleBase_CheckBlockedSocialProfile] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ConvertRuleBase_OverwriteTime] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[CheckDirectMessages] [bit] NULL CONSTRAINT [DF_ConvertRuleBase_CheckDirectMessages] DEFAULT ((0)),
[StatusCode] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ConvertRuleBase_ComponentState] DEFAULT ((0)),
[CheckActiveEntitlement] [bit] NULL CONSTRAINT [DF_ConvertRuleBase_CheckActiveEntitlement] DEFAULT ((0)),
[ResponseTemplateId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[CheckIfResolved] [bit] NULL CONSTRAINT [DF_ConvertRuleBase_CheckIfResolved] DEFAULT ((0)),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[QueueId] [uniqueidentifier] NULL,
[ConvertRuleId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[StateCode] [int] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[ConvertRuleIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ConvertRuleBase_ConvertRuleIdUnique] DEFAULT (newid()),
[TransactionCurrencyId] [uniqueidentifier] NULL,
[SourceTypeCode] [int] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ConvertRuleBase_IsManaged] DEFAULT ((0)),
[WorkflowId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ResolvedSince] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ConvertRuleBase_OwnerIdType] DEFAULT ((8)),
[SourceChannelTypeCode] [int] NULL,
[RecordVersion] [nvarchar] (25) COLLATE Latin1_General_CI_AI NOT NULL CONSTRAINT [DF_ConvertRuleBase_RecordVersion] DEFAULT ('7.0.0.0'),
[ChannelPropertyGroupId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD CONSTRAINT [cndx_PrimaryKey_ConvertRule] PRIMARY KEY CLUSTERED  ([ConvertRuleId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD CONSTRAINT [UQ_ConvertRuleBase_ConvertRuleIdUnique] UNIQUE NONCLUSTERED  ([ConvertRuleIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[ConvertRuleBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ConvertRuleBase] ([QueueId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
