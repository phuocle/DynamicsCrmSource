USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ActivityPointerBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActivityPointerBase](
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ActualEnd] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[ActivityId] [uniqueidentifier] NOT NULL,
	[IsBilled] [bit] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[ModifiedOn] [datetime] NULL,
	[ServiceId] [uniqueidentifier] NULL,
	[ActivityTypeCode] [int] NOT NULL,
	[StateCode] [int] NOT NULL,
	[ScheduledEnd] [datetime] NULL,
	[ScheduledDurationMinutes] [int] NULL,
	[ActualDurationMinutes] [int] NULL,
	[StatusCode] [int] NULL,
	[ActualStart] [datetime] NULL,
	[CreatedOn] [datetime] NULL,
	[PriorityCode] [int] NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[Subject] [nvarchar](200) NULL,
	[IsWorkflowCreated] [bit] NULL,
	[ScheduledStart] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[RegardingObjectIdYomiName] [nvarchar](4000) NULL,
	[RecApptMstrOverriddenCreatedOn] [datetime] NULL,
	[RecApptMstrGlobalObjectId] [nvarchar](300) NULL,
	[SeriesStatus] [bit] NULL,
	[RecApptMstrOutlookOwnerApptId] [int] NULL,
	[DeletedExceptionsList] [nvarchar](max) NULL,
	[NextExpansionInstanceDate] [datetime] NULL,
	[RecApptMstrLocation] [nvarchar](200) NULL,
	[GroupId] [uniqueidentifier] NULL,
	[LastExpandedInstanceDate] [datetime] NULL,
	[ExpansionStateCode] [int] NULL,
	[RecApptMstrCategory] [nvarchar](250) NULL,
	[RecApptMstrIsAllDayEvent] [bit] NULL,
	[RecApptMstrSubcategory] [nvarchar](250) NULL,
	[RecApptMstrSubscriptionId] [uniqueidentifier] NULL,
	[RecApptMstrImportSequenceNumber] [int] NULL,
	[ModifiedFieldsMask] [nvarchar](max) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[InstanceTypeCode] [int] NOT NULL,
	[SeriesId] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[IsRegularActivity] [bit] NOT NULL,
	[OriginalStartDate] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
	[QteCloseOverriddenCreatedOn] [datetime] NULL,
	[QuoteNumber] [nvarchar](100) NULL,
	[QteCloseImportSequenceNumber] [int] NULL,
	[QteCloseCategory] [nvarchar](250) NULL,
	[QteCloseRevision] [int] NULL,
	[QteCloseSubcategory] [nvarchar](250) NULL,
	[ApptCategory] [nvarchar](250) NULL,
	[ApptGlobalObjectId] [nvarchar](300) NULL,
	[ApptIsAllDayEvent] [bit] NULL,
	[ApptImportSequenceNumber] [int] NULL,
	[ApptOutlookOwnerApptId] [int] NULL,
	[ApptOverriddenCreatedOn] [datetime] NULL,
	[ApptSubcategory] [nvarchar](250) NULL,
	[ApptSubscriptionId] [uniqueidentifier] NULL,
	[ApptLocation] [nvarchar](200) NULL,
	[ActualCost_Base] [money] NULL,
	[CampActImportSequenceNumber] [int] NULL,
	[BudgetedCost_Base] [money] NULL,
	[ActualCost] [money] NULL,
	[IgnoreInactiveListMembers] [bit] NULL,
	[DoNotSendOnOptOut] [bit] NULL,
	[TypeCode] [int] NULL,
	[CampActSubcategory] [nvarchar](250) NULL,
	[CampActOverriddenCreatedOn] [datetime] NULL,
	[ExcludeIfContactedInXDays] [int] NULL,
	[CampActCategory] [nvarchar](250) NULL,
	[BudgetedCost] [money] NULL,
	[CampActChannelTypeCode] [int] NULL,
	[FirstName] [nvarchar](50) NULL,
	[ReceivedOn] [datetime] NULL,
	[ResponseCode] [int] NULL,
	[YomiLastName] [nvarchar](150) NULL,
	[CampResOverriddenCreatedOn] [datetime] NULL,
	[YomiFirstName] [nvarchar](150) NULL,
	[CompanyName] [nvarchar](100) NULL,
	[CampResCategory] [nvarchar](250) NULL,
	[Telephone] [nvarchar](50) NULL,
	[OriginatingActivityId] [uniqueidentifier] NULL,
	[Fax] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[CampResImportSequenceNumber] [int] NULL,
	[OriginatingActivityIdTypeCode] [int] NULL,
	[EMailAddress] [nvarchar](100) NULL,
	[CampResChannelTypeCode] [int] NULL,
	[YomiCompanyName] [nvarchar](100) NULL,
	[PromotionCodeName] [nvarchar](250) NULL,
	[CampResSubcategory] [nvarchar](250) NULL,
	[SuccessCount] [int] NULL,
	[OperationTypeCode] [int] NULL,
	[BulkOperationNumber] [nvarchar](32) NULL,
	[TargetMembersCount] [int] NULL,
	[CreatedRecordTypeCode] [int] NULL,
	[Parameters] [nvarchar](max) NULL,
	[ErrorNumber] [int] NULL,
	[TargetedRecordTypeCode] [int] NULL,
	[FailureCount] [int] NULL,
	[Compressed] [bit] NULL,
	[ReadReceiptRequested] [bit] NULL,
	[DeliveryReceiptRequested] [bit] NULL,
	[EmailSubcategory] [nvarchar](250) NULL,
	[Notifications] [int] NULL,
	[MessageId] [nvarchar](320) NULL,
	[Sender] [nvarchar](250) NULL,
	[ToRecipients] [nvarchar](500) NULL,
	[EmailOverriddenCreatedOn] [datetime] NULL,
	[SubmittedBy] [nvarchar](250) NULL,
	[EmailImportSequenceNumber] [int] NULL,
	[EmailDirectionCode] [bit] NULL,
	[MimeType] [nvarchar](256) NULL,
	[MessageIdDupCheck] [uniqueidentifier] NULL,
	[DeliveryAttempts] [int] NULL,
	[TrackingToken] [nvarchar](50) NULL,
	[EmailCategory] [nvarchar](250) NULL,
	[SvcApptImportSequenceNumber] [int] NULL,
	[SvcApptLocation] [nvarchar](500) NULL,
	[SvcApptIsAllDayEvent] [bit] NULL,
	[SvcApptSubcategory] [nvarchar](250) NULL,
	[SiteId] [uniqueidentifier] NULL,
	[SvcApptOverriddenCreatedOn] [datetime] NULL,
	[SvcApptCategory] [nvarchar](250) NULL,
	[SvcApptSubscriptionId] [uniqueidentifier] NULL,
	[TaskCategory] [nvarchar](250) NULL,
	[PercentComplete] [int] NULL,
	[TaskOverriddenCreatedOn] [datetime] NULL,
	[TaskSubscriptionId] [uniqueidentifier] NULL,
	[TaskSubcategory] [nvarchar](250) NULL,
	[TaskImportSequenceNumber] [int] NULL,
	[Address] [nvarchar](200) NULL,
	[LetterImportSequenceNumber] [int] NULL,
	[LetterSubscriptionId] [uniqueidentifier] NULL,
	[LetterCategory] [nvarchar](250) NULL,
	[LetterSubcategory] [nvarchar](250) NULL,
	[LetterDirectionCode] [bit] NULL,
	[LetterOverriddenCreatedOn] [datetime] NULL,
	[PhoneOverriddenCreatedOn] [datetime] NULL,
	[PhoneImportSequenceNumber] [int] NULL,
	[PhoneNumber] [nvarchar](200) NULL,
	[PhoneSubcategory] [nvarchar](250) NULL,
	[PhoneDirectionCode] [bit] NULL,
	[PhoneSubscriptionId] [uniqueidentifier] NULL,
	[PhoneCategory] [nvarchar](250) NULL,
	[OrdCloseSubcategory] [nvarchar](250) NULL,
	[OrdCloseImportSequenceNumber] [int] NULL,
	[OrdCloseRevision] [int] NULL,
	[OrderNumber] [nvarchar](100) NULL,
	[OrdCloseCategory] [nvarchar](250) NULL,
	[OrdCloseOverriddenCreatedOn] [datetime] NULL,
	[FaxNumber] [nvarchar](200) NULL,
	[CoverPageName] [nvarchar](100) NULL,
	[NumberOfPages] [int] NULL,
	[FaxSubscriptionId] [uniqueidentifier] NULL,
	[FaxImportSequenceNumber] [int] NULL,
	[BillingCode] [nvarchar](50) NULL,
	[Tsid] [nvarchar](20) NULL,
	[FaxDirectionCode] [bit] NULL,
	[FaxOverriddenCreatedOn] [datetime] NULL,
	[FaxSubcategory] [nvarchar](250) NULL,
	[FaxCategory] [nvarchar](250) NULL,
	[IncResSubcategory] [nvarchar](250) NULL,
	[IncResCategory] [nvarchar](250) NULL,
	[IncResImportSequenceNumber] [int] NULL,
	[IncResOverriddenCreatedOn] [datetime] NULL,
	[TimeSpent] [int] NULL,
	[CompetitorId] [uniqueidentifier] NULL,
	[OppCloseOverriddenCreatedOn] [datetime] NULL,
	[OppCloseImportSequenceNumber] [int] NULL,
	[ActualRevenue_Base] [money] NULL,
	[ActualRevenue] [money] NULL,
	[OppCloseSubcategory] [nvarchar](250) NULL,
	[OppCloseCategory] [nvarchar](250) NULL,
	[EmailAttachmentCount] [int] NOT NULL,
	[ConversationIndex] [nvarchar](2048) NULL,
	[InReplyTo] [nvarchar](320) NULL,
	[CorrelationMethod] [int] NULL,
	[BaseConversationIndexHash] [int] NULL,
	[ParentActivityId] [uniqueidentifier] NULL,
	[SenderMailboxId] [uniqueidentifier] NULL,
	[IsMapiPrivate] [bit] NULL,
	[LeftVoiceMail] [bit] NULL,
	[DeliveryLastAttemptedOn] [datetime] NULL,
	[StageId] [uniqueidentifier] NULL,
	[DeliveryPriorityCode] [int] NULL,
	[SentOn] [datetime] NULL,
	[PostponeActivityProcessingUntil] [datetime] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[PostURL] [nvarchar](200) NULL,
	[PostedOn] [datetime] NULL,
	[PostAuthor] [uniqueidentifier] NULL,
	[ThreadId] [nvarchar](160) NULL,
	[PostMessageType] [int] NULL,
	[SentimentValue] [float] NULL,
	[PostId] [nvarchar](160) NULL,
	[PostFromProfileId] [uniqueidentifier] NULL,
	[PostToProfileId] [nvarchar](200) NULL,
	[SocialActivityDirectionCode] [bit] NULL,
	[InResponseTo] [nvarchar](160) NULL,
	[SocialAdditionalParams] [nvarchar](max) NULL,
	[PostAuthorAccount] [uniqueidentifier] NULL,
	[PostAuthorType] [int] NULL,
	[PostAuthorAccountName] [nvarchar](4000) NULL,
	[PostAuthorAccountType] [int] NULL,
	[PostAuthorName] [nvarchar](4000) NULL,
	[PostAuthorYomiName] [nvarchar](4000) NULL,
	[PostAuthorAccountYomiName] [nvarchar](4000) NULL,
	[EmailSender] [uniqueidentifier] NULL,
	[SendersAccount] [uniqueidentifier] NULL,
	[EmailSenderName] [nvarchar](4000) NULL,
	[SendersAccountName] [nvarchar](4000) NULL,
	[EmailSenderObjectTypeCode] [int] NULL,
	[SendersAccountObjectTypeCode] [int] NULL,
	[SendersAccountYomiName] [nvarchar](4000) NULL,
	[EmailSenderYomiName] [nvarchar](4000) NULL,
	[CrmTaskAssignedUniqueId] [uniqueidentifier] NULL,
	[Community] [int] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[AttachmentErrors] [int] NULL,
	[IsUnsafe] [int] NULL,
	[CreatedByExternalParty] [uniqueidentifier] NULL,
	[ModifiedByExternalParty] [uniqueidentifier] NULL,
	[ActivityAdditionalParams] [nvarchar](max) NULL,
	[SortDate] [datetime] NULL,
	[ExchangeWebLink] [nvarchar](1250) NULL,
	[ExchangeItemId] [nvarchar](200) NULL,
	[OnHoldTime] [int] NULL,
	[SLAInvokedId] [uniqueidentifier] NULL,
	[SLAId] [uniqueidentifier] NULL,
	[LastOnHoldTime] [datetime] NULL,
	[FollowEmailUserPreference] [bit] NULL,
	[IsEmailFollowed] [bit] NULL,
	[EmailTrackingId] [uniqueidentifier] NULL,
	[ReplyCount] [int] NULL,
	[EmailReminderStatus] [int] NULL,
	[EmailReminderType] [int] NULL,
	[DelayedEmailSendTime] [datetime] NULL,
	[ReminderActionCardId] [uniqueidentifier] NULL,
	[OpenCount] [int] NULL,
	[EmailReminderExpiryTime] [datetime] NULL,
	[LastOpenedTime] [datetime] NULL,
	[TemplateId] [uniqueidentifier] NULL,
	[LinksClickedCount] [int] NULL,
	[AttachmentOpenCount] [int] NULL,
	[EmailReminderText] [nvarchar](1250) NULL,
	[ConversationTrackingId] [uniqueidentifier] NULL,
 CONSTRAINT [ndx_PrimaryKey_ActivityPointer] PRIMARY KEY CLUSTERED 
