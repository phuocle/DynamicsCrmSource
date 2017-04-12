SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for campaignitem
--
create view [dbo].[FilteredCampaignItem] (
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
GRANT SELECT ON  [dbo].[FilteredCampaignItem] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredCampaignItem] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
