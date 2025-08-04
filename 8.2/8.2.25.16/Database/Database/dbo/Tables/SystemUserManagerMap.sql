CREATE TABLE [dbo].[SystemUserManagerMap] (
    [HierarchyLevel]         INT              CONSTRAINT [DF_SystemUserManagerMap_HierarchyLevel] DEFAULT ((0)) NOT NULL,
    [SystemUserManagerMapId] UNIQUEIDENTIFIER NOT NULL,
    [ParentSystemUserId]     UNIQUEIDENTIFIER NOT NULL,
    [SystemUserId]           UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]          ROWVERSION       NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_SystemUserManagerMap]
    ON [dbo].[SystemUserManagerMap]([ParentSystemUserId] ASC, [SystemUserId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemUserManagerMap]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