(
	[ActivityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_Appointment_sync_recurring_instances]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Appointment_sync_recurring_instances] ON [dbo].[ActivityPointerBase]
(
	[OriginalStartDate] ASC,
	[ActivityId] ASC,
	[InstanceTypeCode] ASC,
	[SeriesId] ASC
)
WHERE ([OriginalStartDate] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_ApptOwnerApptId_ApptGlobalObjectId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_ApptOwnerApptId_ApptGlobalObjectId] ON [dbo].[ActivityPointerBase]
(
	[ActivityTypeCode] ASC,
	[ApptOutlookOwnerApptId] ASC,
	[ApptGlobalObjectId] ASC
)
WHERE ([ActivityTypeCode]=(4201) AND [ApptOutlookOwnerApptId] IS NOT NULL AND [ApptGlobalObjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_BulkOperation_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_BulkOperation_Core] ON [dbo].[ActivityPointerBase]
(
	[OperationTypeCode] ASC
)
WHERE ([ActivityTypeCode]=(4406))
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_CampaignResponse_for_cascaderelationship_with_fax]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_CampaignResponse_for_cascaderelationship_with_fax] ON [dbo].[ActivityPointerBase]
(
	[OriginatingActivityId] ASC,
	[OriginatingActivityIdTypeCode] ASC
)
WHERE ([OriginatingActivityId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_CampaignResponse_for_receivedon]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_CampaignResponse_for_receivedon] ON [dbo].[ActivityPointerBase]
(
	[ReceivedOn] ASC
)
WHERE ([ActivityTypeCode]=(4401))
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_Email_BaseConversationIndexHash]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Email_BaseConversationIndexHash] ON [dbo].[ActivityPointerBase]
(
	[BaseConversationIndexHash] ASC
)
INCLUDE ( 	[OwnerId],
	[OwningBusinessUnit],
	[ActivityId],
	[MessageId],
	[ConversationIndex],
	[OwnerIdType],
	[RegardingObjectId],
	[RegardingObjectIdYomiName],
	[RegardingObjectIdName],
	[RegardingObjectTypeCode],
	[EmailDirectionCode]) 
