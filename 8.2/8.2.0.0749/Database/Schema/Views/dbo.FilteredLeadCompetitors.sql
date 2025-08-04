SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for leadcompetitors
--
create view [dbo].[FilteredLeadCompetitors] (
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
GRANT SELECT ON  [dbo].[FilteredLeadCompetitors] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredLeadCompetitors] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
