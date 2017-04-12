SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for sdkmessage
--
create view [dbo].[FilteredSdkMessage] (
    [autotransact],
    [autotransactname],
    [availability],
    [categoryname],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [expand],
    [expandname],
    [isactive],
    [isactivename],
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
    [sdkmessageid],
    [sdkmessageidunique],
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
    [SdkMessage].[CreatedBy],
    [SdkMessage].[CreatedByName],
    dbo.fn_UTCToTzSpecificLocalTime([SdkMessage].[CreatedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
        [SdkMessage].[CreatedOn],
    [SdkMessage].[CreatedOnBehalfBy],
    --[SdkMessage].[CreatedOnBehalfByDsc]
    0,
    [SdkMessage].[CreatedOnBehalfByName],
    [SdkMessage].[CreatedOnBehalfByYomiName],
    [SdkMessage].[CustomizationLevel],
    [SdkMessage].[Expand],
    ExpandPLTable.Value,
    [SdkMessage].[IsActive],
    IsActivePLTable.Value,
    [SdkMessage].[IsPrivate],
    IsPrivatePLTable.Value,
    [SdkMessage].[IsReadOnly],
    IsReadOnlyPLTable.Value,
    [SdkMessage].[IsValidForExecuteAsync],
    [SdkMessage].[ModifiedBy],
    [SdkMessage].[ModifiedByName],
    dbo.fn_UTCToTzSpecificLocalTime([SdkMessage].[ModifiedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
        [SdkMessage].[ModifiedOn],
    [SdkMessage].[ModifiedOnBehalfBy],
    --[SdkMessage].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessage].[ModifiedOnBehalfByName],
    [SdkMessage].[ModifiedOnBehalfByYomiName],
    [SdkMessage].[Name],
    [SdkMessage].[OrganizationId],
    [SdkMessage].[SdkMessageId],
    [SdkMessage].[SdkMessageIdUnique],
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
GRANT SELECT ON  [dbo].[FilteredSdkMessage] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSdkMessage] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
