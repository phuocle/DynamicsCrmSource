USE [D365_MSCRM]
GO
/****** Object:  UserDefinedTableType [dbo].[CascadeDeleteCollection]    Script Date: 4/10/2017 9:59:17 PM ******/
CREATE TYPE [dbo].[CascadeDeleteCollection] AS TABLE(
	[t] [int] NOT NULL,
	[o] [uniqueidentifier] NOT NULL,
	[d] [int] NOT NULL,
	[s] [int] NOT NULL,
	[u] [int] IDENTITY(1,1) NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[t] ASC,
	[o] ASC,
	[d] ASC,
	[u] ASC
)WITH (IGNORE_DUP_KEY = OFF)
)
GO
