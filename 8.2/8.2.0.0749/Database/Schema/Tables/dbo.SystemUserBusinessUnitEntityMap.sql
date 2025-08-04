CREATE TABLE [dbo].[SystemUserBusinessUnitEntityMap]
(
[ReadPrivilegeDepth] [int] NULL,
[SystemUserBusinessUnitEntityMapId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SystemUserBusinessUnitEntityMap_SystemUserBusinessUnitEntityMapId] DEFAULT (newid()),
[ObjectTypeCode] [int] NOT NULL,
[SystemUserId] [uniqueidentifier] NOT NULL,
[BusinessUnitId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserBusinessUnitEntityMap] ADD CONSTRAINT [ndx_PrimaryKey_SystemUserBusinessUnitEntityMap] PRIMARY KEY NONCLUSTERED  ([SystemUserBusinessUnitEntityMapId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SystemUserBusinessUnitEntityMap] ([SystemUserId], [BusinessUnitId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE CLUSTERED INDEX [cndx_Cover] ON [dbo].[SystemUserBusinessUnitEntityMap] ([SystemUserId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemUserBusinessUnitEntityMap] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserBusinessUnitEntityMap] ADD CONSTRAINT [systemuserbusinessunitentitymap_businessunitid_businessunit] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SystemUserBusinessUnitEntityMap] ADD CONSTRAINT [systemuserbusinessunitentitymap_systemuserid_systemuser] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
