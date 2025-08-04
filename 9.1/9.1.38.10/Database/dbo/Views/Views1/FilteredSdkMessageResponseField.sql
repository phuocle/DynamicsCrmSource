

--
-- report view for sdkmessageresponsefield
--
create view dbo.[FilteredSdkMessageResponseField] 
(
    [clrformatter],
    [componentstate],
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [formatter],
    [introducedversion],
    [ismanaged],
    [ismanagedname],
    [modifiedby],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [parameterbindinginformation],
    [position],
    [publicname],
    [sdkmessageresponsefieldid],
    [sdkmessageresponsefieldidunique],
    [sdkmessageresponseid],
    [solutionid],
    [value],
    [versionnumber]
) with view_metadata as
select
    [SdkMessageResponseField].[ClrFormatter],
    [SdkMessageResponseField].[ComponentState],
    [SdkMessageResponseField].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageResponseField].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessageResponseField].[CreatedOn],
    [SdkMessageResponseField].[CreatedOnBehalfBy],
    --[SdkMessageResponseField].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageResponseField].[CreatedOnBehalfByName],
    [SdkMessageResponseField].[CreatedOnBehalfByYomiName],
    [SdkMessageResponseField].[CustomizationLevel],
    [SdkMessageResponseField].[Formatter],
    [SdkMessageResponseField].[IntroducedVersion],
    [SdkMessageResponseField].[IsManaged],
    IsManagedPLTable.Value,
    [SdkMessageResponseField].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageResponseField].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessageResponseField].[ModifiedOn],
    [SdkMessageResponseField].[ModifiedOnBehalfBy],
    --[SdkMessageResponseField].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessageResponseField].[ModifiedOnBehalfByName],
    [SdkMessageResponseField].[ModifiedOnBehalfByYomiName],
    [SdkMessageResponseField].[Name],
    [SdkMessageResponseField].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageResponseField].[OverwriteTime],
			us.TimeZoneCode),
        [SdkMessageResponseField].[OverwriteTime],
    [SdkMessageResponseField].[ParameterBindingInformation],
    [SdkMessageResponseField].[Position],
    [SdkMessageResponseField].[PublicName],
    [SdkMessageResponseField].[SdkMessageResponseFieldId],
    [SdkMessageResponseField].[SdkMessageResponseFieldIdUnique],
    [SdkMessageResponseField].[SdkMessageResponseId],
    [SdkMessageResponseField].[SolutionId],
    [SdkMessageResponseField].[Value],
    [SdkMessageResponseField].[VersionNumber]
from SdkMessageResponseField
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4611
		and [IsManagedPLTable].AttributeValue = [SdkMessageResponseField].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4611) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessageResponseField].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageResponseField] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageResponseField] TO [CRMReaderRole]
    AS [dbo];

