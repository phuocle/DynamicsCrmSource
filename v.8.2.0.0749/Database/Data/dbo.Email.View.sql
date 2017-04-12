USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Email]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for Email
--
create view [dbo].[Email]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ParentActivityIdName],
    [TemplateIdName],
    [SenderMailboxIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByYomiName],
    [CreatedByName],
    [SLAInvokedIdName],
    [SLAName],
    [TransactionCurrencyIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ScheduledStart],
    [StatusCode],
    [SubmittedBy],
    [Description],
    [IsWorkflowCreated],
    [ActivityId],
    [ScheduledEnd],
    [MimeType],
    [CreatedBy],
    [VersionNumber],
    [ReadReceiptRequested],
    [Subcategory],
    [IsBilled],
    [ActualDurationMinutes],
    [PriorityCode],
    [ModifiedBy],
    [ActualStart],
    [DirectionCode],
    [ActualEnd],
    [TrackingToken],
    [ServiceId],
    [ScheduledDurationMinutes],
    [Category],
    [CreatedOn],
    [OwningBusinessUnit],
    [Sender],
    [Subject],
    [ModifiedOn],
    [ToRecipients],
    [DeliveryReceiptRequested],
    [RegardingObjectId],
    [StateCode],
    [MessageId],
    [RegardingObjectTypeCode],
    [RegardingObjectIdName],
    [OverriddenCreatedOn],
    [ImportSequenceNumber],
    [DeliveryAttempts],
    [MessageIdDupCheck],
    [Compressed],
    [Notifications],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [RegardingObjectIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity],
    [TransactionCurrencyId],
    [ExchangeRate],
    [EmailSender],
    [EmailSenderName],
    [EmailSenderObjectTypeCode],
    [SendersAccount],
    [SendersAccountObjectTypeCode],
    [AttachmentCount],
    [SenderMailboxId],
    [DeliveryPriorityCode],
    [ParentActivityId],
    [InReplyTo],
    [BaseConversationIndexHash],
    [ConversationIndex],
    [CorrelationMethod],
    [SentOn],
    [PostponeEmailProcessingUntil],
    [ProcessId],
    [StageId],
    [ActivityAdditionalParams],
    [IsUnsafe],
    [SLAId],
    [SLAInvokedId],
    [OnHoldTime],
    [LastOnHoldTime],
    [SendersAccountName],
    [SendersAccountYomiName],
    [EmailSenderYomiName],
    [TraversedPath],
    [AttachmentOpenCount],
    [ConversationTrackingId],
    [DelayedEmailSendTime],
    [LastOpenedTime],
    [LinksClickedCount],
    [OpenCount],
    [ReplyCount],
    [EmailTrackingId],
    [FollowEmailUserPreference],
    [IsEmailFollowed],
    [EmailReminderExpiryTime],
    [EmailReminderType],
    [EmailReminderStatus],
    [EmailReminderText],
    [TemplateId],
    [ReminderActionCardId],
    [SortDate]
) with view_metadata as
select
    -- logical attributes
    [lk_email_createdonbehalfby].[YomiFullName],
    [lk_email_createdonbehalfby].[FullName],
    [email_email_parentactivityid].[Subject],
    [Email_EmailTemplate].[Title],
    [email_sendermailboxid_mailbox].[Name],
    [lk_email_modifiedonbehalfby].[YomiFullName],
    [lk_email_modifiedonbehalfby].[FullName],
    [lk_email_modifiedby].[YomiFullName],
    [lk_email_modifiedby].[FullName],
    [lk_email_createdby].[YomiFullName],
    [lk_email_createdby].[FullName],
    [sla_email].[Name],
    [manualsla_email].[Name],
    [TransactionCurrency_Email].[CurrencyName],

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
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[SubmittedBy],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[MimeType],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[ReadReceiptRequested],
    [ActivityPointerBase].[EmailSubcategory],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[EmailDirectionCode],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[TrackingToken],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[EmailCategory],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[Sender],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[ToRecipients],
    [ActivityPointerBase].[DeliveryReceiptRequested],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[MessageId],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[EmailOverriddenCreatedOn],
    [ActivityPointerBase].[EmailImportSequenceNumber],
    [ActivityPointerBase].[DeliveryAttempts],
    [ActivityPointerBase].[MessageIdDupCheck],
    [ActivityPointerBase].[Compressed],
    [ActivityPointerBase].[Notifications],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[EmailSender],
    [ActivityPointerBase].[EmailSenderName],
    [ActivityPointerBase].[EmailSenderObjectTypeCode],
    [ActivityPointerBase].[SendersAccount],
    [ActivityPointerBase].[SendersAccountObjectTypeCode],
    [ActivityPointerBase].[EmailAttachmentCount],
    [ActivityPointerBase].[SenderMailboxId],
    [ActivityPointerBase].[DeliveryPriorityCode],
    [ActivityPointerBase].[ParentActivityId],
    [ActivityPointerBase].[InReplyTo],
    [ActivityPointerBase].[BaseConversationIndexHash],
    [ActivityPointerBase].[ConversationIndex],
    [ActivityPointerBase].[CorrelationMethod],
    [ActivityPointerBase].[SentOn],
    [ActivityPointerBase].[PostponeActivityProcessingUntil],
    [ActivityPointerBase].[ProcessId],
    [ActivityPointerBase].[StageId],
    [ActivityPointerBase].[ActivityAdditionalParams],
    [ActivityPointerBase].[IsUnsafe],
    [ActivityPointerBase].[SLAId],
    [ActivityPointerBase].[SLAInvokedId],
    [ActivityPointerBase].[OnHoldTime],
    [ActivityPointerBase].[LastOnHoldTime],
    [ActivityPointerBase].[SendersAccountName],
    [ActivityPointerBase].[SendersAccountYomiName],
    [ActivityPointerBase].[EmailSenderYomiName],
    [ActivityPointerBase].[TraversedPath],
    [ActivityPointerBase].[AttachmentOpenCount],
    [ActivityPointerBase].[ConversationTrackingId],
    [ActivityPointerBase].[DelayedEmailSendTime],
    [ActivityPointerBase].[LastOpenedTime],
    [ActivityPointerBase].[LinksClickedCount],
    [ActivityPointerBase].[OpenCount],
    [ActivityPointerBase].[ReplyCount],
    [ActivityPointerBase].[EmailTrackingId],
    [ActivityPointerBase].[FollowEmailUserPreference],
    [ActivityPointerBase].[IsEmailFollowed],
    [ActivityPointerBase].[EmailReminderExpiryTime],
    [ActivityPointerBase].[EmailReminderType],
    [ActivityPointerBase].[EmailReminderStatus],
    [ActivityPointerBase].[EmailReminderText],
    [ActivityPointerBase].[TemplateId],
    [ActivityPointerBase].[ReminderActionCardId],
    [ActivityPointerBase].[SortDate]
