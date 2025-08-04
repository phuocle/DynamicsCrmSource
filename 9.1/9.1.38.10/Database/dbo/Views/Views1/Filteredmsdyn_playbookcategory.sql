

--
-- report view for msdyn_playbookcategory
--
create view dbo.[Filteredmsdyn_playbookcategory] 
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
    [msdyn_description],
    [msdyn_name],
    [msdyn_playbookcategoryid],
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
    [msdyn_playbookcategory].[CreatedBy],
    [msdyn_playbookcategory].[CreatedByName],
    [msdyn_playbookcategory].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookcategory].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_playbookcategory].[CreatedOn],
    [msdyn_playbookcategory].[CreatedOnBehalfBy],
    [msdyn_playbookcategory].[CreatedOnBehalfByName],
    [msdyn_playbookcategory].[CreatedOnBehalfByYomiName],
    [msdyn_playbookcategory].[ImportSequenceNumber],
    [msdyn_playbookcategory].[ModifiedBy],
    [msdyn_playbookcategory].[ModifiedByName],
    [msdyn_playbookcategory].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookcategory].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_playbookcategory].[ModifiedOn],
    [msdyn_playbookcategory].[ModifiedOnBehalfBy],
    [msdyn_playbookcategory].[ModifiedOnBehalfByName],
    [msdyn_playbookcategory].[ModifiedOnBehalfByYomiName],
    [msdyn_playbookcategory].[msdyn_Description],
    [msdyn_playbookcategory].[msdyn_name],
    [msdyn_playbookcategory].[msdyn_playbookcategoryId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookcategory].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_playbookcategory].[OverriddenCreatedOn],
    [msdyn_playbookcategory].[OwnerId],
    --[msdyn_playbookcategory].[OwnerIdDsc]
    0,
    [msdyn_playbookcategory].[OwnerIdName],
    [msdyn_playbookcategory].[OwnerIdType],
    [msdyn_playbookcategory].[OwnerIdYomiName],
    [msdyn_playbookcategory].[OwningBusinessUnit],
    [msdyn_playbookcategory].[OwningTeam],
    [msdyn_playbookcategory].[OwningUser],
    [msdyn_playbookcategory].[statecode],
    statecodePLTable.Value,
    [msdyn_playbookcategory].[statuscode],
    statuscodePLTable.Value,
    [msdyn_playbookcategory].[TimeZoneRuleVersionNumber],
    [msdyn_playbookcategory].[UTCConversionTimeZoneCode],
    [msdyn_playbookcategory].[VersionNumber]
from msdyn_playbookcategory
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10088
		and [statecodePLTable].AttributeValue = [msdyn_playbookcategory].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10088
		and [statuscodePLTable].AttributeValue = [msdyn_playbookcategory].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10088) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_playbookcategory].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10088
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
		[msdyn_playbookcategory].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10088)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_playbookcategory].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_playbookcategory].[msdyn_playbookcategoryId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10088
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_playbookcategory] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_playbookcategory] TO [CRMReaderRole]
    AS [dbo];

