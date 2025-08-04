


--
-- base view for AsyncOperation
--
create view dbo.[AsyncOperation]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [WorkflowActivationIdName],
    [ModifiedByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [MessageName],
    [Depth],
    [PrimaryEntityType],
    [Data],
    [RegardingObjectId],
    [WorkflowStageName],
    [OperationType],
    [DependencyToken],
    [RecurrencePattern],
    [Name],
    [PostponeUntil],
    [WorkflowState],
    [TimeZoneRuleVersionNumber],
    [OwningBusinessUnit],
    [IsWaitingForEvent],
    [CreatedBy],
    [ErrorCode],
    [ModifiedBy],
    [CorrelationId],
    [RecurrenceStartTime],
    [StatusCode],
    [AsyncOperationId],
    [Sequence],
    [RequestId],
    [WorkflowIsBlocked],
    [ModifiedOn],
    [Message],
    [StartedOn],
    [HostId],
    [StateCode],
    [WorkflowActivationId],
    [CompletedOn],
    [CorrelationUpdatedTime],
    [UTCConversionTimeZoneCode],
    [RetryCount],
    [CreatedOn],
    [RegardingObjectIdName],
    [RegardingObjectTypeCode],
    [RegardingObjectIdYomiName],
    [FriendlyMessage],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningExtensionId],
    [OwningExtensionIdName],
    [OwningExtensionTypeCode],
    [ExecutionTimeSpan],
    [Subtype]
) with view_metadata as
select
    -- logical attributes
    [lk_asyncoperation_createdby].[FullName],
    [lk_asyncoperation_modifiedonbehalfby].[FullName],
    [lk_asyncoperation_modifiedonbehalfby].[YomiFullName],
    [lk_asyncoperation_createdonbehalfby].[YomiFullName],
    [lk_asyncoperation_createdby].[YomiFullName],
    [lk_asyncoperation_createdonbehalfby].[FullName],
    [lk_asyncoperation_modifiedby].[YomiFullName],
    [lk_asyncoperation_workflowactivationid].[Name],
    [lk_asyncoperation_modifiedby].[FullName],

    -- ownership entries
    OwnerId = [AsyncOperationBase].OwnerId,
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
    [AsyncOperationBase].[MessageName],
    [AsyncOperationBase].[Depth],
    [AsyncOperationBase].[PrimaryEntityType],
    [AsyncOperationBase].[Data],
    [AsyncOperationBase].[RegardingObjectId],
    [AsyncOperationBase].[WorkflowStageName],
    [AsyncOperationBase].[OperationType],
    [AsyncOperationBase].[DependencyToken],
    [AsyncOperationBase].[RecurrencePattern],
    [AsyncOperationBase].[Name],
    [AsyncOperationBase].[PostponeUntil],
    [AsyncOperationBase].[WorkflowState],
    [AsyncOperationBase].[TimeZoneRuleVersionNumber],
    [AsyncOperationBase].[OwningBusinessUnit],
    [AsyncOperationBase].[IsWaitingForEvent],
    [AsyncOperationBase].[CreatedBy],
    [AsyncOperationBase].[ErrorCode],
    [AsyncOperationBase].[ModifiedBy],
    [AsyncOperationBase].[CorrelationId],
    [AsyncOperationBase].[RecurrenceStartTime],
    [AsyncOperationBase].[StatusCode],
    [AsyncOperationBase].[AsyncOperationId],
    [AsyncOperationBase].[Sequence],
    [AsyncOperationBase].[RequestId],
    [AsyncOperationBase].[WorkflowIsBlocked],
    [AsyncOperationBase].[ModifiedOn],
    [AsyncOperationBase].[Message],
    [AsyncOperationBase].[StartedOn],
    [AsyncOperationBase].[HostId],
    [AsyncOperationBase].[StateCode],
    [AsyncOperationBase].[WorkflowActivationId],
    [AsyncOperationBase].[CompletedOn],
    [AsyncOperationBase].[CorrelationUpdatedTime],
    [AsyncOperationBase].[UTCConversionTimeZoneCode],
    [AsyncOperationBase].[RetryCount],
    [AsyncOperationBase].[CreatedOn],
    [AsyncOperationBase].[RegardingObjectIdName],
    [AsyncOperationBase].[RegardingObjectTypeCode],
    [AsyncOperationBase].[RegardingObjectIdYomiName],
    [AsyncOperationBase].[FriendlyMessage],
    [AsyncOperationBase].[CreatedOnBehalfBy],
    [AsyncOperationBase].[ModifiedOnBehalfBy],
    [AsyncOperationBase].[OwningExtensionId],
    [AsyncOperationBase].[OwningExtensionIdName],
    [AsyncOperationBase].[OwningExtensionTypeCode],
    [AsyncOperationBase].[ExecutionTimeSpan],
    [AsyncOperationBase].[Subtype]
from [AsyncOperationBase] 
    left join [SystemUserBase] [lk_asyncoperation_createdby] with(nolock) on ([AsyncOperationBase].[CreatedBy] = [lk_asyncoperation_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_asyncoperation_createdonbehalfby] with(nolock) on ([AsyncOperationBase].[CreatedOnBehalfBy] = [lk_asyncoperation_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_asyncoperation_modifiedby] with(nolock) on ([AsyncOperationBase].[ModifiedBy] = [lk_asyncoperation_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_asyncoperation_modifiedonbehalfby] with(nolock) on ([AsyncOperationBase].[ModifiedOnBehalfBy] = [lk_asyncoperation_modifiedonbehalfby].[SystemUserId])
    left join [WorkflowBase] [lk_asyncoperation_workflowactivationid] on ([AsyncOperationBase].[WorkflowActivationId] = [lk_asyncoperation_workflowactivationid].[WorkflowId] and [lk_asyncoperation_workflowactivationid].OverwriteTime = 0 and [lk_asyncoperation_workflowactivationid].ComponentState = 0)
    left join OwnerBase XXowner with(nolock) on ([AsyncOperationBase].OwnerId = XXowner.OwnerId)
