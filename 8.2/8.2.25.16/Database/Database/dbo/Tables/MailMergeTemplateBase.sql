CREATE TABLE [dbo].[MailMergeTemplateBase] (
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Body]                      NVARCHAR (MAX)   NULL,
    [TemplateTypeCode]          INT              NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (256)   NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [FileSize]                  INT              NULL,
    [ParameterXml]              NVARCHAR (MAX)   NULL,
    [MailMergeType]             INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [DefaultFilter]             NVARCHAR (MAX)   NULL,
    [MimeType]                  NVARCHAR (256)   NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [StateCode]                 INT              NOT NULL,
    [FileName]                  NVARCHAR (255)   NULL,
    [LanguageCode]              INT              NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [DocumentFormat]            INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [Name]                      NVARCHAR (425)   NOT NULL,
    [MailMergeTemplateId]       UNIQUEIDENTIFIER NOT NULL,
    [IsPersonal]                BIT              CONSTRAINT [DF_MailMergeTemplateBase_IsPersonal] DEFAULT ((1)) NOT NULL,
    [StatusCode]                INT              NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_MailMergeTemplateBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_MailMergeTemplateBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [MailMergeTemplateIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_MailMergeTemplateBase_MailMergeTemplateIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_MailMergeTemplateBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_MailMergeTemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_MailMergeTemplateBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ComponentState]            INT              CONSTRAINT [DF_MailMergeTemplateBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_MailMergeTemplateBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_MailMergeTemplate] PRIMARY KEY CLUSTERED ([MailMergeTemplateId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MailMergeTemplateBase_MailMergeTemplateIdUnique] UNIQUE NONCLUSTERED ([MailMergeTemplateIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[MailMergeTemplateBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[MailMergeTemplateBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[MailMergeTemplateBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_mailmergetemplates]
    ON [dbo].[MailMergeTemplateBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[MailMergeTemplateBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_FileName]
    ON [dbo].[MailMergeTemplateBase]([FileName] ASC) WITH (FILLFACTOR = 80);

