CREATE TABLE [dbo].[SubscriptionTrackingDeletedObject]
(
[ObjectTypeCode] [int] NOT NULL,
[ObjectId] [uniqueidentifier] NOT NULL,
[TimeStamp] [timestamp] NOT NULL,
[DeleteTime] [datetime] NULL CONSTRAINT [DF_SubscriptionTrackingDeletedObject_DeleteTime] DEFAULT (getutcdate()),
[IsLogicalDelete] [bit] NULL CONSTRAINT [DF_SubscriptionTrackingDeletedObject_IsLogicalDelete] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionTrackingDeletedObject] ADD CONSTRAINT [cndx_PrimaryKey_SubscriptionTrackingDeletedObjects] PRIMARY KEY CLUSTERED  ([TimeStamp]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SubscriptionTrackingDeletedObjects] ON [dbo].[SubscriptionTrackingDeletedObject] ([ObjectTypeCode], [ObjectId], [IsLogicalDelete]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
