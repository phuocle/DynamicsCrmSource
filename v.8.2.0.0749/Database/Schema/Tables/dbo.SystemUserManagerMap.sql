CREATE TABLE [dbo].[SystemUserManagerMap]
(
[HierarchyLevel] [int] NOT NULL CONSTRAINT [DF_SystemUserManagerMap_HierarchyLevel] DEFAULT ((0)),
[SystemUserManagerMapId] [uniqueidentifier] NOT NULL,
[ParentSystemUserId] [uniqueidentifier] NOT NULL,
[SystemUserId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [cndx_SystemUserManagerMap] ON [dbo].[SystemUserManagerMap] ([ParentSystemUserId], [SystemUserId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemUserManagerMap] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
