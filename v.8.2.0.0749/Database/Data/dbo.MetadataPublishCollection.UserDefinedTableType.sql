USE [D365_MSCRM]
GO
/****** Object:  UserDefinedTableType [dbo].[MetadataPublishCollection]    Script Date: 4/10/2017 9:59:17 PM ******/
CREATE TYPE [dbo].[MetadataPublishCollection] AS TABLE(
	[ObjectId] [uniqueidentifier] NOT NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[ComponentState] [tinyint] NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[ObjectId] ASC,
	[ObjectTypeCode] ASC,
	[ComponentState] ASC
)WITH (IGNORE_DUP_KEY = OFF)
)
GO
