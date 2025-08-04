

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
    ON OBJECT::[dbo].[FilteredCompetitorProduct] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitorProduct] TO [CRMReaderRole]
    AS [dbo];

