USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[Subscription]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Subscription](
	[SubscriptionId] [uniqueidentifier] NOT NULL,
	[SystemUserId] [uniqueidentifier] NOT NULL,
	[MachineName] [nvarchar](200) NULL,
	[LastSyncStartedOn] [datetime] NULL,
	[SyncEntryTableName] [nvarchar](128) NOT NULL,
	[SubscriptionType] [int] NULL,
	[CompletedSyncStartedOn] [datetime] NULL,
	[ReInitialize] [bit] NOT NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[CompletedSyncVersionNumber] [bigint] NULL,
	[ClientVersion] [nvarchar](48) NULL,
 CONSTRAINT [cndx_PrimaryKey_Subscription] PRIMARY KEY CLUSTERED 
(
	[SubscriptionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_SystemUser]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_SystemUser] ON [dbo].[Subscription]
(
	[SystemUserId] ASC
)
INCLUDE ( 	[SubscriptionType]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Subscription] ADD  CONSTRAINT [DF_Subscription_ReInitialize]  DEFAULT ((0)) FOR [ReInitialize]
GO
