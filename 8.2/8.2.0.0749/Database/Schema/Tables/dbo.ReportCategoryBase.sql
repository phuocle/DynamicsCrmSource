CREATE TABLE [dbo].[ReportCategoryBase]
(
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[CategoryCode] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ReportCategoryId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[ReportId] [uniqueidentifier] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ReportCategoryBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ReportCategoryBase_OverwriteTime] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[ReportCategoryIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ReportCategoryBase_ReportCategoryIdUnique] DEFAULT (newid()),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ReportCategoryBase_ComponentState] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ReportCategoryBase_IsManaged] DEFAULT ((0)),
[ExchangeRate] [decimal] (23, 10) NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_ReportCategoryBase_IsCustomizable] DEFAULT ((1)),
[TransactionCurrencyId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ReportCategoryBase] ADD CONSTRAINT [cndx_PrimaryKey_ReportCategory] PRIMARY KEY CLUSTERED  ([ReportCategoryId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ReportCategoryBase] ADD CONSTRAINT [UQ_ReportCategoryBase_ReportCategoryIdUnique] UNIQUE NONCLUSTERED  ([ReportCategoryIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_report_reportcategories] ON [dbo].[ReportCategoryBase] ([ReportId]) INCLUDE ([ComponentState]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ReportCategoryBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
