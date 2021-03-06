USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CampaignActivityItemBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CampaignActivityItemBase](
	[ItemId] [uniqueidentifier] NOT NULL,
	[ItemObjectTypeCode] [int] NOT NULL,
	[CampaignActivityItemId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[CampaignActivityId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_CampaignActivityItem] PRIMARY KEY CLUSTERED 
(
	[CampaignActivityItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CampaignActivityItemBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_ActivityPointer_CampaignActivityItems]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_ActivityPointer_CampaignActivityItems] ON [dbo].[CampaignActivityItemBase]
(
	[CampaignActivityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_List_CampaignActivityItem]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_List_CampaignActivityItem] ON [dbo].[CampaignActivityItemBase]
(
	[ItemId] ASC,
	[ItemObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignActivityItemBase]  WITH CHECK ADD  CONSTRAINT [items_campaignactivity] FOREIGN KEY([CampaignActivityId])
REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
ALTER TABLE [dbo].[CampaignActivityItemBase] CHECK CONSTRAINT [items_campaignactivity]
GO
