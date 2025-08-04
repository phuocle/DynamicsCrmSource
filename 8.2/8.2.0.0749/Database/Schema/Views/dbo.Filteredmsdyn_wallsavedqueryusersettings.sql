SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for msdyn_wallsavedqueryusersettings
--
create view [dbo].[Filteredmsdyn_wallsavedqueryusersettings] (
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [msdyn_data],
    [msdyn_default],
    [msdyn_entitydisplayname],
    [msdyn_entityname],
    [msdyn_includewallinresponse],
    [msdyn_includewallinresponsename],
    [msdyn_isfollowing],
    [msdyn_isfollowingname],
    [msdyn_isvirtual],
    [msdyn_isvirtualname],
    [msdyn_isvisible],
    [msdyn_isvisiblebit],
    [msdyn_isvisiblename],
    [msdyn_otc],
    [msdyn_savedqueryname],
    [msdyn_sortorder],
    [msdyn_type],
    [msdyn_userid],
    [msdyn_useridname],
    [msdyn_useridyominame],
    [msdyn_wallsavedqueryid],
    [msdyn_wallsavedqueryidname],
    [msdyn_wallsavedqueryusersettingsid],
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
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [msdyn_wallsavedqueryusersettings].[CreatedBy],
    [msdyn_wallsavedqueryusersettings].[CreatedByName],
    [msdyn_wallsavedqueryusersettings].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_wallsavedqueryusersettings].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_wallsavedqueryusersettings].[CreatedOn],
    [msdyn_wallsavedqueryusersettings].[CreatedOnBehalfBy],
    [msdyn_wallsavedqueryusersettings].[CreatedOnBehalfByName],
    [msdyn_wallsavedqueryusersettings].[CreatedOnBehalfByYomiName],
    [msdyn_wallsavedqueryusersettings].[ImportSequenceNumber],
    [msdyn_wallsavedqueryusersettings].[ModifiedBy],
    [msdyn_wallsavedqueryusersettings].[ModifiedByName],
    [msdyn_wallsavedqueryusersettings].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_wallsavedqueryusersettings].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_wallsavedqueryusersettings].[ModifiedOn],
    [msdyn_wallsavedqueryusersettings].[ModifiedOnBehalfBy],
    [msdyn_wallsavedqueryusersettings].[ModifiedOnBehalfByName],
    [msdyn_wallsavedqueryusersettings].[ModifiedOnBehalfByYomiName],
    [msdyn_wallsavedqueryusersettings].[msdyn_data],
    [msdyn_wallsavedqueryusersettings].[msdyn_default],
    [msdyn_wallsavedqueryusersettings].[msdyn_entitydisplayname],
    [msdyn_wallsavedqueryusersettings].[msdyn_entityname],
    [msdyn_wallsavedqueryusersettings].[msdyn_includewallinresponse],
    msdyn_includewallinresponsePLTable.Value,
    [msdyn_wallsavedqueryusersettings].[msdyn_isfollowing],
    msdyn_isfollowingPLTable.Value,
    [msdyn_wallsavedqueryusersettings].[msdyn_IsVirtual],
    msdyn_IsVirtualPLTable.Value,
    [msdyn_wallsavedqueryusersettings].[msdyn_isvisible],
    [msdyn_wallsavedqueryusersettings].[msdyn_isvisiblebit],
    msdyn_isvisiblePLTable.Value,
    [msdyn_wallsavedqueryusersettings].[msdyn_otc],
    [msdyn_wallsavedqueryusersettings].[msdyn_savedqueryname],
    [msdyn_wallsavedqueryusersettings].[msdyn_sortorder],
    [msdyn_wallsavedqueryusersettings].[msdyn_type],
    [msdyn_wallsavedqueryusersettings].[msdyn_userid],
    [msdyn_wallsavedqueryusersettings].[msdyn_useridName],
    [msdyn_wallsavedqueryusersettings].[msdyn_useridYomiName],
    [msdyn_wallsavedqueryusersettings].[msdyn_wallsavedqueryid],
    [msdyn_wallsavedqueryusersettings].[msdyn_wallsavedqueryidName],
    [msdyn_wallsavedqueryusersettings].[msdyn_wallsavedqueryusersettingsId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_wallsavedqueryusersettings].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_wallsavedqueryusersettings].[OverriddenCreatedOn],
    [msdyn_wallsavedqueryusersettings].[OwnerId],
    --[msdyn_wallsavedqueryusersettings].[OwnerIdDsc]
    0,
    [msdyn_wallsavedqueryusersettings].[OwnerIdName],
    [msdyn_wallsavedqueryusersettings].[OwnerIdType],
    [msdyn_wallsavedqueryusersettings].[OwnerIdYomiName],
    [msdyn_wallsavedqueryusersettings].[OwningBusinessUnit],
    [msdyn_wallsavedqueryusersettings].[OwningTeam],
    [msdyn_wallsavedqueryusersettings].[OwningUser],
    [msdyn_wallsavedqueryusersettings].[statecode],
    statecodePLTable.Value,
    [msdyn_wallsavedqueryusersettings].[statuscode],
    statuscodePLTable.Value,
    [msdyn_wallsavedqueryusersettings].[TimeZoneRuleVersionNumber],
    [msdyn_wallsavedqueryusersettings].[UTCConversionTimeZoneCode],
    [msdyn_wallsavedqueryusersettings].[VersionNumber]
