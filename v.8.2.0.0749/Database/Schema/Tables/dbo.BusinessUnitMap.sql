CREATE TABLE [dbo].[BusinessUnitMap]
(
[BusinessUnitMapId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_BusinessUnitMap_BusinessUnitMapId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL,
[SubBusinessId] [uniqueidentifier] NOT NULL,
[BusinessId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BusinessUnitMap] ADD CONSTRAINT [ndx_PrimaryKey_BusinessUnitMap] PRIMARY KEY NONCLUSTERED  ([BusinessUnitMapId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [cndx_Cover] ON [dbo].[BusinessUnitMap] ([BusinessId], [SubBusinessId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_map_constraint] ON [dbo].[BusinessUnitMap] ([SubBusinessId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BusinessUnitMap] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BusinessUnitMap] ADD CONSTRAINT [bizmap_businessid_businessunit] FOREIGN KEY ([BusinessId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BusinessUnitMap] ADD CONSTRAINT [bizmap_subbusinessid_businessunit] FOREIGN KEY ([SubBusinessId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
