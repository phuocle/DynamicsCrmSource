CREATE TABLE [dbo].[PluginAssemblyBase] (
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_PluginAssemblyBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]             DATETIME         NULL,
    [AuthType]               INT              CONSTRAINT [DF_PluginAssemblyBase_AuthType] DEFAULT ((0)) NULL,
    [OrganizationId]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]              DATETIME         NULL,
    [SourceHash]             NVARCHAR (256)   NULL,
    [Content]                VARCHAR (MAX)    NULL,
    [IsHidden]               BIT              CONSTRAINT [DF_PluginAssemblyBase_IsHidden] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [IsolationMode]          INT              CONSTRAINT [DF_PluginAssemblyBase_IsolationMode] DEFAULT ((1)) NOT NULL,
    [Url]                    NVARCHAR (2000)  NULL,
    [Culture]                NVARCHAR (32)    NOT NULL,
    [Version]                NVARCHAR (48)    NOT NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [Minor]                  INT              CONSTRAINT [DF_PluginAssemblyBase_Minor] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]      NVARCHAR (48)    NULL,
    [PublicKeyToken]         NVARCHAR (32)    NOT NULL,
    [PluginAssemblyId]       UNIQUEIDENTIFIER NOT NULL,
    [SourceType]             INT              NOT NULL,
    [IsCustomizable]         BIT              CONSTRAINT [DF_PluginAssemblyBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [Name]                   NVARCHAR (256)   NOT NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [Path]                   NVARCHAR (256)   NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_PluginAssemblyBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_PluginAssemblyBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ComponentState]         INT              CONSTRAINT [DF_PluginAssemblyBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [UserName]               NVARCHAR (256)   NULL,
    [CustomizationLevel]     INT              CONSTRAINT [DF_PluginAssemblyBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [Major]                  INT              CONSTRAINT [DF_PluginAssemblyBase_Major] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [PluginAssemblyIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_PluginAssemblyBase_PluginAssemblyIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Description]            NVARCHAR (256)   NULL,
    [Password]               VARBINARY (MAX)  NULL,
    CONSTRAINT [cndx_PrimaryKey_pluginassembly] PRIMARY KEY CLUSTERED ([PluginAssemblyId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_PluginAssemblyBase_AssemblyMetadata] UNIQUE NONCLUSTERED ([Name] ASC, [Major] ASC, [Minor] ASC, [Culture] ASC, [PublicKeyToken] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_PluginAssemblyBase_PluginAssemblyIdUnique] UNIQUE NONCLUSTERED ([PluginAssemblyIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[PluginAssemblyBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[PluginAssemblyBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PluginAssemblyBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[PluginAssemblyBase]([PluginAssemblyId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_463DB9B396E24C66B1F3DEDA4E2EE282]
    ON [dbo].[PluginAssemblyBase]([PluginAssemblyId] ASC)
    INCLUDE([Name], [Version], [Culture], [PublicKeyToken], [IsolationMode], [IsHidden], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_463DB9B396E24C66B1F3DEDA4E2EE282]
    ON [dbo].[PluginAssemblyBase]([Name] ASC, [PluginAssemblyId] ASC)
    INCLUDE([Version], [Culture], [PublicKeyToken], [IsolationMode], [IsHidden], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_463DB9B396E24C66B1F3DEDA4E2EE282]
    ON [dbo].[PluginAssemblyBase]([PluginAssemblyId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

