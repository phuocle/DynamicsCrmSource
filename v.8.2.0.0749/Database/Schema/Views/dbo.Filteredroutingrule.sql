SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for routingrule
--
create view [dbo].[Filteredroutingrule] (
    [componentstate],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [exchangerate],
    [ismanaged],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationidname],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [routingruleid],
    [routingruleidunique],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber],
    [workflowid],
    [workflowidname]
) with view_metadata as
select
    [RoutingRule].[ComponentState],
    [RoutingRule].[CreatedBy],
    [RoutingRule].[CreatedByName],
    [RoutingRule].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RoutingRule].[CreatedOn],
			us.TimeZoneCode),
        [RoutingRule].[CreatedOn],
    [RoutingRule].[CreatedOnBehalfBy],
    [RoutingRule].[CreatedOnBehalfByName],
    [RoutingRule].[CreatedOnBehalfByYomiName],
    [RoutingRule].[Description],
    [RoutingRule].[ExchangeRate],
    [RoutingRule].[IsManaged],
    [RoutingRule].[ModifiedBy],
    [RoutingRule].[ModifiedByName],
    [RoutingRule].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RoutingRule].[ModifiedOn],
			us.TimeZoneCode),
        [RoutingRule].[ModifiedOn],
    [RoutingRule].[ModifiedOnBehalfBy],
    [RoutingRule].[ModifiedOnBehalfByName],
    [RoutingRule].[ModifiedOnBehalfByYomiName],
    [RoutingRule].[Name],
    [RoutingRule].[OrganizationId],
    [RoutingRule].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RoutingRule].[OverwriteTime],
			us.TimeZoneCode),
        [RoutingRule].[OverwriteTime],
    [RoutingRule].[OwnerId],
    [RoutingRule].[OwnerIdName],
    [RoutingRule].[OwnerIdType],
    [RoutingRule].[OwnerIdYomiName],
    [RoutingRule].[OwningBusinessUnit],
    [RoutingRule].[OwningTeam],
    [RoutingRule].[OwningUser],
    [RoutingRule].[RoutingRuleId],
    [RoutingRule].[RoutingRuleIdUnique],
    [RoutingRule].[SolutionId],
    [RoutingRule].[StateCode],
    StateCodePLTable.Value,
    [RoutingRule].[StatusCode],
    StatusCodePLTable.Value,
    [RoutingRule].[TimeZoneRuleVersionNumber],
    [RoutingRule].[TransactionCurrencyId],
    [RoutingRule].[TransactionCurrencyIdName],
    [RoutingRule].[UTCConversionTimeZoneCode],
    [RoutingRule].[VersionNumber],
    [RoutingRule].[WorkflowId],
    [RoutingRule].[WorkflowIdName]
from RoutingRule
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 8181
		and [StateCodePLTable].AttributeValue = [RoutingRule].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 8181
		and [StatusCodePLTable].AttributeValue = [RoutingRule].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(8181) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[RoutingRule].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 8181))
		
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
		[RoutingRule].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 8181)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[RoutingRule].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[RoutingRule].[RoutingRuleId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 8181))
	)
)
GO
GRANT SELECT ON  [dbo].[Filteredroutingrule] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[Filteredroutingrule] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
