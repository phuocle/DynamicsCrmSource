CREATE TABLE [dbo].[EntitlementContacts] (
    [ContactId]            UNIQUEIDENTIFIER NOT NULL,
    [EntitlementContactId] UNIQUEIDENTIFIER CONSTRAINT [DF_EntitlementContacts_EntitlementContactId] DEFAULT (newid()) NOT NULL,
    [EntitlementId]        UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_EntitlementContacts] PRIMARY KEY CLUSTERED ([EntitlementContactId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contact_entitlementcontacts] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]) NOT FOR REPLICATION,
    CONSTRAINT [entitlement_entitlementcontacts] FOREIGN KEY ([EntitlementId]) REFERENCES [dbo].[EntitlementBase] ([EntitlementId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_EntitlementContacts] UNIQUE NONCLUSTERED ([ContactId] ASC, [EntitlementId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entitlement_contacts]
    ON [dbo].[EntitlementContacts]([EntitlementId] ASC) WITH (FILLFACTOR = 80);

