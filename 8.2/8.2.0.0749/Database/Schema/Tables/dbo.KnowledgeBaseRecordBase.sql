CREATE TABLE [dbo].[KnowledgeBaseRecordBase]
(
[TransactionCurrencyId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[KnowledgeBaseRecordId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NULL,
[UniqueId] [nvarchar] (128) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[PublicUrl] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[CreatedOn] [datetime] NULL,
[PrivateUrl] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[Title] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeBaseRecordBase] ADD CONSTRAINT [PK_KnowledgeBaseRecordBase] PRIMARY KEY CLUSTERED  ([KnowledgeBaseRecordId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[KnowledgeBaseRecordBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KnowledgeBaseRecordBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeBaseRecordBase] ADD CONSTRAINT [TransactionCurrency_KnowledgeBaseRecord] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