WHERE ([ActivityTypeCode]=(4202) AND [BaseConversationIndexHash] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_Email_Cover]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Email_Cover] ON [dbo].[ActivityPointerBase]
(
	[TrackingToken] ASC,
	[MessageId] ASC
)
WHERE ([ActivityTypeCode]=(4202))
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Email_EmailConnectorDequeue]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Email_EmailConnectorDequeue] ON [dbo].[ActivityPointerBase]
(
	[PostponeActivityProcessingUntil] ASC
)
INCLUDE ( 	[DeliveryPriorityCode],
	[ActualEnd],
	[SenderMailboxId]) 
WHERE ([StateCode]=(1) AND [ActivityTypeCode]=(4202) AND [PostponeActivityProcessingUntil] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_Email_MessageId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Email_MessageId] ON [dbo].[ActivityPointerBase]
(
	[MessageId] ASC,
	[EmailDirectionCode] ASC,
	[MessageIdDupCheck] ASC
)
WHERE ([ActivityTypeCode]=(4202) AND [MessageId] IS NOT NULL AND [EmailDirectionCode] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_activitypointer]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_activitypointer] ON [dbo].[ActivityPointerBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_regardingobjectid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_regardingobjectid] ON [dbo].[ActivityPointerBase]
(
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCode] ASC,
	[ActivityTypeCode] ASC
)
INCLUDE ( 	[OwnerId],
	[OwnerIdType]) 
