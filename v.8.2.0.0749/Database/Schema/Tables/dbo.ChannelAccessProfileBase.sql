CREATE TABLE [dbo].[ChannelAccessProfileBase]
(
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ChannelAccessProfileId] [uniqueidentifier] NOT NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[ViewKnowledgeArticles] [bit] NULL,
[CreatedOn] [datetime] NULL,
[SubmitFeedback] [bit] NULL,
[Name] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[OverriddenCreatedOn] [datetime] NULL,
[WebAccess] [bit] NULL,
[IsGuestProfile] [bit] NULL CONSTRAINT [DF_ChannelAccessProfileBase_IsGuestProfile] DEFAULT ((0)),
[OwningBusinessUnit] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[HavePrivilegesChanged] [bit] NULL CONSTRAINT [DF_ChannelAccessProfileBase_IsChildDirty] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ChannelAccessProfileBase_IsManaged] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ChannelAccessProfileBase_OverwriteTime] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[StateCode] [int] NOT NULL,
[FacebookAccess] [bit] NULL,
[TwitterAccess] [bit] NULL,
[VersionNumber] [timestamp] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[ChannelAccessProfileIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ChannelAccessProfileBase_ChannelAccessProfileIdUnique] DEFAULT (newid()),
[EmailAccess] [bit] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[RateKnowledgeArticles] [bit] NULL,
[ViewArticleRating] [bit] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ChannelAccessProfileBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[TransactionCurrencyId] [uniqueidentifier] NULL,
[PhoneAccess] [bit] NULL,
[ImportSequenceNumber] [int] NULL,
[StatusCode] [int] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ChannelAccessProfileBase_ComponentState] DEFAULT ((0)),
[UTCConversionTimeZoneCode] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ChannelAccessProfileBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelAccessProfileBase] ADD CONSTRAINT [cndx_PrimaryKey_ChannelAccessProfile] PRIMARY KEY CLUSTERED  ([ChannelAccessProfileId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[ChannelAccessProfileBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ChannelAccessProfileBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ChannelAccessProfileBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ChannelAccessProfileBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
