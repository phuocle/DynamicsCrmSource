CREATE TABLE [dbo].[SubscriptionSyncInfo] (
    [EndTime]                   DATETIME         NULL,
    [SubscriptionSyncInfoId]    INT              IDENTITY (1, 1) NOT NULL,
    [DeleteObjectCount]         INT              NULL,
    [SubscriptionId]            UNIQUEIDENTIFIER NULL,
    [SyncResult]                BIT              NULL,
    [StartTime]                 DATETIME         NULL,
    [DataSize]                  INT              NULL,
    [InsertObjectCount]         INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ClientVersion]             NVARCHAR (20)    NULL,
    CONSTRAINT [cndx_PrimaryKey_SubscriptionSyncInfo] PRIMARY KEY CLUSTERED ([SubscriptionSyncInfoId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [subscription_subscriptionsyncinfo] FOREIGN KEY ([SubscriptionId]) REFERENCES [dbo].[Subscription] ([SubscriptionId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [fndx_for_syncinfo_cleanup]
    ON [dbo].[SubscriptionSyncInfo]([StartTime] ASC) WHERE ([StartTime] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_subscription_lookup]
    ON [dbo].[SubscriptionSyncInfo]([SubscriptionId] ASC) WHERE ([SubscriptionId] IS NOT NULL) WITH (FILLFACTOR = 80);

