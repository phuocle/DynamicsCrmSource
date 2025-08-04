CREATE TABLE [dbo].[ContactInvoices] (
    [ContactId]        UNIQUEIDENTIFIER NOT NULL,
    [InvoiceId]        UNIQUEIDENTIFIER NOT NULL,
    [ContactInvoiceId] UNIQUEIDENTIFIER CONSTRAINT [DF_ContactInvoices_ContactInvoiceId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]    ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_ContactInvoices] PRIMARY KEY CLUSTERED ([ContactInvoiceId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contact_invoices] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]) NOT FOR REPLICATION,
    CONSTRAINT [invoice_contacts] FOREIGN KEY ([InvoiceId]) REFERENCES [dbo].[InvoiceBase] ([InvoiceId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_ContactInvoices] UNIQUE NONCLUSTERED ([ContactId] ASC, [InvoiceId] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_invoice_contacts]
    ON [dbo].[ContactInvoices]([InvoiceId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContactInvoices]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

