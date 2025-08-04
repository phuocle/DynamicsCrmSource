

--
-- report view for msdyn_knowledgearticleimage
--
create view dbo.[Filteredmsdyn_knowledgearticleimage] 
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
    [msdyn_blobfile],
    [msdyn_blobfile_name],
    [msdyn_filename],
    [msdyn_knowledgearticleimageid],
    [msdyn_parentknowledgearticleid],
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
    [msdyn_knowledgearticleimage].[CreatedBy],
    [msdyn_knowledgearticleimage].[CreatedByName],
    [msdyn_knowledgearticleimage].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_knowledgearticleimage].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_knowledgearticleimage].[CreatedOn],
    [msdyn_knowledgearticleimage].[CreatedOnBehalfBy],
    [msdyn_knowledgearticleimage].[CreatedOnBehalfByName],
    [msdyn_knowledgearticleimage].[CreatedOnBehalfByYomiName],
    [msdyn_knowledgearticleimage].[ImportSequenceNumber],
    [msdyn_knowledgearticleimage].[ModifiedBy],
    [msdyn_knowledgearticleimage].[ModifiedByName],
    [msdyn_knowledgearticleimage].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_knowledgearticleimage].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_knowledgearticleimage].[ModifiedOn],
    [msdyn_knowledgearticleimage].[ModifiedOnBehalfBy],
    [msdyn_knowledgearticleimage].[ModifiedOnBehalfByName],
    [msdyn_knowledgearticleimage].[ModifiedOnBehalfByYomiName],
    [msdyn_knowledgearticleimage].[msdyn_BlobFile],
    [msdyn_knowledgearticleimage].[msdyn_BlobFile_Name],
    [msdyn_knowledgearticleimage].[msdyn_FileName],
    [msdyn_knowledgearticleimage].[msdyn_knowledgearticleimageId],
    [msdyn_knowledgearticleimage].[msdyn_ParentKnowledgeArticleID],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_knowledgearticleimage].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_knowledgearticleimage].[OverriddenCreatedOn],
    [msdyn_knowledgearticleimage].[OwnerId],
    --[msdyn_knowledgearticleimage].[OwnerIdDsc]
    0,
    [msdyn_knowledgearticleimage].[OwnerIdName],
    [msdyn_knowledgearticleimage].[OwnerIdType],
    [msdyn_knowledgearticleimage].[OwnerIdYomiName],
    [msdyn_knowledgearticleimage].[OwningBusinessUnit],
    [msdyn_knowledgearticleimage].[OwningTeam],
    [msdyn_knowledgearticleimage].[OwningUser],
    [msdyn_knowledgearticleimage].[statecode],
    statecodePLTable.Value,
    [msdyn_knowledgearticleimage].[statuscode],
    statuscodePLTable.Value,
    [msdyn_knowledgearticleimage].[TimeZoneRuleVersionNumber],
    [msdyn_knowledgearticleimage].[UTCConversionTimeZoneCode],
    [msdyn_knowledgearticleimage].[VersionNumber]
from msdyn_knowledgearticleimage
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10052
		and [statecodePLTable].AttributeValue = [msdyn_knowledgearticleimage].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10052
		and [statuscodePLTable].AttributeValue = [msdyn_knowledgearticleimage].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10052) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_knowledgearticleimage].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10052
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
		[msdyn_knowledgearticleimage].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10052)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_knowledgearticleimage].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_knowledgearticleimage].[msdyn_knowledgearticleimageId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10052
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_knowledgearticleimage] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_knowledgearticleimage] TO [CRMReaderRole]
    AS [dbo];

