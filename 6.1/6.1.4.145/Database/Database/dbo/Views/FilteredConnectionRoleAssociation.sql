

--
-- report view for connectionroleassociation
--
create view dbo.[FilteredConnectionRoleAssociation] (
    [associatedconnectionroleid],
    [connectionroleassociationid],
    [connectionroleid],
    [versionnumber]
) with view_metadata as
select
    [ConnectionRoleAssociation].[AssociatedConnectionRoleId],
    [ConnectionRoleAssociation].[ConnectionRoleAssociationId],
    [ConnectionRoleAssociation].[ConnectionRoleId],
    [ConnectionRoleAssociation].[VersionNumber]
from ConnectionRoleAssociation

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredConnectionRoleAssociation] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredConnectionRoleAssociation] TO [CRMReaderRole]
    AS [dbo];

