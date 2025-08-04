

--
-- report view for msdyn_aifptrainingdocument
--
create view dbo.[Filteredmsdyn_AIFpTrainingDocument] 
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
    [msdyn_aiconfigurationid],
    [msdyn_aiconfigurationidname],
    [msdyn_aifptrainingdocumentid],
    [msdyn_checksum],
    [msdyn_metadata],
    [msdyn_name],
    [msdyn_sourcetype],
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
    [msdyn_AIFpTrainingDocument].[CreatedBy],
    [msdyn_AIFpTrainingDocument].[CreatedByName],
    [msdyn_AIFpTrainingDocument].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIFpTrainingDocument].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_AIFpTrainingDocument].[CreatedOn],
    [msdyn_AIFpTrainingDocument].[CreatedOnBehalfBy],
    [msdyn_AIFpTrainingDocument].[CreatedOnBehalfByName],
    [msdyn_AIFpTrainingDocument].[CreatedOnBehalfByYomiName],
    [msdyn_AIFpTrainingDocument].[ImportSequenceNumber],
    [msdyn_AIFpTrainingDocument].[ModifiedBy],
    [msdyn_AIFpTrainingDocument].[ModifiedByName],
    [msdyn_AIFpTrainingDocument].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIFpTrainingDocument].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_AIFpTrainingDocument].[ModifiedOn],
    [msdyn_AIFpTrainingDocument].[ModifiedOnBehalfBy],
    [msdyn_AIFpTrainingDocument].[ModifiedOnBehalfByName],
    [msdyn_AIFpTrainingDocument].[ModifiedOnBehalfByYomiName],
    [msdyn_AIFpTrainingDocument].[msdyn_AIConfigurationId],
    [msdyn_AIFpTrainingDocument].[msdyn_AIConfigurationIdName],
    [msdyn_AIFpTrainingDocument].[msdyn_AIFpTrainingDocumentId],
    [msdyn_AIFpTrainingDocument].[msdyn_Checksum],
    [msdyn_AIFpTrainingDocument].[msdyn_Metadata],
    [msdyn_AIFpTrainingDocument].[msdyn_name],
    [msdyn_AIFpTrainingDocument].[msdyn_SourceType],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_AIFpTrainingDocument].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_AIFpTrainingDocument].[OverriddenCreatedOn],
    [msdyn_AIFpTrainingDocument].[OwnerId],
    --[msdyn_AIFpTrainingDocument].[OwnerIdDsc]
    0,
    [msdyn_AIFpTrainingDocument].[OwnerIdName],
    [msdyn_AIFpTrainingDocument].[OwnerIdType],
    [msdyn_AIFpTrainingDocument].[OwnerIdYomiName],
    [msdyn_AIFpTrainingDocument].[OwningBusinessUnit],
    [msdyn_AIFpTrainingDocument].[OwningTeam],
    [msdyn_AIFpTrainingDocument].[OwningUser],
    [msdyn_AIFpTrainingDocument].[statecode],
    statecodePLTable.Value,
    [msdyn_AIFpTrainingDocument].[statuscode],
    statuscodePLTable.Value,
    [msdyn_AIFpTrainingDocument].[TimeZoneRuleVersionNumber],
    [msdyn_AIFpTrainingDocument].[UTCConversionTimeZoneCode],
    [msdyn_AIFpTrainingDocument].[VersionNumber]
from msdyn_AIFpTrainingDocument
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10068
		and [statecodePLTable].AttributeValue = [msdyn_AIFpTrainingDocument].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10068
		and [statuscodePLTable].AttributeValue = [msdyn_AIFpTrainingDocument].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10068) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_AIFpTrainingDocument].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10068
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
		[msdyn_AIFpTrainingDocument].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10068)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_AIFpTrainingDocument].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_AIFpTrainingDocument].[msdyn_AIFpTrainingDocumentId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10068
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIFpTrainingDocument] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_AIFpTrainingDocument] TO [CRMReaderRole]
    AS [dbo];

