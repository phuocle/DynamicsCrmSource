USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredCompetitorProduct]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