WHERE ([RegardingObjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_serviceid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_serviceid] ON [dbo].[ActivityPointerBase]
(
	[ServiceId] ASC,
	[ActivityTypeCode] ASC
)
WHERE ([ServiceId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_incident_resolution_trend]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_incident_resolution_trend] ON [dbo].[ActivityPointerBase]
(
	[RegardingObjectId] ASC,
	[StateCode] ASC,
	[CreatedOn] ASC
)
INCLUDE ( 	[TimeSpent]) 
WHERE ([ActivityTypeCode]=(4206))
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_recurring_activities]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_recurring_activities] ON [dbo].[ActivityPointerBase]
(
	[SeriesId] ASC,
	[OriginalStartDate] ASC,
	[InstanceTypeCode] ASC,
	[ActivityId] ASC
)
WHERE ([SeriesId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_neglectedcase]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_neglectedcase] ON [dbo].[ActivityPointerBase]
(
	[RegardingObjectTypeCode] ASC
)
INCLUDE ( 	[OwningBusinessUnit],
	[ActivityId],
	[ModifiedOn],
	[RegardingObjectId],
	[OwnerId]) 
WHERE ([RegardingObjectTypeCode]=(112))
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_OpportunityClose_for_cascaderelationship_competitor_opportunity_activities]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_OpportunityClose_for_cascaderelationship_competitor_opportunity_activities] ON [dbo].[ActivityPointerBase]
(
	[CompetitorId] ASC
)
WHERE ([CompetitorId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_post_id]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_post_id] ON [dbo].[ActivityPointerBase]
(
	[PostId] ASC
)
WHERE ([PostId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_RecApptOwnerApptIdGlobalObjectId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_RecApptOwnerApptIdGlobalObjectId] ON [dbo].[ActivityPointerBase]
(
	[ActivityTypeCode] ASC,
	[RecApptMstrOutlookOwnerApptId] ASC,
	[RecApptMstrGlobalObjectId] ASC
)
WHERE ([ActivityTypeCode]=(4251) AND [RecApptMstrOutlookOwnerApptId] IS NOT NULL AND [RecApptMstrGlobalObjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_RecurringAppointmentMaster_PartialExpansionStatus]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_RecurringAppointmentMaster_PartialExpansionStatus] ON [dbo].[ActivityPointerBase]
(
	[ActivityId] ASC,
	[ExpansionStateCode] ASC,
	[SeriesStatus] ASC,
	[NextExpansionInstanceDate] ASC
)
WHERE ([ActivityTypeCode]=(4251))
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_ServiceAppointment_for_cascaderelationship_with_site]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_ServiceAppointment_for_cascaderelationship_with_site] ON [dbo].[ActivityPointerBase]
(
	[SiteId] ASC
)
WHERE ([SiteId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_thread_id]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_thread_id] ON [dbo].[ActivityPointerBase]
(
	[ThreadId] ASC
)
WHERE ([ThreadId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ActivityChart]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ActivityChart] ON [dbo].[ActivityPointerBase]
(
	[IsRegularActivity] ASC,
	[StateCode] ASC
)
INCLUDE ( 	[ActivityId],
	[ActivityTypeCode],
	[InstanceTypeCode],
	[ScheduledEnd],
	[ScheduledStart],
	[OwnerId],
	[StatusCode],
	[PriorityCode]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ActivityScheduledEnd]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ActivityScheduledEnd] ON [dbo].[ActivityPointerBase]
