


--
-- base view for Task
--
create view dbo.[Task]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [SLAInvokedIdName],
    [TransactionCurrencyIdName],
    [SLAName],

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
    [StageId],
    [TraversedPath],
    [CrmTaskAssignedUniqueId],
    [ActivityAdditionalParams],
    [SLAId],
    [SLAInvokedId],
    [OnHoldTime],
    [LastOnHoldTime],
    [SortDate]
) with view_metadata as
select
    -- logical attributes
    [lk_task_modifiedby].[YomiFullName],
    [lk_task_modifiedby].[FullName],
    [lk_task_createdby].[FullName],
    [lk_task_createdby].[YomiFullName],
    [lk_task_createdonbehalfby].[YomiFullName],
    [lk_task_createdonbehalfby].[FullName],
    [lk_task_modifiedonbehalfby].[FullName],
    [lk_task_modifiedonbehalfby].[YomiFullName],
    [sla_task].[Name],
    [TransactionCurrency_Task].[CurrencyName],
    [manualsla_task].[Name],

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
    [ActivityPointerBase].[StageId],
    [ActivityPointerBase].[TraversedPath],
    [ActivityPointerBase].[CrmTaskAssignedUniqueId],
    [ActivityPointerBase].[ActivityAdditionalParams],
    [ActivityPointerBase].[SLAId],
    [ActivityPointerBase].[SLAInvokedId],
    [ActivityPointerBase].[OnHoldTime],
    [ActivityPointerBase].[LastOnHoldTime],
    [ActivityPointerBase].[SortDate]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_task_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_task_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_task_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_task_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_task_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_task_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_task_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_task_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_task] on ([ActivityPointerBase].[SLAId] = [manualsla_task].[SLAId] and [manualsla_task].OverwriteTime = 0 and [manualsla_task].ComponentState = 0)
    left join [SLABase] [sla_task] on ([ActivityPointerBase].[SLAInvokedId] = [sla_task].[SLAId] and [sla_task].OverwriteTime = 0 and [sla_task].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_Task] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_Task].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4212