CREATE TABLE [dbo].[CascadeAssignAsyncOperationDetails] (
    [OperationId]           UNIQUEIDENTIFIER NOT NULL,
    [ChildEntityId]         UNIQUEIDENTIFIER NOT NULL,
    [ChildObjectTypeCode]   INT              NOT NULL,
    [ObjectOwnerId]         UNIQUEIDENTIFIER NULL,
    [ParentEntityId]        UNIQUEIDENTIFIER NOT NULL,
    [ParentObjectTypeCode]  INT              NOT NULL,
    [IsCascading]           BIT              NOT NULL,
    [Level]                 INT              NOT NULL,
    [AssignComplete]        BIT              CONSTRAINT [DF_CAAOD_assignComplete] DEFAULT ((0)) NOT NULL,
    [RetryCount]            INT              CONSTRAINT [DF_CAAOD_retryCount] DEFAULT ((0)) NOT NULL,
    [HasRecordOwnerChanged] BIT              CONSTRAINT [DF_CAAOD_hasObjectOwnerChanged] DEFAULT ((0)) NOT NULL,
    [DurationInMs]          BIGINT           NULL,
    [CreatedOn]             DATETIME         CONSTRAINT [DF_CAAOD_createdOn] DEFAULT (getutcdate()) NOT NULL,
    [ModifiedOn]            DATETIME         CONSTRAINT [DF_CAAOD_modifiedOn] DEFAULT (getutcdate()) NOT NULL,
    [ValidRecordContent]    BIT              CONSTRAINT [DF_CAAOD_validRecordContent] DEFAULT ((1)) NOT NULL,
    [ExceptionMessage]      NVARCHAR (MAX)   NULL,
    [WasAssigned]           BIT              CONSTRAINT [DF_CAAOD_wasAssigned] DEFAULT ((0)) NOT NULL
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CascadeAssignAsyncOperationDetails]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CascadeAssignAsyncOperationDetails] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [cndx_operationId]
    ON [dbo].[CascadeAssignAsyncOperationDetails]([OperationId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_ChildEntityIdOperationIdChildObjectTypeCode]
    ON [dbo].[CascadeAssignAsyncOperationDetails]([ChildEntityId] ASC, [OperationId] ASC, [ChildObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_AssignCompleteOperationIdLevel]
    ON [dbo].[CascadeAssignAsyncOperationDetails]([AssignComplete] ASC, [OperationId] ASC, [Level] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_HasRecordOwnerChangedOperationId]
    ON [dbo].[CascadeAssignAsyncOperationDetails]([HasRecordOwnerChanged] ASC, [OperationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ValidRecordContentOperationId]
    ON [dbo].[CascadeAssignAsyncOperationDetails]([ValidRecordContent] ASC, [OperationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_OperationIdRetryCount]
    ON [dbo].[CascadeAssignAsyncOperationDetails]([OperationId] ASC, [RetryCount] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_WasAssignedAssignCompleteOperationId]
    ON [dbo].[CascadeAssignAsyncOperationDetails]([WasAssigned] ASC, [AssignComplete] ASC, [OperationId] ASC) WHERE ([WasAssigned]=(1) AND [AssignComplete]=(1)) WITH (FILLFACTOR = 80);

