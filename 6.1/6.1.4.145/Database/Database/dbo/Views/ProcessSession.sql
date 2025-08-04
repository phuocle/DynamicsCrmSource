


--
-- base view for ProcessSession
--
create view dbo.[ProcessSession]
 (
    -- logical attributes
    [CompletedByName],
    [CreatedByYomiName],
    [CreatedByName],
    [ExecutedByName],
    [ExecutedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [NextLinkedSessionIdName],
    [OriginatingSessionIdName],
    [PreviousLinkedSessionIdName],
    [ProcessIdName],
    [CreatedOnBehalfByName],
    [StartedByName],
    [CreatedOnBehalfByYomiName],
    [CanceledByYomiName],
    [StartedByYomiName],
    [CanceledByName],
    [CompletedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [Comments],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ErrorCode],
    [ExecutedBy],
    [ExecutedOn],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Name],
    [NextLinkedSessionId],
    [OriginatingSessionId],
    [OwningBusinessUnit],
    [PreviousLinkedSessionId],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName],
    [RegardingObjectTypeCode],
    [StartedOn],
    [StateCode],
    [StatusCode],
    [StepName],
    [CompletedOn],
    [ProcessId],
    [ProcessSessionId],
    [ProcessStageName],
    [ActivityName],
    [CompletedBy],
    [StartedBy],
    [CanceledBy],
    [CanceledOn],
    [InputArguments],
    [ProcessState],
    [ProtectionKey]
) with view_metadata as
select
    -- logical attributes
    [lk_processsession_completedby].[FullName],
    [lk_processsession_createdby].[YomiFullName],
    [lk_processsession_createdby].[FullName],
    [lk_processsession_executedby].[FullName],
    [lk_processsession_executedby].[YomiFullName],
    [lk_processsession_modifiedby].[FullName],
    [lk_processsession_modifiedby].[YomiFullName],
    [lk_processsessionbase_modifiedonbehalfby].[FullName],
    [lk_processsessionbase_modifiedonbehalfby].[YomiFullName],
    [lk_processsession_nextlinkedsessionid].[Name],
    [lk_processsession_originatingsessionid].[Name],
    [lk_processsession_previouslinkedsessionid].[Name],
    [lk_processsession_processid].[Name],
    [lk_processsessionbase_createdonbehalfby].[FullName],
    [lk_processsession_startedby].[FullName],
    [lk_processsessionbase_createdonbehalfby].[YomiFullName],
    [lk_processsession_canceledby].[YomiFullName],
    [lk_processsession_startedby].[YomiFullName],
    [lk_processsession_canceledby].[FullName],
    [lk_processsession_completedby].[YomiFullName],

    -- ownership entries
    OwnerId = [ProcessSessionBase].OwnerId,
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
    [ProcessSessionBase].[Comments],
    [ProcessSessionBase].[CreatedBy],
    [ProcessSessionBase].[CreatedOn],
    [ProcessSessionBase].[CreatedOnBehalfBy],
    [ProcessSessionBase].[ErrorCode],
    [ProcessSessionBase].[ExecutedBy],
    [ProcessSessionBase].[ExecutedOn],
    [ProcessSessionBase].[ModifiedBy],
    [ProcessSessionBase].[ModifiedOn],
    [ProcessSessionBase].[ModifiedOnBehalfBy],
    [ProcessSessionBase].[Name],
    [ProcessSessionBase].[NextLinkedSessionId],
    [ProcessSessionBase].[OriginatingSessionId],
    [ProcessSessionBase].[OwningBusinessUnit],
    [ProcessSessionBase].[PreviousLinkedSessionId],
    [ProcessSessionBase].[RegardingObjectId],
    [ProcessSessionBase].[RegardingObjectIdName],
    [ProcessSessionBase].[RegardingObjectIdYomiName],
    [ProcessSessionBase].[RegardingObjectTypeCode],
    [ProcessSessionBase].[StartedOn],
    [ProcessSessionBase].[StateCode],
    [ProcessSessionBase].[StatusCode],
    [ProcessSessionBase].[StepName],
    [ProcessSessionBase].[CompletedOn],
    [ProcessSessionBase].[ProcessId],
    [ProcessSessionBase].[ProcessSessionId],
    [ProcessSessionBase].[ProcessStageName],
    [ProcessSessionBase].[ActivityName],
    [ProcessSessionBase].[CompletedBy],
    [ProcessSessionBase].[StartedBy],
    [ProcessSessionBase].[CanceledBy],
    [ProcessSessionBase].[CanceledOn],
    [ProcessSessionBase].[InputArguments],
    [ProcessSessionBase].[ProcessState],
    [ProcessSessionBase].[ProtectionKey]
from [ProcessSessionBase] 
    left join [SystemUserBase] [lk_processsession_canceledby] with(nolock) on ([ProcessSessionBase].[CanceledBy] = [lk_processsession_canceledby].[SystemUserId])
    left join [SystemUserBase] [lk_processsession_completedby] with(nolock) on ([ProcessSessionBase].[CompletedBy] = [lk_processsession_completedby].[SystemUserId])
    left join [SystemUserBase] [lk_processsession_createdby] with(nolock) on ([ProcessSessionBase].[CreatedBy] = [lk_processsession_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_processsession_executedby] with(nolock) on ([ProcessSessionBase].[ExecutedBy] = [lk_processsession_executedby].[SystemUserId])
    left join [SystemUserBase] [lk_processsession_modifiedby] with(nolock) on ([ProcessSessionBase].[ModifiedBy] = [lk_processsession_modifiedby].[SystemUserId])
    left join [ProcessSessionBase] [lk_processsession_nextlinkedsessionid] on ([ProcessSessionBase].[NextLinkedSessionId] = [lk_processsession_nextlinkedsessionid].[ProcessSessionId])
    left join [ProcessSessionBase] [lk_processsession_originatingsessionid] on ([ProcessSessionBase].[OriginatingSessionId] = [lk_processsession_originatingsessionid].[ProcessSessionId])
    left join [ProcessSessionBase] [lk_processsession_previouslinkedsessionid] on ([ProcessSessionBase].[PreviousLinkedSessionId] = [lk_processsession_previouslinkedsessionid].[ProcessSessionId])
    left join [WorkflowBase] [lk_processsession_processid] on ([ProcessSessionBase].[ProcessId] = [lk_processsession_processid].[WorkflowId] and [lk_processsession_processid].OverwriteTime = 0 and [lk_processsession_processid].ComponentState = 0)
    left join [SystemUserBase] [lk_processsession_startedby] with(nolock) on ([ProcessSessionBase].[StartedBy] = [lk_processsession_startedby].[SystemUserId])
    left join [SystemUserBase] [lk_processsessionbase_createdonbehalfby] with(nolock) on ([ProcessSessionBase].[CreatedOnBehalfBy] = [lk_processsessionbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_processsessionbase_modifiedonbehalfby] with(nolock) on ([ProcessSessionBase].[ModifiedOnBehalfBy] = [lk_processsessionbase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([ProcessSessionBase].OwnerId = XXowner.OwnerId)
