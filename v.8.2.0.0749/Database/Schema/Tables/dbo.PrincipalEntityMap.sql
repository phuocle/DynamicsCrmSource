CREATE TABLE [dbo].[PrincipalEntityMap]
(
[ObjectTypeCode] [int] NOT NULL,
[PrincipalId] [uniqueidentifier] NOT NULL,
[PrincipalEntityMapId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PrincipalEntityMap_PrincipalEntityMapId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrincipalEntityMap] ADD CONSTRAINT [cndx_PrimaryKey_PrincipalEntityMap] PRIMARY KEY CLUSTERED  ([PrincipalEntityMapId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[PrincipalEntityMap] ([PrincipalId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PrincipalEntityMap] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrincipalEntityMap] ADD CONSTRAINT [owner_principalentitymap] FOREIGN KEY ([PrincipalId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
