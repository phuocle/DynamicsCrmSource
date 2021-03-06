USE [D365_MSCRM]
GO
/****** Object:  UserDefinedTableType [dbo].[t_DependencyNodeInsertTable]    Script Date: 4/10/2017 9:59:17 PM ******/
CREATE TYPE [dbo].[t_DependencyNodeInsertTable] AS TABLE(
	[DependencyNodeId] [uniqueidentifier] NULL,
	[ObjectId] [uniqueidentifier] NULL,
	[ComponentType] [int] NULL,
	[TopSolutionId] [uniqueidentifier] NULL,
	[BaseSolutionId] [uniqueidentifier] NULL,
	[ParentId] [uniqueidentifier] NULL
)
GO
