CREATE TABLE [dbo].[Rollup_Bootstrap_306845ef446a42e58df811c31bafaded]
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
ALTER TABLE [dbo].[Rollup_Bootstrap_306845ef446a42e58df811c31bafaded] ADD CONSTRAINT [PK__Rollup_B__3214EC07A1595865] PRIMARY KEY CLUSTERED  ([Id]) ON [PRIMARY]
GO
