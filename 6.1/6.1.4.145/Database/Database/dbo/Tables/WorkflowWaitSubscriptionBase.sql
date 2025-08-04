CREATE TABLE [dbo].[WorkflowWaitSubscriptionBase] (
    [EntityId]                   UNIQUEIDENTIFIER NOT NULL,
    [WorkflowWaitSubscriptionId] UNIQUEIDENTIFIER NOT NULL,
    [AsyncOperationId]           UNIQUEIDENTIFIER NOT NULL,
    [Data]                       NVARCHAR (MAX)   NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [EntityName]                 NVARCHAR (64)    NOT NULL,
    [IsModified]                 BIT              NOT NULL,
    [IsDeleted]                  BIT              NULL,
    CONSTRAINT [cndx_PrimaryKey_WorkflowWaitSubscription] PRIMARY KEY CLUSTERED ([WorkflowWaitSubscriptionId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_CascadeRelationship_AsyncOperation_WorkflowWaitSubscription]
    ON [dbo].[WorkflowWaitSubscriptionBase]([AsyncOperationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Modified]
    ON [dbo].[WorkflowWaitSubscriptionBase]([EntityId] ASC, [EntityName] ASC, [AsyncOperationId] ASC)
    INCLUDE([IsDeleted]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_IsModified]
    ON [dbo].[WorkflowWaitSubscriptionBase]([IsModified] ASC)
    INCLUDE([AsyncOperationId], [IsDeleted]) WHERE ([IsModified]=(1)) WITH (FILLFACTOR = 80);

