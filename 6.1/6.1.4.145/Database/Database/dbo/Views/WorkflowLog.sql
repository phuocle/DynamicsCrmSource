


--
-- base view for WorkflowLog
--
create view dbo.[WorkflowLog]
 (
    -- logical attributes
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],

    [OwningUser],
    [OwningTeam],
    [OwnerId],
    [OwnerIdType],
    [OwningBusinessUnit],


    -- physical attributes
    [AsyncOperationId],
    [ModifiedBy],
    [CompletedOn],
    [WorkflowLogId],
    [Description],
    [Message],
    [CreatedBy],
    [StageName],
    [CreatedOn],
    [StepName],
    [ModifiedOn],
    [RegardingObjectId],
    [Status],
    [ErrorCode],
    [ActivityName],
    [AsyncOperationIdName],
    [RegardingObjectIdName],
    [RegardingObjectTypeCode],
    [RegardingObjectIdYomiName],
    [ChildWorkflowInstanceId],
    [ChildWorkflowInstanceIdName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ObjectTypeCode],
    [ChildWorkflowInstanceObjectTypeCode],
    [InteractionActivityResult]
) with view_metadata as
select
    -- logical attributes
    [lk_workflowlog_modifiedby].[FullName],
    [lk_workflowlog_createdonbehalfby].[FullName],
    [lk_workflowlog_createdby].[FullName],
    [lk_workflowlog_createdonbehalfby].[YomiFullName],
    [lk_workflowlog_createdby].[YomiFullName],
    [lk_workflowlog_modifiedby].[YomiFullName],
    [lk_workflowlog_modifiedonbehalfby].[YomiFullName],
    [lk_workflowlog_modifiedonbehalfby].[FullName],

    OwningUser = case	
    			when coalesce(lk_workflowlog_asyncoperations.OwnerIdType, lk_workflowlog_processsession.OwnerIdType) = 8 then
    					coalesce(lk_workflowlog_asyncoperations.OwnerId, lk_workflowlog_processsession.OwnerId)
    			else null
    			end,
    OwningTeam = case	
    			when coalesce(lk_workflowlog_asyncoperations.OwnerIdType, lk_workflowlog_processsession.OwnerIdType) = 9 then
    					coalesce(lk_workflowlog_asyncoperations.OwnerId, lk_workflowlog_processsession.OwnerId)
    			else null
    			end,
    OwnerId     = coalesce(lk_workflowlog_asyncoperations.OwnerId, lk_workflowlog_processsession.OwnerId), 
    OwnerIdType = coalesce(lk_workflowlog_asyncoperations.OwnerIdType, lk_workflowlog_processsession.OwnerIdType), 
    OwningBusinessUnit = coalesce(lk_workflowlog_asyncoperations.OwningBusinessUnit, lk_workflowlog_processsession.OwningBusinessUnit),

    -- physical attribute
    [WorkflowLogBase].[AsyncOperationId],
    [WorkflowLogBase].[ModifiedBy],
    [WorkflowLogBase].[CompletedOn],
    [WorkflowLogBase].[WorkflowLogId],
    [WorkflowLogBase].[Description],
    [WorkflowLogBase].[Message],
    [WorkflowLogBase].[CreatedBy],
    [WorkflowLogBase].[StageName],
    [WorkflowLogBase].[CreatedOn],
    [WorkflowLogBase].[StepName],
    [WorkflowLogBase].[ModifiedOn],
    [WorkflowLogBase].[RegardingObjectId],
    [WorkflowLogBase].[Status],
    [WorkflowLogBase].[ErrorCode],
    [WorkflowLogBase].[ActivityName],
    [WorkflowLogBase].[AsyncOperationIdName],
    [WorkflowLogBase].[RegardingObjectIdName],
    [WorkflowLogBase].[RegardingObjectTypeCode],
    [WorkflowLogBase].[RegardingObjectIdYomiName],
    [WorkflowLogBase].[ChildWorkflowInstanceId],
    [WorkflowLogBase].[ChildWorkflowInstanceIdName],
    [WorkflowLogBase].[CreatedOnBehalfBy],
    [WorkflowLogBase].[ModifiedOnBehalfBy],
    [WorkflowLogBase].[ObjectTypeCode],
    [WorkflowLogBase].[ChildWorkflowInstanceObjectTypeCode],
    [WorkflowLogBase].[InteractionActivityResult]
from [WorkflowLogBase] 
    left join [AsyncOperationBase] [lk_workflowlog_asyncoperations] on ([WorkflowLogBase].[AsyncOperationId] = [lk_workflowlog_asyncoperations].[AsyncOperationId] and [WorkflowLogBase].[ObjectTypeCode]  =  4700)
    left join [SystemUserBase] [lk_workflowlog_createdby] with(nolock) on ([WorkflowLogBase].[CreatedBy] = [lk_workflowlog_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_workflowlog_createdonbehalfby] with(nolock) on ([WorkflowLogBase].[CreatedOnBehalfBy] = [lk_workflowlog_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_workflowlog_modifiedby] with(nolock) on ([WorkflowLogBase].[ModifiedBy] = [lk_workflowlog_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_workflowlog_modifiedonbehalfby] with(nolock) on ([WorkflowLogBase].[ModifiedOnBehalfBy] = [lk_workflowlog_modifiedonbehalfby].[SystemUserId])
    left join [ProcessSessionBase] [lk_workflowlog_processsession] on ([WorkflowLogBase].[AsyncOperationId] = [lk_workflowlog_processsession].[ProcessSessionId] and [WorkflowLogBase].[ObjectTypeCode]  =  4710)
