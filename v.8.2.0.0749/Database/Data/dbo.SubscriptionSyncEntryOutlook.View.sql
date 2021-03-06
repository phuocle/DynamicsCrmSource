USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SubscriptionSyncEntryOutlook]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
