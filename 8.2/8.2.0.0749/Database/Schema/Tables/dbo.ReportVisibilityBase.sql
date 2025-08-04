CREATE TABLE [dbo].[ReportVisibilityBase]
(
[ReportId] [uniqueidentifier] NOT NULL,
[ReportVisibilityId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[VisibilityCode] [int] NOT NULL CONSTRAINT [DF_ReportVisibilityBase_VisibilityCode] DEFAULT ((1)),
[ModifiedBy] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ReportVisibilityBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_ReportVisibilityBase_IsCustomizable] DEFAULT ((1)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ReportVisibilityBase_IsManaged] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ReportVisibilityBase_OverwriteTime] DEFAULT ((0)),
[ReportVisibilityIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ReportVisibilityBase_ReportVisibilityIdUnique] DEFAULT (newid()),
[SupportingSolutionId] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ReportVisibilityBase_ComponentState] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ReportVisibilityBase] ADD CONSTRAINT [cndx_PrimaryKey_ReportVisibility] PRIMARY KEY CLUSTERED  ([ReportVisibilityId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_report_reportvisibility] ON [dbo].[ReportVisibilityBase] ([ReportId]) INCLUDE ([ComponentState]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ReportVisibilityBase] ADD CONSTRAINT [UQ_ReportVisibilityBase_ReportVisibilityIdUnique] UNIQUE NONCLUSTERED  ([ReportVisibilityIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ReportVisibilityBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
