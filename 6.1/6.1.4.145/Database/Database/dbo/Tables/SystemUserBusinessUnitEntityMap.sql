CREATE TABLE [dbo].[SystemUserBusinessUnitEntityMap] (
    [ReadPrivilegeDepth]                INT              NULL,
    [SystemUserBusinessUnitEntityMapId] UNIQUEIDENTIFIER CONSTRAINT [DF_SystemUserBusinessUnitEntityMap_SystemUserBusinessUnitEntityMapId] DEFAULT (newid()) NOT NULL,
    [ObjectTypeCode]                    INT              NOT NULL,
    [SystemUserId]                      UNIQUEIDENTIFIER NOT NULL,
    [BusinessUnitId]                    UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                     ROWVERSION       NULL,
    CONSTRAINT [ndx_PrimaryKey_SystemUserBusinessUnitEntityMap] PRIMARY KEY NONCLUSTERED ([SystemUserBusinessUnitEntityMapId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [systemuserbusinessunitentitymap_businessunitid_businessunit] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [systemuserbusinessunitentitymap_systemuserid_systemuser] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION
);


GO
CREATE CLUSTERED INDEX [cndx_Cover]
    ON [dbo].[SystemUserBusinessUnitEntityMap]([SystemUserId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SystemUserBusinessUnitEntityMap]([SystemUserId] ASC, [BusinessUnitId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemUserBusinessUnitEntityMap]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

