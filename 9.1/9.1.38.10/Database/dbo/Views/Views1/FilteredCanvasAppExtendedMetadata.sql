

--
-- report view for canvasappextendedmetadata
--
create view dbo.[FilteredCanvasAppExtendedMetadata] 
(
    [canvasappextendedmetadataid],
    [canvasappid],
    [canvasappidname],
    [canvasappuniqueid],
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
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningbusinessunitidtype],
    [owningbusinessunitname],
    [owningbusinessunityominame],
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
    [CanvasAppExtendedMetadata].[CanvasAppExtendedMetadataId],
    [CanvasAppExtendedMetadata].[CanvasAppId],
    [CanvasAppExtendedMetadata].[CanvasAppIdName],
    [CanvasAppExtendedMetadata].[CanvasAppUniqueId],
    [CanvasAppExtendedMetadata].[CreatedBy],
    [CanvasAppExtendedMetadata].[CreatedByName],
    [CanvasAppExtendedMetadata].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CanvasAppExtendedMetadata].[CreatedOn],
			us.TimeZoneCode),
        [CanvasAppExtendedMetadata].[CreatedOn],
    [CanvasAppExtendedMetadata].[CreatedOnBehalfBy],
    [CanvasAppExtendedMetadata].[CreatedOnBehalfByName],
    [CanvasAppExtendedMetadata].[CreatedOnBehalfByYomiName],
    [CanvasAppExtendedMetadata].[ImportSequenceNumber],
    [CanvasAppExtendedMetadata].[ModifiedBy],
    [CanvasAppExtendedMetadata].[ModifiedByName],
    [CanvasAppExtendedMetadata].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CanvasAppExtendedMetadata].[ModifiedOn],
			us.TimeZoneCode),
        [CanvasAppExtendedMetadata].[ModifiedOn],
    [CanvasAppExtendedMetadata].[ModifiedOnBehalfBy],
    [CanvasAppExtendedMetadata].[ModifiedOnBehalfByName],
    [CanvasAppExtendedMetadata].[ModifiedOnBehalfByYomiName],
    [CanvasAppExtendedMetadata].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CanvasAppExtendedMetadata].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CanvasAppExtendedMetadata].[OverriddenCreatedOn],
    [CanvasAppExtendedMetadata].[OwnerId],
    --[CanvasAppExtendedMetadata].[OwnerIdDsc]
    0,
    [CanvasAppExtendedMetadata].[OwnerIdName],
    [CanvasAppExtendedMetadata].[OwnerIdType],
    [CanvasAppExtendedMetadata].[OwnerIdYomiName],
    [CanvasAppExtendedMetadata].[OwningBusinessUnit],
    [CanvasAppExtendedMetadata].[OwningBusinessUnitIdType],
    [CanvasAppExtendedMetadata].[OwningBusinessUnitName],
    [CanvasAppExtendedMetadata].[OwningBusinessUnitYomiName],
    [CanvasAppExtendedMetadata].[OwningTeam],
    [CanvasAppExtendedMetadata].[OwningUser],
    [CanvasAppExtendedMetadata].[statecode],
    statecodePLTable.Value,
    [CanvasAppExtendedMetadata].[statuscode],
    statuscodePLTable.Value,
    [CanvasAppExtendedMetadata].[TimeZoneRuleVersionNumber],
    [CanvasAppExtendedMetadata].[UTCConversionTimeZoneCode],
    [CanvasAppExtendedMetadata].[VersionNumber]
from CanvasAppExtendedMetadata
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10034
		and [statecodePLTable].AttributeValue = [CanvasAppExtendedMetadata].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10034
		and [statuscodePLTable].AttributeValue = [CanvasAppExtendedMetadata].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10034) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[CanvasAppExtendedMetadata].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10034
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
		[CanvasAppExtendedMetadata].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10034)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[CanvasAppExtendedMetadata].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[CanvasAppExtendedMetadata].[CanvasAppExtendedMetadataId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10034
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCanvasAppExtendedMetadata] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCanvasAppExtendedMetadata] TO [CRMReaderRole]
    AS [dbo];

