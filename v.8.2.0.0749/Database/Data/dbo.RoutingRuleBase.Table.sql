USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RoutingRuleBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoutingRuleBase](
	[Name] [nvarchar](100) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[RoutingRuleIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[IsManaged] [bit] NOT NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[RoutingRuleId] [uniqueidentifier] NOT NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[Description] [nvarchar](max) NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[WorkflowId] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[ComponentState] [int] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_RoutingRule] PRIMARY KEY CLUSTERED 
(
	[RoutingRuleId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [UQ_RoutingRuleBase_RoutingRuleIdUnique]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[RoutingRuleBase] ADD  CONSTRAINT [UQ_RoutingRuleBase_RoutingRuleIdUnique] UNIQUE NONCLUSTERED 
(
	[RoutingRuleIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[RoutingRuleBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[RoutingRuleBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[RoutingRuleBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoutingRuleBase] ADD  CONSTRAINT [DF_RoutingRuleBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[RoutingRuleBase] ADD  CONSTRAINT [DF_RoutingRuleBase_RoutingRuleIdUnique]  DEFAULT (newid()) FOR [RoutingRuleIdUnique]
GO
ALTER TABLE [dbo].[RoutingRuleBase] ADD  CONSTRAINT [DF_RoutingRuleBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[RoutingRuleBase] ADD  CONSTRAINT [DF_RoutingRuleBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[RoutingRuleBase] ADD  CONSTRAINT [DF_RoutingRuleBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[RoutingRuleBase] ADD  CONSTRAINT [DF_RoutingRuleBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
