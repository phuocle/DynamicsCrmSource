

--
-- report view for msdyn_databaseversion
--
create view dbo.[Filteredmsdyn_databaseversion] 
(
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [msdyn_databaseversionid],
    [msdyn_dbversion],
    [msdyn_solutionname],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [msdyn_databaseversion].[CreatedBy],
    [msdyn_databaseversion].[CreatedByName],
    [msdyn_databaseversion].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_databaseversion].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_databaseversion].[CreatedOn],
    [msdyn_databaseversion].[CreatedOnBehalfBy],
    [msdyn_databaseversion].[CreatedOnBehalfByName],
    [msdyn_databaseversion].[CreatedOnBehalfByYomiName],
    [msdyn_databaseversion].[ImportSequenceNumber],
    [msdyn_databaseversion].[ModifiedBy],
    [msdyn_databaseversion].[ModifiedByName],
    [msdyn_databaseversion].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_databaseversion].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_databaseversion].[ModifiedOn],
    [msdyn_databaseversion].[ModifiedOnBehalfBy],
    [msdyn_databaseversion].[ModifiedOnBehalfByName],
    [msdyn_databaseversion].[ModifiedOnBehalfByYomiName],
    [msdyn_databaseversion].[msdyn_databaseversionId],
    [msdyn_databaseversion].[msdyn_dbversion],
    [msdyn_databaseversion].[msdyn_solutionname],
    [msdyn_databaseversion].[OrganizationId],
    [msdyn_databaseversion].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_databaseversion].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_databaseversion].[OverriddenCreatedOn],
    [msdyn_databaseversion].[statecode],
    statecodePLTable.Value,
    [msdyn_databaseversion].[statuscode],
    statuscodePLTable.Value,
    [msdyn_databaseversion].[TimeZoneRuleVersionNumber],
    [msdyn_databaseversion].[UTCConversionTimeZoneCode],
    [msdyn_databaseversion].[VersionNumber]
from msdyn_databaseversion
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10076
		and [statecodePLTable].AttributeValue = [msdyn_databaseversion].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10076
		and [statuscodePLTable].AttributeValue = [msdyn_databaseversion].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10076) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [msdyn_databaseversion].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_databaseversion] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_databaseversion] TO [CRMReaderRole]
    AS [dbo];

