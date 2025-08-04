

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
    ON OBJECT::[dbo].[FilteredServiceContractContacts] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredServiceContractContacts] TO [CRMReaderRole]
    AS [dbo];

