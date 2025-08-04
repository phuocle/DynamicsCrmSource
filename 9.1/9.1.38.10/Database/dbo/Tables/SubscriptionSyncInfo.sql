CREATE TABLE [dbo].[SubscriptionSyncInfo] (
    [TimeZoneRuleVersionNumber] INT              NULL,
    [EndTime]                   DATETIME         NULL,
    [SyncResult]                BIT              NULL,
    [StartTime]                 DATETIME         NULL,
    [DeleteObjectCount]         INT              NULL,
    [SubscriptionSyncInfoId]    INT              IDENTITY (1, 1) NOT NULL,
    [SubscriptionId]            UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [InsertObjectCount]         INT              NULL,
    [DataSize]                  INT              NULL,
    [ClientVersion]             NVARCHAR (20)    NULL,
    CONSTRAINT [cndx_PrimaryKey_SubscriptionSyncInfo] PRIMARY KEY CLUSTERED ([SubscriptionSyncInfoId] ASC) WITH (FILLFACTOR = 100),
    CONSTRAINT [subscription_subscriptionsyncinfo] FOREIGN KEY ([SubscriptionId]) REFERENCES [dbo].[Subscription] ([SubscriptionId])
);


GO
ALTER TABLE [dbo].[SubscriptionSyncInfo] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_for_subscription_lookup]
    ON [dbo].[SubscriptionSyncInfo]([SubscriptionId] ASC) WHERE ([SubscriptionId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_syncinfo_cleanup]
    ON [dbo].[SubscriptionSyncInfo]([StartTime] ASC) WHERE ([StartTime] IS NOT NULL) WITH (FILLFACTOR = 80);

