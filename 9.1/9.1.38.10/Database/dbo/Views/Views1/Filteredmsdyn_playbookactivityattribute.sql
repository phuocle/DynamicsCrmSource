

--
-- report view for msdyn_playbookactivityattribute
--
create view dbo.[Filteredmsdyn_playbookactivityattribute] 
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
    [msdyn_attributeLogicalName],
    [msdyn_attributeType],
    [msdyn_attributetypename],
    [msdyn_attributeValue],
    [msdyn_playbookactivityattributeid],
    [msdyn_playbookactivityid],
    [msdyn_playbookactivityidname],
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
    [msdyn_playbookactivityattribute].[CreatedBy],
    [msdyn_playbookactivityattribute].[CreatedByName],
    [msdyn_playbookactivityattribute].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookactivityattribute].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_playbookactivityattribute].[CreatedOn],
    [msdyn_playbookactivityattribute].[CreatedOnBehalfBy],
    [msdyn_playbookactivityattribute].[CreatedOnBehalfByName],
    [msdyn_playbookactivityattribute].[CreatedOnBehalfByYomiName],
    [msdyn_playbookactivityattribute].[ImportSequenceNumber],
    [msdyn_playbookactivityattribute].[ModifiedBy],
    [msdyn_playbookactivityattribute].[ModifiedByName],
    [msdyn_playbookactivityattribute].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookactivityattribute].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_playbookactivityattribute].[ModifiedOn],
    [msdyn_playbookactivityattribute].[ModifiedOnBehalfBy],
    [msdyn_playbookactivityattribute].[ModifiedOnBehalfByName],
    [msdyn_playbookactivityattribute].[ModifiedOnBehalfByYomiName],
    [msdyn_playbookactivityattribute].[msdyn_attributeLogicalName],
    [msdyn_playbookactivityattribute].[msdyn_attributeType],
    msdyn_attributeTypePLTable.Value,
    [msdyn_playbookactivityattribute].[msdyn_attributeValue],
    [msdyn_playbookactivityattribute].[msdyn_playbookactivityattributeId],
    [msdyn_playbookactivityattribute].[msdyn_playbookactivityid],
    [msdyn_playbookactivityattribute].[msdyn_playbookactivityidName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookactivityattribute].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_playbookactivityattribute].[OverriddenCreatedOn],
    [msdyn_playbookactivityattribute].[OwnerId],
    --[msdyn_playbookactivityattribute].[OwnerIdDsc]
    0,
    [msdyn_playbookactivityattribute].[OwnerIdName],
    [msdyn_playbookactivityattribute].[OwnerIdType],
    [msdyn_playbookactivityattribute].[OwnerIdYomiName],
    [msdyn_playbookactivityattribute].[OwningBusinessUnit],
    [msdyn_playbookactivityattribute].[OwningTeam],
    [msdyn_playbookactivityattribute].[OwningUser],
    [msdyn_playbookactivityattribute].[statecode],
    statecodePLTable.Value,
    [msdyn_playbookactivityattribute].[statuscode],
    statuscodePLTable.Value,
    [msdyn_playbookactivityattribute].[TimeZoneRuleVersionNumber],
    [msdyn_playbookactivityattribute].[UTCConversionTimeZoneCode],
    [msdyn_playbookactivityattribute].[VersionNumber]
from msdyn_playbookactivityattribute
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_attributeTypePLTable] on 
		([msdyn_attributeTypePLTable].AttributeName = 'msdyn_attributeType'
		and [msdyn_attributeTypePLTable].ObjectTypeCode = 10087
		and [msdyn_attributeTypePLTable].AttributeValue = [msdyn_playbookactivityattribute].[msdyn_attributeType]
		and [msdyn_attributeTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10087
		and [statecodePLTable].AttributeValue = [msdyn_playbookactivityattribute].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10087
		and [statuscodePLTable].AttributeValue = [msdyn_playbookactivityattribute].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10087) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_playbookactivityattribute].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10087
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
		[msdyn_playbookactivityattribute].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10087)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_playbookactivityattribute].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_playbookactivityattribute].[msdyn_playbookactivityattributeId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10087
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_playbookactivityattribute] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_playbookactivityattribute] TO [CRMReaderRole]
    AS [dbo];

