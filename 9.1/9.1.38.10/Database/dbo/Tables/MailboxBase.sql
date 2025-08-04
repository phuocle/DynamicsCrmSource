CREATE TABLE [dbo].[MailboxBase] (
    [ProcessingStateCode]                 INT              CONSTRAINT [DF_MailboxBase_ProcessingStateCode] DEFAULT ((0)) NOT NULL,
    [ACTDeliveryMethod]                   INT              CONSTRAINT [DF_MailboxBase_ACTDeliveryMethod] DEFAULT ((0)) NULL,
    [ForcedUnlockCount]                   INT              CONSTRAINT [DF_MailboxBase_ForcedUnlockCount] DEFAULT ((0)) NOT NULL,
    [OfficeAppsDeploymentError]           NVARCHAR (1024)  NULL,
    [UTCConversionTimeZoneCode]           INT              NULL,
    [OutgoingEmailDeliveryMethod]         INT              CONSTRAINT [DF_MailboxBase_OutgoingEmailDeliveryMethod] DEFAULT ((0)) NULL,
    [OfficeAppsDeploymentStatus]          INT              CONSTRAINT [DF_MailboxBase_OfficeAppsDeploymentStatus] DEFAULT ((0)) NULL,
    [ModifiedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [LastSuccessfulSyncCompletedOn]       DATETIME         NULL,
    [NoEmailCount]                        INT              NULL,
    [IsExchangeContactsImportScheduled]   BIT              CONSTRAINT [DF_MailboxBase_IsExchangeContactsImportScheduled] DEFAULT ((0)) NOT NULL,
    [MailboxId]                           UNIQUEIDENTIFIER NOT NULL,
    [IncomingEmailDeliveryMethod]         INT              CONSTRAINT [DF_MailboxBase_IncomingEmailDeliveryMethod] DEFAULT ((0)) NULL,
    [EnabledForIncomingEmail]             BIT              CONSTRAINT [DF_MailboxBase_EnabledForIncomingEmail] DEFAULT ((1)) NOT NULL,
    [ProcessedTimes]                      INT              NULL,
    [NoACTCount]                          INT              NULL,
    [EmailAddress]                        NVARCHAR (100)   NULL,
    [OfficeAppsDeploymentCompleteOn]      DATETIME         NULL,
    [IsServiceAccount]                    BIT              CONSTRAINT [DF_MailboxBase_IsServiceAccount] DEFAULT ((0)) NOT NULL,
    [OfficeAppsDeploymentScheduled]       BIT              CONSTRAINT [DF_MailboxBase_OfficeAppsDeploymentScheduled] DEFAULT ((0)) NULL,
    [OutgoingEmailStatus]                 INT              CONSTRAINT [DF_MailboxBase_OutgoingEmailStatus] DEFAULT ((0)) NULL,
    [EWSURL]                              NVARCHAR (1042)  NULL,
    [AverageTotalDuration]                INT              NULL,
    [OrganizationId]                      UNIQUEIDENTIFIER NOT NULL,
    [PostponeSendingUntil]                DATETIME         CONSTRAINT [DF_MailboxBase_PostponeSendingUntil] DEFAULT ((0)) NOT NULL,
    [PostponeTestEmailConfigurationUntil] DATETIME         CONSTRAINT [DF_MailboxBase_PostponeTestEmailConfigurationUntil] DEFAULT ((0)) NULL,
    [LastSyncErrorOccurredOn]             DATETIME         NULL,
    [EmailServerProfile]                  UNIQUEIDENTIFIER NULL,
    [TestMailboxAccessCompletedOn]        DATETIME         CONSTRAINT [DF_MailboxBase_TestMailboxAccessCompletedOn] DEFAULT ((0)) NULL,
    [PostponeOfficeAppsDeploymentUntil]   DATETIME         CONSTRAINT [DF_MailboxBase_PostponeOfficeAppsDeploymentUntil] DEFAULT ((0)) NULL,
    [ItemsFailedForLastSync]              INT              NULL,
    [LastSyncErrorMachineName]            NVARCHAR (160)   NULL,
    [OwnerId]                             UNIQUEIDENTIFIER NOT NULL,
    [LastActiveOn]                        DATETIME         CONSTRAINT [DF_MailboxBase_LastActiveOn] DEFAULT ((0)) NOT NULL,
    [LastSyncErrorCode]                   INT              NULL,
    [TimeZoneRuleVersionNumber]           INT              NULL,
    [LastAutoDiscoveredOn]                DATETIME         CONSTRAINT [DF_MailboxBase_LastAutoDiscoveredOn] DEFAULT ((0)) NULL,
    [TestEmailConfigurationScheduled]     BIT              CONSTRAINT [DF_MailboxBase_TestEmailConfigurationScheduled] DEFAULT ((0)) NULL,
    [IsEmailAddressApprovedByO365Admin]   BIT              CONSTRAINT [DF_MailboxBase_IsEmailAddressApprovedByO365Admin] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]                          UNIQUEIDENTIFIER NULL,
    [Password]                            VARBINARY (MAX)  NULL,
    [FolderHierarchy]                     NVARCHAR (MAX)   NULL,
    [LastSyncStartedOn]                   DATETIME         NULL,
    [ItemsProcessedForLastSync]           INT              NULL,
    [ExchangeSyncStateXml]                NVARCHAR (MAX)   NULL,
    [ProcessAndDeleteEmails]              BIT              CONSTRAINT [DF_MailboxBase_ProcessAndDeleteEmails] DEFAULT ((0)) NULL,
    [ReceivingPostponedUntil]             DATETIME         CONSTRAINT [DF_MailboxBase_ReceivingPostponedUntil] DEFAULT ((0)) NULL,
    [LastSyncError]                       NVARCHAR (1024)  NULL,
    [LastMailboxForcedUnlockOccurredOn]   DATETIME         NULL,
    [ExchangeContactsImportCompletedOn]   DATETIME         NULL,
    [RegardingObjectId]                   UNIQUEIDENTIFIER NULL,
    [EntityImageId]                       UNIQUEIDENTIFIER NULL,
    [LastSyncErrorCount]                  INT              NULL,
    [CreatedOn]                           DATETIME         NULL,
    [ModifiedOn]                          DATETIME         NULL,
    [EmailRouterAccessApproval]           INT              CONSTRAINT [DF_MailboxBase_EmailRouterAccessApproval] DEFAULT ((0)) NOT NULL,
    [OrgMarkedAsPrimaryForExchangeSync]   BIT              CONSTRAINT [DF_MailboxBase_OrgMarkedAsPrimaryForExchangeSync] DEFAULT ((0)) NULL,
    [StatusCode]                          INT              CONSTRAINT [DF_MailboxBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [ReceivingPostponedUntilForACT]       DATETIME         CONSTRAINT [DF_MailboxBase_ReceivingPostponedUntilForACT] DEFAULT ((0)) NULL,
    [ExchangeContactsImportStatus]        INT              CONSTRAINT [DF_MailboxBase_ExchangeContactsImportStatus] DEFAULT ((0)) NULL,
    [VersionNumber]                       ROWVERSION       NULL,
    [VerboseLoggingEnabled]               INT              CONSTRAINT [DF_MailboxBase_VerboseLoggingEnabled] DEFAULT ((0)) NOT NULL,
    [StateCode]                           INT              CONSTRAINT [DF_MailboxBase_StateCode] DEFAULT ((0)) NOT NULL,
    [MailboxStatus]                       INT              CONSTRAINT [DF_MailboxBase_MailboxStatus] DEFAULT ((0)) NULL,
    [UndeliverableFolder]                 NVARCHAR (256)   NULL,
    [MailboxProcessingContext]            INT              NULL,
    [Name]                                NVARCHAR (200)   NOT NULL,
    [IsForwardMailbox]                    BIT              CONSTRAINT [DF_MailboxBase_IsForwardMailbox] DEFAULT ((0)) NOT NULL,
    [Username]                            NVARCHAR (200)   NULL,
    [TestEmailConfigurationRetryCount]    INT              CONSTRAINT [DF_MailboxBase_TestEmailConfigurationRetryCount] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [AllowEmailConnectorToUseCredentials] BIT              CONSTRAINT [DF_MailboxBase_AllowEmailConnectorToUseCredentials] DEFAULT ((0)) NULL,
    [HostId]                              NVARCHAR (256)   NULL,
    [LastMessageId]                       NVARCHAR (320)   NULL,
    [LastDuration]                        INT              NULL,
    [OwningBusinessUnit]                  UNIQUEIDENTIFIER NULL,
    [ProcessingLastAttemptedOn]           DATETIME         NULL,
    [PostponeMailboxProcessingUntil]      DATETIME         CONSTRAINT [DF_MailboxBase_PostponeMailboxProcessingUntil] DEFAULT ((0)) NOT NULL,
    [EnabledForACT]                       BIT              CONSTRAINT [DF_MailboxBase_EnabledForACT] DEFAULT ((1)) NOT NULL,
    [IncomingEmailStatus]                 INT              CONSTRAINT [DF_MailboxBase_IncomingEmailStatus] DEFAULT ((0)) NULL,
    [ProcessEmailReceivedAfter]           DATETIME         CONSTRAINT [DF_MailboxBase_ProcessEmailReceivedAfter] DEFAULT ((0)) NULL,
    [CreatedBy]                           UNIQUEIDENTIFIER NULL,
    [TransientFailureCount]               INT              CONSTRAINT [DF_MailboxBase_TransientFailureCount] DEFAULT ((0)) NOT NULL,
    [IsACTSyncOrgFlagSet]                 BIT              CONSTRAINT [DF_MailboxBase_IsACTSyncOrgFlagSet] DEFAULT ((0)) NULL,
    [ACTStatus]                           INT              CONSTRAINT [DF_MailboxBase_ACTStatus] DEFAULT ((0)) NULL,
    [EnabledForOutgoingEmail]             BIT              CONSTRAINT [DF_MailboxBase_EnabledForOutgoingEmail] DEFAULT ((1)) NOT NULL,
    [RegardingObjectIdName]               NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]             INT              NULL,
    [OwnerIdType]                         INT              CONSTRAINT [DF_MailboxBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [CredentialInfo]                      NVARCHAR (2000)  NULL,
    [DataEncryptionKey]                   VARBINARY (MAX)  NULL,
    [OauthTokenExpiresOn]                 DATETIME         NULL,
    [OauthAccessToken]                    VARBINARY (MAX)  NULL,
    [OauthRefreshToken]                   VARBINARY (MAX)  NULL,
    [ExchangeSyncStateXmlFileRef]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_mailboxBase] PRIMARY KEY CLUSTERED ([MailboxId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_mailbox] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [emailserverprofile_mailbox] FOREIGN KEY ([EmailServerProfile]) REFERENCES [dbo].[EmailServerProfileBase] ([EmailServerProfileId]),
    CONSTRAINT [FileAttachment_Mailbox_ExchangeSyncStateXmlFileRef] FOREIGN KEY ([ExchangeSyncStateXmlFileRef]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [owner_mailbox] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[MailboxBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[MailboxBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[MailboxBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[MailboxBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[MailboxBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Mailbox_Name]
    ON [dbo].[MailboxBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_FindOutgoingEmails]
    ON [dbo].[MailboxBase]([EnabledForOutgoingEmail] ASC, [PostponeSendingUntil] ASC)
    INCLUDE([MailboxId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Mailbox_Regarding]
    ON [dbo].[MailboxBase]([RegardingObjectTypeCode] ASC, [RegardingObjectId] ASC)
    INCLUDE([StateCode], [IncomingEmailDeliveryMethod], [ACTDeliveryMethod], [EnabledForIncomingEmail], [EnabledForACT]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Mailbox_EmailServerProfile]
    ON [dbo].[MailboxBase]([EmailServerProfile] ASC) WHERE ([EmailServerProfile] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Mailbox_MailboxQueueManagerDequeue]
    ON [dbo].[MailboxBase]([ProcessingStateCode] ASC, [PostponeMailboxProcessingUntil] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_regardingobjectid]
    ON [dbo].[MailboxBase]([RegardingObjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Mailbox_IsServiceAccount]
    ON [dbo].[MailboxBase]([EmailServerProfile] ASC, [IsServiceAccount] ASC) WHERE ([EmailServerProfile] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_PostponeMailboxProcessingUntil]
    ON [dbo].[MailboxBase]([PostponeMailboxProcessingUntil] ASC)
    INCLUDE([ACTDeliveryMethod], [EnabledForIncomingEmail], [IncomingEmailDeliveryMethod], [EnabledForACT], [IncomingEmailStatus], [ACTStatus]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_DA4F4906D0864AAE889FCE3CE0F6A888]
    ON [dbo].[MailboxBase]([MailboxId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_DA4F4906D0864AAE889FCE3CE0F6A888]
    ON [dbo].[MailboxBase]([MailboxId] ASC)
    INCLUDE([Name], [RegardingObjectId], [RegardingObjectTypeCode], [RegardingObjectIdName], [OwnerId], [OwnerIdType], [OutgoingEmailDeliveryMethod], [IncomingEmailDeliveryMethod], [ACTDeliveryMethod], [EmailAddress], [EmailServerProfile], [IncomingEmailStatus], [OutgoingEmailStatus], [ACTStatus], [VerboseLoggingEnabled], [OfficeAppsDeploymentStatus], [TestMailboxAccessCompletedOn], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_DA4F4906D0864AAE889FCE3CE0F6A888]
    ON [dbo].[MailboxBase]([Name] ASC, [MailboxId] ASC)
    INCLUDE([RegardingObjectId], [RegardingObjectTypeCode], [RegardingObjectIdName], [OwnerId], [OwnerIdType], [OutgoingEmailDeliveryMethod], [IncomingEmailDeliveryMethod], [ACTDeliveryMethod], [EmailAddress], [EmailServerProfile], [IncomingEmailStatus], [OutgoingEmailStatus], [ACTStatus], [VerboseLoggingEnabled], [OfficeAppsDeploymentStatus], [TestMailboxAccessCompletedOn], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

