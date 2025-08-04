CREATE TABLE [dbo].[ReportEntityBase]
(
[CreatedOn] [datetime] NULL,
[IsFilterable] [bit] NOT NULL CONSTRAINT [DF_ReportEntityBase_IsFilterable] DEFAULT ((0)),
[ImportSequenceNumber] [int] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ReportId] [uniqueidentifier] NOT NULL,
[ReportEntityId] [uniqueidentifier] NOT NULL,
[ObjectTypeCode] [int] NOT NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ReportEntityBase_OverwriteTime] DEFAULT ((0)),
[ReportEntityIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ReportEntityBase_ReportEntityIdUnique] DEFAULT (newid()),
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_ReportEntityBase_IsCustomizable] DEFAULT ((1)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ReportEntityBase_IsManaged] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ReportEntityBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ReportEntityBase_ComponentState] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ReportEntityBase] ADD CONSTRAINT [cndx_PrimaryKey_ReportEntity] PRIMARY KEY CLUSTERED  ([ReportEntityId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ReportEntityBase] ADD CONSTRAINT [UQ_ReportEntityBase_ReportEntityIdUnique] UNIQUE NONCLUSTERED  ([ReportEntityIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_report_reportentities] ON [dbo].[ReportEntityBase] ([ReportId]) INCLUDE ([ComponentState]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ReportEntityBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
