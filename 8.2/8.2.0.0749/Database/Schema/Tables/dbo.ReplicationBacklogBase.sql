CREATE TABLE [dbo].[ReplicationBacklogBase]
(
[TargetObjectId] [uniqueidentifier] NULL,
[Data] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ReplicationBacklogType] [int] NULL,
[TargetDatacenterId] [uniqueidentifier] NULL,
[ReplicationBacklogId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ReplicationBacklogBase_ReplicationBacklogId] DEFAULT (newid()),
[TargetObjectTypeCode] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ReplicationBacklogBase] ADD CONSTRAINT [PK_ReplicationBacklogBase] PRIMARY KEY CLUSTERED  ([ReplicationBacklogId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
