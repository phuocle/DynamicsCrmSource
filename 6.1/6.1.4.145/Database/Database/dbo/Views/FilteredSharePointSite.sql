

--
-- report view for sharepointsite
--
create view dbo.[FilteredSharePointSite] (
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
    [folderstructureentity],
    [folderstructureentityname],
    [importsequencenumber],
    [isdefault],
    [isdefaultname],
    [isgridpresent],
    [isgridpresentname],
    [lastvalidated],
    [lastvalidatedutc],
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
    [parentsite],
    [parentsitename],
    [parentsiteobjecttypecode],
    [relativeurl],
    [sharepointsiteid],
    [sitecollectionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [validationstatus],
    [validationstatuserrorcode],
    [validationstatuserrorcodename],
    [validationstatusname],
    [versionnumber]
) with view_metadata as
select
    [SharePointSite].[AbsoluteURL],
    [SharePointSite].[CreatedBy],
    [SharePointSite].[CreatedByName],
    [SharePointSite].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SharePointSite].[CreatedOn],
			us.TimeZoneCode),
        [SharePointSite].[CreatedOn],
    [SharePointSite].[CreatedOnBehalfBy],
    --[SharePointSite].[CreatedOnBehalfByDsc]
    0,
    [SharePointSite].[CreatedOnBehalfByName],
    [SharePointSite].[CreatedOnBehalfByYomiName],
    [SharePointSite].[Description],
    [SharePointSite].[ExchangeRate],
    [SharePointSite].[FolderStructureEntity],
    FolderStructureEntityPLTable.Value,
    [SharePointSite].[ImportSequenceNumber],
    [SharePointSite].[IsDefault],
    IsDefaultPLTable.Value,
    [SharePointSite].[IsGridPresent],
    IsGridPresentPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([SharePointSite].[LastValidated],
			us.TimeZoneCode),
        [SharePointSite].[LastValidated],
    [SharePointSite].[ModifiedBy],
    [SharePointSite].[ModifiedByName],
    [SharePointSite].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SharePointSite].[ModifiedOn],
			us.TimeZoneCode),
        [SharePointSite].[ModifiedOn],
    [SharePointSite].[ModifiedOnBehalfBy],
    --[SharePointSite].[ModifiedOnBehalfByDsc]
    0,
    [SharePointSite].[ModifiedOnBehalfByName],
    [SharePointSite].[ModifiedOnBehalfByYomiName],
    [SharePointSite].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SharePointSite].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SharePointSite].[OverriddenCreatedOn],
    [SharePointSite].[OwnerId],
    --[SharePointSite].[OwnerIdDsc]
    0,
    [SharePointSite].[OwnerIdName],
    [SharePointSite].[OwnerIdType],
    [SharePointSite].[OwnerIdYomiName],
    [SharePointSite].[OwningBusinessUnit],
    [SharePointSite].[OwningTeam],
    [SharePointSite].[OwningUser],
    [SharePointSite].[ParentSite],
    [SharePointSite].[ParentSiteName],
    [SharePointSite].[ParentSiteObjectTypeCode],
    [SharePointSite].[RelativeUrl],
    [SharePointSite].[SharePointSiteId],
    [SharePointSite].[SiteCollectionId],
    [SharePointSite].[StateCode],
    StateCodePLTable.Value,
    [SharePointSite].[StatusCode],
    StatusCodePLTable.Value,
    [SharePointSite].[TimeZoneRuleVersionNumber],
    [SharePointSite].[TransactionCurrencyId],
    [SharePointSite].[TransactionCurrencyIdName],
    [SharePointSite].[UTCConversionTimeZoneCode],
    [SharePointSite].[ValidationStatus],
    [SharePointSite].[ValidationStatusErrorCode],
    ValidationStatusErrorCodePLTable.Value,
    ValidationStatusPLTable.Value,
    [SharePointSite].[VersionNumber]
from SharePointSite
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [FolderStructureEntityPLTable] on 
		([FolderStructureEntityPLTable].AttributeName = 'folderstructureentity'
		and [FolderStructureEntityPLTable].ObjectTypeCode = 9502
		and [FolderStructureEntityPLTable].AttributeValue = [SharePointSite].[FolderStructureEntity]
		and [FolderStructureEntityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsDefaultPLTable] on 
		([IsDefaultPLTable].AttributeName = 'isdefault'
		and [IsDefaultPLTable].ObjectTypeCode = 9502
		and [IsDefaultPLTable].AttributeValue = [SharePointSite].[IsDefault]
		and [IsDefaultPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsGridPresentPLTable] on 
		([IsGridPresentPLTable].AttributeName = 'isgridpresent'
		and [IsGridPresentPLTable].ObjectTypeCode = 9502
		and [IsGridPresentPLTable].AttributeValue = [SharePointSite].[IsGridPresent]
		and [IsGridPresentPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9502
		and [StateCodePLTable].AttributeValue = [SharePointSite].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9502
		and [StatusCodePLTable].AttributeValue = [SharePointSite].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ValidationStatusErrorCodePLTable] on 
		([ValidationStatusErrorCodePLTable].AttributeName = 'validationstatuserrorcode'
		and [ValidationStatusErrorCodePLTable].ObjectTypeCode = 9502
		and [ValidationStatusErrorCodePLTable].AttributeValue = [SharePointSite].[ValidationStatusErrorCode]
		and [ValidationStatusErrorCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ValidationStatusPLTable] on 
		([ValidationStatusPLTable].AttributeName = 'validationstatus'
		and [ValidationStatusPLTable].ObjectTypeCode = 9502
		and [ValidationStatusPLTable].AttributeValue = [SharePointSite].[ValidationStatus]
		and [ValidationStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9502) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[SharePointSite].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9502
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
		[SharePointSite].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9502)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[SharePointSite].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[SharePointSite].[SharePointSiteId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 9502 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSharePointSite] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSharePointSite] TO [CRMReaderRole]
    AS [dbo];

