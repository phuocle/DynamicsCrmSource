

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
    ON OBJECT::[dbo].[FilteredEntitlementTemplateProducts] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementTemplateProducts] TO [CRMReaderRole]
    AS [dbo];

