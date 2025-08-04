CREATE TABLE [dbo].[TemplateBase] (
    [TemplateId]             UNIQUEIDENTIFIER NOT NULL,
    [Subject]                NVARCHAR (MAX)   NULL,
    [OwningBusinessUnit]     UNIQUEIDENTIFIER NULL,
    [IsPersonal]             BIT              CONSTRAINT [Set_To_Zero149] DEFAULT ((0)) NULL,
    [MimeType]               NVARCHAR (256)   NULL,
    [TemplateTypeCode]       INT              CONSTRAINT [DF_TemplateBase_TemplateTypeCode] DEFAULT ((8)) NOT NULL,
    [Body]                   NVARCHAR (MAX)   NULL,
    [Title]                  NVARCHAR (200)   NULL,
    [Description]            NVARCHAR (MAX)   NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [PresentationXml]        NVARCHAR (MAX)   NULL,
    [CreatedOn]              DATETIME         NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedOn]             DATETIME         NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [SubjectPresentationXml] NVARCHAR (MAX)   NULL,
    [GenerationTypeCode]     INT              CONSTRAINT [DF_TemplateBase_GenerationTypeCode] DEFAULT ((0)) NULL,
    [LanguageCode]           INT              NULL,
    [ImportSequenceNumber]   INT              NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_TemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [ComponentState]         INT              CONSTRAINT [DF_TemplateBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [TemplateIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_TemplateBase_TemplateIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_TemplateBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [IsCustomizable]         BIT              CONSTRAINT [DF_TemplateBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_TemplateBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [OwnerId]                UNIQUEIDENTIFIER CONSTRAINT [DF_TemplateBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwnerIdType]            INT              CONSTRAINT [DF_TemplateBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [IntroducedVersion]      NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_Template] PRIMARY KEY CLUSTERED ([TemplateId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_TemplateBase_TemplateIdUnique] UNIQUE NONCLUSTERED ([TemplateIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[TemplateBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_templates]
    ON [dbo].[TemplateBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TemplateBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[TemplateBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Title]
    ON [dbo].[TemplateBase]([Title] ASC, [LanguageCode] ASC, [TemplateTypeCode] ASC, [IsPersonal] ASC) WITH (FILLFACTOR = 80);

