CREATE TABLE [dbo].[MailMergeTemplateBase]
(
[ModifiedBy] [uniqueidentifier] NULL,
[Body] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TemplateTypeCode] [int] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[FileSize] [int] NULL,
[ParameterXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[MailMergeType] [int] NULL,
[CreatedOn] [datetime] NULL,
[DefaultFilter] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[MimeType] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[StateCode] [int] NOT NULL,
[FileName] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[LanguageCode] [int] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[DocumentFormat] [int] NULL,
[VersionNumber] [timestamp] NULL,
[Name] [nvarchar] (425) COLLATE Latin1_General_CI_AI NOT NULL,
[MailMergeTemplateId] [uniqueidentifier] NOT NULL,
[IsPersonal] [bit] NOT NULL CONSTRAINT [DF_MailMergeTemplateBase_IsPersonal] DEFAULT ((1)),
[StatusCode] [int] NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_MailMergeTemplateBase_IsCustomizable] DEFAULT ((1)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_MailMergeTemplateBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[SupportingSolutionId] [uniqueidentifier] NULL,
[MailMergeTemplateIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_MailMergeTemplateBase_MailMergeTemplateIdUnique] DEFAULT (newid()),
[TransactionCurrencyId] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_MailMergeTemplateBase_OverwriteTime] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_MailMergeTemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_MailMergeTemplateBase_IsManaged] DEFAULT ((0)),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_MailMergeTemplateBase_ComponentState] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_MailMergeTemplateBase_OwnerIdType] DEFAULT ((8)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[MailMergeTemplateBase] ADD CONSTRAINT [cndx_PrimaryKey_MailMergeTemplate] PRIMARY KEY CLUSTERED  ([MailMergeTemplateId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_FileName] ON [dbo].[MailMergeTemplateBase] ([FileName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MailMergeTemplateBase] ADD CONSTRAINT [UQ_MailMergeTemplateBase_MailMergeTemplateIdUnique] UNIQUE NONCLUSTERED  ([MailMergeTemplateIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[MailMergeTemplateBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[MailMergeTemplateBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_mailmergetemplates] ON [dbo].[MailMergeTemplateBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[MailMergeTemplateBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[MailMergeTemplateBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
