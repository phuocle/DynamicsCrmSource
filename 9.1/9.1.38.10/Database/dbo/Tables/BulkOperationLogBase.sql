CREATE TABLE [dbo].[BulkOperationLogBase] (
    [BulkOperationLogId]         UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [ImportSequenceNumber]       INT              NULL,
    [OverriddenCreatedOn]        DATETIME         NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [Name]                       NVARCHAR (100)   NULL,
    [AdditionalInfo]             NVARCHAR (MAX)   NULL,
    [BulkOperationId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedObjectId]            UNIQUEIDENTIFIER NULL,
    [ErrorNumber]                INT              NULL,
    [RegardingObjectId]          UNIQUEIDENTIFIER NULL,
    [CreatedObjectIdTypeCode]    INT              NULL,
    [CreatedObjectIdYomiName]    NVARCHAR (4000)  NULL,
    [RegardingObjectIdTypeCode]  INT              NULL,
    [BulkOperationIdType]        INT              NULL,
    [BulkOperationIdYomiName]    NVARCHAR (4000)  NULL,
    [ErrorDescriptionFormatted]  NVARCHAR (MAX)   NULL,
    [ErrorNumberFormatted]       NVARCHAR (MAX)   NULL,
    [CampaignActivityId]         UNIQUEIDENTIFIER NULL,
    [CampaignActivityIdType]     INT              NULL,
    [CampaignActivityIdName]     NVARCHAR (4000)  NULL,
    [CampaignActivityIdYomiName] NVARCHAR (4000)  NULL,
    [AdditionalInfo_QF_prefix]   AS               (CONVERT([nvarchar](850),substring([AdditionalInfo],(1),(850)))),
    CONSTRAINT [cndx_PrimaryKey_BulkOperationLog] PRIMARY KEY CLUSTERED ([BulkOperationLogId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BulkOperation_logs] FOREIGN KEY ([BulkOperationId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[BulkOperationLogBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[BulkOperationLogBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_CreatedOpportunity_BulkOperationLogs]
    ON [dbo].[BulkOperationLogBase]([CreatedObjectId] ASC, [CreatedObjectIdTypeCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_SourceAccount_BulkOperationLogs]
    ON [dbo].[BulkOperationLogBase]([RegardingObjectId] ASC, [RegardingObjectIdTypeCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_BulkOperation_logs]
    ON [dbo].[BulkOperationLogBase]([BulkOperationId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_07E2D7D615814608B782078637C31E1D]
    ON [dbo].[BulkOperationLogBase]([BulkOperationLogId] ASC)
    INCLUDE([RegardingObjectId], [RegardingObjectIdTypeCode], [ErrorNumber], [ErrorNumberFormatted], [BulkOperationId], [BulkOperationIdYomiName], [BulkOperationIdType], [ErrorDescriptionFormatted], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_1294322479D644BBAC9D77D29CDD8A81]
    ON [dbo].[BulkOperationLogBase]([BulkOperationLogId] ASC)
    INCLUDE([AdditionalInfo]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[BulkOperationLogBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ErrorNumber]
    ON [dbo].[BulkOperationLogBase]([ErrorNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_1294322479D644BBAC9D77D29CDD8A81]
    ON [dbo].[BulkOperationLogBase]([BulkOperationLogId] ASC)
    INCLUDE([BulkOperationId], [BulkOperationIdYomiName], [BulkOperationIdType], [AdditionalInfo], [ErrorNumber], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_07E2D7D615814608B782078637C31E1D]
    ON [dbo].[BulkOperationLogBase]([BulkOperationLogId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_AdditionalInfo]
    ON [dbo].[BulkOperationLogBase]([AdditionalInfo_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

