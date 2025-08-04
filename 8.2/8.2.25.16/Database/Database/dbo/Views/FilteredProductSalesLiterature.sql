

--
-- report view for productsalesliterature
--
create view dbo.[FilteredProductSalesLiterature] (
    [productid],
    [productsalesliteratureid],
    [salesliteratureid],
    [versionnumber]
) with view_metadata as
select
    [ProductSalesLiterature].[ProductId],
    [ProductSalesLiterature].[ProductSalesLiteratureId],
    [ProductSalesLiterature].[SalesLiteratureId],
    [ProductSalesLiterature].[VersionNumber]
from ProductSalesLiterature

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductSalesLiterature] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductSalesLiterature] TO [CRMReaderRole]
    AS [dbo];

