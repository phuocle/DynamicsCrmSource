USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredTeamRoles]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for teamroles
--
create view [dbo].[FilteredTeamRoles] (
    [roleid],
    [teamid],
    [teamroleid],
    [versionnumber]
) with view_metadata as
select
    [TeamRoles].[RoleId],
    [TeamRoles].[TeamId],
    [TeamRoles].[TeamRoleId],
    [TeamRoles].[VersionNumber]
from TeamRoles

GO
