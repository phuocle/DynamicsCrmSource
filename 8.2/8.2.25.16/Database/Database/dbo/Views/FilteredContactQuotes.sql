

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
    ON OBJECT::[dbo].[FilteredContactQuotes] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactQuotes] TO [CRMReaderRole]
    AS [dbo];

