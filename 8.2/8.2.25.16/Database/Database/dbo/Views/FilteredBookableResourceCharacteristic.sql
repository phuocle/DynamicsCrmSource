

--
-- report view for bookableresourcecharacteristic
--
create view dbo.[FilteredBookableResourceCharacteristic] (
    [bookableresourcecharacteristicid],
    [characteristic],
    [characteristicname],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
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
    [processid],
    [ratingvalue],
    [ratingvaluename],
    [resource],
    [resourcename],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [BookableResourceCharacteristic].[BookableResourceCharacteristicId],
    [BookableResourceCharacteristic].[Characteristic],
    [BookableResourceCharacteristic].[CharacteristicName],
    [BookableResourceCharacteristic].[CreatedBy],
    [BookableResourceCharacteristic].[CreatedByName],
    [BookableResourceCharacteristic].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceCharacteristic].[CreatedOn],
			us.TimeZoneCode),
        [BookableResourceCharacteristic].[CreatedOn],
    [BookableResourceCharacteristic].[CreatedOnBehalfBy],
    [BookableResourceCharacteristic].[CreatedOnBehalfByName],
    [BookableResourceCharacteristic].[CreatedOnBehalfByYomiName],
    [BookableResourceCharacteristic].[ExchangeRate],
    [BookableResourceCharacteristic].[ImportSequenceNumber],
    [BookableResourceCharacteristic].[ModifiedBy],
    [BookableResourceCharacteristic].[ModifiedByName],
    [BookableResourceCharacteristic].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceCharacteristic].[ModifiedOn],
			us.TimeZoneCode),
        [BookableResourceCharacteristic].[ModifiedOn],
    [BookableResourceCharacteristic].[ModifiedOnBehalfBy],
    [BookableResourceCharacteristic].[ModifiedOnBehalfByName],
    [BookableResourceCharacteristic].[ModifiedOnBehalfByYomiName],
    [BookableResourceCharacteristic].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceCharacteristic].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [BookableResourceCharacteristic].[OverriddenCreatedOn],
    [BookableResourceCharacteristic].[OwnerId],
    [BookableResourceCharacteristic].[OwnerIdName],
    [BookableResourceCharacteristic].[OwnerIdType],
    [BookableResourceCharacteristic].[OwnerIdYomiName],
    [BookableResourceCharacteristic].[OwningBusinessUnit],
    [BookableResourceCharacteristic].[OwningTeam],
    [BookableResourceCharacteristic].[OwningUser],
    [BookableResourceCharacteristic].[ProcessId],
    [BookableResourceCharacteristic].[RatingValue],
    [BookableResourceCharacteristic].[RatingValueName],
    [BookableResourceCharacteristic].[Resource],
    [BookableResourceCharacteristic].[ResourceName],
    [BookableResourceCharacteristic].[StageId],
    [BookableResourceCharacteristic].[StateCode],
    StateCodePLTable.Value,
    [BookableResourceCharacteristic].[StatusCode],
    StatusCodePLTable.Value,
    [BookableResourceCharacteristic].[TimeZoneRuleVersionNumber],
    [BookableResourceCharacteristic].[TransactionCurrencyId],
    [BookableResourceCharacteristic].[TransactionCurrencyIdName],
    [BookableResourceCharacteristic].[TraversedPath],
    [BookableResourceCharacteristic].[UTCConversionTimeZoneCode],
    [BookableResourceCharacteristic].[VersionNumber]
from BookableResourceCharacteristic
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1148
		and [StateCodePLTable].AttributeValue = [BookableResourceCharacteristic].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1148
		and [StatusCodePLTable].AttributeValue = [BookableResourceCharacteristic].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1148) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[BookableResourceCharacteristic].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1148
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
		[BookableResourceCharacteristic].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1148)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[BookableResourceCharacteristic].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[BookableResourceCharacteristic].[BookableResourceCharacteristicId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1148
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBookableResourceCharacteristic] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBookableResourceCharacteristic] TO [CRMReaderRole]
    AS [dbo];

