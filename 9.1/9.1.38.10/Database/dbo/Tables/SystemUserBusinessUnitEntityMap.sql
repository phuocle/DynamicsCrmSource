CREATE TABLE [dbo].[SystemUserBusinessUnitEntityMap] (
    [ObjectTypeCode]                    INT              NOT NULL,
    [BusinessUnitId]                    UNIQUEIDENTIFIER NOT NULL,
    [ReadPrivilegeDepth]                INT              NULL,
    [SystemUserBusinessUnitEntityMapId] UNIQUEIDENTIFIER CONSTRAINT [DF_SystemUserBusinessUnitEntityMap_SystemUserBusinessUnitEntityMapId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]                     ROWVERSION       NULL,
    [SystemUserId]                      UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_SystemUserBusinessUnitEntityMap] PRIMARY KEY NONCLUSTERED ([SystemUserBusinessUnitEntityMapId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [systemuserbusinessunitentitymap_businessunitid_businessunit] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [systemuserbusinessunitentitymap_systemuserid_systemuser] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
);


GO
ALTER TABLE [dbo].[SystemUserBusinessUnitEntityMap] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [cndx_Cover]
    ON [dbo].[SystemUserBusinessUnitEntityMap]([SystemUserId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SystemUserBusinessUnitEntityMap]([SystemUserId] ASC, [BusinessUnitId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemUserBusinessUnitEntityMap]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_objecttypecodebusinessunitid]
    ON [dbo].[SystemUserBusinessUnitEntityMap]([BusinessUnitId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

