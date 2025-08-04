CREATE TABLE [dbo].[SubscriptionTrackingDeletedObject] (
    [ObjectTypeCode] INT              NOT NULL,
    [ObjectId]       UNIQUEIDENTIFIER NOT NULL,
    [TimeStamp]      ROWVERSION       NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SubscriptionTrackingDeletedObjects] PRIMARY KEY CLUSTERED ([TimeStamp] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionTrackingDeletedObjects]
    ON [dbo].[SubscriptionTrackingDeletedObject]([ObjectTypeCode] ASC, [ObjectId] ASC) WITH (FILLFACTOR = 80);

