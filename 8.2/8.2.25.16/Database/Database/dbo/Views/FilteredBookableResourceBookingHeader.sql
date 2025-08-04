

--
-- report view for bookableresourcebookingheader
--
create view dbo.[FilteredBookableResourceBookingHeader] (
    [bookableresourcebookingheaderid],
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
    [BookableResourceBookingHeader].[BookableResourceBookingHeaderId],
    [BookableResourceBookingHeader].[CreatedBy],
    [BookableResourceBookingHeader].[CreatedByName],
    [BookableResourceBookingHeader].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceBookingHeader].[CreatedOn],
			us.TimeZoneCode),
        [BookableResourceBookingHeader].[CreatedOn],
    [BookableResourceBookingHeader].[CreatedOnBehalfBy],
    [BookableResourceBookingHeader].[CreatedOnBehalfByName],
    [BookableResourceBookingHeader].[CreatedOnBehalfByYomiName],
    [BookableResourceBookingHeader].[Duration],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceBookingHeader].[EndTime],
			us.TimeZoneCode),
        [BookableResourceBookingHeader].[EndTime],
    [BookableResourceBookingHeader].[ExchangeRate],
    [BookableResourceBookingHeader].[ImportSequenceNumber],
    [BookableResourceBookingHeader].[ModifiedBy],
    [BookableResourceBookingHeader].[ModifiedByName],
    [BookableResourceBookingHeader].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceBookingHeader].[ModifiedOn],
			us.TimeZoneCode),
        [BookableResourceBookingHeader].[ModifiedOn],
    [BookableResourceBookingHeader].[ModifiedOnBehalfBy],
    [BookableResourceBookingHeader].[ModifiedOnBehalfByName],
    [BookableResourceBookingHeader].[ModifiedOnBehalfByYomiName],
    [BookableResourceBookingHeader].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceBookingHeader].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [BookableResourceBookingHeader].[OverriddenCreatedOn],
    [BookableResourceBookingHeader].[OwnerId],
    [BookableResourceBookingHeader].[OwnerIdName],
    [BookableResourceBookingHeader].[OwnerIdType],
    [BookableResourceBookingHeader].[OwnerIdYomiName],
    [BookableResourceBookingHeader].[OwningBusinessUnit],
    [BookableResourceBookingHeader].[OwningTeam],
    [BookableResourceBookingHeader].[OwningUser],
    [BookableResourceBookingHeader].[ProcessId],
    [BookableResourceBookingHeader].[StageId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceBookingHeader].[StartTime],
			us.TimeZoneCode),
        [BookableResourceBookingHeader].[StartTime],
    [BookableResourceBookingHeader].[StateCode],
    StateCodePLTable.Value,
    [BookableResourceBookingHeader].[StatusCode],
    StatusCodePLTable.Value,
    [BookableResourceBookingHeader].[TimeZoneRuleVersionNumber],
    [BookableResourceBookingHeader].[TransactionCurrencyId],
    [BookableResourceBookingHeader].[TransactionCurrencyIdName],
    [BookableResourceBookingHeader].[TraversedPath],
    [BookableResourceBookingHeader].[UTCConversionTimeZoneCode],
    [BookableResourceBookingHeader].[VersionNumber]
from BookableResourceBookingHeader
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1146
		and [StateCodePLTable].AttributeValue = [BookableResourceBookingHeader].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1146
		and [StatusCodePLTable].AttributeValue = [BookableResourceBookingHeader].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1146) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[BookableResourceBookingHeader].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1146
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
		[BookableResourceBookingHeader].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1146)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[BookableResourceBookingHeader].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[BookableResourceBookingHeader].[BookableResourceBookingHeaderId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1146
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBookableResourceBookingHeader] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBookableResourceBookingHeader] TO [CRMReaderRole]
    AS [dbo];

