USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ResourceBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ResourceBase](
	[DisplayInServiceViews] [bit] NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[BusinessUnitId] [uniqueidentifier] NOT NULL,
	[CalendarId] [uniqueidentifier] NULL,
	[IsDisabled] [bit] NULL,
	[ResourceId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](160) NULL,
	[SiteId] [uniqueidentifier] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_Resource] PRIMARY KEY CLUSTERED 
(
	[ResourceId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[ResourceBase] ([DisplayInServiceViews], [ObjectTypeCode], [BusinessUnitId], [CalendarId], [IsDisabled], [ResourceId], [OrganizationId], [Name], [SiteId], [EntityImageId]) VALUES (NULL, 8, N'c6acfcbe-f31d-e711-80d3-00155d00662d', N'76221ab5-9084-4635-94dc-ceba969a1b3d', 0, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'94f9b696-f31d-e711-80d3-00155d00662d', N'CRM Admin', NULL, NULL)
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ResourceBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ResourceBase]
(
	[BusinessUnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ResourceBase]  WITH CHECK ADD  CONSTRAINT [business_unit_resources] FOREIGN KEY([BusinessUnitId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ResourceBase] CHECK CONSTRAINT [business_unit_resources]
GO
ALTER TABLE [dbo].[ResourceBase]  WITH CHECK ADD  CONSTRAINT [site_resources] FOREIGN KEY([SiteId])
REFERENCES [dbo].[SiteBase] ([SiteId])
GO
ALTER TABLE [dbo].[ResourceBase] CHECK CONSTRAINT [site_resources]
GO
