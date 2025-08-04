CREATE TABLE [dbo].[Subscription] (
    [UTCConversionTimeZoneCode]  INT              NULL,
    [ReInitialize]               BIT              CONSTRAINT [DF_Subscription_ReInitialize] DEFAULT ((0)) NOT NULL,
    [LastSyncStartedOn]          DATETIME         NULL,
    [SystemUserId]               UNIQUEIDENTIFIER NOT NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [MachineName]                NVARCHAR (200)   NULL,
    [SyncEntryTableName]         NVARCHAR (128)   NOT NULL,
    [CompletedSyncStartedOn]     DATETIME         NULL,
    [ClientVersion]              NVARCHAR (48)    NULL,
    [SubscriptionType]           INT              NULL,
    [SubscriptionId]             UNIQUEIDENTIFIER NOT NULL,
    [CompletedSyncVersionNumber] BIGINT           NULL,
    [ResetForCreate]             BIT              CONSTRAINT [DF_Subscription_ResetForCreate] DEFAULT ((1)) NULL,
    CONSTRAINT [cndx_PrimaryKey_Subscription] PRIMARY KEY CLUSTERED ([SubscriptionId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[Subscription] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_LastSyncStartedOn]
    ON [dbo].[Subscription]([LastSyncStartedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SystemUser]
    ON [dbo].[Subscription]([SystemUserId] ASC)
    INCLUDE([SubscriptionType]) WITH (FILLFACTOR = 80);

