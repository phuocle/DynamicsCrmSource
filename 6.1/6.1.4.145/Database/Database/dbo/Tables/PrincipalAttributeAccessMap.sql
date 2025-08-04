CREATE TABLE [dbo].[PrincipalAttributeAccessMap] (
    [PrincipalId]                   UNIQUEIDENTIFIER NOT NULL,
    [ReadAccess]                    INT              CONSTRAINT [DF_PrincipalAttributeAccessMap_ReadAccess] DEFAULT ((0)) NOT NULL,
    [CreateAccess]                  INT              CONSTRAINT [DF_PrincipalAttributeAccessMap_CreateAccess] DEFAULT ((0)) NOT NULL,
    [AttributeId]                   UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [UpdateAccess]                  INT              CONSTRAINT [DF_PrincipalAttributeAccessMap_UpdateAccess] DEFAULT ((0)) NOT NULL,
    [PrincipalAttributeAccessMapId] UNIQUEIDENTIFIER CONSTRAINT [DF_PrincipalAttributeAccessMap_PrincipalAttributeAccessMapId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_PrincipalAttributeAccessMap] PRIMARY KEY NONCLUSTERED ([PrincipalAttributeAccessMapId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [owner_principalattributeaccessmap] FOREIGN KEY ([PrincipalId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_Security]
    ON [dbo].[PrincipalAttributeAccessMap]([PrincipalId] ASC, [AttributeId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PrincipalAttributeAccessMap]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

