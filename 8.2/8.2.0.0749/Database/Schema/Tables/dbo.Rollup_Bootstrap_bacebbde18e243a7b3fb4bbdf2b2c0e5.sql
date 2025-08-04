CREATE TABLE [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5]
(
[Id] [int] NOT NULL IDENTITY(1, 1),
[EntityId] [uniqueidentifier] NOT NULL,
[ParentEntityId] [uniqueidentifier] NULL,
[Depth] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[OutputValue] [decimal] (38, 10) NULL,
[CountValue] [int] NULL,
[Status] [int] NULL,
[CalculatedDateTime] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5] ADD CONSTRAINT [PK__Rollup_B__3214EC078A538A28] PRIMARY KEY CLUSTERED  ([Id]) ON [PRIMARY]
GO
