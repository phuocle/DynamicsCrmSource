USE [D365_MSCRM]
GO
/****** Object:  UserDefinedTableType [dbo].[PostObjectId]    Script Date: 4/10/2017 9:59:17 PM ******/
CREATE TYPE [dbo].[PostObjectId] AS TABLE(
	[ObjectId] [uniqueidentifier] NOT NULL,
	[ObjectTypeCode] [int] NOT NULL
)
GO
