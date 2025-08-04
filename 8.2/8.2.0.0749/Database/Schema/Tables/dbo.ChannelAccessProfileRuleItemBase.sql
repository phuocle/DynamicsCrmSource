CREATE TABLE [dbo].[ChannelAccessProfileRuleItemBase]
(
[AssociatedChannelAccessProfile] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[VersionNumber] [timestamp] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[SequenceNumber] [int] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ChannelAccessProfileRuleItemIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_ChannelAccessProfileRuleItemIdUnique] DEFAULT (newid()),
[CreatedOn] [datetime] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_IsManaged] DEFAULT ((0)),
[ChannelAccessProfileRuleId] [uniqueidentifier] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[Name] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_OverwriteTime] DEFAULT ((0)),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_ComponentState] DEFAULT ((0)),
[ConditionXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ChannelAccessProfileRuleItemId] [uniqueidentifier] NOT NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleItemBase] ADD CONSTRAINT [cndx_PrimaryKey_ProfileRuleItem] PRIMARY KEY CLUSTERED  ([ChannelAccessProfileRuleItemId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[ChannelAccessProfileRuleItemBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ChannelAccessProfileRuleItemBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
