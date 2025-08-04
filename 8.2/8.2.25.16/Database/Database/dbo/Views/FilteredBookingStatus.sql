

--
-- report view for bookingstatus
--
create view dbo.[FilteredBookingStatus] (
    [bookingstatusid],
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
    [status],
    [statuscode],
    [statuscodename],
    [statusname],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [BookingStatus].[BookingStatusId],
    [BookingStatus].[CreatedBy],
    [BookingStatus].[CreatedByName],
    [BookingStatus].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookingStatus].[CreatedOn],
			us.TimeZoneCode),
        [BookingStatus].[CreatedOn],
    [BookingStatus].[CreatedOnBehalfBy],
    [BookingStatus].[CreatedOnBehalfByName],
    [BookingStatus].[CreatedOnBehalfByYomiName],
    [BookingStatus].[Description],
    [BookingStatus].[ExchangeRate],
    [BookingStatus].[ImportSequenceNumber],
    [BookingStatus].[ModifiedBy],
    [BookingStatus].[ModifiedByName],
    [BookingStatus].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookingStatus].[ModifiedOn],
			us.TimeZoneCode),
        [BookingStatus].[ModifiedOn],
    [BookingStatus].[ModifiedOnBehalfBy],
    [BookingStatus].[ModifiedOnBehalfByName],
    [BookingStatus].[ModifiedOnBehalfByYomiName],
    [BookingStatus].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookingStatus].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [BookingStatus].[OverriddenCreatedOn],
    [BookingStatus].[OwnerId],
    [BookingStatus].[OwnerIdName],
    [BookingStatus].[OwnerIdType],
    [BookingStatus].[OwnerIdYomiName],
    [BookingStatus].[OwningBusinessUnit],
    [BookingStatus].[OwningTeam],
    [BookingStatus].[OwningUser],
    [BookingStatus].[StateCode],
    StateCodePLTable.Value,
    [BookingStatus].[Status],
    [BookingStatus].[StatusCode],
    StatusCodePLTable.Value,
    StatusPLTable.Value,
    [BookingStatus].[TimeZoneRuleVersionNumber],
    [BookingStatus].[TransactionCurrencyId],
    [BookingStatus].[TransactionCurrencyIdName],
    [BookingStatus].[UTCConversionTimeZoneCode],
    [BookingStatus].[VersionNumber]
from BookingStatus
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1152
		and [StateCodePLTable].AttributeValue = [BookingStatus].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1152
		and [StatusCodePLTable].AttributeValue = [BookingStatus].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusPLTable] on 
		([StatusPLTable].AttributeName = 'status'
		and [StatusPLTable].ObjectTypeCode = 1152
		and [StatusPLTable].AttributeValue = [BookingStatus].[Status]
		and [StatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1152) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[BookingStatus].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1152
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
		[BookingStatus].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1152)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[BookingStatus].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[BookingStatus].[BookingStatusId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1152
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBookingStatus] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBookingStatus] TO [CRMReaderRole]
    AS [dbo];

