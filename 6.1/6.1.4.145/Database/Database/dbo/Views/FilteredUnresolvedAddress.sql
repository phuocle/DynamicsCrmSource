

--
-- report view for unresolvedaddress
--
create view dbo.[FilteredUnresolvedAddress] (
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredUnresolvedAddress] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredUnresolvedAddress] TO [CRMReaderRole]
    AS [dbo];

