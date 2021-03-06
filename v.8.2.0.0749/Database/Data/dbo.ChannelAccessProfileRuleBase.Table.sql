USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ChannelAccessProfileRuleBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChannelAccessProfileRuleBase](
	[IsManaged] [bit] NOT NULL,
	[ChannelAccessProfileRuleIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[WorkflowId] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[VersionNumber] [timestamp] NULL,
	[IntroducedVersion] [nvarchar](48) NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[StatusCode] [int] NULL,
	[Name] [nvarchar](150) NULL,
	[Description] [nvarchar](max) NULL,
	[ComponentState] [int] NOT NULL,
	[ChannelAccessProfileRuleId] [uniqueidentifier] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [ cndx_PrimaryKey_ProfileRule] PRIMARY KEY CLUSTERED 
(
	[ChannelAccessProfileRuleId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ChannelAccessProfileRuleBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ChannelAccessProfileRuleBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[ChannelAccessProfileRuleBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ChannelAccessProfileRuleBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleBase] ADD  CONSTRAINT [DF_ChannelAccessProfileRuleBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleBase] ADD  CONSTRAINT [DF_ChannelAccessProfileRuleBase_ChannelAccessProfileRuleIdUnique]  DEFAULT (newid()) FOR [ChannelAccessProfileRuleIdUnique]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleBase] ADD  CONSTRAINT [DF_ChannelAccessProfileRuleBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleBase] ADD  CONSTRAINT [DF_ChannelAccessProfileRuleBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleBase] ADD  CONSTRAINT [DF_ChannelAccessProfileRuleBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleBase] ADD  CONSTRAINT [DF_ChannelAccessProfileRuleBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
