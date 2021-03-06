USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredEntitlementTemplateProducts]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
