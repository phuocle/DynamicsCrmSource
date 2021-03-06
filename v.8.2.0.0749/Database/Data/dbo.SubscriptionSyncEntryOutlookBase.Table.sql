USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SubscriptionSyncEntryOutlookBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubscriptionSyncEntryOutlookBase](
	[ObjectTypeCode] [int] NOT NULL,
	[ObjectId] [uniqueidentifier] NOT NULL,
	[SubscriptionId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [bigint] NOT NULL,
	[SyncState] [tinyint] NOT NULL,
 CONSTRAINT [PK_SubscriptionSyncEntryOutlookBase] PRIMARY KEY CLUSTERED 
(
	[SubscriptionId] ASC,
	[ObjectId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_SubscriptionIdObjectTypeCode]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_SubscriptionIdObjectTypeCode] ON [dbo].[SubscriptionSyncEntryOutlookBase]
(
	[SubscriptionId] ASC,
	[ObjectTypeCode] ASC
)
INCLUDE ( 	[ObjectId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
