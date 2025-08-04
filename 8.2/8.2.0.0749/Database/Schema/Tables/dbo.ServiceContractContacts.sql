CREATE TABLE [dbo].[ServiceContractContacts]
(
[ContractId] [uniqueidentifier] NOT NULL,
[ContactId] [uniqueidentifier] NOT NULL,
[ServiceLevel] [int] NULL,
[VersionNumber] [timestamp] NULL,
[ServiceContractContactId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ServiceContractContacts_ServiceContractContactId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ServiceContractContacts] ADD CONSTRAINT [cndx_PrimaryKey_ServiceContractContacts] PRIMARY KEY CLUSTERED  ([ServiceContractContactId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_serviced_by_contract] ON [dbo].[ServiceContractContacts] ([ContactId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ServiceContractContacts] ADD CONSTRAINT [UQ_ServiceContractContacts] UNIQUE NONCLUSTERED  ([ContractId], [ContactId]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ServiceContractContacts] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ServiceContractContacts] ADD CONSTRAINT [contact_serviced_by_contract] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[ServiceContractContacts] ADD CONSTRAINT [has_service_contacts] FOREIGN KEY ([ContractId]) REFERENCES [dbo].[ContractBase] ([ContractId])
GO
