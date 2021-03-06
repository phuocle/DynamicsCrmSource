USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredSystemUserRoles]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for systemuserroles
--
create view [dbo].[FilteredSystemUserRoles] (
    [roleid],
    [systemuserid],
    [systemuserroleid],
    [versionnumber]
) with view_metadata as
select
    [SystemUserRoles].[RoleId],
    [SystemUserRoles].[SystemUserId],
    [SystemUserRoles].[SystemUserRoleId],
    [SystemUserRoles].[VersionNumber]
from SystemUserRoles

GO
