USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Privilege]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for Privilege
--
create view [dbo].[Privilege]
 (

    -- physical attributes
    [PrivilegeId],
    [Name],
    [CanBeLocal],
    [CanBeDeep],
    [VersionNumber],
    [CanBeGlobal],
    [CanBeBasic],
    [AccessRight],
    [IsDisabledWhenIntegrated],
    [CanBeEntityReference],
    [CanBeParentEntityReference]
) with view_metadata as
select

    -- physical attribute
    [PrivilegeBase].[PrivilegeId],
    [PrivilegeBase].[Name],
    [PrivilegeBase].[CanBeLocal],
    [PrivilegeBase].[CanBeDeep],
    [PrivilegeBase].[VersionNumber],
    [PrivilegeBase].[CanBeGlobal],
    [PrivilegeBase].[CanBeBasic],
    [PrivilegeBase].[AccessRight],
    [PrivilegeBase].[IsDisabledWhenIntegrated],
    [PrivilegeBase].[CanBeEntityReference],
    [PrivilegeBase].[CanBeParentEntityReference]
from [PrivilegeBase] 

GO
