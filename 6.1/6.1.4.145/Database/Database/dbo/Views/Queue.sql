


--
-- base view for Queue
--
create view dbo.[Queue]
 (
    -- logical attributes
    [ModifiedByName],
    [NumberOfMembers],
    [TransactionCurrencyIdName],
    [PrimaryUserIdYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [OrganizationIdName],
    [PrimaryUserIdName],
    [DefaultMailboxName],
    [ModifiedByYomiName],
    [EntityImage],
    [NumberOfItems],
    [CreatedByYomiName],
    [BusinessUnitIdName],
    [EntityImage_URL],
    [CreatedOnBehalfByName],
    [EntityImage_Timestamp],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [QueueId],
    [BusinessUnitId],
    [OrganizationId],
    [EMailAddress],
    [PrimaryUserId],
    [QueueTypeCode],
    [Name],
    [Description],
    [QueueSemantics],
    [CreatedOn],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [IgnoreUnsolicitedEmail],
    [IsFaxQueue],
    [EmailPassword],
    [IncomingEmailDeliveryMethod],
    [EmailUsername],
    [OutgoingEmailDeliveryMethod],
    [AllowEmailCredentials],
    [IncomingEmailFilteringMethod],
    [OverriddenCreatedOn],
    [StatusCode],
    [OwningBusinessUnit],
    [StateCode],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ImportSequenceNumber],
    [TransactionCurrencyId],
    [ExchangeRate],
    [EmailRouterAccessApproval],
    [DefaultMailbox],
    [EntityImageId],
    [IsEmailAddressApprovedByO365Admin],
    [QueueViewType]
) with view_metadata as
select
    -- logical attributes
    [lk_queuebase_modifiedby].[FullName],
    [lk_queue_QueueMemberCount].[QueueMemberCount],
    [TransactionCurrency_Queue].[CurrencyName],
    [queue_primary_user].[YomiFullName],
    [lk_queuebase_modifiedonbehalfby].[YomiFullName],
    [lk_queuebase_modifiedonbehalfby].[FullName],
    [organization_queues].[Name],
    [queue_primary_user].[FullName],
    [queue_defaultmailbox_mailbox].[Name],
    [lk_queuebase_modifiedby].[YomiFullName],
    [lk_queue_entityimage].[ImageData],
    [lk_queue_QueueItemCount].[QueueItemCount],
    [lk_queuebase_createdby].[YomiFullName],
    [business_unit_queues].[Name],
    [lk_queue_entityimage].[ImageURL],
    [lk_queuebase_createdonbehalfby].[FullName],
    [lk_queue_entityimage].[ImageTimestamp],
    [lk_queuebase_createdonbehalfby].[YomiFullName],
    [lk_queuebase_createdby].[FullName],

    -- ownership entries
    OwnerId = [QueueBase].OwnerId,
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
    [QueueBase].[QueueId],
    [QueueBase].[BusinessUnitId],
    [QueueBase].[OrganizationId],
    [QueueBase].[EMailAddress],
    [QueueBase].[PrimaryUserId],
    [QueueBase].[QueueTypeCode],
    [QueueBase].[Name],
    [QueueBase].[Description],
    [QueueBase].[QueueSemantics],
    [QueueBase].[CreatedOn],
    [QueueBase].[CreatedBy],
    [QueueBase].[ModifiedBy],
    [QueueBase].[ModifiedOn],
    [QueueBase].[VersionNumber],
    [QueueBase].[IgnoreUnsolicitedEmail],
    [QueueBase].[IsFaxQueue],
    [QueueBase].[EmailPassword],
    [QueueBase].[IncomingEmailDeliveryMethod],
    [QueueBase].[EmailUsername],
    [QueueBase].[OutgoingEmailDeliveryMethod],
    [QueueBase].[AllowEmailCredentials],
    [QueueBase].[IncomingEmailFilteringMethod],
    [QueueBase].[OverriddenCreatedOn],
    [QueueBase].[StatusCode],
    [QueueBase].[OwningBusinessUnit],
    [QueueBase].[StateCode],
    [QueueBase].[CreatedOnBehalfBy],
    [QueueBase].[ModifiedOnBehalfBy],
    [QueueBase].[ImportSequenceNumber],
    [QueueBase].[TransactionCurrencyId],
    [QueueBase].[ExchangeRate],
    [QueueBase].[EmailRouterAccessApproval],
    [QueueBase].[DefaultMailbox],
    [QueueBase].[EntityImageId],
    [QueueBase].[IsEmailAddressApprovedByO365Admin],
    [QueueBase].[QueueViewType]
from [QueueBase] 
    left join [BusinessUnitBase] [business_unit_queues] on ([QueueBase].[BusinessUnitId] = [business_unit_queues].[BusinessUnitId])
    left join [ImageDescriptor] [lk_queue_entityimage] on ([QueueBase].[EntityImageId] = [lk_queue_entityimage].[ImageDescriptorId])
    left join [QueueItemCount] [lk_queue_QueueItemCount] on ([QueueBase].[QueueId] = [lk_queue_QueueItemCount].[QueueId])
    left join [QueueMemberCount] [lk_queue_QueueMemberCount] on ([QueueBase].[QueueId] = [lk_queue_QueueMemberCount].[QueueId])
    left join [SystemUserBase] [lk_queuebase_createdby] with(nolock) on ([QueueBase].[CreatedBy] = [lk_queuebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_queuebase_createdonbehalfby] with(nolock) on ([QueueBase].[CreatedOnBehalfBy] = [lk_queuebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_queuebase_modifiedby] with(nolock) on ([QueueBase].[ModifiedBy] = [lk_queuebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_queuebase_modifiedonbehalfby] with(nolock) on ([QueueBase].[ModifiedOnBehalfBy] = [lk_queuebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_queues] with(nolock) on ([QueueBase].[OrganizationId] = [organization_queues].[OrganizationId])
    left join [MailboxBase] [queue_defaultmailbox_mailbox] on ([QueueBase].[DefaultMailbox] = [queue_defaultmailbox_mailbox].[MailboxId])
    left join [SystemUserBase] [queue_primary_user] with(nolock) on ([QueueBase].[PrimaryUserId] = [queue_primary_user].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Queue] on ([QueueBase].[TransactionCurrencyId] = [TransactionCurrency_Queue].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([QueueBase].OwnerId = XXowner.OwnerId)
