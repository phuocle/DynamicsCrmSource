CREATE TABLE [dbo].[ActivityPointerBase] (
    [OwningBusinessUnit]              UNIQUEIDENTIFIER NULL,
    [ActualEnd]                       DATETIME         NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [ActivityId]                      UNIQUEIDENTIFIER NOT NULL,
    [IsBilled]                        BIT              CONSTRAINT [DF_ActivityPointerBase_IsBilled] DEFAULT ((0)) NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [ServiceId]                       UNIQUEIDENTIFIER NULL,
    [ActivityTypeCode]                INT              CONSTRAINT [DF_ActivityPointerBase_ActivityTypeCode] DEFAULT ((-1)) NOT NULL,
    [StateCode]                       INT              NOT NULL,
    [ScheduledEnd]                    DATETIME         NULL,
    [ScheduledDurationMinutes]        INT              NULL,
    [ActualDurationMinutes]           INT              NULL,
    [StatusCode]                      INT              NULL,
    [ActualStart]                     DATETIME         NULL,
    [CreatedOn]                       DATETIME         NULL,
    [PriorityCode]                    INT              CONSTRAINT [DF_ActivityPointerBase_PriorityCode] DEFAULT ((1)) NULL,
    [RegardingObjectId]               UNIQUEIDENTIFIER NULL,
    [Subject]                         NVARCHAR (200)   NULL,
    [IsWorkflowCreated]               BIT              CONSTRAINT [DF_ActivityPointerBase_IsWorkflowCreated] DEFAULT ((0)) NULL,
    [ScheduledStart]                  DATETIME         NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [RegardingObjectTypeCode]         INT              NULL,
    [RegardingObjectIdName]           NVARCHAR (4000)  NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [RegardingObjectIdYomiName]       NVARCHAR (4000)  NULL,
    [RecApptMstrOverriddenCreatedOn]  DATETIME         NULL,
    [RecApptMstrGlobalObjectId]       NVARCHAR (300)   NULL,
    [SeriesStatus]                    BIT              CONSTRAINT [DF_ActivityPointerBase_SeriesStatus] DEFAULT ((1)) NULL,
    [RecApptMstrOutlookOwnerApptId]   INT              NULL,
    [DeletedExceptionsList]           NVARCHAR (MAX)   NULL,
    [NextExpansionInstanceDate]       DATETIME         NULL,
    [RecApptMstrLocation]             NVARCHAR (200)   NULL,
    [GroupId]                         UNIQUEIDENTIFIER NULL,
    [LastExpandedInstanceDate]        DATETIME         NULL,
    [ExpansionStateCode]              INT              CONSTRAINT [DF_ActivityPointerBase_ExpansionStateCode] DEFAULT ((0)) NULL,
    [RecApptMstrCategory]             NVARCHAR (250)   NULL,
    [RecApptMstrIsAllDayEvent]        BIT              CONSTRAINT [DF_ActivityPointerBase_RecApptMstrIsAllDayEvent] DEFAULT ((0)) NULL,
    [RecApptMstrSubcategory]          NVARCHAR (250)   NULL,
    [RecApptMstrSubscriptionId]       UNIQUEIDENTIFIER NULL,
    [RecApptMstrImportSequenceNumber] INT              NULL,
    [ModifiedFieldsMask]              NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OwnerId]                         UNIQUEIDENTIFIER CONSTRAINT [DF_ActivityPointerBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [InstanceTypeCode]                INT              CONSTRAINT [DF_ActivityPointerBase_InstanceTypeCode] DEFAULT ((0)) NOT NULL,
    [SeriesId]                        UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]           UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                    DECIMAL (23, 10) NULL,
    [IsRegularActivity]               BIT              CONSTRAINT [DF_ActivityPointerBase_IsRegularActivity] DEFAULT ((1)) NOT NULL,
    [OriginalStartDate]               DATETIME         NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                     INT              CONSTRAINT [DF_ActivityPointerBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [QteCloseOverriddenCreatedOn]     DATETIME         NULL,
    [QuoteNumber]                     NVARCHAR (100)   NULL,
    [QteCloseImportSequenceNumber]    INT              NULL,
    [QteCloseCategory]                NVARCHAR (250)   NULL,
    [QteCloseRevision]                INT              NULL,
    [QteCloseSubcategory]             NVARCHAR (250)   NULL,
    [ApptCategory]                    NVARCHAR (250)   NULL,
    [ApptGlobalObjectId]              NVARCHAR (300)   NULL,
    [ApptIsAllDayEvent]               BIT              CONSTRAINT [DF_ActivityPointerBase_ApptIsAllDayEvent] DEFAULT ((0)) NULL,
    [ApptImportSequenceNumber]        INT              NULL,
    [ApptOutlookOwnerApptId]          INT              NULL,
    [ApptOverriddenCreatedOn]         DATETIME         NULL,
    [ApptSubcategory]                 NVARCHAR (250)   NULL,
    [ApptSubscriptionId]              UNIQUEIDENTIFIER NULL,
    [ApptLocation]                    NVARCHAR (200)   NULL,
    [ActualCost_Base]                 MONEY            NULL,
    [CampActImportSequenceNumber]     INT              NULL,
    [BudgetedCost_Base]               MONEY            NULL,
    [ActualCost]                      MONEY            CONSTRAINT [DF_ActivityPointerBase_ActualCost] DEFAULT ((0)) NULL,
    [IgnoreInactiveListMembers]       BIT              CONSTRAINT [DF_ActivityPointerBase_IgnoreInactiveListMembers] DEFAULT ((1)) NULL,
    [DoNotSendOnOptOut]               BIT              CONSTRAINT [DF_ActivityPointerBase_DoNotSendOnOptOut] DEFAULT ((1)) NULL,
    [TypeCode]                        INT              NULL,
    [CampActSubcategory]              NVARCHAR (250)   NULL,
    [CampActOverriddenCreatedOn]      DATETIME         NULL,
    [ExcludeIfContactedInXDays]       INT              CONSTRAINT [DF_ActivityPointerBase_ExcludeIfContactedInXDays] DEFAULT ((0)) NULL,
    [CampActCategory]                 NVARCHAR (250)   NULL,
    [BudgetedCost]                    MONEY            CONSTRAINT [DF_ActivityPointerBase_BudgetedCost] DEFAULT ((0)) NULL,
    [CampActChannelTypeCode]          INT              NULL,
    [FirstName]                       NVARCHAR (50)    NULL,
    [ReceivedOn]                      DATETIME         NULL,
    [ResponseCode]                    INT              NULL,
    [YomiLastName]                    NVARCHAR (150)   NULL,
    [CampResOverriddenCreatedOn]      DATETIME         NULL,
    [YomiFirstName]                   NVARCHAR (150)   NULL,
    [CompanyName]                     NVARCHAR (100)   NULL,
    [CampResCategory]                 NVARCHAR (250)   NULL,
    [Telephone]                       NVARCHAR (50)    NULL,
    [OriginatingActivityId]           UNIQUEIDENTIFIER NULL,
    [Fax]                             NVARCHAR (50)    NULL,
    [LastName]                        NVARCHAR (50)    NULL,
    [CampResImportSequenceNumber]     INT              NULL,
    [OriginatingActivityIdTypeCode]   INT              NULL,
    [EMailAddress]                    NVARCHAR (100)   NULL,
    [CampResChannelTypeCode]          INT              NULL,
    [YomiCompanyName]                 NVARCHAR (100)   NULL,
    [PromotionCodeName]               NVARCHAR (250)   NULL,
    [CampResSubcategory]              NVARCHAR (250)   NULL,
    [SuccessCount]                    INT              CONSTRAINT [DF_ActivityPointerBase_SuccessCount] DEFAULT ((0)) NULL,
    [OperationTypeCode]               INT              NULL,
    [BulkOperationNumber]             NVARCHAR (32)    NULL,
    [TargetMembersCount]              INT              CONSTRAINT [DF_ActivityPointerBase_TargetMembersCount] DEFAULT ((0)) NULL,
    [CreatedRecordTypeCode]           INT              NULL,
    [Parameters]                      NVARCHAR (MAX)   NULL,
    [ErrorNumber]                     INT              NULL,
    [TargetedRecordTypeCode]          INT              NULL,
    [FailureCount]                    INT              CONSTRAINT [DF_ActivityPointerBase_FailureCount] DEFAULT ((0)) NULL,
    [Compressed]                      BIT              CONSTRAINT [DF_ActivityPointerBase_Compressed] DEFAULT ((0)) NULL,
    [ReadReceiptRequested]            BIT              CONSTRAINT [DF_ActivityPointerBase_ReadReceiptRequested] DEFAULT ((0)) NULL,
    [DeliveryReceiptRequested]        BIT              CONSTRAINT [DF_ActivityPointerBase_DeliveryReceiptRequested] DEFAULT ((0)) NULL,
    [EmailSubcategory]                NVARCHAR (250)   NULL,
    [Notifications]                   INT              NULL,
    [MessageId]                       NVARCHAR (320)   NULL,
    [Sender]                          NVARCHAR (250)   NULL,
    [ToRecipients]                    NVARCHAR (500)   NULL,
    [EmailOverriddenCreatedOn]        DATETIME         NULL,
    [SubmittedBy]                     NVARCHAR (250)   NULL,
    [EmailImportSequenceNumber]       INT              NULL,
    [EmailDirectionCode]              BIT              NULL,
    [MimeType]                        NVARCHAR (256)   NULL,
    [MessageIdDupCheck]               UNIQUEIDENTIFIER CONSTRAINT [DF_ActivityPointerBase_MessageIdDupCheck] DEFAULT ('cc8f99fd-486e-4c39-aef7-7dd4d5fdbd0a') NULL,
    [DeliveryAttempts]                INT              NULL,
    [TrackingToken]                   NVARCHAR (50)    NULL,
    [EmailCategory]                   NVARCHAR (250)   NULL,
    [SvcApptImportSequenceNumber]     INT              NULL,
    [SvcApptLocation]                 NVARCHAR (500)   NULL,
    [SvcApptIsAllDayEvent]            BIT              CONSTRAINT [DF_ActivityPointerBase_SvcApptIsAllDayEvent] DEFAULT ((0)) NULL,
    [SvcApptSubcategory]              NVARCHAR (250)   NULL,
    [SiteId]                          UNIQUEIDENTIFIER NULL,
    [SvcApptOverriddenCreatedOn]      DATETIME         NULL,
    [SvcApptCategory]                 NVARCHAR (250)   NULL,
    [SvcApptSubscriptionId]           UNIQUEIDENTIFIER NULL,
    [TaskCategory]                    NVARCHAR (250)   NULL,
    [PercentComplete]                 INT              NULL,
    [TaskOverriddenCreatedOn]         DATETIME         NULL,
    [TaskSubscriptionId]              UNIQUEIDENTIFIER NULL,
    [TaskSubcategory]                 NVARCHAR (250)   NULL,
    [TaskImportSequenceNumber]        INT              NULL,
    [Address]                         NVARCHAR (200)   NULL,
    [LetterImportSequenceNumber]      INT              NULL,
    [LetterSubscriptionId]            UNIQUEIDENTIFIER NULL,
    [LetterCategory]                  NVARCHAR (250)   NULL,
    [LetterSubcategory]               NVARCHAR (250)   NULL,
    [LetterDirectionCode]             BIT              NULL,
    [LetterOverriddenCreatedOn]       DATETIME         NULL,
    [PhoneOverriddenCreatedOn]        DATETIME         NULL,
    [PhoneImportSequenceNumber]       INT              NULL,
    [PhoneNumber]                     NVARCHAR (200)   NULL,
    [PhoneSubcategory]                NVARCHAR (250)   NULL,
    [PhoneDirectionCode]              BIT              NULL,
    [PhoneSubscriptionId]             UNIQUEIDENTIFIER NULL,
    [PhoneCategory]                   NVARCHAR (250)   NULL,
    [OrdCloseSubcategory]             NVARCHAR (250)   NULL,
    [OrdCloseImportSequenceNumber]    INT              NULL,
    [OrdCloseRevision]                INT              NULL,
    [OrderNumber]                     NVARCHAR (100)   NULL,
    [OrdCloseCategory]                NVARCHAR (250)   NULL,
    [OrdCloseOverriddenCreatedOn]     DATETIME         NULL,
    [FaxNumber]                       NVARCHAR (200)   NULL,
    [CoverPageName]                   NVARCHAR (100)   NULL,
    [NumberOfPages]                   INT              NULL,
    [FaxSubscriptionId]               UNIQUEIDENTIFIER NULL,
    [FaxImportSequenceNumber]         INT              NULL,
    [BillingCode]                     NVARCHAR (50)    NULL,
    [Tsid]                            NVARCHAR (20)    NULL,
    [FaxDirectionCode]                BIT              NULL,
    [FaxOverriddenCreatedOn]          DATETIME         NULL,
    [FaxSubcategory]                  NVARCHAR (250)   NULL,
    [FaxCategory]                     NVARCHAR (250)   NULL,
    [IncResSubcategory]               NVARCHAR (250)   NULL,
    [IncResCategory]                  NVARCHAR (250)   NULL,
    [IncResImportSequenceNumber]      INT              NULL,
    [IncResOverriddenCreatedOn]       DATETIME         NULL,
    [TimeSpent]                       INT              CONSTRAINT [DF_ActivityPointerBase_TimeSpent] DEFAULT ((0)) NULL,
    [CompetitorId]                    UNIQUEIDENTIFIER NULL,
    [OppCloseOverriddenCreatedOn]     DATETIME         NULL,
    [OppCloseImportSequenceNumber]    INT              NULL,
    [ActualRevenue_Base]              MONEY            NULL,
    [ActualRevenue]                   MONEY            NULL,
    [OppCloseSubcategory]             NVARCHAR (250)   NULL,
    [OppCloseCategory]                NVARCHAR (250)   NULL,
    [EmailAttachmentCount]            INT              CONSTRAINT [DF_ActivityPointerBase_EmailAttachmentCount] DEFAULT ((0)) NOT NULL,
    [ConversationIndex]               NVARCHAR (2048)  NULL,
    [InReplyTo]                       NVARCHAR (320)   NULL,
    [CorrelationMethod]               INT              CONSTRAINT [DF_ActivityPointerBase_CorrelationMethod] DEFAULT ((0)) NULL,
    [BaseConversationIndexHash]       INT              NULL,
    [ParentActivityId]                UNIQUEIDENTIFIER NULL,
    [SenderMailboxId]                 UNIQUEIDENTIFIER NULL,
    [IsMapiPrivate]                   BIT              CONSTRAINT [DF_ActivityPointerBase_IsMapiPrivate] DEFAULT ((0)) NULL,
    [LeftVoiceMail]                   BIT              CONSTRAINT [DF_ActivityPointerBase_LeftVoiceMail] DEFAULT ((0)) NULL,
    [DeliveryLastAttemptedOn]         DATETIME         NULL,
    [StageId]                         UNIQUEIDENTIFIER NULL,
    [DeliveryPriorityCode]            INT              CONSTRAINT [DF_ActivityPointerBase_DeliveryPriorityCode] DEFAULT ((1)) NULL,
    [SentOn]                          DATETIME         NULL,
    [PostponeActivityProcessingUntil] DATETIME         NULL,
    [ProcessId]                       UNIQUEIDENTIFIER NULL,
    [PostMessageType]                 INT              NULL,
    [ImportSequenceNumber]            INT              NULL,
    [InResponseTo]                    NVARCHAR (160)   NULL,
    [PostAuthor]                      UNIQUEIDENTIFIER NULL,
    [PostedOn]                        DATETIME         NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [ThreadId]                        NVARCHAR (160)   NULL,
    [SocialAdditionalParams]          NVARCHAR (MAX)   NULL,
    [PostURL]                         NVARCHAR (200)   NULL,
    [PostFromProfileId]               UNIQUEIDENTIFIER NULL,
    [SocialActivityDirectionCode]     BIT              NULL,
    [PostId]                          NVARCHAR (160)   NULL,
    [SentimentValue]                  FLOAT (53)       NULL,
    [PostAuthorAccount]               UNIQUEIDENTIFIER NULL,
    [PostToProfileId]                 NVARCHAR (200)   NULL,
    [PostAuthorAccountName]           NVARCHAR (4000)  NULL,
    [PostAuthorAccountType]           INT              NULL,
    [PostAuthorType]                  INT              NULL,
    [PostAuthorName]                  NVARCHAR (4000)  NULL,
    [PostAuthorYomiName]              NVARCHAR (4000)  NULL,
    [PostAuthorAccountYomiName]       NVARCHAR (4000)  NULL,
    [Community]                       INT              NULL,
    [EmailSender]                     UNIQUEIDENTIFIER NULL,
    [SendersAccount]                  UNIQUEIDENTIFIER NULL,
    [EmailSenderObjectTypeCode]       INT              NULL,
    [EmailSenderName]                 NVARCHAR (4000)  NULL,
    [SendersAccountName]              NVARCHAR (4000)  NULL,
    [SendersAccountObjectTypeCode]    INT              NULL,
    [EmailSenderYomiName]             NVARCHAR (4000)  NULL,
    [SendersAccountYomiName]          NVARCHAR (4000)  NULL,
    CONSTRAINT [ndx_PrimaryKey_ActivityPointer] PRIMARY KEY CLUSTERED ([ActivityId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [activity_campaignresponse] FOREIGN KEY ([OriginatingActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION,
    CONSTRAINT [business_unit_activitypointer] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [business_unit_socialactivity] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [competitor_opportunity_activities] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId]) NOT FOR REPLICATION,
    CONSTRAINT [email_email_parentactivityid] FOREIGN KEY ([ParentActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_activitypointers] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [service_activity_pointers] FOREIGN KEY ([ServiceId]) REFERENCES [dbo].[ServiceBase] ([ServiceId]) NOT FOR REPLICATION,
    CONSTRAINT [site_service_appointments] FOREIGN KEY ([SiteId]) REFERENCES [dbo].[SiteBase] ([SiteId]) NOT FOR REPLICATION,
    CONSTRAINT [Socialprofile_SocialActivities] FOREIGN KEY ([PostFromProfileId]) REFERENCES [dbo].[SocialProfileBase] ([SocialProfileId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_ActivityPointer] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_socialactivity] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ActivityPointerBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_regardingobjectid]
    ON [dbo].[ActivityPointerBase]([RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC, [ActivityTypeCode] ASC)
    INCLUDE([OwnerId], [OwnerIdType]) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ModifiedOn]
    ON [dbo].[ActivityPointerBase]([ModifiedOn] ASC, [ActivityId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SubActivityScheduledEnd]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [ScheduledEnd] ASC, [ActivityId] ASC)
    INCLUDE([ScheduledStart], [StateCode], [IsRegularActivity], [InstanceTypeCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_MySubActivities]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [ActivityId] ASC, [StateCode] ASC)
    INCLUDE([ScheduledStart], [ScheduledEnd], [IsRegularActivity], [InstanceTypeCode], [PriorityCode], [ActualEnd], [OwnerId], [Subject]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_MyActivities]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC, [ScheduledStart] ASC, [ScheduledEnd] ASC, [ActivityTypeCode] ASC, [IsRegularActivity] ASC, [InstanceTypeCode] ASC, [StateCode] ASC)
    INCLUDE([Subject]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SubActivityScheduledStart]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [ScheduledStart] ASC, [ActivityId] ASC)
    INCLUDE([ScheduledEnd], [StateCode], [IsRegularActivity], [InstanceTypeCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Email_BaseConversationIndexHash]
    ON [dbo].[ActivityPointerBase]([BaseConversationIndexHash] ASC)
    INCLUDE([OwnerId], [OwningBusinessUnit], [ActivityId], [MessageId], [ConversationIndex], [OwnerIdType], [RegardingObjectId], [RegardingObjectIdYomiName], [RegardingObjectIdName], [RegardingObjectTypeCode], [EmailDirectionCode]) WHERE ([ActivityTypeCode]=(4202) AND [BaseConversationIndexHash] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ActivityChart]
    ON [dbo].[ActivityPointerBase]([IsRegularActivity] ASC, [StateCode] ASC)
    INCLUDE([ActivityId], [ActivityTypeCode], [InstanceTypeCode], [ScheduledEnd], [ScheduledStart], [OwnerId], [StatusCode], [PriorityCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core_ActivityTypeCode]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [StateCode] ASC, [ActivityId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_OwnerIdSubject]
    ON [dbo].[ActivityPointerBase]([OwnerId] ASC, [Subject] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_incident_resolution_trend]
    ON [dbo].[ActivityPointerBase]([RegardingObjectId] ASC, [StateCode] ASC, [CreatedOn] ASC)
    INCLUDE([TimeSpent]) WHERE ([ActivityTypeCode]=(4206)) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Email_MessageId]
    ON [dbo].[ActivityPointerBase]([EmailDirectionCode] ASC, [MessageId] ASC, [MessageIdDupCheck] ASC) WHERE ([MessageId] IS NOT NULL AND [EmailDirectionCode] IS NOT NULL AND [ActivityTypeCode]=(4202)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CreatedOnSubject]
    ON [dbo].[ActivityPointerBase]([CreatedOn] ASC, [Subject] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_serviceid]
    ON [dbo].[ActivityPointerBase]([ServiceId] ASC, [ActivityTypeCode] ASC) WHERE ([ServiceId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_OpportunityClose_for_cascaderelationship_competitor_opportunity_activities]
    ON [dbo].[ActivityPointerBase]([CompetitorId] ASC) WHERE ([CompetitorId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ActivitySubject]
    ON [dbo].[ActivityPointerBase]([Subject] ASC, [ActivityId] ASC)
    INCLUDE([StateCode], [ActivityTypeCode], [IsRegularActivity], [InstanceTypeCode], [ScheduledStart], [ScheduledEnd], [OwnerId], [ModifiedOn]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_MyClosedActivities]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC, [ActualEnd] DESC)
    INCLUDE([StateCode], [ActivityTypeCode], [IsRegularActivity]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_neglectedcase]
    ON [dbo].[ActivityPointerBase]([RegardingObjectTypeCode] ASC)
    INCLUDE([OwningBusinessUnit], [ActivityId], [ModifiedOn], [RegardingObjectId], [OwnerId]) WHERE ([RegardingObjectTypeCode]=(112)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_BulkOperation_Core]
    ON [dbo].[ActivityPointerBase]([OperationTypeCode] ASC) WHERE ([ActivityTypeCode]=(4406)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ActivityScheduledEnd]
    ON [dbo].[ActivityPointerBase]([ScheduledEnd] ASC, [ActivityId] ASC, [IsRegularActivity] ASC, [StateCode] ASC)
    INCLUDE([ScheduledStart], [ActivityTypeCode], [InstanceTypeCode], [OwnerId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeScheduledStart]
    ON [dbo].[ActivityPointerBase]([StateCode] ASC, [ScheduledStart] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync_ActivityPointer]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [VersionNumber] ASC)
    INCLUDE([ActivityId], [OwnerId], [OwningBusinessUnit]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeSubject]
    ON [dbo].[ActivityPointerBase]([StateCode] ASC, [Subject] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ActivityPointerBase]([OwnerId] ASC, [CreatedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ActivityScheduledStart]
    ON [dbo].[ActivityPointerBase]([ScheduledStart] ASC, [ActivityId] ASC)
    INCLUDE([ScheduledEnd], [StateCode], [ActivityTypeCode], [IsRegularActivity], [InstanceTypeCode], [ServiceId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_CampaignResponse_for_receivedon]
    ON [dbo].[ActivityPointerBase]([ReceivedOn] ASC) WHERE ([ActivityTypeCode]=(4401)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SubActivitySubject]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [Subject] ASC, [ActivityId] ASC)
    INCLUDE([StateCode], [StatusCode], [IsRegularActivity], [InstanceTypeCode], [ScheduledStart], [ScheduledEnd], [OwnerId], [ModifiedOn]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_StatusCodeActualEnd]
    ON [dbo].[ActivityPointerBase]([StatusCode] ASC, [ActualEnd] ASC, [Subject] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Email_EmailConnectorDequeue]
    ON [dbo].[ActivityPointerBase]([PostponeActivityProcessingUntil] ASC)
    INCLUDE([DeliveryPriorityCode], [ActualEnd], [SenderMailboxId]) WHERE ([StateCode]=(1) AND [PostponeActivityProcessingUntil] IS NOT NULL AND [ActivityTypeCode]=(4202)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentActivityId]
    ON [dbo].[ActivityPointerBase]([ParentActivityId] ASC) WHERE ([ParentActivityId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeOwnerId]
    ON [dbo].[ActivityPointerBase]([StateCode] ASC, [OwnerId] ASC, [ScheduledEnd] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Email_Cover]
    ON [dbo].[ActivityPointerBase]([TrackingToken] ASC, [MessageId] ASC) WHERE ([ActivityTypeCode]=(4202)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_CampaignResponse_for_cascaderelationship_with_fax]
    ON [dbo].[ActivityPointerBase]([OriginatingActivityId] ASC, [OriginatingActivityIdTypeCode] ASC) WHERE ([OriginatingActivityId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_ServiceAppointment_for_cascaderelationship_with_site]
    ON [dbo].[ActivityPointerBase]([SiteId] ASC) WHERE ([SiteId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_activitypointer]
    ON [dbo].[ActivityPointerBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Appointment_sync_recurring_instances]
    ON [dbo].[ActivityPointerBase]([OriginalStartDate] ASC, [ActivityId] ASC, [InstanceTypeCode] ASC, [SeriesId] ASC) WHERE ([OriginalStartDate] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RecurringAppointmentMaster_PartialExpansionStatus]
    ON [dbo].[ActivityPointerBase]([ActivityId] ASC, [ExpansionStateCode] ASC, [SeriesStatus] ASC, [NextExpansionInstanceDate] ASC) WHERE ([ActivityTypeCode]=(4251)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_recurring_activities]
    ON [dbo].[ActivityPointerBase]([SeriesId] ASC, [OriginalStartDate] ASC, [InstanceTypeCode] ASC, [ActivityId] ASC) WHERE ([SeriesId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeScheduledEnd]
    ON [dbo].[ActivityPointerBase]([StateCode] ASC, [ScheduledEnd] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_thread_id]
    ON [dbo].[ActivityPointerBase]([ThreadId] ASC) WHERE ([ThreadId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_post_id]
    ON [dbo].[ActivityPointerBase]([PostId] ASC) WHERE ([PostId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_EmailSender]
    ON [dbo].[ActivityPointerBase]([EmailSender] ASC, [EmailSenderObjectTypeCode] ASC) WHERE ([ActivityTypeCode]=(4202)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SiteId]
    ON [dbo].[ActivityPointerBase]([SiteId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialactivity_postauthoraccount_accounts]
    ON [dbo].[ActivityPointerBase]([PostAuthorAccount] ASC, [PostAuthorAccountType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ServiceId]
    ON [dbo].[ActivityPointerBase]([ServiceId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_ApptOwnerApptId_ApptGlobalObjectId]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [ApptOutlookOwnerApptId] ASC, [ApptGlobalObjectId] ASC) WHERE ([ApptOutlookOwnerApptId] IS NOT NULL AND [ApptGlobalObjectId] IS NOT NULL AND [ActivityTypeCode]=(4201)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RecApptOwnerApptIdGlobalObjectId]
    ON [dbo].[ActivityPointerBase]([ActivityTypeCode] ASC, [RecApptMstrOutlookOwnerApptId] ASC, [RecApptMstrGlobalObjectId] ASC) WHERE ([RecApptMstrGlobalObjectId] IS NOT NULL AND [ActivityTypeCode]=(4251) AND [RecApptMstrOutlookOwnerApptId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialactivity_postauthor_accounts]
    ON [dbo].[ActivityPointerBase]([PostAuthor] ASC, [PostAuthorType] ASC) WITH (FILLFACTOR = 80);

