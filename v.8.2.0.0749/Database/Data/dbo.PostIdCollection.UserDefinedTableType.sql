USE [D365_MSCRM]
GO
/****** Object:  UserDefinedTableType [dbo].[PostIdCollection]    Script Date: 4/10/2017 9:59:17 PM ******/
CREATE TYPE [dbo].[PostIdCollection] AS TABLE(
	[Id] [uniqueidentifier] NOT NULL
)
GO
