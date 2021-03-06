USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredEntitlementContacts]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
