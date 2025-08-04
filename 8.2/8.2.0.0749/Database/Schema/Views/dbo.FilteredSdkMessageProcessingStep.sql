SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for sdkmessageprocessingstep
--
create view [dbo].[FilteredSdkMessageProcessingStep] (
    [asyncautodelete],
    [asyncautodeletename],
    [canusereadonlyconnection],
    [canusereadonlyconnectionname],
    [componentstate],
    [configuration],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [description],
    [eventhandler],
    [eventhandlername],
    [eventhandlertypecode],
    [filteringattributes],
    [impersonatinguserid],
    [impersonatinguseridname],
    [introducedversion],
    [invocationsource],
    [invocationsourcename],
    [iscustomizable],
    [ishidden],
    [ismanaged],
    [ismanagedname],
    [mode],
    [modename],
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
    [plugintypeid],
    [plugintypeidname],
    [rank],
    [sdkmessagefilterid],
    [sdkmessageid],
    [sdkmessageidname],
    [sdkmessageprocessingstepid],
    [sdkmessageprocessingstepidunique],
    [sdkmessageprocessingstepsecureconfigid],
    [solutionid],
    [stage],
    [stagename],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [supporteddeployment],
    [supporteddeploymentname],
    [versionnumber]
) with view_metadata as
select
    [SdkMessageProcessingStep].[AsyncAutoDelete],
    AsyncAutoDeletePLTable.Value,
    [SdkMessageProcessingStep].[CanUseReadOnlyConnection],
    CanUseReadOnlyConnectionPLTable.Value,
    [SdkMessageProcessingStep].[ComponentState],
    [SdkMessageProcessingStep].[Configuration],
    [SdkMessageProcessingStep].[CreatedBy],
    [SdkMessageProcessingStep].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageProcessingStep].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessageProcessingStep].[CreatedOn],
    [SdkMessageProcessingStep].[CreatedOnBehalfBy],
    --[SdkMessageProcessingStep].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageProcessingStep].[CreatedOnBehalfByName],
    [SdkMessageProcessingStep].[CreatedOnBehalfByYomiName],
    [SdkMessageProcessingStep].[CustomizationLevel],
    [SdkMessageProcessingStep].[Description],
    [SdkMessageProcessingStep].[EventHandler],
    [SdkMessageProcessingStep].[EventHandlerName],
    [SdkMessageProcessingStep].[EventHandlerTypeCode],
    [SdkMessageProcessingStep].[FilteringAttributes],
    [SdkMessageProcessingStep].[ImpersonatingUserId],
    [SdkMessageProcessingStep].[ImpersonatingUserIdName],
    [SdkMessageProcessingStep].[IntroducedVersion],
    [SdkMessageProcessingStep].[InvocationSource],
    InvocationSourcePLTable.Value,
    [SdkMessageProcessingStep].[IsCustomizable],
    [SdkMessageProcessingStep].[IsHidden],
    [SdkMessageProcessingStep].[IsManaged],
    IsManagedPLTable.Value,
    [SdkMessageProcessingStep].[Mode],
    ModePLTable.Value,
    [SdkMessageProcessingStep].[ModifiedBy],
    [SdkMessageProcessingStep].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageProcessingStep].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessageProcessingStep].[ModifiedOn],
    [SdkMessageProcessingStep].[ModifiedOnBehalfBy],
    --[SdkMessageProcessingStep].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessageProcessingStep].[ModifiedOnBehalfByName],
    [SdkMessageProcessingStep].[ModifiedOnBehalfByYomiName],
    [SdkMessageProcessingStep].[Name],
    [SdkMessageProcessingStep].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageProcessingStep].[OverwriteTime],
			us.TimeZoneCode),
        [SdkMessageProcessingStep].[OverwriteTime],
    [SdkMessageProcessingStep].[PluginTypeId],
    [SdkMessageProcessingStep].[PluginTypeIdName],
    [SdkMessageProcessingStep].[Rank],
    [SdkMessageProcessingStep].[SdkMessageFilterId],
    [SdkMessageProcessingStep].[SdkMessageId],
    [SdkMessageProcessingStep].[SdkMessageIdName],
    [SdkMessageProcessingStep].[SdkMessageProcessingStepId],
    [SdkMessageProcessingStep].[SdkMessageProcessingStepIdUnique],
    [SdkMessageProcessingStep].[SdkMessageProcessingStepSecureConfigId],
    [SdkMessageProcessingStep].[SolutionId],
    [SdkMessageProcessingStep].[Stage],
    StagePLTable.Value,
    [SdkMessageProcessingStep].[StateCode],
    StateCodePLTable.Value,
    [SdkMessageProcessingStep].[StatusCode],
    StatusCodePLTable.Value,
    [SdkMessageProcessingStep].[SupportedDeployment],
    SupportedDeploymentPLTable.Value,
    [SdkMessageProcessingStep].[VersionNumber]
from SdkMessageProcessingStep
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AsyncAutoDeletePLTable] on 
		([AsyncAutoDeletePLTable].AttributeName = 'asyncautodelete'
		and [AsyncAutoDeletePLTable].ObjectTypeCode = 4608
		and [AsyncAutoDeletePLTable].AttributeValue = [SdkMessageProcessingStep].[AsyncAutoDelete]
		and [AsyncAutoDeletePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CanUseReadOnlyConnectionPLTable] on 
		([CanUseReadOnlyConnectionPLTable].AttributeName = 'canusereadonlyconnection'
		and [CanUseReadOnlyConnectionPLTable].ObjectTypeCode = 4608
		and [CanUseReadOnlyConnectionPLTable].AttributeValue = [SdkMessageProcessingStep].[CanUseReadOnlyConnection]
		and [CanUseReadOnlyConnectionPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InvocationSourcePLTable] on 
		([InvocationSourcePLTable].AttributeName = 'invocationsource'
		and [InvocationSourcePLTable].ObjectTypeCode = 4608
		and [InvocationSourcePLTable].AttributeValue = [SdkMessageProcessingStep].[InvocationSource]
		and [InvocationSourcePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4608
		and [IsManagedPLTable].AttributeValue = [SdkMessageProcessingStep].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ModePLTable] on 
		([ModePLTable].AttributeName = 'mode'
		and [ModePLTable].ObjectTypeCode = 4608
		and [ModePLTable].AttributeValue = [SdkMessageProcessingStep].[Mode]
		and [ModePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StagePLTable] on 
		([StagePLTable].AttributeName = 'stage'
		and [StagePLTable].ObjectTypeCode = 4608
		and [StagePLTable].AttributeValue = [SdkMessageProcessingStep].[Stage]
		and [StagePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4608
		and [StateCodePLTable].AttributeValue = [SdkMessageProcessingStep].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4608
		and [StatusCodePLTable].AttributeValue = [SdkMessageProcessingStep].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SupportedDeploymentPLTable] on 
		([SupportedDeploymentPLTable].AttributeName = 'supporteddeployment'
		and [SupportedDeploymentPLTable].ObjectTypeCode = 4608
		and [SupportedDeploymentPLTable].AttributeValue = [SdkMessageProcessingStep].[SupportedDeployment]
		and [SupportedDeploymentPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4608) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessageProcessingStep].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredSdkMessageProcessingStep] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSdkMessageProcessingStep] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
