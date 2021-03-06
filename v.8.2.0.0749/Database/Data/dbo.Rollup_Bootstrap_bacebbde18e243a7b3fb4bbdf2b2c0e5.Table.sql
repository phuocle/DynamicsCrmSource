USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EntityId] [uniqueidentifier] NOT NULL,
	[ParentEntityId] [uniqueidentifier] NULL,
	[Depth] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[OutputValue] [decimal](38, 10) NULL,
	[CountValue] [int] NULL,
	[Status] [int] NULL,
	[CalculatedDateTime] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
