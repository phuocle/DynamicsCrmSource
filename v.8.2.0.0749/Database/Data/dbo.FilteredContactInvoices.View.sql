USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredContactInvoices]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for contactinvoices
--
create view [dbo].[FilteredContactInvoices] (
    [contactid],
    [contactinvoiceid],
    [invoiceid],
    [versionnumber]
) with view_metadata as
select
    [ContactInvoices].[ContactId],
    [ContactInvoices].[ContactInvoiceId],
    [ContactInvoices].[InvoiceId],
    [ContactInvoices].[VersionNumber]
from ContactInvoices

GO
