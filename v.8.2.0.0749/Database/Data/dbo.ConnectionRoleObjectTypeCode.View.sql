USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ConnectionRoleObjectTypeCode]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for ConnectionRoleObjectTypeCode
--
create view [dbo].[ConnectionRoleObjectTypeCode]
 (
    -- logical attributes
    [OrganizationId],
    [ConnectionRoleIdName],

    -- physical attributes
    [ConnectionRoleId],
    [VersionNumber],
    [ConnectionRoleObjectTypeCodeId],
    [AssociatedObjectTypeCode]
) with view_metadata as
select
    -- logical attributes
    [connection_role_connection_role_object_type_codes].[OrganizationId],
    [connection_role_connection_role_object_type_codes].[Name],

    -- physical attribute
    [ConnectionRoleObjectTypeCodeBase].[ConnectionRoleId],
    [ConnectionRoleObjectTypeCodeBase].[VersionNumber],
    [ConnectionRoleObjectTypeCodeBase].[ConnectionRoleObjectTypeCodeId],
    [ConnectionRoleObjectTypeCodeBase].[AssociatedObjectTypeCode]
from [ConnectionRoleObjectTypeCodeBase] 
    left join [ConnectionRoleBase] [connection_role_connection_role_object_type_codes] on ([ConnectionRoleObjectTypeCodeBase].[ConnectionRoleId] = [connection_role_connection_role_object_type_codes].[ConnectionRoleId] and [connection_role_connection_role_object_type_codes].OverwriteTime = 0 and [connection_role_connection_role_object_type_codes].ComponentState = 0)

GO
