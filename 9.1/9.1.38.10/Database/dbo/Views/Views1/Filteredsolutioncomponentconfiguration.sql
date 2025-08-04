

--
-- report view for solutioncomponentconfiguration
--
create view dbo.[Filteredsolutioncomponentconfiguration] 
(
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
    [entityid],
    [entityidname],
    [fileformat],
    [fileformatname],
    [filescope],
    [filescopename],
    [importsequencenumber],
    [iscustomizable],
    [isdisplayable],
    [isdisplayablename],
    [ismanaged],
    [ismanagedname],
    [issoftdeleteenabled],
    [issoftdeleteenabledname],
    [keepactivecustomizationafterconversion],
    [keepactivecustomizationafterconversionname],
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
    [solutioncomponentconfigurationid],
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
    [solutioncomponentconfiguration].[ComponentIdUnique],
    [solutioncomponentconfiguration].[ComponentState],
    ComponentStatePLTable.Value,
    [solutioncomponentconfiguration].[CreatedBy],
    [solutioncomponentconfiguration].[CreatedByName],
    [solutioncomponentconfiguration].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([solutioncomponentconfiguration].[CreatedOn],
			us.TimeZoneCode),
        [solutioncomponentconfiguration].[CreatedOn],
    [solutioncomponentconfiguration].[CreatedOnBehalfBy],
    [solutioncomponentconfiguration].[CreatedOnBehalfByName],
    [solutioncomponentconfiguration].[CreatedOnBehalfByYomiName],
    [solutioncomponentconfiguration].[EntityId],
    [solutioncomponentconfiguration].[EntityIdName],
    [solutioncomponentconfiguration].[FileFormat],
    FileFormatPLTable.Value,
    [solutioncomponentconfiguration].[FileScope],
    FileScopePLTable.Value,
    [solutioncomponentconfiguration].[ImportSequenceNumber],
    [solutioncomponentconfiguration].[IsCustomizable],
    [solutioncomponentconfiguration].[isdisplayable],
    isdisplayablePLTable.Value,
    [solutioncomponentconfiguration].[IsManaged],
    IsManagedPLTable.Value,
    [solutioncomponentconfiguration].[IsSoftDeleteEnabled],
    IsSoftDeleteEnabledPLTable.Value,
    [solutioncomponentconfiguration].[KeepActiveCustomizationAfterConversion],
    KeepActiveCustomizationAfterConversionPLTable.Value,
    [solutioncomponentconfiguration].[ModifiedBy],
    [solutioncomponentconfiguration].[ModifiedByName],
    [solutioncomponentconfiguration].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([solutioncomponentconfiguration].[ModifiedOn],
			us.TimeZoneCode),
        [solutioncomponentconfiguration].[ModifiedOn],
    [solutioncomponentconfiguration].[ModifiedOnBehalfBy],
    [solutioncomponentconfiguration].[ModifiedOnBehalfByName],
    [solutioncomponentconfiguration].[ModifiedOnBehalfByYomiName],
    [solutioncomponentconfiguration].[name],
    [solutioncomponentconfiguration].[OrganizationId],
    [solutioncomponentconfiguration].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([solutioncomponentconfiguration].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [solutioncomponentconfiguration].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([solutioncomponentconfiguration].[OverwriteTime],
			us.TimeZoneCode),
        [solutioncomponentconfiguration].[OverwriteTime],
    [solutioncomponentconfiguration].[solutioncomponentconfigurationId],
    [solutioncomponentconfiguration].[SolutionId],
    [solutioncomponentconfiguration].[statecode],
    statecodePLTable.Value,
    [solutioncomponentconfiguration].[statuscode],
    statuscodePLTable.Value,
    [solutioncomponentconfiguration].[TimeZoneRuleVersionNumber],
    [solutioncomponentconfiguration].[UTCConversionTimeZoneCode],
    [solutioncomponentconfiguration].[VersionNumber]
from solutioncomponentconfiguration
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10011
		and [ComponentStatePLTable].AttributeValue = [solutioncomponentconfiguration].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FileFormatPLTable] on 
		([FileFormatPLTable].AttributeName = 'fileformat'
		and [FileFormatPLTable].ObjectTypeCode = 10011
		and [FileFormatPLTable].AttributeValue = [solutioncomponentconfiguration].[FileFormat]
		and [FileFormatPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FileScopePLTable] on 
		([FileScopePLTable].AttributeName = 'filescope'
		and [FileScopePLTable].ObjectTypeCode = 10011
		and [FileScopePLTable].AttributeValue = [solutioncomponentconfiguration].[FileScope]
		and [FileScopePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [isdisplayablePLTable] on 
		([isdisplayablePLTable].AttributeName = 'isdisplayable'
		and [isdisplayablePLTable].ObjectTypeCode = 10011
		and [isdisplayablePLTable].AttributeValue = [solutioncomponentconfiguration].[isdisplayable]
		and [isdisplayablePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10011
		and [IsManagedPLTable].AttributeValue = [solutioncomponentconfiguration].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsSoftDeleteEnabledPLTable] on 
		([IsSoftDeleteEnabledPLTable].AttributeName = 'issoftdeleteenabled'
		and [IsSoftDeleteEnabledPLTable].ObjectTypeCode = 10011
		and [IsSoftDeleteEnabledPLTable].AttributeValue = [solutioncomponentconfiguration].[IsSoftDeleteEnabled]
		and [IsSoftDeleteEnabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [KeepActiveCustomizationAfterConversionPLTable] on 
		([KeepActiveCustomizationAfterConversionPLTable].AttributeName = 'keepactivecustomizationafterconversion'
		and [KeepActiveCustomizationAfterConversionPLTable].ObjectTypeCode = 10011
		and [KeepActiveCustomizationAfterConversionPLTable].AttributeValue = [solutioncomponentconfiguration].[KeepActiveCustomizationAfterConversion]
		and [KeepActiveCustomizationAfterConversionPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10011
		and [statecodePLTable].AttributeValue = [solutioncomponentconfiguration].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10011
		and [statuscodePLTable].AttributeValue = [solutioncomponentconfiguration].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredsolutioncomponentconfiguration] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredsolutioncomponentconfiguration] TO [CRMReaderRole]
    AS [dbo];

