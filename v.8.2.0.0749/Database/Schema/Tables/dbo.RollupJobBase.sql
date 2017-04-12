CREATE TABLE [dbo].[RollupJobBase]
(
[RegardingObjectId] [uniqueidentifier] NULL,
[PostponeUntil] [datetime] NULL,
[SourceEntityTypeCode] [int] NOT NULL,
[StatusCode] [int] NULL CONSTRAINT [DF_RollupJobBase_StatusCode] DEFAULT ((0)),
[RollupJobId] [bigint] NOT NULL IDENTITY(1, 1),
[RecordCreatedOn] [datetime] NULL CONSTRAINT [DF_RollupJobBase_RecordCreatedOn] DEFAULT (getutcdate()),
[StateCode] [int] NULL CONSTRAINT [DF_RollupJobBase_StateCode] DEFAULT ((0)),
[DepthProcessed] [int] NULL,
[RollupPropertiesId] [uniqueidentifier] NOT NULL,
[RetryCount] [int] NOT NULL CONSTRAINT [DF_RollupJobBase_RetryCount] DEFAULT ((0)),
[RegardingObjectTypeCode] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RollupJobBase] ADD CONSTRAINT [ndx_PrimaryKey_RollupJob] PRIMARY KEY CLUSTERED  ([RollupJobId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RollupId_UpdateLastCalculated] ON [dbo].[RollupJobBase] ([RollupPropertiesId], [RecordCreatedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RollupJob_FindNearestPostponeTime] ON [dbo].[RollupJobBase] ([SourceEntityTypeCode], [StateCode], [RetryCount], [PostponeUntil]) INCLUDE ([RollupPropertiesId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RollupJob_Dequeue] ON [dbo].[RollupJobBase] ([SourceEntityTypeCode], [StateCode], [RetryCount], [RollupJobId]) INCLUDE ([PostponeUntil], [RollupPropertiesId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
