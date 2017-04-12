CREATE TABLE [dbo].[EntitlementContacts]
(
[ContactId] [uniqueidentifier] NOT NULL,
[EntitlementId] [uniqueidentifier] NOT NULL,
[EntitlementContactId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_EntitlementContacts_EntitlementContactId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementContacts] ADD CONSTRAINT [cndx_PrimaryKey_EntitlementContacts] PRIMARY KEY CLUSTERED  ([EntitlementContactId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementContacts] ADD CONSTRAINT [UQ_EntitlementContacts] UNIQUE NONCLUSTERED  ([ContactId], [EntitlementId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entitlement_contacts] ON [dbo].[EntitlementContacts] ([EntitlementId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EntitlementContacts] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementContacts] ADD CONSTRAINT [contact_entitlementcontacts] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[EntitlementContacts] ADD CONSTRAINT [entitlement_entitlementcontacts] FOREIGN KEY ([EntitlementId]) REFERENCES [dbo].[EntitlementBase] ([EntitlementId])
GO
