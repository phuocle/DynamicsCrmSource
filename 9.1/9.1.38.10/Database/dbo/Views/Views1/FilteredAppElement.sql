

--
-- report view for appelement
--
create view dbo.[FilteredAppElement] 
(
    [appelementid],
    [canvasappid],
    [canvasappidname],
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
    [name],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
    [parentappmoduleid],
    [parentappmoduleidname],
    [publishconfiguration],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [uniquename],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [AppElement].[AppElementId],
    [AppElement].[CanvasAppId],
    [AppElement].[CanvasAppIdName],
    [AppElement].[ComponentIdUnique],
    [AppElement].[ComponentState],
    ComponentStatePLTable.Value,
    [AppElement].[CreatedBy],
    [AppElement].[CreatedByName],
    [AppElement].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppElement].[CreatedOn],
			us.TimeZoneCode),
        [AppElement].[CreatedOn],
    [AppElement].[CreatedOnBehalfBy],
    [AppElement].[CreatedOnBehalfByName],
    [AppElement].[CreatedOnBehalfByYomiName],
    [AppElement].[ImportSequenceNumber],
    [AppElement].[IsCustomizable],
    [AppElement].[IsManaged],
    IsManagedPLTable.Value,
    [AppElement].[ModifiedBy],
    [AppElement].[ModifiedByName],
    [AppElement].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppElement].[ModifiedOn],
			us.TimeZoneCode),
        [AppElement].[ModifiedOn],
    [AppElement].[ModifiedOnBehalfBy],
    [AppElement].[ModifiedOnBehalfByName],
    [AppElement].[ModifiedOnBehalfByYomiName],
    [AppElement].[Name],
    [AppElement].[OrganizationId],
    [AppElement].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppElement].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [AppElement].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppElement].[OverwriteTime],
			us.TimeZoneCode),
        [AppElement].[OverwriteTime],
    [AppElement].[ParentAppModuleId],
    [AppElement].[ParentAppModuleIdName],
    [AppElement].[PublishConfiguration],
    [AppElement].[SolutionId],
    [AppElement].[statecode],
    statecodePLTable.Value,
    [AppElement].[statuscode],
    statuscodePLTable.Value,
    [AppElement].[TimeZoneRuleVersionNumber],
    [AppElement].[UniqueName],
    [AppElement].[UTCConversionTimeZoneCode],
    [AppElement].[VersionNumber]
from AppElement
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10029
		and [ComponentStatePLTable].AttributeValue = [AppElement].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10029
		and [IsManagedPLTable].AttributeValue = [AppElement].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10029
		and [statecodePLTable].AttributeValue = [AppElement].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10029
		and [statuscodePLTable].AttributeValue = [AppElement].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9006) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [AppElement].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppElement] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppElement] TO [CRMReaderRole]
    AS [dbo];

