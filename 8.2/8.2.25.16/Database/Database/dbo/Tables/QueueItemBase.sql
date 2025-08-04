CREATE TABLE [dbo].[QueueItemBase] (
    [QueueItemId]               UNIQUEIDENTIFIER NOT NULL,
    [QueueId]                   UNIQUEIDENTIFIER NULL,
    [ObjectId]                  UNIQUEIDENTIFIER NULL,
    [ObjectTypeCode]            INT              NULL,
    [Title]                     NVARCHAR (300)   NULL,
    [EnteredOn]                 DATETIME         NULL,
    [Priority]                  INT              NULL,
    [State]                     INT              NULL,
    [Status]                    INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ToRecipients]              NVARCHAR (500)   NULL,
    [Sender]                    NVARCHAR (250)   NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]      INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              CONSTRAINT [DF_QueueItemBase_StateCode] DEFAULT ((0)) NOT NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [StatusCode]                INT              CONSTRAINT [DF_QueueItemBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [WorkerId]                  UNIQUEIDENTIFIER NULL,
    [WorkerIdModifiedOn]        DATETIME         NULL,
    [WorkerIdName]              NVARCHAR (4000)  NULL,
    [WorkerIdType]              INT              NULL,
    [WorkerIdYomiName]          NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_QueueItem] PRIMARY KEY CLUSTERED ([QueueItemId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [queue_entries] FOREIGN KEY ([QueueId]) REFERENCES [dbo].[QueueBase] ([QueueId]),
    CONSTRAINT [TransactionCurrency_QueueItem] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[QueueItemBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_StateCodeWorkerIdEnteredOn]
    ON [dbo].[QueueItemBase]([StateCode] ASC, [WorkerId] ASC, [EnteredOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_queue_entries]
    ON [dbo].[QueueItemBase]([QueueId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_QueueItem_statecode]
    ON [dbo].[QueueItemBase]([StateCode] ASC, [QueueId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_TitleQueueItemId]
    ON [dbo].[QueueItemBase]([Title] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_workerid]
    ON [dbo].[QueueItemBase]([WorkerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Letter_QueueItem]
    ON [dbo].[QueueItemBase]([ObjectId] ASC, [ObjectTypeCode] ASC, [StateCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QueueItem_modifiedon]
    ON [dbo].[QueueItemBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 80);

