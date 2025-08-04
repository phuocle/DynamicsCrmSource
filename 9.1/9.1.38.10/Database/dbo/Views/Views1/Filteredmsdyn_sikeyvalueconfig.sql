

--
-- report view for msdyn_sikeyvalueconfig
--
create view dbo.[Filteredmsdyn_sikeyvalueconfig] 
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
    [msdyn_configkey],
    [msdyn_configvalue],
    [msdyn_sikeyvalueconfigid],
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
    [msdyn_sikeyvalueconfig].[CreatedBy],
    [msdyn_sikeyvalueconfig].[CreatedByName],
    [msdyn_sikeyvalueconfig].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_sikeyvalueconfig].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_sikeyvalueconfig].[CreatedOn],
    [msdyn_sikeyvalueconfig].[CreatedOnBehalfBy],
    [msdyn_sikeyvalueconfig].[CreatedOnBehalfByName],
    [msdyn_sikeyvalueconfig].[CreatedOnBehalfByYomiName],
    [msdyn_sikeyvalueconfig].[ImportSequenceNumber],
    [msdyn_sikeyvalueconfig].[ModifiedBy],
    [msdyn_sikeyvalueconfig].[ModifiedByName],
    [msdyn_sikeyvalueconfig].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_sikeyvalueconfig].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_sikeyvalueconfig].[ModifiedOn],
    [msdyn_sikeyvalueconfig].[ModifiedOnBehalfBy],
    [msdyn_sikeyvalueconfig].[ModifiedOnBehalfByName],
    [msdyn_sikeyvalueconfig].[ModifiedOnBehalfByYomiName],
    [msdyn_sikeyvalueconfig].[msdyn_ConfigKey],
    [msdyn_sikeyvalueconfig].[msdyn_ConfigValue],
    [msdyn_sikeyvalueconfig].[msdyn_sikeyvalueconfigId],
    [msdyn_sikeyvalueconfig].[OrganizationId],
    [msdyn_sikeyvalueconfig].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_sikeyvalueconfig].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_sikeyvalueconfig].[OverriddenCreatedOn],
    [msdyn_sikeyvalueconfig].[statecode],
    statecodePLTable.Value,
    [msdyn_sikeyvalueconfig].[statuscode],
    statuscodePLTable.Value,
    [msdyn_sikeyvalueconfig].[TimeZoneRuleVersionNumber],
    [msdyn_sikeyvalueconfig].[UTCConversionTimeZoneCode],
    [msdyn_sikeyvalueconfig].[VersionNumber]
from msdyn_sikeyvalueconfig
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10093
		and [statecodePLTable].AttributeValue = [msdyn_sikeyvalueconfig].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10093
		and [statuscodePLTable].AttributeValue = [msdyn_sikeyvalueconfig].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10093) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [msdyn_sikeyvalueconfig].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_sikeyvalueconfig] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_sikeyvalueconfig] TO [CRMReaderRole]
    AS [dbo];

