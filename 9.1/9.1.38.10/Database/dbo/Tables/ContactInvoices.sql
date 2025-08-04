CREATE TABLE [dbo].[ContactInvoices] (
    [ContactInvoiceId]          UNIQUEIDENTIFIER CONSTRAINT [DF_ContactInvoices_ContactInvoiceId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ContactId]                 UNIQUEIDENTIFIER NOT NULL,
    [InvoiceId]                 UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ContactInvoices] PRIMARY KEY CLUSTERED ([ContactInvoiceId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contact_invoices] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [invoice_contacts] FOREIGN KEY ([InvoiceId]) REFERENCES [dbo].[InvoiceBase] ([InvoiceId]),
    CONSTRAINT [UQ_ContactInvoices] UNIQUE NONCLUSTERED ([ContactId] ASC, [InvoiceId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[ContactInvoices] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContactInvoices]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_invoice_contacts]
    ON [dbo].[ContactInvoices]([InvoiceId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

