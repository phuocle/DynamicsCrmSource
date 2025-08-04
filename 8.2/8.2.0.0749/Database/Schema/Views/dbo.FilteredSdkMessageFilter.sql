SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for sdkmessagefilter
--
create view [dbo].[FilteredSdkMessageFilter] (
    [availability],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [iscustomprocessingstepallowed],
    [iscustomprocessingstepallowedname],
    [isvisible],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [primaryobjecttypecode],
    [primaryobjecttypecodename],
    [sdkmessagefilterid],
    [sdkmessagefilteridunique],
    [sdkmessageid],
    [sdkmessageidname],
    [secondaryobjecttypecode],
    [secondaryobjecttypecodename],
    [versionnumber],
    [workflowsdkstepenabled],
    [workflowsdkstepenabledname]
) with view_metadata as
select
    [SdkMessageFilter].[Availability],
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
    [SdkMessageFilter].[IsCustomProcessingStepAllowed],
    IsCustomProcessingStepAllowedPLTable.Value,
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
    [SdkMessageFilter].[OrganizationId],
    [SdkMessageFilter].[PrimaryObjectTypeCode],
    PrimaryObjectTypeCodePLTable.Value,
    [SdkMessageFilter].[SdkMessageFilterId],
    [SdkMessageFilter].[SdkMessageFilterIdUnique],
    [SdkMessageFilter].[SdkMessageId],
    [SdkMessageFilter].[SdkMessageIdName],
    [SdkMessageFilter].[SecondaryObjectTypeCode],
    SecondaryObjectTypeCodePLTable.Value,
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
GRANT SELECT ON  [dbo].[FilteredSdkMessageFilter] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSdkMessageFilter] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
