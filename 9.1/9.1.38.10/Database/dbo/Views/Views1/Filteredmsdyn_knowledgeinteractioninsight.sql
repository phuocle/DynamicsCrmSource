

--
-- report view for msdyn_knowledgeinteractioninsight
--
create view dbo.[Filteredmsdyn_knowledgeinteractioninsight] 
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
    [msdyn_articlerank],
    [msdyn_articlerecordid],
    [msdyn_articlerelevance],
    [msdyn_interactioncontext],
    [msdyn_interactiontype],
    [msdyn_knowledgeinteractioninsightid],
    [msdyn_knowledgeoperationid],
    [msdyn_knowledgeoperationtype],
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
    [msdyn_knowledgeinteractioninsight].[CreatedBy],
    [msdyn_knowledgeinteractioninsight].[CreatedByName],
    [msdyn_knowledgeinteractioninsight].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_knowledgeinteractioninsight].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_knowledgeinteractioninsight].[CreatedOn],
    [msdyn_knowledgeinteractioninsight].[CreatedOnBehalfBy],
    [msdyn_knowledgeinteractioninsight].[CreatedOnBehalfByName],
    [msdyn_knowledgeinteractioninsight].[CreatedOnBehalfByYomiName],
    [msdyn_knowledgeinteractioninsight].[ImportSequenceNumber],
    [msdyn_knowledgeinteractioninsight].[ModifiedBy],
    [msdyn_knowledgeinteractioninsight].[ModifiedByName],
    [msdyn_knowledgeinteractioninsight].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_knowledgeinteractioninsight].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_knowledgeinteractioninsight].[ModifiedOn],
    [msdyn_knowledgeinteractioninsight].[ModifiedOnBehalfBy],
    [msdyn_knowledgeinteractioninsight].[ModifiedOnBehalfByName],
    [msdyn_knowledgeinteractioninsight].[ModifiedOnBehalfByYomiName],
    [msdyn_knowledgeinteractioninsight].[msdyn_ArticleRank],
    [msdyn_knowledgeinteractioninsight].[msdyn_ArticleRecordId],
    [msdyn_knowledgeinteractioninsight].[msdyn_ArticleRelevance],
    [msdyn_knowledgeinteractioninsight].[msdyn_InteractionContext],
    [msdyn_knowledgeinteractioninsight].[msdyn_InteractionType],
    [msdyn_knowledgeinteractioninsight].[msdyn_knowledgeinteractioninsightId],
    [msdyn_knowledgeinteractioninsight].[msdyn_KnowledgeOperationId],
    [msdyn_knowledgeinteractioninsight].[msdyn_KnowledgeOperationType],
    [msdyn_knowledgeinteractioninsight].[msdyn_TimeStamp],
        [msdyn_knowledgeinteractioninsight].[msdyn_TimeStamp],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_knowledgeinteractioninsight].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_knowledgeinteractioninsight].[OverriddenCreatedOn],
    [msdyn_knowledgeinteractioninsight].[OwnerId],
    --[msdyn_knowledgeinteractioninsight].[OwnerIdDsc]
    0,
    [msdyn_knowledgeinteractioninsight].[OwnerIdName],
    [msdyn_knowledgeinteractioninsight].[OwnerIdType],
    [msdyn_knowledgeinteractioninsight].[OwnerIdYomiName],
    [msdyn_knowledgeinteractioninsight].[OwningBusinessUnit],
    [msdyn_knowledgeinteractioninsight].[OwningTeam],
    [msdyn_knowledgeinteractioninsight].[OwningUser],
    [msdyn_knowledgeinteractioninsight].[statecode],
    statecodePLTable.Value,
    [msdyn_knowledgeinteractioninsight].[statuscode],
    statuscodePLTable.Value,
    [msdyn_knowledgeinteractioninsight].[TimeZoneRuleVersionNumber],
    [msdyn_knowledgeinteractioninsight].[UTCConversionTimeZoneCode],
    [msdyn_knowledgeinteractioninsight].[VersionNumber]
from msdyn_knowledgeinteractioninsight
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10053
		and [statecodePLTable].AttributeValue = [msdyn_knowledgeinteractioninsight].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10053
		and [statuscodePLTable].AttributeValue = [msdyn_knowledgeinteractioninsight].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10053) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_knowledgeinteractioninsight].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10053
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
		[msdyn_knowledgeinteractioninsight].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10053)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_knowledgeinteractioninsight].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_knowledgeinteractioninsight].[msdyn_knowledgeinteractioninsightId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10053
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_knowledgeinteractioninsight] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_knowledgeinteractioninsight] TO [CRMReaderRole]
    AS [dbo];

