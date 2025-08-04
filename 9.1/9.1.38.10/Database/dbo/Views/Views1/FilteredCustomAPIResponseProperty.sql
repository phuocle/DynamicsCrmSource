

--
-- report view for customapiresponseproperty
--
create view dbo.[FilteredCustomAPIResponseProperty] 
(
    [componentidunique],
    [componentstate],
    [componentstatename],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customapiid],
    [customapiidname],
    [customapiresponsepropertyid],
    [description],
    [displayname],
    [entitylogicalname],
    [importsequencenumber],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [type],
    [typename],
    [uniquename],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [CustomAPIResponseProperty].[ComponentIdUnique],
    [CustomAPIResponseProperty].[ComponentState],
    ComponentStatePLTable.Value,
    [CustomAPIResponseProperty].[CreatedBy],
    [CustomAPIResponseProperty].[CreatedByName],
    [CustomAPIResponseProperty].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomAPIResponseProperty].[CreatedOn],
			us.TimeZoneCode),
        [CustomAPIResponseProperty].[CreatedOn],
    [CustomAPIResponseProperty].[CreatedOnBehalfBy],
    [CustomAPIResponseProperty].[CreatedOnBehalfByName],
    [CustomAPIResponseProperty].[CreatedOnBehalfByYomiName],
    [CustomAPIResponseProperty].[CustomAPIId],
    [CustomAPIResponseProperty].[CustomAPIIdName],
    [CustomAPIResponseProperty].[CustomAPIResponsePropertyId],
    coalesce(dbo.fn_GetLocalizedLabel([CustomAPIResponseProperty].[CustomAPIId], 'description', 10061, us.UILanguageId), [CustomAPIResponseProperty].[Description]),
    coalesce(dbo.fn_GetLocalizedLabel([CustomAPIResponseProperty].[CustomAPIId], 'displayname', 10061, us.UILanguageId), [CustomAPIResponseProperty].[DisplayName]),
    [CustomAPIResponseProperty].[EntityLogicalName],
    [CustomAPIResponseProperty].[ImportSequenceNumber],
    [CustomAPIResponseProperty].[IsCustomizable],
    [CustomAPIResponseProperty].[IsManaged],
    IsManagedPLTable.Value,
    [CustomAPIResponseProperty].[ModifiedBy],
    [CustomAPIResponseProperty].[ModifiedByName],
    [CustomAPIResponseProperty].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomAPIResponseProperty].[ModifiedOn],
			us.TimeZoneCode),
        [CustomAPIResponseProperty].[ModifiedOn],
    [CustomAPIResponseProperty].[ModifiedOnBehalfBy],
    [CustomAPIResponseProperty].[ModifiedOnBehalfByName],
    [CustomAPIResponseProperty].[ModifiedOnBehalfByYomiName],
    [CustomAPIResponseProperty].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomAPIResponseProperty].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CustomAPIResponseProperty].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomAPIResponseProperty].[OverwriteTime],
			us.TimeZoneCode),
        [CustomAPIResponseProperty].[OverwriteTime],
    [CustomAPIResponseProperty].[OwnerId],
    --[CustomAPIResponseProperty].[OwnerIdDsc]
    0,
    [CustomAPIResponseProperty].[OwnerIdName],
    [CustomAPIResponseProperty].[OwnerIdType],
    [CustomAPIResponseProperty].[OwnerIdYomiName],
    [CustomAPIResponseProperty].[OwningBusinessUnit],
    [CustomAPIResponseProperty].[OwningTeam],
    [CustomAPIResponseProperty].[OwningUser],
    [CustomAPIResponseProperty].[SolutionId],
    [CustomAPIResponseProperty].[statecode],
    statecodePLTable.Value,
    [CustomAPIResponseProperty].[statuscode],
    statuscodePLTable.Value,
    [CustomAPIResponseProperty].[TimeZoneRuleVersionNumber],
    [CustomAPIResponseProperty].[Type],
    TypePLTable.Value,
    [CustomAPIResponseProperty].[UniqueName],
    [CustomAPIResponseProperty].[UTCConversionTimeZoneCode],
    [CustomAPIResponseProperty].[VersionNumber]
from CustomAPIResponseProperty
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10061
		and [ComponentStatePLTable].AttributeValue = [CustomAPIResponseProperty].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10061
		and [IsManagedPLTable].AttributeValue = [CustomAPIResponseProperty].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10061
		and [statecodePLTable].AttributeValue = [CustomAPIResponseProperty].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10061
		and [statuscodePLTable].AttributeValue = [CustomAPIResponseProperty].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TypePLTable] on 
		([TypePLTable].AttributeName = 'type'
		and [TypePLTable].ObjectTypeCode = 10061
		and [TypePLTable].AttributeValue = [CustomAPIResponseProperty].[Type]
		and [TypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10059) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[CustomAPIResponseProperty].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10059
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
		[CustomAPIResponseProperty].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10059)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[CustomAPIResponseProperty].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[CustomAPIResponseProperty].[CustomAPIId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10059
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCustomAPIResponseProperty] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCustomAPIResponseProperty] TO [CRMReaderRole]
    AS [dbo];

