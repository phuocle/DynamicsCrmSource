USE [D365_MSCRM]
GO
/****** Object:  UserDefinedTableType [dbo].[EntityIdCollection]    Script Date: 4/10/2017 9:59:17 PM ******/
CREATE TYPE [dbo].[EntityIdCollection] AS TABLE(
	[id] [uniqueidentifier] NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (IGNORE_DUP_KEY = OFF)
)
GO
