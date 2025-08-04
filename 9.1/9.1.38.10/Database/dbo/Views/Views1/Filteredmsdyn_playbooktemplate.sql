

--
-- report view for msdyn_playbooktemplate
--
create view dbo.[Filteredmsdyn_playbooktemplate] 
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
    [msdyn_categoryid],
    [msdyn_categoryidname],
    [msdyn_description],
    [msdyn_estimatedduration],
    [msdyn_fullentitylist],
    [msdyn_name],
    [msdyn_playbooktemplateid],
    [msdyn_relatedentitylist],
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
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [msdyn_playbooktemplate].[CreatedBy],
    [msdyn_playbooktemplate].[CreatedByName],
    [msdyn_playbooktemplate].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbooktemplate].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_playbooktemplate].[CreatedOn],
    [msdyn_playbooktemplate].[CreatedOnBehalfBy],
    [msdyn_playbooktemplate].[CreatedOnBehalfByName],
    [msdyn_playbooktemplate].[CreatedOnBehalfByYomiName],
    [msdyn_playbooktemplate].[ImportSequenceNumber],
    [msdyn_playbooktemplate].[ModifiedBy],
    [msdyn_playbooktemplate].[ModifiedByName],
    [msdyn_playbooktemplate].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbooktemplate].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_playbooktemplate].[ModifiedOn],
    [msdyn_playbooktemplate].[ModifiedOnBehalfBy],
    [msdyn_playbooktemplate].[ModifiedOnBehalfByName],
    [msdyn_playbooktemplate].[ModifiedOnBehalfByYomiName],
    [msdyn_playbooktemplate].[msdyn_categoryid],
    [msdyn_playbooktemplate].[msdyn_categoryidName],
    [msdyn_playbooktemplate].[msdyn_Description],
    [msdyn_playbooktemplate].[msdyn_EstimatedDuration],
    [msdyn_playbooktemplate].[msdyn_fullentitylist],
    [msdyn_playbooktemplate].[msdyn_name],
    [msdyn_playbooktemplate].[msdyn_playbooktemplateId],
    [msdyn_playbooktemplate].[msdyn_relatedentitylist],
    [msdyn_playbooktemplate].[msdyn_trackprogress],
    msdyn_trackprogressPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_playbooktemplate].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_playbooktemplate].[OverriddenCreatedOn],
    [msdyn_playbooktemplate].[OwnerId],
    --[msdyn_playbooktemplate].[OwnerIdDsc]
    0,
    [msdyn_playbooktemplate].[OwnerIdName],
    [msdyn_playbooktemplate].[OwnerIdType],
    [msdyn_playbooktemplate].[OwnerIdYomiName],
    [msdyn_playbooktemplate].[OwningBusinessUnit],
    [msdyn_playbooktemplate].[OwningTeam],
    [msdyn_playbooktemplate].[OwningUser],
    [msdyn_playbooktemplate].[statecode],
    statecodePLTable.Value,
    [msdyn_playbooktemplate].[statuscode],
    statuscodePLTable.Value,
    [msdyn_playbooktemplate].[TimeZoneRuleVersionNumber],
    [msdyn_playbooktemplate].[UTCConversionTimeZoneCode],
    [msdyn_playbooktemplate].[VersionNumber]
from msdyn_playbooktemplate
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_trackprogressPLTable] on 
		([msdyn_trackprogressPLTable].AttributeName = 'msdyn_trackprogress'
		and [msdyn_trackprogressPLTable].ObjectTypeCode = 10090
		and [msdyn_trackprogressPLTable].AttributeValue = [msdyn_playbooktemplate].[msdyn_trackprogress]
		and [msdyn_trackprogressPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10090
		and [statecodePLTable].AttributeValue = [msdyn_playbooktemplate].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10090
		and [statuscodePLTable].AttributeValue = [msdyn_playbooktemplate].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10090) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_playbooktemplate].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10090
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
		[msdyn_playbooktemplate].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10090)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_playbooktemplate].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_playbooktemplate].[msdyn_playbooktemplateId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10090
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_playbooktemplate] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_playbooktemplate] TO [CRMReaderRole]
    AS [dbo];