from [ActivityPointerBase] 
    left join [ActivityPointerBase] [email_email_parentactivityid] on ([ActivityPointerBase].[ParentActivityId] = [email_email_parentactivityid].[ActivityId] and [email_email_parentactivityid].[ActivityTypeCode] = 4202)
    left join [TemplateBase] [Email_EmailTemplate] on ([ActivityPointerBase].[TemplateId] = [Email_EmailTemplate].[TemplateId] and [Email_EmailTemplate].OverwriteTime = 0 and [Email_EmailTemplate].ComponentState = 0)
    left join [MailboxBase] [email_sendermailboxid_mailbox] on ([ActivityPointerBase].[SenderMailboxId] = [email_sendermailboxid_mailbox].[MailboxId])
    left join [SystemUserBase] [lk_email_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_email_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_email_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_email_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_email_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_email_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_email_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_email_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_email] on ([ActivityPointerBase].[SLAId] = [manualsla_email].[SLAId] and [manualsla_email].OverwriteTime = 0 and [manualsla_email].ComponentState = 0)
    left join [SLABase] [sla_email] on ([ActivityPointerBase].[SLAInvokedId] = [sla_email].[SLAId] and [sla_email].OverwriteTime = 0 and [sla_email].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_Email] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_Email].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4202
GO
