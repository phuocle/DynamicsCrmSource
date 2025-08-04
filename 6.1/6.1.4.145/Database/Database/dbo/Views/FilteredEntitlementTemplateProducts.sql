

--
-- report view for entitlementtemplateproducts
--
create view dbo.[FilteredEntitlementTemplateProducts] (
    [entitlementtemplateid],
    [entitlementtemplateproductid],
    [productid],
    [versionnumber]
) with view_metadata as
select
    [EntitlementTemplateProducts].[EntitlementTemplateId],
    [EntitlementTemplateProducts].[EntitlementTemplateProductId],
    [EntitlementTemplateProducts].[ProductId],
    [EntitlementTemplateProducts].[VersionNumber]
from EntitlementTemplateProducts

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementTemplateProducts] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementTemplateProducts] TO [CRMReaderRole]
    AS [dbo];

