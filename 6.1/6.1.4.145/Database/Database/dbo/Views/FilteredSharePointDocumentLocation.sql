

--
-- report view for sharepointdocumentlocation
--
create view dbo.[FilteredSharePointDocumentLocation] (
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
    [sharepointdocumentlocationid],
    [sitecollectionid],
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
    [SharePointDocumentLocation].[SharePointDocumentLocationId],
    [SharePointDocumentLocation].[SiteCollectionId],
    [SharePointDocumentLocation].[StateCode],
    StateCodePLTable.Value,
    [SharePointDocumentLocation].[StatusCode],
    StatusCodePLTable.Value,
    [SharePointDocumentLocation].[TimeZoneRuleVersionNumber],
    [SharePointDocumentLocation].[TransactionCurrencyId],
    [SharePointDocumentLocation].[TransactionCurrencyIdName],
    [SharePointDocumentLocation].[UTCConversionTimeZoneCode],
    [SharePointDocumentLocation].[VersionNumber]
from SharePointDocumentLocation
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
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
	--
	[SharePointDocumentLocation].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9508
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
		[SharePointDocumentLocation].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9508)
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
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 9508 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSharePointDocumentLocation] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSharePointDocumentLocation] TO [CRMReaderRole]
    AS [dbo];

