USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RoutingRuleItemBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoutingRuleItemBase](
	[ComponentState] [int] NOT NULL,
	[ConditionXml] [nvarchar](max) NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[RoutingRuleItemId] [uniqueidentifier] NOT NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[AssignObjectIdModifiedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NULL,
	[SequenceNumber] [int] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[IsManaged] [bit] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[VersionNumber] [timestamp] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[RoutedQueueId] [uniqueidentifier] NULL,
	[AssignObjectId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[RoutingRuleId] [uniqueidentifier] NOT NULL,
	[RoutingRuleItemIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[AssignObjectIdType] [int] NULL,
	[AssignObjectIdName] [nvarchar](4000) NULL,
	[AssignObjectIdYomiName] [nvarchar](4000) NULL,
 CONSTRAINT [cndx_PrimaryKey_RoutingRuleItem] PRIMARY KEY CLUSTERED 
(
	[RoutingRuleItemId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [UQ_RoutingRuleItem_RoutingRuleItemIdUnique]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[RoutingRuleItemBase] ADD  CONSTRAINT [UQ_RoutingRuleItem_RoutingRuleItemIdUnique] UNIQUE NONCLUSTERED 
(
	[RoutingRuleItemIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_routingrule_entries]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_routingrule_entries] ON [dbo].[RoutingRuleItemBase]
(
	[RoutingRuleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_TitleRoutingRuleItemId]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_TitleRoutingRuleItemId] ON [dbo].[RoutingRuleItemBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_assignobjectid]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_assignobjectid] ON [dbo].[RoutingRuleItemBase]
(
	[AssignObjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoutingRuleItemBase] ADD  CONSTRAINT [DF_RoutingRuleItemBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[RoutingRuleItemBase] ADD  CONSTRAINT [DF_RoutingRuleItemBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[RoutingRuleItemBase] ADD  CONSTRAINT [DF_RoutingRuleItemBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[RoutingRuleItemBase] ADD  CONSTRAINT [DF_RoutingRuleItemBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[RoutingRuleItemBase] ADD  CONSTRAINT [DF_RoutingRuleItemBase_RoutingRuleItemIdUnique]  DEFAULT (newid()) FOR [RoutingRuleItemIdUnique]
GO
