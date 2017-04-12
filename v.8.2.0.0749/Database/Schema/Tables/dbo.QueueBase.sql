CREATE TABLE [dbo].[QueueBase]
(
[QueueId] [uniqueidentifier] NOT NULL,
[BusinessUnitId] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[EMailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[PrimaryUserId] [uniqueidentifier] NULL,
[QueueTypeCode] [int] NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[QueueSemantics] [int] NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[IgnoreUnsolicitedEmail] [bit] NULL CONSTRAINT [DF_QueueBase_IgnoreUnsolicitedEmail] DEFAULT ((0)),
[IsFaxQueue] [bit] NULL CONSTRAINT [DF_QueueBase_IsFaxQueue] DEFAULT ((0)),
[EmailPassword] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[IncomingEmailDeliveryMethod] [int] NOT NULL CONSTRAINT [DF_QueueBase_IncomingEmailDeliveryMethod] DEFAULT ((0)),
[EmailUsername] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[OutgoingEmailDeliveryMethod] [int] NOT NULL CONSTRAINT [DF_QueueBase_OutgoingEmailDeliveryMethod] DEFAULT ((0)),
[AllowEmailCredentials] [bit] NOT NULL CONSTRAINT [DF_QueueBase_AllowEmailCredentials] DEFAULT ((0)),
[IncomingEmailFilteringMethod] [int] NOT NULL CONSTRAINT [DF_QueueBase_IncomingEmailFilteringMethod] DEFAULT ((0)),
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[StatusCode] [int] NOT NULL CONSTRAINT [DF_QueueBase_StatusCode] DEFAULT ((1)),
[ImportSequenceNumber] [int] NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_QueueBase_StateCode] DEFAULT ((0)),
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_QueueBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[OverriddenCreatedOn] [datetime] NULL,
[EmailRouterAccessApproval] [int] NOT NULL CONSTRAINT [DF_QueueBase_EmailRouterAccessApproval] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_QueueBase_OwnerIdType] DEFAULT ((8)),
[IsEmailAddressApprovedByO365Admin] [bit] NOT NULL CONSTRAINT [DF_QueueBase_IsEmailAddressApprovedByO365Admin] DEFAULT ((0)),
[EntityImageId] [uniqueidentifier] NULL,
[DefaultMailbox] [uniqueidentifier] NULL,
[QueueViewType] [int] NOT NULL CONSTRAINT [DF_QueueBase_QueueViewType] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[QueueBase] ADD CONSTRAINT [cndx_PrimaryKey_Queue] PRIMARY KEY CLUSTERED  ([QueueId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_queues] ON [dbo].[QueueBase] ([BusinessUnitId]) WHERE ([BusinessUnitId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Email] ON [dbo].[QueueBase] ([EMailAddress], [IgnoreUnsolicitedEmail]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[QueueBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[QueueBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_queues2] ON [dbo].[QueueBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_queue_primary_user] ON [dbo].[QueueBase] ([PrimaryUserId]) WHERE ([PrimaryUserId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[QueueBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QueueBase] ADD CONSTRAINT [business_unit_queues] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[QueueBase] ADD CONSTRAINT [business_unit_queues2] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[QueueBase] ADD CONSTRAINT [owner_queues] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[QueueBase] ADD CONSTRAINT [queue_defaultmailbox_mailbox] FOREIGN KEY ([DefaultMailbox]) REFERENCES [dbo].[MailboxBase] ([MailboxId])
GO
ALTER TABLE [dbo].[QueueBase] ADD CONSTRAINT [queue_primary_user] FOREIGN KEY ([PrimaryUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[QueueBase] ADD CONSTRAINT [TransactionCurrency_Queue] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
