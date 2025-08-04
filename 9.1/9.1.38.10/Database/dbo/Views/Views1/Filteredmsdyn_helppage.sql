

--
-- report view for msdyn_helppage
--
create view dbo.[Filteredmsdyn_helppage] 
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
    [msdyn_content],
    [msdyn_contenttype],
    [msdyn_displayname],
    [msdyn_helppageid],
    [msdyn_locale],
    [msdyn_path],
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
    [msdyn_helppage].[ComponentIdUnique],
    [msdyn_helppage].[ComponentState],
    ComponentStatePLTable.Value,
    [msdyn_helppage].[CreatedBy],
    [msdyn_helppage].[CreatedByName],
    [msdyn_helppage].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_helppage].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_helppage].[CreatedOn],
    [msdyn_helppage].[CreatedOnBehalfBy],
    [msdyn_helppage].[CreatedOnBehalfByName],
    [msdyn_helppage].[CreatedOnBehalfByYomiName],
    [msdyn_helppage].[ImportSequenceNumber],
    [msdyn_helppage].[IsCustomizable],
    [msdyn_helppage].[IsManaged],
    IsManagedPLTable.Value,
    [msdyn_helppage].[ModifiedBy],
    [msdyn_helppage].[ModifiedByName],
    [msdyn_helppage].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_helppage].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_helppage].[ModifiedOn],
    [msdyn_helppage].[ModifiedOnBehalfBy],
    [msdyn_helppage].[ModifiedOnBehalfByName],
    [msdyn_helppage].[ModifiedOnBehalfByYomiName],
    [msdyn_helppage].[msdyn_content],
    [msdyn_helppage].[msdyn_contenttype],
    [msdyn_helppage].[msdyn_displayname],
    [msdyn_helppage].[msdyn_helppageId],
    [msdyn_helppage].[msdyn_locale],
    [msdyn_helppage].[msdyn_path],
    [msdyn_helppage].[OrganizationId],
    [msdyn_helppage].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_helppage].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_helppage].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_helppage].[OverwriteTime],
			us.TimeZoneCode),
        [msdyn_helppage].[OverwriteTime],
    [msdyn_helppage].[SolutionId],
    [msdyn_helppage].[statecode],
    statecodePLTable.Value,
    [msdyn_helppage].[statuscode],
    statuscodePLTable.Value,
    [msdyn_helppage].[TimeZoneRuleVersionNumber],
    [msdyn_helppage].[UTCConversionTimeZoneCode],
    [msdyn_helppage].[VersionNumber]
from msdyn_helppage
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10038
		and [ComponentStatePLTable].AttributeValue = [msdyn_helppage].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10038
		and [IsManagedPLTable].AttributeValue = [msdyn_helppage].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10038
		and [statecodePLTable].AttributeValue = [msdyn_helppage].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10038
		and [statuscodePLTable].AttributeValue = [msdyn_helppage].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10038) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [msdyn_helppage].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_helppage] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_helppage] TO [CRMReaderRole]
    AS [dbo];

