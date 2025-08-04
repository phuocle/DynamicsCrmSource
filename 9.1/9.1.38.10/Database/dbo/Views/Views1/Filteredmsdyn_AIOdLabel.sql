

--
-- report view for msdyn_aiodlabel
--
create view dbo.[Filteredmsdyn_AIOdLabel] 
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
    [msdyn_aiodlabelid],
    [msdyn_labelstring],
    [msdyn_name],
    [msdyn_sourceattributelogicalname],
    [msdyn_sourceentitysetname],
    [msdyn_sourcerecordid],
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
    [msdyn_AIOdLabel].[CreatedBy],
    [msdyn_AIOdLabel].[CreatedByName],
    [msdyn_AIOdLabel].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdLabel].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_AIOdLabel].[CreatedOn],
    [msdyn_AIOdLabel].[CreatedOnBehalfBy],
    [msdyn_AIOdLabel].[CreatedOnBehalfByName],
    [msdyn_AIOdLabel].[CreatedOnBehalfByYomiName],
    [msdyn_AIOdLabel].[ImportSequenceNumber],
    [msdyn_AIOdLabel].[ModifiedBy],
    [msdyn_AIOdLabel].[ModifiedByName],
    [msdyn_AIOdLabel].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdLabel].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_AIOdLabel].[ModifiedOn],
    [msdyn_AIOdLabel].[ModifiedOnBehalfBy],
    [msdyn_AIOdLabel].[ModifiedOnBehalfByName],
    [msdyn_AIOdLabel].[ModifiedOnBehalfByYomiName],
    [msdyn_AIOdLabel].[msdyn_AIOdLabelId],
    [msdyn_AIOdLabel].[msdyn_LabelString],
    [msdyn_AIOdLabel].[msdyn_name],
    [msdyn_AIOdLabel].[msdyn_SourceAttributeLogicalName],
    [msdyn_AIOdLabel].[msdyn_SourceEntitySetName],
    [msdyn_AIOdLabel].[msdyn_SourceRecordId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIOdLabel].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_AIOdLabel].[OverriddenCreatedOn],
    [msdyn_AIOdLabel].[OwnerId],
    --[msdyn_AIOdLabel].[OwnerIdDsc]
    0,
    [msdyn_AIOdLabel].[OwnerIdName],
    [msdyn_AIOdLabel].[OwnerIdType],
    [msdyn_AIOdLabel].[OwnerIdYomiName],
    [msdyn_AIOdLabel].[OwningBusinessUnit],
    [msdyn_AIOdLabel].[OwningTeam],
    [msdyn_AIOdLabel].[OwningUser],
    [msdyn_AIOdLabel].[statecode],
    statecodePLTable.Value,
    [msdyn_AIOdLabel].[statuscode],
    statuscodePLTable.Value,
    [msdyn_AIOdLabel].[TimeZoneRuleVersionNumber],
    [msdyn_AIOdLabel].[UTCConversionTimeZoneCode],
    [msdyn_AIOdLabel].[VersionNumber]
from msdyn_AIOdLabel
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10070
		and [statecodePLTable].AttributeValue = [msdyn_AIOdLabel].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10070
		and [statuscodePLTable].AttributeValue = [msdyn_AIOdLabel].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10070) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_AIOdLabel].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10070
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
		[msdyn_AIOdLabel].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10070)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_AIOdLabel].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_AIOdLabel].[msdyn_AIOdLabelId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10070
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIOdLabel] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIOdLabel] TO [CRMReaderRole]
    AS [dbo];

