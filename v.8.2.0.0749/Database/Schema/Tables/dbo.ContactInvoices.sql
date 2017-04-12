CREATE TABLE [dbo].[ContactInvoices]
(
[ContactId] [uniqueidentifier] NOT NULL,
[InvoiceId] [uniqueidentifier] NOT NULL,
[ContactInvoiceId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ContactInvoices_ContactInvoiceId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactInvoices] ADD CONSTRAINT [cndx_PrimaryKey_ContactInvoices] PRIMARY KEY CLUSTERED  ([ContactInvoiceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactInvoices] ADD CONSTRAINT [UQ_ContactInvoices] UNIQUE NONCLUSTERED  ([ContactId], [InvoiceId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_invoice_contacts] ON [dbo].[ContactInvoices] ([InvoiceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContactInvoices] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactInvoices] ADD CONSTRAINT [contact_invoices] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[ContactInvoices] ADD CONSTRAINT [invoice_contacts] FOREIGN KEY ([InvoiceId]) REFERENCES [dbo].[InvoiceBase] ([InvoiceId])
GO
