

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
    ON OBJECT::[dbo].[FilteredProductSalesLiterature] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductSalesLiterature] TO [CRMReaderRole]
    AS [dbo];

