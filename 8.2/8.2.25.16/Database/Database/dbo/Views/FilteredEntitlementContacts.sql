

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
    ON OBJECT::[dbo].[FilteredEntitlementContacts] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementContacts] TO [CRMReaderRole]
    AS [dbo];

