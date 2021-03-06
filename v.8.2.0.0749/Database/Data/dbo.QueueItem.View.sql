USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[QueueItem]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for QueueItem
--
create view [dbo].[QueueItem]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OwningUser],
    [OwnerId],
    [QueueIdName],
    [OwnerIdType],
    [OwningBusinessUnit],
    [OrganizationIdName],
    [TransactionCurrencyIdName],

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
    [lk_queueitembase_modifiedby].[YomiFullName],
    [lk_queueitembase_modifiedby].[FullName],
    [lk_queueitembase_modifiedonbehalfby].[FullName],
    [lk_queueitembase_modifiedonbehalfby].[YomiFullName],
    [lk_queueitembase_createdby].[YomiFullName],
    [lk_queueitembase_createdby].[FullName],
    [lk_queueitembase_createdonbehalfby].[FullName],
    [lk_queueitembase_createdonbehalfby].[YomiFullName],
    case when [queue_entries].OwnerIdType = 8
    then [queue_entries].OwnerId
    else null
    end,
    [queue_entries].[OwnerId],
    [queue_entries].[Name],
    [queue_entries].[OwnerIdType],
    [queue_entries].[OwningBusinessUnit],
    [organization_queueitems].[Name],
    [TransactionCurrency_QueueItem].[CurrencyName],

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

GO
