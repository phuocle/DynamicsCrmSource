CREATE TABLE [dbo].[Rollup_Bootstrap_Target_306845ef446a42e58df811c31bafaded]
(
[Id] [int] NOT NULL IDENTITY(1, 1),
[EntityId] [uniqueidentifier] NOT NULL,
[ParentEntityId] [uniqueidentifier] NULL,
[OutputValue] [decimal] (38, 10) NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Rollup_Bootstrap_Target_306845ef446a42e58df811c31bafaded] ADD CONSTRAINT [PK__Rollup_B__3214EC07367E687D] PRIMARY KEY CLUSTERED  ([Id]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Target] ON [dbo].[Rollup_Bootstrap_Target_306845ef446a42e58df811c31bafaded] ([ParentEntityId], [Id]) INCLUDE ([OutputValue]) ON [PRIMARY]
GO
