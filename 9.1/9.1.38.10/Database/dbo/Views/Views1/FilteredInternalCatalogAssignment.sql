

--
-- report view for internalcatalogassignment
--
create view dbo.[FilteredInternalCatalogAssignment] 
(
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
    [internalcatalogassignmentid],
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
    [InternalCatalogAssignment].[CatalogId],
    [InternalCatalogAssignment].[CatalogIdName],
    [InternalCatalogAssignment].[ComponentIdUnique],
    [InternalCatalogAssignment].[ComponentState],
    ComponentStatePLTable.Value,
    [InternalCatalogAssignment].[CreatedBy],
    [InternalCatalogAssignment].[CreatedByName],
    [InternalCatalogAssignment].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InternalCatalogAssignment].[CreatedOn],
			us.TimeZoneCode),
        [InternalCatalogAssignment].[CreatedOn],
    [InternalCatalogAssignment].[CreatedOnBehalfBy],
    [InternalCatalogAssignment].[CreatedOnBehalfByName],
    [InternalCatalogAssignment].[CreatedOnBehalfByYomiName],
    [InternalCatalogAssignment].[ImportSequenceNumber],
    [InternalCatalogAssignment].[InternalCatalogAssignmentId],
    [InternalCatalogAssignment].[IsCustomizable],
    [InternalCatalogAssignment].[IsManaged],
    IsManagedPLTable.Value,
    [InternalCatalogAssignment].[ModifiedBy],
    [InternalCatalogAssignment].[ModifiedByName],
    [InternalCatalogAssignment].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InternalCatalogAssignment].[ModifiedOn],
			us.TimeZoneCode),
        [InternalCatalogAssignment].[ModifiedOn],
    [InternalCatalogAssignment].[ModifiedOnBehalfBy],
    [InternalCatalogAssignment].[ModifiedOnBehalfByName],
    [InternalCatalogAssignment].[ModifiedOnBehalfByYomiName],
    [InternalCatalogAssignment].[Name],
    [InternalCatalogAssignment].[Object],
    [InternalCatalogAssignment].[ObjectIdType],
    [InternalCatalogAssignment].[ObjectName],
    [InternalCatalogAssignment].[ObjectYomiName],
    [InternalCatalogAssignment].[OrganizationId],
    [InternalCatalogAssignment].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InternalCatalogAssignment].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [InternalCatalogAssignment].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InternalCatalogAssignment].[OverwriteTime],
			us.TimeZoneCode),
        [InternalCatalogAssignment].[OverwriteTime],
    [InternalCatalogAssignment].[SolutionId],
    [InternalCatalogAssignment].[statecode],
    statecodePLTable.Value,
    [InternalCatalogAssignment].[statuscode],
    statuscodePLTable.Value,
    [InternalCatalogAssignment].[TimeZoneRuleVersionNumber],
    [InternalCatalogAssignment].[UTCConversionTimeZoneCode],
    [InternalCatalogAssignment].[VersionNumber]
from InternalCatalogAssignment
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10058
		and [ComponentStatePLTable].AttributeValue = [InternalCatalogAssignment].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10058
		and [IsManagedPLTable].AttributeValue = [InternalCatalogAssignment].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10058
		and [statecodePLTable].AttributeValue = [InternalCatalogAssignment].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10058
		and [statuscodePLTable].AttributeValue = [InternalCatalogAssignment].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10058) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [InternalCatalogAssignment].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredInternalCatalogAssignment] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredInternalCatalogAssignment] TO [CRMReaderRole]
    AS [dbo];

