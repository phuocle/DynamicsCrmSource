

--
-- report view for bookableresourcebooking
--
create view dbo.[FilteredBookableResourceBooking] (
    [bookableresourcebookingid],
    [bookingstatus],
    [bookingstatusname],
    [bookingtype],
    [bookingtypename],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [duration],
    [endtime],
    [endtimeutc],
    [exchangerate],
    [header],
    [headername],
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
    [processid],
    [resource],
    [resourcename],
    [stageid],
    [starttime],
    [starttimeutc],
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
    [BookableResourceBooking].[BookableResourceBookingId],
    [BookableResourceBooking].[BookingStatus],
    [BookableResourceBooking].[BookingStatusName],
    [BookableResourceBooking].[BookingType],
    BookingTypePLTable.Value,
    [BookableResourceBooking].[CreatedBy],
    [BookableResourceBooking].[CreatedByName],
    [BookableResourceBooking].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceBooking].[CreatedOn],
			us.TimeZoneCode),
        [BookableResourceBooking].[CreatedOn],
    [BookableResourceBooking].[CreatedOnBehalfBy],
    [BookableResourceBooking].[CreatedOnBehalfByName],
    [BookableResourceBooking].[CreatedOnBehalfByYomiName],
    [BookableResourceBooking].[Duration],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceBooking].[EndTime],
			us.TimeZoneCode),
        [BookableResourceBooking].[EndTime],
    [BookableResourceBooking].[ExchangeRate],
    [BookableResourceBooking].[Header],
    [BookableResourceBooking].[HeaderName],
    [BookableResourceBooking].[ImportSequenceNumber],
    [BookableResourceBooking].[ModifiedBy],
    [BookableResourceBooking].[ModifiedByName],
    [BookableResourceBooking].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceBooking].[ModifiedOn],
			us.TimeZoneCode),
        [BookableResourceBooking].[ModifiedOn],
    [BookableResourceBooking].[ModifiedOnBehalfBy],
    [BookableResourceBooking].[ModifiedOnBehalfByName],
    [BookableResourceBooking].[ModifiedOnBehalfByYomiName],
    [BookableResourceBooking].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceBooking].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [BookableResourceBooking].[OverriddenCreatedOn],
    [BookableResourceBooking].[OwnerId],
    --[BookableResourceBooking].[OwnerIdDsc]
    0,
    [BookableResourceBooking].[OwnerIdName],
    [BookableResourceBooking].[OwnerIdType],
    [BookableResourceBooking].[OwnerIdYomiName],
    [BookableResourceBooking].[OwningBusinessUnit],
    [BookableResourceBooking].[OwningTeam],
    [BookableResourceBooking].[OwningUser],
    [BookableResourceBooking].[ProcessId],
    [BookableResourceBooking].[Resource],
    [BookableResourceBooking].[ResourceName],
    [BookableResourceBooking].[StageId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceBooking].[StartTime],
			us.TimeZoneCode),
        [BookableResourceBooking].[StartTime],
    [BookableResourceBooking].[StateCode],
    StateCodePLTable.Value,
    [BookableResourceBooking].[StatusCode],
    StatusCodePLTable.Value,
    [BookableResourceBooking].[TimeZoneRuleVersionNumber],
    [BookableResourceBooking].[TransactionCurrencyId],
    [BookableResourceBooking].[TransactionCurrencyIdName],
    [BookableResourceBooking].[TraversedPath],
    [BookableResourceBooking].[UTCConversionTimeZoneCode],
    [BookableResourceBooking].[VersionNumber]
from BookableResourceBooking
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [BookingTypePLTable] on 
		([BookingTypePLTable].AttributeName = 'bookingtype'
		and [BookingTypePLTable].ObjectTypeCode = 1145
		and [BookingTypePLTable].AttributeValue = [BookableResourceBooking].[BookingType]
		and [BookingTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1145
		and [StateCodePLTable].AttributeValue = [BookableResourceBooking].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1145
		and [StatusCodePLTable].AttributeValue = [BookableResourceBooking].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1145) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[BookableResourceBooking].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1145
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
		[BookableResourceBooking].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1145)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[BookableResourceBooking].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[BookableResourceBooking].[BookableResourceBookingId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1145
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBookableResourceBooking] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBookableResourceBooking] TO [CRMReaderRole]
    AS [dbo];

