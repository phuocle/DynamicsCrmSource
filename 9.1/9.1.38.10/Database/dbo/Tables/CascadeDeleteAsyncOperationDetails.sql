CREATE TABLE [dbo].[CascadeDeleteAsyncOperationDetails] (
    [OperationId]         UNIQUEIDENTIFIER NOT NULL,
    [ChildEntityId]       UNIQUEIDENTIFIER NOT NULL,
    [ChildObjectTypeCode] INT              NOT NULL,
    [ActionType]          INT              NOT NULL,
    [ColumnNumber]        INT              NOT NULL,
    [ComponentState]      INT              NOT NULL,
    [DeleteComplete]      BIT              CONSTRAINT [DF_CDAOD_deleteComplete] DEFAULT ((0)) NOT NULL,
    [RetryCount]          INT              CONSTRAINT [DF_CDAOD_retryCount] DEFAULT ((0)) NOT NULL,
    [DurationInMs]        BIGINT           NULL,
    [CreatedOn]           DATETIME         CONSTRAINT [DF_CDAOD_createdOn] DEFAULT (getutcdate()) NOT NULL,
    [ModifiedOn]          DATETIME         CONSTRAINT [DF_CDAOD_modifiedOn] DEFAULT (getutcdate()) NOT NULL,
    [ValidRecordContent]  BIT              CONSTRAINT [DF_CDAOD_validRecordContent] DEFAULT ((1)) NOT NULL,
    [ExceptionMessage]    NVARCHAR (MAX)   NULL,
    [Index]               INT              NOT NULL
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CascadeDeleteAsyncOperationDetails]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CascadeDeleteAsyncOperationDetails] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [cndx_operationId]
    ON [dbo].[CascadeDeleteAsyncOperationDetails]([OperationId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_DeleteCompleteOperationIdIndex]
    ON [dbo].[CascadeDeleteAsyncOperationDetails]([DeleteComplete] ASC, [OperationId] ASC, [Index] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ChildEntityIdOperationIdIndex]
    ON [dbo].[CascadeDeleteAsyncOperationDetails]([ChildEntityId] ASC, [OperationId] ASC, [Index] ASC) WITH (FILLFACTOR = 80);

