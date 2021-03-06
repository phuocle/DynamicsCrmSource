USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ResourceGroupBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ResourceGroupBase](
	[Name] [nvarchar](160) NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[ResourceGroupId] [uniqueidentifier] NOT NULL,
	[GroupTypeCode] [int] NULL,
	[BusinessUnitId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_ResourceGroup] PRIMARY KEY CLUSTERED 
(
	[ResourceGroupId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[ResourceGroupBase] ([Name], [ObjectTypeCode], [ResourceGroupId], [GroupTypeCode], [BusinessUnitId], [OrganizationId]) VALUES (N'D365', 9, N'c7acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', N'94f9b696-f31d-e711-80d3-00155d00662d')
/****** Object:  Index [fndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Security] ON [dbo].[ResourceGroupBase]
(
	[BusinessUnitId] ASC
)
WHERE ([BusinessUnitId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ResourceGroupBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ResourceGroupBase]  WITH CHECK ADD  CONSTRAINT [business_unit_resource_groups] FOREIGN KEY([BusinessUnitId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ResourceGroupBase] CHECK CONSTRAINT [business_unit_resource_groups]
GO
