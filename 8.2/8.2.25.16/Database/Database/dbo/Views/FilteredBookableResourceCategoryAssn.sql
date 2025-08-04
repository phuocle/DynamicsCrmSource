

--
-- report view for bookableresourcecategoryassn
--
create view dbo.[FilteredBookableResourceCategoryAssn] (
    [bookableresourcecategoryassnid],
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
    [resource],
    [resourcecategory],
    [resourcecategoryname],
    [resourcename],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [BookableResourceCategoryAssn].[BookableResourceCategoryAssnId],
    [BookableResourceCategoryAssn].[CreatedBy],
    [BookableResourceCategoryAssn].[CreatedByName],
    [BookableResourceCategoryAssn].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceCategoryAssn].[CreatedOn],
			us.TimeZoneCode),
        [BookableResourceCategoryAssn].[CreatedOn],
    [BookableResourceCategoryAssn].[CreatedOnBehalfBy],
    [BookableResourceCategoryAssn].[CreatedOnBehalfByName],
    [BookableResourceCategoryAssn].[CreatedOnBehalfByYomiName],
    [BookableResourceCategoryAssn].[ExchangeRate],
    [BookableResourceCategoryAssn].[ImportSequenceNumber],
    [BookableResourceCategoryAssn].[ModifiedBy],
    [BookableResourceCategoryAssn].[ModifiedByName],
    [BookableResourceCategoryAssn].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceCategoryAssn].[ModifiedOn],
			us.TimeZoneCode),
        [BookableResourceCategoryAssn].[ModifiedOn],
    [BookableResourceCategoryAssn].[ModifiedOnBehalfBy],
    [BookableResourceCategoryAssn].[ModifiedOnBehalfByName],
    [BookableResourceCategoryAssn].[ModifiedOnBehalfByYomiName],
    [BookableResourceCategoryAssn].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceCategoryAssn].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [BookableResourceCategoryAssn].[OverriddenCreatedOn],
    [BookableResourceCategoryAssn].[OwnerId],
    [BookableResourceCategoryAssn].[OwnerIdName],
    [BookableResourceCategoryAssn].[OwnerIdType],
    [BookableResourceCategoryAssn].[OwnerIdYomiName],
    [BookableResourceCategoryAssn].[OwningBusinessUnit],
    [BookableResourceCategoryAssn].[OwningTeam],
    [BookableResourceCategoryAssn].[OwningUser],
    [BookableResourceCategoryAssn].[Resource],
    [BookableResourceCategoryAssn].[ResourceCategory],
    [BookableResourceCategoryAssn].[ResourceCategoryName],
    [BookableResourceCategoryAssn].[ResourceName],
    [BookableResourceCategoryAssn].[StateCode],
    StateCodePLTable.Value,
    [BookableResourceCategoryAssn].[StatusCode],
    StatusCodePLTable.Value,
    [BookableResourceCategoryAssn].[TimeZoneRuleVersionNumber],
    [BookableResourceCategoryAssn].[TransactionCurrencyId],
    [BookableResourceCategoryAssn].[TransactionCurrencyIdName],
    [BookableResourceCategoryAssn].[UTCConversionTimeZoneCode],
    [BookableResourceCategoryAssn].[VersionNumber]
from BookableResourceCategoryAssn
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1149
		and [StateCodePLTable].AttributeValue = [BookableResourceCategoryAssn].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1149
		and [StatusCodePLTable].AttributeValue = [BookableResourceCategoryAssn].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1149) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[BookableResourceCategoryAssn].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1149
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
		[BookableResourceCategoryAssn].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1149)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[BookableResourceCategoryAssn].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[BookableResourceCategoryAssn].[BookableResourceCategoryAssnId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1149
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBookableResourceCategoryAssn] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBookableResourceCategoryAssn] TO [CRMReaderRole]
    AS [dbo];

