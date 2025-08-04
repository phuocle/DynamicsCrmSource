CREATE TABLE [dbo].[MailMergeTemplateBase] (
    [UTCConversionTimeZoneCode] INT              NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ParameterXml]              NVARCHAR (MAX)   NULL,
    [LanguageCode]              INT              NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [Description]               NVARCHAR (256)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [MimeType]                  NVARCHAR (256)   NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (425)   NOT NULL,
    [Body]                      NVARCHAR (MAX)   NULL,
    [StatusCode]                INT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_MailMergeTemplateBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [MailMergeType]             INT              NULL,
    [MailMergeTemplateIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_MailMergeTemplateBase_MailMergeTemplateIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [TemplateTypeCode]          INT              NOT NULL,
    [StateCode]                 INT              NOT NULL,
    [FileName]                  NVARCHAR (255)   NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_MailMergeTemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [DefaultFilter]             NVARCHAR (MAX)   NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_MailMergeTemplateBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_MailMergeTemplateBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [DocumentFormat]            INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [MailMergeTemplateId]       UNIQUEIDENTIFIER NOT NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_MailMergeTemplateBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [FileSize]                  INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ComponentState]            INT              CONSTRAINT [DF_MailMergeTemplateBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [IsPersonal]                BIT              CONSTRAINT [DF_MailMergeTemplateBase_IsPersonal] DEFAULT ((1)) NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_MailMergeTemplateBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_MailMergeTemplate] PRIMARY KEY CLUSTERED ([MailMergeTemplateId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MailMergeTemplateBase_MailMergeTemplateIdUnique] UNIQUE NONCLUSTERED ([MailMergeTemplateIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[MailMergeTemplateBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[MailMergeTemplateBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[MailMergeTemplateBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[MailMergeTemplateBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[MailMergeTemplateBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_mailmergetemplates]
    ON [dbo].[MailMergeTemplateBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[MailMergeTemplateBase]([MailMergeTemplateId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[MailMergeTemplateBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5C36C46B2F8248CCB868909C918EC9F7]
    ON [dbo].[MailMergeTemplateBase]([MailMergeTemplateId] ASC)
    INCLUDE([Name], [IsPersonal], [TemplateTypeCode], [FileName], [FileSize], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_5C36C46B2F8248CCB868909C918EC9F7]
    ON [dbo].[MailMergeTemplateBase]([Name] ASC, [MailMergeTemplateId] ASC)
    INCLUDE([IsPersonal], [TemplateTypeCode], [FileName], [FileSize], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_5C36C46B2F8248CCB868909C918EC9F7]
    ON [dbo].[MailMergeTemplateBase]([MailMergeTemplateId] ASC)
    INCLUDE([Name], [FileName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_FileName]
    ON [dbo].[MailMergeTemplateBase]([FileName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

