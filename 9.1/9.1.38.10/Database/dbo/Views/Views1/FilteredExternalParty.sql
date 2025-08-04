

--
-- report view for externalparty
--
create view dbo.[FilteredExternalParty] (
    [correlationkey],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [emailaddress],
    [exchangerate],
    [externalpartyid],
    [externalpartyidunique],
    [firstname],
    [fullname],
    [importsequencenumber],
    [lastdisabledon],
    [lastdisabledonutc],
    [lastenabledon],
    [lastenabledonutc],
    [lastname],
    [middlename],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [type],
    [utcconversiontimezonecode],
    [versionnumber],
    [yomifirstname],
    [yomifullname],
    [yomilastname],
    [yomimiddlename]
) with view_metadata as
select
    [ExternalParty].[CorrelationKey],
    [ExternalParty].[CreatedBy],
    [ExternalParty].[CreatedByName],
    [ExternalParty].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExternalParty].[CreatedOn],
			us.TimeZoneCode),
        [ExternalParty].[CreatedOn],
    [ExternalParty].[CreatedOnBehalfBy],
    [ExternalParty].[CreatedOnBehalfByName],
    [ExternalParty].[CreatedOnBehalfByYomiName],
    [ExternalParty].[EmailAddress],
    [ExternalParty].[ExchangeRate],
    [ExternalParty].[ExternalPartyId],
    [ExternalParty].[ExternalPartyIdUnique],
    [ExternalParty].[FirstName],
    [ExternalParty].[FullName],
    [ExternalParty].[ImportSequenceNumber],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExternalParty].[LastDisabledOn],
			us.TimeZoneCode),
        [ExternalParty].[LastDisabledOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExternalParty].[LastEnabledOn],
			us.TimeZoneCode),
        [ExternalParty].[LastEnabledOn],
    [ExternalParty].[LastName],
    [ExternalParty].[MiddleName],
    [ExternalParty].[ModifiedBy],
    [ExternalParty].[ModifiedByName],
    [ExternalParty].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExternalParty].[ModifiedOn],
			us.TimeZoneCode),
        [ExternalParty].[ModifiedOn],
    [ExternalParty].[ModifiedOnBehalfBy],
    [ExternalParty].[ModifiedOnBehalfByName],
    [ExternalParty].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExternalParty].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ExternalParty].[OverriddenCreatedOn],
    [ExternalParty].[OwnerId],
    [ExternalParty].[OwnerIdName],
    [ExternalParty].[OwnerIdType],
    [ExternalParty].[OwnerIdYomiName],
    [ExternalParty].[OwningBusinessUnit],
    [ExternalParty].[OwningTeam],
    [ExternalParty].[OwningUser],
    [ExternalParty].[StateCode],
    StateCodePLTable.Value,
    [ExternalParty].[StatusCode],
    StatusCodePLTable.Value,
    [ExternalParty].[TimeZoneRuleVersionNumber],
    [ExternalParty].[TransactionCurrencyId],
    [ExternalParty].[TransactionCurrencyIdName],
    [ExternalParty].[Type],
    [ExternalParty].[UTCConversionTimeZoneCode],
    [ExternalParty].[VersionNumber],
    [ExternalParty].[YomiFirstName],
    [ExternalParty].[YomiFullName],
    [ExternalParty].[YomiLastName],
    [ExternalParty].[YomiMiddleName]
from ExternalParty
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 3008
		and [StateCodePLTable].AttributeValue = [ExternalParty].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 3008
		and [StatusCodePLTable].AttributeValue = [ExternalParty].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(3008) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[ExternalParty].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 3008
		)
		
	-- role based access
	or 
	
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[ExternalParty].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 3008)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ExternalParty].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ExternalParty].[ExternalPartyId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 3008
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredExternalParty] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredExternalParty] TO [CRMReaderRole]
    AS [dbo];

