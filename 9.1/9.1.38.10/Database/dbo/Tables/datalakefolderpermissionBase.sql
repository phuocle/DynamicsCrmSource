CREATE TABLE [dbo].[datalakefolderpermissionBase] (
    [datalakefolderpermissionId]          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                           DATETIME         NULL,
    [CreatedBy]                           UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                          DATETIME         NULL,
    [ModifiedBy]                          UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [OwnerId]                             UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                         INT              CONSTRAINT [DF_datalakefolderpermissionBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                  UNIQUEIDENTIFIER NULL,
    [statecode]                           INT              NOT NULL,
    [statuscode]                          INT              NULL,
    [VersionNumber]                       ROWVERSION       NULL,
    [ImportSequenceNumber]                INT              NULL,
    [OverriddenCreatedOn]                 DATETIME         NULL,
    [TimeZoneRuleVersionNumber]           INT              NULL,
    [UTCConversionTimeZoneCode]           INT              NULL,
    [name]                                NVARCHAR (100)   NULL,
    [OverwriteTime]                       DATETIME         CONSTRAINT [DF_datalakefolderpermissionBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                          UNIQUEIDENTIFIER CONSTRAINT [DF_datalakefolderpermissionBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]                UNIQUEIDENTIFIER NULL,
    [ComponentState]                      INT              CONSTRAINT [DF_datalakefolderpermissionBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]                   UNIQUEIDENTIFIER CONSTRAINT [DF_datalakefolderpermissionBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                           BIT              CONSTRAINT [DF_datalakefolderpermissionBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                      BIT              CONSTRAINT [DF_datalakefolderpermissionBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [appid]                               UNIQUEIDENTIFIER NULL,
    [canexecute]                          BIT              NULL,
    [canread]                             BIT              NULL,
    [canwrite]                            BIT              NULL,
    [datalakefolderpermission_UniqueName] NVARCHAR (128)   NULL,
    [folderid]                            UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_datalakefolderpermission] PRIMARY KEY CLUSTERED ([datalakefolderpermissionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_datalakefolderpermission] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [datalakefolder_datalakefolderpermission] FOREIGN KEY ([folderid]) REFERENCES [dbo].[datalakefolderBaseIds] ([datalakefolderId]),
    CONSTRAINT [owner_datalakefolderpermission] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [UQ_datalakefolderpermissionBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[datalakefolderpermissionBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_datalakefolderpermissions]
    ON [dbo].[datalakefolderpermissionBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[datalakefolderpermissionBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[datalakefolderpermissionBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[datalakefolderpermissionBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[datalakefolderpermissionBase]([datalakefolderpermissionId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_datalakefolder_datalakefolderpermission]
    ON [dbo].[datalakefolderpermissionBase]([folderid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_datalakefolderpermission_uniquename]
    ON [dbo].[datalakefolderpermissionBase]([ComponentState] ASC, [datalakefolderpermission_UniqueName] ASC, [OverwriteTime] ASC)
    INCLUDE([datalakefolderpermissionId]) WHERE ([ComponentState] IS NOT NULL AND [datalakefolderpermission_UniqueName] IS NOT NULL AND [OverwriteTime] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_appfoldertenant]
    ON [dbo].[datalakefolderpermissionBase]([appid] ASC, [ComponentState] ASC, [folderid] ASC, [OverwriteTime] ASC)
    INCLUDE([datalakefolderpermissionId]) WHERE ([appid] IS NOT NULL AND [ComponentState] IS NOT NULL AND [folderid] IS NOT NULL AND [OverwriteTime] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_7C369404F13241DDBD395B615370F7C3]
    ON [dbo].[datalakefolderpermissionBase]([name] ASC, [datalakefolderpermissionId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_7C369404F13241DDBD395B615370F7C3]
    ON [dbo].[datalakefolderpermissionBase]([datalakefolderpermissionId] ASC)
    INCLUDE([name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_7C369404F13241DDBD395B615370F7C3]
    ON [dbo].[datalakefolderpermissionBase]([datalakefolderpermissionId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

