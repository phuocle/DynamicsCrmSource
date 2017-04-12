SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
GRANT SELECT ON  [dbo].[FilteredCompetitorSalesLiterature] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredCompetitorSalesLiterature] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
