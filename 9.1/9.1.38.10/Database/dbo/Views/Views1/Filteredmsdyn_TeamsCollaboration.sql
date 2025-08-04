

--
-- report view for msdyn_teamscollaboration
--
create view dbo.[Filteredmsdyn_TeamsCollaboration] 
(
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [msdyn_appid],
    [msdyn_channelfolderrelativeurl],
    [msdyn_channelid],
    [msdyn_channelname],
    [msdyn_channeltype],
    [msdyn_contenturl],
    [msdyn_groupid],
    [msdyn_pipedentityid],
    [msdyn_teamid],
    [msdyn_teamname],
    [msdyn_teamscollaborationid],
    [msdyn_teamsiteurl],
    [msdyn_tenantid],
    [msdyn_weburl],
    [organizationid],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [regardingobjectid],
    [regardingobjecttypecode],
    [regardingobjecttypename],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [msdyn_TeamsCollaboration].[CreatedBy],
    [msdyn_TeamsCollaboration].[CreatedByName],
    [msdyn_TeamsCollaboration].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_TeamsCollaboration].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_TeamsCollaboration].[CreatedOn],
    [msdyn_TeamsCollaboration].[CreatedOnBehalfBy],
    [msdyn_TeamsCollaboration].[CreatedOnBehalfByName],
    [msdyn_TeamsCollaboration].[CreatedOnBehalfByYomiName],
    [msdyn_TeamsCollaboration].[ImportSequenceNumber],
    [msdyn_TeamsCollaboration].[ModifiedBy],
    [msdyn_TeamsCollaboration].[ModifiedByName],
    [msdyn_TeamsCollaboration].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_TeamsCollaboration].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_TeamsCollaboration].[ModifiedOn],
    [msdyn_TeamsCollaboration].[ModifiedOnBehalfBy],
    [msdyn_TeamsCollaboration].[ModifiedOnBehalfByName],
    [msdyn_TeamsCollaboration].[ModifiedOnBehalfByYomiName],
    [msdyn_TeamsCollaboration].[msdyn_AppId],
    [msdyn_TeamsCollaboration].[msdyn_ChannelFolderRelativeUrl],
    [msdyn_TeamsCollaboration].[msdyn_ChannelId],
    [msdyn_TeamsCollaboration].[msdyn_ChannelName],
    [msdyn_TeamsCollaboration].[msdyn_channelType],
    [msdyn_TeamsCollaboration].[msdyn_ContentUrl],
    [msdyn_TeamsCollaboration].[msdyn_GroupId],
    [msdyn_TeamsCollaboration].[msdyn_pipedEntityId],
    [msdyn_TeamsCollaboration].[msdyn_TeamId],
    [msdyn_TeamsCollaboration].[msdyn_TeamName],
    [msdyn_TeamsCollaboration].[msdyn_TeamsCollaborationId],
    [msdyn_TeamsCollaboration].[msdyn_TeamSiteUrl],
    [msdyn_TeamsCollaboration].[msdyn_TenantId],
    [msdyn_TeamsCollaboration].[msdyn_WebUrl],
    [msdyn_TeamsCollaboration].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_TeamsCollaboration].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_TeamsCollaboration].[OverriddenCreatedOn],
    [msdyn_TeamsCollaboration].[RegardingObjectId],
    [msdyn_TeamsCollaboration].[RegardingObjectTypeCode],
    [msdyn_TeamsCollaboration].[RegardingObjectTypeName],
    [msdyn_TeamsCollaboration].[statecode],
    statecodePLTable.Value,
    [msdyn_TeamsCollaboration].[statuscode],
    statuscodePLTable.Value,
    [msdyn_TeamsCollaboration].[TimeZoneRuleVersionNumber],
    [msdyn_TeamsCollaboration].[UTCConversionTimeZoneCode],
    [msdyn_TeamsCollaboration].[VersionNumber]
from msdyn_TeamsCollaboration
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10111
		and [statecodePLTable].AttributeValue = [msdyn_TeamsCollaboration].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10111
		and [statuscodePLTable].AttributeValue = [msdyn_TeamsCollaboration].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_TeamsCollaboration] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_TeamsCollaboration] TO [CRMReaderRole]
    AS [dbo];

