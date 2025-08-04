

--
-- report view for uomschedule
--
create view dbo.[FilteredUoMSchedule] 
(
    [baseuomname],
    [createdby],
    [createdbyexternalparty],
    [createdbyexternalpartyname],
    [createdbyexternalpartyyominame],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyexternalparty],
    [modifiedbyexternalpartyname],
    [modifiedbyexternalpartyyominame],
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
    [uomscheduleid],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [UoMSchedule].[BaseUoMName],
    [UoMSchedule].[CreatedBy],
    [UoMSchedule].[CreatedByExternalParty],
    [UoMSchedule].[CreatedByExternalPartyName],
    [UoMSchedule].[CreatedByExternalPartyYomiName],
    [UoMSchedule].[CreatedByName],
    [UoMSchedule].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UoMSchedule].[CreatedOn],
			us.TimeZoneCode),
        [UoMSchedule].[CreatedOn],
    [UoMSchedule].[CreatedOnBehalfBy],
    [UoMSchedule].[CreatedOnBehalfByName],
    [UoMSchedule].[CreatedOnBehalfByYomiName],
    [UoMSchedule].[Description],
    [UoMSchedule].[ImportSequenceNumber],
    [UoMSchedule].[ModifiedBy],
    [UoMSchedule].[ModifiedByExternalParty],
    [UoMSchedule].[ModifiedByExternalPartyName],
    [UoMSchedule].[ModifiedByExternalPartyYomiName],
    [UoMSchedule].[ModifiedByName],
    [UoMSchedule].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UoMSchedule].[ModifiedOn],
			us.TimeZoneCode),
        [UoMSchedule].[ModifiedOn],
    [UoMSchedule].[ModifiedOnBehalfBy],
    [UoMSchedule].[ModifiedOnBehalfByName],
    [UoMSchedule].[ModifiedOnBehalfByYomiName],
    [UoMSchedule].[Name],
    [UoMSchedule].[OrganizationId],
    [UoMSchedule].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UoMSchedule].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [UoMSchedule].[OverriddenCreatedOn],
    [UoMSchedule].[StateCode],
    StateCodePLTable.Value,
    [UoMSchedule].[StatusCode],
    StatusCodePLTable.Value,
    [UoMSchedule].[TimeZoneRuleVersionNumber],
    [UoMSchedule].[UoMScheduleId],
    [UoMSchedule].[UTCConversionTimeZoneCode],
    [UoMSchedule].[VersionNumber]
from UoMSchedule
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1056
		and [StateCodePLTable].AttributeValue = [UoMSchedule].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1056
		and [StatusCodePLTable].AttributeValue = [UoMSchedule].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1056) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [UoMSchedule].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredUoMSchedule] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredUoMSchedule] TO [CRMReaderRole]
    AS [dbo];

