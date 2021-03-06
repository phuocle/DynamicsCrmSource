USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredCompetitorSalesLiterature]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for competitorsalesliterature
--
create view [dbo].[FilteredCompetitorSalesLiterature] (
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
