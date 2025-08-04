CREATE TABLE [dbo].[QueueItemBase] (
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ObjectTypeCode]            INT              NULL,
    [ToRecipients]              NVARCHAR (500)   NULL,
    [QueueId]                   UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [WorkerIdModifiedOn]        DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Status]                    INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [State]                     INT              NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [ObjectId]                  UNIQUEIDENTIFIER NULL,
    [QueueItemId]               UNIQUEIDENTIFIER NOT NULL,
    [StateCode]                 INT              CONSTRAINT [DF_QueueItemBase_StateCode] DEFAULT ((0)) NOT NULL,
    [Priority]                  INT              NULL,
    [Sender]                    NVARCHAR (250)   NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [Title]                     NVARCHAR (300)   NULL,
    [StatusCode]                INT              CONSTRAINT [DF_QueueItemBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [EnteredOn]                 DATETIME         NULL,
    [WorkerId]                  UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ImportSequenceNumber]      INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedOn]                DATETIME         NULL,
    [WorkerIdName]              NVARCHAR (4000)  NULL,
    [WorkerIdType]              INT              NULL,
    [WorkerIdYomiName]          NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_QueueItem] PRIMARY KEY CLUSTERED ([QueueItemId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [queue_entries] FOREIGN KEY ([QueueId]) REFERENCES [dbo].[QueueBase] ([QueueId]),
    CONSTRAINT [TransactionCurrency_QueueItem] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[QueueItemBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[QueueItemBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_QueueItem_modifiedon]
    ON [dbo].[QueueItemBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_TitleQueueItemId]
    ON [dbo].[QueueItemBase]([Title] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeWorkerIdEnteredOn]
    ON [dbo].[QueueItemBase]([StateCode] ASC, [WorkerId] ASC, [EnteredOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_QueueItem_statecode]
    ON [dbo].[QueueItemBase]([StateCode] ASC, [QueueId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_workerid]
    ON [dbo].[QueueItemBase]([WorkerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Letter_QueueItem]
    ON [dbo].[QueueItemBase]([ObjectId] ASC, [ObjectTypeCode] ASC, [StateCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_queue_entries]
    ON [dbo].[QueueItemBase]([QueueId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_B2FF933310034A51B2F06562A5DBD507]
    ON [dbo].[QueueItemBase]([Title] ASC, [QueueItemId] ASC)
    INCLUDE([ObjectId], [ObjectTypeCode], [EnteredOn], [QueueId], [WorkerId], [WorkerIdName], [WorkerIdType], [WorkerIdYomiName], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_B2FF933310034A51B2F06562A5DBD507]
    ON [dbo].[QueueItemBase]([QueueItemId] ASC)
    INCLUDE([Title], [ObjectId], [ObjectTypeCode], [EnteredOn], [QueueId], [WorkerId], [WorkerIdName], [WorkerIdType], [WorkerIdYomiName], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_B2FF933310034A51B2F06562A5DBD507]
    ON [dbo].[QueueItemBase]([QueueItemId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

