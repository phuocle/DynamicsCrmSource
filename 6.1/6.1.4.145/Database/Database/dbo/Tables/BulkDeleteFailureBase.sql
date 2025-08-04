CREATE TABLE [dbo].[BulkDeleteFailureBase] (
    [ErrorDescription]          NVARCHAR (512)   NULL,
    [AsyncOperationId]          UNIQUEIDENTIFIER NULL,
    [BulkDeleteFailureId]       UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [ErrorNumber]               INT              NULL,
    [OrderedQueryIndex]         INT              CONSTRAINT [DF_BulkDeleteFailureBase_OrderedQueryIndex] DEFAULT ((0)) NULL,
    [BulkDeleteOperationId]     UNIQUEIDENTIFIER NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_BulkDeleteFailure] PRIMARY KEY CLUSTERED ([BulkDeleteFailureId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BulkDeleteOperation_BulkDeleteFailure] FOREIGN KEY ([BulkDeleteOperationId]) REFERENCES [dbo].[BulkDeleteOperationBase] ([BulkDeleteOperationId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BulkDeleteOperation_BulkDeleteFailure]
    ON [dbo].[BulkDeleteFailureBase]([BulkDeleteOperationId] ASC) WHERE ([BulkDeleteOperationId] IS NOT NULL) WITH (FILLFACTOR = 80);

