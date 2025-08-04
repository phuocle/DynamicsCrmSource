CREATE TABLE [dbo].[ReportLinkBase] (
    [CreatedOn]            DATETIME         NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [ReportLinkId]         UNIQUEIDENTIFIER NOT NULL,
    [LinkTypeCode]         INT              CONSTRAINT [DF_ReportLinkBase_LinkTypeCode] DEFAULT ((3)) NOT NULL,
    [LinkedReportName]     NVARCHAR (255)   NOT NULL,
    [ImportSequenceNumber] INT              NULL,
    [ModifiedOn]           DATETIME         NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [ReportId]             UNIQUEIDENTIFIER NOT NULL,
    [LinkedReportId]       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [ReportLinkIdUnique]   UNIQUEIDENTIFIER CONSTRAINT [DF_ReportLinkBase_ReportLinkIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ReportLink] PRIMARY KEY CLUSTERED ([ReportLinkId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ReportLinkBase_ReportLinkIdUnique] UNIQUE NONCLUSTERED ([ReportLinkIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_report_reportlink]
    ON [dbo].[ReportLinkBase]([ReportId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ReportLinkBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_report_reportlink_sub]
    ON [dbo].[ReportLinkBase]([LinkedReportId] ASC) WHERE ([LinkedReportId] IS NOT NULL) WITH (FILLFACTOR = 80);

