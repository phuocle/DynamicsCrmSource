CREATE TABLE [dbo].[Subscription] (
    [SubscriptionId]             UNIQUEIDENTIFIER NOT NULL,
    [SystemUserId]               UNIQUEIDENTIFIER NOT NULL,
    [MachineName]                NVARCHAR (200)   NULL,
    [LastSyncStartedOn]          DATETIME         NULL,
    [SyncEntryTableName]         NVARCHAR (128)   NOT NULL,
    [SubscriptionType]           INT              NULL,
    [CompletedSyncStartedOn]     DATETIME         NULL,
    [ReInitialize]               BIT              CONSTRAINT [DF_Subscription_ReInitialize] DEFAULT ((0)) NOT NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [CompletedSyncVersionNumber] BIGINT           NULL,
    [ClientVersion]              NVARCHAR (48)    NULL,
    [ResetForCreate]             BIT              CONSTRAINT [DF_Subscription_ResetForCreate] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Subscription] PRIMARY KEY CLUSTERED ([SubscriptionId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_SystemUser]
    ON [dbo].[Subscription]([SystemUserId] ASC)
    INCLUDE([SubscriptionType]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_LastSyncStartedOn]
    ON [dbo].[Subscription]([LastSyncStartedOn] ASC) WITH (FILLFACTOR = 80);

