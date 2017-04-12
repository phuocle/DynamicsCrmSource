SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for characteristic
--
create view [dbo].[FilteredCharacteristic] (
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
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 1141))
		
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
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 1141))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredCharacteristic] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredCharacteristic] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
