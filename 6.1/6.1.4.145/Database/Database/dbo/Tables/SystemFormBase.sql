CREATE TABLE [dbo].[SystemFormBase] (
    [FormXmlManaged]       NVARCHAR (MAX)   NULL,
    [Version]              INT              NULL,
    [FormId]               UNIQUEIDENTIFIER NOT NULL,
    [PublishedOn]          DATETIME         NULL,
    [FormXml]              NVARCHAR (MAX)   NOT NULL,
    [CanBeDeleted]         BIT              CONSTRAINT [DF_SystemFormBase_CanBeDeleted] DEFAULT ((1)) NOT NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [ComponentState]       INT              CONSTRAINT [DF_SystemFormBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_SystemFormBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_SystemFormBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_SystemFormBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [Description]          NVARCHAR (MAX)   NULL,
    [Name]                 NVARCHAR (100)   NOT NULL,
    [AncestorFormId]       UNIQUEIDENTIFIER NULL,
    [Type]                 INT              CONSTRAINT [DF_SystemFormBase_Type] DEFAULT ((0)) NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_SystemFormBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [ObjectTypeCode]       INT              NULL,
    [FormIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_SystemFormBase_FormIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsDefault]            BIT              CONSTRAINT [DF_SystemFormBase_IsDefault] DEFAULT ((0)) NOT NULL,
    [FormPresentation]     INT              CONSTRAINT [DF_SystemFormBase_FormPresentation] DEFAULT ((0)) NOT NULL,
    [FormActivationState]  INT              CONSTRAINT [DF_SystemFormBase_FormActivationState] DEFAULT ((1)) NOT NULL,
    [IntroducedVersion]    NVARCHAR (48)    NULL,
    [IsAIRMerged]          BIT              CONSTRAINT [DF_SystemFormBase_IsAIRMerged] DEFAULT ((0)) NULL,
    CONSTRAINT [cndx_PrimaryKey_SystemForm] PRIMARY KEY CLUSTERED ([FormId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SystemFormBase_FormIdUnique] UNIQUE NONCLUSTERED ([FormIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Type_ObjectType_Default]
    ON [dbo].[SystemFormBase]([Type] ASC, [ObjectTypeCode] ASC, [IsDefault] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemFormBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[SystemFormBase]([Name] ASC) WITH (FILLFACTOR = 80);

