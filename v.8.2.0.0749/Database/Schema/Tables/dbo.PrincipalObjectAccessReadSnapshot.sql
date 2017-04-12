CREATE TABLE [dbo].[PrincipalObjectAccessReadSnapshot]
(
[ObjectTypeCode] [int] NOT NULL,
[Count] [bigint] NOT NULL,
[PrincipalId] [uniqueidentifier] NOT NULL,
[PrincipalObjectAccessReadSnapshotId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_PrincipalObjectAccessReadSnapshotId] DEFAULT (newid()),
[TeamPrincipalsCount] [bigint] NOT NULL CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_TeamPrincipalsCount] DEFAULT ((0)),
[ChildUserPrincipalsCount] [bigint] NOT NULL CONSTRAINT [DF_PrincipalObjectAccessReadSnapshot_ChildUserPrincipalsCount] DEFAULT ((0)),
[RecordCountForOwnerIDPercentOfTotalRows] [int] NULL,
[RecordCountForOwnerID] [bigint] NULL,
[RecordCountForOwningBU] [bigint] NULL,
[RecordCountForOwningBUPercentOfTotalRows] [int] NULL,
[CountPercentOfTotalRows] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrincipalObjectAccessReadSnapshot] ADD CONSTRAINT [ndx_PrimaryKey_PrincipalObjectAccessReadSnapshot] PRIMARY KEY NONCLUSTERED  ([PrincipalObjectAccessReadSnapshotId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [cndx_PrincipalObjectAccessReadSnapshot_PrincipalObject] ON [dbo].[PrincipalObjectAccessReadSnapshot] ([PrincipalId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
