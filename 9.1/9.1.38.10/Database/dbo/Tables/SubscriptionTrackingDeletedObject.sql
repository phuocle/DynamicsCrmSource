CREATE TABLE [dbo].[SubscriptionTrackingDeletedObject] (
    [ObjectTypeCode]  INT              NOT NULL,
    [ObjectId]        UNIQUEIDENTIFIER NOT NULL,
    [TimeStamp]       ROWVERSION       NOT NULL,
    [IsLogicalDelete] BIT              CONSTRAINT [DF_SubscriptionTrackingDeletedObject_IsLogicalDelete] DEFAULT ((0)) NULL,
    [DeleteTime]      DATETIME         CONSTRAINT [DF_SubscriptionTrackingDeletedObject_DeleteTime] DEFAULT (getutcdate()) NULL,
    [CrmCreatedOn]    DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_SubscriptionTrackingDeletedObjects] PRIMARY KEY CLUSTERED ([TimeStamp] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SubscriptionTrackingDeletedObject] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionTrackingDeletedObjects]
    ON [dbo].[SubscriptionTrackingDeletedObject]([ObjectTypeCode] ASC, [ObjectId] ASC, [IsLogicalDelete] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_OTCVersionNumber]
    ON [dbo].[SubscriptionTrackingDeletedObject]([ObjectTypeCode] ASC, [TimeStamp] ASC)
    INCLUDE([ObjectId], [IsLogicalDelete]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CrmCreatedOn]
    ON [dbo].[SubscriptionTrackingDeletedObject]([CrmCreatedOn] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

