USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SharedCacheState]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SharedCacheState](
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[IsCacheSharingEnabled] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[SharedCacheState] ([OrganizationId], [IsCacheSharingEnabled]) VALUES (N'94f9b696-f31d-e711-80d3-00155d00662d', 1)
