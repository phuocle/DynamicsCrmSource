

--
-- report view for msdyn_tour
--
create view dbo.[Filteredmsdyn_tour] 
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
    [msdyn_displayname],
    [msdyn_labelsresource],
    [msdyn_path],
    [msdyn_tourdefinition],
    [msdyn_tourid],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
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
    [msdyn_tour].[ComponentIdUnique],
    [msdyn_tour].[ComponentState],
    ComponentStatePLTable.Value,
    [msdyn_tour].[CreatedBy],
    [msdyn_tour].[CreatedByName],
    [msdyn_tour].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_tour].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_tour].[CreatedOn],
    [msdyn_tour].[CreatedOnBehalfBy],
    [msdyn_tour].[CreatedOnBehalfByName],
    [msdyn_tour].[CreatedOnBehalfByYomiName],
    [msdyn_tour].[ImportSequenceNumber],
    [msdyn_tour].[IsCustomizable],
    [msdyn_tour].[IsManaged],
    IsManagedPLTable.Value,
    [msdyn_tour].[ModifiedBy],
    [msdyn_tour].[ModifiedByName],
    [msdyn_tour].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_tour].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_tour].[ModifiedOn],
    [msdyn_tour].[ModifiedOnBehalfBy],
    [msdyn_tour].[ModifiedOnBehalfByName],
    [msdyn_tour].[ModifiedOnBehalfByYomiName],
    coalesce(dbo.fn_GetLocalizedLabel([msdyn_tour].[msdyn_tourId], 'msdyn_displayname', 10039, us.UILanguageId), [msdyn_tour].[msdyn_displayname]),
    [msdyn_tour].[msdyn_labelsresource],
    [msdyn_tour].[msdyn_path],
    [msdyn_tour].[msdyn_tourdefinition],
    [msdyn_tour].[msdyn_tourId],
    [msdyn_tour].[OrganizationId],
    [msdyn_tour].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_tour].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_tour].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_tour].[OverwriteTime],
			us.TimeZoneCode),
        [msdyn_tour].[OverwriteTime],
    [msdyn_tour].[SolutionId],
    [msdyn_tour].[statecode],
    statecodePLTable.Value,
    [msdyn_tour].[statuscode],
    statuscodePLTable.Value,
    [msdyn_tour].[TimeZoneRuleVersionNumber],
    [msdyn_tour].[UTCConversionTimeZoneCode],
    [msdyn_tour].[VersionNumber]
from msdyn_tour
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10039
		and [ComponentStatePLTable].AttributeValue = [msdyn_tour].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10039
		and [IsManagedPLTable].AttributeValue = [msdyn_tour].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10039
		and [statecodePLTable].AttributeValue = [msdyn_tour].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10039
		and [statuscodePLTable].AttributeValue = [msdyn_tour].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10039) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [msdyn_tour].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_tour] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_tour] TO [CRMReaderRole]
    AS [dbo];

