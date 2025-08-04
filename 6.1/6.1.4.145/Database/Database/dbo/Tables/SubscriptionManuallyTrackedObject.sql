CREATE TABLE [dbo].[SubscriptionManuallyTrackedObject] (
    [SubscriptionManuallyTrackedObjectId] UNIQUEIDENTIFIER CONSTRAINT [DF_SubscriptionManuallyTrackedObject_SubscriptionManuallyTrackedObjectId] DEFAULT (newid()) NOT NULL,
    [SubscriptionId]                      UNIQUEIDENTIFIER NOT NULL,
    [ObjectId]                            UNIQUEIDENTIFIER NOT NULL,
    [Track]                               BIT              CONSTRAINT [DF_SubscriptionManuallyTrackedObject_Track] DEFAULT ((0)) NOT NULL,
    [ObjectTypeCode]                      INT              NULL,
    [VersionNumber]                       ROWVERSION       NULL,
    CONSTRAINT [ndx_PrimaryKey_SubscriptionManuallyTrackedObject] PRIMARY KEY NONCLUSTERED ([SubscriptionManuallyTrackedObjectId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [subscription_subscriptionmanuallytrackedobject] FOREIGN KEY ([SubscriptionId]) REFERENCES [dbo].[Subscription] ([SubscriptionId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionManuallyTrackedObject]
    ON [dbo].[SubscriptionManuallyTrackedObject]([SubscriptionId] ASC, [ObjectTypeCode] ASC, [ObjectId] ASC)
    INCLUDE([Track], [VersionNumber]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_subscriptionmanuallytrackedobject]
    ON [dbo].[SubscriptionManuallyTrackedObject]([ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

