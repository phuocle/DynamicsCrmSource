

--
-- report view for msdyn_upgradeversion
--
create view dbo.[Filteredmsdyn_upgradeversion] 
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
    [msdyn_finished],
    [msdyn_finishedutc],
    [msdyn_startingversion],
    [msdyn_status],
    [msdyn_statusname],
    [msdyn_summary],
    [msdyn_targetversion],
    [msdyn_upgraderun],
    [msdyn_upgraderunname],
    [msdyn_upgradeversionid],
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
    [msdyn_upgradeversion].[CreatedBy],
    [msdyn_upgradeversion].[CreatedByName],
    [msdyn_upgradeversion].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_upgradeversion].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_upgradeversion].[CreatedOn],
    [msdyn_upgradeversion].[CreatedOnBehalfBy],
    [msdyn_upgradeversion].[CreatedOnBehalfByName],
    [msdyn_upgradeversion].[CreatedOnBehalfByYomiName],
    [msdyn_upgradeversion].[ImportSequenceNumber],
    [msdyn_upgradeversion].[ModifiedBy],
    [msdyn_upgradeversion].[ModifiedByName],
    [msdyn_upgradeversion].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_upgradeversion].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_upgradeversion].[ModifiedOn],
    [msdyn_upgradeversion].[ModifiedOnBehalfBy],
    [msdyn_upgradeversion].[ModifiedOnBehalfByName],
    [msdyn_upgradeversion].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_upgradeversion].[msdyn_Finished],
			us.TimeZoneCode),
        [msdyn_upgradeversion].[msdyn_Finished],
    [msdyn_upgradeversion].[msdyn_StartingVersion],
    [msdyn_upgradeversion].[msdyn_Status],
    msdyn_StatusPLTable.Value,
    [msdyn_upgradeversion].[msdyn_summary],
    [msdyn_upgradeversion].[msdyn_TargetVersion],
    [msdyn_upgradeversion].[msdyn_UpgradeRun],
    [msdyn_upgradeversion].[msdyn_UpgradeRunName],
    [msdyn_upgradeversion].[msdyn_upgradeversionId],
    [msdyn_upgradeversion].[OrganizationId],
    [msdyn_upgradeversion].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_upgradeversion].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_upgradeversion].[OverriddenCreatedOn],
    [msdyn_upgradeversion].[statecode],
    statecodePLTable.Value,
    [msdyn_upgradeversion].[statuscode],
    statuscodePLTable.Value,
    [msdyn_upgradeversion].[TimeZoneRuleVersionNumber],
    [msdyn_upgradeversion].[UTCConversionTimeZoneCode],
    [msdyn_upgradeversion].[VersionNumber]
from msdyn_upgradeversion
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_StatusPLTable] on 
		([msdyn_StatusPLTable].AttributeName = 'msdyn_status'
		and [msdyn_StatusPLTable].ObjectTypeCode = 10079
		and [msdyn_StatusPLTable].AttributeValue = [msdyn_upgradeversion].[msdyn_Status]
		and [msdyn_StatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10079
		and [statecodePLTable].AttributeValue = [msdyn_upgradeversion].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10079
		and [statuscodePLTable].AttributeValue = [msdyn_upgradeversion].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10079) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [msdyn_upgradeversion].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_upgradeversion] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_upgradeversion] TO [CRMReaderRole]
    AS [dbo];

