


--
-- base view for CampaignItem
--
create view dbo.[CampaignItem]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [OwningBusinessUnit],
    [OwningUser],

    -- physical attributes
    [EntityType],
    [EntityId],
    [VersionNumber],
    [CampaignItemId],
    [CampaignId]
) with view_metadata as
select
    -- logical attributes
    [Campaign_RelatedEntities].[OwnerId],
    [Campaign_RelatedEntities].[OwnerIdType],
    [Campaign_RelatedEntities].[OwningBusinessUnit],
    case when [Campaign_RelatedEntities].OwnerIdType = 8
    then [Campaign_RelatedEntities].OwnerId
    else null
    end,

    -- physical attribute
    [CampaignItemBase].[EntityType],
    [CampaignItemBase].[EntityId],
    [CampaignItemBase].[VersionNumber],
    [CampaignItemBase].[CampaignItemId],
    [CampaignItemBase].[CampaignId]
from [CampaignItemBase] 
    left join [CampaignBase] [Campaign_RelatedEntities] on ([CampaignItemBase].[CampaignId] = [Campaign_RelatedEntities].[CampaignId])
