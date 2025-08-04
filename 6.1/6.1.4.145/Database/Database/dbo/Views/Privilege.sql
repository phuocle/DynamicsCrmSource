


--
-- base view for Privilege
--
create view dbo.[Privilege]
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
    [IsDisabledWhenIntegrated]
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
    [PrivilegeBase].[IsDisabledWhenIntegrated]
from [PrivilegeBase] 
