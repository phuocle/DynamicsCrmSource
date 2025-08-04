CREATE TABLE [dbo].[Rollup_Bootstrap_Orphans_306845ef446a42e58df811c31bafaded]
(
[Id] [int] NOT NULL IDENTITY(1, 1),
[EntityId] [uniqueidentifier] NOT NULL,
[ParentEntityId] [uniqueidentifier] NULL,
[Status] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[OutputValue] [decimal] (38, 10) NULL,
[CountValue] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Rollup_Bootstrap_Orphans_306845ef446a42e58df811c31bafaded] ADD CONSTRAINT [PK__Rollup_B__3214EC0762ACF778] PRIMARY KEY CLUSTERED  ([Id]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityId] ON [dbo].[Rollup_Bootstrap_Orphans_306845ef446a42e58df811c31bafaded] ([EntityId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Source] ON [dbo].[Rollup_Bootstrap_Orphans_306845ef446a42e58df811c31bafaded] ([ParentEntityId], [Id]) INCLUDE ([EntityId], [ExchangeRate], [OutputValue], [Status]) ON [PRIMARY]
GO
