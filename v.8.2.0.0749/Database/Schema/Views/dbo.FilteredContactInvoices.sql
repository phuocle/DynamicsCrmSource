SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
GRANT SELECT ON  [dbo].[FilteredContactInvoices] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredContactInvoices] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
