

--
-- report view for msdyn_postruleconfig
--
create view dbo.[Filteredmsdyn_PostRuleConfig] (
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
    [msdyn_formatid],
    [msdyn_name],
    [msdyn_postconfigid],
    [msdyn_postconfigidname],
    [msdyn_postruleconfigid],
    [msdyn_posttoyammer],
    [msdyn_posttoyammername],
    [msdyn_ruleid],
    [msdyn_rulesource],
    [msdyn_stepid],
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
    [msdyn_PostRuleConfig].[CreatedBy],
    [msdyn_PostRuleConfig].[CreatedByName],
    [msdyn_PostRuleConfig].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_PostRuleConfig].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_PostRuleConfig].[CreatedOn],
    [msdyn_PostRuleConfig].[CreatedOnBehalfBy],
    [msdyn_PostRuleConfig].[CreatedOnBehalfByName],
    [msdyn_PostRuleConfig].[CreatedOnBehalfByYomiName],
    [msdyn_PostRuleConfig].[ImportSequenceNumber],
    [msdyn_PostRuleConfig].[ModifiedBy],
    [msdyn_PostRuleConfig].[ModifiedByName],
    [msdyn_PostRuleConfig].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_PostRuleConfig].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_PostRuleConfig].[ModifiedOn],
    [msdyn_PostRuleConfig].[ModifiedOnBehalfBy],
    [msdyn_PostRuleConfig].[ModifiedOnBehalfByName],
    [msdyn_PostRuleConfig].[ModifiedOnBehalfByYomiName],
    [msdyn_PostRuleConfig].[msdyn_FormatId],
    [msdyn_PostRuleConfig].[msdyn_name],
    [msdyn_PostRuleConfig].[msdyn_PostConfigId],
    [msdyn_PostRuleConfig].[msdyn_PostConfigIdName],
    [msdyn_PostRuleConfig].[msdyn_PostRuleConfigId],
    [msdyn_PostRuleConfig].[msdyn_PostToYammer],
    msdyn_PostToYammerPLTable.Value,
    [msdyn_PostRuleConfig].[msdyn_RuleId],
    [msdyn_PostRuleConfig].[msdyn_RuleSource],
    [msdyn_PostRuleConfig].[msdyn_StepId],
    [msdyn_PostRuleConfig].[OrganizationId],
    [msdyn_PostRuleConfig].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_PostRuleConfig].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_PostRuleConfig].[OverriddenCreatedOn],
    [msdyn_PostRuleConfig].[statecode],
    statecodePLTable.Value,
    [msdyn_PostRuleConfig].[statuscode],
    statuscodePLTable.Value,
    [msdyn_PostRuleConfig].[TimeZoneRuleVersionNumber],
    [msdyn_PostRuleConfig].[UTCConversionTimeZoneCode],
    [msdyn_PostRuleConfig].[VersionNumber]
from msdyn_PostRuleConfig
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_PostToYammerPLTable] on 
		([msdyn_PostToYammerPLTable].AttributeName = 'msdyn_posttoyammer'
		and [msdyn_PostToYammerPLTable].ObjectTypeCode = 10002
		and [msdyn_PostToYammerPLTable].AttributeValue = [msdyn_PostRuleConfig].[msdyn_PostToYammer]
		and [msdyn_PostToYammerPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10002
		and [statecodePLTable].AttributeValue = [msdyn_PostRuleConfig].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10002
		and [statuscodePLTable].AttributeValue = [msdyn_PostRuleConfig].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10002) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [msdyn_PostRuleConfig].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_PostRuleConfig] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_PostRuleConfig] TO [CRMReaderRole]
    AS [dbo];

