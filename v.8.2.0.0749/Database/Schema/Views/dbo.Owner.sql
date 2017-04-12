SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for Owner
--
create view [dbo].[Owner]
 (

    -- physical attributes
    [VersionNumber],
    [OwnerId],
    [Name],
    [OwnerIdType],
    [YomiName]
) with view_metadata as
select

    -- physical attribute
    [OwnerBase].[VersionNumber],
    [OwnerBase].[OwnerId],
    [OwnerBase].[Name],
    [OwnerBase].[OwnerIdType],
    [OwnerBase].[YomiName]
from [OwnerBase] 
GO
