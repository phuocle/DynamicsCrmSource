

--
-- report view for msdyn_knowledgearticletemplate
--
create view dbo.[Filteredmsdyn_knowledgearticletemplate] 
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
    [msdyn_content],
    [msdyn_description],
    [msdyn_isinternal],
    [msdyn_isinternalname],
    [msdyn_keywords],
    [msdyn_knowledgearticletemplateid],
    [msdyn_languagelocaleid],
    [msdyn_LanguageLocaleIdName],
    [msdyn_name],
    [msdyn_subjectid],
    [msdyn_subjectidname],
    [msdyn_title],
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
    [msdyn_knowledgearticletemplate].[CreatedBy],
    [msdyn_knowledgearticletemplate].[CreatedByName],
    [msdyn_knowledgearticletemplate].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_knowledgearticletemplate].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_knowledgearticletemplate].[CreatedOn],
    [msdyn_knowledgearticletemplate].[CreatedOnBehalfBy],
    [msdyn_knowledgearticletemplate].[CreatedOnBehalfByName],
    [msdyn_knowledgearticletemplate].[CreatedOnBehalfByYomiName],
    [msdyn_knowledgearticletemplate].[ImportSequenceNumber],
    [msdyn_knowledgearticletemplate].[ModifiedBy],
    [msdyn_knowledgearticletemplate].[ModifiedByName],
    [msdyn_knowledgearticletemplate].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_knowledgearticletemplate].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_knowledgearticletemplate].[ModifiedOn],
    [msdyn_knowledgearticletemplate].[ModifiedOnBehalfBy],
    [msdyn_knowledgearticletemplate].[ModifiedOnBehalfByName],
    [msdyn_knowledgearticletemplate].[ModifiedOnBehalfByYomiName],
    [msdyn_knowledgearticletemplate].[msdyn_Content],
    [msdyn_knowledgearticletemplate].[msdyn_Description],
    [msdyn_knowledgearticletemplate].[msdyn_isinternal],
    msdyn_isinternalPLTable.Value,
    [msdyn_knowledgearticletemplate].[msdyn_keywords],
    [msdyn_knowledgearticletemplate].[msdyn_knowledgearticletemplateId],
    [msdyn_knowledgearticletemplate].[msdyn_languagelocaleid],
    [msdyn_knowledgearticletemplate].[msdyn_LanguageLocaleIdName],
    [msdyn_knowledgearticletemplate].[msdyn_name],
    [msdyn_knowledgearticletemplate].[msdyn_subjectid],
    [msdyn_knowledgearticletemplate].[msdyn_subjectidName],
    [msdyn_knowledgearticletemplate].[msdyn_title],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_knowledgearticletemplate].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_knowledgearticletemplate].[OverriddenCreatedOn],
    [msdyn_knowledgearticletemplate].[OwnerId],
    --[msdyn_knowledgearticletemplate].[OwnerIdDsc]
    0,
    [msdyn_knowledgearticletemplate].[OwnerIdName],
    [msdyn_knowledgearticletemplate].[OwnerIdType],
    [msdyn_knowledgearticletemplate].[OwnerIdYomiName],
    [msdyn_knowledgearticletemplate].[OwningBusinessUnit],
    [msdyn_knowledgearticletemplate].[OwningTeam],
    [msdyn_knowledgearticletemplate].[OwningUser],
    [msdyn_knowledgearticletemplate].[statecode],
    statecodePLTable.Value,
    [msdyn_knowledgearticletemplate].[statuscode],
    statuscodePLTable.Value,
    [msdyn_knowledgearticletemplate].[TimeZoneRuleVersionNumber],
    [msdyn_knowledgearticletemplate].[UTCConversionTimeZoneCode],
    [msdyn_knowledgearticletemplate].[VersionNumber]
from msdyn_knowledgearticletemplate
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_isinternalPLTable] on 
		([msdyn_isinternalPLTable].AttributeName = 'msdyn_isinternal'
		and [msdyn_isinternalPLTable].ObjectTypeCode = 10055
		and [msdyn_isinternalPLTable].AttributeValue = [msdyn_knowledgearticletemplate].[msdyn_isinternal]
		and [msdyn_isinternalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10055
		and [statecodePLTable].AttributeValue = [msdyn_knowledgearticletemplate].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10055
		and [statuscodePLTable].AttributeValue = [msdyn_knowledgearticletemplate].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10055) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_knowledgearticletemplate].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10055
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
		[msdyn_knowledgearticletemplate].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10055)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_knowledgearticletemplate].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_knowledgearticletemplate].[msdyn_knowledgearticletemplateId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10055
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_knowledgearticletemplate] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_knowledgearticletemplate] TO [CRMReaderRole]
    AS [dbo];

