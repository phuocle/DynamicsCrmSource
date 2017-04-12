CREATE TABLE [dbo].[ReportLinkBase]
(
[CreatedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ReportLinkId] [uniqueidentifier] NOT NULL,
[LinkTypeCode] [int] NOT NULL CONSTRAINT [DF_ReportLinkBase_LinkTypeCode] DEFAULT ((3)),
[LinkedReportName] [nvarchar] (255) COLLATE Latin1_General_CI_AI NOT NULL,
[ImportSequenceNumber] [int] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[ReportId] [uniqueidentifier] NOT NULL,
[LinkedReportId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ReportLinkIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ReportLinkBase_ReportLinkIdUnique] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ReportLinkBase] ADD CONSTRAINT [cndx_PrimaryKey_ReportLink] PRIMARY KEY CLUSTERED  ([ReportLinkId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_report_reportlink_sub] ON [dbo].[ReportLinkBase] ([LinkedReportId]) WHERE ([LinkedReportId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_report_reportlink] ON [dbo].[ReportLinkBase] ([ReportId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ReportLinkBase] ADD CONSTRAINT [UQ_ReportLinkBase_ReportLinkIdUnique] UNIQUE NONCLUSTERED  ([ReportLinkIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ReportLinkBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