(
	[ScheduledEnd] ASC,
	[ActivityId] ASC,
	[IsRegularActivity] ASC,
	[StateCode] ASC
)
INCLUDE ( 	[ScheduledStart],
	[ActivityTypeCode],
	[InstanceTypeCode],
	[OwnerId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ActivityScheduledStart]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ActivityScheduledStart] ON [dbo].[ActivityPointerBase]
(
	[ScheduledStart] ASC,
	[ActivityId] ASC
)
INCLUDE ( 	[ScheduledEnd],
	[StateCode],
	[ActivityTypeCode],
	[IsRegularActivity],
	[InstanceTypeCode],
	[ServiceId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_ActivitySubject]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ActivitySubject] ON [dbo].[ActivityPointerBase]
(
	[Subject] ASC,
	[ActivityId] ASC
)
INCLUDE ( 	[StateCode],
	[ActivityTypeCode],
	[IsRegularActivity],
	[InstanceTypeCode],
	[ScheduledStart],
	[ScheduledEnd],
	[OwnerId],
	[ModifiedOn]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core_ActivityTypeCode]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core_ActivityTypeCode] ON [dbo].[ActivityPointerBase]
(
	[ActivityTypeCode] ASC,
	[StateCode] ASC,
	[ActivityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_CreatedOnSubject]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_CreatedOnSubject] ON [dbo].[ActivityPointerBase]
