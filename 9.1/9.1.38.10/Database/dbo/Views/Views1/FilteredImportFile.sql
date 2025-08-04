

--
-- report view for importfile
--
create view dbo.[FilteredImportFile] (
    [additionalheaderrow],
    [completedon],
    [completedonutc],
    [content],
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
    [datadelimitercode],
    [datadelimitername],
    [enableduplicatedetection],
    [enableduplicatedetectionname],
    [entitykeyid],
    [failurecount],
    [fielddelimitercode],
    [fielddelimitername],
    [filetypecode],
    [filetypename],
    [headerrow],
    [importfileid],
    [importid],
    [importiddsc],
    [importidname],
    [importmapid],
    [importmapiddsc],
    [importmapidname],
    [isfirstrowheader],
    [isfirstrowheadername],
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
    [parsedtablecolumnprefix],
    [parsedtablecolumnsnumber],
    [parsedtablename],
    [partialfailurecount],
    [processcode],
    [processcodename],
    [processingstatus],
    [processingstatusname],
    [progresscounter],
    [recordsownerid],
    [recordsowneriddsc],
    [recordsowneridname],
    [recordsowneridtype],
    [relatedentitycolumns],
    [size],
    [source],
    [sourceentityname],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [successcount],
    [targetentityname],
    [timezoneruleversionnumber],
    [totalcount],
    [upsertmodecode],
    [upsertmodename],
    [usesystemmap],
    [usesystemmapname],
    [utcconversiontimezonecode]
) with view_metadata as
select
    [ImportFile].[AdditionalHeaderRow],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ImportFile].[CompletedOn],
			us.TimeZoneCode),
        [ImportFile].[CompletedOn],
    [ImportFile].[Content],
    [ImportFile].[CreatedBy],
    --[ImportFile].[CreatedByDsc]
    0,
    [ImportFile].[CreatedByName],
    [ImportFile].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ImportFile].[CreatedOn],
			us.TimeZoneCode),
        [ImportFile].[CreatedOn],
    [ImportFile].[CreatedOnBehalfBy],
    --[ImportFile].[CreatedOnBehalfByDsc]
    0,
    [ImportFile].[CreatedOnBehalfByName],
    [ImportFile].[CreatedOnBehalfByYomiName],
    [ImportFile].[DataDelimiterCode],
    DataDelimiterCodePLTable.Value,
    [ImportFile].[EnableDuplicateDetection],
    EnableDuplicateDetectionPLTable.Value,
    [ImportFile].[EntityKeyId],
    [ImportFile].[FailureCount],
    [ImportFile].[FieldDelimiterCode],
    FieldDelimiterCodePLTable.Value,
    [ImportFile].[FileTypeCode],
    FileTypeCodePLTable.Value,
    [ImportFile].[HeaderRow],
    [ImportFile].[ImportFileId],
    [ImportFile].[ImportId],
    --[ImportFile].[ImportIdDsc]
    0,
    [ImportFile].[ImportIdName],
    [ImportFile].[ImportMapId],
    --[ImportFile].[ImportMapIdDsc]
    0,
    [ImportFile].[ImportMapIdName],
    [ImportFile].[IsFirstRowHeader],
    IsFirstRowHeaderPLTable.Value,
    [ImportFile].[ModifiedBy],
    --[ImportFile].[ModifiedByDsc]
    0,
    [ImportFile].[ModifiedByName],
    [ImportFile].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ImportFile].[ModifiedOn],
			us.TimeZoneCode),
        [ImportFile].[ModifiedOn],
    [ImportFile].[ModifiedOnBehalfBy],
    --[ImportFile].[ModifiedOnBehalfByDsc]
    0,
    [ImportFile].[ModifiedOnBehalfByName],
    [ImportFile].[ModifiedOnBehalfByYomiName],
    [ImportFile].[Name],
    [ImportFile].[OwnerId],
    --[ImportFile].[OwnerIdDsc]
    0,
    [ImportFile].[OwnerIdName],
    [ImportFile].[OwnerIdType],
    [ImportFile].[OwnerIdYomiName],
    [ImportFile].[OwningBusinessUnit],
    [ImportFile].[OwningTeam],
    [ImportFile].[OwningUser],
    [ImportFile].[ParsedTableColumnPrefix],
    [ImportFile].[ParsedTableColumnsNumber],
    [ImportFile].[ParsedTableName],
    [ImportFile].[PartialFailureCount],
    [ImportFile].[ProcessCode],
    ProcessCodePLTable.Value,
    [ImportFile].[ProcessingStatus],
    ProcessingStatusPLTable.Value,
    [ImportFile].[ProgressCounter],
    [ImportFile].[RecordsOwnerId],
    --[ImportFile].[RecordsOwnerIdDsc]
    0,
    [ImportFile].[RecordsOwnerIdName],
    [ImportFile].[RecordsOwnerIdType],
    [ImportFile].[RelatedEntityColumns],
    [ImportFile].[Size],
    [ImportFile].[Source],
    [ImportFile].[SourceEntityName],
    [ImportFile].[StateCode],
    StateCodePLTable.Value,
    [ImportFile].[StatusCode],
    StatusCodePLTable.Value,
    [ImportFile].[SuccessCount],
    [ImportFile].[TargetEntityName],
    [ImportFile].[TimeZoneRuleVersionNumber],
    [ImportFile].[TotalCount],
    [ImportFile].[UpsertModeCode],
    UpsertModeCodePLTable.Value,
    [ImportFile].[UseSystemMap],
    UseSystemMapPLTable.Value,
    [ImportFile].[UTCConversionTimeZoneCode]
