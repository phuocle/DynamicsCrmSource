CREATE TABLE [dbo].[WorkflowWaitSubscriptionBase] (
    [IsModified]                 BIT              NOT NULL,
    [AsyncOperationId]           UNIQUEIDENTIFIER NOT NULL,
    [IsDeleted]                  BIT              NULL,
    [EntityId]                   UNIQUEIDENTIFIER NOT NULL,
    [WorkflowWaitSubscriptionId] UNIQUEIDENTIFIER NOT NULL,
    [WaitOnAttributeList]        NVARCHAR (MAX)   NULL,
    [Data]                       NVARCHAR (MAX)   NULL,
    [EntityName]                 NVARCHAR (128)   NOT NULL,
    [ModifiedOn]                 DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_WorkflowWaitSubscription] PRIMARY KEY CLUSTERED ([WorkflowWaitSubscriptionId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[WorkflowWaitSubscriptionBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[WorkflowWaitSubscriptionBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_CascadeRelationship_AsyncOperation_WorkflowWaitSubscription]
    ON [dbo].[WorkflowWaitSubscriptionBase]([AsyncOperationId] ASC)
    INCLUDE([IsModified]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Modified]
    ON [dbo].[WorkflowWaitSubscriptionBase]([EntityId] ASC, [EntityName] ASC, [AsyncOperationId] ASC)
    INCLUDE([IsDeleted], [WaitOnAttributeList], [IsModified]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_IsDeleted]
    ON [dbo].[WorkflowWaitSubscriptionBase]([IsDeleted] ASC)
    INCLUDE([AsyncOperationId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_IsModified]
    ON [dbo].[WorkflowWaitSubscriptionBase]([IsModified] ASC)
    INCLUDE([AsyncOperationId], [IsDeleted]) WHERE ([IsModified]=(1)) WITH (FILLFACTOR = 80);

