SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for entitlementtemplateproducts
--
create view [dbo].[FilteredEntitlementTemplateProducts] (
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
GRANT SELECT ON  [dbo].[FilteredEntitlementTemplateProducts] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredEntitlementTemplateProducts] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
