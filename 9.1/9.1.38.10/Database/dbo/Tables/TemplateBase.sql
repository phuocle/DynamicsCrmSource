CREATE TABLE [dbo].[TemplateBase] (
    [ReplyRate]              INT              NULL,
    [GenerationTypeCode]     INT              CONSTRAINT [DF_TemplateBase_GenerationTypeCode] DEFAULT ((0)) NULL,
    [OpenRate]               INT              NULL,
    [OwningBusinessUnit]     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]             DATETIME         NULL,
    [SubjectPresentationXml] NVARCHAR (MAX)   NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_TemplateBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [TemplateTypeCode]       INT              CONSTRAINT [DF_TemplateBase_TemplateTypeCode] DEFAULT ((8)) NOT NULL,
    [ComponentState]         INT              CONSTRAINT [DF_TemplateBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IsPersonal]             BIT              CONSTRAINT [DF_TemplateBase_IsPersonal] DEFAULT ((0)) NULL,
    [ImportSequenceNumber]   INT              NULL,
    [UsedCount]              INT              NULL,
    [TemplateId]             UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_TemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ReplyCount]             INT              NULL,
    [IsCustomizable]         BIT              CONSTRAINT [DF_TemplateBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [Description]            NVARCHAR (MAX)   NULL,
    [OpenCount]              INT              NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [Body]                   NVARCHAR (MAX)   NULL,
    [Title]                  NVARCHAR (200)   NULL,
    [LanguageCode]           INT              NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [IsRecommended]          BIT              CONSTRAINT [DF_TemplateBase_IsRecommended] DEFAULT ((0)) NULL,
    [PresentationXml]        NVARCHAR (MAX)   NULL,
    [IntroducedVersion]      NVARCHAR (48)    NULL,
    [MimeType]               NVARCHAR (256)   NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [TemplateIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_TemplateBase_TemplateIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Subject]                NVARCHAR (MAX)   NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_TemplateBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedOn]              DATETIME         NULL,
    [OwnerId]                UNIQUEIDENTIFIER CONSTRAINT [DF_TemplateBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwnerIdType]            INT              CONSTRAINT [DF_TemplateBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [SafeHtml]               NVARCHAR (MAX)   NULL,
    [SubjectSafeHtml]        NVARCHAR (MAX)   NULL,
    [EntityImageId]          UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Template] PRIMARY KEY CLUSTERED ([TemplateId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_TemplateBase_TemplateIdUnique] UNIQUE NONCLUSTERED ([TemplateIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[TemplateBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[TemplateBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[TemplateBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TemplateBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_templates]
    ON [dbo].[TemplateBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Title]
    ON [dbo].[TemplateBase]([Title] ASC, [LanguageCode] ASC, [TemplateTypeCode] ASC, [IsPersonal] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[TemplateBase]([TemplateId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D7EAB33D8E2E44DF8487C823F5903068]
    ON [dbo].[TemplateBase]([Title] ASC, [TemplateId] ASC)
    INCLUDE([TemplateTypeCode], [IsPersonal], [LanguageCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D7EAB33D8E2E44DF8487C823F5903068]
    ON [dbo].[TemplateBase]([TemplateId] ASC)
    INCLUDE([Title], [TemplateTypeCode], [IsPersonal], [LanguageCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D7EAB33D8E2E44DF8487C823F5903068]
    ON [dbo].[TemplateBase]([TemplateId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

