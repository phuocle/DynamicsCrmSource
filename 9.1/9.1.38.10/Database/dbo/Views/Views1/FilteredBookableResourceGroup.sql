

--
-- report view for bookableresourcegroup
--
create view dbo.[FilteredBookableResourceGroup] (
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
    [owneriddsc],
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
    --[BookableResourceGroup].[OwnerIdDsc]
    0,
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
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1151
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
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1151
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBookableResourceGroup] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBookableResourceGroup] TO [CRMReaderRole]
    AS [dbo];

