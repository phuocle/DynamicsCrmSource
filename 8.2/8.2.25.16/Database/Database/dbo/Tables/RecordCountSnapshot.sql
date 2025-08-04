CREATE TABLE [dbo].[RecordCountSnapshot] (
    [Count]                 BIGINT           NOT NULL,
    [RecordCountSnapshotId] UNIQUEIDENTIFIER CONSTRAINT [DF_RecordCountSnapshot_RecordCountSnapshotId] DEFAULT (newid()) NOT NULL,
    [ObjectTypeCode]        INT              NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_RecordCountSnapshot] PRIMARY KEY NONCLUSTERED ([RecordCountSnapshotId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_RecordCountSnapshot_ObjectTypeCode]
    ON [dbo].[RecordCountSnapshot]([ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

