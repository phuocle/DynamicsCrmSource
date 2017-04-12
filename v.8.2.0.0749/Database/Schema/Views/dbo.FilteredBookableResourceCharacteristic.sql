SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for bookableresourcecharacteristic
--
create view [dbo].[FilteredBookableResourceCharacteristic] (
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
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 1148))
		
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
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 1148))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredBookableResourceCharacteristic] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredBookableResourceCharacteristic] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
