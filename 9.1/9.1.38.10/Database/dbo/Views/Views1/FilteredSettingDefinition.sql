

--
-- report view for settingdefinition
--
create view dbo.[FilteredSettingDefinition] 
(
    [canbecreatedbycomponentowningpublisher],
    [canbecreatedbycomponentowningpublishername],
    [category],
    [categoryname],
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
    [datatype],
    [datatypename],
    [defaultvalue],
    [description],
    [displayname],
    [helpurl],
    [importsequencenumber],
    [iscustomizable],
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
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
    [scope],
    [scopename],
    [settingdefinitionid],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [type],
    [typename],
    [uniquename],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [SettingDefinition].[CanBeCreatedByComponentOwningPublisher],
    CanBeCreatedByComponentOwningPublisherPLTable.Value,
    [SettingDefinition].[Category],
    CategoryPLTable.Value,
    [SettingDefinition].[ComponentIdUnique],
    [SettingDefinition].[ComponentState],
    ComponentStatePLTable.Value,
    [SettingDefinition].[CreatedBy],
    [SettingDefinition].[CreatedByName],
    [SettingDefinition].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SettingDefinition].[CreatedOn],
			us.TimeZoneCode),
        [SettingDefinition].[CreatedOn],
    [SettingDefinition].[CreatedOnBehalfBy],
    [SettingDefinition].[CreatedOnBehalfByName],
    [SettingDefinition].[CreatedOnBehalfByYomiName],
    [SettingDefinition].[DataType],
    DataTypePLTable.Value,
    [SettingDefinition].[DefaultValue],
    coalesce(dbo.fn_GetLocalizedLabel([SettingDefinition].[SettingDefinitionId], 'description', 10033, us.UILanguageId), [SettingDefinition].[Description]),
    coalesce(dbo.fn_GetLocalizedLabel([SettingDefinition].[SettingDefinitionId], 'displayname', 10033, us.UILanguageId), [SettingDefinition].[DisplayName]),
    [SettingDefinition].[HelpUrl],
    [SettingDefinition].[ImportSequenceNumber],
    [SettingDefinition].[IsCustomizable],
    [SettingDefinition].[IsManaged],
    IsManagedPLTable.Value,
    [SettingDefinition].[ModifiedBy],
    [SettingDefinition].[ModifiedByName],
    [SettingDefinition].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SettingDefinition].[ModifiedOn],
			us.TimeZoneCode),
        [SettingDefinition].[ModifiedOn],
    [SettingDefinition].[ModifiedOnBehalfBy],
    [SettingDefinition].[ModifiedOnBehalfByName],
    [SettingDefinition].[ModifiedOnBehalfByYomiName],
    [SettingDefinition].[OrganizationId],
    [SettingDefinition].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SettingDefinition].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SettingDefinition].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SettingDefinition].[OverwriteTime],
			us.TimeZoneCode),
        [SettingDefinition].[OverwriteTime],
    [SettingDefinition].[Scope],
    ScopePLTable.Value,
    [SettingDefinition].[SettingDefinitionId],
    [SettingDefinition].[SolutionId],
    [SettingDefinition].[statecode],
    statecodePLTable.Value,
    [SettingDefinition].[statuscode],
    statuscodePLTable.Value,
    [SettingDefinition].[TimeZoneRuleVersionNumber],
    [SettingDefinition].[Type],
    TypePLTable.Value,
    [SettingDefinition].[UniqueName],
    [SettingDefinition].[UTCConversionTimeZoneCode],
    [SettingDefinition].[VersionNumber]
from SettingDefinition
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [CanBeCreatedByComponentOwningPublisherPLTable] on 
		([CanBeCreatedByComponentOwningPublisherPLTable].AttributeName = 'canbecreatedbycomponentowningpublisher'
		and [CanBeCreatedByComponentOwningPublisherPLTable].ObjectTypeCode = 10033
		and [CanBeCreatedByComponentOwningPublisherPLTable].AttributeValue = [SettingDefinition].[CanBeCreatedByComponentOwningPublisher]
		and [CanBeCreatedByComponentOwningPublisherPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CategoryPLTable] on 
		([CategoryPLTable].AttributeName = 'category'
		and [CategoryPLTable].ObjectTypeCode = 10033
		and [CategoryPLTable].AttributeValue = [SettingDefinition].[Category]
		and [CategoryPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10033
		and [ComponentStatePLTable].AttributeValue = [SettingDefinition].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DataTypePLTable] on 
		([DataTypePLTable].AttributeName = 'datatype'
		and [DataTypePLTable].ObjectTypeCode = 10033
		and [DataTypePLTable].AttributeValue = [SettingDefinition].[DataType]
		and [DataTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10033
		and [IsManagedPLTable].AttributeValue = [SettingDefinition].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ScopePLTable] on 
		([ScopePLTable].AttributeName = 'scope'
		and [ScopePLTable].ObjectTypeCode = 10033
		and [ScopePLTable].AttributeValue = [SettingDefinition].[Scope]
		and [ScopePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10033
		and [statecodePLTable].AttributeValue = [SettingDefinition].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10033
		and [statuscodePLTable].AttributeValue = [SettingDefinition].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TypePLTable] on 
		([TypePLTable].AttributeName = 'type'
		and [TypePLTable].ObjectTypeCode = 10033
		and [TypePLTable].AttributeValue = [SettingDefinition].[Type]
		and [TypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10033) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SettingDefinition].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSettingDefinition] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSettingDefinition] TO [CRMReaderRole]
    AS [dbo];