(
	[CreatedOn] ASC,
	[Subject] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_EmailSender]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EmailSender] ON [dbo].[ActivityPointerBase]
(
	[EmailSender] ASC,
	[EmailSenderObjectTypeCode] ASC
)
WHERE ([ActivityTypeCode]=(4202))
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_socialactivity_postauthor_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialactivity_postauthor_accounts] ON [dbo].[ActivityPointerBase]
(
	[PostAuthor] ASC,
	[PostAuthorType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_socialactivity_postauthoraccount_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialactivity_postauthoraccount_accounts] ON [dbo].[ActivityPointerBase]
(
	[PostAuthorAccount] ASC,
	[PostAuthorAccountType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_for_MyActivities]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_MyActivities] ON [dbo].[ActivityPointerBase]
(
	[ActivityId] ASC,
	[ScheduledStart] ASC,
	[ScheduledEnd] ASC,
	[ActivityTypeCode] ASC,
	[IsRegularActivity] ASC,
	[InstanceTypeCode] ASC,
	[StateCode] ASC
)
INCLUDE ( 	[Subject]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_for_MySubActivities]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_MySubActivities] ON [dbo].[ActivityPointerBase]
(
	[ActivityTypeCode] ASC,
	[ActivityId] ASC,
	[StateCode] ASC
)
INCLUDE ( 	[ScheduledStart],
	[ScheduledEnd],
	[IsRegularActivity],
	[InstanceTypeCode],
	[PriorityCode],
	[ActualEnd],
	[OwnerId],
	[Subject]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ModifiedOn]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ModifiedOn] ON [dbo].[ActivityPointerBase]
(
	[ModifiedOn] ASC,
	[ActivityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_MyClosedActivities]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_MyClosedActivities] ON [dbo].[ActivityPointerBase]
(
	[ActivityId] ASC,
	[ActualEnd] DESC
)
INCLUDE ( 	[StateCode],
	[ActivityTypeCode],
	[IsRegularActivity]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_OwnerIdSubject]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_OwnerIdSubject] ON [dbo].[ActivityPointerBase]
