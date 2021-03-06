USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SubscriptionStatisticsOutlook]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for SubscriptionStatisticsOutlook
--
create view [dbo].[SubscriptionStatisticsOutlook]
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

GO
