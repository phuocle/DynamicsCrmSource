

--
-- report view for productsubstitute
--
create view dbo.[FilteredProductSubstitute] (
    [productid],
    [productsubstituteid],
    [substitutedproductid],
    [versionnumber]
) with view_metadata as
select
    [ProductSubstitute].[ProductId],
    [ProductSubstitute].[ProductSubstituteId],
    [ProductSubstitute].[SubstitutedProductId],
    [ProductSubstitute].[VersionNumber]
from ProductSubstitute

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductSubstitute] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductSubstitute] TO [CRMReaderRole]
    AS [dbo];

