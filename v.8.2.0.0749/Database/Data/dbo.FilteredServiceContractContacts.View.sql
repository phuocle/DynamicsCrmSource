USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredServiceContractContacts]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
