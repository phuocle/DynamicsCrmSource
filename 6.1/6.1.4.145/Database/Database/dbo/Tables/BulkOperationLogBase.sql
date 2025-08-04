CREATE TABLE [dbo].[BulkOperationLogBase] (
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [ErrorNumber]               INT              NULL,
    [CreatedObjectId]           UNIQUEIDENTIFIER NULL,
    [BulkOperationLogId]        UNIQUEIDENTIFIER NOT NULL,
    [BulkOperationId]           UNIQUEIDENTIFIER NOT NULL,
    [AdditionalInfo]            NVARCHAR (MAX)   NULL,
    [RegardingObjectIdTypeCode] INT              NULL,
    [CreatedObjectIdTypeCode]   INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_BulkOperationLog] PRIMARY KEY CLUSTERED ([BulkOperationLogId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BulkOperation_logs] FOREIGN KEY ([BulkOperationId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[BulkOperationLogBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_SourceAccount_BulkOperationLogs]
    ON [dbo].[BulkOperationLogBase]([RegardingObjectId] ASC, [RegardingObjectIdTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_BulkOperation_logs]
    ON [dbo].[BulkOperationLogBase]([BulkOperationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_CreatedOpportunity_BulkOperationLogs]
    ON [dbo].[BulkOperationLogBase]([CreatedObjectId] ASC, [CreatedObjectIdTypeCode] ASC) WITH (FILLFACTOR = 80);

