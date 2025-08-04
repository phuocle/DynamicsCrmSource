SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for SubscriptionStatisticsOffline
--
create view [dbo].[SubscriptionStatisticsOffline]
 (

    -- physical attributes
    [SubscriptionId],
    [ObjectTypeCode],
    [FullSyncRequired]
) with view_metadata as
select

    -- physical attribute
    [SubscriptionStatisticsOfflineBase].[SubscriptionId],
    [SubscriptionStatisticsOfflineBase].[ObjectTypeCode],
    [SubscriptionStatisticsOfflineBase].[FullSyncRequired]
from [SubscriptionStatisticsOfflineBase] 
GO
