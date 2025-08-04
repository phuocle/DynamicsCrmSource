

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
    ON OBJECT::[dbo].[FilteredEntitlementProducts] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementProducts] TO [CRMReaderRole]
    AS [dbo];

