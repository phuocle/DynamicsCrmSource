USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ContactInvoices]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContactInvoices](
	[ContactId] [uniqueidentifier] NOT NULL,
	[InvoiceId] [uniqueidentifier] NOT NULL,
	[ContactInvoiceId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_ContactInvoices] PRIMARY KEY CLUSTERED 
(
	[ContactInvoiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_ContactInvoices]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ContactInvoices] ADD  CONSTRAINT [UQ_ContactInvoices] UNIQUE NONCLUSTERED 
(
	[ContactId] ASC,
	[InvoiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContactInvoices]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_invoice_contacts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_invoice_contacts] ON [dbo].[ContactInvoices]
(
	[InvoiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactInvoices] ADD  CONSTRAINT [DF_ContactInvoices_ContactInvoiceId]  DEFAULT (newid()) FOR [ContactInvoiceId]
GO
ALTER TABLE [dbo].[ContactInvoices]  WITH CHECK ADD  CONSTRAINT [contact_invoices] FOREIGN KEY([ContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[ContactInvoices] CHECK CONSTRAINT [contact_invoices]
GO
ALTER TABLE [dbo].[ContactInvoices]  WITH CHECK ADD  CONSTRAINT [invoice_contacts] FOREIGN KEY([InvoiceId])
REFERENCES [dbo].[InvoiceBase] ([InvoiceId])
GO
ALTER TABLE [dbo].[ContactInvoices] CHECK CONSTRAINT [invoice_contacts]
GO
