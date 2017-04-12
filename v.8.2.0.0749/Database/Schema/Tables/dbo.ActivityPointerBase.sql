CREATE TABLE [dbo].[ActivityPointerBase]
(
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ActualEnd] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[ActivityId] [uniqueidentifier] NOT NULL,
[IsBilled] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_IsBilled] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[ServiceId] [uniqueidentifier] NULL,
[ActivityTypeCode] [int] NOT NULL CONSTRAINT [DF_ActivityPointerBase_ActivityTypeCode] DEFAULT ((-1)),
[StateCode] [int] NOT NULL,
[ScheduledEnd] [datetime] NULL,
[ScheduledDurationMinutes] [int] NULL,
[ActualDurationMinutes] [int] NULL,
[StatusCode] [int] NULL,
[ActualStart] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[PriorityCode] [int] NULL CONSTRAINT [DF_ActivityPointerBase_PriorityCode] DEFAULT ((1)),
[RegardingObjectId] [uniqueidentifier] NULL,
[Subject] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[IsWorkflowCreated] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_IsWorkflowCreated] DEFAULT ((0)),
[ScheduledStart] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[RegardingObjectTypeCode] [int] NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[RegardingObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RecApptMstrOverriddenCreatedOn] [datetime] NULL,
[RecApptMstrGlobalObjectId] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[SeriesStatus] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_SeriesStatus] DEFAULT ((1)),
[RecApptMstrOutlookOwnerApptId] [int] NULL,
[DeletedExceptionsList] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[NextExpansionInstanceDate] [datetime] NULL,
[RecApptMstrLocation] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[GroupId] [uniqueidentifier] NULL,
[LastExpandedInstanceDate] [datetime] NULL,
[ExpansionStateCode] [int] NULL CONSTRAINT [DF_ActivityPointerBase_ExpansionStateCode] DEFAULT ((0)),
[RecApptMstrCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[RecApptMstrIsAllDayEvent] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_RecApptMstrIsAllDayEvent] DEFAULT ((0)),
[RecApptMstrSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[RecApptMstrSubscriptionId] [uniqueidentifier] NULL,
[RecApptMstrImportSequenceNumber] [int] NULL,
[ModifiedFieldsMask] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ActivityPointerBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[InstanceTypeCode] [int] NOT NULL CONSTRAINT [DF_ActivityPointerBase_InstanceTypeCode] DEFAULT ((0)),
[SeriesId] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[IsRegularActivity] [bit] NOT NULL CONSTRAINT [DF_ActivityPointerBase_IsRegularActivity] DEFAULT ((1)),
[OriginalStartDate] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ActivityPointerBase_OwnerIdType] DEFAULT ((8)),
[QteCloseOverriddenCreatedOn] [datetime] NULL,
[QuoteNumber] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[QteCloseImportSequenceNumber] [int] NULL,
[QteCloseCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[QteCloseRevision] [int] NULL,
[QteCloseSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[ApptCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[ApptGlobalObjectId] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[ApptIsAllDayEvent] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_ApptIsAllDayEvent] DEFAULT ((0)),
[ApptImportSequenceNumber] [int] NULL,
[ApptOutlookOwnerApptId] [int] NULL,
[ApptOverriddenCreatedOn] [datetime] NULL,
[ApptSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[ApptSubscriptionId] [uniqueidentifier] NULL,
[ApptLocation] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ActualCost_Base] [money] NULL,
[CampActImportSequenceNumber] [int] NULL,
[BudgetedCost_Base] [money] NULL,
[ActualCost] [money] NULL CONSTRAINT [DF_ActivityPointerBase_ActualCost] DEFAULT ((0)),
[IgnoreInactiveListMembers] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_IgnoreInactiveListMembers] DEFAULT ((1)),
[DoNotSendOnOptOut] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_DoNotSendOnOptOut] DEFAULT ((1)),
[TypeCode] [int] NULL,
[CampActSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[CampActOverriddenCreatedOn] [datetime] NULL,
[ExcludeIfContactedInXDays] [int] NULL CONSTRAINT [DF_ActivityPointerBase_ExcludeIfContactedInXDays] DEFAULT ((0)),
[CampActCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[BudgetedCost] [money] NULL CONSTRAINT [DF_ActivityPointerBase_BudgetedCost] DEFAULT ((0)),
[CampActChannelTypeCode] [int] NULL,
[FirstName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ReceivedOn] [datetime] NULL,
[ResponseCode] [int] NULL,
[YomiLastName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[CampResOverriddenCreatedOn] [datetime] NULL,
[YomiFirstName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[CompanyName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CampResCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[Telephone] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[OriginatingActivityId] [uniqueidentifier] NULL,
[Fax] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[LastName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[CampResImportSequenceNumber] [int] NULL,
[OriginatingActivityIdTypeCode] [int] NULL,
[EMailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CampResChannelTypeCode] [int] NULL,
[YomiCompanyName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[PromotionCodeName] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[CampResSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[SuccessCount] [int] NULL CONSTRAINT [DF_ActivityPointerBase_SuccessCount] DEFAULT ((0)),
[OperationTypeCode] [int] NULL,
[BulkOperationNumber] [nvarchar] (32) COLLATE Latin1_General_CI_AI NULL,
[TargetMembersCount] [int] NULL CONSTRAINT [DF_ActivityPointerBase_TargetMembersCount] DEFAULT ((0)),
[CreatedRecordTypeCode] [int] NULL,
[Parameters] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ErrorNumber] [int] NULL,
[TargetedRecordTypeCode] [int] NULL,
[FailureCount] [int] NULL CONSTRAINT [DF_ActivityPointerBase_FailureCount] DEFAULT ((0)),
[Compressed] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_Compressed] DEFAULT ((0)),
[ReadReceiptRequested] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_ReadReceiptRequested] DEFAULT ((0)),
[DeliveryReceiptRequested] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_DeliveryReceiptRequested] DEFAULT ((0)),
[EmailSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[Notifications] [int] NULL,
[MessageId] [nvarchar] (320) COLLATE Latin1_General_CI_AI NULL,
[Sender] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[ToRecipients] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[EmailOverriddenCreatedOn] [datetime] NULL,
[SubmittedBy] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[EmailImportSequenceNumber] [int] NULL,
[EmailDirectionCode] [bit] NULL,
[MimeType] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[MessageIdDupCheck] [uniqueidentifier] NULL CONSTRAINT [DF_ActivityPointerBase_MessageIdDupCheck] DEFAULT ('cc8f99fd-486e-4c39-aef7-7dd4d5fdbd0a'),
[DeliveryAttempts] [int] NULL,
[TrackingToken] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[EmailCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[SvcApptImportSequenceNumber] [int] NULL,
[SvcApptLocation] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[SvcApptIsAllDayEvent] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_SvcApptIsAllDayEvent] DEFAULT ((0)),
[SvcApptSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[SiteId] [uniqueidentifier] NULL,
[SvcApptOverriddenCreatedOn] [datetime] NULL,
[SvcApptCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[SvcApptSubscriptionId] [uniqueidentifier] NULL,
[TaskCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[PercentComplete] [int] NULL,
[TaskOverriddenCreatedOn] [datetime] NULL,
[TaskSubscriptionId] [uniqueidentifier] NULL,
[TaskSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[TaskImportSequenceNumber] [int] NULL,
[Address] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[LetterImportSequenceNumber] [int] NULL,
[LetterSubscriptionId] [uniqueidentifier] NULL,
[LetterCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[LetterSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[LetterDirectionCode] [bit] NULL,
[LetterOverriddenCreatedOn] [datetime] NULL,
[PhoneOverriddenCreatedOn] [datetime] NULL,
[PhoneImportSequenceNumber] [int] NULL,
[PhoneNumber] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[PhoneSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[PhoneDirectionCode] [bit] NULL,
[PhoneSubscriptionId] [uniqueidentifier] NULL,
[PhoneCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[OrdCloseSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[OrdCloseImportSequenceNumber] [int] NULL,
[OrdCloseRevision] [int] NULL,
[OrderNumber] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[OrdCloseCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[OrdCloseOverriddenCreatedOn] [datetime] NULL,
[FaxNumber] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[CoverPageName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[NumberOfPages] [int] NULL,
[FaxSubscriptionId] [uniqueidentifier] NULL,
[FaxImportSequenceNumber] [int] NULL,
[BillingCode] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Tsid] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[FaxDirectionCode] [bit] NULL,
[FaxOverriddenCreatedOn] [datetime] NULL,
[FaxSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[FaxCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[IncResSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[IncResCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[IncResImportSequenceNumber] [int] NULL,
[IncResOverriddenCreatedOn] [datetime] NULL,
[TimeSpent] [int] NULL CONSTRAINT [DF_ActivityPointerBase_TimeSpent] DEFAULT ((0)),
[CompetitorId] [uniqueidentifier] NULL,
[OppCloseOverriddenCreatedOn] [datetime] NULL,
[OppCloseImportSequenceNumber] [int] NULL,
[ActualRevenue_Base] [money] NULL,
[ActualRevenue] [money] NULL,
[OppCloseSubcategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[OppCloseCategory] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[EmailAttachmentCount] [int] NOT NULL CONSTRAINT [DF_ActivityPointerBase_EmailAttachmentCount] DEFAULT ((0)),
[ConversationIndex] [nvarchar] (2048) COLLATE Latin1_General_CI_AI NULL,
[InReplyTo] [nvarchar] (320) COLLATE Latin1_General_CI_AI NULL,
[CorrelationMethod] [int] NULL CONSTRAINT [DF_ActivityPointerBase_CorrelationMethod] DEFAULT ((0)),
[BaseConversationIndexHash] [int] NULL,
[ParentActivityId] [uniqueidentifier] NULL,
[SenderMailboxId] [uniqueidentifier] NULL,
[IsMapiPrivate] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_IsMapiPrivate] DEFAULT ((0)),
[LeftVoiceMail] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_LeftVoiceMail] DEFAULT ((0)),
[DeliveryLastAttemptedOn] [datetime] NULL,
[StageId] [uniqueidentifier] NULL,
[DeliveryPriorityCode] [int] NULL CONSTRAINT [DF_ActivityPointerBase_DeliveryPriorityCode] DEFAULT ((1)),
[SentOn] [datetime] NULL,
[PostponeActivityProcessingUntil] [datetime] NULL,
[ProcessId] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[PostURL] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[PostedOn] [datetime] NULL,
[PostAuthor] [uniqueidentifier] NULL,
[ThreadId] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[PostMessageType] [int] NULL,
[SentimentValue] [float] NULL,
[PostId] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[PostFromProfileId] [uniqueidentifier] NULL,
[PostToProfileId] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[SocialActivityDirectionCode] [bit] NULL,
[InResponseTo] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[SocialAdditionalParams] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[PostAuthorAccount] [uniqueidentifier] NULL,
[PostAuthorType] [int] NULL,
[PostAuthorAccountName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[PostAuthorAccountType] [int] NULL,
[PostAuthorName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[PostAuthorYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[PostAuthorAccountYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[EmailSender] [uniqueidentifier] NULL,
[SendersAccount] [uniqueidentifier] NULL,
[EmailSenderName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[SendersAccountName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[EmailSenderObjectTypeCode] [int] NULL,
[SendersAccountObjectTypeCode] [int] NULL,
[SendersAccountYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[EmailSenderYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CrmTaskAssignedUniqueId] [uniqueidentifier] NULL,
[Community] [int] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[AttachmentErrors] [int] NULL,
[IsUnsafe] [int] NULL CONSTRAINT [DF_ActivityPointerBase_IsUnsafe] DEFAULT ((0)),
[CreatedByExternalParty] [uniqueidentifier] NULL,
[ModifiedByExternalParty] [uniqueidentifier] NULL,
[ActivityAdditionalParams] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SortDate] [datetime] NULL,
[ExchangeWebLink] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[ExchangeItemId] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[OnHoldTime] [int] NULL,
[SLAInvokedId] [uniqueidentifier] NULL,
[SLAId] [uniqueidentifier] NULL,
[LastOnHoldTime] [datetime] NULL,
[FollowEmailUserPreference] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_FollowEmailUserPreference] DEFAULT ((0)),
[IsEmailFollowed] [bit] NULL CONSTRAINT [DF_ActivityPointerBase_IsEmailFollowed] DEFAULT ((0)),
[EmailTrackingId] [uniqueidentifier] NULL,
[ReplyCount] [int] NULL,
[EmailReminderStatus] [int] NULL CONSTRAINT [DF_ActivityPointerBase_EmailReminderStatus] DEFAULT ((0)),
[EmailReminderType] [int] NULL,
[DelayedEmailSendTime] [datetime] NULL,
[ReminderActionCardId] [uniqueidentifier] NULL,
[OpenCount] [int] NULL,
[EmailReminderExpiryTime] [datetime] NULL,
[LastOpenedTime] [datetime] NULL,
[TemplateId] [uniqueidentifier] NULL,
[LinksClickedCount] [int] NULL,
[AttachmentOpenCount] [int] NULL,
[EmailReminderText] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[ConversationTrackingId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [ndx_PrimaryKey_ActivityPointer] PRIMARY KEY CLUSTERED  ([ActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_MyClosedActivities] ON [dbo].[ActivityPointerBase] ([ActivityId], [ActualEnd] DESC) INCLUDE ([ActivityTypeCode], [IsRegularActivity], [StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_RecurringAppointmentMaster_PartialExpansionStatus] ON [dbo].[ActivityPointerBase] ([ActivityId], [ExpansionStateCode], [SeriesStatus], [NextExpansionInstanceDate]) WHERE ([ActivityTypeCode]=(4251)) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_MyActivities] ON [dbo].[ActivityPointerBase] ([ActivityId], [ScheduledStart], [ScheduledEnd], [ActivityTypeCode], [IsRegularActivity], [InstanceTypeCode], [StateCode]) INCLUDE ([Subject]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_MySubActivities] ON [dbo].[ActivityPointerBase] ([ActivityTypeCode], [ActivityId], [StateCode]) INCLUDE ([ActualEnd], [InstanceTypeCode], [IsRegularActivity], [OwnerId], [PriorityCode], [ScheduledEnd], [ScheduledStart], [Subject]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_ApptOwnerApptId_ApptGlobalObjectId] ON [dbo].[ActivityPointerBase] ([ActivityTypeCode], [ApptOutlookOwnerApptId], [ApptGlobalObjectId]) WHERE ([ActivityTypeCode]=(4201) AND [ApptOutlookOwnerApptId] IS NOT NULL AND [ApptGlobalObjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_RecApptOwnerApptIdGlobalObjectId] ON [dbo].[ActivityPointerBase] ([ActivityTypeCode], [RecApptMstrOutlookOwnerApptId], [RecApptMstrGlobalObjectId]) WHERE ([ActivityTypeCode]=(4251) AND [RecApptMstrOutlookOwnerApptId] IS NOT NULL AND [RecApptMstrGlobalObjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SubActivityScheduledEnd] ON [dbo].[ActivityPointerBase] ([ActivityTypeCode], [ScheduledEnd], [ActivityId]) INCLUDE ([InstanceTypeCode], [IsRegularActivity], [ScheduledStart], [StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SubActivityScheduledStart] ON [dbo].[ActivityPointerBase] ([ActivityTypeCode], [ScheduledStart], [ActivityId]) INCLUDE ([InstanceTypeCode], [IsRegularActivity], [ScheduledEnd], [StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core_ActivityTypeCode] ON [dbo].[ActivityPointerBase] ([ActivityTypeCode], [StateCode], [ActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SubActivitySubject] ON [dbo].[ActivityPointerBase] ([ActivityTypeCode], [Subject], [ActivityId]) INCLUDE ([InstanceTypeCode], [IsRegularActivity], [ModifiedOn], [OwnerId], [ScheduledEnd], [ScheduledStart], [StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Sync_ActivityPointer] ON [dbo].[ActivityPointerBase] ([ActivityTypeCode], [VersionNumber]) INCLUDE ([ActivityId], [OwnerId], [OwningBusinessUnit]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Email_BaseConversationIndexHash] ON [dbo].[ActivityPointerBase] ([BaseConversationIndexHash]) INCLUDE ([ActivityId], [ConversationIndex], [EmailDirectionCode], [MessageId], [OwnerId], [OwnerIdType], [OwningBusinessUnit], [RegardingObjectId], [RegardingObjectIdName], [RegardingObjectIdYomiName], [RegardingObjectTypeCode]) WHERE ([ActivityTypeCode]=(4202) AND [BaseConversationIndexHash] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_BulkOperationNumber] ON [dbo].[ActivityPointerBase] ([BulkOperationNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_OpportunityClose_for_cascaderelationship_competitor_opportunity_activities] ON [dbo].[ActivityPointerBase] ([CompetitorId]) WHERE ([CompetitorId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_CreatedOnSubject] ON [dbo].[ActivityPointerBase] ([CreatedOn], [Subject]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EmailSender] ON [dbo].[ActivityPointerBase] ([EmailSender], [EmailSenderObjectTypeCode]) WHERE ([ActivityTypeCode]=(4202)) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ActivityChart] ON [dbo].[ActivityPointerBase] ([IsRegularActivity], [StateCode]) INCLUDE ([ActivityId], [ActivityTypeCode], [InstanceTypeCode], [OwnerId], [PriorityCode], [ScheduledEnd], [ScheduledStart], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Email_MessageId] ON [dbo].[ActivityPointerBase] ([MessageId], [EmailDirectionCode], [MessageIdDupCheck]) WHERE ([ActivityTypeCode]=(4202) AND [MessageId] IS NOT NULL AND [EmailDirectionCode] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ModifiedOn] ON [dbo].[ActivityPointerBase] ([ModifiedOn], [ActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_BulkOperation_Core] ON [dbo].[ActivityPointerBase] ([OperationTypeCode]) WHERE ([ActivityTypeCode]=(4406)) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Appointment_sync_recurring_instances] ON [dbo].[ActivityPointerBase] ([OriginalStartDate], [ActivityId], [InstanceTypeCode], [SeriesId]) WHERE ([OriginalStartDate] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_CampaignResponse_for_cascaderelationship_with_fax] ON [dbo].[ActivityPointerBase] ([OriginatingActivityId], [OriginatingActivityIdTypeCode]) WHERE ([OriginatingActivityId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ActivityPointerBase] ([OwnerId], [CreatedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_OwnerIdSubject] ON [dbo].[ActivityPointerBase] ([OwnerId], [Subject]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_activitypointer] ON [dbo].[ActivityPointerBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentActivityId] ON [dbo].[ActivityPointerBase] ([ParentActivityId]) WHERE ([ParentActivityId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialactivity_postauthor_accounts] ON [dbo].[ActivityPointerBase] ([PostAuthor], [PostAuthorType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialactivity_postauthoraccount_accounts] ON [dbo].[ActivityPointerBase] ([PostAuthorAccount], [PostAuthorAccountType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_post_id] ON [dbo].[ActivityPointerBase] ([PostId]) WHERE ([PostId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Email_EmailConnectorDequeue] ON [dbo].[ActivityPointerBase] ([PostponeActivityProcessingUntil]) INCLUDE ([ActualEnd], [DeliveryPriorityCode], [SenderMailboxId]) WHERE ([StateCode]=(1) AND [ActivityTypeCode]=(4202) AND [PostponeActivityProcessingUntil] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_CampaignResponse_for_receivedon] ON [dbo].[ActivityPointerBase] ([ReceivedOn]) WHERE ([ActivityTypeCode]=(4401)) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_regardingobjectid] ON [dbo].[ActivityPointerBase] ([RegardingObjectId], [RegardingObjectTypeCode], [ActivityTypeCode]) INCLUDE ([OwnerId], [OwnerIdType]) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_incident_resolution_trend] ON [dbo].[ActivityPointerBase] ([RegardingObjectId], [StateCode], [CreatedOn]) INCLUDE ([TimeSpent]) WHERE ([ActivityTypeCode]=(4206)) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_neglectedcase] ON [dbo].[ActivityPointerBase] ([RegardingObjectTypeCode]) INCLUDE ([ActivityId], [ModifiedOn], [OwnerId], [OwningBusinessUnit], [RegardingObjectId]) WHERE ([RegardingObjectTypeCode]=(112)) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ActivityScheduledEnd] ON [dbo].[ActivityPointerBase] ([ScheduledEnd], [ActivityId], [IsRegularActivity], [StateCode]) INCLUDE ([ActivityTypeCode], [InstanceTypeCode], [OwnerId], [ScheduledStart]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ActivityScheduledStart] ON [dbo].[ActivityPointerBase] ([ScheduledStart], [ActivityId]) INCLUDE ([ActivityTypeCode], [InstanceTypeCode], [IsRegularActivity], [ScheduledEnd], [ServiceId], [StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_recurring_activities] ON [dbo].[ActivityPointerBase] ([SeriesId], [OriginalStartDate], [InstanceTypeCode], [ActivityId]) WHERE ([SeriesId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_ServiceId] ON [dbo].[ActivityPointerBase] ([ServiceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_serviceid] ON [dbo].[ActivityPointerBase] ([ServiceId], [ActivityTypeCode]) WHERE ([ServiceId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_ServiceAppointment_for_cascaderelationship_with_site] ON [dbo].[ActivityPointerBase] ([SiteId]) WHERE ([SiteId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_SiteId] ON [dbo].[ActivityPointerBase] ([SiteId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_filtered_activities] ON [dbo].[ActivityPointerBase] ([StateCode], [ActivityTypeCode], [ModifiedOn]) INCLUDE ([CreatedOn], [OwnerId], [PriorityCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeOwnerId] ON [dbo].[ActivityPointerBase] ([StateCode], [OwnerId], [ScheduledEnd]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeScheduledEnd] ON [dbo].[ActivityPointerBase] ([StateCode], [ScheduledEnd]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeScheduledStart] ON [dbo].[ActivityPointerBase] ([StateCode], [ScheduledStart]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeSubject] ON [dbo].[ActivityPointerBase] ([StateCode], [Subject]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_StatusCodeActualEnd] ON [dbo].[ActivityPointerBase] ([StatusCode], [ActualEnd], [Subject]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ActivitySubject] ON [dbo].[ActivityPointerBase] ([Subject], [ActivityId]) INCLUDE ([ActivityTypeCode], [InstanceTypeCode], [IsRegularActivity], [ModifiedOn], [OwnerId], [ScheduledEnd], [ScheduledStart], [StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_thread_id] ON [dbo].[ActivityPointerBase] ([ThreadId]) WHERE ([ThreadId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Email_Cover] ON [dbo].[ActivityPointerBase] ([TrackingToken], [MessageId]) WHERE ([ActivityTypeCode]=(4202)) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [activity_campaignresponse] FOREIGN KEY ([OriginatingActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [business_unit_activitypointer] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [business_unit_socialactivity] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [competitor_opportunity_activities] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [email_email_parentactivityid] FOREIGN KEY ([ParentActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [manualsla_activitypointer] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [manualsla_appointment] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [manualsla_email] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [manualsla_fax] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [manualsla_letter] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [manualsla_phonecall] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [manualsla_serviceappointment] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [manualsla_socialactivity] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [manualsla_task] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [owner_activitypointers] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [service_activity_pointers] FOREIGN KEY ([ServiceId]) REFERENCES [dbo].[ServiceBase] ([ServiceId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [site_service_appointments] FOREIGN KEY ([SiteId]) REFERENCES [dbo].[SiteBase] ([SiteId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [Socialprofile_SocialActivities] FOREIGN KEY ([PostFromProfileId]) REFERENCES [dbo].[SocialProfileBase] ([SocialProfileId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [TransactionCurrency_ActivityPointer] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD CONSTRAINT [transactioncurrency_socialactivity] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
