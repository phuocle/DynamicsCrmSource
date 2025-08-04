

--
-- report view for canvasapp
--
create view dbo.[FilteredCanvasApp] 
(
    [aadcreatedbyid],
    [aadlastmodifiedbyid],
    [aadlastpublishedbyid],
    [admincontrolbypassconsent],
    [admincontrolbypassconsentname],
    [appcomponentdependencies],
    [appcomponents],
    [appopenuri],
    [appversion],
    [assets],
    [assets_name],
    [authorizationreferences],
    [backgroundcolor],
    [backgroundimage_name],
    [background_image],
    [bypassconsent],
    [bypassconsentname],
    [canconsumeapppass],
    [canvasappid],
    [canvasapprowid],
    [canvasapptype],
    [cdsdependencies],
    [commitmessage],
    [componentstate],
    [connectionreferences],
    [createdbyclientversion],
    [createdtime],
    [createdtimeutc],
    [databasereferences],
    [description],
    [displayname],
    [document],
    [document_name],
    [embeddedapp],
    [galleryitemid],
    [introducedversion],
    [iscdsupgraded],
    [iscdsupgradedname],
    [isfeaturedapp],
    [isfeaturedappname],
    [isheroapp],
    [isheroappname],
    [ishidden],
    [ishiddenname],
    [ismanaged],
    [ismanagedname],
    [largeicon_name],
    [large_icon],
    [lastmodifiedtime],
    [lastmodifiedtimeutc],
    [lastpublishtime],
    [lastpublishtimeutc],
    [mediumicon_name],
    [medium_icon],
    [minclientversion],
    [name],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owningbusinessunit],
    [owningbusinessunitname],
    [owningteam],
    [owninguser],
    [publisher],
    [smallicon_name],
    [small_icon],
    [solutionid],
    [status],
    [tags],
    [teamsicon_name],
    [teams_icon],
    [versionnumber],
    [wideicon_name],
    [wide_icon]
) with view_metadata as
select
    [CanvasApp].[AADCreatedById],
    [CanvasApp].[AADLastModifiedById],
    [CanvasApp].[AADLastPublishedById],
    [CanvasApp].[AdminControlBypassConsent],
    AdminControlBypassConsentPLTable.Value,
    [CanvasApp].[AppComponentDependencies],
    [CanvasApp].[AppComponents],
    [CanvasApp].[AppOpenUri],
    [CanvasApp].[AppVersion],
    [CanvasApp].[Assets],
    [CanvasApp].[Assets_Name],
    [CanvasApp].[AuthorizationReferences],
    [CanvasApp].[BackgroundColor],
    [CanvasApp].[BackgroundImage_Name],
    [CanvasApp].[BackgroundImage],
    [CanvasApp].[BypassConsent],
    BypassConsentPLTable.Value,
    [CanvasApp].[CanConsumeAppPass],
    [CanvasApp].[CanvasAppId],
    [CanvasApp].[CanvasAppRowId],
    [CanvasApp].[CanvasAppType],
    [CanvasApp].[CdsDependencies],
    [CanvasApp].[CommitMessage],
    [CanvasApp].[ComponentState],
    [CanvasApp].[ConnectionReferences],
    [CanvasApp].[CreatedByClientVersion],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CanvasApp].[CreatedTime],
			us.TimeZoneCode),
        [CanvasApp].[CreatedTime],
    [CanvasApp].[DatabaseReferences],
    [CanvasApp].[Description],
    [CanvasApp].[DisplayName],
    [CanvasApp].[Document],
    [CanvasApp].[Document_Name],
    [CanvasApp].[EmbeddedApp],
    [CanvasApp].[GalleryItemId],
    [CanvasApp].[IntroducedVersion],
    [CanvasApp].[IsCdsUpgraded],
    IsCdsUpgradedPLTable.Value,
    [CanvasApp].[IsFeaturedApp],
    IsFeaturedAppPLTable.Value,
    [CanvasApp].[IsHeroApp],
    IsHeroAppPLTable.Value,
    [CanvasApp].[IsHidden],
    IsHiddenPLTable.Value,
    [CanvasApp].[IsManaged],
    IsManagedPLTable.Value,
    [CanvasApp].[LargeIcon_Name],
    [CanvasApp].[LargeIcon],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CanvasApp].[LastModifiedTime],
			us.TimeZoneCode),
        [CanvasApp].[LastModifiedTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CanvasApp].[LastPublishTime],
			us.TimeZoneCode),
        [CanvasApp].[LastPublishTime],
    [CanvasApp].[MediumIcon_Name],
    [CanvasApp].[MediumIcon],
    [CanvasApp].[MinClientVersion],
    [CanvasApp].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CanvasApp].[OverwriteTime],
			us.TimeZoneCode),
        [CanvasApp].[OverwriteTime],
    [CanvasApp].[OwnerId],
    [CanvasApp].[OwnerIdName],
    [CanvasApp].[OwnerIdType],
    [CanvasApp].[OwningBusinessUnit],
    [CanvasApp].[OwningBusinessUnitName],
    [CanvasApp].[OwningTeam],
    [CanvasApp].[OwningUser],
    [CanvasApp].[Publisher],
    [CanvasApp].[SmallIcon_Name],
    [CanvasApp].[SmallIcon],
    [CanvasApp].[SolutionId],
    [CanvasApp].[Status],
    [CanvasApp].[Tags],
    [CanvasApp].[TeamsIcon_Name],
    [CanvasApp].[TeamsIcon],
    [CanvasApp].[VersionNumber],
    [CanvasApp].[WideIcon_Name],
    [CanvasApp].[WideIcon]
