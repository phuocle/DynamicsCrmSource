USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredSharePointSite]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for sharepointsite
--
create view [dbo].[FilteredSharePointSite] (
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
    [ispowerbisite],
    [ispowerbisitename],
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
    [servicetype],
    [servicetypename],
    [sharepointsiteid],
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
    [SharePointSite].[IsPowerBISite],
    IsPowerBISitePLTable.Value,
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
    [SharePointSite].[ServiceType],
    ServiceTypePLTable.Value,
    [SharePointSite].[SharePointSiteId],
    [SharePointSite].[SiteCollectionId],
    [SharePointSite].[StateCode],
    StateCodePLTable.Value,
    [SharePointSite].[StatusCode],
    StatusCodePLTable.Value,
    [SharePointSite].[TimeZoneRuleVersionNumber],
    [SharePointSite].[TransactionCurrencyId],
    [SharePointSite].[TransactionCurrencyIdName],
    [SharePointSite].[UserId],
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
    left outer join StringMap [IsPowerBISitePLTable] on 
		([IsPowerBISitePLTable].AttributeName = 'ispowerbisite'
		and [IsPowerBISitePLTable].ObjectTypeCode = 9502
		and [IsPowerBISitePLTable].AttributeValue = [SharePointSite].[IsPowerBISite]
		and [IsPowerBISitePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ServiceTypePLTable] on 
		([ServiceTypePLTable].AttributeName = 'servicetype'
		and [ServiceTypePLTable].ObjectTypeCode = 9502
		and [ServiceTypePLTable].AttributeValue = [SharePointSite].[ServiceType]
		and [ServiceTypePLTable].LangId = 
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
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[SharePointSite].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 9502))
		
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
		[SharePointSite].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9502)
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
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 9502))
	)
)

GO
