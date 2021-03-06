USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredBookableResourceBooking]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for bookableresourcebooking
--
create view [dbo].[FilteredBookableResourceBooking] (
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
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 1145))
		
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
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 1145))
	)
)

GO
