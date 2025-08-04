


--
-- base view for ServiceAppointment
--
create view dbo.[ServiceAppointment]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [SLAInvokedIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [TransactionCurrencyIdName],
    [SLAName],
    [SenderMailboxIdName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [SiteIdName],
    [ServiceIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ActivityAdditionalParams],
    [ActivityId],
    [ActivityTypeCode],
    [ActualDurationMinutes],
    [ActualEnd],
    [ActualStart],
    [Community],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [DeliveryLastAttemptedOn],
    [DeliveryPriorityCode],
    [Description],
    [ExchangeItemId],
    [ExchangeRate],
    [ExchangeWebLink],
    [InstanceTypeCode],
    [IsBilled],
    [IsMapiPrivate],
    [IsRegularActivity],
    [IsWorkflowCreated],
    [LastOnHoldTime],
    [LeftVoiceMail],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OnHoldTime],
    [OwningBusinessUnit],
    [PostponeActivityProcessingUntil],
    [PriorityCode],
    [ProcessId],
    [RegardingObjectId],
    [ScheduledDurationMinutes],
    [ScheduledEnd],
    [ScheduledStart],
    [SenderMailboxId],
    [SentOn],
    [SeriesId],
    [ServiceId],
    [SLAId],
    [SLAInvokedId],
    [SortDate],
    [StageId],
    [StateCode],
    [StatusCode],
    [Subject],
    [TimeZoneRuleVersionNumber],
    [TransactionCurrencyId],
    [TraversedPath],
    [UTCConversionTimeZoneCode],
    [VersionNumber],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName],
    [RegardingObjectTypeCode],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [Category],
    [IsAllDayEvent],
    [Location],
    [SiteId],
    [Subcategory],
    [SubscriptionId]
) with view_metadata as
select
    -- logical attributes
    [lk_serviceappointment_createdonbehalfby].[YomiFullName],
    [lk_serviceappointment_createdonbehalfby].[FullName],
    [lk_serviceappointment_modifiedonbehalfby].[FullName],
    [lk_serviceappointment_modifiedonbehalfby].[YomiFullName],
    [sla_serviceappointment].[Name],
    [lk_serviceappointment_createdby].[FullName],
    [lk_serviceappointment_createdby].[YomiFullName],
    [TransactionCurrency_ServiceAppointment].[CurrencyName],
    [manualsla_serviceappointment].[Name],
    [serviceappointment_mailbox_sendermailboxid].[Name],
    [lk_serviceappointment_modifiedby].[YomiFullName],
    [lk_serviceappointment_modifiedby].[FullName],
    [site_service_appointments].[Name],
    [service_service_appointments].[Name],

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
    [ActivityPointerBase].[ActivityAdditionalParams],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[Community],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[DeliveryLastAttemptedOn],
    [ActivityPointerBase].[DeliveryPriorityCode],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[ExchangeItemId],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[ExchangeWebLink],
    [ActivityPointerBase].[InstanceTypeCode],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[IsMapiPrivate],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[LastOnHoldTime],
    [ActivityPointerBase].[LeftVoiceMail],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[OnHoldTime],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[PostponeActivityProcessingUntil],
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[ProcessId],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[SenderMailboxId],
    [ActivityPointerBase].[SentOn],
    [ActivityPointerBase].[SeriesId],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[SLAId],
    [ActivityPointerBase].[SLAInvokedId],
    [ActivityPointerBase].[SortDate],
    [ActivityPointerBase].[StageId],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[TraversedPath],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[SvcApptImportSequenceNumber],
    [ActivityPointerBase].[SvcApptOverriddenCreatedOn],
    [ActivityPointerBase].[SvcApptCategory],
    [ActivityPointerBase].[SvcApptIsAllDayEvent],
    [ActivityPointerBase].[SvcApptLocation],
    [ActivityPointerBase].[SiteId],
    [ActivityPointerBase].[SvcApptSubcategory],
    [ActivityPointerBase].[SvcApptSubscriptionId]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_serviceappointment_createdby] on ([ActivityPointerBase].[CreatedBy] = [lk_serviceappointment_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceappointment_createdonbehalfby] on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_serviceappointment_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceappointment_modifiedby] on ([ActivityPointerBase].[ModifiedBy] = [lk_serviceappointment_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceappointment_modifiedonbehalfby] on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_serviceappointment_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_serviceappointment] on ([ActivityPointerBase].[SLAId] = [manualsla_serviceappointment].[SLAId] and [manualsla_serviceappointment].OverwriteTime = 0 and [manualsla_serviceappointment].ComponentState = 0)
    left join [ServiceBase] [service_service_appointments] on ([ActivityPointerBase].[ServiceId] = [service_service_appointments].[ServiceId])
    left join [MailboxBase] [serviceappointment_mailbox_sendermailboxid] on ([ActivityPointerBase].[SenderMailboxId] = [serviceappointment_mailbox_sendermailboxid].[MailboxId])
    left join [SiteBase] [site_service_appointments] on ([ActivityPointerBase].[SiteId] = [site_service_appointments].[SiteId])
    left join [SLABase] [sla_serviceappointment] on ([ActivityPointerBase].[SLAInvokedId] = [sla_serviceappointment].[SLAId] and [sla_serviceappointment].OverwriteTime = 0 and [sla_serviceappointment].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_ServiceAppointment] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_ServiceAppointment].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4214