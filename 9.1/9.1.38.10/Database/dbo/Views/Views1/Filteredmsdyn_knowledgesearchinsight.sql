

--
-- report view for msdyn_knowledgesearchinsight
--
create view dbo.[Filteredmsdyn_knowledgesearchinsight] 
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
    [msdyn_applicationname],
    [msdyn_correlationid],
    [msdyn_customcontrolid],
    [msdyn_entityrecordid],
    [msdyn_entitytype],
    [msdyn_filters],
    [msdyn_initiatedby],
    [msdyn_knowledgesearchinsightid],
    [msdyn_responsetime],
    [msdyn_resultcount],
    [msdyn_searchproviderid],
    [msdyn_searchprovidername],
    [msdyn_searchterm],
    [msdyn_searchtype],
    [msdyn_sortby],
    [msdyn_timestamp],
    [msdyn_timestamputc],
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
    [msdyn_knowledgesearchinsight].[CreatedBy],
    [msdyn_knowledgesearchinsight].[CreatedByName],
    [msdyn_knowledgesearchinsight].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_knowledgesearchinsight].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_knowledgesearchinsight].[CreatedOn],
    [msdyn_knowledgesearchinsight].[CreatedOnBehalfBy],
    [msdyn_knowledgesearchinsight].[CreatedOnBehalfByName],
    [msdyn_knowledgesearchinsight].[CreatedOnBehalfByYomiName],
    [msdyn_knowledgesearchinsight].[ImportSequenceNumber],
    [msdyn_knowledgesearchinsight].[ModifiedBy],
    [msdyn_knowledgesearchinsight].[ModifiedByName],
    [msdyn_knowledgesearchinsight].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_knowledgesearchinsight].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_knowledgesearchinsight].[ModifiedOn],
    [msdyn_knowledgesearchinsight].[ModifiedOnBehalfBy],
    [msdyn_knowledgesearchinsight].[ModifiedOnBehalfByName],
    [msdyn_knowledgesearchinsight].[ModifiedOnBehalfByYomiName],
    [msdyn_knowledgesearchinsight].[msdyn_ApplicationName],
    [msdyn_knowledgesearchinsight].[msdyn_CorrelationId],
    [msdyn_knowledgesearchinsight].[msdyn_CustomControlId],
    [msdyn_knowledgesearchinsight].[msdyn_EntityRecordId],
    [msdyn_knowledgesearchinsight].[msdyn_EntityType],
    [msdyn_knowledgesearchinsight].[msdyn_Filters],
    [msdyn_knowledgesearchinsight].[msdyn_InitiatedBy],
    [msdyn_knowledgesearchinsight].[msdyn_knowledgesearchinsightId],
    [msdyn_knowledgesearchinsight].[msdyn_ResponseTime],
    [msdyn_knowledgesearchinsight].[msdyn_ResultCount],
    [msdyn_knowledgesearchinsight].[msdyn_SearchProviderId],
    [msdyn_knowledgesearchinsight].[msdyn_SearchProviderName],
    [msdyn_knowledgesearchinsight].[msdyn_SearchTerm],
    [msdyn_knowledgesearchinsight].[msdyn_SearchType],
    [msdyn_knowledgesearchinsight].[msdyn_SortBy],
    [msdyn_knowledgesearchinsight].[msdyn_TimeStamp],
        [msdyn_knowledgesearchinsight].[msdyn_TimeStamp],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_knowledgesearchinsight].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_knowledgesearchinsight].[OverriddenCreatedOn],
    [msdyn_knowledgesearchinsight].[OwnerId],
    --[msdyn_knowledgesearchinsight].[OwnerIdDsc]
    0,
    [msdyn_knowledgesearchinsight].[OwnerIdName],
    [msdyn_knowledgesearchinsight].[OwnerIdType],
    [msdyn_knowledgesearchinsight].[OwnerIdYomiName],
    [msdyn_knowledgesearchinsight].[OwningBusinessUnit],
    [msdyn_knowledgesearchinsight].[OwningTeam],
    [msdyn_knowledgesearchinsight].[OwningUser],
    [msdyn_knowledgesearchinsight].[statecode],
    statecodePLTable.Value,
    [msdyn_knowledgesearchinsight].[statuscode],
    statuscodePLTable.Value,
    [msdyn_knowledgesearchinsight].[TimeZoneRuleVersionNumber],
    [msdyn_knowledgesearchinsight].[UTCConversionTimeZoneCode],
    [msdyn_knowledgesearchinsight].[VersionNumber]
from msdyn_knowledgesearchinsight
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10054
		and [statecodePLTable].AttributeValue = [msdyn_knowledgesearchinsight].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10054
		and [statuscodePLTable].AttributeValue = [msdyn_knowledgesearchinsight].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10054) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_knowledgesearchinsight].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10054
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
		[msdyn_knowledgesearchinsight].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10054)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_knowledgesearchinsight].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_knowledgesearchinsight].[msdyn_knowledgesearchinsightId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10054
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_knowledgesearchinsight] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_knowledgesearchinsight] TO [CRMReaderRole]
    AS [dbo];

