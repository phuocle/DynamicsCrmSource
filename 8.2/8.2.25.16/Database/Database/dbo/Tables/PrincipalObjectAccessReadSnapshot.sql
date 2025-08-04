CREATE TABLE [dbo].[PrincipalObjectAccessReadSnapshot] (
    [ObjectTypeCode]                           INT              NOT NULL,
    [Count]                                    BIGINT           NOT NULL,
    [PrincipalId]                              UNIQUEIDENTIFIER NOT NULL,
    [PrincipalObjectAccessReadSnapshotId]      UNIQUEIDENTIFIER CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_PrincipalObjectAccessReadSnapshotId] DEFAULT (newid()) NOT NULL,
    [TeamPrincipalsCount]                      BIGINT           CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_TeamPrincipalsCount] DEFAULT ((0)) NOT NULL,
    [ChildUserPrincipalsCount]                 BIGINT           CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_ChildUserPrincipalsCount] DEFAULT ((0)) NOT NULL,
    [RecordCountForOwnerIDPercentOfTotalRows]  INT              NULL,
    [RecordCountForOwnerID]                    BIGINT           NULL,
    [RecordCountForOwningBU]                   BIGINT           NULL,
    [RecordCountForOwningBUPercentOfTotalRows] INT              NULL,
    [CountPercentOfTotalRows]                  INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_PrincipalObjectAccessReadSnapshot] PRIMARY KEY NONCLUSTERED ([PrincipalObjectAccessReadSnapshotId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_PrincipalObjectAccessReadSnapshot_PrincipalObject]
    ON [dbo].[PrincipalObjectAccessReadSnapshot]([PrincipalId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

