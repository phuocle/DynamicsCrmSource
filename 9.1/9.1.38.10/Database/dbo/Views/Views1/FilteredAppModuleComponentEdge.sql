

--
-- report view for appmodulecomponentedge
--
create view dbo.[FilteredAppModuleComponentEdge] 
(
    [appmodulecomponentedgeid],
    [componentnodefrom],
    [componentnodefromname],
    [componentnodeto],
    [componentnodetoname],
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
    [name],
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
    [AppModuleComponentEdge].[AppModuleComponentEdgeId],
    [AppModuleComponentEdge].[ComponentNodeFrom],
    [AppModuleComponentEdge].[ComponentNodeFromName],
    [AppModuleComponentEdge].[ComponentNodeTo],
    [AppModuleComponentEdge].[ComponentNodeToName],
    [AppModuleComponentEdge].[CreatedBy],
    [AppModuleComponentEdge].[CreatedByName],
    [AppModuleComponentEdge].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModuleComponentEdge].[CreatedOn],
			us.TimeZoneCode),
        [AppModuleComponentEdge].[CreatedOn],
    [AppModuleComponentEdge].[CreatedOnBehalfBy],
    [AppModuleComponentEdge].[CreatedOnBehalfByName],
    [AppModuleComponentEdge].[CreatedOnBehalfByYomiName],
    [AppModuleComponentEdge].[ImportSequenceNumber],
    [AppModuleComponentEdge].[ModifiedBy],
    [AppModuleComponentEdge].[ModifiedByName],
    [AppModuleComponentEdge].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModuleComponentEdge].[ModifiedOn],
			us.TimeZoneCode),
        [AppModuleComponentEdge].[ModifiedOn],
    [AppModuleComponentEdge].[ModifiedOnBehalfBy],
    [AppModuleComponentEdge].[ModifiedOnBehalfByName],
    [AppModuleComponentEdge].[ModifiedOnBehalfByYomiName],
    [AppModuleComponentEdge].[Name],
    [AppModuleComponentEdge].[OrganizationId],
    [AppModuleComponentEdge].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModuleComponentEdge].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [AppModuleComponentEdge].[OverriddenCreatedOn],
    [AppModuleComponentEdge].[statecode],
    statecodePLTable.Value,
    [AppModuleComponentEdge].[statuscode],
    statuscodePLTable.Value,
    [AppModuleComponentEdge].[TimeZoneRuleVersionNumber],
    [AppModuleComponentEdge].[UTCConversionTimeZoneCode],
    [AppModuleComponentEdge].[VersionNumber]
from AppModuleComponentEdge
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10030
		and [statecodePLTable].AttributeValue = [AppModuleComponentEdge].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10030
		and [statuscodePLTable].AttributeValue = [AppModuleComponentEdge].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10030) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [AppModuleComponentEdge].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppModuleComponentEdge] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppModuleComponentEdge] TO [CRMReaderRole]
    AS [dbo];

