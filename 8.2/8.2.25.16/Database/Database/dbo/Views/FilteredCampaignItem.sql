

--
-- report view for campaignitem
--
create view dbo.[FilteredCampaignItem] (
    [campaignid],
    [campaignitemid],
    [entityid],
    [entitytype],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [versionnumber]
) with view_metadata as
select
    [CampaignItem].[CampaignId],
    [CampaignItem].[CampaignItemId],
    [CampaignItem].[EntityId],
    [CampaignItem].[EntityType],
    [CampaignItem].[OwnerId],
    [CampaignItem].[OwnerIdType],
    [CampaignItem].[OwningBusinessUnit],
    [CampaignItem].[OwningUser],
    [CampaignItem].[VersionNumber]
from CampaignItem

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCampaignItem] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCampaignItem] TO [CRMReaderRole]
    AS [dbo];

