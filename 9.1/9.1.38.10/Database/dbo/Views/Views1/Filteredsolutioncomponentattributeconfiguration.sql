

--
-- report view for solutioncomponentattributeconfiguration
--
create view dbo.[Filteredsolutioncomponentattributeconfiguration] 
(
    [attributeid],
    [attributeidname],
    [componentidunique],
    [componentstate],
    [componentstatename],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [encodingformat],
    [encodingformatname],
    [fileextension],
    [importsequencenumber],
    [iscustomizable],
    [isexportdisabled],
    [isexportdisabledname],
    [isexportedasfile],
    [isexportedasfilename],
    [ismanaged],
    [ismanagedname],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
    [solutioncomponentattributeconfigurationid],
    [solutioncomponentconfigurationid],
    [solutioncomponentconfigurationidname],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [solutioncomponentattributeconfiguration].[AttributeId],
    [solutioncomponentattributeconfiguration].[AttributeIdName],
    [solutioncomponentattributeconfiguration].[ComponentIdUnique],
    [solutioncomponentattributeconfiguration].[ComponentState],
    ComponentStatePLTable.Value,
    [solutioncomponentattributeconfiguration].[CreatedBy],
    [solutioncomponentattributeconfiguration].[CreatedByName],
    [solutioncomponentattributeconfiguration].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([solutioncomponentattributeconfiguration].[CreatedOn],
			us.TimeZoneCode),
        [solutioncomponentattributeconfiguration].[CreatedOn],
    [solutioncomponentattributeconfiguration].[CreatedOnBehalfBy],
    [solutioncomponentattributeconfiguration].[CreatedOnBehalfByName],
    [solutioncomponentattributeconfiguration].[CreatedOnBehalfByYomiName],
    [solutioncomponentattributeconfiguration].[EncodingFormat],
    EncodingFormatPLTable.Value,
    [solutioncomponentattributeconfiguration].[FileExtension],
    [solutioncomponentattributeconfiguration].[ImportSequenceNumber],
    [solutioncomponentattributeconfiguration].[IsCustomizable],
    [solutioncomponentattributeconfiguration].[IsExportDisabled],
    IsExportDisabledPLTable.Value,
    [solutioncomponentattributeconfiguration].[IsExportedAsFile],
    IsExportedAsFilePLTable.Value,
    [solutioncomponentattributeconfiguration].[IsManaged],
    IsManagedPLTable.Value,
    [solutioncomponentattributeconfiguration].[ModifiedBy],
    [solutioncomponentattributeconfiguration].[ModifiedByName],
    [solutioncomponentattributeconfiguration].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([solutioncomponentattributeconfiguration].[ModifiedOn],
			us.TimeZoneCode),
        [solutioncomponentattributeconfiguration].[ModifiedOn],
    [solutioncomponentattributeconfiguration].[ModifiedOnBehalfBy],
    [solutioncomponentattributeconfiguration].[ModifiedOnBehalfByName],
    [solutioncomponentattributeconfiguration].[ModifiedOnBehalfByYomiName],
    [solutioncomponentattributeconfiguration].[name],
    [solutioncomponentattributeconfiguration].[OrganizationId],
    [solutioncomponentattributeconfiguration].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([solutioncomponentattributeconfiguration].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [solutioncomponentattributeconfiguration].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([solutioncomponentattributeconfiguration].[OverwriteTime],
			us.TimeZoneCode),
        [solutioncomponentattributeconfiguration].[OverwriteTime],
    [solutioncomponentattributeconfiguration].[solutioncomponentattributeconfigurationId],
    [solutioncomponentattributeconfiguration].[SolutionComponentConfigurationId],
    [solutioncomponentattributeconfiguration].[solutioncomponentconfigurationidName],
    [solutioncomponentattributeconfiguration].[SolutionId],
    [solutioncomponentattributeconfiguration].[statecode],
    statecodePLTable.Value,
    [solutioncomponentattributeconfiguration].[statuscode],
    statuscodePLTable.Value,
    [solutioncomponentattributeconfiguration].[TimeZoneRuleVersionNumber],
    [solutioncomponentattributeconfiguration].[UTCConversionTimeZoneCode],
    [solutioncomponentattributeconfiguration].[VersionNumber]
from solutioncomponentattributeconfiguration
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10010
		and [ComponentStatePLTable].AttributeValue = [solutioncomponentattributeconfiguration].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EncodingFormatPLTable] on 
		([EncodingFormatPLTable].AttributeName = 'encodingformat'
		and [EncodingFormatPLTable].ObjectTypeCode = 10010
		and [EncodingFormatPLTable].AttributeValue = [solutioncomponentattributeconfiguration].[EncodingFormat]
		and [EncodingFormatPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsExportDisabledPLTable] on 
		([IsExportDisabledPLTable].AttributeName = 'isexportdisabled'
		and [IsExportDisabledPLTable].ObjectTypeCode = 10010
		and [IsExportDisabledPLTable].AttributeValue = [solutioncomponentattributeconfiguration].[IsExportDisabled]
		and [IsExportDisabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsExportedAsFilePLTable] on 
		([IsExportedAsFilePLTable].AttributeName = 'isexportedasfile'
		and [IsExportedAsFilePLTable].ObjectTypeCode = 10010
		and [IsExportedAsFilePLTable].AttributeValue = [solutioncomponentattributeconfiguration].[IsExportedAsFile]
		and [IsExportedAsFilePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10010
		and [IsManagedPLTable].AttributeValue = [solutioncomponentattributeconfiguration].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10010
		and [statecodePLTable].AttributeValue = [solutioncomponentattributeconfiguration].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10010
		and [statuscodePLTable].AttributeValue = [solutioncomponentattributeconfiguration].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredsolutioncomponentattributeconfiguration] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredsolutioncomponentattributeconfiguration] TO [CRMReaderRole]
    AS [dbo];

