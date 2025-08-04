

--
-- report view for servicecontractcontacts
--
create view dbo.[FilteredServiceContractContacts] (
    [contactid],
    [contractid],
    [importsequencenumber],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [servicecontractcontactid],
    [servicelevel],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ServiceContractContacts].[ContactId],
    [ServiceContractContacts].[ContractId],
    [ServiceContractContacts].[ImportSequenceNumber],
    [ServiceContractContacts].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceContractContacts].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ServiceContractContacts].[OverriddenCreatedOn],
    [ServiceContractContacts].[ServiceContractContactId],
    [ServiceContractContacts].[ServiceLevel],
    [ServiceContractContacts].[TimeZoneRuleVersionNumber],
    [ServiceContractContacts].[UTCConversionTimeZoneCode],
    [ServiceContractContacts].[VersionNumber]
from ServiceContractContacts
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredServiceContractContacts] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredServiceContractContacts] TO [CRMReaderRole]
    AS [dbo];

