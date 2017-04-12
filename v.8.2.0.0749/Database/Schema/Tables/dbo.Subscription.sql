CREATE TABLE [dbo].[Subscription]
(
[SubscriptionId] [uniqueidentifier] NOT NULL,
[SystemUserId] [uniqueidentifier] NOT NULL,
[MachineName] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[LastSyncStartedOn] [datetime] NULL,
[SyncEntryTableName] [nvarchar] (128) COLLATE Latin1_General_CI_AI NOT NULL,
[SubscriptionType] [int] NULL,
[CompletedSyncStartedOn] [datetime] NULL,
[ReInitialize] [bit] NOT NULL CONSTRAINT [DF_Subscription_ReInitialize] DEFAULT ((0)),
[UTCConversionTimeZoneCode] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[CompletedSyncVersionNumber] [bigint] NULL,
[ClientVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Subscription] ADD CONSTRAINT [cndx_PrimaryKey_Subscription] PRIMARY KEY CLUSTERED  ([SubscriptionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SystemUser] ON [dbo].[Subscription] ([SystemUserId]) INCLUDE ([SubscriptionType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
