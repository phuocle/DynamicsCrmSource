CREATE TABLE [dbo].[QueueItemBase]
(
[QueueItemId] [uniqueidentifier] NOT NULL,
[QueueId] [uniqueidentifier] NULL,
[ObjectId] [uniqueidentifier] NULL,
[ObjectTypeCode] [int] NULL,
[Title] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[EnteredOn] [datetime] NULL,
[Priority] [int] NULL,
[State] [int] NULL,
[Status] [int] NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ToRecipients] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[Sender] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_QueueItemBase_StateCode] DEFAULT ((0)),
[OverriddenCreatedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[StatusCode] [int] NOT NULL CONSTRAINT [DF_QueueItemBase_StatusCode] DEFAULT ((1)),
[WorkerId] [uniqueidentifier] NULL,
[WorkerIdModifiedOn] [datetime] NULL,
[WorkerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[WorkerIdType] [int] NULL,
[WorkerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QueueItemBase] ADD CONSTRAINT [cndx_PrimaryKey_QueueItem] PRIMARY KEY CLUSTERED  ([QueueItemId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QueueItem_modifiedon] ON [dbo].[QueueItemBase] ([ModifiedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Letter_QueueItem] ON [dbo].[QueueItemBase] ([ObjectId], [ObjectTypeCode], [StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_queue_entries] ON [dbo].[QueueItemBase] ([QueueId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Sync_QueueItem_statecode] ON [dbo].[QueueItemBase] ([StateCode], [QueueId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeWorkerIdEnteredOn] ON [dbo].[QueueItemBase] ([StateCode], [WorkerId], [EnteredOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_TitleQueueItemId] ON [dbo].[QueueItemBase] ([Title]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[QueueItemBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_workerid] ON [dbo].[QueueItemBase] ([WorkerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QueueItemBase] ADD CONSTRAINT [queue_entries] FOREIGN KEY ([QueueId]) REFERENCES [dbo].[QueueBase] ([QueueId])
GO
ALTER TABLE [dbo].[QueueItemBase] ADD CONSTRAINT [TransactionCurrency_QueueItem] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
