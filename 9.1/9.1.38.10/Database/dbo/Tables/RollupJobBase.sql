CREATE TABLE [dbo].[RollupJobBase] (
    [PostponeUntil]           DATETIME         NULL,
    [StatusCode]              INT              CONSTRAINT [DF_RollupJobBase_StatusCode] DEFAULT ((0)) NULL,
    [RecordCreatedOn]         DATETIME         CONSTRAINT [DF_RollupJobBase_RecordCreatedOn] DEFAULT (getutcdate()) NULL,
    [SourceEntityTypeCode]    INT              NOT NULL,
    [StateCode]               INT              CONSTRAINT [DF_RollupJobBase_StateCode] DEFAULT ((0)) NULL,
    [DepthProcessed]          INT              NULL,
    [RollupJobId]             BIGINT           IDENTITY (1, 1) NOT NULL,
    [RegardingObjectId]       UNIQUEIDENTIFIER NULL,
    [RollupPropertiesId]      UNIQUEIDENTIFIER NOT NULL,
    [RetryCount]              INT              CONSTRAINT [DF_RollupJobBase_RetryCount] DEFAULT ((0)) NOT NULL,
    [RegardingObjectTypeCode] INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_RollupJob] PRIMARY KEY CLUSTERED ([RollupJobId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[RollupJobBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_RollupJob_Dequeue]
    ON [dbo].[RollupJobBase]([SourceEntityTypeCode] ASC, [StateCode] ASC, [RetryCount] ASC, [RollupJobId] ASC)
    INCLUDE([RollupPropertiesId], [PostponeUntil]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RollupId_UpdateLastCalculated]
    ON [dbo].[RollupJobBase]([RollupPropertiesId] ASC, [RecordCreatedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RollupJob_FindNearestPostponeTime]
    ON [dbo].[RollupJobBase]([SourceEntityTypeCode] ASC, [StateCode] ASC, [RetryCount] ASC, [PostponeUntil] ASC)
    INCLUDE([RollupPropertiesId]) WITH (FILLFACTOR = 80);

