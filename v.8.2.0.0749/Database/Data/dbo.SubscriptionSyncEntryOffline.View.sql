USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SubscriptionSyncEntryOffline]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
