SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for integrationstatus
--
create view [dbo].[FilteredIntegrationStatus] (
    [createdby],
    [createdbydsc],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [integrationentryid],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [objectid],
    [objecttypecode],
    [objecttypecodename],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [statecode],
    [statecodename],
    [statedescription],
    [statuscode],
    [statuscodename],
    [statusdescription],
    [systemname],
    [versionnumber]
) with view_metadata as
select
    [IntegrationStatus].[CreatedBy],
    --[IntegrationStatus].[CreatedByDsc]
    0,
    [IntegrationStatus].[CreatedByName],
    [IntegrationStatus].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IntegrationStatus].[CreatedOn],
			us.TimeZoneCode),
        [IntegrationStatus].[CreatedOn],
    [IntegrationStatus].[CreatedOnBehalfBy],
    --[IntegrationStatus].[CreatedOnBehalfByDsc]
    0,
    [IntegrationStatus].[CreatedOnBehalfByName],
    [IntegrationStatus].[CreatedOnBehalfByYomiName],
    [IntegrationStatus].[IntegrationEntryId],
    [IntegrationStatus].[ModifiedBy],
    --[IntegrationStatus].[ModifiedByDsc]
    0,
    [IntegrationStatus].[ModifiedByName],
    [IntegrationStatus].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IntegrationStatus].[ModifiedOn],
			us.TimeZoneCode),
        [IntegrationStatus].[ModifiedOn],
    [IntegrationStatus].[ModifiedOnBehalfBy],
    --[IntegrationStatus].[ModifiedOnBehalfByDsc]
    0,
    [IntegrationStatus].[ModifiedOnBehalfByName],
    [IntegrationStatus].[ModifiedOnBehalfByYomiName],
    [IntegrationStatus].[ObjectId],
    [IntegrationStatus].[ObjectTypeCode],
    ObjectTypeCodePLTable.Value,
    [IntegrationStatus].[OrganizationId],
    --[IntegrationStatus].[OrganizationIdDsc]
    0,
    [IntegrationStatus].[OrganizationIdName],
    [IntegrationStatus].[StateCode],
    StateCodePLTable.Value,
    [IntegrationStatus].[StateDescription],
    [IntegrationStatus].[StatusCode],
    StatusCodePLTable.Value,
    [IntegrationStatus].[StatusDescription],
    [IntegrationStatus].[SystemName],
    [IntegrationStatus].[VersionNumber]
from IntegrationStatus
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ObjectTypeCodePLTable] on 
		([ObjectTypeCodePLTable].AttributeName = 'objecttypecode'
		and [ObjectTypeCodePLTable].ObjectTypeCode = 3000
		and [ObjectTypeCodePLTable].AttributeValue = [IntegrationStatus].[ObjectTypeCode]
		and [ObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 3000
		and [StateCodePLTable].AttributeValue = [IntegrationStatus].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 3000
		and [StatusCodePLTable].AttributeValue = [IntegrationStatus].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(3000) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [IntegrationStatus].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredIntegrationStatus] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredIntegrationStatus] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
