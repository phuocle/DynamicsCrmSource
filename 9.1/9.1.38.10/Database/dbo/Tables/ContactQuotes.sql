CREATE TABLE [dbo].[ContactQuotes] (
    [ContactQuoteId]            UNIQUEIDENTIFIER CONSTRAINT [DF_ContactQuotes_ContactQuoteId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ContactId]                 UNIQUEIDENTIFIER NOT NULL,
    [QuoteId]                   UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ContactQuotes] PRIMARY KEY CLUSTERED ([ContactQuoteId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contact_quotes] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [quote_contacts] FOREIGN KEY ([QuoteId]) REFERENCES [dbo].[QuoteBase] ([QuoteId]),
    CONSTRAINT [UQ_ContactQuotes] UNIQUE NONCLUSTERED ([ContactId] ASC, [QuoteId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[ContactQuotes] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContactQuotes]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_quote_contacts]
    ON [dbo].[ContactQuotes]([QuoteId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

