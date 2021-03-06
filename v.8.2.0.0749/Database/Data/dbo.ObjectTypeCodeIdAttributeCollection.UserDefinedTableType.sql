USE [D365_MSCRM]
GO
/****** Object:  UserDefinedTableType [dbo].[ObjectTypeCodeIdAttributeCollection]    Script Date: 4/10/2017 9:59:17 PM ******/
CREATE TYPE [dbo].[ObjectTypeCodeIdAttributeCollection] AS TABLE(
	[typecode] [int] NOT NULL,
	[id] [uniqueidentifier] NOT NULL,
	[attributename] [nvarchar](250) NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[id] ASC,
	[typecode] ASC,
	[attributename] ASC
)WITH (IGNORE_DUP_KEY = OFF)
)
GO
