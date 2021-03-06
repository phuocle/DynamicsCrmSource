USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredLeadCompetitors]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
