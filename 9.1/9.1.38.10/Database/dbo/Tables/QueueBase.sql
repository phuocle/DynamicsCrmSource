CREATE TABLE [dbo].[QueueBase] (
    [QueueTypeCode]                     INT              NULL,
    [TransactionCurrencyId]             UNIQUEIDENTIFIER NULL,
    [QueueId]                           UNIQUEIDENTIFIER NOT NULL,
    [Name]                              NVARCHAR (200)   NULL,
    [PrimaryUserId]                     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                        DATETIME         NULL,
    [VersionNumber]                     ROWVERSION       NULL,
    [ModifiedBy]                        UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                      DECIMAL (23, 10) NULL,
    [OverriddenCreatedOn]               DATETIME         NULL,
    [OwnerId]                           UNIQUEIDENTIFIER CONSTRAINT [DF_QueueBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [IsFaxQueue]                        BIT              CONSTRAINT [DF_QueueBase_IsFaxQueue] DEFAULT ((0)) NULL,
    [StatusCode]                        INT              CONSTRAINT [DF_QueueBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [IgnoreUnsolicitedEmail]            BIT              CONSTRAINT [DF_QueueBase_IgnoreUnsolicitedEmail] DEFAULT ((0)) NULL,
    [IncomingEmailDeliveryMethod]       INT              CONSTRAINT [DF_QueueBase_IncomingEmailDeliveryMethod] DEFAULT ((0)) NOT NULL,
    [ImportSequenceNumber]              INT              NULL,
    [StateCode]                         INT              CONSTRAINT [DF_QueueBase_StateCode] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                         UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]                UNIQUEIDENTIFIER NULL,
    [EntityImageId]                     UNIQUEIDENTIFIER NULL,
    [BusinessUnitId]                    UNIQUEIDENTIFIER NULL,
    [DefaultMailbox]                    UNIQUEIDENTIFIER NULL,
    [QueueViewType]                     INT              CONSTRAINT [DF_QueueBase_QueueViewType] DEFAULT ((0)) NOT NULL,
    [EmailUsername]                     NVARCHAR (200)   NULL,
    [IsEmailAddressApprovedByO365Admin] BIT              CONSTRAINT [DF_QueueBase_IsEmailAddressApprovedByO365Admin] DEFAULT ((0)) NOT NULL,
    [EMailAddress]                      NVARCHAR (100)   NULL,
    [QueueSemantics]                    INT              NULL,
    [EmailPassword]                     NVARCHAR (200)   NULL,
    [OutgoingEmailDeliveryMethod]       INT              CONSTRAINT [DF_QueueBase_OutgoingEmailDeliveryMethod] DEFAULT ((0)) NOT NULL,
    [OrganizationId]                    UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                         DATETIME         NULL,
    [AllowEmailCredentials]             BIT              CONSTRAINT [DF_QueueBase_AllowEmailCredentials] DEFAULT ((0)) NOT NULL,
    [Description]                       NVARCHAR (MAX)   NULL,
    [EmailRouterAccessApproval]         INT              CONSTRAINT [DF_QueueBase_EmailRouterAccessApproval] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [IncomingEmailFilteringMethod]      INT              CONSTRAINT [DF_QueueBase_IncomingEmailFilteringMethod] DEFAULT ((0)) NOT NULL,
    [OwnerIdType]                       INT              CONSTRAINT [DF_QueueBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Queue] PRIMARY KEY CLUSTERED ([QueueId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_queues] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [business_unit_queues2] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_queues] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [queue_defaultmailbox_mailbox] FOREIGN KEY ([DefaultMailbox]) REFERENCES [dbo].[MailboxBase] ([MailboxId]),
    CONSTRAINT [queue_primary_user] FOREIGN KEY ([PrimaryUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [TransactionCurrency_Queue] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[QueueBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[QueueBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[QueueBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[QueueBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Queue_stateCode]
    ON [dbo].[QueueBase]([StateCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_queue_primary_user]
    ON [dbo].[QueueBase]([PrimaryUserId] ASC) WHERE ([PrimaryUserId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Email]
    ON [dbo].[QueueBase]([EMailAddress] ASC, [IgnoreUnsolicitedEmail] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[QueueBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_queues2]
    ON [dbo].[QueueBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_queues]
    ON [dbo].[QueueBase]([BusinessUnitId] ASC) WHERE ([BusinessUnitId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_11C421C861674A61BBA5E83A4BD790F7]
    ON [dbo].[QueueBase]([QueueId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_11C421C861674A61BBA5E83A4BD790F7]
    ON [dbo].[QueueBase]([QueueId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_11C421C861674A61BBA5E83A4BD790F7]
    ON [dbo].[QueueBase]([Name] ASC, [QueueId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_queue_defaultmailbox_mailbox]
    ON [dbo].[QueueBase]([DefaultMailbox] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

