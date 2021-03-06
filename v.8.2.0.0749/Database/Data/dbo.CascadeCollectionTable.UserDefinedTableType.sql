USE [D365_MSCRM]
GO
/****** Object:  UserDefinedTableType [dbo].[CascadeCollectionTable]    Script Date: 4/10/2017 9:59:16 PM ******/
CREATE TYPE [dbo].[CascadeCollectionTable] AS TABLE(
	[o] [uniqueidentifier] NOT NULL,
	[t] [int] NOT NULL,
	[c] [int] NOT NULL,
	[s] [int] NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[t] ASC,
	[o] ASC,
	[c] ASC
)WITH (IGNORE_DUP_KEY = OFF)
)
GO
