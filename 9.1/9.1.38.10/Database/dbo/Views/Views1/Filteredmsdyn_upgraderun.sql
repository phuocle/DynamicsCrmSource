

--
-- report view for msdyn_upgraderun
--
create view dbo.[Filteredmsdyn_upgraderun] 
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
    [msdyn_error],
    [msdyn_finished],
    [msdyn_finishedutc],
    [msdyn_package],
    [msdyn_solution],
    [msdyn_startingversion],
    [msdyn_status],
    [msdyn_statusname],
    [msdyn_summary],
    [msdyn_targetversion],
    [msdyn_upgraderunid],
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
    [msdyn_upgraderun].[CreatedBy],
    [msdyn_upgraderun].[CreatedByName],
    [msdyn_upgraderun].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_upgraderun].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_upgraderun].[CreatedOn],
    [msdyn_upgraderun].[CreatedOnBehalfBy],
    [msdyn_upgraderun].[CreatedOnBehalfByName],
    [msdyn_upgraderun].[CreatedOnBehalfByYomiName],
    [msdyn_upgraderun].[ImportSequenceNumber],
    [msdyn_upgraderun].[ModifiedBy],
    [msdyn_upgraderun].[ModifiedByName],
    [msdyn_upgraderun].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_upgraderun].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_upgraderun].[ModifiedOn],
    [msdyn_upgraderun].[ModifiedOnBehalfBy],
    [msdyn_upgraderun].[ModifiedOnBehalfByName],
    [msdyn_upgraderun].[ModifiedOnBehalfByYomiName],
    [msdyn_upgraderun].[msdyn_Error],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_upgraderun].[msdyn_FinishedDate],
			us.TimeZoneCode),
        [msdyn_upgraderun].[msdyn_FinishedDate],
    [msdyn_upgraderun].[msdyn_Package],
    [msdyn_upgraderun].[msdyn_Solution],
    [msdyn_upgraderun].[msdyn_StartingVersion],
    [msdyn_upgraderun].[msdyn_Status],
    msdyn_StatusPLTable.Value,
    [msdyn_upgraderun].[msdyn_Summary],
    [msdyn_upgraderun].[msdyn_TargetVersion],
    [msdyn_upgraderun].[msdyn_upgraderunId],
    [msdyn_upgraderun].[OrganizationId],
    [msdyn_upgraderun].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_upgraderun].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_upgraderun].[OverriddenCreatedOn],
    [msdyn_upgraderun].[statecode],
    statecodePLTable.Value,
    [msdyn_upgraderun].[statuscode],
    statuscodePLTable.Value,
    [msdyn_upgraderun].[TimeZoneRuleVersionNumber],
    [msdyn_upgraderun].[UTCConversionTimeZoneCode],
    [msdyn_upgraderun].[VersionNumber]
from msdyn_upgraderun
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_StatusPLTable] on 
		([msdyn_StatusPLTable].AttributeName = 'msdyn_status'
		and [msdyn_StatusPLTable].ObjectTypeCode = 10077
		and [msdyn_StatusPLTable].AttributeValue = [msdyn_upgraderun].[msdyn_Status]
		and [msdyn_StatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10077
		and [statecodePLTable].AttributeValue = [msdyn_upgraderun].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10077
		and [statuscodePLTable].AttributeValue = [msdyn_upgraderun].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10077) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [msdyn_upgraderun].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_upgraderun] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_upgraderun] TO [CRMReaderRole]
    AS [dbo];

