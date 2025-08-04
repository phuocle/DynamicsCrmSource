


--
-- base view for Task
--
create view dbo.[Task]
 (
    -- logical attributes
    [CreatedByName],
    [TransactionCurrencyIdName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [Subject],
    [ActualEnd],
    [ScheduledStart],
    [RegardingObjectId],
    [ScheduledDurationMinutes],
    [ActualStart],
    [StateCode],
    [ActivityId],
    [Category],
    [CreatedOn],
    [OwningBusinessUnit],
    [IsWorkflowCreated],
    [CreatedBy],
    [ModifiedBy],
    [Subcategory],
    [ScheduledEnd],
    [Description],
    [PercentComplete],
    [SubscriptionId],
    [PriorityCode],
    [VersionNumber],
    [ServiceId],
    [ActualDurationMinutes],
    [ModifiedOn],
    [StatusCode],
    [IsBilled],
    [RegardingObjectIdName],
    [RegardingObjectTypeCode],
    [ImportSequenceNumber],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [OverriddenCreatedOn],
    [RegardingObjectIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ProcessId],
    [StageId]
) with view_metadata as
select
    -- logical attributes
    [lk_task_createdby].[FullName],
    [TransactionCurrency_Task].[CurrencyName],
    [lk_task_modifiedby].[YomiFullName],
    [lk_task_modifiedonbehalfby].[FullName],
    [lk_task_modifiedby].[FullName],
    [lk_task_modifiedonbehalfby].[YomiFullName],
    [lk_task_createdonbehalfby].[YomiFullName],
    [lk_task_createdonbehalfby].[FullName],
    [lk_task_createdby].[YomiFullName],

    -- ownership entries
    OwnerId = [ActivityPointerBase].OwnerId,
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
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[TaskCategory],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[TaskSubcategory],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[PercentComplete],
    [ActivityPointerBase].[TaskSubscriptionId],
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[TaskImportSequenceNumber],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[TaskOverriddenCreatedOn],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[ProcessId],
    [ActivityPointerBase].[StageId]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_task_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_task_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_task_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_task_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_task_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_task_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_task_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_task_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Task] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_Task].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4212