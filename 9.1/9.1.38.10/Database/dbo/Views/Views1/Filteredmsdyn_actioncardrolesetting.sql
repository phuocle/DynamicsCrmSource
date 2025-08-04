

--
-- report view for msdyn_actioncardrolesetting
--
create view dbo.[Filteredmsdyn_actioncardrolesetting] 
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
    [msdyn_actioncardrolesettingid],
    [msdyn_cardtypeid],
    [msdyn_cardtypeidname],
    [msdyn_isdisabled],
    [msdyn_isdisabledname],
    [msdyn_name],
    [msdyn_roleid],
    [msdyn_roleidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [msdyn_actioncardrolesetting].[CreatedBy],
    [msdyn_actioncardrolesetting].[CreatedByName],
    [msdyn_actioncardrolesetting].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_actioncardrolesetting].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_actioncardrolesetting].[CreatedOn],
    [msdyn_actioncardrolesetting].[CreatedOnBehalfBy],
    [msdyn_actioncardrolesetting].[CreatedOnBehalfByName],
    [msdyn_actioncardrolesetting].[CreatedOnBehalfByYomiName],
    [msdyn_actioncardrolesetting].[ImportSequenceNumber],
    [msdyn_actioncardrolesetting].[ModifiedBy],
    [msdyn_actioncardrolesetting].[ModifiedByName],
    [msdyn_actioncardrolesetting].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_actioncardrolesetting].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_actioncardrolesetting].[ModifiedOn],
    [msdyn_actioncardrolesetting].[ModifiedOnBehalfBy],
    [msdyn_actioncardrolesetting].[ModifiedOnBehalfByName],
    [msdyn_actioncardrolesetting].[ModifiedOnBehalfByYomiName],
    [msdyn_actioncardrolesetting].[msdyn_actioncardrolesettingId],
    [msdyn_actioncardrolesetting].[msdyn_cardtypeid],
    [msdyn_actioncardrolesetting].[msdyn_cardtypeidName],
    [msdyn_actioncardrolesetting].[msdyn_IsDisabled],
    msdyn_IsDisabledPLTable.Value,
    [msdyn_actioncardrolesetting].[msdyn_name],
    [msdyn_actioncardrolesetting].[msdyn_Roleid],
    [msdyn_actioncardrolesetting].[msdyn_RoleidName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_actioncardrolesetting].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_actioncardrolesetting].[OverriddenCreatedOn],
    [msdyn_actioncardrolesetting].[OwnerId],
    --[msdyn_actioncardrolesetting].[OwnerIdDsc]
    0,
    [msdyn_actioncardrolesetting].[OwnerIdName],
    [msdyn_actioncardrolesetting].[OwnerIdType],
    [msdyn_actioncardrolesetting].[OwnerIdYomiName],
    [msdyn_actioncardrolesetting].[OwningBusinessUnit],
    [msdyn_actioncardrolesetting].[OwningTeam],
    [msdyn_actioncardrolesetting].[OwningUser],
    [msdyn_actioncardrolesetting].[statecode],
    statecodePLTable.Value,
    [msdyn_actioncardrolesetting].[statuscode],
    statuscodePLTable.Value,
    [msdyn_actioncardrolesetting].[TimeZoneRuleVersionNumber],
    [msdyn_actioncardrolesetting].[UTCConversionTimeZoneCode],
    [msdyn_actioncardrolesetting].[VersionNumber]
from msdyn_actioncardrolesetting
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_IsDisabledPLTable] on 
		([msdyn_IsDisabledPLTable].AttributeName = 'msdyn_isdisabled'
		and [msdyn_IsDisabledPLTable].ObjectTypeCode = 10095
		and [msdyn_IsDisabledPLTable].AttributeValue = [msdyn_actioncardrolesetting].[msdyn_IsDisabled]
		and [msdyn_IsDisabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10095
		and [statecodePLTable].AttributeValue = [msdyn_actioncardrolesetting].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10095
		and [statuscodePLTable].AttributeValue = [msdyn_actioncardrolesetting].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10095) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_actioncardrolesetting].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10095
		)
		
	-- role based access
	or 
	
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[msdyn_actioncardrolesetting].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10095)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_actioncardrolesetting].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_actioncardrolesetting].[msdyn_actioncardrolesettingId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10095
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_actioncardrolesetting] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_actioncardrolesetting] TO [CRMReaderRole]
    AS [dbo];

