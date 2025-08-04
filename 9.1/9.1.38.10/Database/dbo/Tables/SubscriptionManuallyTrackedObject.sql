CREATE TABLE [dbo].[SubscriptionManuallyTrackedObject] (
    [ObjectId]                            UNIQUEIDENTIFIER NOT NULL,
    [ObjectTypeCode]                      INT              NULL,
    [Track]                               BIT              CONSTRAINT [DF_SubscriptionManuallyTrackedObject_Track] DEFAULT ((0)) NOT NULL,
    [SubscriptionId]                      UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                       ROWVERSION       NULL,
    [SubscriptionManuallyTrackedObjectId] UNIQUEIDENTIFIER CONSTRAINT [DF_SubscriptionManuallyTrackedObject_SubscriptionManuallyTrackedObjectId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_SubscriptionManuallyTrackedObject] PRIMARY KEY NONCLUSTERED ([SubscriptionManuallyTrackedObjectId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [subscription_subscriptionmanuallytrackedobject] FOREIGN KEY ([SubscriptionId]) REFERENCES [dbo].[Subscription] ([SubscriptionId])
);


GO
ALTER TABLE [dbo].[SubscriptionManuallyTrackedObject] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_subscriptionmanuallytrackedobject]
    ON [dbo].[SubscriptionManuallyTrackedObject]([ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionManuallyTrackedObject]
    ON [dbo].[SubscriptionManuallyTrackedObject]([SubscriptionId] ASC, [ObjectTypeCode] ASC, [ObjectId] ASC)
    INCLUDE([Track], [VersionNumber]) WITH (FILLFACTOR = 80);

