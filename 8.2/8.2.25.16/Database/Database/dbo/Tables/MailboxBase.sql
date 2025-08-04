CREATE TABLE [dbo].[MailboxBase] (
    [ProcessingStateCode]                 INT              CONSTRAINT [DF_MailboxBase_ProcessingStateCode] DEFAULT ((0)) NOT NULL,
    [ACTDeliveryMethod]                   INT              CONSTRAINT [DF_MailboxBase_ACTDeliveryMethod] DEFAULT ((0)) NULL,
    [UTCConversionTimeZoneCode]           INT              NULL,
    [OutgoingEmailDeliveryMethod]         INT              CONSTRAINT [DF_MailboxBase_OutgoingEmailDeliveryMethod] DEFAULT ((0)) NULL,
    [ModifiedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [NoEmailCount]                        INT              NULL,
    [MailboxId]                           UNIQUEIDENTIFIER NOT NULL,
    [EnabledForIncomingEmail]             BIT              CONSTRAINT [DF_MailboxBase_EnabledForIncomingEmail] DEFAULT ((1)) NOT NULL,
    [NoACTCount]                          INT              NULL,
    [EmailAddress]                        NVARCHAR (100)   NULL,
    [ReceivingPostponedUntil]             DATETIME         CONSTRAINT [DF_MailboxBase_ReceivingPostponedUntil] DEFAULT ((0)) NULL,
    [OutgoingEmailStatus]                 INT              CONSTRAINT [DF_MailboxBase_OutgoingEmailStatus] DEFAULT ((0)) NULL,
    [OrganizationId]                      UNIQUEIDENTIFIER NOT NULL,
    [MailboxProcessingContext]            INT              NULL,
    [EmailRouterAccessApproval]           INT              CONSTRAINT [DF_MailboxBase_EmailRouterAccessApproval] DEFAULT ((0)) NOT NULL,
    [IncomingEmailDeliveryMethod]         INT              CONSTRAINT [DF_MailboxBase_IncomingEmailDeliveryMethod] DEFAULT ((0)) NULL,
    [PostponeTestEmailConfigurationUntil] DATETIME         CONSTRAINT [DF_MailboxBase_PostponeTestEmailConfigurationUntil] DEFAULT ((0)) NULL,
    [EmailServerProfile]                  UNIQUEIDENTIFIER NULL,
    [EnabledForACT]                       BIT              CONSTRAINT [DF_MailboxBase_EnabledForACT] DEFAULT ((1)) NOT NULL,
    [TestMailboxAccessCompletedOn]        DATETIME         CONSTRAINT [DF_MailboxBase_TestMailboxAccessCompletedOn] DEFAULT ((0)) NULL,
    [ModifiedOn]                          DATETIME         NULL,
    [StateCode]                           INT              CONSTRAINT [DF_MailboxBase_StateCode] DEFAULT ((0)) NOT NULL,
    [ProcessEmailReceivedAfter]           DATETIME         CONSTRAINT [DF_MailboxBase_ProcessEmailReceivedAfter] DEFAULT ((0)) NULL,
    [PostponeMailboxProcessingUntil]      DATETIME         CONSTRAINT [DF_MailboxBase_PostponeMailboxProcessingUntil] DEFAULT ((0)) NOT NULL,
    [OwnerId]                             UNIQUEIDENTIFIER NOT NULL,
    [LastActiveOn]                        DATETIME         CONSTRAINT [DF_MailboxBase_LastActiveOn] DEFAULT ((0)) NOT NULL,
    [TimeZoneRuleVersionNumber]           INT              NULL,
    [LastAutoDiscoveredOn]                DATETIME         CONSTRAINT [DF_MailboxBase_LastAutoDiscoveredOn] DEFAULT ((0)) NULL,
    [TestEmailConfigurationScheduled]     BIT              CONSTRAINT [DF_MailboxBase_TestEmailConfigurationScheduled] DEFAULT ((0)) NULL,
    [IsEmailAddressApprovedByO365Admin]   BIT              CONSTRAINT [DF_MailboxBase_IsEmailAddressApprovedByO365Admin] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]                          UNIQUEIDENTIFIER NULL,
    [Password]                            VARBINARY (MAX)  NULL,
    [ExchangeSyncStateXml]                NVARCHAR (MAX)   NULL,
    [ProcessAndDeleteEmails]              BIT              CONSTRAINT [DF_MailboxBase_ProcessAndDeleteEmails] DEFAULT ((0)) NULL,
    [RegardingObjectId]                   UNIQUEIDENTIFIER NULL,
    [EntityImageId]                       UNIQUEIDENTIFIER NULL,
    [CreatedOn]                           DATETIME         NULL,
    [StatusCode]                          INT              CONSTRAINT [DF_MailboxBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [ReceivingPostponedUntilForACT]       DATETIME         CONSTRAINT [DF_MailboxBase_ReceivingPostponedUntilForACT] DEFAULT ((0)) NULL,
    [VersionNumber]                       ROWVERSION       NULL,
    [UndeliverableFolder]                 NVARCHAR (256)   NULL,
    [Name]                                NVARCHAR (200)   NOT NULL,
    [IsForwardMailbox]                    BIT              CONSTRAINT [DF_MailboxBase_IsForwardMailbox] DEFAULT ((0)) NOT NULL,
    [PostponeSendingUntil]                DATETIME         CONSTRAINT [DF_MailboxBase_PostponeSendingUntil] DEFAULT ((0)) NOT NULL,
    [TestEmailConfigurationRetryCount]    INT              CONSTRAINT [DF_MailboxBase_TestEmailConfigurationRetryCount] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [AllowEmailConnectorToUseCredentials] BIT              CONSTRAINT [DF_MailboxBase_AllowEmailConnectorToUseCredentials] DEFAULT ((0)) NULL,
    [HostId]                              NVARCHAR (256)   NULL,
    [LastMessageId]                       NVARCHAR (320)   NULL,
    [IncomingEmailStatus]                 INT              CONSTRAINT [DF_MailboxBase_IncomingEmailStatus] DEFAULT ((0)) NULL,
    [Username]                            NVARCHAR (200)   NULL,
    [CreatedBy]                           UNIQUEIDENTIFIER NULL,
    [EWSURL]                              NVARCHAR (1042)  NULL,
    [TransientFailureCount]               INT              CONSTRAINT [DF_MailboxBase_TransientFailureCount] DEFAULT ((0)) NOT NULL,
    [OwningBusinessUnit]                  UNIQUEIDENTIFIER NULL,
    [IsACTSyncOrgFlagSet]                 BIT              CONSTRAINT [DF_MailboxBase_IsACTSyncOrgFlagSet] DEFAULT ((0)) NULL,
    [ACTStatus]                           INT              CONSTRAINT [DF_MailboxBase_ACTStatus] DEFAULT ((0)) NULL,
    [EnabledForOutgoingEmail]             BIT              CONSTRAINT [DF_MailboxBase_EnabledForOutgoingEmail] DEFAULT ((1)) NOT NULL,
    [RegardingObjectIdName]               NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]             INT              NULL,
    [OwnerIdType]                         INT              CONSTRAINT [DF_MailboxBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [LastSuccessfulSyncCompletedOn]       DATETIME         NULL,
    [ProcessedTimes]                      INT              NULL,
    [AverageTotalDuration]                INT              NULL,
    [LastSyncErrorOccurredOn]             DATETIME         NULL,
    [ItemsFailedForLastSync]              INT              NULL,
    [LastSyncErrorMachineName]            NVARCHAR (160)   NULL,
    [LastSyncErrorCode]                   INT              NULL,
    [ItemsProcessedForLastSync]           INT              NULL,
    [LastSyncStartedOn]                   DATETIME         NULL,
    [LastSyncError]                       NVARCHAR (1024)  NULL,
    [LastSyncErrorCount]                  INT              NULL,
    [OrgMarkedAsPrimaryForExchangeSync]   BIT              CONSTRAINT [DF_MailboxBase_OrgMarkedAsPrimaryForExchangeSync] DEFAULT ((0)) NULL,
    [LastDuration]                        INT              NULL,
    [ForcedUnlockCount]                   INT              CONSTRAINT [DF_MailboxBase_ForcedUnlockCount] DEFAULT ((0)) NOT NULL,
    [ProcessingLastAttemptedOn]           DATETIME         NULL,
    [IsServiceAccount]                    BIT              CONSTRAINT [DF_MailboxBase_IsServiceAccount] DEFAULT ((0)) NOT NULL,
    [VerboseLoggingEnabled]               INT              CONSTRAINT [DF_MailboxBase_VerboseLoggingEnabled] DEFAULT ((0)) NOT NULL,
    [FolderHierarchy]                     NVARCHAR (MAX)   NULL,
    [LastMailboxForcedUnlockOccurredOn]   DATETIME         NULL,
    [OfficeAppsDeploymentCompleteOn]      DATETIME         NULL,
    [PostponeOfficeAppsDeploymentUntil]   DATETIME         CONSTRAINT [DF_MailboxBase_PostponeOfficeAppsDeploymentUntil] DEFAULT ((0)) NULL,
    [OfficeAppsDeploymentScheduled]       BIT              CONSTRAINT [DF_MailboxBase_OfficeAppsDeploymentScheduled] DEFAULT ((0)) NULL,
    [MailboxStatus]                       INT              CONSTRAINT [DF_MailboxBase_MailboxStatus] DEFAULT ((0)) NULL,
    [OfficeAppsDeploymentError]           NVARCHAR (1024)  NULL,
    [OfficeAppsDeploymentStatus]          INT              CONSTRAINT [DF_MailboxBase_OfficeAppsDeploymentStatus] DEFAULT ((0)) NULL,
    CONSTRAINT [PK_mailboxBase] PRIMARY KEY CLUSTERED ([MailboxId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_mailbox] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [emailserverprofile_mailbox] FOREIGN KEY ([EmailServerProfile]) REFERENCES [dbo].[EmailServerProfileBase] ([EmailServerProfileId]),
    CONSTRAINT [owner_mailbox] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[MailboxBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Mailbox_EmailServerProfile]
    ON [dbo].[MailboxBase]([EmailServerProfile] ASC) WHERE ([EmailServerProfile] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[MailboxBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Mailbox_MailboxQueueManagerDequeue]
    ON [dbo].[MailboxBase]([ProcessingStateCode] ASC, [PostponeMailboxProcessingUntil] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_regardingobjectid]
    ON [dbo].[MailboxBase]([RegardingObjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[MailboxBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Mailbox_Name]
    ON [dbo].[MailboxBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Mailbox_Regarding]
    ON [dbo].[MailboxBase]([RegardingObjectTypeCode] ASC, [RegardingObjectId] ASC)
    INCLUDE([StateCode], [IncomingEmailDeliveryMethod], [ACTDeliveryMethod], [EnabledForIncomingEmail], [EnabledForACT]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Mailbox_IsServiceAccount]
    ON [dbo].[MailboxBase]([EmailServerProfile] ASC, [IsServiceAccount] ASC) WHERE ([EmailServerProfile] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_FindOutgoingEmails]
    ON [dbo].[MailboxBase]([EnabledForOutgoingEmail] ASC, [PostponeSendingUntil] ASC)
    INCLUDE([MailboxId]) WITH (FILLFACTOR = 80);

