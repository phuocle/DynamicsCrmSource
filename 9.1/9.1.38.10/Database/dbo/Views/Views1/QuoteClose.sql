


--
-- base view for QuoteClose
--
create view dbo.[QuoteClose]
 (
    -- logical attributes
    [CreatedByExternalPartyYomiName],
    [CreatedByExternalPartyName],
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
    [ModifiedByExternalPartyName],
    [ModifiedByExternalPartyYomiName],

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
    [QuoteId],
    [QuoteNumber],
    [Revision],
    [Subcategory],
    [QuoteIdName],
    [QuoteIdType],
    [CreatedByExternalParty],
    [ModifiedByExternalParty]
) with view_metadata as
select
    -- logical attributes
    [lk_externalparty_quoteclose_createdby].[YomiFullName],
    [lk_externalparty_quoteclose_createdby].[FullName],
    [service_quoteclose].[Name],
    [lk_quoteclose_createdonbehalfby].[YomiFullName],
    [lk_quoteclose_createdonbehalfby].[FullName],
    [lk_quoteclose_modifiedonbehalfby].[FullName],
    [lk_quoteclose_modifiedonbehalfby].[YomiFullName],
    [quoteclose_sla_slainvokedid].[Name],
    [lk_quoteclose_createdby].[FullName],
    [lk_quoteclose_createdby].[YomiFullName],
    [quoteclose_transactioncurrency_transactioncurrencyid].[CurrencyName],
    [quoteclose_sla_slaid].[Name],
    [quoteclose_mailbox_sendermailboxid].[Name],
    [lk_quoteclose_modifiedby].[YomiFullName],
    [lk_quoteclose_modifiedby].[FullName],
    [lk_externalparty_quoteclose_modifiedby].[FullName],
    [lk_externalparty_quoteclose_modifiedby].[YomiFullName],

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
    [ActivityPointerBase].[QteCloseImportSequenceNumber],
    [ActivityPointerBase].[QteCloseOverriddenCreatedOn],
    [ActivityPointerBase].[QteCloseCategory],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[QuoteNumber],
    [ActivityPointerBase].[QteCloseRevision],
    [ActivityPointerBase].[QteCloseSubcategory],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[CreatedByExternalParty],
    [ActivityPointerBase].[ModifiedByExternalParty]
from [ActivityPointerBase] 
    left join [ExternalPartyBase] [lk_externalparty_quoteclose_createdby] on ([ActivityPointerBase].[CreatedByExternalParty] = [lk_externalparty_quoteclose_createdby].[ExternalPartyId])
    left join [ExternalPartyBase] [lk_externalparty_quoteclose_modifiedby] on ([ActivityPointerBase].[ModifiedByExternalParty] = [lk_externalparty_quoteclose_modifiedby].[ExternalPartyId])
    left join [SystemUserBase] [lk_quoteclose_createdby] on ([ActivityPointerBase].[CreatedBy] = [lk_quoteclose_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_quoteclose_createdonbehalfby] on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_quoteclose_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_quoteclose_modifiedby] on ([ActivityPointerBase].[ModifiedBy] = [lk_quoteclose_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_quoteclose_modifiedonbehalfby] on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_quoteclose_modifiedonbehalfby].[SystemUserId])
    left join [MailboxBase] [quoteclose_mailbox_sendermailboxid] on ([ActivityPointerBase].[SenderMailboxId] = [quoteclose_mailbox_sendermailboxid].[MailboxId])
    left join [SLABase] [quoteclose_sla_slaid] on ([ActivityPointerBase].[SLAId] = [quoteclose_sla_slaid].[SLAId] and [quoteclose_sla_slaid].OverwriteTime = 0 and [quoteclose_sla_slaid].ComponentState = 0)
    left join [SLABase] [quoteclose_sla_slainvokedid] on ([ActivityPointerBase].[SLAInvokedId] = [quoteclose_sla_slainvokedid].[SLAId] and [quoteclose_sla_slainvokedid].OverwriteTime = 0 and [quoteclose_sla_slainvokedid].ComponentState = 0)
    left join [TransactionCurrencyBase] [quoteclose_transactioncurrency_transactioncurrencyid] on ([ActivityPointerBase].[TransactionCurrencyId] = [quoteclose_transactioncurrency_transactioncurrencyid].[TransactionCurrencyId])
    left join [ServiceBase] [service_quoteclose] on ([ActivityPointerBase].[ServiceId] = [service_quoteclose].[ServiceId])
    left join OwnerBase XXowner on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4211