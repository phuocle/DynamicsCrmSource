CREATE TABLE [dbo].[CompetitorBase] (
    [CompetitorId]              UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [KeyProduct]                NVARCHAR (200)   NULL,
    [Opportunities]             NVARCHAR (MAX)   NULL,
    [Overview]                  NVARCHAR (MAX)   NULL,
    [ReferenceInfoUrl]          NVARCHAR (200)   NULL,
    [ReportedRevenue]           MONEY            NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ReportedRevenue_Base]      MONEY            NULL,
    [ReportingQuarter]          INT              NULL,
    [ReportingYear]             INT              NULL,
    [StockExchange]             NVARCHAR (20)    NULL,
    [Strengths]                 NVARCHAR (MAX)   NULL,
    [Threats]                   NVARCHAR (MAX)   NULL,
    [TickerSymbol]              NVARCHAR (10)    NULL,
    [Weaknesses]                NVARCHAR (MAX)   NULL,
    [WebSiteUrl]                NVARCHAR (200)   NULL,
    [WinPercentage]             FLOAT (53)       NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    [YomiName]                  NVARCHAR (100)   NULL,
    CONSTRAINT [cndx_PrimaryKey_Competitor] PRIMARY KEY CLUSTERED ([CompetitorId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [transactioncurrency_competitor] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CompetitorBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CompetitorBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CompetitorBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[CompetitorBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D2638A4D06274D57BD073E7241B54D6F]
    ON [dbo].[CompetitorBase]([CompetitorId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D2638A4D06274D57BD073E7241B54D6F]
    ON [dbo].[CompetitorBase]([CompetitorId] ASC)
    INCLUDE([Name], [WebSiteUrl], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D2638A4D06274D57BD073E7241B54D6F]
    ON [dbo].[CompetitorBase]([Name] ASC, [CompetitorId] ASC)
    INCLUDE([WebSiteUrl], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

