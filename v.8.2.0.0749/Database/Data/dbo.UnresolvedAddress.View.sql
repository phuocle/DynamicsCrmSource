USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[UnresolvedAddress]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for UnresolvedAddress
--
create view [dbo].[UnresolvedAddress]
 (

    -- physical attributes
    [UnresolvedAddressId],
    [FullName],
    [Telephone],
    [EMailAddress],
    [VersionNumber]
) with view_metadata as
select

    -- physical attribute
    [UnresolvedAddressBase].[UnresolvedAddressId],
    [UnresolvedAddressBase].[FullName],
    [UnresolvedAddressBase].[Telephone],
    [UnresolvedAddressBase].[EMailAddress],
    [UnresolvedAddressBase].[VersionNumber]
from [UnresolvedAddressBase] 

GO
