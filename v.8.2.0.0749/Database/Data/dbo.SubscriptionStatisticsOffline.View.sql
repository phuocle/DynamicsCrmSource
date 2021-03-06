USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SubscriptionStatisticsOffline]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
