

--
-- report view for msdyn_entityrankingrule
--
create view dbo.[Filteredmsdyn_entityrankingrule] 
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
    [msdyn_enabled],
    [msdyn_enabledname],
    [msdyn_entityname],
    [msdyn_entityrankingruleid],
    [msdyn_fetchxmlrule],
    [msdyn_name],
    [msdyn_objecttypecode],
    [msdyn_oobrule],
    [msdyn_oobrulename],
    [msdyn_overriddenrank],
    [msdyn_rulepriority],
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
    [msdyn_entityrankingrule].[CreatedBy],
    [msdyn_entityrankingrule].[CreatedByName],
    [msdyn_entityrankingrule].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_entityrankingrule].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_entityrankingrule].[CreatedOn],
    [msdyn_entityrankingrule].[CreatedOnBehalfBy],
    [msdyn_entityrankingrule].[CreatedOnBehalfByName],
    [msdyn_entityrankingrule].[CreatedOnBehalfByYomiName],
    [msdyn_entityrankingrule].[ImportSequenceNumber],
    [msdyn_entityrankingrule].[ModifiedBy],
    [msdyn_entityrankingrule].[ModifiedByName],
    [msdyn_entityrankingrule].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_entityrankingrule].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_entityrankingrule].[ModifiedOn],
    [msdyn_entityrankingrule].[ModifiedOnBehalfBy],
    [msdyn_entityrankingrule].[ModifiedOnBehalfByName],
    [msdyn_entityrankingrule].[ModifiedOnBehalfByYomiName],
    [msdyn_entityrankingrule].[msdyn_enabled],
    msdyn_enabledPLTable.Value,
    [msdyn_entityrankingrule].[msdyn_entityname],
    [msdyn_entityrankingrule].[msdyn_entityrankingruleId],
    [msdyn_entityrankingrule].[msdyn_FetchXmlRule],
    [msdyn_entityrankingrule].[msdyn_name],
    [msdyn_entityrankingrule].[msdyn_ObjectTypeCode],
    [msdyn_entityrankingrule].[msdyn_OOBRule],
    msdyn_OOBRulePLTable.Value,
    [msdyn_entityrankingrule].[msdyn_overriddenrank],
    [msdyn_entityrankingrule].[msdyn_RulePriority],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_entityrankingrule].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_entityrankingrule].[OverriddenCreatedOn],
    [msdyn_entityrankingrule].[OwnerId],
    --[msdyn_entityrankingrule].[OwnerIdDsc]
    0,
    [msdyn_entityrankingrule].[OwnerIdName],
    [msdyn_entityrankingrule].[OwnerIdType],
    [msdyn_entityrankingrule].[OwnerIdYomiName],
    [msdyn_entityrankingrule].[OwningBusinessUnit],
    [msdyn_entityrankingrule].[OwningTeam],
    [msdyn_entityrankingrule].[OwningUser],
    [msdyn_entityrankingrule].[statecode],
    statecodePLTable.Value,
    [msdyn_entityrankingrule].[statuscode],
    statuscodePLTable.Value,
    [msdyn_entityrankingrule].[TimeZoneRuleVersionNumber],
    [msdyn_entityrankingrule].[UTCConversionTimeZoneCode],
    [msdyn_entityrankingrule].[VersionNumber]
from msdyn_entityrankingrule
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_enabledPLTable] on 
		([msdyn_enabledPLTable].AttributeName = 'msdyn_enabled'
		and [msdyn_enabledPLTable].ObjectTypeCode = 10096
		and [msdyn_enabledPLTable].AttributeValue = [msdyn_entityrankingrule].[msdyn_enabled]
		and [msdyn_enabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_OOBRulePLTable] on 
		([msdyn_OOBRulePLTable].AttributeName = 'msdyn_oobrule'
		and [msdyn_OOBRulePLTable].ObjectTypeCode = 10096
		and [msdyn_OOBRulePLTable].AttributeValue = [msdyn_entityrankingrule].[msdyn_OOBRule]
		and [msdyn_OOBRulePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10096
		and [statecodePLTable].AttributeValue = [msdyn_entityrankingrule].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10096
		and [statuscodePLTable].AttributeValue = [msdyn_entityrankingrule].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10096) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_entityrankingrule].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10096
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
		[msdyn_entityrankingrule].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10096)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_entityrankingrule].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_entityrankingrule].[msdyn_entityrankingruleId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10096
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_entityrankingrule] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_entityrankingrule] TO [CRMReaderRole]
    AS [dbo];

