

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
    ON OBJECT::[dbo].[FilteredCampaignItem] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCampaignItem] TO [CRMReaderRole]
    AS [dbo];

