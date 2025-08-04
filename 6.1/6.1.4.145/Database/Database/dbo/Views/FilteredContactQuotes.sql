

--
-- report view for contactquotes
--
create view dbo.[FilteredContactQuotes] (
    [contactid],
    [contactquoteid],
    [quoteid],
    [versionnumber]
) with view_metadata as
select
    [ContactQuotes].[ContactId],
    [ContactQuotes].[ContactQuoteId],
    [ContactQuotes].[QuoteId],
    [ContactQuotes].[VersionNumber]
from ContactQuotes

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactQuotes] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactQuotes] TO [CRMReaderRole]
    AS [dbo];

