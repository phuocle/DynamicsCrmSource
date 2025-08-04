CREATE TABLE [dbo].[SystemUserManagerMap] (
    [ParentSystemUserId]     UNIQUEIDENTIFIER NOT NULL,
    [SystemUserManagerMapId] UNIQUEIDENTIFIER NOT NULL,
    [HierarchyLevel]         INT              CONSTRAINT [DF_SystemUserManagerMap_HierarchyLevel] DEFAULT ((0)) NOT NULL,
    [SystemUserId]           UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]          ROWVERSION       NULL
);


GO
ALTER TABLE [dbo].[SystemUserManagerMap] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_SystemUserManagerMap]
    ON [dbo].[SystemUserManagerMap]([ParentSystemUserId] ASC, [SystemUserId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemUserManagerMap]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

