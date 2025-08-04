CREATE TABLE [dbo].[OrganizationUIBase] (
    [FormId]               UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [FormXml]              NVARCHAR (MAX)   NULL,
    [FieldXml]             NVARCHAR (MAX)   NULL,
    [ObjectTypeCode]       INT              NULL,
    [PreviewXml]           NVARCHAR (MAX)   NULL,
    [PreviewColumnsetXml]  NVARCHAR (MAX)   NULL,
    [Version]              INT              NULL,
    [OutlookShortcutIcon]  NVARCHAR (MAX)   NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [GridIcon]             NVARCHAR (MAX)   NULL,
    [FormIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_OrganizationUIBase_FormIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [LargeEntityIcon]      NVARCHAR (MAX)   NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_OrganizationUIBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_OrganizationUIBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]       INT              CONSTRAINT [DF_OrganizationUIBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_OrganizationUIBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_OrganizationUIBase_IsCustomizable] DEFAULT ((1)) NOT NULL
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[OrganizationUIBase]', @OptionName = N'text in row', @OptionValue = N'7000';

