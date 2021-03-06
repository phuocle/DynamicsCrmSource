USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ChannelAccessProfileBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChannelAccessProfileBase](
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ChannelAccessProfileId] [uniqueidentifier] NOT NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[ViewKnowledgeArticles] [bit] NULL,
	[CreatedOn] [datetime] NULL,
	[SubmitFeedback] [bit] NULL,
	[Name] [nvarchar](150) NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[WebAccess] [bit] NULL,
	[IsGuestProfile] [bit] NULL CONSTRAINT [DF_ChannelAccessProfileBase_IsGuestProfile]  DEFAULT ((0)),
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[HavePrivilegesChanged] [bit] NULL CONSTRAINT [DF_ChannelAccessProfileBase_IsChildDirty]  DEFAULT ((0)),
	[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ChannelAccessProfileBase_IsManaged]  DEFAULT ((0)),
	[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ChannelAccessProfileBase_OverwriteTime]  DEFAULT ((0)),
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[StateCode] [int] NOT NULL,
	[FacebookAccess] [bit] NULL,
	[TwitterAccess] [bit] NULL,
	[VersionNumber] [timestamp] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ChannelAccessProfileIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_ChannelAccessProfileBase_ChannelAccessProfileIdUnique]  DEFAULT (newid()),
	[EmailAccess] [bit] NULL,
	[IntroducedVersion] [nvarchar](48) NULL,
	[RateKnowledgeArticles] [bit] NULL,
	[ViewArticleRating] [bit] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ChannelAccessProfileBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[PhoneAccess] [bit] NULL,
	[ImportSequenceNumber] [int] NULL,
	[StatusCode] [int] NULL,
	[ComponentState] [int] NOT NULL CONSTRAINT [DF_ChannelAccessProfileBase_ComponentState]  DEFAULT ((0)),
	[UTCConversionTimeZoneCode] [int] NULL,
	[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ChannelAccessProfileBase_OwnerIdType]  DEFAULT ((8)),
 CONSTRAINT [cndx_PrimaryKey_ChannelAccessProfile] PRIMARY KEY CLUSTERED 
(
	[ChannelAccessProfileId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[ChannelAccessProfileBase] ([ModifiedOnBehalfBy], [ChannelAccessProfileId], [TimeZoneRuleVersionNumber], [SupportingSolutionId], [ViewKnowledgeArticles], [CreatedOn], [SubmitFeedback], [Name], [OverriddenCreatedOn], [WebAccess], [IsGuestProfile], [OwningBusinessUnit], [CreatedOnBehalfBy], [ModifiedOn], [HavePrivilegesChanged], [IsManaged], [OverwriteTime], [CreatedBy], [ModifiedBy], [ExchangeRate], [StateCode], [FacebookAccess], [TwitterAccess], [OwnerId], [ChannelAccessProfileIdUnique], [EmailAccess], [IntroducedVersion], [RateKnowledgeArticles], [ViewArticleRating], [SolutionId], [TransactionCurrencyId], [PhoneAccess], [ImportSequenceNumber], [StatusCode], [ComponentState], [UTCConversionTimeZoneCode], [OwnerIdType]) VALUES (NULL, N'ad781ef1-8c15-e511-a1ce-0023ae753112', NULL, N'00000000-0000-0000-0000-000000000000', 1, CAST(N'2017-04-10 13:48:36.000' AS DateTime), 1, N'Guest Channel Access Profile', NULL, 1, 1, N'c6acfcbe-f31d-e711-80d3-00155d00662d', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 14:24:57.000' AS DateTime), 0, 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, 0, 1, 1, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'6cf8e61a-e37a-4dfc-ae42-1d9cb34863aa', 1, N'5.0', 1, 1, N'fd140aad-4df4-11dd-bd17-0019b9312238', NULL, 1, NULL, 1, 0, NULL, 8)
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ChannelAccessProfileBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ChannelAccessProfileBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[ChannelAccessProfileBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ChannelAccessProfileBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
