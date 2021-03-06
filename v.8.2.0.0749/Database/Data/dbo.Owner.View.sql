USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Owner]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
