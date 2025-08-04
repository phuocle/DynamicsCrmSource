

--
-- report view for msdyn_upgradestep
--
create view dbo.[Filteredmsdyn_upgradestep] 
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
    [msdyn_dbversion],
    [msdyn_details],
    [msdyn_errors],
    [msdyn_finished],
    [msdyn_finishedutc],
    [msdyn_name],
    [msdyn_status],
    [msdyn_statusname],
    [msdyn_stepid],
    [msdyn_upgradestepid],
    [msdyn_upgradeversion],
    [msdyn_upgradeversionname],
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
    [msdyn_upgradestep].[CreatedBy],
    [msdyn_upgradestep].[CreatedByName],
    [msdyn_upgradestep].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_upgradestep].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_upgradestep].[CreatedOn],
    [msdyn_upgradestep].[CreatedOnBehalfBy],
    [msdyn_upgradestep].[CreatedOnBehalfByName],
    [msdyn_upgradestep].[CreatedOnBehalfByYomiName],
    [msdyn_upgradestep].[ImportSequenceNumber],
    [msdyn_upgradestep].[ModifiedBy],
    [msdyn_upgradestep].[ModifiedByName],
    [msdyn_upgradestep].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_upgradestep].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_upgradestep].[ModifiedOn],
    [msdyn_upgradestep].[ModifiedOnBehalfBy],
    [msdyn_upgradestep].[ModifiedOnBehalfByName],
    [msdyn_upgradestep].[ModifiedOnBehalfByYomiName],
    [msdyn_upgradestep].[msdyn_dbversion],
    [msdyn_upgradestep].[msdyn_Details],
    [msdyn_upgradestep].[msdyn_Errors],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_upgradestep].[msdyn_FinishedDate],
			us.TimeZoneCode),
        [msdyn_upgradestep].[msdyn_FinishedDate],
    [msdyn_upgradestep].[msdyn_Name],
    [msdyn_upgradestep].[msdyn_Status],
    msdyn_StatusPLTable.Value,
    [msdyn_upgradestep].[msdyn_StepID],
    [msdyn_upgradestep].[msdyn_upgradestepId],
    [msdyn_upgradestep].[msdyn_UpgradeVersion],
    [msdyn_upgradestep].[msdyn_UpgradeVersionName],
    [msdyn_upgradestep].[OrganizationId],
    [msdyn_upgradestep].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_upgradestep].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_upgradestep].[OverriddenCreatedOn],
    [msdyn_upgradestep].[statecode],
    statecodePLTable.Value,
    [msdyn_upgradestep].[statuscode],
    statuscodePLTable.Value,
    [msdyn_upgradestep].[TimeZoneRuleVersionNumber],
    [msdyn_upgradestep].[UTCConversionTimeZoneCode],
    [msdyn_upgradestep].[VersionNumber]
from msdyn_upgradestep
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_StatusPLTable] on 
		([msdyn_StatusPLTable].AttributeName = 'msdyn_status'
		and [msdyn_StatusPLTable].ObjectTypeCode = 10078
		and [msdyn_StatusPLTable].AttributeValue = [msdyn_upgradestep].[msdyn_Status]
		and [msdyn_StatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10078
		and [statecodePLTable].AttributeValue = [msdyn_upgradestep].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10078
		and [statuscodePLTable].AttributeValue = [msdyn_upgradestep].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10078) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [msdyn_upgradestep].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_upgradestep] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_upgradestep] TO [CRMReaderRole]
    AS [dbo];

