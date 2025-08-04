

--
-- report view for productassociation
--
create view dbo.[FilteredProductAssociation] (
    [associatedproduct],
    [productassociationid],
    [productid],
    [versionnumber]
) with view_metadata as
select
    [ProductAssociation].[AssociatedProduct],
    [ProductAssociation].[ProductAssociationId],
    [ProductAssociation].[ProductId],
    [ProductAssociation].[VersionNumber]
from ProductAssociation

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductAssociation] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductAssociation] TO [CRMReaderRole]
    AS [dbo];

