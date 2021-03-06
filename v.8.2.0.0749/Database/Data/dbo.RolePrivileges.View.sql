USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RolePrivileges]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for RolePrivileges
--
create view [dbo].[RolePrivileges]
 (

    -- physical attributes
    [PrivilegeId],
    [RoleId],
    [PrivilegeDepthMask],
    [RolePrivilegeId],
    [VersionNumber],
    [RolePrivilegeIdUnique],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [SolutionId],
    [IsManaged]
) with view_metadata as
select

    -- physical attribute
    [T1].[PrivilegeId],
    [T1].[RoleId],
    [T1].[PrivilegeDepthMask],
    [T1].[RolePrivilegeId],
    [T1].[VersionNumber],
    [T1].[RolePrivilegeIdUnique],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[IsManaged]
from [RolePrivilegesBase] [T1]
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
