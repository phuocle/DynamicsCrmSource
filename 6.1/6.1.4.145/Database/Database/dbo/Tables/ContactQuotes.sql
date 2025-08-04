CREATE TABLE [dbo].[ContactQuotes] (
    [ContactId]      UNIQUEIDENTIFIER NOT NULL,
    [QuoteId]        UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]  ROWVERSION       NULL,
    [ContactQuoteId] UNIQUEIDENTIFIER CONSTRAINT [DF_ContactQuotes_ContactQuoteId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ContactQuotes] PRIMARY KEY CLUSTERED ([ContactQuoteId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contact_quotes] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]) NOT FOR REPLICATION,
    CONSTRAINT [quote_contacts] FOREIGN KEY ([QuoteId]) REFERENCES [dbo].[QuoteBase] ([QuoteId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_ContactQuotes] UNIQUE NONCLUSTERED ([ContactId] ASC, [QuoteId] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContactQuotes]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_quote_contacts]
    ON [dbo].[ContactQuotes]([QuoteId] ASC) WITH (FILLFACTOR = 80);

