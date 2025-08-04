CREATE TABLE [dbo].[RecommendedDocumentBase] (
    [ContentType]               NVARCHAR (200)   NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [ReadUrl]                   NVARCHAR (200)   NULL,
    [FileType]                  NVARCHAR (200)   NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [AssociatedRecordName]      NVARCHAR (160)   NULL,
    [Source]                    NVARCHAR (256)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ExternalModifiedBy]        NVARCHAR (256)   NULL,
    [Location]                  NVARCHAR (200)   NULL,
    [ExternalDocumentId]        NVARCHAR (100)   NULL,
    [EditUrl]                   NVARCHAR (200)   NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [FileSize]                  INT              NULL,
    [Title]                     NVARCHAR (160)   NULL,
    [Version]                   NVARCHAR (200)   NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [RecommendedDocumentId]     UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [IconClassName]             NVARCHAR (160)   NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [AbsoluteUrl]               NVARCHAR (200)   NULL,
    [ModifiedOn]                DATETIME         NULL,
    [FullName]                  NVARCHAR (160)   NULL,
    [Author]                    NVARCHAR (256)   NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    CONSTRAINT [PK_recommendeddocumentBase] PRIMARY KEY CLUSTERED ([RecommendedDocumentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_recommendeddocument] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[RecommendedDocumentBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[RecommendedDocumentBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RecommendedDocumentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_title]
    ON [dbo].[RecommendedDocumentBase]([Title] ASC) WITH (FILLFACTOR = 80);

