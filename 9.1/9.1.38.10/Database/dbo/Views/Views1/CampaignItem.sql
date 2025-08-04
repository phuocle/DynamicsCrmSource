


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
    [CampaignItemId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [CampaignId],
    [EntityId],
    [EntityType]
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
    [CampaignItemBase].[CampaignItemId],
    [CampaignItemBase].[VersionNumber],
    [CampaignItemBase].[ImportSequenceNumber],
    [CampaignItemBase].[OverriddenCreatedOn],
    [CampaignItemBase].[TimeZoneRuleVersionNumber],
    [CampaignItemBase].[UTCConversionTimeZoneCode],
    [CampaignItemBase].[Name],
    [CampaignItemBase].[CampaignId],
    [CampaignItemBase].[EntityId],
    [CampaignItemBase].[EntityType]
from [CampaignItemBase] 
    left join [CampaignBase] [Campaign_RelatedEntities] on ([CampaignItemBase].[CampaignId] = [Campaign_RelatedEntities].[CampaignId])
