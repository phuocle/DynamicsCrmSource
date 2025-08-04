CREATE TABLE [dbo].[OfficeGraphDocumentBase] (
    [ReadUrl]                   NVARCHAR (100)   NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ViewCount]                 INT              NULL,
    [FileType]                  NVARCHAR (2000)  NULL,
    [Rank]                      INT              NULL,
    [CreatedBy]                 NVARCHAR (2000)  NULL,
    [FileExtension]             NVARCHAR (2000)  NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [AuthorNames]               NVARCHAR (2000)  NULL,
    [DocumentPreviewMetadata]   NVARCHAR (200)   NULL,
    [ModifiedBy]                NVARCHAR (2000)  NULL,
    [CreatedTime]               DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [QueryType]                 INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [DocumentLastModifiedOn]    DATETIME         NULL,
    [DocumentId]                NVARCHAR (100)   NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [PreviewImageUrl]           NVARCHAR (2000)  NULL,
    [WebLocationUrl]            NVARCHAR (2000)  NULL,
    [SecondaryFileExtension]    NVARCHAR (2000)  NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [OfficeGraphDocumentId]     UNIQUEIDENTIFIER NOT NULL,
    [DocumentLastModifiedBy]    NVARCHAR (100)   NULL,
    [SiteUrl]                   NVARCHAR (100)   NULL,
    [SiteTitle]                 NVARCHAR (100)   NULL,
    [Title]                     NVARCHAR (100)   NULL,
    [ModifiedTime]              DATETIME         NULL,
    CONSTRAINT [PK_officegraphdocumentBase] PRIMARY KEY CLUSTERED ([OfficeGraphDocumentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_officegraphdocument] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[OfficeGraphDocumentBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OfficeGraphDocumentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_title]
    ON [dbo].[OfficeGraphDocumentBase]([Title] ASC) WITH (FILLFACTOR = 80);

