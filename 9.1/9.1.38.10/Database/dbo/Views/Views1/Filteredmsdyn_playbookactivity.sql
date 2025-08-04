

--
-- report view for msdyn_playbookactivity
--
create view dbo.[Filteredmsdyn_playbookactivity] 
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
    [msdyn_activityLogicalName],
    [msdyn_activityType],
    [msdyn_activitytypename],
    [msdyn_playbookactivityid],
    [msdyn_playbookactivity_json],
    [msdyn_playbooktemplateid],
    [msdyn_playbooktemplateidname],
    [msdyn_subject],
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
    [msdyn_playbookactivity].[CreatedBy],
    [msdyn_playbookactivity].[CreatedByName],
    [msdyn_playbookactivity].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookactivity].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_playbookactivity].[CreatedOn],
    [msdyn_playbookactivity].[CreatedOnBehalfBy],
    [msdyn_playbookactivity].[CreatedOnBehalfByName],
    [msdyn_playbookactivity].[CreatedOnBehalfByYomiName],
    [msdyn_playbookactivity].[ImportSequenceNumber],
    [msdyn_playbookactivity].[ModifiedBy],
    [msdyn_playbookactivity].[ModifiedByName],
    [msdyn_playbookactivity].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookactivity].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_playbookactivity].[ModifiedOn],
    [msdyn_playbookactivity].[ModifiedOnBehalfBy],
    [msdyn_playbookactivity].[ModifiedOnBehalfByName],
    [msdyn_playbookactivity].[ModifiedOnBehalfByYomiName],
    [msdyn_playbookactivity].[msdyn_activityLogicalName],
    [msdyn_playbookactivity].[msdyn_activityType],
    msdyn_activityTypePLTable.Value,
    [msdyn_playbookactivity].[msdyn_playbookactivityId],
    [msdyn_playbookactivity].[msdyn_playbookactivity_json],
    [msdyn_playbookactivity].[msdyn_playbooktemplateid],
    [msdyn_playbookactivity].[msdyn_playbooktemplateidName],
    [msdyn_playbookactivity].[msdyn_subject],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbookactivity].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_playbookactivity].[OverriddenCreatedOn],
    [msdyn_playbookactivity].[OwnerId],
    --[msdyn_playbookactivity].[OwnerIdDsc]
    0,
    [msdyn_playbookactivity].[OwnerIdName],
    [msdyn_playbookactivity].[OwnerIdType],
    [msdyn_playbookactivity].[OwnerIdYomiName],
    [msdyn_playbookactivity].[OwningBusinessUnit],
    [msdyn_playbookactivity].[OwningTeam],
    [msdyn_playbookactivity].[OwningUser],
    [msdyn_playbookactivity].[statecode],
    statecodePLTable.Value,
    [msdyn_playbookactivity].[statuscode],
    statuscodePLTable.Value,
    [msdyn_playbookactivity].[TimeZoneRuleVersionNumber],
    [msdyn_playbookactivity].[UTCConversionTimeZoneCode],
    [msdyn_playbookactivity].[VersionNumber]
from msdyn_playbookactivity
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_activityTypePLTable] on 
		([msdyn_activityTypePLTable].AttributeName = 'msdyn_activityType'
		and [msdyn_activityTypePLTable].ObjectTypeCode = 10086
		and [msdyn_activityTypePLTable].AttributeValue = [msdyn_playbookactivity].[msdyn_activityType]
		and [msdyn_activityTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10086
		and [statecodePLTable].AttributeValue = [msdyn_playbookactivity].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10086
		and [statuscodePLTable].AttributeValue = [msdyn_playbookactivity].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10086) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_playbookactivity].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10086
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
		[msdyn_playbookactivity].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10086)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_playbookactivity].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_playbookactivity].[msdyn_playbookactivityId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10086
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_playbookactivity] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_playbookactivity] TO [CRMReaderRole]
    AS [dbo];

