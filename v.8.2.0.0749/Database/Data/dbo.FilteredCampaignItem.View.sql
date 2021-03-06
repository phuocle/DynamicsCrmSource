USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredCampaignItem]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
