USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[MultiEntitySearchEntities]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MultiEntitySearchEntities](
	[MultiEntitySearchId] [uniqueidentifier] NOT NULL,
	[EntityOrder] [int] NULL,
	[MultiEntitySearchEntityId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_MultiEntitySearchEntities_MultiEntitySearchEntityId]  DEFAULT (newid()),
	[EntityName] [nvarchar](64) NULL,
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_MultiEntitySearchEntities] PRIMARY KEY CLUSTERED 
(
	[MultiEntitySearchEntityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[MultiEntitySearchEntities] ([MultiEntitySearchId], [EntityOrder], [MultiEntitySearchEntityId], [EntityName]) VALUES (N'bce65c6c-f51d-e711-80d3-00155d00662d', 1, N'bde65c6c-f51d-e711-80d3-00155d00662d', N'account')
INSERT [dbo].[MultiEntitySearchEntities] ([MultiEntitySearchId], [EntityOrder], [MultiEntitySearchEntityId], [EntityName]) VALUES (N'bce65c6c-f51d-e711-80d3-00155d00662d', 2, N'bee65c6c-f51d-e711-80d3-00155d00662d', N'contact')
INSERT [dbo].[MultiEntitySearchEntities] ([MultiEntitySearchId], [EntityOrder], [MultiEntitySearchEntityId], [EntityName]) VALUES (N'bce65c6c-f51d-e711-80d3-00155d00662d', 3, N'bfe65c6c-f51d-e711-80d3-00155d00662d', N'lead')
INSERT [dbo].[MultiEntitySearchEntities] ([MultiEntitySearchId], [EntityOrder], [MultiEntitySearchEntityId], [EntityName]) VALUES (N'bce65c6c-f51d-e711-80d3-00155d00662d', 4, N'c0e65c6c-f51d-e711-80d3-00155d00662d', N'opportunity')
INSERT [dbo].[MultiEntitySearchEntities] ([MultiEntitySearchId], [EntityOrder], [MultiEntitySearchEntityId], [EntityName]) VALUES (N'bce65c6c-f51d-e711-80d3-00155d00662d', 5, N'c1e65c6c-f51d-e711-80d3-00155d00662d', N'systemuser')
INSERT [dbo].[MultiEntitySearchEntities] ([MultiEntitySearchId], [EntityOrder], [MultiEntitySearchEntityId], [EntityName]) VALUES (N'bce65c6c-f51d-e711-80d3-00155d00662d', 6, N'c2e65c6c-f51d-e711-80d3-00155d00662d', N'competitor')
INSERT [dbo].[MultiEntitySearchEntities] ([MultiEntitySearchId], [EntityOrder], [MultiEntitySearchEntityId], [EntityName]) VALUES (N'bce65c6c-f51d-e711-80d3-00155d00662d', 7, N'c3e65c6c-f51d-e711-80d3-00155d00662d', N'activitypointer')
INSERT [dbo].[MultiEntitySearchEntities] ([MultiEntitySearchId], [EntityOrder], [MultiEntitySearchEntityId], [EntityName]) VALUES (N'bce65c6c-f51d-e711-80d3-00155d00662d', 8, N'c4e65c6c-f51d-e711-80d3-00155d00662d', N'incident')
/****** Object:  Index [ndx_MultiEntitySearchEntities_Order]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[MultiEntitySearchEntities] ADD  CONSTRAINT [ndx_MultiEntitySearchEntities_Order] UNIQUE NONCLUSTERED 
(
	[MultiEntitySearchEntityId] ASC,
	[EntityOrder] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[MultiEntitySearchEntities]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MultiEntitySearchEntities]  WITH CHECK ADD  CONSTRAINT [multientitysearch_multientitysearchentities] FOREIGN KEY([MultiEntitySearchId])
REFERENCES [dbo].[MultiEntitySearchBase] ([MultiEntitySearchId])
GO
ALTER TABLE [dbo].[MultiEntitySearchEntities] CHECK CONSTRAINT [multientitysearch_multientitysearchentities]
GO
