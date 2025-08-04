CREATE TABLE [dbo].[ActivityPointerBase] (
    [ActivityId]                      UNIQUEIDENTIFIER NOT NULL,
    [ImportSequenceNumber]            INT              NULL,
    [PostURL]                         NVARCHAR (200)   NULL,
    [PostedOn]                        DATETIME         NULL,
    [SentimentValue]                  FLOAT (53)       NULL,
    [PostAuthor]                      UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [PostAuthorAccount]               UNIQUEIDENTIFIER NULL,
    [PostMessageType]                 INT              NULL,
    [SocialAdditionalParams]          NVARCHAR (MAX)   NULL,
    [PostToProfileId]                 NVARCHAR (200)   NULL,
    [SocialActivityDirectionCode]     BIT              NULL,
    [InResponseTo]                    NVARCHAR (160)   NULL,
    [PostFromProfileId]               UNIQUEIDENTIFIER NULL,
    [ThreadId]                        NVARCHAR (160)   NULL,
    [PostId]                          NVARCHAR (160)   NULL,
    [PostAuthorType]                  INT              NULL,
    [PostAuthorAccountName]           NVARCHAR (4000)  NULL,
    [PostAuthorAccountType]           INT              NULL,
    [PostAuthorName]                  NVARCHAR (4000)  NULL,
    [PostAuthorYomiName]              NVARCHAR (4000)  NULL,
    [PostAuthorAccountYomiName]       NVARCHAR (4000)  NULL,
    [TaskCategory]                    NVARCHAR (250)   NULL,
    [TaskSubcategory]                 NVARCHAR (250)   NULL,
    [TaskOverriddenCreatedOn]         DATETIME         NULL,
    [TaskSubscriptionId]              UNIQUEIDENTIFIER NULL,
    [TaskImportSequenceNumber]        INT              NULL,
    [CrmTaskAssignedUniqueId]         UNIQUEIDENTIFIER NULL,
    [PercentComplete]                 INT              NULL,
    [RecApptMstrOverriddenCreatedOn]  DATETIME         NULL,
    [RecApptMstrGlobalObjectId]       NVARCHAR (300)   NULL,
    [LastExpandedInstanceDate]        DATETIME         NULL,
    [GroupId]                         UNIQUEIDENTIFIER NULL,
    [NextExpansionInstanceDate]       DATETIME         NULL,
    [RecApptMstrLocation]             NVARCHAR (200)   NULL,
    [ExpansionStateCode]              INT              CONSTRAINT [DF_ActivityPointerBase_ExpansionStateCode] DEFAULT ((0)) NULL,
    [SeriesStatus]                    BIT              CONSTRAINT [DF_ActivityPointerBase_SeriesStatus] DEFAULT ((1)) NULL,
    [DeletedExceptionsList]           NVARCHAR (MAX)   NULL,
    [RecApptMstrIsAllDayEvent]        BIT              CONSTRAINT [DF_ActivityPointerBase_RecApptMstrIsAllDayEvent] DEFAULT ((0)) NULL,
    [RecApptMstrOutlookOwnerApptId]   INT              NULL,
    [RecApptMstrSubscriptionId]       UNIQUEIDENTIFIER NULL,
    [RecApptMstrCategory]             NVARCHAR (250)   NULL,
    [RecApptMstrSubcategory]          NVARCHAR (250)   NULL,
    [RecApptMstrImportSequenceNumber] INT              NULL,
    [LetterDirectionCode]             BIT              NULL,
    [LetterSubscriptionId]            UNIQUEIDENTIFIER NULL,
    [LetterCategory]                  NVARCHAR (250)   NULL,
    [LetterImportSequenceNumber]      INT              NULL,
    [Address]                         NVARCHAR (200)   NULL,
    [LetterSubcategory]               NVARCHAR (250)   NULL,
    [LetterOverriddenCreatedOn]       DATETIME         NULL,
    [PhoneSubcategory]                NVARCHAR (250)   NULL,
    [PhoneSubscriptionId]             UNIQUEIDENTIFIER NULL,
    [PhoneOverriddenCreatedOn]        DATETIME         NULL,
    [PhoneNumber]                     NVARCHAR (200)   NULL,
    [PhoneImportSequenceNumber]       INT              NULL,
    [PhoneCategory]                   NVARCHAR (250)   NULL,
    [PhoneDirectionCode]              BIT              NULL,
    [EmailReminderText]               NVARCHAR (1250)  NULL,
    [EmailImportSequenceNumber]       INT              NULL,
    [ReminderActionCardId]            UNIQUEIDENTIFIER NULL,
    [EmailReminderExpiryTime]         DATETIME         NULL,
    [LinksClickedCount]               INT              NULL,
    [EmailAttachmentCount]            INT              CONSTRAINT [DF_ActivityPointerBase_EmailAttachmentCount] DEFAULT ((0)) NOT NULL,
    [ReplyCount]                      INT              NULL,
    [SubmittedBy]                     NVARCHAR (250)   NULL,
    [MimeType]                        NVARCHAR (256)   NULL,
    [ToRecipients]                    NVARCHAR (500)   NULL,
    [Compressed]                      BIT              CONSTRAINT [DF_ActivityPointerBase_Compressed] DEFAULT ((0)) NULL,
    [ConversationIndex]               NVARCHAR (2048)  NULL,
    [EmailOverriddenCreatedOn]        DATETIME         NULL,
    [AttachmentOpenCount]             INT              NULL,
    [LastOpenedTime]                  DATETIME         NULL,
    [IsEmailFollowed]                 BIT              CONSTRAINT [DF_ActivityPointerBase_IsEmailFollowed] DEFAULT ((0)) NULL,
    [EmailCategory]                   NVARCHAR (250)   NULL,
    [EmailSender]                     UNIQUEIDENTIFIER NULL,
    [InReplyTo]                       NVARCHAR (320)   NULL,
    [MessageIdDupCheck]               UNIQUEIDENTIFIER CONSTRAINT [DF_ActivityPointerBase_MessageIdDupCheck] DEFAULT ('cc8f99fd-486e-4c39-aef7-7dd4d5fdbd0a') NULL,
    [FollowEmailUserPreference]       BIT              CONSTRAINT [DF_ActivityPointerBase_FollowEmailUserPreference] DEFAULT ((0)) NULL,
    [MessageId]                       NVARCHAR (320)   NULL,
    [EmailSubcategory]                NVARCHAR (250)   NULL,
    [TrackingToken]                   NVARCHAR (50)    NULL,
    [Notifications]                   INT              NULL,
    [DeliveryReceiptRequested]        BIT              CONSTRAINT [DF_ActivityPointerBase_DeliveryReceiptRequested] DEFAULT ((0)) NULL,
    [EmailReminderStatus]             INT              CONSTRAINT [DF_ActivityPointerBase_EmailReminderStatus] DEFAULT ((0)) NULL,
    [IsEmailReminderSet]              BIT              CONSTRAINT [DF_ActivityPointerBase_IsEmailReminderSet] DEFAULT ((0)) NULL,
    [OpenCount]                       INT              NULL,
    [ConversationTrackingId]          UNIQUEIDENTIFIER NULL,
    [SendersAccount]                  UNIQUEIDENTIFIER NULL,
    [CorrelationMethod]               INT              CONSTRAINT [DF_ActivityPointerBase_CorrelationMethod] DEFAULT ((0)) NULL,
    [EmailTrackingId]                 UNIQUEIDENTIFIER NULL,
    [EmailDirectionCode]              BIT              NULL,
    [IsUnsafe]                        INT              CONSTRAINT [DF_ActivityPointerBase_IsUnsafe] DEFAULT ((0)) NULL,
    [BaseConversationIndexHash]       INT              NULL,
    [DeliveryAttempts]                INT              NULL,
    [ReadReceiptRequested]            BIT              CONSTRAINT [DF_ActivityPointerBase_ReadReceiptRequested] DEFAULT ((0)) NULL,
    [TemplateId]                      UNIQUEIDENTIFIER NULL,
    [Sender]                          NVARCHAR (250)   NULL,
    [ParentActivityId]                UNIQUEIDENTIFIER NULL,
    [EmailReminderType]               INT              NULL,
    [DelayedEmailSendTime]            DATETIME         NULL,
    [EmailSenderObjectTypeCode]       INT              NULL,
    [EmailSenderName]                 NVARCHAR (4000)  NULL,
    [SendersAccountName]              NVARCHAR (4000)  NULL,
    [SendersAccountObjectTypeCode]    INT              NULL,
    [EmailSenderYomiName]             NVARCHAR (4000)  NULL,
    [SendersAccountYomiName]          NVARCHAR (4000)  NULL,
    [FaxNumber]                       NVARCHAR (200)   NULL,
    [FaxImportSequenceNumber]         INT              NULL,
    [FaxSubcategory]                  NVARCHAR (250)   NULL,
    [Tsid]                            NVARCHAR (20)    NULL,
    [FaxOverriddenCreatedOn]          DATETIME         NULL,
    [CoverPageName]                   NVARCHAR (100)   NULL,
    [NumberOfPages]                   INT              NULL,
    [FaxCategory]                     NVARCHAR (250)   NULL,
    [FaxDirectionCode]                BIT              NULL,
    [FaxSubscriptionId]               UNIQUEIDENTIFIER NULL,
    [BillingCode]                     NVARCHAR (50)    NULL,
    [OriginalStartDate]               DATETIME         NULL,
    [ApptOutlookOwnerApptId]          INT              NULL,
    [ModifiedFieldsMask]              NVARCHAR (MAX)   NULL,
    [ApptGlobalObjectId]              NVARCHAR (300)   NULL,
    [ApptLocation]                    NVARCHAR (200)   NULL,
    [AttachmentErrors]                INT              NULL,
    [ApptImportSequenceNumber]        INT              NULL,
    [ApptOverriddenCreatedOn]         DATETIME         NULL,
    [ApptIsAllDayEvent]               BIT              CONSTRAINT [DF_ActivityPointerBase_ApptIsAllDayEvent] DEFAULT ((0)) NULL,
    [ApptSubscriptionId]              UNIQUEIDENTIFIER NULL,
    [ApptSubcategory]                 NVARCHAR (250)   NULL,
    [ApptCategory]                    NVARCHAR (250)   NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [IsBilled]                        BIT              CONSTRAINT [DF_ActivityPointerBase_IsBilled] DEFAULT ((0)) NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [ActualEnd]                       DATETIME         NULL,
    [ScheduledDurationMinutes]        INT              NULL,
    [ExchangeWebLink]                 NVARCHAR (1250)  NULL,
    [SentOn]                          DATETIME         NULL,
    [ActualStart]                     DATETIME         NULL,
    [SenderMailboxId]                 UNIQUEIDENTIFIER NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [StateCode]                       INT              NOT NULL,
    [ScheduledStart]                  DATETIME         NULL,
    [ActivityTypeCode]                INT              CONSTRAINT [DF_ActivityPointerBase_ActivityTypeCode] DEFAULT ((-1)) NOT NULL,
    [TransactionCurrencyId]           UNIQUEIDENTIFIER NULL,
    [OnHoldTime]                      INT              NULL,
    [IsMapiPrivate]                   BIT              CONSTRAINT [DF_ActivityPointerBase_IsMapiPrivate] DEFAULT ((0)) NULL,
    [Community]                       INT              NULL,
    [ExchangeItemId]                  NVARCHAR (200)   NULL,
    [DeliveryLastAttemptedOn]         DATETIME         NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [Subject]                         NVARCHAR (400)   NULL,
    [LeftVoiceMail]                   BIT              CONSTRAINT [DF_ActivityPointerBase_LeftVoiceMail] DEFAULT ((0)) NULL,
    [OwnerId]                         UNIQUEIDENTIFIER CONSTRAINT [DF_ActivityPointerBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [StageId]                         UNIQUEIDENTIFIER NULL,
    [SeriesId]                        UNIQUEIDENTIFIER NULL,
    [LastOnHoldTime]                  DATETIME         NULL,
    [RegardingObjectId]               UNIQUEIDENTIFIER NULL,
    [ActivityAdditionalParams]        NVARCHAR (MAX)   NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [DeliveryPriorityCode]            INT              CONSTRAINT [DF_ActivityPointerBase_DeliveryPriorityCode] DEFAULT ((1)) NULL,
    [SLAInvokedId]                    UNIQUEIDENTIFIER NULL,
    [SLAId]                           UNIQUEIDENTIFIER NULL,
    [SortDate]                        DATETIME         NULL,
    [ScheduledEnd]                    DATETIME         NULL,
    [StatusCode]                      INT              NULL,
    [InstanceTypeCode]                INT              CONSTRAINT [DF_ActivityPointerBase_InstanceTypeCode] DEFAULT ((0)) NOT NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [PostponeActivityProcessingUntil] DATETIME         NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [ExchangeRate]                    DECIMAL (23, 10) NULL,
    [IsRegularActivity]               BIT              CONSTRAINT [DF_ActivityPointerBase_IsRegularActivity] DEFAULT ((1)) NOT NULL,
    [OwningBusinessUnit]              UNIQUEIDENTIFIER NULL,
    [ProcessId]                       UNIQUEIDENTIFIER NULL,
    [CreatedOn]                       DATETIME         NULL,
    [IsWorkflowCreated]               BIT              CONSTRAINT [DF_ActivityPointerBase_IsWorkflowCreated] DEFAULT ((0)) NULL,
    [TraversedPath]                   NVARCHAR (1250)  NULL,
    [ActualDurationMinutes]           INT              NULL,
    [PriorityCode]                    INT              CONSTRAINT [DF_ActivityPointerBase_PriorityCode] DEFAULT ((1)) NULL,
    [RegardingObjectIdYomiName]       NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]         INT              NULL,
    [RegardingObjectIdName]           NVARCHAR (4000)  NULL,
    [OwnerIdType]                     INT              CONSTRAINT [DF_ActivityPointerBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RecApptIsUnsafe]                 INT              CONSTRAINT [DF_ActivityPointerBase_RecApptIsUnsafe] DEFAULT ((0)) NULL,
    [IsDraft]                         BIT              CONSTRAINT [DF_ActivityPointerBase_IsDraft] DEFAULT ((0)) NOT NULL,
    [ApptIsUnsafe]                    INT              CONSTRAINT [DF_ActivityPointerBase_ApptIsUnsafe] DEFAULT ((0)) NULL,
    [ImportSequenceNumber_4406]       INT              NULL,
    [OverriddenCreatedOn_4406]        DATETIME         NULL,
    [BulkOperationNumber]             NVARCHAR (32)    NULL,
    [CreatedRecordTypeCode]           INT              NULL,
    [ErrorNumber]                     INT              NULL,
    [FailureCount]                    INT              CONSTRAINT [DF_ActivityPointerBase_FailureCount] DEFAULT ((0)) NULL,
    [OperationTypeCode]               INT              NULL,
    [WorkflowInfo]                    NVARCHAR (MAX)   NULL,
    [Parameters]                      NVARCHAR (MAX)   NULL,
    [SuccessCount]                    INT              CONSTRAINT [DF_ActivityPointerBase_SuccessCount] DEFAULT ((0)) NULL,
    [TargetedRecordTypeCode]          INT              NULL,
    [TargetMembersCount]              INT              CONSTRAINT [DF_ActivityPointerBase_TargetMembersCount] DEFAULT ((0)) NULL,
    [CampActImportSequenceNumber]     INT              NULL,
    [CampActOverriddenCreatedOn]      DATETIME         NULL,
    [ActualCost]                      MONEY            CONSTRAINT [DF_ActivityPointerBase_ActualCost] DEFAULT ((0)) NULL,
    [ActualCost_Base]                 MONEY            NULL,
    [BudgetedCost]                    MONEY            CONSTRAINT [DF_ActivityPointerBase_BudgetedCost] DEFAULT ((0)) NULL,
    [BudgetedCost_Base]               MONEY            NULL,
    [CampActCategory]                 NVARCHAR (250)   NULL,
    [CampActChannelTypeCode]          INT              NULL,
    [DoNotSendOnOptOut]               BIT              CONSTRAINT [DF_ActivityPointerBase_DoNotSendOnOptOut] DEFAULT ((1)) NULL,
    [ExcludeIfContactedInXDays]       INT              CONSTRAINT [DF_ActivityPointerBase_ExcludeIfContactedInXDays] DEFAULT ((0)) NULL,
    [IgnoreInactiveListMembers]       BIT              CONSTRAINT [DF_ActivityPointerBase_IgnoreInactiveListMembers] DEFAULT ((1)) NULL,
    [CampActSubcategory]              NVARCHAR (250)   NULL,
    [TypeCode]                        INT              NULL,
    [CampResImportSequenceNumber]     INT              NULL,
    [CampResOverriddenCreatedOn]      DATETIME         NULL,
    [CampResCategory]                 NVARCHAR (250)   NULL,
    [CampResChannelTypeCode]          INT              NULL,
    [CompanyName]                     NVARCHAR (100)   NULL,
    [EMailAddress]                    NVARCHAR (100)   NULL,
    [Fax]                             NVARCHAR (50)    NULL,
    [FirstName]                       NVARCHAR (50)    NULL,
    [LastName]                        NVARCHAR (50)    NULL,
    [OriginatingActivityId]           UNIQUEIDENTIFIER NULL,
    [PromotionCodeName]               NVARCHAR (250)   NULL,
    [ReceivedOn]                      DATETIME         NULL,
    [ResponseCode]                    INT              NULL,
    [CampResSubcategory]              NVARCHAR (250)   NULL,
    [Telephone]                       NVARCHAR (50)    NULL,
    [YomiCompanyName]                 NVARCHAR (100)   NULL,
    [YomiFirstName]                   NVARCHAR (150)   NULL,
    [YomiLastName]                    NVARCHAR (150)   NULL,
    [OriginatingActivityIdTypeCode]   INT              NULL,
    [OriginatingActivityIdYomiName]   NVARCHAR (4000)  NULL,
    [ServiceId]                       UNIQUEIDENTIFIER NULL,
    [IncResImportSequenceNumber]      INT              NULL,
    [IncResOverriddenCreatedOn]       DATETIME         NULL,
    [IncResCategory]                  NVARCHAR (250)   NULL,
    [IncResSubcategory]               NVARCHAR (250)   NULL,
    [TimeSpent]                       INT              CONSTRAINT [DF_ActivityPointerBase_TimeSpent] DEFAULT ((0)) NULL,
    [CreatedByExternalParty]          UNIQUEIDENTIFIER NULL,
    [ModifiedByExternalParty]         UNIQUEIDENTIFIER NULL,
    [SvcApptImportSequenceNumber]     INT              NULL,
    [SvcApptOverriddenCreatedOn]      DATETIME         NULL,
    [SvcApptCategory]                 NVARCHAR (250)   NULL,
    [SvcApptIsAllDayEvent]            BIT              CONSTRAINT [DF_ActivityPointerBase_SvcApptIsAllDayEvent] DEFAULT ((0)) NULL,
    [SvcApptLocation]                 NVARCHAR (500)   NULL,
    [SiteId]                          UNIQUEIDENTIFIER NULL,
    [SvcApptSubcategory]              NVARCHAR (250)   NULL,
    [SvcApptSubscriptionId]           UNIQUEIDENTIFIER NULL,
    [OppCloseImportSequenceNumber]    INT              NULL,
    [OppCloseOverriddenCreatedOn]     DATETIME         NULL,
    [ActualRevenue]                   MONEY            NULL,
    [ActualRevenue_Base]              MONEY            NULL,
    [OppCloseCategory]                NVARCHAR (250)   NULL,
    [CompetitorId]                    UNIQUEIDENTIFIER NULL,
    [OppCloseSubcategory]             NVARCHAR (250)   NULL,
    [OrdCloseImportSequenceNumber]    INT              NULL,
    [OrdCloseOverriddenCreatedOn]     DATETIME         NULL,
    [OrdCloseCategory]                NVARCHAR (250)   NULL,
    [OrderNumber]                     NVARCHAR (100)   NULL,
    [OrdCloseRevision]                INT              NULL,
    [OrdCloseSubcategory]             NVARCHAR (250)   NULL,
    [QteCloseImportSequenceNumber]    INT              NULL,
    [QteCloseOverriddenCreatedOn]     DATETIME         NULL,
    [QteCloseCategory]                NVARCHAR (250)   NULL,
    [QuoteNumber]                     NVARCHAR (100)   NULL,
    [QteCloseRevision]                INT              NULL,
    [QteCloseSubcategory]             NVARCHAR (250)   NULL,
    [ReservedForInternalUse]          NVARCHAR (MAX)   NULL,
    [CorrelatedActivityId]            UNIQUEIDENTIFIER NULL,
    [TotalTimeSpent]                  INT              CONSTRAINT [DF_ActivityPointerBase_TotalTimeSpent] DEFAULT ((0)) NULL,
    [ResolutionTypeCode]              INT              NULL,
    [OpportunityStatusCode]           INT              NULL,
    [OpportunityStateCode]            INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_ActivityPointer] PRIMARY KEY CLUSTERED ([ActivityId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [activity_campaignresponse] FOREIGN KEY ([OriginatingActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]),
    CONSTRAINT [business_unit_activitypointer] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [business_unit_socialactivity] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [competitor_opportunity_activities] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId]),
    CONSTRAINT [manualsla_activitypointer] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [manualsla_appointment] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [manualsla_email] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [manualsla_fax] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [manualsla_letter] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [manualsla_phonecall] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [manualsla_serviceappointment] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [manualsla_socialactivity] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [manualsla_task] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [owner_activitypointers] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [owner_appointments] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [owner_emails] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [owner_faxes] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [owner_letters] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [owner_phonecalls] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [owner_recurringappointmentmasters] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [owner_socialactivities] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [owner_tasks] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [owner_untrackedemails] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [service_activity_pointers] FOREIGN KEY ([ServiceId]) REFERENCES [dbo].[ServiceBase] ([ServiceId]),
    CONSTRAINT [site_service_appointments] FOREIGN KEY ([SiteId]) REFERENCES [dbo].[SiteBase] ([SiteId]),
    CONSTRAINT [Socialprofile_SocialActivities] FOREIGN KEY ([PostFromProfileId]) REFERENCES [dbo].[SocialProfileBase] ([SocialProfileId]),
    CONSTRAINT [TransactionCurrency_ActivityPointer] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [transactioncurrency_socialactivity] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ActivityPointerBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ActivityPointerBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_ApptOwnerApptId_ApptGlobalObjectId]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [ApptOutlookOwnerApptId] ASC, [ApptGlobalObjectId] ASC) WHERE ([ActivityTypeCode]=(4201) AND [ApptOutlookOwnerApptId] IS NOT NULL AND [ApptGlobalObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_recurring_activities]
    ON [dbo].[ActivityPointerBase]([SeriesId] ASC, [OriginalStartDate] ASC, [InstanceTypeCode] ASC, [ActivityId] ASC) WHERE ([SeriesId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Appointment_sync_recurring_instances]
    ON [dbo].[ActivityPointerBase]([OriginalStartDate] ASC, [ActivityId] ASC, [InstanceTypeCode] ASC, [SeriesId] ASC) WHERE ([OriginalStartDate] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Email_BaseConversationIndexHash]
    ON [dbo].[ActivityPointerBase]([BaseConversationIndexHash] ASC)
    INCLUDE([OwnerId], [OwningBusinessUnit], [ActivityId], [MessageId], [ConversationIndex], [OwnerIdType], [RegardingObjectId], [RegardingObjectIdYomiName], [RegardingObjectIdName], [RegardingObjectTypeCode], [EmailDirectionCode]) WHERE ([ActivityTypeCode]=(4202) AND [BaseConversationIndexHash] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentActivityId]
    ON [dbo].[ActivityPointerBase]([ParentActivityId] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Email_MessageId]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [MessageId] ASC, [EmailDirectionCode] ASC, [MessageIdDupCheck] ASC) WHERE ([ActivityTypeCode]=(4202) AND [MessageId] IS NOT NULL AND [EmailDirectionCode] IS NOT NULL) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_Email_Cover]
    ON [dbo].[ActivityPointerBase]([TrackingToken] ASC, [MessageId] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_EmailSender]
    ON [dbo].[ActivityPointerBase]([EmailSender] ASC, [EmailSenderObjectTypeCode] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeScheduledEnd]
    ON [dbo].[ActivityPointerBase]([StateCode] ASC, [ScheduledEnd] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ActivityPointerBase]([OwnerId] ASC, [CreatedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Sync_VersionNumber]
    ON [dbo].[ActivityPointerBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync_ActivityPointer]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [VersionNumber] ASC)
    INCLUDE([ActivityId], [OwnerId], [OwningBusinessUnit]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core_ActivityTypeCode]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [StateCode] ASC, [ActivityId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ActivityScheduledEnd]
    ON [dbo].[ActivityPointerBase]([ScheduledEnd] ASC, [ActivityId] ASC, [IsRegularActivity] ASC, [StateCode] ASC)
    INCLUDE([ScheduledStart], [ActivityTypeCode], [InstanceTypeCode], [OwnerId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_MyClosedActivities]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC, [ActualEnd] DESC)
    INCLUDE([StateCode], [ActivityTypeCode], [IsRegularActivity]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_MySubActivities]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [ActivityId] ASC, [StateCode] ASC)
    INCLUDE([ScheduledStart], [ScheduledEnd], [IsRegularActivity], [InstanceTypeCode], [PriorityCode], [ActualEnd], [OwnerId], [Subject]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeSubject]
    ON [dbo].[ActivityPointerBase]([StateCode] ASC, [Subject] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ModifiedOn]
    ON [dbo].[ActivityPointerBase]([ModifiedOn] ASC, [ActivityId] ASC)
    INCLUDE([StateCode], [IsRegularActivity], [ActivityTypeCode]) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_SubActivityScheduledEnd]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [ScheduledEnd] ASC, [ActivityId] ASC)
    INCLUDE([ScheduledStart], [StateCode], [IsRegularActivity], [InstanceTypeCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SubActivitySubject]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [Subject] ASC, [ActivityId] ASC)
    INCLUDE([StateCode], [StatusCode], [IsRegularActivity], [InstanceTypeCode], [ScheduledStart], [ScheduledEnd], [OwnerId], [ModifiedOn]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SubActivityScheduledStart]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [ScheduledStart] ASC, [ActivityId] ASC)
    INCLUDE([ScheduledEnd], [StateCode], [IsRegularActivity], [InstanceTypeCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CreatedOnSubject]
    ON [dbo].[ActivityPointerBase]([CreatedOn] ASC, [Subject] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeOwnerId]
    ON [dbo].[ActivityPointerBase]([StateCode] ASC, [OwnerId] ASC, [ScheduledEnd] ASC)
    INCLUDE([Subject], [PriorityCode], [RegardingObjectId], [ActivityId], [ProcessId], [VersionNumber], [RegardingObjectTypeCode], [RegardingObjectIdName], [RegardingObjectIdYomiName]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_neglectedcase]
    ON [dbo].[ActivityPointerBase]([RegardingObjectTypeCode] ASC)
    INCLUDE([OwningBusinessUnit], [ActivityId], [ModifiedOn], [RegardingObjectId], [OwnerId]) WHERE ([RegardingObjectTypeCode]=(112)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ActivityChart]
    ON [dbo].[ActivityPointerBase]([IsRegularActivity] ASC, [StateCode] ASC)
    INCLUDE([ActivityId], [ActivityTypeCode], [InstanceTypeCode], [ScheduledEnd], [ScheduledStart], [OwnerId], [StatusCode], [PriorityCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ActivitySubject]
    ON [dbo].[ActivityPointerBase]([Subject] ASC, [ActivityId] ASC)
    INCLUDE([StateCode], [ActivityTypeCode], [IsRegularActivity], [InstanceTypeCode], [ScheduledStart], [ScheduledEnd], [OwnerId], [ModifiedOn]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_MyActivities]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC, [ScheduledStart] ASC, [ScheduledEnd] ASC, [ActivityTypeCode] ASC, [IsRegularActivity] ASC, [InstanceTypeCode] ASC, [StateCode] ASC)
    INCLUDE([Subject]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_regardingobjectid]
    ON [dbo].[ActivityPointerBase]([RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC, [ActivityTypeCode] ASC)
    INCLUDE([OwnerId], [OwnerIdType]) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_activitypointer]
    ON [dbo].[ActivityPointerBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Email_EmailConnectorDequeue]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [StateCode] ASC, [PostponeActivityProcessingUntil] ASC)
    INCLUDE([DeliveryPriorityCode], [ActualEnd], [SenderMailboxId]) WHERE ([ActivityTypeCode]=(4202)) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_StatusCodeActualEnd]
    ON [dbo].[ActivityPointerBase]([StatusCode] ASC, [ActualEnd] ASC, [Subject] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_filtered_activities]
    ON [dbo].[ActivityPointerBase]([StateCode] ASC, [ActivityTypeCode] ASC, [ModifiedOn] ASC)
    INCLUDE([OwnerId], [CreatedOn], [PriorityCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_OwnerIdSubject]
    ON [dbo].[ActivityPointerBase]([OwnerId] ASC, [Subject] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RecApptOwnerApptIdGlobalObjectId]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [RecApptMstrOutlookOwnerApptId] ASC, [RecApptMstrGlobalObjectId] ASC) WHERE ([ActivityTypeCode]=(4251) AND [RecApptMstrOutlookOwnerApptId] IS NOT NULL AND [RecApptMstrGlobalObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RecurringAppointmentMaster_PartialExpansionStatus]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC, [ExpansionStateCode] ASC, [SeriesStatus] ASC, [NextExpansionInstanceDate] ASC) WHERE ([ActivityTypeCode]=(4251)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_thread_id]
    ON [dbo].[ActivityPointerBase]([ThreadId] ASC) WHERE ([ThreadId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialactivity_postauthor_accounts]
    ON [dbo].[ActivityPointerBase]([PostAuthor] ASC, [PostAuthorType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_post_id]
    ON [dbo].[ActivityPointerBase]([PostId] ASC) WHERE ([PostId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialactivity_postauthoraccount_accounts]
    ON [dbo].[ActivityPointerBase]([PostAuthorAccount] ASC, [PostAuthorAccountType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9CCC2D8E9768DD11B1B000155D869F00_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ApptGlobalObjectId]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [ApptGlobalObjectId] ASC) WHERE ([ActivityTypeCode]=(4201)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_2AEB5A3ECB7547348D0C6873FA8D5126_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([ApptLocation], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_066AA902B2E0422EA137E5404DC99BDA_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_CampaignResponse_for_receivedon]
    ON [dbo].[ActivityPointerBase]([ReceivedOn] ASC) WHERE ([ActivityTypeCode]=(4401)) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_CampaignResponse_for_cascaderelationship_with_fax]
    ON [dbo].[ActivityPointerBase]([OriginatingActivityId] ASC, [OriginatingActivityIdTypeCode] ASC) WHERE ([OriginatingActivityId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_6E2A4D0C99D448BA9513D3183D92C093_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([ResponseCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_BulkOperation_Core]
    ON [dbo].[ActivityPointerBase]([OperationTypeCode] ASC) WHERE ([ActivityTypeCode]=(4406)) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_BulkOperationNumber]
    ON [dbo].[ActivityPointerBase]([BulkOperationNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_2C9E85433E3B4F8DAEDFB8A43446619D_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([CreatedRecordTypeCode], [TargetMembersCount], [SuccessCount], [FailureCount], [OperationTypeCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_SendersAccount]
    ON [dbo].[ActivityPointerBase]([SendersAccount] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_MessageId]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [MessageId] ASC, [EmailDirectionCode] ASC, [MessageIdDupCheck] ASC) WHERE ([ActivityTypeCode]=(4202)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_activitytypecodeowneridemaildirectioncodeactualendstatuscode]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [OwnerId] ASC, [EmailDirectionCode] ASC, [ActualEnd] ASC, [StatusCode] ASC) WHERE ([ActivityTypeCode]=(4202)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_unsentemail]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [StateCode] ASC, [EmailDirectionCode] ASC, [DeliveryAttempts] ASC, [ActivityId] ASC)
    INCLUDE([StatusCode]) WHERE ([ActivityTypeCode]=(4202)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ActivityTypecodeTrackingToken]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [TrackingToken] ASC) WHERE ([ActivityTypeCode]=(4202) AND [TrackingToken] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5F3C09549208455591459F36C02B2582_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([OpenCount], [AttachmentOpenCount], [LinksClickedCount], [ReplyCount], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeScheduledStart]
    ON [dbo].[ActivityPointerBase]([StateCode] ASC, [ScheduledStart] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_ServiceAppointment_for_cascaderelationship_with_site]
    ON [dbo].[ActivityPointerBase]([SiteId] ASC) WHERE ([SiteId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ServiceId]
    ON [dbo].[ActivityPointerBase]([ServiceId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SiteId]
    ON [dbo].[ActivityPointerBase]([SiteId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_FE5C487D0FF54271A650CBE2CC171A8D_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([SiteId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_B2397CA286724863BC69B65802061665_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_owner_tasks]
    ON [dbo].[ActivityPointerBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_57973B28635041E686D704BF4EEC2358_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_0B7F57E97772427DBF9CBD4DB3EB1682_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_owner_phonecalls]
    ON [dbo].[ActivityPointerBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_CreatedByStateCodeOwnerId]
    ON [dbo].[ActivityPointerBase]([CreatedBy] ASC, [StateCode] ASC, [OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_SLAId]
    ON [dbo].[ActivityPointerBase]([SLAId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ActivityScheduledStart]
    ON [dbo].[ActivityPointerBase]([ScheduledStart] ASC, [ActivityId] ASC)
    INCLUDE([ScheduledEnd], [StateCode], [ActivityTypeCode], [IsRegularActivity], [InstanceTypeCode], [ServiceId]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_SLAInvokedId]
    ON [dbo].[ActivityPointerBase]([SLAInvokedId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_serviceid]
    ON [dbo].[ActivityPointerBase]([ServiceId] ASC, [ActivityTypeCode] ASC) WHERE ([ServiceId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_2AEEE36CAEFD44F5B3B5367B69BDC371]
    ON [dbo].[ActivityPointerBase]([Subject] ASC, [ActivityId] ASC)
    INCLUDE([ActivityTypeCode], [StateCode], [ScheduledStart], [ScheduledEnd], [OwnerId], [OwnerIdType], [CreatedBy], [RegardingObjectId], [RegardingObjectIdYomiName], [RegardingObjectIdName], [RegardingObjectTypeCode], [PriorityCode], [InstanceTypeCode], [Community], [IsRegularActivity], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_2AEEE36CAEFD44F5B3B5367B69BDC371]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([Subject], [ActivityTypeCode], [StateCode], [ScheduledStart], [ScheduledEnd], [OwnerId], [OwnerIdType], [CreatedBy], [RegardingObjectId], [RegardingObjectIdYomiName], [RegardingObjectIdName], [RegardingObjectTypeCode], [PriorityCode], [InstanceTypeCode], [Community], [IsRegularActivity], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_825AA2AAE05749F88F706145B08FC169_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_96205E80DD82443A900DB4439A4B2380_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5785F079F94F498997119F8E003B606E_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([PostFromProfileId], [SentimentValue], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_7D56745B3E494074BC8868E2353BE6B3_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_incident_resolution_trend]
    ON [dbo].[ActivityPointerBase]([RegardingObjectId] ASC, [StateCode] ASC, [CreatedOn] ASC)
    INCLUDE([TimeSpent]) WHERE ([ActivityTypeCode]=(4206)) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_E5748A89BE5C47848A77BC30FBEA5FFB_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_OpportunityClose_for_cascaderelationship_competitor_opportunity_activities]
    ON [dbo].[ActivityPointerBase]([CompetitorId] ASC) WHERE ([CompetitorId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_991090F99717413287E478B834F164FD_Primary]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

