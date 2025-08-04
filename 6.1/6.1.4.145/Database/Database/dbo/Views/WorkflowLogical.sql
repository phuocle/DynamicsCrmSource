


--
-- logical view for WorkflowLogical
--
create view dbo.[WorkflowLogical]
 (
    -- logical attributes
    [ParentWorkflowIdName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [ActiveWorkflowIdName],
    [OwningBusinessUnitName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [OnDemand],
    [Activities],
    [PluginTypeId],
    [CreatedOn],
    [Type],
    [WorkflowId],
    [ActiveWorkflowId],
    [ParentWorkflowId],
    [UIData],
    [PrimaryEntity],
    [ModifiedOn],
    [AsyncAutoDelete],
    [IsCrmUIWorkflow],
    [Subprocess],
    [Scope],
    [StatusCode],
    [ModifiedBy],
    [Rules],
    [Description],
    [CreatedBy],
    [Name],
    [OwningBusinessUnit],
    [StateCode],
    [WorkflowIdUnique],
    [SupportingSolutionId],
    [SolutionId],
    [OverwriteTime],
    [ComponentState],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [Xaml],
    [TriggerOnDelete],
    [RendererObjectTypeCode],
    [TriggerOnCreate],
    [TriggerOnUpdateAttributeList],
    [Category],
    [LanguageCode],
    [IsManaged],
    [IsCustomizable],
    [InputParameters],
    [ClientData],
    [VersionNumber],
    [CreateStage],
    [UpdateStage],
    [DeleteStage],
    [Rank],
    [RunAs],
    [SyncWorkflowLogOnFailure],
    [UniqueName],
    [IsTransacted],
    [SdkMessageId],
    [ProcessOrder],
    [Mode],
    [ProcessRoleAssignment],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [workflow_parent_workflow].[Name],
    [workflow_modifiedby].[YomiFullName],
    [workflow_createdonbehalfby].[YomiFullName],
    [workflow_modifiedonbehalfby].[FullName],
    [workflow_modifiedonbehalfby].[YomiFullName],
    [workflow_createdby].[FullName],
    [workflow_createdby].[YomiFullName],
    [workflow_modifiedby].[FullName],
    [workflow_createdonbehalfby].[FullName],
    [workflow_active_workflow].[Name],
    [business_unit_workflow].[Name],

    -- ownership entries
    OwnerId = [T1].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [T1].[OnDemand],
    [T1].[Activities],
    [T1].[PluginTypeId],
    [T1].[CreatedOn],
    [T1].[Type],
    [T1].[WorkflowId],
    [T1].[ActiveWorkflowId],
    [T1].[ParentWorkflowId],
    [T1].[UIData],
    [T1].[PrimaryEntity],
    [T1].[ModifiedOn],
    [T1].[AsyncAutoDelete],
    [T1].[IsCrmUIWorkflow],
    [T1].[Subprocess],
    [T1].[Scope],
    [T1].[StatusCode],
    [T1].[ModifiedBy],
    [T1].[Rules],
    [T1].[Description],
    [T1].[CreatedBy],
    [T1].[Name],
    [T1].[OwningBusinessUnit],
    [T1].[StateCode],
    [T1].[WorkflowIdUnique],
    [T1].[SupportingSolutionId],
    [T1].[SolutionId],
    [T1].[OverwriteTime],
    [T1].[ComponentState],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[Xaml],
    [T1].[TriggerOnDelete],
    [T1].[RendererObjectTypeCode],
    [T1].[TriggerOnCreate],
    [T1].[TriggerOnUpdateAttributeList],
    [T1].[Category],
    [T1].[LanguageCode],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[InputParameters],
    [T1].[ClientData],
    [T1].[VersionNumber],
    [T1].[CreateStage],
    [T1].[UpdateStage],
    [T1].[DeleteStage],
    [T1].[Rank],
    [T1].[RunAs],
    [T1].[SyncWorkflowLogOnFailure],
    [T1].[UniqueName],
    [T1].[IsTransacted],
    [T1].[SdkMessageId],
    [T1].[ProcessOrder],
    [T1].[Mode],
    [T1].[ProcessRoleAssignment],
    [T1].[IntroducedVersion]
from [WorkflowBase] [T1]
    left join [BusinessUnitBase] [business_unit_workflow] on ([T1].[OwningBusinessUnit] = [business_unit_workflow].[BusinessUnitId])
    left join [WorkflowBase] [workflow_active_workflow] on ([T1].[ActiveWorkflowId] = [workflow_active_workflow].[WorkflowId] and [workflow_active_workflow].OverwriteTime = 0 and [workflow_active_workflow].ComponentState = 0)
    left join [SystemUserBase] [workflow_createdby] with(nolock) on ([T1].[CreatedBy] = [workflow_createdby].[SystemUserId])
    left join [SystemUserBase] [workflow_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [workflow_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [workflow_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [workflow_modifiedby].[SystemUserId])
    left join [SystemUserBase] [workflow_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [workflow_modifiedonbehalfby].[SystemUserId])
    left join [WorkflowBase] [workflow_parent_workflow] on ([T1].[ParentWorkflowId] = [workflow_parent_workflow].[WorkflowId] and [workflow_parent_workflow].OverwriteTime = 0 and [workflow_parent_workflow].ComponentState = 0)
    left join OwnerBase XXowner with(nolock) on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0