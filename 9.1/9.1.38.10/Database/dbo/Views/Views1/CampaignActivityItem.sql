


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
    [CampaignActivityItemId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [CampaignActivityId],
    [ItemId],
    [ItemObjectTypeCode],
    [CampaignActivityIdType],
    [CampaignActivityIdName],
    [CampaignActivityIdYomiName]
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
    [CampaignActivityItemBase].[CampaignActivityItemId],
    [CampaignActivityItemBase].[VersionNumber],
    [CampaignActivityItemBase].[ImportSequenceNumber],
    [CampaignActivityItemBase].[OverriddenCreatedOn],
    [CampaignActivityItemBase].[TimeZoneRuleVersionNumber],
    [CampaignActivityItemBase].[UTCConversionTimeZoneCode],
    [CampaignActivityItemBase].[Name],
    [CampaignActivityItemBase].[CampaignActivityId],
    [CampaignActivityItemBase].[ItemId],
    [CampaignActivityItemBase].[ItemObjectTypeCode],
    [CampaignActivityItemBase].[CampaignActivityIdType],
    [CampaignActivityItemBase].[CampaignActivityIdName],
    [CampaignActivityItemBase].[CampaignActivityIdYomiName]
from [CampaignActivityItemBase] 
    left join [ActivityPointerBase] [ActivityPointer_CampaignActivityItems] on ([CampaignActivityItemBase].[CampaignActivityId] = [ActivityPointer_CampaignActivityItems].[ActivityId])
