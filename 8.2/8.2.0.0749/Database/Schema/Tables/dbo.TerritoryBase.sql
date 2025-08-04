CREATE TABLE [dbo].[TerritoryBase]
(
[TerritoryId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ManagerId] [uniqueidentifier] NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[EntityImageId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[TerritoryBase] ADD CONSTRAINT [cndx_PrimaryKey_Territory] PRIMARY KEY CLUSTERED  ([TerritoryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_territories] ON [dbo].[TerritoryBase] ([ManagerId]) WHERE ([ManagerId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[TerritoryBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TerritoryBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TerritoryBase] ADD CONSTRAINT [system_user_territories] FOREIGN KEY ([ManagerId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[TerritoryBase] ADD CONSTRAINT [TransactionCurrency_Territory] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
