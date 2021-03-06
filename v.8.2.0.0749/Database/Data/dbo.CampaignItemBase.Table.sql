USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CampaignItemBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CampaignItemBase](
	[EntityType] [int] NOT NULL,
	[EntityId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[CampaignItemId] [uniqueidentifier] NOT NULL,
	[CampaignId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_CampaignItem] PRIMARY KEY CLUSTERED 
(
	[CampaignItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [AK1_CampaignItemBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[CampaignItemBase] ADD  CONSTRAINT [AK1_CampaignItemBase] UNIQUE NONCLUSTERED 
(
	[CampaignId] ASC,
	[EntityId] ASC,
	[EntityType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CampaignItemBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_SalesLiterature_CampaignItem]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_SalesLiterature_CampaignItem] ON [dbo].[CampaignItemBase]
(
	[EntityId] ASC,
	[EntityType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignItemBase]  WITH CHECK ADD  CONSTRAINT [Campaign_RelatedEntities] FOREIGN KEY([CampaignId])
REFERENCES [dbo].[CampaignBase] ([CampaignId])
GO
ALTER TABLE [dbo].[CampaignItemBase] CHECK CONSTRAINT [Campaign_RelatedEntities]
GO
