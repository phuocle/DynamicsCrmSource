

--
-- report view for catalogassignment
--
create view dbo.[FilteredCatalogAssignment] 
(
    [catalogassignmentid],
    [catalogid],
    [catalogidname],
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
    [object],
    [objectidtype],
    [objectname],
    [objectyominame],
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
    [CatalogAssignment].[CatalogAssignmentId],
    [CatalogAssignment].[CatalogId],
    [CatalogAssignment].[CatalogIdName],
    [CatalogAssignment].[ComponentIdUnique],
    [CatalogAssignment].[ComponentState],
    ComponentStatePLTable.Value,
    [CatalogAssignment].[CreatedBy],
    [CatalogAssignment].[CreatedByName],
    [CatalogAssignment].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CatalogAssignment].[CreatedOn],
			us.TimeZoneCode),
        [CatalogAssignment].[CreatedOn],
    [CatalogAssignment].[CreatedOnBehalfBy],
    [CatalogAssignment].[CreatedOnBehalfByName],
    [CatalogAssignment].[CreatedOnBehalfByYomiName],
    [CatalogAssignment].[ImportSequenceNumber],
    [CatalogAssignment].[IsCustomizable],
    [CatalogAssignment].[IsManaged],
    IsManagedPLTable.Value,
    [CatalogAssignment].[ModifiedBy],
    [CatalogAssignment].[ModifiedByName],
    [CatalogAssignment].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CatalogAssignment].[ModifiedOn],
			us.TimeZoneCode),
        [CatalogAssignment].[ModifiedOn],
    [CatalogAssignment].[ModifiedOnBehalfBy],
    [CatalogAssignment].[ModifiedOnBehalfByName],
    [CatalogAssignment].[ModifiedOnBehalfByYomiName],
    [CatalogAssignment].[Name],
    [CatalogAssignment].[Object],
    [CatalogAssignment].[ObjectIdType],
    [CatalogAssignment].[ObjectName],
    [CatalogAssignment].[ObjectYomiName],
    [CatalogAssignment].[OrganizationId],
    [CatalogAssignment].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CatalogAssignment].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CatalogAssignment].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CatalogAssignment].[OverwriteTime],
			us.TimeZoneCode),
        [CatalogAssignment].[OverwriteTime],
    [CatalogAssignment].[SolutionId],
    [CatalogAssignment].[statecode],
    statecodePLTable.Value,
    [CatalogAssignment].[statuscode],
    statuscodePLTable.Value,
    [CatalogAssignment].[TimeZoneRuleVersionNumber],
    [CatalogAssignment].[UTCConversionTimeZoneCode],
    [CatalogAssignment].[VersionNumber]
from CatalogAssignment
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10057
		and [ComponentStatePLTable].AttributeValue = [CatalogAssignment].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10057
		and [IsManagedPLTable].AttributeValue = [CatalogAssignment].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10057
		and [statecodePLTable].AttributeValue = [CatalogAssignment].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10057
		and [statuscodePLTable].AttributeValue = [CatalogAssignment].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10057) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [CatalogAssignment].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCatalogAssignment] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCatalogAssignment] TO [CRMReaderRole]
    AS [dbo];

