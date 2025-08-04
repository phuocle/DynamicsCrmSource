


--
-- base view for Queue
--
create view dbo.[Queue]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [BusinessUnitIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],
    [DefaultMailboxName],
    [TransactionCurrencyIdName],
    [NumberOfItems],
    [NumberOfMembers],
    [PrimaryUserIdYomiName],
    [PrimaryUserIdName],
    [EntityImage],
    [EntityImage_URL],
    [EntityImage_Timestamp],

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
    [lk_queuebase_createdby].[YomiFullName],
    [lk_queuebase_createdby].[FullName],
    [lk_queuebase_modifiedby].[FullName],
    [lk_queuebase_modifiedby].[YomiFullName],
    [lk_queuebase_modifiedonbehalfby].[YomiFullName],
    [lk_queuebase_modifiedonbehalfby].[FullName],
    [business_unit_queues].[Name],
    [lk_queuebase_createdonbehalfby].[FullName],
    [lk_queuebase_createdonbehalfby].[YomiFullName],
    [organization_queues].[Name],
    [queue_defaultmailbox_mailbox].[Name],
    [TransactionCurrency_Queue].[CurrencyName],
    [lk_queue_QueueItemCount].[QueueItemCount],
    [lk_queue_QueueMemberCount].[QueueMemberCount],
    [queue_primary_user].[YomiFullName],
    [queue_primary_user].[FullName],
    [lk_queue_entityimage].[ImageData],
    [lk_queue_entityimage].[ImageURL],
    [lk_queue_entityimage].[ImageTimestamp],

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
    left join [SystemUserBase] [lk_queuebase_createdby] on ([QueueBase].[CreatedBy] = [lk_queuebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_queuebase_createdonbehalfby] on ([QueueBase].[CreatedOnBehalfBy] = [lk_queuebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_queuebase_modifiedby] on ([QueueBase].[ModifiedBy] = [lk_queuebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_queuebase_modifiedonbehalfby] on ([QueueBase].[ModifiedOnBehalfBy] = [lk_queuebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_queues] on ([QueueBase].[OrganizationId] = [organization_queues].[OrganizationId])
    left join [MailboxBase] [queue_defaultmailbox_mailbox] on ([QueueBase].[DefaultMailbox] = [queue_defaultmailbox_mailbox].[MailboxId])
    left join [SystemUserBase] [queue_primary_user] on ([QueueBase].[PrimaryUserId] = [queue_primary_user].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Queue] on ([QueueBase].[TransactionCurrencyId] = [TransactionCurrency_Queue].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([QueueBase].OwnerId = XXowner.OwnerId)
