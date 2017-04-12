CREATE TABLE [dbo].[Rollup_Bootstrap_Target_e10cdd445c7f4ac8a5d1b2118926f2bd]
(
[Id] [int] NOT NULL IDENTITY(1, 1),
[EntityId] [uniqueidentifier] NOT NULL,
[ParentEntityId] [uniqueidentifier] NULL,
[OutputValue] [decimal] (38, 10) NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Rollup_Bootstrap_Target_e10cdd445c7f4ac8a5d1b2118926f2bd] ADD CONSTRAINT [PK__Rollup_B__3214EC07E02855ED] PRIMARY KEY CLUSTERED  ([Id]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Target] ON [dbo].[Rollup_Bootstrap_Target_e10cdd445c7f4ac8a5d1b2118926f2bd] ([ParentEntityId], [Id]) INCLUDE ([OutputValue]) ON [PRIMARY]
GO