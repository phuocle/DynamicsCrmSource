SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for opportunitycompetitors
--
create view [dbo].[FilteredOpportunityCompetitors] (
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
GRANT SELECT ON  [dbo].[FilteredOpportunityCompetitors] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredOpportunityCompetitors] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
