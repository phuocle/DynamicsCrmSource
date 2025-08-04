CREATE TABLE [dbo].[ContactLeads] (
    [ContactId]     UNIQUEIDENTIFIER NOT NULL,
    [LeadId]        UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber] ROWVERSION       NULL,
    [ContactLeadId] UNIQUEIDENTIFIER CONSTRAINT [DF_ContactLeads_ContactLeadId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ContactLeads] PRIMARY KEY CLUSTERED ([ContactLeadId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contact_leads] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]) NOT FOR REPLICATION,
    CONSTRAINT [lead_contacts] FOREIGN KEY ([LeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_ContactLeads] UNIQUE NONCLUSTERED ([ContactId] ASC, [LeadId] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_contacts]
    ON [dbo].[ContactLeads]([LeadId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContactLeads]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

