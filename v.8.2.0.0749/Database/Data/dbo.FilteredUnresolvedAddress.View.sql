USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredUnresolvedAddress]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for unresolvedaddress
--
create view [dbo].[FilteredUnresolvedAddress] (
    [emailaddress],
    [fullname],
    [telephone],
    [unresolvedaddressid],
    [versionnumber]
) with view_metadata as
select
    [UnresolvedAddress].[EMailAddress],
    [UnresolvedAddress].[FullName],
    [UnresolvedAddress].[Telephone],
    [UnresolvedAddress].[UnresolvedAddressId],
    [UnresolvedAddress].[VersionNumber]
from UnresolvedAddress

GO
