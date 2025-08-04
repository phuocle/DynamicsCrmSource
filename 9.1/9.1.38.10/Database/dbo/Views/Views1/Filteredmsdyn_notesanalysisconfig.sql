

--
-- report view for msdyn_notesanalysisconfig
--
create view dbo.[Filteredmsdyn_notesanalysisconfig] 
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
    [msdyn_aretermsaccepted],
    [msdyn_aretermsacceptedname],
    [msdyn_isadminsettingenabled],
    [msdyn_isadminsettingenabledname],
    [msdyn_name],
    [msdyn_notesanalysisconfigid],
    [msdyn_throttlelimit],
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
    [msdyn_notesanalysisconfig].[CreatedBy],
    [msdyn_notesanalysisconfig].[CreatedByName],
    [msdyn_notesanalysisconfig].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_notesanalysisconfig].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_notesanalysisconfig].[CreatedOn],
    [msdyn_notesanalysisconfig].[CreatedOnBehalfBy],
    [msdyn_notesanalysisconfig].[CreatedOnBehalfByName],
    [msdyn_notesanalysisconfig].[CreatedOnBehalfByYomiName],
    [msdyn_notesanalysisconfig].[ImportSequenceNumber],
    [msdyn_notesanalysisconfig].[ModifiedBy],
    [msdyn_notesanalysisconfig].[ModifiedByName],
    [msdyn_notesanalysisconfig].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_notesanalysisconfig].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_notesanalysisconfig].[ModifiedOn],
    [msdyn_notesanalysisconfig].[ModifiedOnBehalfBy],
    [msdyn_notesanalysisconfig].[ModifiedOnBehalfByName],
    [msdyn_notesanalysisconfig].[ModifiedOnBehalfByYomiName],
    [msdyn_notesanalysisconfig].[msdyn_aretermsaccepted],
    msdyn_aretermsacceptedPLTable.Value,
    [msdyn_notesanalysisconfig].[msdyn_isadminsettingenabled],
    msdyn_isadminsettingenabledPLTable.Value,
    [msdyn_notesanalysisconfig].[msdyn_name],
    [msdyn_notesanalysisconfig].[msdyn_notesanalysisconfigId],
    [msdyn_notesanalysisconfig].[msdyn_throttlelimit],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_notesanalysisconfig].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_notesanalysisconfig].[OverriddenCreatedOn],
    [msdyn_notesanalysisconfig].[OwnerId],
    --[msdyn_notesanalysisconfig].[OwnerIdDsc]
    0,
    [msdyn_notesanalysisconfig].[OwnerIdName],
    [msdyn_notesanalysisconfig].[OwnerIdType],
    [msdyn_notesanalysisconfig].[OwnerIdYomiName],
    [msdyn_notesanalysisconfig].[OwningBusinessUnit],
    [msdyn_notesanalysisconfig].[OwningTeam],
    [msdyn_notesanalysisconfig].[OwningUser],
    [msdyn_notesanalysisconfig].[statecode],
    statecodePLTable.Value,
    [msdyn_notesanalysisconfig].[statuscode],
    statuscodePLTable.Value,
    [msdyn_notesanalysisconfig].[TimeZoneRuleVersionNumber],
    [msdyn_notesanalysisconfig].[UTCConversionTimeZoneCode],
    [msdyn_notesanalysisconfig].[VersionNumber]
from msdyn_notesanalysisconfig
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_aretermsacceptedPLTable] on 
		([msdyn_aretermsacceptedPLTable].AttributeName = 'msdyn_aretermsaccepted'
		and [msdyn_aretermsacceptedPLTable].ObjectTypeCode = 10106
		and [msdyn_aretermsacceptedPLTable].AttributeValue = [msdyn_notesanalysisconfig].[msdyn_aretermsaccepted]
		and [msdyn_aretermsacceptedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_isadminsettingenabledPLTable] on 
		([msdyn_isadminsettingenabledPLTable].AttributeName = 'msdyn_isadminsettingenabled'
		and [msdyn_isadminsettingenabledPLTable].ObjectTypeCode = 10106
		and [msdyn_isadminsettingenabledPLTable].AttributeValue = [msdyn_notesanalysisconfig].[msdyn_isadminsettingenabled]
		and [msdyn_isadminsettingenabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10106
		and [statecodePLTable].AttributeValue = [msdyn_notesanalysisconfig].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10106
		and [statuscodePLTable].AttributeValue = [msdyn_notesanalysisconfig].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10106) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_notesanalysisconfig].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10106
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
		[msdyn_notesanalysisconfig].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10106)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_notesanalysisconfig].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_notesanalysisconfig].[msdyn_notesanalysisconfigId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10106
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_notesanalysisconfig] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_notesanalysisconfig] TO [CRMReaderRole]
    AS [dbo];

