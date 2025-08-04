CREATE TABLE [dbo].[BulkDeleteFailureBase]
(
[ErrorDescription] [nvarchar] (512) COLLATE Latin1_General_CI_AI NULL,
[AsyncOperationId] [uniqueidentifier] NULL,
[BulkDeleteFailureId] [uniqueidentifier] NOT NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[ErrorNumber] [int] NULL,
[OrderedQueryIndex] [int] NULL CONSTRAINT [DF_BulkDeleteFailureBase_OrderedQueryIndex] DEFAULT ((0)),
[BulkDeleteOperationId] [uniqueidentifier] NULL,
[RegardingObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectTypeCode] [int] NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BulkDeleteFailureBase] ADD CONSTRAINT [cndx_PrimaryKey_BulkDeleteFailure] PRIMARY KEY CLUSTERED  ([BulkDeleteFailureId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BulkDeleteOperation_BulkDeleteFailure] ON [dbo].[BulkDeleteFailureBase] ([BulkDeleteOperationId]) WHERE ([BulkDeleteOperationId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BulkDeleteFailureBase] ADD CONSTRAINT [BulkDeleteOperation_BulkDeleteFailure] FOREIGN KEY ([BulkDeleteOperationId]) REFERENCES [dbo].[BulkDeleteOperationBase] ([BulkDeleteOperationId])
GO
