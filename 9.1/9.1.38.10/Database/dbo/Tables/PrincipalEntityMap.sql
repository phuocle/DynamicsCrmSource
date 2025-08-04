CREATE TABLE [dbo].[PrincipalEntityMap] (
    [PrincipalId]          UNIQUEIDENTIFIER NOT NULL,
    [ObjectTypeCode]       INT              NOT NULL,
    [PrincipalEntityMapId] UNIQUEIDENTIFIER CONSTRAINT [DF_PrincipalEntityMap_PrincipalEntityMapId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_PrincipalEntityMap] PRIMARY KEY CLUSTERED ([PrincipalEntityMapId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [owner_principalentitymap] FOREIGN KEY ([PrincipalId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
ALTER TABLE [dbo].[PrincipalEntityMap] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[PrincipalEntityMap]([PrincipalId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PrincipalEntityMap]([VersionNumber] ASC) WITH (FILLFACTOR = 100);

