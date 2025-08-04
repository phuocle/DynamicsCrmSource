

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
    ON OBJECT::[dbo].[FilteredUnresolvedAddress] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredUnresolvedAddress] TO [CRMReaderRole]
    AS [dbo];

