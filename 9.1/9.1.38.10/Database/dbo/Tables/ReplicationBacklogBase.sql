CREATE TABLE [dbo].[ReplicationBacklogBase] (
    [TargetObjectId]         UNIQUEIDENTIFIER NULL,
    [Data]                   NVARCHAR (MAX)   NULL,
    [ReplicationBacklogType] INT              NULL,
    [ReplicationBacklogId]   UNIQUEIDENTIFIER CONSTRAINT [DF_ReplicationBacklogBase_ReplicationBacklogId] DEFAULT (newid()) NOT NULL,
    [TargetDatacenterId]     UNIQUEIDENTIFIER NULL,
    [TargetObjectTypeCode]   INT              NULL,
    CONSTRAINT [PK_ReplicationBacklogBase] PRIMARY KEY CLUSTERED ([ReplicationBacklogId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ReplicationBacklogBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ReplicationBacklogBase] SET (LOCK_ESCALATION = DISABLE);

