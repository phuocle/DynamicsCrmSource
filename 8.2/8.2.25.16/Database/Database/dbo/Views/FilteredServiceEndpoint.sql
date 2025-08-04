

--
-- report view for serviceendpoint
--
create view dbo.[FilteredServiceEndpoint] (
    [authtype],
    [authtypename],
    [componentstate],
    [connectionmode],
    [connectionmodename],
    [contract],
    [contractname],
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [introducedversion],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
    [issaskeyset],
    [issastokenset],
    [messageformat],
    [messageformatname],
    [modifiedby],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [namespaceaddress],
    [namespaceformat],
    [namespaceformatname],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [path],
    [saskeyname],
    [serviceendpointid],
    [serviceendpointidunique],
    [solutionid],
    [solutionnamespace],
    [userclaim],
    [userclaimname]
) with view_metadata as
select
    [ServiceEndpoint].[AuthType],
    AuthTypePLTable.Value,
    [ServiceEndpoint].[ComponentState],
    [ServiceEndpoint].[ConnectionMode],
    ConnectionModePLTable.Value,
    [ServiceEndpoint].[Contract],
    ContractPLTable.Value,
    [ServiceEndpoint].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceEndpoint].[CreatedOn],
			us.TimeZoneCode),
        [ServiceEndpoint].[CreatedOn],
    [ServiceEndpoint].[CreatedOnBehalfBy],
    --[ServiceEndpoint].[CreatedOnBehalfByDsc]
    0,
    [ServiceEndpoint].[CreatedOnBehalfByName],
    [ServiceEndpoint].[CreatedOnBehalfByYomiName],
    [ServiceEndpoint].[Description],
    [ServiceEndpoint].[IntroducedVersion],
    [ServiceEndpoint].[IsCustomizable],
    [ServiceEndpoint].[IsManaged],
    IsManagedPLTable.Value,
    [ServiceEndpoint].[IsSASKeySet],
    [ServiceEndpoint].[IsSASTokenSet],
    [ServiceEndpoint].[MessageFormat],
    MessageFormatPLTable.Value,
    [ServiceEndpoint].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceEndpoint].[ModifiedOn],
			us.TimeZoneCode),
        [ServiceEndpoint].[ModifiedOn],
    [ServiceEndpoint].[ModifiedOnBehalfBy],
    --[ServiceEndpoint].[ModifiedOnBehalfByDsc]
    0,
    [ServiceEndpoint].[ModifiedOnBehalfByName],
    [ServiceEndpoint].[ModifiedOnBehalfByYomiName],
    [ServiceEndpoint].[Name],
    [ServiceEndpoint].[NamespaceAddress],
    [ServiceEndpoint].[NamespaceFormat],
    NamespaceFormatPLTable.Value,
    [ServiceEndpoint].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceEndpoint].[OverwriteTime],
			us.TimeZoneCode),
        [ServiceEndpoint].[OverwriteTime],
    [ServiceEndpoint].[Path],
    [ServiceEndpoint].[SASKeyName],
    [ServiceEndpoint].[ServiceEndpointId],
    [ServiceEndpoint].[ServiceEndpointIdUnique],
    [ServiceEndpoint].[SolutionId],
    [ServiceEndpoint].[SolutionNamespace],
    [ServiceEndpoint].[UserClaim],
    UserClaimPLTable.Value
from ServiceEndpoint
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AuthTypePLTable] on 
		([AuthTypePLTable].AttributeName = 'authtype'
		and [AuthTypePLTable].ObjectTypeCode = 4618
		and [AuthTypePLTable].AttributeValue = [ServiceEndpoint].[AuthType]
		and [AuthTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ConnectionModePLTable] on 
		([ConnectionModePLTable].AttributeName = 'connectionmode'
		and [ConnectionModePLTable].ObjectTypeCode = 4618
		and [ConnectionModePLTable].AttributeValue = [ServiceEndpoint].[ConnectionMode]
		and [ConnectionModePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ContractPLTable] on 
		([ContractPLTable].AttributeName = 'contract'
		and [ContractPLTable].ObjectTypeCode = 4618
		and [ContractPLTable].AttributeValue = [ServiceEndpoint].[Contract]
		and [ContractPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4618
		and [IsManagedPLTable].AttributeValue = [ServiceEndpoint].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [MessageFormatPLTable] on 
		([MessageFormatPLTable].AttributeName = 'messageformat'
		and [MessageFormatPLTable].ObjectTypeCode = 4618
		and [MessageFormatPLTable].AttributeValue = [ServiceEndpoint].[MessageFormat]
		and [MessageFormatPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [NamespaceFormatPLTable] on 
		([NamespaceFormatPLTable].AttributeName = 'namespaceformat'
		and [NamespaceFormatPLTable].ObjectTypeCode = 4618
		and [NamespaceFormatPLTable].AttributeValue = [ServiceEndpoint].[NamespaceFormat]
		and [NamespaceFormatPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [UserClaimPLTable] on 
		([UserClaimPLTable].AttributeName = 'userclaim'
		and [UserClaimPLTable].ObjectTypeCode = 4618
		and [UserClaimPLTable].AttributeValue = [ServiceEndpoint].[UserClaim]
		and [UserClaimPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4618) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [ServiceEndpoint].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredServiceEndpoint] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredServiceEndpoint] TO [CRMReaderRole]
    AS [dbo];

