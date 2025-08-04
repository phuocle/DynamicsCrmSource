CREATE TABLE [dbo].[datalakeworkspacepermissionBase] (
    [datalakeworkspacepermissionId]          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                              DATETIME         NULL,
    [CreatedBy]                              UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                             DATETIME         NULL,
    [ModifiedBy]                             UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                      UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                     UNIQUEIDENTIFIER NULL,
    [OrganizationId]                         UNIQUEIDENTIFIER NULL,
    [statecode]                              INT              NOT NULL,
    [statuscode]                             INT              NULL,
    [VersionNumber]                          ROWVERSION       NULL,
    [ImportSequenceNumber]                   INT              NULL,
    [OverriddenCreatedOn]                    DATETIME         NULL,
    [TimeZoneRuleVersionNumber]              INT              NULL,
    [UTCConversionTimeZoneCode]              INT              NULL,
    [name]                                   NVARCHAR (100)   NULL,
    [OverwriteTime]                          DATETIME         CONSTRAINT [DF_datalakeworkspacepermissionBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                             UNIQUEIDENTIFIER CONSTRAINT [DF_datalakeworkspacepermissionBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]                   UNIQUEIDENTIFIER NULL,
    [ComponentState]                         INT              CONSTRAINT [DF_datalakeworkspacepermissionBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]                      UNIQUEIDENTIFIER CONSTRAINT [DF_datalakeworkspacepermissionBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                              BIT              CONSTRAINT [DF_datalakeworkspacepermissionBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                         BIT              CONSTRAINT [DF_datalakeworkspacepermissionBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [appid]                                  UNIQUEIDENTIFIER NULL,
    [canexecute]                             BIT              NULL,
    [canread]                                BIT              NULL,
    [canwrite]                               BIT              NULL,
    [datalakeworkspacepermission_UniqueName] NVARCHAR (128)   NULL,
    [tenantid]                               UNIQUEIDENTIFIER NULL,
    [whitelistedappid]                       UNIQUEIDENTIFIER NULL,
    [workspaceid]                            UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_datalakeworkspacepermission] PRIMARY KEY CLUSTERED ([datalakeworkspacepermissionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [datalakeworkspace_workspacepermission] FOREIGN KEY ([workspaceid]) REFERENCES [dbo].[datalakeworkspaceBaseIds] ([datalakeworkspaceId]),
    CONSTRAINT [UQ_datalakeworkspacepermissionBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[datalakeworkspacepermissionBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[datalakeworkspacepermissionBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[datalakeworkspacepermissionBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[datalakeworkspacepermissionBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[datalakeworkspacepermissionBase]([datalakeworkspacepermissionId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_datalakeworkspace_workspacepermission]
    ON [dbo].[datalakeworkspacepermissionBase]([workspaceid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_datalakeworkspacepermission_uniquename]
    ON [dbo].[datalakeworkspacepermissionBase]([ComponentState] ASC, [datalakeworkspacepermission_UniqueName] ASC, [OverwriteTime] ASC)
    INCLUDE([datalakeworkspacepermissionId]) WHERE ([ComponentState] IS NOT NULL AND [datalakeworkspacepermission_UniqueName] IS NOT NULL AND [OverwriteTime] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_appworkspacetenant]
    ON [dbo].[datalakeworkspacepermissionBase]([appid] ASC, [ComponentState] ASC, [OverwriteTime] ASC, [tenantid] ASC, [workspaceid] ASC)
    INCLUDE([datalakeworkspacepermissionId]) WHERE ([appid] IS NOT NULL AND [ComponentState] IS NOT NULL AND [OverwriteTime] IS NOT NULL AND [tenantid] IS NOT NULL AND [workspaceid] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_3D4EECC4EA2540229128BC921BB4EE03]
    ON [dbo].[datalakeworkspacepermissionBase]([datalakeworkspacepermissionId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_3D4EECC4EA2540229128BC921BB4EE03]
    ON [dbo].[datalakeworkspacepermissionBase]([name] ASC, [datalakeworkspacepermissionId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_3D4EECC4EA2540229128BC921BB4EE03]
    ON [dbo].[datalakeworkspacepermissionBase]([datalakeworkspacepermissionId] ASC)
    INCLUDE([name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

