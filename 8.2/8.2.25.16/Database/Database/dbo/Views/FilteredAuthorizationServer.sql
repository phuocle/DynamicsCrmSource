

--
-- report view for authorizationserver
--
create view dbo.[FilteredAuthorizationServer] (
    [authorizationserverid],
    [authorizationservertype],
    [authorizationservertypename],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [metadata],
    [metadatarefreshedon],
    [metadatarefreshedonutc],
    [metadataurl],
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
    [principalid],
    [realm],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [tenantid],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode]
) with view_metadata as
select
    [AuthorizationServer].[AuthorizationServerId],
    [AuthorizationServer].[AuthorizationServerType],
    AuthorizationServerTypePLTable.Value,
    [AuthorizationServer].[CreatedBy],
    [AuthorizationServer].[CreatedByName],
    [AuthorizationServer].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AuthorizationServer].[CreatedOn],
			us.TimeZoneCode),
        [AuthorizationServer].[CreatedOn],
    [AuthorizationServer].[CreatedOnBehalfBy],
    [AuthorizationServer].[CreatedOnBehalfByName],
    [AuthorizationServer].[CreatedOnBehalfByYomiName],
    [AuthorizationServer].[Metadata],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AuthorizationServer].[MetadataRefreshedOn],
			us.TimeZoneCode),
        [AuthorizationServer].[MetadataRefreshedOn],
    [AuthorizationServer].[MetadataUrl],
    [AuthorizationServer].[ModifiedBy],
    [AuthorizationServer].[ModifiedByName],
    [AuthorizationServer].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AuthorizationServer].[ModifiedOn],
			us.TimeZoneCode),
        [AuthorizationServer].[ModifiedOn],
    [AuthorizationServer].[ModifiedOnBehalfBy],
    [AuthorizationServer].[ModifiedOnBehalfByName],
    [AuthorizationServer].[ModifiedOnBehalfByYomiName],
    [AuthorizationServer].[Name],
    [AuthorizationServer].[OrganizationId],
    [AuthorizationServer].[OrganizationIdName],
    [AuthorizationServer].[PrincipalId],
    [AuthorizationServer].[Realm],
    [AuthorizationServer].[StateCode],
    StateCodePLTable.Value,
    [AuthorizationServer].[StatusCode],
    StatusCodePLTable.Value,
    [AuthorizationServer].[TenantId],
    [AuthorizationServer].[TimeZoneRuleVersionNumber],
    [AuthorizationServer].[UTCConversionTimeZoneCode]
from AuthorizationServer
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AuthorizationServerTypePLTable] on 
		([AuthorizationServerTypePLTable].AttributeName = 'authorizationservertype'
		and [AuthorizationServerTypePLTable].ObjectTypeCode = 1094
		and [AuthorizationServerTypePLTable].AttributeValue = [AuthorizationServer].[AuthorizationServerType]
		and [AuthorizationServerTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1094
		and [StateCodePLTable].AttributeValue = [AuthorizationServer].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1094
		and [StatusCodePLTable].AttributeValue = [AuthorizationServer].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1094) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [AuthorizationServer].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAuthorizationServer] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAuthorizationServer] TO [CRMReaderRole]
    AS [dbo];

