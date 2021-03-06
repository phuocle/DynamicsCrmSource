USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[Rollup_Bootstrap_Orphans_e10cdd445c7f4ac8a5d1b2118926f2bd]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rollup_Bootstrap_Orphans_e10cdd445c7f4ac8a5d1b2118926f2bd](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EntityId] [uniqueidentifier] NOT NULL,
	[ParentEntityId] [uniqueidentifier] NULL,
	[Status] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[OutputValue] [decimal](38, 10) NULL,
	[CountValue] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_EntityId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EntityId] ON [dbo].[Rollup_Bootstrap_Orphans_e10cdd445c7f4ac8a5d1b2118926f2bd]
(
	[EntityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ParentEntityId_Source]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Source] ON [dbo].[Rollup_Bootstrap_Orphans_e10cdd445c7f4ac8a5d1b2118926f2bd]
(
	[ParentEntityId] ASC,
	[Id] ASC
)
INCLUDE ( 	[EntityId],
	[Status],
	[ExchangeRate],
	[OutputValue]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