from ImportFile
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [DataDelimiterCodePLTable] on 
		([DataDelimiterCodePLTable].AttributeName = 'datadelimitercode'
		and [DataDelimiterCodePLTable].ObjectTypeCode = 4412
		and [DataDelimiterCodePLTable].AttributeValue = [ImportFile].[DataDelimiterCode]
		and [DataDelimiterCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EnableDuplicateDetectionPLTable] on 
		([EnableDuplicateDetectionPLTable].AttributeName = 'enableduplicatedetection'
		and [EnableDuplicateDetectionPLTable].ObjectTypeCode = 4412
		and [EnableDuplicateDetectionPLTable].AttributeValue = [ImportFile].[EnableDuplicateDetection]
		and [EnableDuplicateDetectionPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FieldDelimiterCodePLTable] on 
		([FieldDelimiterCodePLTable].AttributeName = 'fielddelimitercode'
		and [FieldDelimiterCodePLTable].ObjectTypeCode = 4412
		and [FieldDelimiterCodePLTable].AttributeValue = [ImportFile].[FieldDelimiterCode]
		and [FieldDelimiterCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FileTypeCodePLTable] on 
		([FileTypeCodePLTable].AttributeName = 'filetypecode'
		and [FileTypeCodePLTable].ObjectTypeCode = 4412
		and [FileTypeCodePLTable].AttributeValue = [ImportFile].[FileTypeCode]
		and [FileTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsFirstRowHeaderPLTable] on 
		([IsFirstRowHeaderPLTable].AttributeName = 'isfirstrowheader'
		and [IsFirstRowHeaderPLTable].ObjectTypeCode = 4412
		and [IsFirstRowHeaderPLTable].AttributeValue = [ImportFile].[IsFirstRowHeader]
		and [IsFirstRowHeaderPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ProcessCodePLTable] on 
		([ProcessCodePLTable].AttributeName = 'processcode'
		and [ProcessCodePLTable].ObjectTypeCode = 4412
		and [ProcessCodePLTable].AttributeValue = [ImportFile].[ProcessCode]
		and [ProcessCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ProcessingStatusPLTable] on 
		([ProcessingStatusPLTable].AttributeName = 'processingstatus'
		and [ProcessingStatusPLTable].ObjectTypeCode = 4412
		and [ProcessingStatusPLTable].AttributeValue = [ImportFile].[ProcessingStatus]
		and [ProcessingStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4412
		and [StateCodePLTable].AttributeValue = [ImportFile].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4412
		and [StatusCodePLTable].AttributeValue = [ImportFile].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [UpsertModeCodePLTable] on 
		([UpsertModeCodePLTable].AttributeName = 'upsertmodecode'
		and [UpsertModeCodePLTable].ObjectTypeCode = 4412
		and [UpsertModeCodePLTable].AttributeValue = [ImportFile].[UpsertModeCode]
		and [UpsertModeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [UseSystemMapPLTable] on 
		([UseSystemMapPLTable].AttributeName = 'usesystemmap'
		and [UseSystemMapPLTable].ObjectTypeCode = 4412
		and [UseSystemMapPLTable].AttributeValue = [ImportFile].[UseSystemMap]
		and [UseSystemMapPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4412) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[ImportFile].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 4412
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
		[ImportFile].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4412)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ImportFile].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ImportFile].[ImportFileId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 4412
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredImportFile] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredImportFile] TO [CRMReaderRole]
    AS [dbo];

