CREATE TABLE [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd]
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
ALTER TABLE [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] ADD CONSTRAINT [PK__Rollup_B__3214EC07B756E295] PRIMARY KEY CLUSTERED  ([Id]) ON [PRIMARY]
GO
