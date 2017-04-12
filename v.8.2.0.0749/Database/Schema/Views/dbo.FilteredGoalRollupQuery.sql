SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for goalrollupquery
--
create view [dbo].[FilteredGoalRollupQuery] (
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
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[GoalRollupQuery].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 9602))
		
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
		[GoalRollupQuery].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9602)
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
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 9602))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredGoalRollupQuery] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredGoalRollupQuery] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
