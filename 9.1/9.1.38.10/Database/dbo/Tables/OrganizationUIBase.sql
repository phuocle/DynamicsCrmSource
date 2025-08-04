CREATE TABLE [dbo].[OrganizationUIBase] (
    [OutlookShortcutIcon]  NVARCHAR (MAX)   NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_OrganizationUIBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [PreviewXml]           NVARCHAR (MAX)   NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_OrganizationUIBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [FormId]               UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_OrganizationUIBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [LargeEntityIcon]      NVARCHAR (MAX)   NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_OrganizationUIBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [GridIcon]             NVARCHAR (MAX)   NULL,
    [Version]              INT              NULL,
    [ComponentState]       INT              CONSTRAINT [DF_OrganizationUIBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [FieldXml]             NVARCHAR (MAX)   NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [ObjectTypeCode]       INT              NULL,
    [PreviewColumnsetXml]  NVARCHAR (MAX)   NULL,
    [FormIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_OrganizationUIBase_FormIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [FormXml]              NVARCHAR (MAX)   NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[OrganizationUIBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[OrganizationUIBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[OrganizationUIBase]([FormId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

