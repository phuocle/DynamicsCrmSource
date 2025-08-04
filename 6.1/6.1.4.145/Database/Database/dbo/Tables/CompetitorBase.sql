CREATE TABLE [dbo].[CompetitorBase] (
    [CompetitorId]              UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [Overview]                  NVARCHAR (MAX)   NULL,
    [ReferenceInfoUrl]          NVARCHAR (200)   NULL,
    [ReportedRevenue]           MONEY            NULL,
    [ReportingQuarter]          INT              NULL,
    [ReportingYear]             INT              NULL,
    [Strengths]                 NVARCHAR (MAX)   NULL,
    [Weaknesses]                NVARCHAR (MAX)   NULL,
    [Opportunities]             NVARCHAR (MAX)   NULL,
    [Threats]                   NVARCHAR (MAX)   NULL,
    [TickerSymbol]              NVARCHAR (10)    NULL,
    [KeyProduct]                NVARCHAR (200)   NULL,
    [StockExchange]             NVARCHAR (20)    NULL,
    [WinPercentage]             FLOAT (53)       NULL,
    [WebSiteUrl]                NVARCHAR (200)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ReportedRevenue_Base]      MONEY            NULL,
    [YomiName]                  NVARCHAR (100)   NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Competitor] PRIMARY KEY CLUSTERED ([CompetitorId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [transactioncurrency_competitor] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CompetitorBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[CompetitorBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CompetitorBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

