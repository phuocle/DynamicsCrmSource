CREATE TABLE [dbo].[ChannelAccessProfileRuleBase]
(
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ChannelAccessProfileRuleBase_IsManaged] DEFAULT ((0)),
[ChannelAccessProfileRuleIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ChannelAccessProfileRuleBase_ChannelAccessProfileRuleIdUnique] DEFAULT (newid()),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ChannelAccessProfileRuleBase_OverwriteTime] DEFAULT ((0)),
[OwnerId] [uniqueidentifier] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ChannelAccessProfileRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NULL,
[WorkflowId] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[VersionNumber] [timestamp] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[StatusCode] [int] NULL,
[Name] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ChannelAccessProfileRuleBase_ComponentState] DEFAULT ((0)),
[ChannelAccessProfileRuleId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ChannelAccessProfileRuleBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleBase] ADD CONSTRAINT [ cndx_PrimaryKey_ProfileRule] PRIMARY KEY CLUSTERED  ([ChannelAccessProfileRuleId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[ChannelAccessProfileRuleBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ChannelAccessProfileRuleBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ChannelAccessProfileRuleBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ChannelAccessProfileRuleBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
