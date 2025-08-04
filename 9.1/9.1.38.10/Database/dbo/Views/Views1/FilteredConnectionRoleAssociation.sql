

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
    ON OBJECT::[dbo].[FilteredConnectionRoleAssociation] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredConnectionRoleAssociation] TO [CRMReaderRole]
    AS [dbo];

