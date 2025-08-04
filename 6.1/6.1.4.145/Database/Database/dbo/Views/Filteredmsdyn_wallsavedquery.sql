

--
-- report view for msdyn_wallsavedquery
--
create view dbo.[Filteredmsdyn_wallsavedquery] (
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
    [msdyn_entitydisplayname],
    [msdyn_entityname],
    [msdyn_isvirtual],
    [msdyn_isvirtualname],
    [msdyn_isvisible],
    [msdyn_isvisiblebit],
    [msdyn_isvisiblename],
    [msdyn_otc],
    [msdyn_postconfigurationid],
    [msdyn_postconfigurationidname],
    [msdyn_savedqueryid],
    [msdyn_savedqueryname],
    [msdyn_wallsavedqueryid],
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
    [msdyn_wallsavedquery].[CreatedBy],
    [msdyn_wallsavedquery].[CreatedByName],
    [msdyn_wallsavedquery].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_wallsavedquery].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_wallsavedquery].[CreatedOn],
    [msdyn_wallsavedquery].[CreatedOnBehalfBy],
    [msdyn_wallsavedquery].[CreatedOnBehalfByName],
    [msdyn_wallsavedquery].[CreatedOnBehalfByYomiName],
    [msdyn_wallsavedquery].[ImportSequenceNumber],
    [msdyn_wallsavedquery].[ModifiedBy],
    [msdyn_wallsavedquery].[ModifiedByName],
    [msdyn_wallsavedquery].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_wallsavedquery].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_wallsavedquery].[ModifiedOn],
    [msdyn_wallsavedquery].[ModifiedOnBehalfBy],
    [msdyn_wallsavedquery].[ModifiedOnBehalfByName],
    [msdyn_wallsavedquery].[ModifiedOnBehalfByYomiName],
    [msdyn_wallsavedquery].[msdyn_entitydisplayname],
    [msdyn_wallsavedquery].[msdyn_entityname],
    [msdyn_wallsavedquery].[msdyn_IsVirtual],
    msdyn_IsVirtualPLTable.Value,
    [msdyn_wallsavedquery].[msdyn_IsVisible],
    [msdyn_wallsavedquery].[msdyn_isvisiblebit],
    msdyn_IsVisiblePLTable.Value,
    [msdyn_wallsavedquery].[msdyn_otc],
    [msdyn_wallsavedquery].[msdyn_postconfigurationid],
    [msdyn_wallsavedquery].[msdyn_postconfigurationidName],
    [msdyn_wallsavedquery].[msdyn_SavedQueryId],
    [msdyn_wallsavedquery].[msdyn_savedqueryname],
    [msdyn_wallsavedquery].[msdyn_wallsavedqueryId],
    [msdyn_wallsavedquery].[OrganizationId],
    [msdyn_wallsavedquery].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_wallsavedquery].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_wallsavedquery].[OverriddenCreatedOn],
    [msdyn_wallsavedquery].[statecode],
    statecodePLTable.Value,
    [msdyn_wallsavedquery].[statuscode],
    statuscodePLTable.Value,
    [msdyn_wallsavedquery].[TimeZoneRuleVersionNumber],
    [msdyn_wallsavedquery].[UTCConversionTimeZoneCode],
    [msdyn_wallsavedquery].[VersionNumber]
from msdyn_wallsavedquery
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_IsVirtualPLTable] on 
		([msdyn_IsVirtualPLTable].AttributeName = 'msdyn_isvirtual'
		and [msdyn_IsVirtualPLTable].ObjectTypeCode = 10003
		and [msdyn_IsVirtualPLTable].AttributeValue = [msdyn_wallsavedquery].[msdyn_IsVirtual]
		and [msdyn_IsVirtualPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_IsVisiblePLTable] on 
		([msdyn_IsVisiblePLTable].AttributeName = 'msdyn_isvisible'
		and [msdyn_IsVisiblePLTable].ObjectTypeCode = 10003
		and [msdyn_IsVisiblePLTable].AttributeValue = [msdyn_wallsavedquery].[msdyn_IsVisible]
		and [msdyn_IsVisiblePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10003
		and [statecodePLTable].AttributeValue = [msdyn_wallsavedquery].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10003
		and [statuscodePLTable].AttributeValue = [msdyn_wallsavedquery].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10003) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [msdyn_wallsavedquery].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_wallsavedquery] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_wallsavedquery] TO [CRMReaderRole]
    AS [dbo];

