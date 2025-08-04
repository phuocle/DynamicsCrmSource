CREATE TABLE [dbo].[ReportBase] (
    [DefaultFilter]             NVARCHAR (MAX)   NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (425)   NOT NULL,
    [IsCustomReport]            BIT              CONSTRAINT [DF_ReportBase_IsCustomReport] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [SignatureMajorVersion]     INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [BodyText]                  NVARCHAR (MAX)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [IsPersonal]                BIT              CONSTRAINT [DF_ReportBase_IsPersonal] DEFAULT ((1)) NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [SignatureLcid]             INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [FileSize]                  INT              NULL,
    [CustomReportXml]           NVARCHAR (MAX)   NULL,
    [Description]               NVARCHAR (256)   NULL,
    [ScheduleXml]               NVARCHAR (MAX)   NULL,
    [SignatureDate]             DATETIME         NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [FileName]                  NVARCHAR (255)   NULL,
    [ParentReportId]            UNIQUEIDENTIFIER NULL,
    [BodyBinary]                VARCHAR (MAX)    NULL,
    [QueryInfo]                 NVARCHAR (MAX)   NULL,
    [LanguageCode]              INT              NULL,
    [SignatureId]               UNIQUEIDENTIFIER NULL,
    [BodyUrl]                   NVARCHAR (200)   NULL,
    [MimeType]                  NVARCHAR (256)   NULL,
    [SignatureMinorVersion]     INT              NULL,
    [ReportId]                  UNIQUEIDENTIFIER NOT NULL,
    [IsScheduledReport]         BIT              CONSTRAINT [DF_ReportBase_IsScheduledReport] DEFAULT ((0)) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ReportTypeCode]            INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_ReportBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [ReportIdUnique]            UNIQUEIDENTIFIER CONSTRAINT [DF_ReportBase_ReportIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OriginalBodyText]          NVARCHAR (MAX)   NULL,
    [ComponentState]            INT              CONSTRAINT [DF_ReportBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ReportNameOnSRS]           NVARCHAR (425)   NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_ReportBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_ReportBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_ReportBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ReportBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ReportBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_Report] PRIMARY KEY CLUSTERED ([ReportId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ReportBase_ReportIdUnique] UNIQUE NONCLUSTERED ([ReportIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ReportBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_reports]
    ON [dbo].[ReportBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_report_parent_report]
    ON [dbo].[ReportBase]([ParentReportId] ASC)
    INCLUDE([ComponentState]) WHERE ([ParentReportId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ReportBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ReportBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Description]
    ON [dbo].[ReportBase]([Description] ASC) WITH (FILLFACTOR = 80);

