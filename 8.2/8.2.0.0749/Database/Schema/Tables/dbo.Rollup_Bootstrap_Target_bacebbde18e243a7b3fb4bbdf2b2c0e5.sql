CREATE TABLE [dbo].[Rollup_Bootstrap_Target_bacebbde18e243a7b3fb4bbdf2b2c0e5]
(
[Id] [int] NOT NULL IDENTITY(1, 1),
[EntityId] [uniqueidentifier] NOT NULL,
[ParentEntityId] [uniqueidentifier] NULL,
[OutputValue] [decimal] (38, 10) NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Rollup_Bootstrap_Target_bacebbde18e243a7b3fb4bbdf2b2c0e5] ADD CONSTRAINT [PK__Rollup_B__3214EC0791C48E5D] PRIMARY KEY CLUSTERED  ([Id]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Target] ON [dbo].[Rollup_Bootstrap_Target_bacebbde18e243a7b3fb4bbdf2b2c0e5] ([ParentEntityId], [Id]) INCLUDE ([OutputValue]) ON [PRIMARY]
GO
