


--
-- base view for WorkflowWaitSubscription
--
create view dbo.[WorkflowWaitSubscription]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [OwningBusinessUnit],
    [OwningUser],

    -- physical attributes
    [EntityId],
    [WorkflowWaitSubscriptionId],
    [AsyncOperationId],
    [Data],
    [ModifiedOn],
    [EntityName],
    [IsModified],
    [IsDeleted]
) with view_metadata as
select
    -- logical attributes
    [asyncoperation_workflowwaitsubscription].[OwnerId],
    [asyncoperation_workflowwaitsubscription].[OwnerIdType],
    [asyncoperation_workflowwaitsubscription].[OwningBusinessUnit],
    case when [asyncoperation_workflowwaitsubscription].OwnerIdType = 8
    then [asyncoperation_workflowwaitsubscription].OwnerId
    else null
    end,

    -- physical attribute
    [WorkflowWaitSubscriptionBase].[EntityId],
    [WorkflowWaitSubscriptionBase].[WorkflowWaitSubscriptionId],
    [WorkflowWaitSubscriptionBase].[AsyncOperationId],
    [WorkflowWaitSubscriptionBase].[Data],
    [WorkflowWaitSubscriptionBase].[ModifiedOn],
    [WorkflowWaitSubscriptionBase].[EntityName],
    [WorkflowWaitSubscriptionBase].[IsModified],
    [WorkflowWaitSubscriptionBase].[IsDeleted]
from [WorkflowWaitSubscriptionBase] 
    left join [AsyncOperationBase] [asyncoperation_workflowwaitsubscription] on ([WorkflowWaitSubscriptionBase].[AsyncOperationId] = [asyncoperation_workflowwaitsubscription].[AsyncOperationId])
