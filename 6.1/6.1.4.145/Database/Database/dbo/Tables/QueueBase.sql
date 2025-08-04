CREATE TABLE [dbo].[QueueBase] (
    [QueueId]                           UNIQUEIDENTIFIER NOT NULL,
    [BusinessUnitId]                    UNIQUEIDENTIFIER NULL,
    [OrganizationId]                    UNIQUEIDENTIFIER NOT NULL,
    [EMailAddress]                      NVARCHAR (100)   NULL,
    [PrimaryUserId]                     UNIQUEIDENTIFIER NULL,
    [QueueTypeCode]                     INT              NULL,
    [Name]                              NVARCHAR (200)   NULL,
    [Description]                       NVARCHAR (MAX)   NULL,
    [QueueSemantics]                    INT              NULL,
    [CreatedOn]                         DATETIME         NULL,
    [CreatedBy]                         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                        DATETIME         NULL,
    [VersionNumber]                     ROWVERSION       NULL,
    [IgnoreUnsolicitedEmail]            BIT              CONSTRAINT [DF_QueueBase_IgnoreUnsolicitedEmail] DEFAULT ((0)) NULL,
    [IsFaxQueue]                        BIT              CONSTRAINT [DF_QueueBase_IsFaxQueue] DEFAULT ((0)) NULL,
    [EmailPassword]                     NVARCHAR (200)   NULL,
    [IncomingEmailDeliveryMethod]       INT              CONSTRAINT [DF_QueueBase_IncomingEmailDeliveryMethod] DEFAULT ((0)) NOT NULL,
    [EmailUsername]                     NVARCHAR (200)   NULL,
    [OutgoingEmailDeliveryMethod]       INT              CONSTRAINT [DF_QueueBase_OutgoingEmailDeliveryMethod] DEFAULT ((0)) NOT NULL,
    [AllowEmailCredentials]             BIT              CONSTRAINT [DF_QueueBase_AllowEmailCredentials] DEFAULT ((0)) NOT NULL,
    [IncomingEmailFilteringMethod]      INT              CONSTRAINT [DF_QueueBase_IncomingEmailFilteringMethod] DEFAULT ((0)) NOT NULL,
    [TransactionCurrencyId]             UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                      DECIMAL (23, 10) NULL,
    [StatusCode]                        INT              CONSTRAINT [DF_QueueBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [ImportSequenceNumber]              INT              NULL,
    [StateCode]                         INT              CONSTRAINT [DF_QueueBase_StateCode] DEFAULT ((0)) NOT NULL,
    [OwningBusinessUnit]                UNIQUEIDENTIFIER NULL,
    [OwnerId]                           UNIQUEIDENTIFIER CONSTRAINT [DF_QueueBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OverriddenCreatedOn]               DATETIME         NULL,
    [EmailRouterAccessApproval]         INT              CONSTRAINT [DF_QueueBase_EmailRouterAccessApproval] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                 UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                       INT              CONSTRAINT [DF_QueueBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [IsEmailAddressApprovedByO365Admin] BIT              CONSTRAINT [DF_QueueBase_IsEmailAddressApprovedByO365Admin] DEFAULT ((0)) NOT NULL,
    [EntityImageId]                     UNIQUEIDENTIFIER NULL,
    [DefaultMailbox]                    UNIQUEIDENTIFIER NULL,
    [QueueViewType]                     INT              CONSTRAINT [DF_QueueBase_QueueViewType] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Queue] PRIMARY KEY CLUSTERED ([QueueId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_queues] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [business_unit_queues2] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_queues] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [queue_defaultmailbox_mailbox] FOREIGN KEY ([DefaultMailbox]) REFERENCES [dbo].[MailboxBase] ([MailboxId]) NOT FOR REPLICATION,
    CONSTRAINT [queue_primary_user] FOREIGN KEY ([PrimaryUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_Queue] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[QueueBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[QueueBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[QueueBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_queues2]
    ON [dbo].[QueueBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_queue_primary_user]
    ON [dbo].[QueueBase]([PrimaryUserId] ASC) WHERE ([PrimaryUserId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Email]
    ON [dbo].[QueueBase]([EMailAddress] ASC, [IgnoreUnsolicitedEmail] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_queues]
    ON [dbo].[QueueBase]([BusinessUnitId] ASC) WHERE ([BusinessUnitId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[QueueBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

