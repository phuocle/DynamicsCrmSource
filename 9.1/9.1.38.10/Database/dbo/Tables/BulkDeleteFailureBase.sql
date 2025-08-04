CREATE TABLE [dbo].[BulkDeleteFailureBase] (
    [BulkDeleteOperationId]           UNIQUEIDENTIFIER NULL,
    [AsyncOperationId]                UNIQUEIDENTIFIER NULL,
    [ErrorNumber]                     INT              NULL,
    [OrderedQueryIndex]               INT              CONSTRAINT [DF_BulkDeleteFailureBase_OrderedQueryIndex] DEFAULT ((0)) NULL,
    [BulkDeleteFailureId]             UNIQUEIDENTIFIER NOT NULL,
    [ErrorDescription]                NVARCHAR (512)   NULL,
    [RegardingObjectId]               UNIQUEIDENTIFIER NULL,
    [RegardingObjectIdName]           NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]         INT              NULL,
    [RegardingObjectIdYomiName]       NVARCHAR (4000)  NULL,
    [RegardingObjectIdName_QF_prefix] AS               (CONVERT([nvarchar](850),substring([RegardingObjectIdName],(1),(850)))),
    CONSTRAINT [cndx_PrimaryKey_BulkDeleteFailure] PRIMARY KEY CLUSTERED ([BulkDeleteFailureId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BulkDeleteOperation_BulkDeleteFailure] FOREIGN KEY ([BulkDeleteOperationId]) REFERENCES [dbo].[BulkDeleteOperationBase] ([BulkDeleteOperationId])
);


GO
ALTER TABLE [dbo].[BulkDeleteFailureBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectId]
    ON [dbo].[BulkDeleteFailureBase]([RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BulkDeleteOperation_BulkDeleteFailure]
    ON [dbo].[BulkDeleteFailureBase]([BulkDeleteOperationId] ASC) WHERE ([BulkDeleteOperationId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_3BC56DBC0A8D4ED997943AB56A11DD25]
    ON [dbo].[BulkDeleteFailureBase]([BulkDeleteFailureId] ASC)
    INCLUDE([RegardingObjectIdName], [ErrorDescription]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ErrorNumber]
    ON [dbo].[BulkDeleteFailureBase]([ErrorNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_3BC56DBC0A8D4ED997943AB56A11DD25]
    ON [dbo].[BulkDeleteFailureBase]([BulkDeleteFailureId] ASC)
    INCLUDE([RegardingObjectId], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [RegardingObjectIdName], [ErrorDescription], [ErrorNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ErrorDescription]
    ON [dbo].[BulkDeleteFailureBase]([ErrorDescription] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_RegardingObjectIdName]
    ON [dbo].[BulkDeleteFailureBase]([RegardingObjectIdName_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

