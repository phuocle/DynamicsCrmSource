CREATE TABLE [dbo].[CascadeDeleteAsyncOperationParentEntityIds] (
    [OperationId]    UNIQUEIDENTIFIER NOT NULL,
    [ParentEntityId] UNIQUEIDENTIFIER NOT NULL,
    [Index]          INT              NOT NULL,
    CONSTRAINT [cndx_CDAOPE_ParentEntityId] UNIQUE NONCLUSTERED ([ParentEntityId] ASC)
);


GO
ALTER TABLE [dbo].[CascadeDeleteAsyncOperationParentEntityIds] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [cndx_CDAOPE_operationId]
    ON [dbo].[CascadeDeleteAsyncOperationParentEntityIds]([OperationId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_OperationIdIndex]
    ON [dbo].[CascadeDeleteAsyncOperationParentEntityIds]([OperationId] ASC, [Index] ASC);

