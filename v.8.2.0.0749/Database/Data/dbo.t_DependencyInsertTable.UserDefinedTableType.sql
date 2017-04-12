USE [D365_MSCRM]
GO
/****** Object:  UserDefinedTableType [dbo].[t_DependencyInsertTable]    Script Date: 4/10/2017 9:59:17 PM ******/
CREATE TYPE [dbo].[t_DependencyInsertTable] AS TABLE(
	[DependencyId] [uniqueidentifier] NULL,
	[RequiredComponentNodeId] [uniqueidentifier] NULL,
	[DependencyType] [int] NULL,
	[DependentComponentNodeId] [uniqueidentifier] NULL
)
GO
