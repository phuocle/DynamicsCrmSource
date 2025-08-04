

--
-- report view for msdyn_flowcardtype
--
create view dbo.[Filteredmsdyn_flowcardtype] 
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
    [msdyn_actioncommand],
    [msdyn_actionname],
    [msdyn_cardname],
    [msdyn_cardtypeid],
    [msdyn_cardtypeidname],
    [msdyn_description],
    [msdyn_flowcardtypeid],
    [msdyn_flowname],
    [msdyn_iscdsflow],
    [msdyn_iscdsflowname],
    [msdyn_isdeleted],
    [msdyn_isdeletedname],
    [msdyn_name],
    [msdyn_samplebody],
    [msdyn_sampletitle],
    [msdyn_workflowid],
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
    [msdyn_flowcardtype].[CreatedBy],
    [msdyn_flowcardtype].[CreatedByName],
    [msdyn_flowcardtype].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_flowcardtype].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_flowcardtype].[CreatedOn],
    [msdyn_flowcardtype].[CreatedOnBehalfBy],
    [msdyn_flowcardtype].[CreatedOnBehalfByName],
    [msdyn_flowcardtype].[CreatedOnBehalfByYomiName],
    [msdyn_flowcardtype].[ImportSequenceNumber],
    [msdyn_flowcardtype].[ModifiedBy],
    [msdyn_flowcardtype].[ModifiedByName],
    [msdyn_flowcardtype].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_flowcardtype].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_flowcardtype].[ModifiedOn],
    [msdyn_flowcardtype].[ModifiedOnBehalfBy],
    [msdyn_flowcardtype].[ModifiedOnBehalfByName],
    [msdyn_flowcardtype].[ModifiedOnBehalfByYomiName],
    [msdyn_flowcardtype].[msdyn_actionCommand],
    [msdyn_flowcardtype].[msdyn_actionname],
    [msdyn_flowcardtype].[msdyn_cardname],
    [msdyn_flowcardtype].[msdyn_cardtypeid],
    [msdyn_flowcardtype].[msdyn_cardtypeidName],
    [msdyn_flowcardtype].[msdyn_description],
    [msdyn_flowcardtype].[msdyn_flowcardtypeId],
    [msdyn_flowcardtype].[msdyn_flowname],
    [msdyn_flowcardtype].[msdyn_iscdsflow],
    msdyn_iscdsflowPLTable.Value,
    [msdyn_flowcardtype].[msdyn_isdeleted],
    msdyn_isdeletedPLTable.Value,
    [msdyn_flowcardtype].[msdyn_name],
    [msdyn_flowcardtype].[msdyn_samplebody],
    [msdyn_flowcardtype].[msdyn_sampletitle],
    [msdyn_flowcardtype].[msdyn_workflowid],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_flowcardtype].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_flowcardtype].[OverriddenCreatedOn],
    [msdyn_flowcardtype].[OwnerId],
    --[msdyn_flowcardtype].[OwnerIdDsc]
    0,
    [msdyn_flowcardtype].[OwnerIdName],
    [msdyn_flowcardtype].[OwnerIdType],
    [msdyn_flowcardtype].[OwnerIdYomiName],
    [msdyn_flowcardtype].[OwningBusinessUnit],
    [msdyn_flowcardtype].[OwningTeam],
    [msdyn_flowcardtype].[OwningUser],
    [msdyn_flowcardtype].[statecode],
    statecodePLTable.Value,
    [msdyn_flowcardtype].[statuscode],
    statuscodePLTable.Value,
    [msdyn_flowcardtype].[TimeZoneRuleVersionNumber],
    [msdyn_flowcardtype].[UTCConversionTimeZoneCode],
    [msdyn_flowcardtype].[VersionNumber]
from msdyn_flowcardtype
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_iscdsflowPLTable] on 
		([msdyn_iscdsflowPLTable].AttributeName = 'msdyn_iscdsflow'
		and [msdyn_iscdsflowPLTable].ObjectTypeCode = 10097
		and [msdyn_iscdsflowPLTable].AttributeValue = [msdyn_flowcardtype].[msdyn_iscdsflow]
		and [msdyn_iscdsflowPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_isdeletedPLTable] on 
		([msdyn_isdeletedPLTable].AttributeName = 'msdyn_isdeleted'
		and [msdyn_isdeletedPLTable].ObjectTypeCode = 10097
		and [msdyn_isdeletedPLTable].AttributeValue = [msdyn_flowcardtype].[msdyn_isdeleted]
		and [msdyn_isdeletedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10097
		and [statecodePLTable].AttributeValue = [msdyn_flowcardtype].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10097
		and [statuscodePLTable].AttributeValue = [msdyn_flowcardtype].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10097) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_flowcardtype].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10097
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
		[msdyn_flowcardtype].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10097)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_flowcardtype].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_flowcardtype].[msdyn_flowcardtypeId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10097
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_flowcardtype] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_flowcardtype] TO [CRMReaderRole]
    AS [dbo];

