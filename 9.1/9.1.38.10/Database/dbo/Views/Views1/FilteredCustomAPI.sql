

--
-- report view for customapi
--
create view dbo.[FilteredCustomAPI] 
(
    [allowedcustomprocessingsteptype],
    [allowedcustomprocessingsteptypename],
    [bindingtype],
    [bindingtypename],
    [boundentitylogicalname],
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
    [description],
    [displayname],
    [executeprivilegename],
    [importsequencenumber],
    [iscustomizable],
    [isfunction],
    [isfunctionname],
    [ismanaged],
    [ismanagedname],
    [isprivate],
    [isprivatename],
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
    [plugintypeid],
    [plugintypeidname],
    [sdkmessageid],
    [sdkmessageidname],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [uniquename],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [CustomAPI].[AllowedCustomProcessingStepType],
    AllowedCustomProcessingStepTypePLTable.Value,
    [CustomAPI].[BindingType],
    BindingTypePLTable.Value,
    [CustomAPI].[BoundEntityLogicalName],
    [CustomAPI].[ComponentIdUnique],
    [CustomAPI].[ComponentState],
    ComponentStatePLTable.Value,
    [CustomAPI].[CreatedBy],
    [CustomAPI].[CreatedByName],
    [CustomAPI].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomAPI].[CreatedOn],
			us.TimeZoneCode),
        [CustomAPI].[CreatedOn],
    [CustomAPI].[CreatedOnBehalfBy],
    [CustomAPI].[CreatedOnBehalfByName],
    [CustomAPI].[CreatedOnBehalfByYomiName],
    [CustomAPI].[CustomAPIId],
    coalesce(dbo.fn_GetLocalizedLabel([CustomAPI].[CustomAPIId], 'description', 10059, us.UILanguageId), [CustomAPI].[Description]),
    coalesce(dbo.fn_GetLocalizedLabel([CustomAPI].[CustomAPIId], 'displayname', 10059, us.UILanguageId), [CustomAPI].[DisplayName]),
    [CustomAPI].[ExecutePrivilegeName],
    [CustomAPI].[ImportSequenceNumber],
    [CustomAPI].[IsCustomizable],
    [CustomAPI].[IsFunction],
    IsFunctionPLTable.Value,
    [CustomAPI].[IsManaged],
    IsManagedPLTable.Value,
    [CustomAPI].[IsPrivate],
    IsPrivatePLTable.Value,
    [CustomAPI].[ModifiedBy],
    [CustomAPI].[ModifiedByName],
    [CustomAPI].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomAPI].[ModifiedOn],
			us.TimeZoneCode),
        [CustomAPI].[ModifiedOn],
    [CustomAPI].[ModifiedOnBehalfBy],
    [CustomAPI].[ModifiedOnBehalfByName],
    [CustomAPI].[ModifiedOnBehalfByYomiName],
    [CustomAPI].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomAPI].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CustomAPI].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomAPI].[OverwriteTime],
			us.TimeZoneCode),
        [CustomAPI].[OverwriteTime],
    [CustomAPI].[OwnerId],
    --[CustomAPI].[OwnerIdDsc]
    0,
    [CustomAPI].[OwnerIdName],
    [CustomAPI].[OwnerIdType],
    [CustomAPI].[OwnerIdYomiName],
    [CustomAPI].[OwningBusinessUnit],
    [CustomAPI].[OwningTeam],
    [CustomAPI].[OwningUser],
    [CustomAPI].[PluginTypeId],
    [CustomAPI].[PluginTypeIdName],
    [CustomAPI].[SdkMessageId],
    [CustomAPI].[SdkMessageIdName],
    [CustomAPI].[SolutionId],
    [CustomAPI].[statecode],
    statecodePLTable.Value,
    [CustomAPI].[statuscode],
    statuscodePLTable.Value,
    [CustomAPI].[TimeZoneRuleVersionNumber],
    [CustomAPI].[UniqueName],
    [CustomAPI].[UTCConversionTimeZoneCode],
    [CustomAPI].[VersionNumber]
from CustomAPI
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AllowedCustomProcessingStepTypePLTable] on 
		([AllowedCustomProcessingStepTypePLTable].AttributeName = 'allowedcustomprocessingsteptype'
		and [AllowedCustomProcessingStepTypePLTable].ObjectTypeCode = 10059
		and [AllowedCustomProcessingStepTypePLTable].AttributeValue = [CustomAPI].[AllowedCustomProcessingStepType]
		and [AllowedCustomProcessingStepTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [BindingTypePLTable] on 
		([BindingTypePLTable].AttributeName = 'bindingtype'
		and [BindingTypePLTable].ObjectTypeCode = 10059
		and [BindingTypePLTable].AttributeValue = [CustomAPI].[BindingType]
		and [BindingTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10059
		and [ComponentStatePLTable].AttributeValue = [CustomAPI].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsFunctionPLTable] on 
		([IsFunctionPLTable].AttributeName = 'isfunction'
		and [IsFunctionPLTable].ObjectTypeCode = 10059
		and [IsFunctionPLTable].AttributeValue = [CustomAPI].[IsFunction]
		and [IsFunctionPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10059
		and [IsManagedPLTable].AttributeValue = [CustomAPI].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPrivatePLTable] on 
		([IsPrivatePLTable].AttributeName = 'isprivate'
		and [IsPrivatePLTable].ObjectTypeCode = 10059
		and [IsPrivatePLTable].AttributeValue = [CustomAPI].[IsPrivate]
		and [IsPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10059
		and [statecodePLTable].AttributeValue = [CustomAPI].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10059
		and [statuscodePLTable].AttributeValue = [CustomAPI].[statuscode]
		and [statuscodePLTable].LangId = 
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
	[CustomAPI].OwnerId in 
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
		[CustomAPI].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10059)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[CustomAPI].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[CustomAPI].[CustomAPIId] in 
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
    ON OBJECT::[dbo].[FilteredCustomAPI] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCustomAPI] TO [CRMReaderRole]
    AS [dbo];

