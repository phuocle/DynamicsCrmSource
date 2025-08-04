

--
-- report view for entitlementcontacts
--
create view dbo.[FilteredEntitlementContacts] (
    [contactid],
    [entitlementcontactid],
    [entitlementid],
    [versionnumber]
) with view_metadata as
select
    [EntitlementContacts].[ContactId],
    [EntitlementContacts].[EntitlementContactId],
    [EntitlementContacts].[EntitlementId],
    [EntitlementContacts].[VersionNumber]
from EntitlementContacts

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementContacts] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementContacts] TO [CRMReaderRole]
    AS [dbo];

