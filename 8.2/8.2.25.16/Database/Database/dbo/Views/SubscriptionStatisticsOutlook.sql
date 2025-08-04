


--
-- base view for SubscriptionStatisticsOutlook
--
create view dbo.[SubscriptionStatisticsOutlook]
 (

    -- physical attributes
    [SubscriptionId],
    [ObjectTypeCode],
    [FullSyncRequired]
) with view_metadata as
select

    -- physical attribute
    [SubscriptionStatisticsOutlookBase].[SubscriptionId],
    [SubscriptionStatisticsOutlookBase].[ObjectTypeCode],
    [SubscriptionStatisticsOutlookBase].[FullSyncRequired]
from [SubscriptionStatisticsOutlookBase] 
