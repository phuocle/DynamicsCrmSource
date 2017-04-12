SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for campaignactivityitem
--
create view [dbo].[FilteredCampaignActivityItem] (
    [campaignactivityid],
    [campaignactivityitemid],
    [itemid],
    [itemobjecttypecode],
    [itemobjecttypecodename],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [versionnumber]
) with view_metadata as
select
    [CampaignActivityItem].[CampaignActivityId],
    [CampaignActivityItem].[CampaignActivityItemId],
    [CampaignActivityItem].[ItemId],
    [CampaignActivityItem].[ItemObjectTypeCode],
    ItemObjectTypeCodePLTable.Value,
    [CampaignActivityItem].[OwnerId],
    [CampaignActivityItem].[OwnerIdType],
    [CampaignActivityItem].[OwningBusinessUnit],
    [CampaignActivityItem].[OwningUser],
    [CampaignActivityItem].[VersionNumber]
from CampaignActivityItem
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ItemObjectTypeCodePLTable] on 
		([ItemObjectTypeCodePLTable].AttributeName = 'itemobjecttypecode'
		and [ItemObjectTypeCodePLTable].ObjectTypeCode = 4404
		and [ItemObjectTypeCodePLTable].AttributeValue = [CampaignActivityItem].[ItemObjectTypeCode]
		and [ItemObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
GO
GRANT SELECT ON  [dbo].[FilteredCampaignActivityItem] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredCampaignActivityItem] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
