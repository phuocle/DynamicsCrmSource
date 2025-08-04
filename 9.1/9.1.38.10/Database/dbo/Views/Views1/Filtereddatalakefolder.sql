

--
-- report view for datalakefolder
--
create view dbo.[Filtereddatalakefolder] 
(
    [componentidunique],
    [componentstate],
    [componentstatename],
    [containerendpoint],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [datalakefolderid],
    [datalakefolder_uniquename],
    [extendedproperties],
    [importsequencenumber],
    [iscustomercapacity],
    [iscustomercapacityname],
    [iscustomizable],
    [isdeepcopyenabled],
    [isdeepcopyenabledname],
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
    [owningappid],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [path],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [datalakefolder].[ComponentIdUnique],
    [datalakefolder].[ComponentState],
    ComponentStatePLTable.Value,
    [datalakefolder].[containerendpoint],
    [datalakefolder].[CreatedBy],
    [datalakefolder].[CreatedByName],
    [datalakefolder].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakefolder].[CreatedOn],
			us.TimeZoneCode),
        [datalakefolder].[CreatedOn],
    [datalakefolder].[CreatedOnBehalfBy],
    [datalakefolder].[CreatedOnBehalfByName],
    [datalakefolder].[CreatedOnBehalfByYomiName],
    [datalakefolder].[datalakefolderId],
    [datalakefolder].[datalakefolder_UniqueName],
    [datalakefolder].[extendedproperties],
    [datalakefolder].[ImportSequenceNumber],
    [datalakefolder].[iscustomercapacity],
    iscustomercapacityPLTable.Value,
    [datalakefolder].[IsCustomizable],
    [datalakefolder].[isdeepcopyenabled],
    isdeepcopyenabledPLTable.Value,
    [datalakefolder].[IsManaged],
    IsManagedPLTable.Value,
    [datalakefolder].[isprivate],
    isprivatePLTable.Value,
    [datalakefolder].[ModifiedBy],
    [datalakefolder].[ModifiedByName],
    [datalakefolder].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakefolder].[ModifiedOn],
			us.TimeZoneCode),
        [datalakefolder].[ModifiedOn],
    [datalakefolder].[ModifiedOnBehalfBy],
    [datalakefolder].[ModifiedOnBehalfByName],
    [datalakefolder].[ModifiedOnBehalfByYomiName],
    [datalakefolder].[name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakefolder].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [datalakefolder].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakefolder].[OverwriteTime],
			us.TimeZoneCode),
        [datalakefolder].[OverwriteTime],
    [datalakefolder].[OwnerId],
    --[datalakefolder].[OwnerIdDsc]
    0,
    [datalakefolder].[OwnerIdName],
    [datalakefolder].[OwnerIdType],
    [datalakefolder].[OwnerIdYomiName],
    [datalakefolder].[owningappid],
    [datalakefolder].[OwningBusinessUnit],
    [datalakefolder].[OwningTeam],
    [datalakefolder].[OwningUser],
    [datalakefolder].[path],
    [datalakefolder].[SolutionId],
    [datalakefolder].[statecode],
    statecodePLTable.Value,
    [datalakefolder].[statuscode],
    statuscodePLTable.Value,
    [datalakefolder].[TimeZoneRuleVersionNumber],
    [datalakefolder].[UTCConversionTimeZoneCode],
    [datalakefolder].[VersionNumber]
from datalakefolder
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10021
		and [ComponentStatePLTable].AttributeValue = [datalakefolder].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [iscustomercapacityPLTable] on 
		([iscustomercapacityPLTable].AttributeName = 'iscustomercapacity'
		and [iscustomercapacityPLTable].ObjectTypeCode = 10021
		and [iscustomercapacityPLTable].AttributeValue = [datalakefolder].[iscustomercapacity]
		and [iscustomercapacityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [isdeepcopyenabledPLTable] on 
		([isdeepcopyenabledPLTable].AttributeName = 'isdeepcopyenabled'
		and [isdeepcopyenabledPLTable].ObjectTypeCode = 10021
		and [isdeepcopyenabledPLTable].AttributeValue = [datalakefolder].[isdeepcopyenabled]
		and [isdeepcopyenabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10021
		and [IsManagedPLTable].AttributeValue = [datalakefolder].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [isprivatePLTable] on 
		([isprivatePLTable].AttributeName = 'isprivate'
		and [isprivatePLTable].ObjectTypeCode = 10021
		and [isprivatePLTable].AttributeValue = [datalakefolder].[isprivate]
		and [isprivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10021
		and [statecodePLTable].AttributeValue = [datalakefolder].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10021
		and [statuscodePLTable].AttributeValue = [datalakefolder].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10021) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[datalakefolder].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10021
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
		[datalakefolder].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10021)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[datalakefolder].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[datalakefolder].[datalakefolderId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10021
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filtereddatalakefolder] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filtereddatalakefolder] TO [CRMReaderRole]
    AS [dbo];

