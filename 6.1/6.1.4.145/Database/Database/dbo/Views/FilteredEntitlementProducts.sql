

--
-- report view for entitlementproducts
--
create view dbo.[FilteredEntitlementProducts] (
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementProducts] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementProducts] TO [CRMReaderRole]
    AS [dbo];

