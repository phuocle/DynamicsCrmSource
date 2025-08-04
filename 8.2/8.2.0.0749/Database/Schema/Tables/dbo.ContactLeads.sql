CREATE TABLE [dbo].[ContactLeads]
(
[ContactId] [uniqueidentifier] NOT NULL,
[LeadId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[ContactLeadId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ContactLeads_ContactLeadId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactLeads] ADD CONSTRAINT [cndx_PrimaryKey_ContactLeads] PRIMARY KEY CLUSTERED  ([ContactLeadId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactLeads] ADD CONSTRAINT [UQ_ContactLeads] UNIQUE NONCLUSTERED  ([ContactId], [LeadId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_contacts] ON [dbo].[ContactLeads] ([LeadId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContactLeads] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactLeads] ADD CONSTRAINT [contact_leads] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[ContactLeads] ADD CONSTRAINT [lead_contacts] FOREIGN KEY ([LeadId]) REFERENCES [dbo].[LeadBase] ([LeadId])
GO
