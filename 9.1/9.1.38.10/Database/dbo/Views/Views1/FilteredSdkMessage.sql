

--
-- report view for sdkmessage
--
create view dbo.[FilteredSdkMessage] 
(
    [autotransact],
    [autotransactname],
    [availability],
    [categoryname],
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
    [executeprivilegename],
    [expand],
    [expandname],
    [introducedversion],
    [isactive],
    [isactivename],
    [ismanaged],
    [ismanagedname],
    [isprivate],
    [isprivatename],
    [isreadonly],
    [isreadonlyname],
    [isvalidforexecuteasync],
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
    [sdkmessageid],
    [sdkmessageidunique],
    [solutionid],
    [template],
    [templatename],
    [throttlesettings],
    [versionnumber],
    [workflowsdkstepenabled],
    [workflowsdkstepenabledname]
) with view_metadata as
select
    [SdkMessage].[AutoTransact],
    AutoTransactPLTable.Value,
    [SdkMessage].[Availability],
    [SdkMessage].[CategoryName],
    [SdkMessage].[ComponentState],
    [SdkMessage].[CreatedBy],
    [SdkMessage].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessage].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessage].[CreatedOn],
    [SdkMessage].[CreatedOnBehalfBy],
    --[SdkMessage].[CreatedOnBehalfByDsc]
    0,
    [SdkMessage].[CreatedOnBehalfByName],
    [SdkMessage].[CreatedOnBehalfByYomiName],
    [SdkMessage].[CustomizationLevel],
    [SdkMessage].[ExecutePrivilegeName],
    [SdkMessage].[Expand],
    ExpandPLTable.Value,
    [SdkMessage].[IntroducedVersion],
    [SdkMessage].[IsActive],
    IsActivePLTable.Value,
    [SdkMessage].[IsManaged],
    IsManagedPLTable.Value,
    [SdkMessage].[IsPrivate],
    IsPrivatePLTable.Value,
    [SdkMessage].[IsReadOnly],
    IsReadOnlyPLTable.Value,
    [SdkMessage].[IsValidForExecuteAsync],
    [SdkMessage].[ModifiedBy],
    [SdkMessage].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessage].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessage].[ModifiedOn],
    [SdkMessage].[ModifiedOnBehalfBy],
    --[SdkMessage].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessage].[ModifiedOnBehalfByName],
    [SdkMessage].[ModifiedOnBehalfByYomiName],
    [SdkMessage].[Name],
    [SdkMessage].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessage].[OverwriteTime],
			us.TimeZoneCode),
        [SdkMessage].[OverwriteTime],
    [SdkMessage].[SdkMessageId],
    [SdkMessage].[SdkMessageIdUnique],
    [SdkMessage].[SolutionId],
    [SdkMessage].[Template],
    TemplatePLTable.Value,
    [SdkMessage].[ThrottleSettings],
    [SdkMessage].[VersionNumber],
    [SdkMessage].[WorkflowSdkStepEnabled],
    WorkflowSdkStepEnabledPLTable.Value
from SdkMessage
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AutoTransactPLTable] on 
		([AutoTransactPLTable].AttributeName = 'autotransact'
		and [AutoTransactPLTable].ObjectTypeCode = 4606
		and [AutoTransactPLTable].AttributeValue = [SdkMessage].[AutoTransact]
		and [AutoTransactPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ExpandPLTable] on 
		([ExpandPLTable].AttributeName = 'expand'
		and [ExpandPLTable].ObjectTypeCode = 4606
		and [ExpandPLTable].AttributeValue = [SdkMessage].[Expand]
		and [ExpandPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsActivePLTable] on 
		([IsActivePLTable].AttributeName = 'isactive'
		and [IsActivePLTable].ObjectTypeCode = 4606
		and [IsActivePLTable].AttributeValue = [SdkMessage].[IsActive]
		and [IsActivePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4606
		and [IsManagedPLTable].AttributeValue = [SdkMessage].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPrivatePLTable] on 
		([IsPrivatePLTable].AttributeName = 'isprivate'
		and [IsPrivatePLTable].ObjectTypeCode = 4606
		and [IsPrivatePLTable].AttributeValue = [SdkMessage].[IsPrivate]
		and [IsPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsReadOnlyPLTable] on 
		([IsReadOnlyPLTable].AttributeName = 'isreadonly'
		and [IsReadOnlyPLTable].ObjectTypeCode = 4606
		and [IsReadOnlyPLTable].AttributeValue = [SdkMessage].[IsReadOnly]
		and [IsReadOnlyPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TemplatePLTable] on 
		([TemplatePLTable].AttributeName = 'template'
		and [TemplatePLTable].ObjectTypeCode = 4606
		and [TemplatePLTable].AttributeValue = [SdkMessage].[Template]
		and [TemplatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [WorkflowSdkStepEnabledPLTable] on 
		([WorkflowSdkStepEnabledPLTable].AttributeName = 'workflowsdkstepenabled'
		and [WorkflowSdkStepEnabledPLTable].ObjectTypeCode = 4606
		and [WorkflowSdkStepEnabledPLTable].AttributeValue = [SdkMessage].[WorkflowSdkStepEnabled]
		and [WorkflowSdkStepEnabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4606) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessage].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessage] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessage] TO [CRMReaderRole]
    AS [dbo];

