

--
-- report view for msdyn_collabgraphresource
--
create view dbo.[Filteredmsdyn_CollabGraphResource] 
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
    [msdyn_collabgraphresourceid],
    [msdyn_graphresourceid],
    [msdyn_graphresourcename],
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
    [msdyn_CollabGraphResource].[CreatedBy],
    [msdyn_CollabGraphResource].[CreatedByName],
    [msdyn_CollabGraphResource].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_CollabGraphResource].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_CollabGraphResource].[CreatedOn],
    [msdyn_CollabGraphResource].[CreatedOnBehalfBy],
    [msdyn_CollabGraphResource].[CreatedOnBehalfByName],
    [msdyn_CollabGraphResource].[CreatedOnBehalfByYomiName],
    [msdyn_CollabGraphResource].[ImportSequenceNumber],
    [msdyn_CollabGraphResource].[ModifiedBy],
    [msdyn_CollabGraphResource].[ModifiedByName],
    [msdyn_CollabGraphResource].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_CollabGraphResource].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_CollabGraphResource].[ModifiedOn],
    [msdyn_CollabGraphResource].[ModifiedOnBehalfBy],
    [msdyn_CollabGraphResource].[ModifiedOnBehalfByName],
    [msdyn_CollabGraphResource].[ModifiedOnBehalfByYomiName],
    [msdyn_CollabGraphResource].[msdyn_CollabGraphResourceId],
    [msdyn_CollabGraphResource].[msdyn_GraphResourceId],
    [msdyn_CollabGraphResource].[msdyn_GraphResourceName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_CollabGraphResource].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_CollabGraphResource].[OverriddenCreatedOn],
    [msdyn_CollabGraphResource].[statecode],
    statecodePLTable.Value,
    [msdyn_CollabGraphResource].[statuscode],
    statuscodePLTable.Value,
    [msdyn_CollabGraphResource].[TimeZoneRuleVersionNumber],
    [msdyn_CollabGraphResource].[UTCConversionTimeZoneCode],
    [msdyn_CollabGraphResource].[VersionNumber]
from msdyn_CollabGraphResource
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10108
		and [statecodePLTable].AttributeValue = [msdyn_CollabGraphResource].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10108
		and [statuscodePLTable].AttributeValue = [msdyn_CollabGraphResource].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_CollabGraphResource] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_CollabGraphResource] TO [CRMReaderRole]
    AS [dbo];

