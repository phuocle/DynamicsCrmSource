CREATE TABLE [dbo].[ReportBase]
(
[DefaultFilter] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[Name] [nvarchar] (425) COLLATE Latin1_General_CI_AI NOT NULL,
[IsCustomReport] [bit] NOT NULL CONSTRAINT [DF_ReportBase_IsCustomReport] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[SignatureMajorVersion] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[BodyText] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[IsPersonal] [bit] NOT NULL CONSTRAINT [DF_ReportBase_IsPersonal] DEFAULT ((1)),
[CreatedOn] [datetime] NULL,
[SignatureLcid] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[FileSize] [int] NULL,
[CustomReportXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[ScheduleXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SignatureDate] [datetime] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[FileName] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[ParentReportId] [uniqueidentifier] NULL,
[BodyBinary] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[QueryInfo] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[LanguageCode] [int] NULL,
[SignatureId] [uniqueidentifier] NULL,
[BodyUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[MimeType] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[SignatureMinorVersion] [int] NULL,
[ReportId] [uniqueidentifier] NOT NULL,
[IsScheduledReport] [bit] NOT NULL CONSTRAINT [DF_ReportBase_IsScheduledReport] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[ReportTypeCode] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ReportBase_OverwriteTime] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[ReportIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ReportBase_ReportIdUnique] DEFAULT (newid()),
[OriginalBodyText] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ReportBase_ComponentState] DEFAULT ((0)),
[ReportNameOnSRS] [nvarchar] (425) COLLATE Latin1_General_CI_AI NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_ReportBase_IsCustomizable] DEFAULT ((1)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ReportBase_IsManaged] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ReportBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ReportBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ReportBase_OwnerIdType] DEFAULT ((8)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[CreatedInMajorVersion] [int] NULL CONSTRAINT [DF_ReportBase_CreatedInMajorVersion] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ReportBase] ADD CONSTRAINT [cndx_PrimaryKey_Report] PRIMARY KEY CLUSTERED  ([ReportId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Description] ON [dbo].[ReportBase] ([Description]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[ReportBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_reports] ON [dbo].[ReportBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_report_parent_report] ON [dbo].[ReportBase] ([ParentReportId]) INCLUDE ([ComponentState]) WHERE ([ParentReportId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ReportBase] ADD CONSTRAINT [UQ_ReportBase_ReportIdUnique] UNIQUE NONCLUSTERED  ([ReportIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ReportBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
