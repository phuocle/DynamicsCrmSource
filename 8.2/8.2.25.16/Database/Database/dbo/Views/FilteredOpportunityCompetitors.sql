

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
    ON OBJECT::[dbo].[FilteredOpportunityCompetitors] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOpportunityCompetitors] TO [CRMReaderRole]
    AS [dbo];

