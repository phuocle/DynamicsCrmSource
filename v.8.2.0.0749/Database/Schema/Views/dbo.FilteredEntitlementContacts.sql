SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for entitlementcontacts
--
create view [dbo].[FilteredEntitlementContacts] (
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
GRANT SELECT ON  [dbo].[FilteredEntitlementContacts] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredEntitlementContacts] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
