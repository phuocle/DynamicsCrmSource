CREATE TABLE [dbo].[ContactLeads] (
    [ContactLeadId]             UNIQUEIDENTIFIER CONSTRAINT [DF_ContactLeads_ContactLeadId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ContactId]                 UNIQUEIDENTIFIER NOT NULL,
    [LeadId]                    UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ContactLeads] PRIMARY KEY CLUSTERED ([ContactLeadId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contact_leads] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [lead_contacts] FOREIGN KEY ([LeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]),
    CONSTRAINT [UQ_ContactLeads] UNIQUE NONCLUSTERED ([ContactId] ASC, [LeadId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[ContactLeads] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContactLeads]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_contacts]
    ON [dbo].[ContactLeads]([LeadId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

