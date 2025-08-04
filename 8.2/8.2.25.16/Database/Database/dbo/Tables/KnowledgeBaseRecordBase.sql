CREATE TABLE [dbo].[KnowledgeBaseRecordBase] (
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [KnowledgeBaseRecordId]     UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [UniqueId]                  NVARCHAR (128)   NULL,
    [ModifiedOn]                DATETIME         NULL,
    [PublicUrl]                 NVARCHAR (256)   NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [CreatedOn]                 DATETIME         NULL,
    [PrivateUrl]                NVARCHAR (256)   NULL,
    [Title]                     NVARCHAR (2000)  NULL,
    CONSTRAINT [PK_KnowledgeBaseRecordBase] PRIMARY KEY CLUSTERED ([KnowledgeBaseRecordId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_KnowledgeBaseRecord] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[KnowledgeBaseRecordBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KnowledgeBaseRecordBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

