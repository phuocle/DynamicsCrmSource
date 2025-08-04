

--
-- report view for campaignactivityitem
--
create view dbo.[FilteredCampaignActivityItem] 
(
    [campaignactivityid],
    [campaignactivityidname],
    [campaignactivityidtype],
    [campaignactivityidyominame],
    [campaignactivityitemid],
    [importsequencenumber],
    [itemid],
    [itemobjecttypecode],
    [itemobjecttypecodename],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [CampaignActivityItem].[CampaignActivityId],
    [CampaignActivityItem].[CampaignActivityIdName],
    [CampaignActivityItem].[CampaignActivityIdType],
    [CampaignActivityItem].[CampaignActivityIdYomiName],
    [CampaignActivityItem].[CampaignActivityItemId],
    [CampaignActivityItem].[ImportSequenceNumber],
    [CampaignActivityItem].[ItemId],
    [CampaignActivityItem].[ItemObjectTypeCode],
    ItemObjectTypeCodePLTable.Value,
    [CampaignActivityItem].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CampaignActivityItem].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CampaignActivityItem].[OverriddenCreatedOn],
    [CampaignActivityItem].[OwnerId],
    [CampaignActivityItem].[OwnerIdType],
    [CampaignActivityItem].[OwningBusinessUnit],
    [CampaignActivityItem].[OwningUser],
    [CampaignActivityItem].[TimeZoneRuleVersionNumber],
    [CampaignActivityItem].[UTCConversionTimeZoneCode],
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCampaignActivityItem] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCampaignActivityItem] TO [CRMReaderRole]
    AS [dbo];

