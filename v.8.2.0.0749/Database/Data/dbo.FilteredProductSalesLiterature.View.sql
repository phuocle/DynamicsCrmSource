USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredProductSalesLiterature]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
