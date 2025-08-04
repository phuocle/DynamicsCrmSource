SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
GRANT SELECT ON  [dbo].[FilteredEntitlementProducts] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredEntitlementProducts] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