(
	[OwnerId] ASC,
	[Subject] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ParentActivityId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ParentActivityId] ON [dbo].[ActivityPointerBase]
(
	[ParentActivityId] ASC
)
WHERE ([ParentActivityId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ActivityPointerBase]
(
	[OwnerId] ASC,
	[CreatedOn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_StateCodeOwnerId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_StateCodeOwnerId] ON [dbo].[ActivityPointerBase]
(
	[StateCode] ASC,
	[OwnerId] ASC,
	[ScheduledEnd] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_StateCodeScheduledEnd]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_StateCodeScheduledEnd] ON [dbo].[ActivityPointerBase]
(
	[StateCode] ASC,
	[ScheduledEnd] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_StateCodeScheduledStart]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_StateCodeScheduledStart] ON [dbo].[ActivityPointerBase]
(
	[StateCode] ASC,
	[ScheduledStart] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_StateCodeSubject]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_StateCodeSubject] ON [dbo].[ActivityPointerBase]
(
	[StateCode] ASC,
	[Subject] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_StatusCodeActualEnd]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_StatusCodeActualEnd] ON [dbo].[ActivityPointerBase]
(
	[StatusCode] ASC,
	[ActualEnd] ASC,
	[Subject] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_SubActivityScheduledEnd]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_SubActivityScheduledEnd] ON [dbo].[ActivityPointerBase]
(
	[ActivityTypeCode] ASC,
	[ScheduledEnd] ASC,
	[ActivityId] ASC
)
INCLUDE ( 	[ScheduledStart],
	[StateCode],
	[IsRegularActivity],
	[InstanceTypeCode]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_SubActivityScheduledStart]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_SubActivityScheduledStart] ON [dbo].[ActivityPointerBase]
(
	[ActivityTypeCode] ASC,
	[ScheduledStart] ASC,
	[ActivityId] ASC
)
INCLUDE ( 	[ScheduledEnd],
	[StateCode],
	[IsRegularActivity],
	[InstanceTypeCode]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_SubActivitySubject]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_SubActivitySubject] ON [dbo].[ActivityPointerBase]
(
	[ActivityTypeCode] ASC,
	[Subject] ASC,
	[ActivityId] ASC
)
INCLUDE ( 	[StateCode],
	[StatusCode],
	[IsRegularActivity],
	[InstanceTypeCode],
	[ScheduledStart],
	[ScheduledEnd],
	[OwnerId],
	[ModifiedOn]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Sync_ActivityPointer]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Sync_ActivityPointer] ON [dbo].[ActivityPointerBase]
