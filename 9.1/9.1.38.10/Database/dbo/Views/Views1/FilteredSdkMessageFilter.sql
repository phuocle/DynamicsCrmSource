

--
-- report view for sdkmessagefilter
--
create view dbo.[FilteredSdkMessageFilter] 
(
    [availability],
    [componentstate],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [introducedversion],
    [iscustomprocessingstepallowed],
    [iscustomprocessingstepallowedname],
    [ismanaged],
    [ismanagedname],
    [isvisible],
    [modifiedby],
    [modifiedbyname],
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
    [primaryobjecttypecode],
    [primaryobjecttypecodename],
    [restrictionlevel],
    [sdkmessagefilterid],
    [sdkmessagefilteridunique],
    [sdkmessageid],
    [sdkmessageidname],
    [secondaryobjecttypecode],
    [secondaryobjecttypecodename],
    [solutionid],
    [versionnumber],
    [workflowsdkstepenabled],
    [workflowsdkstepenabledname]
) with view_metadata as
select
    [SdkMessageFilter].[Availability],
    [SdkMessageFilter].[ComponentState],
    [SdkMessageFilter].[CreatedBy],
    [SdkMessageFilter].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageFilter].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessageFilter].[CreatedOn],
    [SdkMessageFilter].[CreatedOnBehalfBy],
    --[SdkMessageFilter].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageFilter].[CreatedOnBehalfByName],
    [SdkMessageFilter].[CreatedOnBehalfByYomiName],
    [SdkMessageFilter].[CustomizationLevel],
    [SdkMessageFilter].[IntroducedVersion],
    [SdkMessageFilter].[IsCustomProcessingStepAllowed],
    IsCustomProcessingStepAllowedPLTable.Value,
    [SdkMessageFilter].[IsManaged],
    IsManagedPLTable.Value,
    [SdkMessageFilter].[IsVisible],
    [SdkMessageFilter].[ModifiedBy],
    [SdkMessageFilter].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageFilter].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessageFilter].[ModifiedOn],
    [SdkMessageFilter].[ModifiedOnBehalfBy],
    --[SdkMessageFilter].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessageFilter].[ModifiedOnBehalfByName],
    [SdkMessageFilter].[ModifiedOnBehalfByYomiName],
    [SdkMessageFilter].[Name],
    [SdkMessageFilter].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageFilter].[OverwriteTime],
			us.TimeZoneCode),
        [SdkMessageFilter].[OverwriteTime],
    [SdkMessageFilter].[PrimaryObjectTypeCode],
    PrimaryObjectTypeCodePLTable.Value,
    [SdkMessageFilter].[RestrictionLevel],
    [SdkMessageFilter].[SdkMessageFilterId],
    [SdkMessageFilter].[SdkMessageFilterIdUnique],
    [SdkMessageFilter].[SdkMessageId],
    [SdkMessageFilter].[SdkMessageIdName],
    [SdkMessageFilter].[SecondaryObjectTypeCode],
    SecondaryObjectTypeCodePLTable.Value,
    [SdkMessageFilter].[SolutionId],
    [SdkMessageFilter].[VersionNumber],
    [SdkMessageFilter].[WorkflowSdkStepEnabled],
    WorkflowSdkStepEnabledPLTable.Value
from SdkMessageFilter
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsCustomProcessingStepAllowedPLTable] on 
		([IsCustomProcessingStepAllowedPLTable].AttributeName = 'iscustomprocessingstepallowed'
		and [IsCustomProcessingStepAllowedPLTable].ObjectTypeCode = 4607
		and [IsCustomProcessingStepAllowedPLTable].AttributeValue = [SdkMessageFilter].[IsCustomProcessingStepAllowed]
		and [IsCustomProcessingStepAllowedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4607
		and [IsManagedPLTable].AttributeValue = [SdkMessageFilter].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PrimaryObjectTypeCodePLTable] on 
		([PrimaryObjectTypeCodePLTable].AttributeName = 'primaryobjecttypecode'
		and [PrimaryObjectTypeCodePLTable].ObjectTypeCode = 4607
		and [PrimaryObjectTypeCodePLTable].AttributeValue = [SdkMessageFilter].[PrimaryObjectTypeCode]
		and [PrimaryObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SecondaryObjectTypeCodePLTable] on 
		([SecondaryObjectTypeCodePLTable].AttributeName = 'secondaryobjecttypecode'
		and [SecondaryObjectTypeCodePLTable].ObjectTypeCode = 4607
		and [SecondaryObjectTypeCodePLTable].AttributeValue = [SdkMessageFilter].[SecondaryObjectTypeCode]
		and [SecondaryObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [WorkflowSdkStepEnabledPLTable] on 
		([WorkflowSdkStepEnabledPLTable].AttributeName = 'workflowsdkstepenabled'
		and [WorkflowSdkStepEnabledPLTable].ObjectTypeCode = 4607
		and [WorkflowSdkStepEnabledPLTable].AttributeValue = [SdkMessageFilter].[WorkflowSdkStepEnabled]
		and [WorkflowSdkStepEnabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4607) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessageFilter].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageFilter] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageFilter] TO [CRMReaderRole]
    AS [dbo];

