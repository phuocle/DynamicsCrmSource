CREATE TABLE [dbo].[ContactQuotes]
(
[ContactId] [uniqueidentifier] NOT NULL,
[QuoteId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[ContactQuoteId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ContactQuotes_ContactQuoteId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactQuotes] ADD CONSTRAINT [cndx_PrimaryKey_ContactQuotes] PRIMARY KEY CLUSTERED  ([ContactQuoteId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactQuotes] ADD CONSTRAINT [UQ_ContactQuotes] UNIQUE NONCLUSTERED  ([ContactId], [QuoteId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_quote_contacts] ON [dbo].[ContactQuotes] ([QuoteId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContactQuotes] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactQuotes] ADD CONSTRAINT [contact_quotes] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[ContactQuotes] ADD CONSTRAINT [quote_contacts] FOREIGN KEY ([QuoteId]) REFERENCES [dbo].[QuoteBase] ([QuoteId])
GO
