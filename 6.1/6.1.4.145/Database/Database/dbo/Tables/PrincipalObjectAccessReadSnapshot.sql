CREATE TABLE [dbo].[PrincipalObjectAccessReadSnapshot] (
    [ObjectTypeCode]                      INT              NOT NULL,
    [Count]                               BIGINT           NOT NULL,
    [PrincipalId]                         UNIQUEIDENTIFIER NOT NULL,
    [PrincipalObjectAccessReadSnapshotId] UNIQUEIDENTIFIER CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_PrincipalObjectAccessReadSnapshotId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_PrincipalObjectAccessReadSnapshot] PRIMARY KEY NONCLUSTERED ([PrincipalObjectAccessReadSnapshotId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_PrincipalObjectAccessReadSnapshot_PrincipalObject]
    ON [dbo].[PrincipalObjectAccessReadSnapshot]([PrincipalId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

