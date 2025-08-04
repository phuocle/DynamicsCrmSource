SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for connectionroleassociation
--
create view [dbo].[FilteredConnectionRoleAssociation] (
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
GRANT SELECT ON  [dbo].[FilteredConnectionRoleAssociation] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredConnectionRoleAssociation] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
