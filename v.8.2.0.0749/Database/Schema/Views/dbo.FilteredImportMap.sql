SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for importmap
--
create view [dbo].[FilteredImportMap] (
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
    [importmaptype],
    [importmaptypename],
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
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
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
    [ImportMap].[ImportMapType],
    ImportMapTypePLTable.Value,
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
    [ImportMap].[OwnerId],
    --[ImportMap].[OwnerIdDsc]
    0,
    [ImportMap].[OwnerIdName],
    [ImportMap].[OwnerIdType],
    [ImportMap].[OwnerIdYomiName],
    [ImportMap].[OwningBusinessUnit],
    [ImportMap].[OwningTeam],
    [ImportMap].[OwningUser],
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
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 4411))
		
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
		[ImportMap].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4411)
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
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 4411))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredImportMap] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredImportMap] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
