CREATE TABLE [dbo].[CascadeDeleteEntitiesTopologicalOrder]
(
[OrderNumber] [int] NOT NULL IDENTITY(1, 1),
[ObjectTypeCode] [int] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CascadeDeleteEntitiesTopologicalOrder] ADD CONSTRAINT [PK_CascadeDeleteEntitiesTopologicalOrder] PRIMARY KEY CLUSTERED  ([OrderNumber]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CascadeDeleteEntitiesTopologicalOrder] ADD CONSTRAINT [ndx_CascadeDeleteEntitiesTopologicalOrder_ObjectTypeCode] UNIQUE NONCLUSTERED  ([ObjectTypeCode]) ON [PRIMARY]
GO
