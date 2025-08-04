


--
-- base view for QueueItem
--
create view dbo.[QueueItem]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
    [OwningUser],
    [CreatedByYomiName],
    [OwnerId],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [QueueIdName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [OwnerIdType],
    [CreatedByName],
    [TransactionCurrencyIdName],
    [OrganizationIdName],
    [OwningBusinessUnit],

    ObjectIdName,
    ObjectIdTypeCode,
    -- physical attributes
    [QueueItemId],
    [QueueId],
    [ObjectId],
    [ObjectTypeCode],
    [Title],
    [EnteredOn],
    [Priority],
    [State],
    [Status],
    [CreatedOn],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOn],
    [ToRecipients],
    [Sender],
    [OrganizationId],
    [VersionNumber],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [OverriddenCreatedOn],
    [WorkerIdModifiedOn],
    [WorkerId],
    [StatusCode],
    [StateCode],
    [WorkerIdName],
    [WorkerIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ImportSequenceNumber],
    [WorkerIdType]
) with view_metadata as
select
    -- logical attributes
    [lk_queueitembase_modifiedonbehalfby].[FullName],
    [lk_queueitembase_modifiedby].[YomiFullName],
    case when [queue_entries].OwnerIdType = 8
    then [queue_entries].OwnerId
    else null
    end,
    [lk_queueitembase_createdby].[YomiFullName],
    [queue_entries].[OwnerId],
    [lk_queueitembase_modifiedby].[FullName],
    [lk_queueitembase_createdonbehalfby].[FullName],
    [queue_entries].[Name],
    [lk_queueitembase_createdonbehalfby].[YomiFullName],
    [lk_queueitembase_modifiedonbehalfby].[YomiFullName],
    [queue_entries].[OwnerIdType],
    [lk_queueitembase_createdby].[FullName],
    [TransactionCurrency_QueueItem].[CurrencyName],
    [organization_queueitems].[Name],
    [queue_entries].[OwningBusinessUnit],

-- logical attribute 
			QueueItemBase.Title,
QueueItemBase.ObjectTypeCode,    -- physical attribute
    [QueueItemBase].[QueueItemId],
    [QueueItemBase].[QueueId],
    [QueueItemBase].[ObjectId],
    [QueueItemBase].[ObjectTypeCode],
    [QueueItemBase].[Title],
    [QueueItemBase].[EnteredOn],
    [QueueItemBase].[Priority],
    [QueueItemBase].[State],
    [QueueItemBase].[Status],
    [QueueItemBase].[CreatedOn],
    [QueueItemBase].[CreatedBy],
    [QueueItemBase].[ModifiedBy],
    [QueueItemBase].[ModifiedOn],
    [QueueItemBase].[ToRecipients],
    [QueueItemBase].[Sender],
    [QueueItemBase].[OrganizationId],
    [QueueItemBase].[VersionNumber],
    [QueueItemBase].[TimeZoneRuleVersionNumber],
    [QueueItemBase].[UTCConversionTimeZoneCode],
    [QueueItemBase].[OverriddenCreatedOn],
    [QueueItemBase].[WorkerIdModifiedOn],
    [QueueItemBase].[WorkerId],
    [QueueItemBase].[StatusCode],
    [QueueItemBase].[StateCode],
    [QueueItemBase].[WorkerIdName],
    [QueueItemBase].[WorkerIdYomiName],
    [QueueItemBase].[CreatedOnBehalfBy],
    [QueueItemBase].[ModifiedOnBehalfBy],
    [QueueItemBase].[TransactionCurrencyId],
    [QueueItemBase].[ExchangeRate],
    [QueueItemBase].[ImportSequenceNumber],
    [QueueItemBase].[WorkerIdType]
from [QueueItemBase] 
    left join [SystemUserBase] [lk_queueitembase_createdby] with(nolock) on ([QueueItemBase].[CreatedBy] = [lk_queueitembase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_queueitembase_createdonbehalfby] with(nolock) on ([QueueItemBase].[CreatedOnBehalfBy] = [lk_queueitembase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_queueitembase_modifiedby] with(nolock) on ([QueueItemBase].[ModifiedBy] = [lk_queueitembase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_queueitembase_modifiedonbehalfby] with(nolock) on ([QueueItemBase].[ModifiedOnBehalfBy] = [lk_queueitembase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_queueitems] with(nolock) on ([QueueItemBase].[OrganizationId] = [organization_queueitems].[OrganizationId])
    left join [QueueBase] [queue_entries] on ([QueueItemBase].[QueueId] = [queue_entries].[QueueId])
    left join [TransactionCurrencyBase] [TransactionCurrency_QueueItem] on ([QueueItemBase].[TransactionCurrencyId] = [TransactionCurrency_QueueItem].[TransactionCurrencyId])
