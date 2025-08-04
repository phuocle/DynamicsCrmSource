

--
-- report view for msdyn_playbookinstance
--
create view dbo.[Filteredmsdyn_playbookinstance] 
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
    [msdyn_activitiesassociated],
    [msdyn_activitiesclosed],
    [msdyn_categoryid],
    [msdyn_categoryidname],
    [msdyn_estimatedclose],
    [msdyn_estimatedcloseutc],
    [msdyn_evaluateactivityclosure],
    [msdyn_evaluateactivityclosurename],
    [msdyn_name],
    [msdyn_playbookinstanceid],
    [msdyn_playbooktemplateid],
    [msdyn_playbooktemplateidname],
    [msdyn_trackprogress],
    [msdyn_trackprogressname],
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
    [regarding],
    [regardingidname],
    [regardingobjecttypecode],
    [regardingyominame],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [msdyn_playbookinstance].[CreatedBy],
    [msdyn_playbookinstance].[CreatedByName],
    [msdyn_playbookinstance].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookinstance].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_playbookinstance].[CreatedOn],
    [msdyn_playbookinstance].[CreatedOnBehalfBy],
    [msdyn_playbookinstance].[CreatedOnBehalfByName],
    [msdyn_playbookinstance].[CreatedOnBehalfByYomiName],
    [msdyn_playbookinstance].[ImportSequenceNumber],
    [msdyn_playbookinstance].[ModifiedBy],
    [msdyn_playbookinstance].[ModifiedByName],
    [msdyn_playbookinstance].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookinstance].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_playbookinstance].[ModifiedOn],
    [msdyn_playbookinstance].[ModifiedOnBehalfBy],
    [msdyn_playbookinstance].[ModifiedOnBehalfByName],
    [msdyn_playbookinstance].[ModifiedOnBehalfByYomiName],
    [msdyn_playbookinstance].[msdyn_activitiesassociated],
    [msdyn_playbookinstance].[msdyn_activitiesclosed],
    [msdyn_playbookinstance].[msdyn_categoryid],
    [msdyn_playbookinstance].[msdyn_categoryidName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookinstance].[msdyn_estimatedclose],
			us.TimeZoneCode),
        [msdyn_playbookinstance].[msdyn_estimatedclose],
    [msdyn_playbookinstance].[msdyn_evaluateactivityclosure],
    msdyn_evaluateactivityclosurePLTable.Value,
    [msdyn_playbookinstance].[msdyn_name],
    [msdyn_playbookinstance].[msdyn_playbookinstanceId],
    [msdyn_playbookinstance].[msdyn_playbooktemplateid],
    [msdyn_playbookinstance].[msdyn_playbooktemplateidName],
    [msdyn_playbookinstance].[msdyn_trackprogress],
    msdyn_trackprogressPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookinstance].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_playbookinstance].[OverriddenCreatedOn],
    [msdyn_playbookinstance].[OwnerId],
    --[msdyn_playbookinstance].[OwnerIdDsc]
    0,
    [msdyn_playbookinstance].[OwnerIdName],
    [msdyn_playbookinstance].[OwnerIdType],
    [msdyn_playbookinstance].[OwnerIdYomiName],
    [msdyn_playbookinstance].[OwningBusinessUnit],
    [msdyn_playbookinstance].[OwningTeam],
    [msdyn_playbookinstance].[OwningUser],
    [msdyn_playbookinstance].[Regarding],
    [msdyn_playbookinstance].[RegardingIdName],
    [msdyn_playbookinstance].[RegardingObjectTypeCode],
    [msdyn_playbookinstance].[RegardingYomiName],
    [msdyn_playbookinstance].[statecode],
    statecodePLTable.Value,
    [msdyn_playbookinstance].[statuscode],
    statuscodePLTable.Value,
    [msdyn_playbookinstance].[TimeZoneRuleVersionNumber],
    [msdyn_playbookinstance].[UTCConversionTimeZoneCode],
    [msdyn_playbookinstance].[VersionNumber]
from msdyn_playbookinstance
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_evaluateactivityclosurePLTable] on 
		([msdyn_evaluateactivityclosurePLTable].AttributeName = 'msdyn_evaluateactivityclosure'
		and [msdyn_evaluateactivityclosurePLTable].ObjectTypeCode = 10089
		and [msdyn_evaluateactivityclosurePLTable].AttributeValue = [msdyn_playbookinstance].[msdyn_evaluateactivityclosure]
		and [msdyn_evaluateactivityclosurePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_trackprogressPLTable] on 
		([msdyn_trackprogressPLTable].AttributeName = 'msdyn_trackprogress'
		and [msdyn_trackprogressPLTable].ObjectTypeCode = 10089
		and [msdyn_trackprogressPLTable].AttributeValue = [msdyn_playbookinstance].[msdyn_trackprogress]
		and [msdyn_trackprogressPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10089
		and [statecodePLTable].AttributeValue = [msdyn_playbookinstance].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10089
		and [statuscodePLTable].AttributeValue = [msdyn_playbookinstance].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10089) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_playbookinstance].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10089
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
		[msdyn_playbookinstance].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10089)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_playbookinstance].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_playbookinstance].[msdyn_playbookinstanceId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10089
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_playbookinstance] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_playbookinstance] TO [CRMReaderRole]
    AS [dbo];

