CREATE TABLE [dbo].[SystemFormBase] (
    [FormPresentation]     INT              CONSTRAINT [DF_SystemFormBase_FormPresentation] DEFAULT ((0)) NOT NULL,
    [FormActivationState]  INT              CONSTRAINT [DF_SystemFormBase_FormActivationState] DEFAULT ((1)) NOT NULL,
    [IsAIRMerged]          BIT              CONSTRAINT [DF_SystemFormBase_IsAIRMerged] DEFAULT ((0)) NULL,
    [FormXmlManaged]       NVARCHAR (MAX)   NULL,
    [FormId]               UNIQUEIDENTIFIER NOT NULL,
    [Version]              INT              NULL,
    [PublishedOn]          DATETIME         NULL,
    [FormIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_SystemFormBase_FormIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsDesktopEnabled]     BIT              CONSTRAINT [DF_SystemFormBase_IsDesktopEnabled] DEFAULT ((0)) NOT NULL,
    [ComponentState]       INT              CONSTRAINT [DF_SystemFormBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_SystemFormBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IntroducedVersion]    NVARCHAR (48)    NULL,
    [ObjectTypeCode]       INT              NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_SystemFormBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Description]          NVARCHAR (MAX)   NULL,
    [Name]                 NVARCHAR (100)   NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [IsTabletEnabled]      BIT              CONSTRAINT [DF_SystemFormBase_IsTabletEnabled] DEFAULT ((0)) NOT NULL,
    [AncestorFormId]       UNIQUEIDENTIFIER NULL,
    [Type]                 INT              CONSTRAINT [DF_SystemFormBase_Type] DEFAULT ((0)) NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_SystemFormBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CanBeDeleted]         BIT              CONSTRAINT [DF_SystemFormBase_CanBeDeleted] DEFAULT ((1)) NOT NULL,
    [FormXml]              NVARCHAR (MAX)   NOT NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_SystemFormBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [UniqueName]           NVARCHAR (200)   NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [IsDefault]            BIT              CONSTRAINT [DF_SystemFormBase_IsDefault] DEFAULT ((0)) NOT NULL,
    [FormJson]             NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_SystemForm] PRIMARY KEY CLUSTERED ([FormId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [UQ_SystemFormBase_FormIdUnique] UNIQUE NONCLUSTERED ([FormIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SystemFormBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SystemFormBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemFormBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[SystemFormBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Type_ObjectType_Default]
    ON [dbo].[SystemFormBase]([Type] ASC, [ObjectTypeCode] ASC, [IsDefault] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueName]
    ON [dbo].[SystemFormBase]([UniqueName] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WHERE ([Type]=(8)) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SystemFormBase]([FormId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_3F04153A44514E668AF706B4BA720649]
    ON [dbo].[SystemFormBase]([FormId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_3F04153A44514E668AF706B4BA720649]
    ON [dbo].[SystemFormBase]([FormId] ASC)
    INCLUDE([Name], [Type], [FormPresentation], [IsManaged], [IsCustomizable], [Description], [FormActivationState], [IntroducedVersion], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

