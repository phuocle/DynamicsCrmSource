CREATE TABLE [dbo].[Rollup_Bootstrap_Orphans_bacebbde18e243a7b3fb4bbdf2b2c0e5]
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
ALTER TABLE [dbo].[Rollup_Bootstrap_Orphans_bacebbde18e243a7b3fb4bbdf2b2c0e5] ADD CONSTRAINT [PK__Rollup_B__3214EC07CABA18D7] PRIMARY KEY CLUSTERED  ([Id]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityId] ON [dbo].[Rollup_Bootstrap_Orphans_bacebbde18e243a7b3fb4bbdf2b2c0e5] ([EntityId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Source] ON [dbo].[Rollup_Bootstrap_Orphans_bacebbde18e243a7b3fb4bbdf2b2c0e5] ([ParentEntityId], [Id]) INCLUDE ([EntityId], [ExchangeRate], [OutputValue], [Status]) ON [PRIMARY]
GO
