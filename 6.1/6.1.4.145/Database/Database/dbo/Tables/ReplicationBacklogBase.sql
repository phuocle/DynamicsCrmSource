CREATE TABLE [dbo].[ReplicationBacklogBase] (
    [TargetObjectId]         UNIQUEIDENTIFIER NULL,
    [Data]                   NVARCHAR (MAX)   NULL,
    [ReplicationBacklogType] INT              NULL,
    [TargetDatacenterId]     UNIQUEIDENTIFIER NULL,
    [ReplicationBacklogId]   UNIQUEIDENTIFIER CONSTRAINT [DF_ReplicationBacklogBase_ReplicationBacklogId] DEFAULT (newid()) NOT NULL,
    [TargetObjectTypeCode]   INT              NULL,
    CONSTRAINT [PK_ReplicationBacklogBase] PRIMARY KEY CLUSTERED ([ReplicationBacklogId] ASC) WITH (FILLFACTOR = 80)
);

