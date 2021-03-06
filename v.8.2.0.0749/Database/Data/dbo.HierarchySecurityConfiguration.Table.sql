USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[HierarchySecurityConfiguration]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HierarchySecurityConfiguration](
	[VersionNumber] [timestamp] NULL,
	[EntityName] [nvarchar](64) NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[HierarchySecurityModelingSettingId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_HsmConfiguration] PRIMARY KEY CLUSTERED 
(
	[HierarchySecurityModelingSettingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[HierarchySecurityConfiguration]
(
	[EntityName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Sync]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[HierarchySecurityConfiguration]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[HierarchySecurityConfiguration] ADD  CONSTRAINT [DF_HierarchySecurityConfiguration_HierarchySecurityModelingSettingId]  DEFAULT (newid()) FOR [HierarchySecurityModelingSettingId]
GO
