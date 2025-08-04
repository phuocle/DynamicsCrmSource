

--
-- report view for competitorproduct
--
create view dbo.[FilteredCompetitorProduct] (
    [competitorid],
    [competitorproductid],
    [productid],
    [versionnumber]
) with view_metadata as
select
    [CompetitorProduct].[CompetitorId],
    [CompetitorProduct].[CompetitorProductId],
    [CompetitorProduct].[ProductId],
    [CompetitorProduct].[VersionNumber]
from CompetitorProduct

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitorProduct] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitorProduct] TO [CRMReaderRole]
    AS [dbo];

