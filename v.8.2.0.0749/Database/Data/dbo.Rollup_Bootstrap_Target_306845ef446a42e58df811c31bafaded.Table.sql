USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[Rollup_Bootstrap_Target_306845ef446a42e58df811c31bafaded]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rollup_Bootstrap_Target_306845ef446a42e58df811c31bafaded](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EntityId] [uniqueidentifier] NOT NULL,
	[ParentEntityId] [uniqueidentifier] NULL,
	[OutputValue] [decimal](38, 10) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_ParentEntityId_Target]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Target] ON [dbo].[Rollup_Bootstrap_Target_306845ef446a42e58df811c31bafaded]
(
	[ParentEntityId] ASC,
	[Id] ASC
)
INCLUDE ( 	[OutputValue]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
