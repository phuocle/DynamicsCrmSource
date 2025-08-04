

--
-- report view for servicecontractcontacts
--
create view dbo.[FilteredServiceContractContacts] (
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredServiceContractContacts] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredServiceContractContacts] TO [CRMReaderRole]
    AS [dbo];

