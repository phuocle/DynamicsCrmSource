SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for competitorproduct
--
create view [dbo].[FilteredCompetitorProduct] (
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
GRANT SELECT ON  [dbo].[FilteredCompetitorProduct] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredCompetitorProduct] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
