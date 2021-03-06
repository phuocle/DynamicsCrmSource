USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredConnectionRoleAssociation]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
