CREATE TYPE [dbo].[CascadeDeleteBatchCollection] AS TABLE (
    [Index]               INT              NOT NULL,
    [ChildEntityId]       UNIQUEIDENTIFIER NOT NULL,
    [ChildObjectTypeCode] INT              NOT NULL);

