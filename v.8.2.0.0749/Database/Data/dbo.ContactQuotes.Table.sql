USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ContactQuotes]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContactQuotes](
	[ContactId] [uniqueidentifier] NOT NULL,
	[QuoteId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[ContactQuoteId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_ContactQuotes] PRIMARY KEY CLUSTERED 
(
	[ContactQuoteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_ContactQuotes]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ContactQuotes] ADD  CONSTRAINT [UQ_ContactQuotes] UNIQUE NONCLUSTERED 
(
	[ContactId] ASC,
	[QuoteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContactQuotes]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_quote_contacts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_quote_contacts] ON [dbo].[ContactQuotes]
(
	[QuoteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactQuotes] ADD  CONSTRAINT [DF_ContactQuotes_ContactQuoteId]  DEFAULT (newid()) FOR [ContactQuoteId]
GO
ALTER TABLE [dbo].[ContactQuotes]  WITH CHECK ADD  CONSTRAINT [contact_quotes] FOREIGN KEY([ContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[ContactQuotes] CHECK CONSTRAINT [contact_quotes]
GO
ALTER TABLE [dbo].[ContactQuotes]  WITH CHECK ADD  CONSTRAINT [quote_contacts] FOREIGN KEY([QuoteId])
REFERENCES [dbo].[QuoteBase] ([QuoteId])
GO
ALTER TABLE [dbo].[ContactQuotes] CHECK CONSTRAINT [quote_contacts]
GO
