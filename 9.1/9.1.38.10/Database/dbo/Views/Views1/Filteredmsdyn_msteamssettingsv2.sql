

--
-- report view for msdyn_msteamssettingsv2
--
create view dbo.[Filteredmsdyn_msteamssettingsv2] 
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
    [msdyn_msteamssettingsname],
    [msdyn_msteamssettingsv2id],
    [msdyn_tabserviceurl],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [owningbusinessunit],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [msdyn_msteamssettingsv2].[CreatedBy],
    [msdyn_msteamssettingsv2].[CreatedByName],
    [msdyn_msteamssettingsv2].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_msteamssettingsv2].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_msteamssettingsv2].[CreatedOn],
    [msdyn_msteamssettingsv2].[CreatedOnBehalfBy],
    [msdyn_msteamssettingsv2].[CreatedOnBehalfByName],
    [msdyn_msteamssettingsv2].[CreatedOnBehalfByYomiName],
    [msdyn_msteamssettingsv2].[ImportSequenceNumber],
    [msdyn_msteamssettingsv2].[ModifiedBy],
    [msdyn_msteamssettingsv2].[ModifiedByName],
    [msdyn_msteamssettingsv2].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_msteamssettingsv2].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_msteamssettingsv2].[ModifiedOn],
    [msdyn_msteamssettingsv2].[ModifiedOnBehalfBy],
    [msdyn_msteamssettingsv2].[ModifiedOnBehalfByName],
    [msdyn_msteamssettingsv2].[ModifiedOnBehalfByYomiName],
    [msdyn_msteamssettingsv2].[msdyn_MSTeamsSettingsName],
    [msdyn_msteamssettingsv2].[msdyn_msteamssettingsv2Id],
    [msdyn_msteamssettingsv2].[msdyn_TabServiceUrl],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_msteamssettingsv2].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_msteamssettingsv2].[OverriddenCreatedOn],
    [msdyn_msteamssettingsv2].[OwningBusinessUnit],
    [msdyn_msteamssettingsv2].[statecode],
    statecodePLTable.Value,
    [msdyn_msteamssettingsv2].[statuscode],
    statuscodePLTable.Value,
    [msdyn_msteamssettingsv2].[TimeZoneRuleVersionNumber],
    [msdyn_msteamssettingsv2].[UTCConversionTimeZoneCode],
    [msdyn_msteamssettingsv2].[VersionNumber]
from msdyn_msteamssettingsv2
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10110
		and [statecodePLTable].AttributeValue = [msdyn_msteamssettingsv2].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10110
		and [statuscodePLTable].AttributeValue = [msdyn_msteamssettingsv2].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_msteamssettingsv2] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_msteamssettingsv2] TO [CRMReaderRole]
    AS [dbo];

