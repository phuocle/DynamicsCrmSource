SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for bookableresourcegroup
--
create view [dbo].[FilteredBookableResourceGroup] (
    [bookableresourcegroupid],
    [childresource],
    [childresourcename],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [exchangerate],
    [fromdate],
    [fromdateutc],
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
    [parentresource],
    [parentresourcename],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [todate],
    [todateutc],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [BookableResourceGroup].[BookableResourceGroupId],
    [BookableResourceGroup].[ChildResource],
    [BookableResourceGroup].[ChildResourceName],
    [BookableResourceGroup].[CreatedBy],
    [BookableResourceGroup].[CreatedByName],
    [BookableResourceGroup].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceGroup].[CreatedOn],
			us.TimeZoneCode),
        [BookableResourceGroup].[CreatedOn],
    [BookableResourceGroup].[CreatedOnBehalfBy],
    [BookableResourceGroup].[CreatedOnBehalfByName],
    [BookableResourceGroup].[CreatedOnBehalfByYomiName],
    [BookableResourceGroup].[ExchangeRate],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceGroup].[FromDate],
			us.TimeZoneCode),
        [BookableResourceGroup].[FromDate],
    [BookableResourceGroup].[ImportSequenceNumber],
    [BookableResourceGroup].[ModifiedBy],
    [BookableResourceGroup].[ModifiedByName],
    [BookableResourceGroup].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceGroup].[ModifiedOn],
			us.TimeZoneCode),
        [BookableResourceGroup].[ModifiedOn],
    [BookableResourceGroup].[ModifiedOnBehalfBy],
    [BookableResourceGroup].[ModifiedOnBehalfByName],
    [BookableResourceGroup].[ModifiedOnBehalfByYomiName],
    [BookableResourceGroup].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceGroup].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [BookableResourceGroup].[OverriddenCreatedOn],
    [BookableResourceGroup].[OwnerId],
    [BookableResourceGroup].[OwnerIdName],
    [BookableResourceGroup].[OwnerIdType],
    [BookableResourceGroup].[OwnerIdYomiName],
    [BookableResourceGroup].[OwningBusinessUnit],
    [BookableResourceGroup].[OwningTeam],
    [BookableResourceGroup].[OwningUser],
    [BookableResourceGroup].[ParentResource],
    [BookableResourceGroup].[ParentResourceName],
    [BookableResourceGroup].[StateCode],
    StateCodePLTable.Value,
    [BookableResourceGroup].[StatusCode],
    StatusCodePLTable.Value,
    [BookableResourceGroup].[TimeZoneRuleVersionNumber],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceGroup].[ToDate],
			us.TimeZoneCode),
        [BookableResourceGroup].[ToDate],
    [BookableResourceGroup].[TransactionCurrencyId],
    [BookableResourceGroup].[TransactionCurrencyIdName],
    [BookableResourceGroup].[UTCConversionTimeZoneCode],
    [BookableResourceGroup].[VersionNumber]
from BookableResourceGroup
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1151
		and [StateCodePLTable].AttributeValue = [BookableResourceGroup].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1151
		and [StatusCodePLTable].AttributeValue = [BookableResourceGroup].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1151) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[BookableResourceGroup].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 1151))
		
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
		[BookableResourceGroup].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1151)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[BookableResourceGroup].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[BookableResourceGroup].[BookableResourceGroupId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 1151))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredBookableResourceGroup] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredBookableResourceGroup] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
