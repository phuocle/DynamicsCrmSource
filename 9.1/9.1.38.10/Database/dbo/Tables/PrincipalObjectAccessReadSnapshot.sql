CREATE TABLE [dbo].[PrincipalObjectAccessReadSnapshot] (
    [PrincipalObjectAccessReadSnapshotId]      UNIQUEIDENTIFIER CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_PrincipalObjectAccessReadSnapshotId] DEFAULT (newid()) NOT NULL,
    [TeamPrincipalsCount]                      BIGINT           CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_TeamPrincipalsCount] DEFAULT ((0)) NOT NULL,
    [Count]                                    BIGINT           NOT NULL,
    [RecordCountForOwningBUPercentOfTotalRows] INT              NULL,
    [RecordCountForOwningBU]                   BIGINT           NULL,
    [RecordCountForOwnerIDPercentOfTotalRows]  INT              NULL,
    [ChildUserPrincipalsCount]                 BIGINT           CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_ChildUserPrincipalsCount] DEFAULT ((0)) NOT NULL,
    [ObjectTypeCode]                           INT              NOT NULL,
    [RecordCountForOwnerID]                    BIGINT           NULL,
    [PrincipalId]                              UNIQUEIDENTIFIER NOT NULL,
    [CountPercentOfTotalRows]                  INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_PrincipalObjectAccessReadSnapshot] PRIMARY KEY NONCLUSTERED ([PrincipalObjectAccessReadSnapshotId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[PrincipalObjectAccessReadSnapshot] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_PrincipalObjectAccessReadSnapshot_PrincipalObject]
    ON [dbo].[PrincipalObjectAccessReadSnapshot]([PrincipalId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_objecttypecode]
    ON [dbo].[PrincipalObjectAccessReadSnapshot]([ObjectTypeCode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

