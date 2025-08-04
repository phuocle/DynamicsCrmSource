

--
-- report view for appconfig
--
create view dbo.[FilteredAppConfig] 
(
    [appconfigid],
    [appconfigidunique],
    [appconfigimportxml],
    [appmoduleid],
    [componentstate],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [introducedversion],
    [ismanaged],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
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
    [versionnumber]
) with view_metadata as
select
    [AppConfig].[AppConfigId],
    [AppConfig].[AppConfigIdUnique],
    [AppConfig].[AppConfigImportXml],
    [AppConfig].[AppModuleId],
    [AppConfig].[ComponentState],
    [AppConfig].[CreatedBy],
    [AppConfig].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppConfig].[CreatedOn],
			us.TimeZoneCode),
        [AppConfig].[CreatedOn],
    [AppConfig].[CreatedOnBehalfBy],
    [AppConfig].[CreatedOnBehalfByName],
    [AppConfig].[CreatedOnBehalfByYomiName],
    [AppConfig].[ImportSequenceNumber],
    [AppConfig].[IntroducedVersion],
    [AppConfig].[IsManaged],
    [AppConfig].[ModifiedBy],
    [AppConfig].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppConfig].[ModifiedOn],
			us.TimeZoneCode),
        [AppConfig].[ModifiedOn],
    [AppConfig].[ModifiedOnBehalfBy],
    [AppConfig].[ModifiedOnBehalfByName],
    [AppConfig].[ModifiedOnBehalfByYomiName],
    [AppConfig].[OrganizationId],
    [AppConfig].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppConfig].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [AppConfig].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppConfig].[OverwriteTime],
			us.TimeZoneCode),
        [AppConfig].[OverwriteTime],
    [AppConfig].[SolutionId],
    [AppConfig].[StateCode],
    StateCodePLTable.Value,
    [AppConfig].[StatusCode],
    StatusCodePLTable.Value,
    [AppConfig].[VersionNumber]
from AppConfig
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9012
		and [StateCodePLTable].AttributeValue = [AppConfig].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9012
		and [StatusCodePLTable].AttributeValue = [AppConfig].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9006) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [AppConfig].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppConfig] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppConfig] TO [CRMReaderRole]
    AS [dbo];

