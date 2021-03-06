USE [D365_MSCRM]
GO
/****** Object:  UserDefinedTableType [dbo].[CascadeRemoveLinkCollection]    Script Date: 4/10/2017 9:59:17 PM ******/
CREATE TYPE [dbo].[CascadeRemoveLinkCollection] AS TABLE(
	[o] [uniqueidentifier] NOT NULL,
	[t] [int] NOT NULL,
	[c] [int] NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[t] ASC,
	[o] ASC,
	[c] ASC
)WITH (IGNORE_DUP_KEY = OFF)
)
GO
