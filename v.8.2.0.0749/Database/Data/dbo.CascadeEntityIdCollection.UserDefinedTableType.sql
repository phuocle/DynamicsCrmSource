USE [D365_MSCRM]
GO
/****** Object:  UserDefinedTableType [dbo].[CascadeEntityIdCollection]    Script Date: 4/10/2017 9:59:17 PM ******/
CREATE TYPE [dbo].[CascadeEntityIdCollection] AS TABLE(
	[id] [uniqueidentifier] NOT NULL
)
GO
