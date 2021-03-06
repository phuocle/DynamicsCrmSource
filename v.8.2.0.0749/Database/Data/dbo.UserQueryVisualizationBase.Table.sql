USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UserQueryVisualizationBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserQueryVisualizationBase](
	[Name] [nvarchar](100) NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[DataDescription] [nvarchar](max) NULL,
	[UserQueryVisualizationId] [uniqueidentifier] NOT NULL,
	[IsDefault] [bit] NOT NULL,
	[WebResourceId] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NOT NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[PrimaryEntityTypeCode] [int] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[ModifiedBy] [uniqueidentifier] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[PresentationDescription] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NOT NULL,
	[OwnerIdType] [int] NOT NULL,
	[ChartType] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_UserQueryVisualization] PRIMARY KEY CLUSTERED 
(
	[UserQueryVisualizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserQueryVisualizationBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_owner_userqueryvisualizations]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_owner_userqueryvisualizations] ON [dbo].[UserQueryVisualizationBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_webresource_userqueryvisualizations]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_webresource_userqueryvisualizations] ON [dbo].[UserQueryVisualizationBase]
(
	[WebResourceId] ASC
)
WHERE ([WebResourceId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserQueryVisualizationBase] ADD  CONSTRAINT [DF_UserQueryVisualizationBase_IsDefault]  DEFAULT ((0)) FOR [IsDefault]
GO
ALTER TABLE [dbo].[UserQueryVisualizationBase] ADD  CONSTRAINT [DF_UserQueryVisualizationBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[UserQueryVisualizationBase] ADD  CONSTRAINT [DF_UserQueryVisualizationBase_PrimaryEntityTypeCode]  DEFAULT ((0)) FOR [PrimaryEntityTypeCode]
GO
ALTER TABLE [dbo].[UserQueryVisualizationBase] ADD  CONSTRAINT [DF_UserQueryVisualizationBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[UserQueryVisualizationBase] ADD  CONSTRAINT [DF_UserQueryVisualizationBase_ChartType]  DEFAULT ((0)) FOR [ChartType]
GO
ALTER TABLE [dbo].[UserQueryVisualizationBase]  WITH CHECK ADD  CONSTRAINT [business_unit_userqueryvisualizations] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[UserQueryVisualizationBase] CHECK CONSTRAINT [business_unit_userqueryvisualizations]
GO
ALTER TABLE [dbo].[UserQueryVisualizationBase]  WITH CHECK ADD  CONSTRAINT [owner_userqueryvisualizations] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[UserQueryVisualizationBase] CHECK CONSTRAINT [owner_userqueryvisualizations]
GO
