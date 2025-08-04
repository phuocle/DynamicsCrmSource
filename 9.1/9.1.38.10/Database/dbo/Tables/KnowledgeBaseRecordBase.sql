CREATE TABLE [dbo].[KnowledgeBaseRecordBase] (
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedOn]                DATETIME         NULL,
    [KnowledgeBaseRecordId]     UNIQUEIDENTIFIER NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [Title]                     NVARCHAR (2000)  NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [PublicUrl]                 NVARCHAR (256)   NULL,
    [UniqueId]                  NVARCHAR (128)   NULL,
    [PrivateUrl]                NVARCHAR (256)   NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Title_QF_prefix]           AS               (CONVERT([nvarchar](850),substring([Title],(1),(850)))),
    CONSTRAINT [PK_KnowledgeBaseRecordBase] PRIMARY KEY CLUSTERED ([KnowledgeBaseRecordId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_KnowledgeBaseRecord] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[KnowledgeBaseRecordBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[KnowledgeBaseRecordBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[KnowledgeBaseRecordBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_AFF5889C6C224BC89B4E77EF3DB6D318]
    ON [dbo].[KnowledgeBaseRecordBase]([KnowledgeBaseRecordId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_AFF5889C6C224BC89B4E77EF3DB6D318]
    ON [dbo].[KnowledgeBaseRecordBase]([KnowledgeBaseRecordId] ASC)
    INCLUDE([Title], [PrivateUrl], [PublicUrl], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[KnowledgeBaseRecordBase]([Title_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

