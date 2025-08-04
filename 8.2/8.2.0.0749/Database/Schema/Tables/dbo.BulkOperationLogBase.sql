CREATE TABLE [dbo].[BulkOperationLogBase]
(
[RegardingObjectId] [uniqueidentifier] NULL,
[ErrorNumber] [int] NULL,
[CreatedObjectId] [uniqueidentifier] NULL,
[BulkOperationLogId] [uniqueidentifier] NOT NULL,
[BulkOperationId] [uniqueidentifier] NOT NULL,
[AdditionalInfo] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectIdTypeCode] [int] NULL,
[CreatedObjectIdTypeCode] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[BulkOperationLogBase] ADD CONSTRAINT [cndx_PrimaryKey_BulkOperationLog] PRIMARY KEY CLUSTERED  ([BulkOperationLogId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_BulkOperation_logs] ON [dbo].[BulkOperationLogBase] ([BulkOperationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_CreatedOpportunity_BulkOperationLogs] ON [dbo].[BulkOperationLogBase] ([CreatedObjectId], [CreatedObjectIdTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_SourceAccount_BulkOperationLogs] ON [dbo].[BulkOperationLogBase] ([RegardingObjectId], [RegardingObjectIdTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BulkOperationLogBase] ADD CONSTRAINT [BulkOperation_logs] FOREIGN KEY ([BulkOperationId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
