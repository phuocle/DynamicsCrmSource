USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredEntitlementProducts]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for entitlementproducts
--
create view [dbo].[FilteredEntitlementProducts] (
    [entitlementid],
    [entitlementproductid],
    [productid],
    [versionnumber]
) with view_metadata as
select
    [EntitlementProducts].[EntitlementId],
    [EntitlementProducts].[EntitlementProductId],
    [EntitlementProducts].[ProductId],
    [EntitlementProducts].[VersionNumber]
from EntitlementProducts

GO
