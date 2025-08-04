

--
-- report view for routingruleitem
--
create view dbo.[FilteredRoutingRuleItem] 
(
    [assignobjectid],
    [assignobjectidmodifiedon],
    [assignobjectidmodifiedonutc],
    [assignobjectidname],
    [assignobjectidtype],
    [assignobjectidyominame],
    [componentstate],
    [conditionxml],
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
    [msdyn_routeto],
    [msdyn_routetoname],
    [name],
    [organizationid],
    [organizationidname],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [routedqueueid],
    [routedqueueidname],
    [routingruleid],
    [routingruleidname],
    [routingruleitemid],
    [routingruleitemidunique],
    [sequencenumber],
    [solutionid],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [RoutingRuleItem].[AssignObjectId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RoutingRuleItem].[AssignObjectIdModifiedOn],
			us.TimeZoneCode),
        [RoutingRuleItem].[AssignObjectIdModifiedOn],
    [RoutingRuleItem].[AssignObjectIdName],
    [RoutingRuleItem].[AssignObjectIdType],
    [RoutingRuleItem].[AssignObjectIdYomiName],
    [RoutingRuleItem].[ComponentState],
    [RoutingRuleItem].[ConditionXml],
    [RoutingRuleItem].[CreatedBy],
    [RoutingRuleItem].[CreatedByName],
    [RoutingRuleItem].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RoutingRuleItem].[CreatedOn],
			us.TimeZoneCode),
        [RoutingRuleItem].[CreatedOn],
    [RoutingRuleItem].[CreatedOnBehalfBy],
    [RoutingRuleItem].[CreatedOnBehalfByName],
    [RoutingRuleItem].[CreatedOnBehalfByYomiName],
    [RoutingRuleItem].[Description],
    [RoutingRuleItem].[ExchangeRate],
    [RoutingRuleItem].[IsManaged],
    [RoutingRuleItem].[ModifiedBy],
    [RoutingRuleItem].[ModifiedByName],
    [RoutingRuleItem].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RoutingRuleItem].[ModifiedOn],
			us.TimeZoneCode),
        [RoutingRuleItem].[ModifiedOn],
    [RoutingRuleItem].[ModifiedOnBehalfBy],
    [RoutingRuleItem].[ModifiedOnBehalfByName],
    [RoutingRuleItem].[ModifiedOnBehalfByYomiName],
    [RoutingRuleItem].[msdyn_routeto],
    msdyn_routetoPLTable.Value,
    [RoutingRuleItem].[Name],
    [RoutingRuleItem].[OrganizationId],
    [RoutingRuleItem].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RoutingRuleItem].[OverwriteTime],
			us.TimeZoneCode),
        [RoutingRuleItem].[OverwriteTime],
    [RoutingRuleItem].[OwnerId],
    [RoutingRuleItem].[OwnerIdType],
    [RoutingRuleItem].[OwningBusinessUnit],
    [RoutingRuleItem].[OwningUser],
    [RoutingRuleItem].[RoutedQueueId],
    [RoutingRuleItem].[RoutedQueueIdName],
    [RoutingRuleItem].[RoutingRuleId],
    [RoutingRuleItem].[RoutingRuleIdName],
    [RoutingRuleItem].[RoutingRuleItemId],
    [RoutingRuleItem].[RoutingRuleItemIdUnique],
    [RoutingRuleItem].[SequenceNumber],
    [RoutingRuleItem].[SolutionId],
    [RoutingRuleItem].[TimeZoneRuleVersionNumber],
    [RoutingRuleItem].[TransactionCurrencyId],
    [RoutingRuleItem].[TransactionCurrencyIdName],
    [RoutingRuleItem].[UTCConversionTimeZoneCode],
    [RoutingRuleItem].[VersionNumber]
from RoutingRuleItem
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_routetoPLTable] on 
		([msdyn_routetoPLTable].AttributeName = 'msdyn_routeto'
		and [msdyn_routetoPLTable].ObjectTypeCode = 8199
		and [msdyn_routetoPLTable].AttributeValue = [RoutingRuleItem].[msdyn_routeto]
		and [msdyn_routetoPLTable].LangId = 
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
	[RoutingRuleItem].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 8181
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
		[RoutingRuleItem].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 8181)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[RoutingRuleItem].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[RoutingRuleItem].[RoutingRuleId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 8181
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRoutingRuleItem] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRoutingRuleItem] TO [CRMReaderRole]
    AS [dbo];

