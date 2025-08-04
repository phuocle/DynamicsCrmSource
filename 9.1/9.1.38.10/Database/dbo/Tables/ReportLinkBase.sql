CREATE TABLE [dbo].[ReportLinkBase] (
    [VersionNumber]        ROWVERSION       NULL,
    [LinkedReportId]       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [CreatedOn]            DATETIME         NULL,
    [LinkedReportName]     NVARCHAR (255)   NOT NULL,
    [ImportSequenceNumber] INT              NULL,
    [ModifiedOn]           DATETIME         NULL,
    [ReportId]             UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [ReportLinkId]         UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [LinkTypeCode]         INT              CONSTRAINT [DF_ReportLinkBase_LinkTypeCode] DEFAULT ((3)) NOT NULL,
    [ReportLinkIdUnique]   UNIQUEIDENTIFIER CONSTRAINT [DF_ReportLinkBase_ReportLinkIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ReportLink] PRIMARY KEY CLUSTERED ([ReportLinkId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ReportLinkBase_ReportLinkIdUnique] UNIQUE NONCLUSTERED ([ReportLinkIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ReportLinkBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ReportLinkBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_report_reportlink]
    ON [dbo].[ReportLinkBase]([ReportId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_report_reportlink_sub]
    ON [dbo].[ReportLinkBase]([LinkedReportId] ASC) WHERE ([LinkedReportId] IS NOT NULL) WITH (FILLFACTOR = 80);

