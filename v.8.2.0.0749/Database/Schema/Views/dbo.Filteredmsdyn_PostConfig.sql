SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for msdyn_postconfig
--
create view [dbo].[Filteredmsdyn_PostConfig] (
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
    [msdyn_configurewall],
    [msdyn_configurewallname],
    [msdyn_entitydisplayname],
    [msdyn_entityname],
    [msdyn_followingviewid],
    [msdyn_followingviewid2],
    [msdyn_otc],
    [msdyn_postconfigid],
    [msdyn_status],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [msdyn_PostConfig].[CreatedBy],
    [msdyn_PostConfig].[CreatedByName],
    [msdyn_PostConfig].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_PostConfig].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_PostConfig].[CreatedOn],
    [msdyn_PostConfig].[CreatedOnBehalfBy],
    [msdyn_PostConfig].[CreatedOnBehalfByName],
    [msdyn_PostConfig].[CreatedOnBehalfByYomiName],
    [msdyn_PostConfig].[ImportSequenceNumber],
    [msdyn_PostConfig].[ModifiedBy],
    [msdyn_PostConfig].[ModifiedByName],
    [msdyn_PostConfig].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_PostConfig].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_PostConfig].[ModifiedOn],
    [msdyn_PostConfig].[ModifiedOnBehalfBy],
    [msdyn_PostConfig].[ModifiedOnBehalfByName],
    [msdyn_PostConfig].[ModifiedOnBehalfByYomiName],
    [msdyn_PostConfig].[msdyn_ConfigureWall],
    msdyn_ConfigureWallPLTable.Value,
    [msdyn_PostConfig].[msdyn_EntityDisplayName],
    [msdyn_PostConfig].[msdyn_EntityName],
    [msdyn_PostConfig].[msdyn_FollowingViewId],
    [msdyn_PostConfig].[msdyn_FollowingViewId2],
    [msdyn_PostConfig].[msdyn_Otc],
    [msdyn_PostConfig].[msdyn_PostConfigId],
    [msdyn_PostConfig].[msdyn_Status],
    [msdyn_PostConfig].[OrganizationId],
    [msdyn_PostConfig].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_PostConfig].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_PostConfig].[OverriddenCreatedOn],
    [msdyn_PostConfig].[statecode],
    statecodePLTable.Value,
    [msdyn_PostConfig].[statuscode],
    statuscodePLTable.Value,
    [msdyn_PostConfig].[TimeZoneRuleVersionNumber],
    [msdyn_PostConfig].[UTCConversionTimeZoneCode],
    [msdyn_PostConfig].[VersionNumber]
from msdyn_PostConfig
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_ConfigureWallPLTable] on 
		([msdyn_ConfigureWallPLTable].AttributeName = 'msdyn_configurewall'
		and [msdyn_ConfigureWallPLTable].ObjectTypeCode = 10001
		and [msdyn_ConfigureWallPLTable].AttributeValue = [msdyn_PostConfig].[msdyn_ConfigureWall]
		and [msdyn_ConfigureWallPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10001
		and [statecodePLTable].AttributeValue = [msdyn_PostConfig].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10001
		and [statuscodePLTable].AttributeValue = [msdyn_PostConfig].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10001) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [msdyn_PostConfig].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[Filteredmsdyn_PostConfig] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[Filteredmsdyn_PostConfig] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
