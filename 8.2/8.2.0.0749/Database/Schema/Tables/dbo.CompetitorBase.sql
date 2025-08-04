CREATE TABLE [dbo].[CompetitorBase]
(
[CompetitorId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[Overview] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ReferenceInfoUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ReportedRevenue] [money] NULL,
[ReportingQuarter] [int] NULL,
[ReportingYear] [int] NULL,
[Strengths] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Weaknesses] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Opportunities] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Threats] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TickerSymbol] [nvarchar] (10) COLLATE Latin1_General_CI_AI NULL,
[KeyProduct] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[StockExchange] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[WinPercentage] [float] NULL,
[WebSiteUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[ReportedRevenue_Base] [money] NULL,
[YomiName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[StageId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorBase] ADD CONSTRAINT [cndx_PrimaryKey_Competitor] PRIMARY KEY CLUSTERED  ([CompetitorId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[CompetitorBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CompetitorBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorBase] ADD CONSTRAINT [transactioncurrency_competitor] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
