

--
-- report view for importmap
--
create view dbo.[FilteredImportMap] 
(
    [componentstate],
    [createdby],
    [createdbydsc],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [entitiesperfile],
    [entitiesperfilename],
    [importmapid],
    [importmapidunique],
    [importmaptype],
    [importmaptypename],
    [introducedversion],
    [ismanaged],
    [ismanagedname],
    [isvalidforimport],
    [isvalidforimportname],
    [iswizardcreated],
    [iswizardcreatedname],
    [mapcustomizations],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [solutionid],
    [source],
    [sourcetype],
    [sourcetypename],
    [sourceuseridentifierforsourcecrmuserlink],
    [sourceuseridentifierforsourcedatasourceuserlink],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [targetentity],
    [targetentityname],
    [targetuseridentifierforsourcecrmuserlink]
) with view_metadata as
select
    [ImportMap].[ComponentState],
    [ImportMap].[CreatedBy],
    --[ImportMap].[CreatedByDsc]
    0,
    [ImportMap].[CreatedByName],
    [ImportMap].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ImportMap].[CreatedOn],
			us.TimeZoneCode),
        [ImportMap].[CreatedOn],
    [ImportMap].[CreatedOnBehalfBy],
    --[ImportMap].[CreatedOnBehalfByDsc]
    0,
    [ImportMap].[CreatedOnBehalfByName],
    [ImportMap].[CreatedOnBehalfByYomiName],
    [ImportMap].[Description],
    [ImportMap].[EntitiesPerFile],
    EntitiesPerFilePLTable.Value,
    [ImportMap].[ImportMapId],
    [ImportMap].[ImportMapIdUnique],
    [ImportMap].[ImportMapType],
    ImportMapTypePLTable.Value,
    [ImportMap].[IntroducedVersion],
    [ImportMap].[IsManaged],
    IsManagedPLTable.Value,
    [ImportMap].[IsValidForImport],
    IsValidForImportPLTable.Value,
    [ImportMap].[IsWizardCreated],
    IsWizardCreatedPLTable.Value,
    [ImportMap].[MapCustomizations],
    [ImportMap].[ModifiedBy],
    --[ImportMap].[ModifiedByDsc]
    0,
    [ImportMap].[ModifiedByName],
    [ImportMap].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ImportMap].[ModifiedOn],
			us.TimeZoneCode),
        [ImportMap].[ModifiedOn],
    [ImportMap].[ModifiedOnBehalfBy],
    --[ImportMap].[ModifiedOnBehalfByDsc]
    0,
    [ImportMap].[ModifiedOnBehalfByName],
    [ImportMap].[ModifiedOnBehalfByYomiName],
    [ImportMap].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ImportMap].[OverwriteTime],
			us.TimeZoneCode),
        [ImportMap].[OverwriteTime],
    [ImportMap].[OwnerId],
    --[ImportMap].[OwnerIdDsc]
    0,
    [ImportMap].[OwnerIdName],
    [ImportMap].[OwnerIdType],
    [ImportMap].[OwnerIdYomiName],
    [ImportMap].[OwningBusinessUnit],
    [ImportMap].[OwningTeam],
    [ImportMap].[OwningUser],
    [ImportMap].[SolutionId],
    [ImportMap].[Source],
    [ImportMap].[SourceType],
    SourceTypePLTable.Value,
    [ImportMap].[SourceUserIdentifierForSourceCRMUserLink],
    [ImportMap].[SourceUserIdentifierForSourceDataSourceUserLink],
    [ImportMap].[StateCode],
    StateCodePLTable.Value,
    [ImportMap].[StatusCode],
    StatusCodePLTable.Value,
    [ImportMap].[TargetEntity],
    TargetEntityPLTable.Value,
    [ImportMap].[TargetUserIdentifierForSourceCRMUserLink]
from ImportMap
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [EntitiesPerFilePLTable] on 
		([EntitiesPerFilePLTable].AttributeName = 'entitiesperfile'
		and [EntitiesPerFilePLTable].ObjectTypeCode = 4411
		and [EntitiesPerFilePLTable].AttributeValue = [ImportMap].[EntitiesPerFile]
		and [EntitiesPerFilePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ImportMapTypePLTable] on 
		([ImportMapTypePLTable].AttributeName = 'importmaptype'
		and [ImportMapTypePLTable].ObjectTypeCode = 4411
		and [ImportMapTypePLTable].AttributeValue = [ImportMap].[ImportMapType]
		and [ImportMapTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4411
		and [IsManagedPLTable].AttributeValue = [ImportMap].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsValidForImportPLTable] on 
		([IsValidForImportPLTable].AttributeName = 'isvalidforimport'
		and [IsValidForImportPLTable].ObjectTypeCode = 4411
		and [IsValidForImportPLTable].AttributeValue = [ImportMap].[IsValidForImport]
		and [IsValidForImportPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWizardCreatedPLTable] on 
		([IsWizardCreatedPLTable].AttributeName = 'iswizardcreated'
		and [IsWizardCreatedPLTable].ObjectTypeCode = 4411
		and [IsWizardCreatedPLTable].AttributeValue = [ImportMap].[IsWizardCreated]
		and [IsWizardCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SourceTypePLTable] on 
		([SourceTypePLTable].AttributeName = 'sourcetype'
		and [SourceTypePLTable].ObjectTypeCode = 4411
		and [SourceTypePLTable].AttributeValue = [ImportMap].[SourceType]
		and [SourceTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4411
		and [StateCodePLTable].AttributeValue = [ImportMap].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4411
		and [StatusCodePLTable].AttributeValue = [ImportMap].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TargetEntityPLTable] on 
		([TargetEntityPLTable].AttributeName = 'targetentity'
		and [TargetEntityPLTable].ObjectTypeCode = 4411
		and [TargetEntityPLTable].AttributeValue = [ImportMap].[TargetEntity]
		and [TargetEntityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4411) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[ImportMap].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 4411
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
		[ImportMap].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4411)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ImportMap].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ImportMap].[ImportMapId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 4411
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredImportMap] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredImportMap] TO [CRMReaderRole]
    AS [dbo];

