


--
-- base view for CampaignActivityItem
--
create view dbo.[CampaignActivityItem]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [OwningUser],
    [OwningBusinessUnit],

    -- physical attributes
    [ItemId],
    [ItemObjectTypeCode],
    [CampaignActivityItemId],
    [VersionNumber],
    [CampaignActivityId]
) with view_metadata as
select
    -- logical attributes
    [ActivityPointer_CampaignActivityItems].[OwnerId],
    [ActivityPointer_CampaignActivityItems].[OwnerIdType],
    case when [ActivityPointer_CampaignActivityItems].OwnerIdType = 8
    then [ActivityPointer_CampaignActivityItems].OwnerId
    else null
    end,
    [ActivityPointer_CampaignActivityItems].[OwningBusinessUnit],

    -- physical attribute
    [CampaignActivityItemBase].[ItemId],
    [CampaignActivityItemBase].[ItemObjectTypeCode],
    [CampaignActivityItemBase].[CampaignActivityItemId],
    [CampaignActivityItemBase].[VersionNumber],
    [CampaignActivityItemBase].[CampaignActivityId]
from [CampaignActivityItemBase] 
    left join [ActivityPointerBase] [ActivityPointer_CampaignActivityItems] with(nolock) on ([CampaignActivityItemBase].[CampaignActivityId] = [ActivityPointer_CampaignActivityItems].[ActivityId])
