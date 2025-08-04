


--
-- base view for ActivityPointer
--
create view dbo.[ActivityPointer]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [SenderMailboxIdName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ServiceIdName],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],
    [TransactionCurrencyIdName],
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
    [OwningBusinessUnit],
    [ActualEnd],
    [VersionNumber],
    [ActivityId],
    [IsBilled],
    [CreatedBy],
    [Description],
    [ModifiedOn],
    [ServiceId],
    [ActivityTypeCode],
    [StateCode],
    [ScheduledEnd],
    [ScheduledDurationMinutes],
    [ActualDurationMinutes],
    [StatusCode],
    [ActualStart],
    [CreatedOn],
    [PriorityCode],
    [RegardingObjectId],
    [Subject],
    [IsWorkflowCreated],
    [ScheduledStart],
    [ModifiedBy],
    [RegardingObjectTypeCode],
    [RegardingObjectIdName],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [RegardingObjectIdYomiName],
    [InstanceTypeCode],
    [SeriesId],
    [IsRegularActivity],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [TransactionCurrencyId],
    [ExchangeRate],
    [LeftVoiceMail],
    [Community],
    [IsMapiPrivate],
    [DeliveryPriorityCode],
    [SentOn],
    [DeliveryLastAttemptedOn],
    [SenderMailboxId],
    [PostponeActivityProcessingUntil],
    [ProcessId],
    [StageId]
) with view_metadata as
select
    -- logical attributes
    [lk_activitypointer_createdonbehalfby].[YomiFullName],
    [lk_activitypointer_createdby].[FullName],
    [lk_activitypointer_modifiedonbehalfby].[FullName],
    [activitypointer_sendermailboxid_mailbox].[Name],
    [lk_activitypointer_modifiedby].[YomiFullName],
    [lk_activitypointer_modifiedonbehalfby].[YomiFullName],
    [service_activity_pointers].[Name],
    [lk_activitypointer_createdonbehalfby].[FullName],
    [lk_activitypointer_createdby].[YomiFullName],
    [TransactionCurrency_ActivityPointer].[CurrencyName],
    [lk_activitypointer_modifiedby].[FullName],

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
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[InstanceTypeCode],
    [ActivityPointerBase].[SeriesId],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[LeftVoiceMail],
    [ActivityPointerBase].[Community],
    [ActivityPointerBase].[IsMapiPrivate],
    [ActivityPointerBase].[DeliveryPriorityCode],
    [ActivityPointerBase].[SentOn],
    [ActivityPointerBase].[DeliveryLastAttemptedOn],
    [ActivityPointerBase].[SenderMailboxId],
    [ActivityPointerBase].[PostponeActivityProcessingUntil],
    [ActivityPointerBase].[ProcessId],
    [ActivityPointerBase].[StageId]
from [ActivityPointerBase] 
    left join [MailboxBase] [activitypointer_sendermailboxid_mailbox] on ([ActivityPointerBase].[SenderMailboxId] = [activitypointer_sendermailboxid_mailbox].[MailboxId])
    left join [SystemUserBase] [lk_activitypointer_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_activitypointer_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_activitypointer_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_activitypointer_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_activitypointer_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_activitypointer_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_activitypointer_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_activitypointer_modifiedonbehalfby].[SystemUserId])
    left join [ServiceBase] [service_activity_pointers] on ([ActivityPointerBase].[ServiceId] = [service_activity_pointers].[ServiceId])
    left join [TransactionCurrencyBase] [TransactionCurrency_ActivityPointer] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_ActivityPointer].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
