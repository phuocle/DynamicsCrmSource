

--
-- report view for sdkmessagerequestfield
--
create view dbo.[FilteredSdkMessageRequestField] 
(
    [clrparser],
    [componentstate],
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [fieldmask],
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
    [optional],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [parameterbindinginformation],
    [parser],
    [position],
    [publicname],
    [sdkmessagerequestfieldid],
    [sdkmessagerequestfieldidunique],
    [sdkmessagerequestid],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [SdkMessageRequestField].[ClrParser],
    [SdkMessageRequestField].[ComponentState],
    [SdkMessageRequestField].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageRequestField].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessageRequestField].[CreatedOn],
    [SdkMessageRequestField].[CreatedOnBehalfBy],
    --[SdkMessageRequestField].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageRequestField].[CreatedOnBehalfByName],
    [SdkMessageRequestField].[CreatedOnBehalfByYomiName],
    [SdkMessageRequestField].[CustomizationLevel],
    [SdkMessageRequestField].[FieldMask],
    [SdkMessageRequestField].[IntroducedVersion],
    [SdkMessageRequestField].[IsManaged],
    IsManagedPLTable.Value,
    [SdkMessageRequestField].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageRequestField].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessageRequestField].[ModifiedOn],
    [SdkMessageRequestField].[ModifiedOnBehalfBy],
    --[SdkMessageRequestField].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessageRequestField].[ModifiedOnBehalfByName],
    [SdkMessageRequestField].[ModifiedOnBehalfByYomiName],
    [SdkMessageRequestField].[Name],
    [SdkMessageRequestField].[Optional],
    [SdkMessageRequestField].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageRequestField].[OverwriteTime],
			us.TimeZoneCode),
        [SdkMessageRequestField].[OverwriteTime],
    [SdkMessageRequestField].[ParameterBindingInformation],
    [SdkMessageRequestField].[Parser],
    [SdkMessageRequestField].[Position],
    [SdkMessageRequestField].[PublicName],
    [SdkMessageRequestField].[SdkMessageRequestFieldId],
    [SdkMessageRequestField].[SdkMessageRequestFieldIdUnique],
    [SdkMessageRequestField].[SdkMessageRequestId],
    [SdkMessageRequestField].[SolutionId],
    [SdkMessageRequestField].[VersionNumber]
from SdkMessageRequestField
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4614
		and [IsManagedPLTable].AttributeValue = [SdkMessageRequestField].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4614) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessageRequestField].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageRequestField] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageRequestField] TO [CRMReaderRole]
    AS [dbo];

