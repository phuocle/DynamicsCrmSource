

--
-- report view for msdyn_federatedarticleincident
--
create view dbo.[Filteredmsdyn_federatedarticleincident] 
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
    [msdyn_federatedarticleid],
    [msdyn_federatedarticleidname],
    [msdyn_federatedarticleincidentid],
    [msdyn_incidentid],
    [msdyn_incidentidname],
    [msdyn_name],
    [msdyn_searchproviderarticleid],
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
    [msdyn_federatedarticleincident].[CreatedBy],
    [msdyn_federatedarticleincident].[CreatedByName],
    [msdyn_federatedarticleincident].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_federatedarticleincident].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_federatedarticleincident].[CreatedOn],
    [msdyn_federatedarticleincident].[CreatedOnBehalfBy],
    [msdyn_federatedarticleincident].[CreatedOnBehalfByName],
    [msdyn_federatedarticleincident].[CreatedOnBehalfByYomiName],
    [msdyn_federatedarticleincident].[ImportSequenceNumber],
    [msdyn_federatedarticleincident].[ModifiedBy],
    [msdyn_federatedarticleincident].[ModifiedByName],
    [msdyn_federatedarticleincident].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_federatedarticleincident].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_federatedarticleincident].[ModifiedOn],
    [msdyn_federatedarticleincident].[ModifiedOnBehalfBy],
    [msdyn_federatedarticleincident].[ModifiedOnBehalfByName],
    [msdyn_federatedarticleincident].[ModifiedOnBehalfByYomiName],
    [msdyn_federatedarticleincident].[msdyn_federatedarticleid],
    [msdyn_federatedarticleincident].[msdyn_federatedarticleidName],
    [msdyn_federatedarticleincident].[msdyn_federatedarticleincidentId],
    [msdyn_federatedarticleincident].[msdyn_incidentid],
    [msdyn_federatedarticleincident].[msdyn_incidentidName],
    [msdyn_federatedarticleincident].[msdyn_name],
    [msdyn_federatedarticleincident].[msdyn_searchproviderarticleid],
    [msdyn_federatedarticleincident].[OrganizationId],
    [msdyn_federatedarticleincident].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_federatedarticleincident].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_federatedarticleincident].[OverriddenCreatedOn],
    [msdyn_federatedarticleincident].[statecode],
    statecodePLTable.Value,
    [msdyn_federatedarticleincident].[statuscode],
    statuscodePLTable.Value,
    [msdyn_federatedarticleincident].[TimeZoneRuleVersionNumber],
    [msdyn_federatedarticleincident].[UTCConversionTimeZoneCode],
    [msdyn_federatedarticleincident].[VersionNumber]
from msdyn_federatedarticleincident
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10050
		and [statecodePLTable].AttributeValue = [msdyn_federatedarticleincident].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10050
		and [statuscodePLTable].AttributeValue = [msdyn_federatedarticleincident].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10050) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [msdyn_federatedarticleincident].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_federatedarticleincident] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_federatedarticleincident] TO [CRMReaderRole]
    AS [dbo];

