CREATE TABLE [dbo].[ServiceContractContacts] (
    [ContractId]               UNIQUEIDENTIFIER NOT NULL,
    [ContactId]                UNIQUEIDENTIFIER NOT NULL,
    [ServiceLevel]             INT              NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [ServiceContractContactId] UNIQUEIDENTIFIER CONSTRAINT [DF_ServiceContractContacts_ServiceContractContactId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ServiceContractContacts] PRIMARY KEY CLUSTERED ([ServiceContractContactId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contact_serviced_by_contract] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]) NOT FOR REPLICATION,
    CONSTRAINT [has_service_contacts] FOREIGN KEY ([ContractId]) REFERENCES [dbo].[ContractBase] ([ContractId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_ServiceContractContacts] UNIQUE NONCLUSTERED ([ContractId] ASC, [ContactId] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_serviced_by_contract]
    ON [dbo].[ServiceContractContacts]([ContactId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ServiceContractContacts]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

