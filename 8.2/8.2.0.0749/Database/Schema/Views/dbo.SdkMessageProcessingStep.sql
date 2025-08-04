SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for SdkMessageProcessingStep
--
create view [dbo].[SdkMessageProcessingStep]
 (
    -- logical attributes
    [CreatedByName],
    [ImpersonatingUserIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [PluginTypeIdName],
    [ModifiedByName],
    [SdkMessageIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    EventHandlerName,

    -- physical attributes
    [CreatedOn],
    [Configuration],
    [SupportedDeployment],
    [PluginTypeId],
    [Rank],
    [SdkMessageId],
    [ModifiedOn],
    [SdkMessageProcessingStepId],
    [Stage],
    [CreatedBy],
    [OrganizationId],
    [SdkMessageProcessingStepIdUnique],
    [FilteringAttributes],
    [CustomizationLevel],
    [ModifiedBy],
    [StateCode],
    [SdkMessageProcessingStepSecureConfigId],
    [Description],
    [VersionNumber],
    [Mode],
    [SdkMessageFilterId],
    [StatusCode],
    [ImpersonatingUserId],
    [InvocationSource],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [AsyncAutoDelete],
    [EventHandler],
    [EventHandlerTypeCode],
    [ComponentState],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [IsManaged],
    [Name],
    [IsCustomizable],
    [IsHidden],
    [IntroducedVersion],
    [CanUseReadOnlyConnection]
) with view_metadata as
select
    -- logical attributes
    [createdby_sdkmessageprocessingstep].[FullName],
    [impersonatinguserid_sdkmessageprocessingstep].[FullName],
    [createdonbehalfby_sdkmessageprocessingstep].[FullName],
    [createdonbehalfby_sdkmessageprocessingstep].[YomiFullName],
    [plugintypeid_sdkmessageprocessingstep].[FriendlyName],
    [modifiedby_sdkmessageprocessingstep].[FullName],
    [sdkmessageid_sdkmessageprocessingstep].[Name],
    [modifiedonbehalfby_sdkmessageprocessingstep].[YomiFullName],
    [modifiedonbehalfby_sdkmessageprocessingstep].[FullName],
    case EventHandlerTypeCode when 4602 then plugintype_sdkmessageprocessingstep.Name when 4618 then serviceendpoint_sdkmessageprocessingstep.Name else null end,

    -- physical attribute
    [T1].[CreatedOn],
    [T1].[Configuration],
    [T1].[SupportedDeployment],
    [T1].[PluginTypeId],
    [T1].[Rank],
    [T1].[SdkMessageId],
    [T1].[ModifiedOn],
    [T1].[SdkMessageProcessingStepId],
    [T1].[Stage],
    [T1].[CreatedBy],
    [T1].[OrganizationId],
    [T1].[SdkMessageProcessingStepIdUnique],
    [T1].[FilteringAttributes],
    [T1].[CustomizationLevel],
    [T1].[ModifiedBy],
    [T1].[StateCode],
    [T1].[SdkMessageProcessingStepSecureConfigId],
    [T1].[Description],
    [T1].[VersionNumber],
    [T1].[Mode],
    [T1].[SdkMessageFilterId],
    [T1].[StatusCode],
    [T1].[ImpersonatingUserId],
    [T1].[InvocationSource],
    [T1].[ModifiedOnBehalfBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[AsyncAutoDelete],
    [T1].[EventHandler],
    [T1].[EventHandlerTypeCode],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[IsManaged],
    [T1].[Name],
    [T1].[IsCustomizable],
    [T1].[IsHidden],
    [T1].[IntroducedVersion],
    [T1].[CanUseReadOnlyConnection]
from [SdkMessageProcessingStepBase] [T1]
    left join [SystemUserBase] [createdby_sdkmessageprocessingstep] with(nolock) on ([T1].[CreatedBy] = [createdby_sdkmessageprocessingstep].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfby_sdkmessageprocessingstep] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessageprocessingstep].[SystemUserId])
    left join [SystemUserBase] [impersonatinguserid_sdkmessageprocessingstep] with(nolock) on ([T1].[ImpersonatingUserId] = [impersonatinguserid_sdkmessageprocessingstep].[SystemUserId])
    left join [SystemUserBase] [modifiedby_sdkmessageprocessingstep] with(nolock) on ([T1].[ModifiedBy] = [modifiedby_sdkmessageprocessingstep].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessageprocessingstep] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessageprocessingstep].[SystemUserId])
    left join [PluginTypeBase] [plugintype_sdkmessageprocessingstep] on ([T1].[EventHandler] = [plugintype_sdkmessageprocessingstep].[PluginTypeId] and [plugintype_sdkmessageprocessingstep].OverwriteTime = 0 and [plugintype_sdkmessageprocessingstep].ComponentState = 0)
    left join [PluginTypeBase] [plugintypeid_sdkmessageprocessingstep] on ([T1].[PluginTypeId] = [plugintypeid_sdkmessageprocessingstep].[PluginTypeId] and [plugintypeid_sdkmessageprocessingstep].OverwriteTime = 0 and [plugintypeid_sdkmessageprocessingstep].ComponentState = 0)
    left join [SdkMessageBase] [sdkmessageid_sdkmessageprocessingstep] on ([T1].[SdkMessageId] = [sdkmessageid_sdkmessageprocessingstep].[SdkMessageId])
    left join [ServiceEndpointBase] [serviceendpoint_sdkmessageprocessingstep] on ([T1].[EventHandler] = [serviceendpoint_sdkmessageprocessingstep].[ServiceEndpointId] and [serviceendpoint_sdkmessageprocessingstep].OverwriteTime = 0 and [serviceendpoint_sdkmessageprocessingstep].ComponentState = 0)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
