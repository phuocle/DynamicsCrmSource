CREATE TABLE [dbo].[OfficeGraphDocumentBase] (
    [SiteUrl]                   NVARCHAR (100)   NULL,
    [OfficeGraphDocumentId]     UNIQUEIDENTIFIER NOT NULL,
    [ViewCount]                 INT              NULL,
    [DocumentPreviewMetadata]   NVARCHAR (200)   NULL,
    [FileType]                  NVARCHAR (2000)  NULL,
    [SiteTitle]                 NVARCHAR (100)   NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [FileExtension]             NVARCHAR (2000)  NULL,
    [CreatedBy]                 NVARCHAR (2000)  NULL,
    [DocumentLastModifiedOn]    DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [Rank]                      INT              NULL,
    [WebLocationUrl]            NVARCHAR (2000)  NULL,
    [DocumentId]                NVARCHAR (100)   NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [SecondaryFileExtension]    NVARCHAR (2000)  NULL,
    [PreviewImageUrl]           NVARCHAR (2000)  NULL,
    [CreatedTime]               DATETIME         NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ModifiedBy]                NVARCHAR (2000)  NULL,
    [Title]                     NVARCHAR (100)   NULL,
    [AuthorNames]               NVARCHAR (2000)  NULL,
    [ModifiedTime]              DATETIME         NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [DocumentLastModifiedBy]    NVARCHAR (100)   NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [ReadUrl]                   NVARCHAR (100)   NULL,
    [QueryType]                 INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_officegraphdocumentBase] PRIMARY KEY CLUSTERED ([OfficeGraphDocumentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_officegraphdocument] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[OfficeGraphDocumentBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[OfficeGraphDocumentBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OfficeGraphDocumentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_title]
    ON [dbo].[OfficeGraphDocumentBase]([Title] ASC) WITH (FILLFACTOR = 80);

