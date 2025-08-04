

--
-- report view for contactinvoices
--
create view dbo.[FilteredContactInvoices] (
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactInvoices] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactInvoices] TO [CRMReaderRole]
    AS [dbo];

