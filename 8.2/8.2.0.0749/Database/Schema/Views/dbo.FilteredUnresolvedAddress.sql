SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
GRANT SELECT ON  [dbo].[FilteredUnresolvedAddress] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredUnresolvedAddress] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
