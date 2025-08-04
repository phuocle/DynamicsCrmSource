CREATE TABLE [dbo].[ServiceContractContacts] (
    [ServiceContractContactId]  UNIQUEIDENTIFIER CONSTRAINT [DF_ServiceContractContacts_ServiceContractContactId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ContactId]                 UNIQUEIDENTIFIER NOT NULL,
    [ContractId]                UNIQUEIDENTIFIER NOT NULL,
    [ServiceLevel]              INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_ServiceContractContacts] PRIMARY KEY CLUSTERED ([ServiceContractContactId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contact_serviced_by_contract] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [has_service_contacts] FOREIGN KEY ([ContractId]) REFERENCES [dbo].[ContractBase] ([ContractId]),
    CONSTRAINT [UQ_ServiceContractContacts] UNIQUE NONCLUSTERED ([ContractId] ASC, [ContactId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[ServiceContractContacts] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ServiceContractContacts]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_serviced_by_contract]
    ON [dbo].[ServiceContractContacts]([ContactId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

