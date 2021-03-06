USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CompetitorBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompetitorBase](
	[CompetitorId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Overview] [nvarchar](max) NULL,
	[ReferenceInfoUrl] [nvarchar](200) NULL,
	[ReportedRevenue] [money] NULL,
	[ReportingQuarter] [int] NULL,
	[ReportingYear] [int] NULL,
	[Strengths] [nvarchar](max) NULL,
	[Weaknesses] [nvarchar](max) NULL,
	[Opportunities] [nvarchar](max) NULL,
	[Threats] [nvarchar](max) NULL,
	[TickerSymbol] [nvarchar](10) NULL,
	[KeyProduct] [nvarchar](200) NULL,
	[StockExchange] [nvarchar](20) NULL,
	[WinPercentage] [float] NULL,
	[WebSiteUrl] [nvarchar](200) NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ReportedRevenue_Base] [money] NULL,
	[YomiName] [nvarchar](100) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[StageId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
 CONSTRAINT [cndx_PrimaryKey_Competitor] PRIMARY KEY CLUSTERED 
(
	[CompetitorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CompetitorBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[CompetitorBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_competitor] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[CompetitorBase] CHECK CONSTRAINT [transactioncurrency_competitor]
GO
