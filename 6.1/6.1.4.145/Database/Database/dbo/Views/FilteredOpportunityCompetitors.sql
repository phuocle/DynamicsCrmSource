

--
-- report view for opportunitycompetitors
--
create view dbo.[FilteredOpportunityCompetitors] (
    [competitorid],
    [opportunitycompetitorid],
    [opportunityid],
    [versionnumber]
) with view_metadata as
select
    [OpportunityCompetitors].[CompetitorId],
    [OpportunityCompetitors].[OpportunityCompetitorId],
    [OpportunityCompetitors].[OpportunityId],
    [OpportunityCompetitors].[VersionNumber]
from OpportunityCompetitors

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOpportunityCompetitors] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOpportunityCompetitors] TO [CRMReaderRole]
    AS [dbo];