(
	[ActivityTypeCode] ASC,
	[VersionNumber] ASC
)
INCLUDE ( 	[ActivityId],
	[OwnerId],
	[OwningBusinessUnit]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_IsBilled]  DEFAULT ((0)) FOR [IsBilled]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_ActivityTypeCode]  DEFAULT ((-1)) FOR [ActivityTypeCode]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_PriorityCode]  DEFAULT ((1)) FOR [PriorityCode]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_IsWorkflowCreated]  DEFAULT ((0)) FOR [IsWorkflowCreated]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_SeriesStatus]  DEFAULT ((1)) FOR [SeriesStatus]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_ExpansionStateCode]  DEFAULT ((0)) FOR [ExpansionStateCode]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_RecApptMstrIsAllDayEvent]  DEFAULT ((0)) FOR [RecApptMstrIsAllDayEvent]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_InstanceTypeCode]  DEFAULT ((0)) FOR [InstanceTypeCode]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_IsRegularActivity]  DEFAULT ((1)) FOR [IsRegularActivity]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_ApptIsAllDayEvent]  DEFAULT ((0)) FOR [ApptIsAllDayEvent]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_ActualCost]  DEFAULT ((0)) FOR [ActualCost]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_IgnoreInactiveListMembers]  DEFAULT ((1)) FOR [IgnoreInactiveListMembers]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_DoNotSendOnOptOut]  DEFAULT ((1)) FOR [DoNotSendOnOptOut]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_ExcludeIfContactedInXDays]  DEFAULT ((0)) FOR [ExcludeIfContactedInXDays]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_BudgetedCost]  DEFAULT ((0)) FOR [BudgetedCost]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_SuccessCount]  DEFAULT ((0)) FOR [SuccessCount]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_TargetMembersCount]  DEFAULT ((0)) FOR [TargetMembersCount]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_FailureCount]  DEFAULT ((0)) FOR [FailureCount]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_Compressed]  DEFAULT ((0)) FOR [Compressed]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_ReadReceiptRequested]  DEFAULT ((0)) FOR [ReadReceiptRequested]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_DeliveryReceiptRequested]  DEFAULT ((0)) FOR [DeliveryReceiptRequested]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_MessageIdDupCheck]  DEFAULT ('cc8f99fd-486e-4c39-aef7-7dd4d5fdbd0a') FOR [MessageIdDupCheck]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_SvcApptIsAllDayEvent]  DEFAULT ((0)) FOR [SvcApptIsAllDayEvent]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_TimeSpent]  DEFAULT ((0)) FOR [TimeSpent]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_EmailAttachmentCount]  DEFAULT ((0)) FOR [EmailAttachmentCount]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_CorrelationMethod]  DEFAULT ((0)) FOR [CorrelationMethod]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_IsMapiPrivate]  DEFAULT ((0)) FOR [IsMapiPrivate]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_LeftVoiceMail]  DEFAULT ((0)) FOR [LeftVoiceMail]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_DeliveryPriorityCode]  DEFAULT ((1)) FOR [DeliveryPriorityCode]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_IsUnsafe]  DEFAULT ((0)) FOR [IsUnsafe]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_FollowEmailUserPreference]  DEFAULT ((0)) FOR [FollowEmailUserPreference]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_IsEmailFollowed]  DEFAULT ((0)) FOR [IsEmailFollowed]
GO
ALTER TABLE [dbo].[ActivityPointerBase] ADD  CONSTRAINT [DF_ActivityPointerBase_EmailReminderStatus]  DEFAULT ((0)) FOR [EmailReminderStatus]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [activity_campaignresponse] FOREIGN KEY([OriginatingActivityId])
REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [activity_campaignresponse]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [business_unit_activitypointer] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [business_unit_activitypointer]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [business_unit_socialactivity] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [business_unit_socialactivity]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [competitor_opportunity_activities] FOREIGN KEY([CompetitorId])
REFERENCES [dbo].[CompetitorBase] ([CompetitorId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [competitor_opportunity_activities]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [email_email_parentactivityid] FOREIGN KEY([ParentActivityId])
REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [email_email_parentactivityid]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [manualsla_activitypointer] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [manualsla_activitypointer]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [manualsla_appointment] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [manualsla_appointment]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [manualsla_email] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [manualsla_email]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [manualsla_fax] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [manualsla_fax]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [manualsla_letter] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [manualsla_letter]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [manualsla_phonecall] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [manualsla_phonecall]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [manualsla_serviceappointment] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [manualsla_serviceappointment]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [manualsla_socialactivity] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [manualsla_socialactivity]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [manualsla_task] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [manualsla_task]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [owner_activitypointers] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [owner_activitypointers]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [service_activity_pointers] FOREIGN KEY([ServiceId])
REFERENCES [dbo].[ServiceBase] ([ServiceId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [service_activity_pointers]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [site_service_appointments] FOREIGN KEY([SiteId])
REFERENCES [dbo].[SiteBase] ([SiteId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [site_service_appointments]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [Socialprofile_SocialActivities] FOREIGN KEY([PostFromProfileId])
REFERENCES [dbo].[SocialProfileBase] ([SocialProfileId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [Socialprofile_SocialActivities]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_ActivityPointer] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [TransactionCurrency_ActivityPointer]
GO
ALTER TABLE [dbo].[ActivityPointerBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_socialactivity] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ActivityPointerBase] CHECK CONSTRAINT [transactioncurrency_socialactivity]
GO
