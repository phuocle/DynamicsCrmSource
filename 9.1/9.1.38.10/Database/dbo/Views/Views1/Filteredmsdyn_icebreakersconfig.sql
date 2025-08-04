

--
-- report view for msdyn_icebreakersconfig
--
create view dbo.[Filteredmsdyn_icebreakersconfig] 
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
    [msdyn_icebreakersconfigid],
    [msdyn_isadminsettingenabled],
    [msdyn_isadminsettingenabledname],
    [msdyn_isentertainmentcategoryenabled],
    [msdyn_isentertainmentcategoryenabledname],
    [msdyn_isfamilycategoryenabled],
    [msdyn_isfamilycategoryenabledname],
    [msdyn_ishealthcategoryenabled],
    [msdyn_ishealthcategoryenabledname],
    [msdyn_issportscategoryenabled],
    [msdyn_issportscategoryenabledname],
    [msdyn_name],
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
    [msdyn_icebreakersconfig].[CreatedBy],
    [msdyn_icebreakersconfig].[CreatedByName],
    [msdyn_icebreakersconfig].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_icebreakersconfig].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_icebreakersconfig].[CreatedOn],
    [msdyn_icebreakersconfig].[CreatedOnBehalfBy],
    [msdyn_icebreakersconfig].[CreatedOnBehalfByName],
    [msdyn_icebreakersconfig].[CreatedOnBehalfByYomiName],
    [msdyn_icebreakersconfig].[ImportSequenceNumber],
    [msdyn_icebreakersconfig].[ModifiedBy],
    [msdyn_icebreakersconfig].[ModifiedByName],
    [msdyn_icebreakersconfig].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_icebreakersconfig].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_icebreakersconfig].[ModifiedOn],
    [msdyn_icebreakersconfig].[ModifiedOnBehalfBy],
    [msdyn_icebreakersconfig].[ModifiedOnBehalfByName],
    [msdyn_icebreakersconfig].[ModifiedOnBehalfByYomiName],
    [msdyn_icebreakersconfig].[msdyn_aretermsaccepted],
    msdyn_aretermsacceptedPLTable.Value,
    [msdyn_icebreakersconfig].[msdyn_icebreakersconfigId],
    [msdyn_icebreakersconfig].[msdyn_isadminsettingenabled],
    msdyn_isadminsettingenabledPLTable.Value,
    [msdyn_icebreakersconfig].[msdyn_isentertainmentcategoryenabled],
    msdyn_isentertainmentcategoryenabledPLTable.Value,
    [msdyn_icebreakersconfig].[msdyn_isfamilycategoryenabled],
    msdyn_isfamilycategoryenabledPLTable.Value,
    [msdyn_icebreakersconfig].[msdyn_ishealthcategoryenabled],
    msdyn_ishealthcategoryenabledPLTable.Value,
    [msdyn_icebreakersconfig].[msdyn_issportscategoryenabled],
    msdyn_issportscategoryenabledPLTable.Value,
    [msdyn_icebreakersconfig].[msdyn_name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_icebreakersconfig].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_icebreakersconfig].[OverriddenCreatedOn],
    [msdyn_icebreakersconfig].[OwnerId],
    --[msdyn_icebreakersconfig].[OwnerIdDsc]
    0,
    [msdyn_icebreakersconfig].[OwnerIdName],
    [msdyn_icebreakersconfig].[OwnerIdType],
    [msdyn_icebreakersconfig].[OwnerIdYomiName],
    [msdyn_icebreakersconfig].[OwningBusinessUnit],
    [msdyn_icebreakersconfig].[OwningTeam],
    [msdyn_icebreakersconfig].[OwningUser],
    [msdyn_icebreakersconfig].[statecode],
    statecodePLTable.Value,
    [msdyn_icebreakersconfig].[statuscode],
    statuscodePLTable.Value,
    [msdyn_icebreakersconfig].[TimeZoneRuleVersionNumber],
    [msdyn_icebreakersconfig].[UTCConversionTimeZoneCode],
    [msdyn_icebreakersconfig].[VersionNumber]
from msdyn_icebreakersconfig
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_aretermsacceptedPLTable] on 
		([msdyn_aretermsacceptedPLTable].AttributeName = 'msdyn_aretermsaccepted'
		and [msdyn_aretermsacceptedPLTable].ObjectTypeCode = 10107
		and [msdyn_aretermsacceptedPLTable].AttributeValue = [msdyn_icebreakersconfig].[msdyn_aretermsaccepted]
		and [msdyn_aretermsacceptedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_isadminsettingenabledPLTable] on 
		([msdyn_isadminsettingenabledPLTable].AttributeName = 'msdyn_isadminsettingenabled'
		and [msdyn_isadminsettingenabledPLTable].ObjectTypeCode = 10107
		and [msdyn_isadminsettingenabledPLTable].AttributeValue = [msdyn_icebreakersconfig].[msdyn_isadminsettingenabled]
		and [msdyn_isadminsettingenabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_isentertainmentcategoryenabledPLTable] on 
		([msdyn_isentertainmentcategoryenabledPLTable].AttributeName = 'msdyn_isentertainmentcategoryenabled'
		and [msdyn_isentertainmentcategoryenabledPLTable].ObjectTypeCode = 10107
		and [msdyn_isentertainmentcategoryenabledPLTable].AttributeValue = [msdyn_icebreakersconfig].[msdyn_isentertainmentcategoryenabled]
		and [msdyn_isentertainmentcategoryenabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_isfamilycategoryenabledPLTable] on 
		([msdyn_isfamilycategoryenabledPLTable].AttributeName = 'msdyn_isfamilycategoryenabled'
		and [msdyn_isfamilycategoryenabledPLTable].ObjectTypeCode = 10107
		and [msdyn_isfamilycategoryenabledPLTable].AttributeValue = [msdyn_icebreakersconfig].[msdyn_isfamilycategoryenabled]
		and [msdyn_isfamilycategoryenabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_ishealthcategoryenabledPLTable] on 
		([msdyn_ishealthcategoryenabledPLTable].AttributeName = 'msdyn_ishealthcategoryenabled'
		and [msdyn_ishealthcategoryenabledPLTable].ObjectTypeCode = 10107
		and [msdyn_ishealthcategoryenabledPLTable].AttributeValue = [msdyn_icebreakersconfig].[msdyn_ishealthcategoryenabled]
		and [msdyn_ishealthcategoryenabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_issportscategoryenabledPLTable] on 
		([msdyn_issportscategoryenabledPLTable].AttributeName = 'msdyn_issportscategoryenabled'
		and [msdyn_issportscategoryenabledPLTable].ObjectTypeCode = 10107
		and [msdyn_issportscategoryenabledPLTable].AttributeValue = [msdyn_icebreakersconfig].[msdyn_issportscategoryenabled]
		and [msdyn_issportscategoryenabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10107
		and [statecodePLTable].AttributeValue = [msdyn_icebreakersconfig].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10107
		and [statuscodePLTable].AttributeValue = [msdyn_icebreakersconfig].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10107) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_icebreakersconfig].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10107
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
		[msdyn_icebreakersconfig].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10107)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_icebreakersconfig].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_icebreakersconfig].[msdyn_icebreakersconfigId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10107
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_icebreakersconfig] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_icebreakersconfig] TO [CRMReaderRole]
    AS [dbo];

