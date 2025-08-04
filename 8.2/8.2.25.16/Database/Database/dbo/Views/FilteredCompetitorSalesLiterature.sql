

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
    ON OBJECT::[dbo].[FilteredCompetitorSalesLiterature] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitorSalesLiterature] TO [CRMReaderRole]
    AS [dbo];