from CanvasApp
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AdminControlBypassConsentPLTable] on 
		([AdminControlBypassConsentPLTable].AttributeName = 'admincontrolbypassconsent'
		and [AdminControlBypassConsentPLTable].ObjectTypeCode = 300
		and [AdminControlBypassConsentPLTable].AttributeValue = [CanvasApp].[AdminControlBypassConsent]
		and [AdminControlBypassConsentPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [BypassConsentPLTable] on 
		([BypassConsentPLTable].AttributeName = 'bypassconsent'
		and [BypassConsentPLTable].ObjectTypeCode = 300
		and [BypassConsentPLTable].AttributeValue = [CanvasApp].[BypassConsent]
		and [BypassConsentPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsCdsUpgradedPLTable] on 
		([IsCdsUpgradedPLTable].AttributeName = 'iscdsupgraded'
		and [IsCdsUpgradedPLTable].ObjectTypeCode = 300
		and [IsCdsUpgradedPLTable].AttributeValue = [CanvasApp].[IsCdsUpgraded]
		and [IsCdsUpgradedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsFeaturedAppPLTable] on 
		([IsFeaturedAppPLTable].AttributeName = 'isfeaturedapp'
		and [IsFeaturedAppPLTable].ObjectTypeCode = 300
		and [IsFeaturedAppPLTable].AttributeValue = [CanvasApp].[IsFeaturedApp]
		and [IsFeaturedAppPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsHeroAppPLTable] on 
		([IsHeroAppPLTable].AttributeName = 'isheroapp'
		and [IsHeroAppPLTable].ObjectTypeCode = 300
		and [IsHeroAppPLTable].AttributeValue = [CanvasApp].[IsHeroApp]
		and [IsHeroAppPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsHiddenPLTable] on 
		([IsHiddenPLTable].AttributeName = 'ishidden'
		and [IsHiddenPLTable].ObjectTypeCode = 300
		and [IsHiddenPLTable].AttributeValue = [CanvasApp].[IsHidden]
		and [IsHiddenPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 300
		and [IsManagedPLTable].AttributeValue = [CanvasApp].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(300) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[CanvasApp].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 300
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
		[CanvasApp].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 300)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[CanvasApp].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[CanvasApp].[CanvasAppId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 300
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCanvasApp] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCanvasApp] TO [CRMReaderRole]
    AS [dbo];

