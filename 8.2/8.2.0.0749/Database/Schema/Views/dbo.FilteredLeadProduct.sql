SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for leadproduct
--
create view [dbo].[FilteredLeadProduct] (
    [leadid],
    [leadproductid],
    [productid],
    [versionnumber]
) with view_metadata as
select
    [LeadProduct].[LeadId],
    [LeadProduct].[LeadProductId],
    [LeadProduct].[ProductId],
    [LeadProduct].[VersionNumber]
from LeadProduct
GO
GRANT SELECT ON  [dbo].[FilteredLeadProduct] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredLeadProduct] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
