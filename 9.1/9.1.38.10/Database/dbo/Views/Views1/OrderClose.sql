


--
-- base view for OrderClose
--
create view dbo.[OrderClose]
 (
    -- logical attributes
    [CreatedByExternalPartyName],
    [CreatedByExternalPartyYomiName],
    [ModifiedByExternalPartyName],
    [ModifiedByExternalPartyYomiName],
    [ServiceIdName],
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
    [OrderNumber],
    [Revision],
    [SalesOrderId],
    [Subcategory],
    [SalesOrderIdName],
    [SalesOrderIdType],
    [CreatedByExternalParty],
    [ModifiedByExternalParty]
) with view_metadata as
select
    -- logical attributes
    [lk_externalparty_orderclose_createdby].[FullName],
    [lk_externalparty_orderclose_createdby].[YomiFullName],
    [lk_externalparty_orderclose_modifiedby].[FullName],
    [lk_externalparty_orderclose_modifiedby].[YomiFullName],
    [service_orderclose].[Name],
    [lk_orderclose_createdonbehalfby].[YomiFullName],
    [lk_orderclose_createdonbehalfby].[FullName],
    [lk_orderclose_modifiedonbehalfby].[FullName],
    [lk_orderclose_modifiedonbehalfby].[YomiFullName],
    [orderclose_sla_slainvokedid].[Name],
    [lk_orderclose_createdby].[FullName],
    [lk_orderclose_createdby].[YomiFullName],
    [orderclose_transactioncurrency_transactioncurrencyid].[CurrencyName],
    [orderclose_sla_slaid].[Name],
    [orderclose_mailbox_sendermailboxid].[Name],
    [lk_orderclose_modifiedby].[YomiFullName],
    [lk_orderclose_modifiedby].[FullName],

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
    [ActivityPointerBase].[OrdCloseImportSequenceNumber],
    [ActivityPointerBase].[OrdCloseOverriddenCreatedOn],
    [ActivityPointerBase].[OrdCloseCategory],
    [ActivityPointerBase].[OrderNumber],
    [ActivityPointerBase].[OrdCloseRevision],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[OrdCloseSubcategory],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[CreatedByExternalParty],
    [ActivityPointerBase].[ModifiedByExternalParty]
from [ActivityPointerBase] 
    left join [ExternalPartyBase] [lk_externalparty_orderclose_createdby] on ([ActivityPointerBase].[CreatedByExternalParty] = [lk_externalparty_orderclose_createdby].[ExternalPartyId])
    left join [ExternalPartyBase] [lk_externalparty_orderclose_modifiedby] on ([ActivityPointerBase].[ModifiedByExternalParty] = [lk_externalparty_orderclose_modifiedby].[ExternalPartyId])
    left join [SystemUserBase] [lk_orderclose_createdby] on ([ActivityPointerBase].[CreatedBy] = [lk_orderclose_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_orderclose_createdonbehalfby] on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_orderclose_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_orderclose_modifiedby] on ([ActivityPointerBase].[ModifiedBy] = [lk_orderclose_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_orderclose_modifiedonbehalfby] on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_orderclose_modifiedonbehalfby].[SystemUserId])
    left join [MailboxBase] [orderclose_mailbox_sendermailboxid] on ([ActivityPointerBase].[SenderMailboxId] = [orderclose_mailbox_sendermailboxid].[MailboxId])
    left join [SLABase] [orderclose_sla_slaid] on ([ActivityPointerBase].[SLAId] = [orderclose_sla_slaid].[SLAId] and [orderclose_sla_slaid].OverwriteTime = 0 and [orderclose_sla_slaid].ComponentState = 0)
    left join [SLABase] [orderclose_sla_slainvokedid] on ([ActivityPointerBase].[SLAInvokedId] = [orderclose_sla_slainvokedid].[SLAId] and [orderclose_sla_slainvokedid].OverwriteTime = 0 and [orderclose_sla_slainvokedid].ComponentState = 0)
    left join [TransactionCurrencyBase] [orderclose_transactioncurrency_transactioncurrencyid] on ([ActivityPointerBase].[TransactionCurrencyId] = [orderclose_transactioncurrency_transactioncurrencyid].[TransactionCurrencyId])
    left join [ServiceBase] [service_orderclose] on ([ActivityPointerBase].[ServiceId] = [service_orderclose].[ServiceId])
    left join OwnerBase XXowner on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4209