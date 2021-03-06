USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UserSearchFacetBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserSearchFacetBase](
	[AttributeName] [nvarchar](50) NOT NULL,
	[UserSearchFacetId] [uniqueidentifier] NOT NULL,
	[EntityName] [nvarchar](64) NOT NULL,
	[FacetOrder] [int] NOT NULL,
	[SystemUserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_UserSearchFacet] PRIMARY KEY CLUSTERED 
(
	[SystemUserId] ASC,
	[EntityName] ASC,
	[AttributeName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [UQ_User_Entity_AttributeOrderMap]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[UserSearchFacetBase] ADD  CONSTRAINT [UQ_User_Entity_AttributeOrderMap] UNIQUE NONCLUSTERED 
(
	[SystemUserId] ASC,
	[EntityName] ASC,
	[AttributeName] ASC,
	[FacetOrder] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_EntityName]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EntityName] ON [dbo].[UserSearchFacetBase]
(
	[EntityName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_SystemUserId]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_SystemUserId] ON [dbo].[UserSearchFacetBase]
(
	[SystemUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
