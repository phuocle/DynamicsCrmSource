CREATE TABLE [dbo].[CascadeDeleteEntitiesTopologicalOrder] (
    [OrderNumber]    INT IDENTITY (1, 1) NOT NULL,
    [ObjectTypeCode] INT NOT NULL,
    CONSTRAINT [PK_CascadeDeleteEntitiesTopologicalOrder] PRIMARY KEY CLUSTERED ([OrderNumber] ASC),
    CONSTRAINT [ndx_CascadeDeleteEntitiesTopologicalOrder_ObjectTypeCode] UNIQUE NONCLUSTERED ([ObjectTypeCode] ASC)
);

