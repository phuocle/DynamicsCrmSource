CREATE TABLE [dbo].[RecordCountSnapshot]
(
[Count] [bigint] NOT NULL,
[RecordCountSnapshotId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RecordCountSnapshot_RecordCountSnapshotId] DEFAULT (newid()),
[ObjectTypeCode] [int] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecordCountSnapshot] ADD CONSTRAINT [ndx_PrimaryKey_RecordCountSnapshot] PRIMARY KEY NONCLUSTERED  ([RecordCountSnapshotId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [cndx_RecordCountSnapshot_ObjectTypeCode] ON [dbo].[RecordCountSnapshot] ([ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
