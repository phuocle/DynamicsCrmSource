CREATE TABLE [dbo].[PluginAssemblyBase] (
    [SourceHash]             NVARCHAR (256)   NULL,
    [CustomizationLevel]     INT              CONSTRAINT [DF_PluginAssemblyBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [Content]                VARCHAR (MAX)    NULL,
    [OrganizationId]         UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]             DATETIME         NULL,
    [Path]                   NVARCHAR (256)   NULL,
    [Name]                   NVARCHAR (256)   NOT NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [Version]                NVARCHAR (48)    NOT NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [CreatedOn]              DATETIME         NULL,
    [PluginAssemblyId]       UNIQUEIDENTIFIER NOT NULL,
    [Culture]                NVARCHAR (32)    NOT NULL,
    [SourceType]             INT              NOT NULL,
    [PluginAssemblyIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_PluginAssemblyBase_PluginAssemblyIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [PublicKeyToken]         NVARCHAR (32)    NOT NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_PluginAssemblyBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsolationMode]          INT              CONSTRAINT [DF_PluginAssemblyBase_IsolationMode] DEFAULT ((1)) NOT NULL,
    [Minor]                  INT              CONSTRAINT [DF_PluginAssemblyBase_Minor] DEFAULT ((0)) NOT NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_PluginAssemblyBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Major]                  INT              CONSTRAINT [DF_PluginAssemblyBase_Major] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_PluginAssemblyBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ComponentState]         INT              CONSTRAINT [DF_PluginAssemblyBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [Description]            NVARCHAR (256)   NULL,
    [IsHidden]               BIT              CONSTRAINT [DF_PluginAssemblyBase_IsHidden] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]      NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_pluginassembly] PRIMARY KEY CLUSTERED ([PluginAssemblyId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_PluginAssemblyBase_AssemblyMetadata] UNIQUE NONCLUSTERED ([Name] ASC, [Major] ASC, [Minor] ASC, [Culture] ASC, [PublicKeyToken] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_PluginAssemblyBase_PluginAssemblyIdUnique] UNIQUE NONCLUSTERED ([PluginAssemblyIdUnique] ASC)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[PluginAssemblyBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PluginAssemblyBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

