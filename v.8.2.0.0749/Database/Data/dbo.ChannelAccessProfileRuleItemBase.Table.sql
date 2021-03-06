USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ChannelAccessProfileRuleItemBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChannelAccessProfileRuleItemBase](
	[AssociatedChannelAccessProfile] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[VersionNumber] [timestamp] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[SequenceNumber] [int] NULL,
	[Description] [nvarchar](max) NULL,
	[ChannelAccessProfileRuleItemIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[CreatedOn] [datetime] NULL,
	[IsManaged] [bit] NOT NULL,
	[ChannelAccessProfileRuleId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[Name] [nvarchar](150) NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[ComponentState] [int] NOT NULL,
	[ConditionXml] [nvarchar](max) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ChannelAccessProfileRuleItemId] [uniqueidentifier] NOT NULL,
	[IntroducedVersion] [nvarchar](48) NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_ProfileRuleItem] PRIMARY KEY CLUSTERED 
(
	[ChannelAccessProfileRuleItemId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ChannelAccessProfileRuleItemBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[ChannelAccessProfileRuleItemBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleItemBase] ADD  CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleItemBase] ADD  CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_ChannelAccessProfileRuleItemIdUnique]  DEFAULT (newid()) FOR [ChannelAccessProfileRuleItemIdUnique]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleItemBase] ADD  CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleItemBase] ADD  CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleItemBase] ADD  CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
