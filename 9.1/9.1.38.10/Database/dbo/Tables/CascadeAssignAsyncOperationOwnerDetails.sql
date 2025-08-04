CREATE TABLE [dbo].[CascadeAssignAsyncOperationOwnerDetails] (
    [OperationId]    UNIQUEIDENTIFIER NOT NULL,
    [ObjectTypeCode] INT              NOT NULL,
    [EntityId]       UNIQUEIDENTIFIER NOT NULL,
    [TableType]      NCHAR (1)        NOT NULL,
    [OwnerId]        UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]      DATETIME         CONSTRAINT [DF_CAAOOD_createdOn] DEFAULT (getutcdate()) NOT NULL,
    [ModifiedOn]     DATETIME         CONSTRAINT [DF_CAAOOD_modifiedOn] DEFAULT (getutcdate()) NOT NULL
);


GO
ALTER TABLE [dbo].[CascadeAssignAsyncOperationOwnerDetails] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [cndx_operationId]
    ON [dbo].[CascadeAssignAsyncOperationOwnerDetails]([OperationId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_operationId_objecttypecode_entityid_tabletype]
    ON [dbo].[CascadeAssignAsyncOperationOwnerDetails]([OperationId] ASC, [ObjectTypeCode] ASC, [EntityId] ASC, [TableType] ASC)
    INCLUDE([OwnerId]);

