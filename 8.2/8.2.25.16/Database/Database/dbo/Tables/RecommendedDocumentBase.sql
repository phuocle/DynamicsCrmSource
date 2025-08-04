CREATE TABLE [dbo].[RecommendedDocumentBase] (
    [UTCConversionTimeZoneCode] INT              NULL,
    [FileType]                  NVARCHAR (200)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Location]                  NVARCHAR (200)   NULL,
    [RecommendedDocumentId]     UNIQUEIDENTIFIER NOT NULL,
    [FullName]                  NVARCHAR (160)   NULL,
    [ReadUrl]                   NVARCHAR (200)   NULL,
    [AbsoluteUrl]               NVARCHAR (200)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [AssociatedRecordName]      NVARCHAR (160)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [Title]                     NVARCHAR (160)   NULL,
    [ContentType]               NVARCHAR (200)   NULL,
    [EditUrl]                   NVARCHAR (200)   NULL,
    [Author]                    NVARCHAR (256)   NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [IconClassName]             NVARCHAR (160)   NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [Version]                   NVARCHAR (200)   NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [FileSize]                  INT              NULL,
    [ExternalDocumentId]        NVARCHAR (100)   NULL,
    [Source]                    NVARCHAR (256)   NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ExternalModifiedBy]        NVARCHAR (256)   NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    CONSTRAINT [PK_recommendeddocumentBase] PRIMARY KEY CLUSTERED ([RecommendedDocumentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_recommendeddocument] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[RecommendedDocumentBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RecommendedDocumentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_title]
    ON [dbo].[RecommendedDocumentBase]([Title] ASC) WITH (FILLFACTOR = 80);

