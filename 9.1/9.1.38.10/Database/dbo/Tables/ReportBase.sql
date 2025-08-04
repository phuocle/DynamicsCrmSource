CREATE TABLE [dbo].[ReportBase] (
    [VersionNumber]             ROWVERSION       NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_ReportBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsCustomReport]            BIT              CONSTRAINT [DF_ReportBase_IsCustomReport] DEFAULT ((0)) NOT NULL,
    [QueryInfo]                 NVARCHAR (MAX)   NULL,
    [ModifiedOn]                DATETIME         NULL,
    [LanguageCode]              INT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [SignatureMinorVersion]     INT              NULL,
    [SignatureDate]             DATETIME         NULL,
    [DefaultFilter]             NVARCHAR (MAX)   NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ParentReportId]            UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    [BodyUrl]                   NVARCHAR (200)   NULL,
    [Name]                      NVARCHAR (425)   NOT NULL,
    [SignatureMajorVersion]     INT              NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_ReportBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ReportTypeCode]            INT              NULL,
    [ComponentState]            INT              CONSTRAINT [DF_ReportBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ReportNameOnSRS]           NVARCHAR (425)   NULL,
    [BodyText]                  NVARCHAR (MAX)   NULL,
    [ReportIdUnique]            UNIQUEIDENTIFIER CONSTRAINT [DF_ReportBase_ReportIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SignatureLcid]             INT              NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_ReportBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [CustomReportXml]           NVARCHAR (MAX)   NULL,
    [ScheduleXml]               NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_ReportBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [MimeType]                  NVARCHAR (256)   NULL,
    [ReportId]                  UNIQUEIDENTIFIER NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [IsPersonal]                BIT              CONSTRAINT [DF_ReportBase_IsPersonal] DEFAULT ((1)) NOT NULL,
    [CreatedInMajorVersion]     INT              CONSTRAINT [DF_ReportBase_CreatedInMajorVersion] DEFAULT ((0)) NULL,
    [FileSize]                  INT              NULL,
    [BodyBinary]                VARCHAR (MAX)    NULL,
    [OriginalBodyText]          NVARCHAR (MAX)   NULL,
    [SignatureId]               UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (256)   NULL,
    [FileName]                  NVARCHAR (255)   NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ReportBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [IsScheduledReport]         BIT              CONSTRAINT [DF_ReportBase_IsScheduledReport] DEFAULT ((0)) NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ReportBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RdlHash]                   INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Report] PRIMARY KEY CLUSTERED ([ReportId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ReportBase_ReportIdUnique] UNIQUE NONCLUSTERED ([ReportIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ReportBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ReportBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ReportBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_reports]
    ON [dbo].[ReportBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_report_parent_report]
    ON [dbo].[ReportBase]([ParentReportId] ASC)
    INCLUDE([ComponentState]) WHERE ([ParentReportId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ReportBase]([ReportId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_ownerid]
    ON [dbo].[ReportBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Description]
    ON [dbo].[ReportBase]([Description] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ReportBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_84740A75BF4F44A284E97993C45FCAAD]
    ON [dbo].[ReportBase]([Name] ASC, [ReportId] ASC)
    INCLUDE([ReportTypeCode], [FileName], [BodyUrl], [ModifiedOn], [Description], [LanguageCode], [IsCustomReport], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_84740A75BF4F44A284E97993C45FCAAD]
    ON [dbo].[ReportBase]([ReportId] ASC)
    INCLUDE([Name], [Description]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_84740A75BF4F44A284E97993C45FCAAD]
    ON [dbo].[ReportBase]([ReportId] ASC)
    INCLUDE([Name], [ReportTypeCode], [FileName], [BodyUrl], [ModifiedOn], [Description], [LanguageCode], [IsCustomReport], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

