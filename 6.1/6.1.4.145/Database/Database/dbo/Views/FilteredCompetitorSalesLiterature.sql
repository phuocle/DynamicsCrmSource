

--
-- report view for competitorsalesliterature
--
create view dbo.[FilteredCompetitorSalesLiterature] (
    [competitorid],
    [competitorsalesliteratureid],
    [salesliteratureid],
    [versionnumber]
) with view_metadata as
select
    [CompetitorSalesLiterature].[CompetitorId],
    [CompetitorSalesLiterature].[CompetitorSalesLiteratureId],
    [CompetitorSalesLiterature].[SalesLiteratureId],
    [CompetitorSalesLiterature].[VersionNumber]
from CompetitorSalesLiterature

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitorSalesLiterature] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitorSalesLiterature] TO [CRMReaderRole]
    AS [dbo];

