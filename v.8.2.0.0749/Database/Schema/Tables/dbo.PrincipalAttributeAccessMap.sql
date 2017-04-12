CREATE TABLE [dbo].[PrincipalAttributeAccessMap]
(
[PrincipalId] [uniqueidentifier] NOT NULL,
[ReadAccess] [int] NOT NULL CONSTRAINT [DF_PrincipalAttributeAccessMap_ReadAccess] DEFAULT ((0)),
[CreateAccess] [int] NOT NULL CONSTRAINT [DF_PrincipalAttributeAccessMap_CreateAccess] DEFAULT ((0)),
[AttributeId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[UpdateAccess] [int] NOT NULL CONSTRAINT [DF_PrincipalAttributeAccessMap_UpdateAccess] DEFAULT ((0)),
[PrincipalAttributeAccessMapId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PrincipalAttributeAccessMap_PrincipalAttributeAccessMapId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrincipalAttributeAccessMap] ADD CONSTRAINT [ndx_PrimaryKey_PrincipalAttributeAccessMap] PRIMARY KEY NONCLUSTERED  ([PrincipalAttributeAccessMapId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [cndx_Security] ON [dbo].[PrincipalAttributeAccessMap] ([PrincipalId], [AttributeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PrincipalAttributeAccessMap] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrincipalAttributeAccessMap] ADD CONSTRAINT [owner_principalattributeaccessmap] FOREIGN KEY ([PrincipalId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
