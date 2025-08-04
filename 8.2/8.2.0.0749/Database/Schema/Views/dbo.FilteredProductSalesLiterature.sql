SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for productsalesliterature
--
create view [dbo].[FilteredProductSalesLiterature] (
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
GRANT SELECT ON  [dbo].[FilteredProductSalesLiterature] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredProductSalesLiterature] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