from msdyn_wallsavedqueryusersettings
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_includewallinresponsePLTable] on 
		([msdyn_includewallinresponsePLTable].AttributeName = 'msdyn_includewallinresponse'
		and [msdyn_includewallinresponsePLTable].ObjectTypeCode = 10004
		and [msdyn_includewallinresponsePLTable].AttributeValue = [msdyn_wallsavedqueryusersettings].[msdyn_includewallinresponse]
		and [msdyn_includewallinresponsePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_isfollowingPLTable] on 
		([msdyn_isfollowingPLTable].AttributeName = 'msdyn_isfollowing'
		and [msdyn_isfollowingPLTable].ObjectTypeCode = 10004
		and [msdyn_isfollowingPLTable].AttributeValue = [msdyn_wallsavedqueryusersettings].[msdyn_isfollowing]
		and [msdyn_isfollowingPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_IsVirtualPLTable] on 
		([msdyn_IsVirtualPLTable].AttributeName = 'msdyn_isvirtual'
		and [msdyn_IsVirtualPLTable].ObjectTypeCode = 10004
		and [msdyn_IsVirtualPLTable].AttributeValue = [msdyn_wallsavedqueryusersettings].[msdyn_IsVirtual]
		and [msdyn_IsVirtualPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_isvisiblePLTable] on 
		([msdyn_isvisiblePLTable].AttributeName = 'msdyn_isvisible'
		and [msdyn_isvisiblePLTable].ObjectTypeCode = 10004
		and [msdyn_isvisiblePLTable].AttributeValue = [msdyn_wallsavedqueryusersettings].[msdyn_isvisible]
		and [msdyn_isvisiblePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10004
		and [statecodePLTable].AttributeValue = [msdyn_wallsavedqueryusersettings].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10004
		and [statuscodePLTable].AttributeValue = [msdyn_wallsavedqueryusersettings].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10004) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_wallsavedqueryusersettings].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 10004))
		
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
		[msdyn_wallsavedqueryusersettings].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 10004)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_wallsavedqueryusersettings].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_wallsavedqueryusersettings].[msdyn_wallsavedqueryusersettingsId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 10004))
	)
)
GO
GRANT SELECT ON  [dbo].[Filteredmsdyn_wallsavedqueryusersettings] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[Filteredmsdyn_wallsavedqueryusersettings] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
