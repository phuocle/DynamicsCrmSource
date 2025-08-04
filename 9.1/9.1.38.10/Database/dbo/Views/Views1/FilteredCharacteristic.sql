

--
-- report view for characteristic
--
create view dbo.[FilteredCharacteristic] (
    [characteristicid],
    [characteristictype],
    [characteristictypename],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [exchangerate],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneriddsc],
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
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [Characteristic].[CharacteristicId],
    [Characteristic].[CharacteristicType],
    CharacteristicTypePLTable.Value,
    [Characteristic].[CreatedBy],
    [Characteristic].[CreatedByName],
    [Characteristic].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Characteristic].[CreatedOn],
			us.TimeZoneCode),
        [Characteristic].[CreatedOn],
    [Characteristic].[CreatedOnBehalfBy],
    [Characteristic].[CreatedOnBehalfByName],
    [Characteristic].[CreatedOnBehalfByYomiName],
    [Characteristic].[Description],
    [Characteristic].[ExchangeRate],
    [Characteristic].[ImportSequenceNumber],
    [Characteristic].[ModifiedBy],
    [Characteristic].[ModifiedByName],
    [Characteristic].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Characteristic].[ModifiedOn],
			us.TimeZoneCode),
        [Characteristic].[ModifiedOn],
    [Characteristic].[ModifiedOnBehalfBy],
    [Characteristic].[ModifiedOnBehalfByName],
    [Characteristic].[ModifiedOnBehalfByYomiName],
    [Characteristic].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Characteristic].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Characteristic].[OverriddenCreatedOn],
    [Characteristic].[OwnerId],
    --[Characteristic].[OwnerIdDsc]
    0,
    [Characteristic].[OwnerIdName],
    [Characteristic].[OwnerIdType],
    [Characteristic].[OwnerIdYomiName],
    [Characteristic].[OwningBusinessUnit],
    [Characteristic].[OwningTeam],
    [Characteristic].[OwningUser],
    [Characteristic].[StateCode],
    StateCodePLTable.Value,
    [Characteristic].[StatusCode],
    StatusCodePLTable.Value,
    [Characteristic].[TimeZoneRuleVersionNumber],
    [Characteristic].[TransactionCurrencyId],
    [Characteristic].[TransactionCurrencyIdName],
    [Characteristic].[UTCConversionTimeZoneCode],
    [Characteristic].[VersionNumber]
from Characteristic
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [CharacteristicTypePLTable] on 
		([CharacteristicTypePLTable].AttributeName = 'characteristictype'
		and [CharacteristicTypePLTable].ObjectTypeCode = 1141
		and [CharacteristicTypePLTable].AttributeValue = [Characteristic].[CharacteristicType]
		and [CharacteristicTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1141
		and [StateCodePLTable].AttributeValue = [Characteristic].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1141
		and [StatusCodePLTable].AttributeValue = [Characteristic].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1141) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[Characteristic].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1141
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
		[Characteristic].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1141)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Characteristic].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Characteristic].[CharacteristicId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1141
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCharacteristic] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCharacteristic] TO [CRMReaderRole]
    AS [dbo];

