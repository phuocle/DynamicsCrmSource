SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for servicecontractcontacts
--
create view [dbo].[FilteredServiceContractContacts] (
    [contactid],
    [contractid],
    [servicecontractcontactid],
    [servicelevel],
    [versionnumber]
) with view_metadata as
select
    [ServiceContractContacts].[ContactId],
    [ServiceContractContacts].[ContractId],
    [ServiceContractContacts].[ServiceContractContactId],
    [ServiceContractContacts].[ServiceLevel],
    [ServiceContractContacts].[VersionNumber]
from ServiceContractContacts
GO
GRANT SELECT ON  [dbo].[FilteredServiceContractContacts] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredServiceContractContacts] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
