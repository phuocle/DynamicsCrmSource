USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SubscriptionStatisticsOfflineBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubscriptionStatisticsOfflineBase](
	[SubscriptionId] [uniqueidentifier] NOT NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[FullSyncRequired] [bit] NOT NULL,
 CONSTRAINT [PK_SubscriptionStatisticsOfflineBase] PRIMARY KEY CLUSTERED 
(
	[SubscriptionId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[SubscriptionStatisticsOfflineBase] ADD  CONSTRAINT [DF_SubscriptionStatisticsOfflineBase_FullSyncRequired]  DEFAULT ((1)) FOR [FullSyncRequired]
GO
