


--
-- logical view for ProcessTriggerLogical
--
create view dbo.[ProcessTriggerLogical]
 (
    -- logical attributes
    [OwningBusinessUnit],
    [OwningUser],
    [ProcessIdName],
    [CreatedByYomiName],
    [OwnerIdType],
    [OwnerId],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [FormIdName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [Event],
    [ControlName],
    [ControlType],
    [FormId],
    [PrimaryEntityTypeCode],
    [VersionNumber],
    [SupportingSolutionId],
    [SolutionId],
    [ProcessTriggerIdUnique],
    [ProcessTriggerId],
    [ProcessId],
    [OverwriteTime],
    [ModifiedOnBehalfBy],
    [ModifiedOn],
    [ModifiedBy],
    [IsManaged],
    [IsCustomizable],
    [CreatedOnBehalfBy],
    [CreatedOn],
    [CreatedBy],
    [ComponentState]
) with view_metadata as
select
    -- logical attributes
    [process_processtrigger].[OwningBusinessUnit],
    case when [process_processtrigger].OwnerIdType = 8
    then [process_processtrigger].OwnerId
    else null
    end,
    [process_processtrigger].[Name],
    [lk_processtriggerbase_createdby].[FullName],
    [process_processtrigger].[OwnerIdType],
    [process_processtrigger].[OwnerId],
    [lk_processtriggerbase_createdonbehalfby].[FullName],
    [lk_processtriggerbase_modifiedonbehalfby].[FullName],
    [lk_processtriggerbase_modifiedby].[FullName],
    [lk_processtriggerbase_modifiedonbehalfby].[FullName],
    [lk_processtriggerbase_modifiedby].[FullName],
    [lk_processtriggerbase_createdby].[FullName],
    [processtrigger_systemform].[Name],
    [lk_processtriggerbase_createdonbehalfby].[FullName],

    -- physical attribute
    [T1].[Event],
    [T1].[ControlName],
    [T1].[ControlType],
    [T1].[FormId],
    [T1].[PrimaryEntityTypeCode],
    [T1].[VersionNumber],
    [T1].[SupportingSolutionId],
    [T1].[SolutionId],
    [T1].[ProcessTriggerIdUnique],
    [T1].[ProcessTriggerId],
    [T1].[ProcessId],
    [T1].[OverwriteTime],
    [T1].[ModifiedOnBehalfBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[CreatedOnBehalfBy],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ComponentState]
from [ProcessTriggerBase] [T1]
    left join [SystemUserBase] [lk_processtriggerbase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_processtriggerbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_processtriggerbase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_processtriggerbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_processtriggerbase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_processtriggerbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_processtriggerbase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_processtriggerbase_modifiedonbehalfby].[SystemUserId])
    left join [WorkflowBase] [process_processtrigger] on ([T1].[ProcessId] = [process_processtrigger].[WorkflowId] and [process_processtrigger].OverwriteTime = 0 and [process_processtrigger].ComponentState = 0)
    left join [SystemFormBase] [processtrigger_systemform] on ([T1].[FormId] = [processtrigger_systemform].[FormId] and [processtrigger_systemform].OverwriteTime = 0 and [processtrigger_systemform].ComponentState = 0)
where T1.OverwriteTime = 0