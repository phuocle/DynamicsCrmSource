SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for SubscriptionSyncEntryOutlook
--
create view [dbo].[SubscriptionSyncEntryOutlook]
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
    [SubscriptionSyncEntryOutlookBase].[SubscriptionId],
    [SubscriptionSyncEntryOutlookBase].[ObjectId],
    [SubscriptionSyncEntryOutlookBase].[ObjectTypeCode],
    [SubscriptionSyncEntryOutlookBase].[SyncState],
    [SubscriptionSyncEntryOutlookBase].[VersionNumber]
from [SubscriptionSyncEntryOutlookBase] 
GO
