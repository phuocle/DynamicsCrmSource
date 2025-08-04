SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for uomschedule
--
create view [dbo].[FilteredUoMSchedule] (
    [baseuomname],
    [createdby],
    [createdbydsc],
    [createdbyexternalparty],
    [createdbyexternalpartyname],
    [createdbyexternalpartyyominame],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [importsequencenumber],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyexternalparty],
    [modifiedbyexternalpartyname],
    [modifiedbyexternalpartyyominame],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [uomscheduleid],
    [versionnumber]
) with view_metadata as
select
    [UoMSchedule].[BaseUoMName],
    [UoMSchedule].[CreatedBy],
    --[UoMSchedule].[CreatedByDsc]
    0,
    [UoMSchedule].[CreatedByExternalParty],
    [UoMSchedule].[CreatedByExternalPartyName],
    [UoMSchedule].[CreatedByExternalPartyYomiName],
    [UoMSchedule].[CreatedByName],
    [UoMSchedule].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UoMSchedule].[CreatedOn],
			us.TimeZoneCode),
        [UoMSchedule].[CreatedOn],
    [UoMSchedule].[CreatedOnBehalfBy],
    --[UoMSchedule].[CreatedOnBehalfByDsc]
    0,
    [UoMSchedule].[CreatedOnBehalfByName],
    [UoMSchedule].[CreatedOnBehalfByYomiName],
    [UoMSchedule].[Description],
    [UoMSchedule].[ImportSequenceNumber],
    [UoMSchedule].[ModifiedBy],
    --[UoMSchedule].[ModifiedByDsc]
    0,
    [UoMSchedule].[ModifiedByExternalParty],
    [UoMSchedule].[ModifiedByExternalPartyName],
    [UoMSchedule].[ModifiedByExternalPartyYomiName],
    [UoMSchedule].[ModifiedByName],
    [UoMSchedule].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UoMSchedule].[ModifiedOn],
			us.TimeZoneCode),
        [UoMSchedule].[ModifiedOn],
    [UoMSchedule].[ModifiedOnBehalfBy],
    --[UoMSchedule].[ModifiedOnBehalfByDsc]
    0,
    [UoMSchedule].[ModifiedOnBehalfByName],
    [UoMSchedule].[ModifiedOnBehalfByYomiName],
    [UoMSchedule].[Name],
    [UoMSchedule].[OrganizationId],
    --[UoMSchedule].[OrganizationIdDsc]
    0,
    [UoMSchedule].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UoMSchedule].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [UoMSchedule].[OverriddenCreatedOn],
    [UoMSchedule].[StateCode],
    StateCodePLTable.Value,
    [UoMSchedule].[StatusCode],
    StatusCodePLTable.Value,
    [UoMSchedule].[UoMScheduleId],
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
GRANT SELECT ON  [dbo].[FilteredUoMSchedule] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredUoMSchedule] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
