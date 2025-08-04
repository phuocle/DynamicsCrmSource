CREATE TABLE [dbo].[RollupJobBase] (
    [RegardingObjectId]       UNIQUEIDENTIFIER NULL,
    [PostponeUntil]           DATETIME         NULL,
    [SourceEntityTypeCode]    INT              NOT NULL,
    [StatusCode]              INT              CONSTRAINT [DF_RollupJobBase_StatusCode] DEFAULT ((0)) NULL,
    [RollupJobId]             BIGINT           IDENTITY (1, 1) NOT NULL,
    [RecordCreatedOn]         DATETIME         CONSTRAINT [DF_RollupJobBase_RecordCreatedOn] DEFAULT (getutcdate()) NULL,
    [StateCode]               INT              CONSTRAINT [DF_RollupJobBase_StateCode] DEFAULT ((0)) NULL,
    [DepthProcessed]          INT              NULL,
    [RollupPropertiesId]      UNIQUEIDENTIFIER NOT NULL,
    [RetryCount]              INT              CONSTRAINT [DF_RollupJobBase_RetryCount] DEFAULT ((0)) NOT NULL,
    [RegardingObjectTypeCode] INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_RollupJob] PRIMARY KEY CLUSTERED ([RollupJobId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_RollupId_UpdateLastCalculated]
    ON [dbo].[RollupJobBase]([RollupPropertiesId] ASC, [RecordCreatedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RollupJob_FindNearestPostponeTime]
    ON [dbo].[RollupJobBase]([SourceEntityTypeCode] ASC, [StateCode] ASC, [RetryCount] ASC, [PostponeUntil] ASC)
    INCLUDE([RollupPropertiesId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RollupJob_Dequeue]
    ON [dbo].[RollupJobBase]([SourceEntityTypeCode] ASC, [StateCode] ASC, [RetryCount] ASC, [RollupJobId] ASC)
    INCLUDE([RollupPropertiesId], [PostponeUntil]) WITH (FILLFACTOR = 80);

