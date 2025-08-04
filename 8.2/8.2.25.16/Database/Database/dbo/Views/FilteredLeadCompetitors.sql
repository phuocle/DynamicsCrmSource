

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
    ON OBJECT::[dbo].[FilteredLeadCompetitors] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadCompetitors] TO [CRMReaderRole]
    AS [dbo];

