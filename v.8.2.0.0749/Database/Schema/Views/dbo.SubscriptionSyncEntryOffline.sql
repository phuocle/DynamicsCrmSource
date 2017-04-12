SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for SubscriptionSyncEntryOffline
--
create view [dbo].[SubscriptionSyncEntryOffline]
 (

    -- physical attributes
    [SubscriptionId],
    [ObjectId],
    [ObjectTypeCode],
    [SyncState],
    [VersionNumber]
) with view_metadata as
select

    -- physical attribute
    [SubscriptionSyncEntryOfflineBase].[SubscriptionId],
    [SubscriptionSyncEntryOfflineBase].[ObjectId],
    [SubscriptionSyncEntryOfflineBase].[ObjectTypeCode],
    [SubscriptionSyncEntryOfflineBase].[SyncState],
    [SubscriptionSyncEntryOfflineBase].[VersionNumber]
from [SubscriptionSyncEntryOfflineBase] 
GO
