SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for bookableresource
--
create view [dbo].[FilteredBookableResource] (
    [accountid],
    [accountidname],
    [accountidyominame],
    [bookableresourceid],
    [calendarid],
    [calendaridname],
    [contactid],
    [contactidname],
    [contactidyominame],
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
    [resourcetype],
    [resourcetypename],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezone],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [userid],
    [useridname],
    [useridyominame],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [BookableResource].[AccountId],
    [BookableResource].[AccountIdName],
    [BookableResource].[AccountIdYomiName],
    [BookableResource].[BookableResourceId],
    [BookableResource].[CalendarId],
    [BookableResource].[CalendarIdName],
    [BookableResource].[ContactId],
    [BookableResource].[ContactIdName],
    [BookableResource].[ContactIdYomiName],
    [BookableResource].[CreatedBy],
    [BookableResource].[CreatedByName],
    [BookableResource].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResource].[CreatedOn],
			us.TimeZoneCode),
        [BookableResource].[CreatedOn],
    [BookableResource].[CreatedOnBehalfBy],
    [BookableResource].[CreatedOnBehalfByName],
    [BookableResource].[CreatedOnBehalfByYomiName],
    [BookableResource].[ExchangeRate],
    [BookableResource].[ImportSequenceNumber],
    [BookableResource].[ModifiedBy],
    [BookableResource].[ModifiedByName],
    [BookableResource].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResource].[ModifiedOn],
			us.TimeZoneCode),
        [BookableResource].[ModifiedOn],
    [BookableResource].[ModifiedOnBehalfBy],
    [BookableResource].[ModifiedOnBehalfByName],
    [BookableResource].[ModifiedOnBehalfByYomiName],
    [BookableResource].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResource].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [BookableResource].[OverriddenCreatedOn],
    [BookableResource].[OwnerId],
    [BookableResource].[OwnerIdName],
    [BookableResource].[OwnerIdType],
    [BookableResource].[OwnerIdYomiName],
    [BookableResource].[OwningBusinessUnit],
    [BookableResource].[OwningTeam],
    [BookableResource].[OwningUser],
    [BookableResource].[ProcessId],
    [BookableResource].[ResourceType],
    ResourceTypePLTable.Value,
    [BookableResource].[StageId],
    [BookableResource].[StateCode],
    StateCodePLTable.Value,
    [BookableResource].[StatusCode],
    StatusCodePLTable.Value,
    [BookableResource].[TimeZone],
    [BookableResource].[TimeZoneRuleVersionNumber],
    [BookableResource].[TransactionCurrencyId],
    [BookableResource].[TransactionCurrencyIdName],
    [BookableResource].[TraversedPath],
    [BookableResource].[UserId],
    [BookableResource].[UserIdName],
    [BookableResource].[UserIdYomiName],
    [BookableResource].[UTCConversionTimeZoneCode],
    [BookableResource].[VersionNumber]
from BookableResource
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ResourceTypePLTable] on 
		([ResourceTypePLTable].AttributeName = 'resourcetype'
		and [ResourceTypePLTable].ObjectTypeCode = 1150
		and [ResourceTypePLTable].AttributeValue = [BookableResource].[ResourceType]
		and [ResourceTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1150
		and [StateCodePLTable].AttributeValue = [BookableResource].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1150
		and [StatusCodePLTable].AttributeValue = [BookableResource].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1150) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[BookableResource].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 1150))
		
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
		[BookableResource].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1150)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[BookableResource].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[BookableResource].[BookableResourceId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 1150))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredBookableResource] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredBookableResource] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
