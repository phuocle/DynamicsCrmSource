

--
-- report view for campaignitem
--
create view dbo.[FilteredCampaignItem] 
(
    [campaignid],
    [campaignitemid],
    [entityid],
    [entitytype],
    [importsequencenumber],
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
    [CampaignItem].[CampaignId],
    [CampaignItem].[CampaignItemId],
    [CampaignItem].[EntityId],
    [CampaignItem].[EntityType],
    [CampaignItem].[ImportSequenceNumber],
    [CampaignItem].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CampaignItem].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CampaignItem].[OverriddenCreatedOn],
    [CampaignItem].[OwnerId],
    [CampaignItem].[OwnerIdType],
    [CampaignItem].[OwningBusinessUnit],
    [CampaignItem].[OwningUser],
    [CampaignItem].[TimeZoneRuleVersionNumber],
    [CampaignItem].[UTCConversionTimeZoneCode],
    [CampaignItem].[VersionNumber]
from CampaignItem
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCampaignItem] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCampaignItem] TO [CRMReaderRole]
    AS [dbo];

