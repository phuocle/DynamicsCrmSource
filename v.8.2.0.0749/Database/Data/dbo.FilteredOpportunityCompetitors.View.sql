USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredOpportunityCompetitors]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
