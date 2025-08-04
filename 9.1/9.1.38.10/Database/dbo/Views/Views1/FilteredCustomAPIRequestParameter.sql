

--
-- report view for customapirequestparameter
--
create view dbo.[FilteredCustomAPIRequestParameter] 
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
    [customapirequestparameterid],
    [description],
    [displayname],
    [entitylogicalname],
    [importsequencenumber],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
    [isoptional],
    [isoptionalname],
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
    [CustomAPIRequestParameter].[ComponentIdUnique],
    [CustomAPIRequestParameter].[ComponentState],
    ComponentStatePLTable.Value,
    [CustomAPIRequestParameter].[CreatedBy],
    [CustomAPIRequestParameter].[CreatedByName],
    [CustomAPIRequestParameter].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomAPIRequestParameter].[CreatedOn],
			us.TimeZoneCode),
        [CustomAPIRequestParameter].[CreatedOn],
    [CustomAPIRequestParameter].[CreatedOnBehalfBy],
    [CustomAPIRequestParameter].[CreatedOnBehalfByName],
    [CustomAPIRequestParameter].[CreatedOnBehalfByYomiName],
    [CustomAPIRequestParameter].[CustomAPIId],
    [CustomAPIRequestParameter].[CustomAPIIdName],
    [CustomAPIRequestParameter].[CustomAPIRequestParameterId],
    coalesce(dbo.fn_GetLocalizedLabel([CustomAPIRequestParameter].[CustomAPIId], 'description', 10060, us.UILanguageId), [CustomAPIRequestParameter].[Description]),
    coalesce(dbo.fn_GetLocalizedLabel([CustomAPIRequestParameter].[CustomAPIId], 'displayname', 10060, us.UILanguageId), [CustomAPIRequestParameter].[DisplayName]),
    [CustomAPIRequestParameter].[EntityLogicalName],
    [CustomAPIRequestParameter].[ImportSequenceNumber],
    [CustomAPIRequestParameter].[IsCustomizable],
    [CustomAPIRequestParameter].[IsManaged],
    IsManagedPLTable.Value,
    [CustomAPIRequestParameter].[IsOptional],
    IsOptionalPLTable.Value,
    [CustomAPIRequestParameter].[ModifiedBy],
    [CustomAPIRequestParameter].[ModifiedByName],
    [CustomAPIRequestParameter].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomAPIRequestParameter].[ModifiedOn],
			us.TimeZoneCode),
        [CustomAPIRequestParameter].[ModifiedOn],
    [CustomAPIRequestParameter].[ModifiedOnBehalfBy],
    [CustomAPIRequestParameter].[ModifiedOnBehalfByName],
    [CustomAPIRequestParameter].[ModifiedOnBehalfByYomiName],
    [CustomAPIRequestParameter].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomAPIRequestParameter].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CustomAPIRequestParameter].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomAPIRequestParameter].[OverwriteTime],
			us.TimeZoneCode),
        [CustomAPIRequestParameter].[OverwriteTime],
    [CustomAPIRequestParameter].[OwnerId],
    --[CustomAPIRequestParameter].[OwnerIdDsc]
    0,
    [CustomAPIRequestParameter].[OwnerIdName],
    [CustomAPIRequestParameter].[OwnerIdType],
    [CustomAPIRequestParameter].[OwnerIdYomiName],
    [CustomAPIRequestParameter].[OwningBusinessUnit],
    [CustomAPIRequestParameter].[OwningTeam],
    [CustomAPIRequestParameter].[OwningUser],
    [CustomAPIRequestParameter].[SolutionId],
    [CustomAPIRequestParameter].[statecode],
    statecodePLTable.Value,
    [CustomAPIRequestParameter].[statuscode],
    statuscodePLTable.Value,
    [CustomAPIRequestParameter].[TimeZoneRuleVersionNumber],
    [CustomAPIRequestParameter].[Type],
    TypePLTable.Value,
    [CustomAPIRequestParameter].[UniqueName],
    [CustomAPIRequestParameter].[UTCConversionTimeZoneCode],
    [CustomAPIRequestParameter].[VersionNumber]
from CustomAPIRequestParameter
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10060
		and [ComponentStatePLTable].AttributeValue = [CustomAPIRequestParameter].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10060
		and [IsManagedPLTable].AttributeValue = [CustomAPIRequestParameter].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsOptionalPLTable] on 
		([IsOptionalPLTable].AttributeName = 'isoptional'
		and [IsOptionalPLTable].ObjectTypeCode = 10060
		and [IsOptionalPLTable].AttributeValue = [CustomAPIRequestParameter].[IsOptional]
		and [IsOptionalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10060
		and [statecodePLTable].AttributeValue = [CustomAPIRequestParameter].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10060
		and [statuscodePLTable].AttributeValue = [CustomAPIRequestParameter].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TypePLTable] on 
		([TypePLTable].AttributeName = 'type'
		and [TypePLTable].ObjectTypeCode = 10060
		and [TypePLTable].AttributeValue = [CustomAPIRequestParameter].[Type]
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
	[CustomAPIRequestParameter].OwnerId in 
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
		[CustomAPIRequestParameter].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10059)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[CustomAPIRequestParameter].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[CustomAPIRequestParameter].[CustomAPIId] in 
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
    ON OBJECT::[dbo].[FilteredCustomAPIRequestParameter] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCustomAPIRequestParameter] TO [CRMReaderRole]
    AS [dbo];

