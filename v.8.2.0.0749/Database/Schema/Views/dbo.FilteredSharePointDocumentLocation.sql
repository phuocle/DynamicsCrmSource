SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for sharepointdocumentlocation
--
create view [dbo].[FilteredSharePointDocumentLocation] (
    [absoluteurl],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [exchangerate],
    [importsequencenumber],
    [locationtype],
    [locationtypename],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
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
    [parentsiteorlocation],
    [parentsiteorlocationname],
    [parentsiteorlocationtypecode],
    [regardingobjectid],
    [regardingobjectiddsc],
    [regardingobjectidname],
    [regardingobjectidyominame],
    [regardingobjecttypecode],
    [relativeurl],
    [servicetype],
    [servicetypename],
    [sharepointdocumentlocationid],
    [sitecollectionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [userid],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [SharePointDocumentLocation].[AbsoluteURL],
    [SharePointDocumentLocation].[CreatedBy],
    [SharePointDocumentLocation].[CreatedByName],
    [SharePointDocumentLocation].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SharePointDocumentLocation].[CreatedOn],
			us.TimeZoneCode),
        [SharePointDocumentLocation].[CreatedOn],
    [SharePointDocumentLocation].[CreatedOnBehalfBy],
    --[SharePointDocumentLocation].[CreatedOnBehalfByDsc]
    0,
    [SharePointDocumentLocation].[CreatedOnBehalfByName],
    [SharePointDocumentLocation].[CreatedOnBehalfByYomiName],
    [SharePointDocumentLocation].[Description],
    [SharePointDocumentLocation].[ExchangeRate],
    [SharePointDocumentLocation].[ImportSequenceNumber],
    [SharePointDocumentLocation].[LocationType],
    LocationTypePLTable.Value,
    [SharePointDocumentLocation].[ModifiedBy],
    [SharePointDocumentLocation].[ModifiedByName],
    [SharePointDocumentLocation].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SharePointDocumentLocation].[ModifiedOn],
			us.TimeZoneCode),
        [SharePointDocumentLocation].[ModifiedOn],
    [SharePointDocumentLocation].[ModifiedOnBehalfBy],
    --[SharePointDocumentLocation].[ModifiedOnBehalfByDsc]
    0,
    [SharePointDocumentLocation].[ModifiedOnBehalfByName],
    [SharePointDocumentLocation].[ModifiedOnBehalfByYomiName],
    [SharePointDocumentLocation].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SharePointDocumentLocation].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SharePointDocumentLocation].[OverriddenCreatedOn],
    [SharePointDocumentLocation].[OwnerId],
    --[SharePointDocumentLocation].[OwnerIdDsc]
    0,
    [SharePointDocumentLocation].[OwnerIdName],
    [SharePointDocumentLocation].[OwnerIdType],
    [SharePointDocumentLocation].[OwnerIdYomiName],
    [SharePointDocumentLocation].[OwningBusinessUnit],
    [SharePointDocumentLocation].[OwningTeam],
    [SharePointDocumentLocation].[OwningUser],
    [SharePointDocumentLocation].[ParentSiteOrLocation],
    [SharePointDocumentLocation].[ParentSiteOrLocationName],
    [SharePointDocumentLocation].[ParentSiteOrLocationTypeCode],
    [SharePointDocumentLocation].[RegardingObjectId],
    --[SharePointDocumentLocation].[RegardingObjectIdDsc]
    0,
    [SharePointDocumentLocation].[RegardingObjectIdName],
    [SharePointDocumentLocation].[RegardingObjectIdYomiName],
    [SharePointDocumentLocation].[RegardingObjectTypeCode],
    [SharePointDocumentLocation].[RelativeUrl],
    [SharePointDocumentLocation].[ServiceType],
    ServiceTypePLTable.Value,
    [SharePointDocumentLocation].[SharePointDocumentLocationId],
    [SharePointDocumentLocation].[SiteCollectionId],
    [SharePointDocumentLocation].[StateCode],
    StateCodePLTable.Value,
    [SharePointDocumentLocation].[StatusCode],
    StatusCodePLTable.Value,
    [SharePointDocumentLocation].[TimeZoneRuleVersionNumber],
    [SharePointDocumentLocation].[TransactionCurrencyId],
    [SharePointDocumentLocation].[TransactionCurrencyIdName],
    [SharePointDocumentLocation].[UserId],
    [SharePointDocumentLocation].[UTCConversionTimeZoneCode],
    [SharePointDocumentLocation].[VersionNumber]
from SharePointDocumentLocation
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [LocationTypePLTable] on 
		([LocationTypePLTable].AttributeName = 'locationtype'
		and [LocationTypePLTable].ObjectTypeCode = 9508
		and [LocationTypePLTable].AttributeValue = [SharePointDocumentLocation].[LocationType]
		and [LocationTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ServiceTypePLTable] on 
		([ServiceTypePLTable].AttributeName = 'servicetype'
		and [ServiceTypePLTable].ObjectTypeCode = 9508
		and [ServiceTypePLTable].AttributeValue = [SharePointDocumentLocation].[ServiceType]
		and [ServiceTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9508
		and [StateCodePLTable].AttributeValue = [SharePointDocumentLocation].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9508
		and [StatusCodePLTable].AttributeValue = [SharePointDocumentLocation].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9508) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[SharePointDocumentLocation].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 9508))
		
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
		[SharePointDocumentLocation].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9508)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[SharePointDocumentLocation].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[SharePointDocumentLocation].[SharePointDocumentLocationId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 9508))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredSharePointDocumentLocation] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSharePointDocumentLocation] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
