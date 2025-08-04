

--
-- report view for leadcompetitors
--
create view dbo.[FilteredLeadCompetitors] (
    [competitorid],
    [leadcompetitorid],
    [leadid],
    [versionnumber]
) with view_metadata as
select
    [LeadCompetitors].[CompetitorId],
    [LeadCompetitors].[LeadCompetitorId],
    [LeadCompetitors].[LeadId],
    [LeadCompetitors].[VersionNumber]
from LeadCompetitors

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadCompetitors] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadCompetitors] TO [CRMReaderRole]
    AS [dbo];

