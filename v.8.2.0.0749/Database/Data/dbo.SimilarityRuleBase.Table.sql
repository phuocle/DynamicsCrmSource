USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SimilarityRuleBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SimilarityRuleBase](
	[Description] [nvarchar](max) NULL,
	[MatchingEntityTypeCode] [int] NOT NULL,
	[name] [nvarchar](100) NULL,
	[SimilarityRuleIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[statecode] [int] NOT NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[IsManaged] [bit] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[FetchXmlList] [nvarchar](max) NULL,
	[MaxKeyWords] [int] NULL,
	[ExcludeInactiveRecords] [bit] NULL,
	[BaseEntityName] [nvarchar](160) NULL,
	[ComponentState] [int] NOT NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[IntroducedVersion] [nvarchar](48) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[RuleConditionXml] [nvarchar](max) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[SimilarityRuleId] [uniqueidentifier] NOT NULL,
	[statuscode] [int] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[MatchingEntityName] [nvarchar](160) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[ActiveRuleFetchXML] [nvarchar](max) NULL,
	[BaseEntityTypeCode] [int] NOT NULL,
	[NgramSize] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
 CONSTRAINT [PK_SimilarityRuleBase] PRIMARY KEY CLUSTERED 
(
	[SimilarityRuleId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [UQ_SimilarityRuleBase_SimilarityRuleIdUnique]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SimilarityRuleBase] ADD  CONSTRAINT [UQ_SimilarityRuleBase_SimilarityRuleIdUnique] UNIQUE NONCLUSTERED 
(
	[SimilarityRuleIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SimilarityRuleBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[SimilarityRuleBase]
(
	[statecode] ASC,
	[statuscode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[SimilarityRuleBase]
(
	[name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SimilarityRuleBase] ADD  CONSTRAINT [DF_SimilarityRuleBase_SimilarityRuleIdUnique]  DEFAULT (newid()) FOR [SimilarityRuleIdUnique]
GO
ALTER TABLE [dbo].[SimilarityRuleBase] ADD  CONSTRAINT [DF_SimilarityRuleBase_statecode]  DEFAULT ((0)) FOR [statecode]
GO
ALTER TABLE [dbo].[SimilarityRuleBase] ADD  CONSTRAINT [DF_SimilarityRuleBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[SimilarityRuleBase] ADD  CONSTRAINT [DF_SimilarityRuleBase_ExcludeInactiveRecords]  DEFAULT ((0)) FOR [ExcludeInactiveRecords]
GO
ALTER TABLE [dbo].[SimilarityRuleBase] ADD  CONSTRAINT [DF_SimilarityRuleBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[SimilarityRuleBase] ADD  CONSTRAINT [DF_SimilarityRuleBase_statuscode]  DEFAULT ((0)) FOR [statuscode]
GO
ALTER TABLE [dbo].[SimilarityRuleBase] ADD  CONSTRAINT [DF_SimilarityRuleBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[SimilarityRuleBase] ADD  CONSTRAINT [DF_SimilarityRuleBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
