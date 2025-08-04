

--
-- report view for goalrollupquery
--
create view dbo.[FilteredGoalRollupQuery] (
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [fetchxml],
    [goalrollupqueryid],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [queryentitytype],
    [queryentitytypename],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [GoalRollupQuery].[CreatedBy],
    [GoalRollupQuery].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([GoalRollupQuery].[CreatedOn],
			us.TimeZoneCode),
        [GoalRollupQuery].[CreatedOn],
    [GoalRollupQuery].[CreatedOnBehalfBy],
    --[GoalRollupQuery].[CreatedOnBehalfByDsc]
    0,
    [GoalRollupQuery].[CreatedOnBehalfByName],
    [GoalRollupQuery].[CreatedOnBehalfByYomiName],
    [GoalRollupQuery].[FetchXml],
    [GoalRollupQuery].[GoalRollupQueryId],
    [GoalRollupQuery].[ImportSequenceNumber],
    [GoalRollupQuery].[ModifiedBy],
    [GoalRollupQuery].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([GoalRollupQuery].[ModifiedOn],
			us.TimeZoneCode),
        [GoalRollupQuery].[ModifiedOn],
    [GoalRollupQuery].[ModifiedOnBehalfBy],
    --[GoalRollupQuery].[ModifiedOnBehalfByDsc]
    0,
    [GoalRollupQuery].[ModifiedOnBehalfByName],
    [GoalRollupQuery].[ModifiedOnBehalfByYomiName],
    [GoalRollupQuery].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([GoalRollupQuery].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [GoalRollupQuery].[OverriddenCreatedOn],
    [GoalRollupQuery].[OwnerId],
    [GoalRollupQuery].[OwnerIdName],
    [GoalRollupQuery].[OwnerIdType],
    [GoalRollupQuery].[OwnerIdYomiName],
    [GoalRollupQuery].[OwningBusinessUnit],
    [GoalRollupQuery].[OwningTeam],
    [GoalRollupQuery].[OwningUser],
    [GoalRollupQuery].[QueryEntityType],
    QueryEntityTypePLTable.Value,
    [GoalRollupQuery].[StateCode],
    StateCodePLTable.Value,
    [GoalRollupQuery].[StatusCode],
    StatusCodePLTable.Value,
    [GoalRollupQuery].[TimeZoneRuleVersionNumber],
    [GoalRollupQuery].[UTCConversionTimeZoneCode],
    [GoalRollupQuery].[VersionNumber]
from GoalRollupQuery
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [QueryEntityTypePLTable] on 
		([QueryEntityTypePLTable].AttributeName = 'queryentitytype'
		and [QueryEntityTypePLTable].ObjectTypeCode = 9602
		and [QueryEntityTypePLTable].AttributeValue = [GoalRollupQuery].[QueryEntityType]
		and [QueryEntityTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9602
		and [StateCodePLTable].AttributeValue = [GoalRollupQuery].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9602
		and [StatusCodePLTable].AttributeValue = [GoalRollupQuery].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9602) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[GoalRollupQuery].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9602
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
		[GoalRollupQuery].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9602)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[GoalRollupQuery].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[GoalRollupQuery].[GoalRollupQueryId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 9602 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredGoalRollupQuery] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredGoalRollupQuery] TO [CRMReaderRole]
    AS [dbo];

