CREATE TABLE [dbo].[MailboxBase]
(
[ProcessingStateCode] [int] NOT NULL CONSTRAINT [DF_MailboxBase_ProcessingStateCode] DEFAULT ((0)),
[ACTDeliveryMethod] [int] NULL CONSTRAINT [DF_MailboxBase_ACTDeliveryMethod] DEFAULT ((0)),
[UTCConversionTimeZoneCode] [int] NULL,
[OutgoingEmailDeliveryMethod] [int] NULL CONSTRAINT [DF_MailboxBase_OutgoingEmailDeliveryMethod] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[NoEmailCount] [int] NULL,
[MailboxId] [uniqueidentifier] NOT NULL,
[EnabledForIncomingEmail] [bit] NOT NULL CONSTRAINT [DF_MailboxBase_EnabledForIncomingEmail] DEFAULT ((1)),
[NoACTCount] [int] NULL,
[EmailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ReceivingPostponedUntil] [datetime] NULL CONSTRAINT [DF_MailboxBase_ReceivingPostponedUntil] DEFAULT ((0)),
[OutgoingEmailStatus] [int] NULL CONSTRAINT [DF_MailboxBase_OutgoingEmailStatus] DEFAULT ((0)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[MailboxProcessingContext] [int] NULL,
[EmailRouterAccessApproval] [int] NOT NULL CONSTRAINT [DF_MailboxBase_EmailRouterAccessApproval] DEFAULT ((0)),
[IncomingEmailDeliveryMethod] [int] NULL CONSTRAINT [DF_MailboxBase_IncomingEmailDeliveryMethod] DEFAULT ((0)),
[PostponeTestEmailConfigurationUntil] [datetime] NULL CONSTRAINT [DF_MailboxBase_PostponeTestEmailConfigurationUntil] DEFAULT ((0)),
[EmailServerProfile] [uniqueidentifier] NULL,
[EnabledForACT] [bit] NOT NULL CONSTRAINT [DF_MailboxBase_EnabledForACT] DEFAULT ((1)),
[TestMailboxAccessCompletedOn] [datetime] NULL CONSTRAINT [DF_MailboxBase_TestMailboxAccessCompletedOn] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_MailboxBase_StateCode] DEFAULT ((0)),
[ProcessEmailReceivedAfter] [datetime] NULL CONSTRAINT [DF_MailboxBase_ProcessEmailReceivedAfter] DEFAULT ((0)),
[PostponeMailboxProcessingUntil] [datetime] NOT NULL CONSTRAINT [DF_MailboxBase_PostponeMailboxProcessingUntil] DEFAULT ((0)),
[OwnerId] [uniqueidentifier] NOT NULL,
[LastActiveOn] [datetime] NOT NULL CONSTRAINT [DF_MailboxBase_LastActiveOn] DEFAULT ((0)),
[TimeZoneRuleVersionNumber] [int] NULL,
[LastAutoDiscoveredOn] [datetime] NULL CONSTRAINT [DF_MailboxBase_LastAutoDiscoveredOn] DEFAULT ((0)),
[TestEmailConfigurationScheduled] [bit] NULL CONSTRAINT [DF_MailboxBase_TestEmailConfigurationScheduled] DEFAULT ((0)),
[IsEmailAddressApprovedByO365Admin] [bit] NOT NULL CONSTRAINT [DF_MailboxBase_IsEmailAddressApprovedByO365Admin] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[Password] [varbinary] (max) NULL,
[ExchangeSyncStateXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ProcessAndDeleteEmails] [bit] NULL CONSTRAINT [DF_MailboxBase_ProcessAndDeleteEmails] DEFAULT ((0)),
[RegardingObjectId] [uniqueidentifier] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[StatusCode] [int] NOT NULL CONSTRAINT [DF_MailboxBase_StatusCode] DEFAULT ((1)),
[ReceivingPostponedUntilForACT] [datetime] NULL CONSTRAINT [DF_MailboxBase_ReceivingPostponedUntilForACT] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[UndeliverableFolder] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NOT NULL,
[IsForwardMailbox] [bit] NOT NULL CONSTRAINT [DF_MailboxBase_IsForwardMailbox] DEFAULT ((0)),
[PostponeSendingUntil] [datetime] NOT NULL CONSTRAINT [DF_MailboxBase_PostponeSendingUntil] DEFAULT ((0)),
[TestEmailConfigurationRetryCount] [int] NOT NULL CONSTRAINT [DF_MailboxBase_TestEmailConfigurationRetryCount] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[AllowEmailConnectorToUseCredentials] [bit] NULL CONSTRAINT [DF_MailboxBase_AllowEmailConnectorToUseCredentials] DEFAULT ((0)),
[HostId] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[LastMessageId] [nvarchar] (320) COLLATE Latin1_General_CI_AI NULL,
[IncomingEmailStatus] [int] NULL CONSTRAINT [DF_MailboxBase_IncomingEmailStatus] DEFAULT ((0)),
[Username] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[EWSURL] [nvarchar] (1042) COLLATE Latin1_General_CI_AI NULL,
[TransientFailureCount] [int] NOT NULL CONSTRAINT [DF_MailboxBase_TransientFailureCount] DEFAULT ((0)),
[OwningBusinessUnit] [uniqueidentifier] NULL,
[IsACTSyncOrgFlagSet] [bit] NULL CONSTRAINT [DF_MailboxBase_IsACTSyncOrgFlagSet] DEFAULT ((0)),
[ACTStatus] [int] NULL CONSTRAINT [DF_MailboxBase_ACTStatus] DEFAULT ((0)),
[EnabledForOutgoingEmail] [bit] NOT NULL CONSTRAINT [DF_MailboxBase_EnabledForOutgoingEmail] DEFAULT ((1)),
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectTypeCode] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_MailboxBase_OwnerIdType] DEFAULT ((8)),
[LastSuccessfulSyncCompletedOn] [datetime] NULL,
[ProcessedTimes] [int] NULL,
[AverageTotalDuration] [int] NULL,
[LastSyncErrorOccurredOn] [datetime] NULL,
[ItemsFailedForLastSync] [int] NULL,
[LastSyncErrorMachineName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[LastSyncErrorCode] [int] NULL,
[ItemsProcessedForLastSync] [int] NULL,
[LastSyncStartedOn] [datetime] NULL,
[LastSyncError] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[LastSyncErrorCount] [int] NULL,
[OrgMarkedAsPrimaryForExchangeSync] [bit] NULL CONSTRAINT [DF_MailboxBase_OrgMarkedAsPrimaryForExchangeSync] DEFAULT ((0)),
[LastDuration] [int] NULL,
[ForcedUnlockCount] [int] NOT NULL CONSTRAINT [DF_MailboxBase_ForcedUnlockCount] DEFAULT ((0)),
[ProcessingLastAttemptedOn] [datetime] NULL,
[IsServiceAccount] [bit] NOT NULL CONSTRAINT [DF_MailboxBase_IsServiceAccount] DEFAULT ((0)),
[VerboseLoggingEnabled] [int] NOT NULL CONSTRAINT [DF_MailboxBase_VerboseLoggingEnabled] DEFAULT ((0)),
[FolderHierarchy] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[LastMailboxForcedUnlockOccurredOn] [datetime] NULL,
[OfficeAppsDeploymentCompleteOn] [datetime] NULL,
[PostponeOfficeAppsDeploymentUntil] [datetime] NULL CONSTRAINT [DF_MailboxBase_PostponeOfficeAppsDeploymentUntil] DEFAULT ((0)),
[OfficeAppsDeploymentScheduled] [bit] NULL CONSTRAINT [DF_MailboxBase_OfficeAppsDeploymentScheduled] DEFAULT ((0)),
[MailboxStatus] [int] NULL CONSTRAINT [DF_MailboxBase_MailboxStatus] DEFAULT ((0)),
[OfficeAppsDeploymentError] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[OfficeAppsDeploymentStatus] [int] NULL CONSTRAINT [DF_MailboxBase_OfficeAppsDeploymentStatus] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[MailboxBase] ADD CONSTRAINT [PK_mailboxBase] PRIMARY KEY CLUSTERED  ([MailboxId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Mailbox_EmailServerProfile] ON [dbo].[MailboxBase] ([EmailServerProfile]) WHERE ([EmailServerProfile] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Mailbox_IsServiceAccount] ON [dbo].[MailboxBase] ([EmailServerProfile], [IsServiceAccount]) WHERE ([EmailServerProfile] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_FindOutgoingEmails] ON [dbo].[MailboxBase] ([EnabledForOutgoingEmail], [PostponeSendingUntil]) INCLUDE ([MailboxId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Mailbox_Name] ON [dbo].[MailboxBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[MailboxBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Mailbox_MailboxQueueManagerDequeue] ON [dbo].[MailboxBase] ([ProcessingStateCode], [PostponeMailboxProcessingUntil]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_regardingobjectid] ON [dbo].[MailboxBase] ([RegardingObjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Mailbox_Regarding] ON [dbo].[MailboxBase] ([RegardingObjectTypeCode], [RegardingObjectId]) INCLUDE ([ACTDeliveryMethod], [EnabledForACT], [EnabledForIncomingEmail], [IncomingEmailDeliveryMethod], [StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[MailboxBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[MailboxBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MailboxBase] ADD CONSTRAINT [business_unit_mailbox] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[MailboxBase] ADD CONSTRAINT [emailserverprofile_mailbox] FOREIGN KEY ([EmailServerProfile]) REFERENCES [dbo].[EmailServerProfileBase] ([EmailServerProfileId])
GO
ALTER TABLE [dbo].[MailboxBase] ADD CONSTRAINT [owner_mailbox] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
