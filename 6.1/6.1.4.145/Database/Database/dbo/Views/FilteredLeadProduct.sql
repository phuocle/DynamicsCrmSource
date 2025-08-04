

--
-- report view for leadproduct
--
create view dbo.[FilteredLeadProduct] (
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadProduct] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadProduct] TO [CRMReaderRole]
    AS [dbo];

