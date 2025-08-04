CREATE TABLE [dbo].[AppConfigBase] (
    [AppConfigId]          UNIQUEIDENTIFIER CONSTRAINT [DF_AppConfigBase_AppConfigId] DEFAULT (newid()) NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_AppConfigBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]       INT              CONSTRAINT [DF_AppConfigBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [AppModuleId]          UNIQUEIDENTIFIER NOT NULL,
    [AppConfigImportXml]   NVARCHAR (MAX)   NULL,
    [StateCode]            INT              NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [StatusCode]           INT              NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [ModifiedOn]           DATETIME         NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_AppConfigBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ImportSequenceNumber] INT              NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_AppConfigBase_IsManaged] DEFAULT ((0)) NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [CreatedOn]            DATETIME         NULL,
    [AppConfigIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_AppConfigBase_AppConfigIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [IntroducedVersion]    NVARCHAR (100)   NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_AppConfig] PRIMARY KEY CLUSTERED ([AppConfigId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[AppConfigBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[AppConfigBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[AppConfigBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[AppConfigBase]([AppConfigId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

