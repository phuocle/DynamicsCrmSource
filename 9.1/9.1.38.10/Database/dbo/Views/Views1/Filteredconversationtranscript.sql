

--
-- report view for conversationtranscript
--
create view dbo.[Filteredconversationtranscript] 
(
    [bot_conversationtranscriptid],
    [bot_conversationtranscriptidname],
    [content],
    [conversationstarttime],
    [conversationstarttimeutc],
    [conversationtranscriptid],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [metadata],
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
    [owningteam],
    [owninguser],
    [schematype],
    [schemaversion],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [conversationtranscript].[bot_conversationtranscriptId],
    [conversationtranscript].[bot_conversationtranscriptIdName],
    [conversationtranscript].[Content],
    dbo.fn_UTCToTzCodeSpecificLocalTime([conversationtranscript].[ConversationStartTime],
			us.TimeZoneCode),
        [conversationtranscript].[ConversationStartTime],
    [conversationtranscript].[conversationtranscriptId],
    [conversationtranscript].[CreatedBy],
    [conversationtranscript].[CreatedByName],
    [conversationtranscript].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([conversationtranscript].[CreatedOn],
			us.TimeZoneCode),
        [conversationtranscript].[CreatedOn],
    [conversationtranscript].[CreatedOnBehalfBy],
    [conversationtranscript].[CreatedOnBehalfByName],
    [conversationtranscript].[CreatedOnBehalfByYomiName],
    [conversationtranscript].[ImportSequenceNumber],
    [conversationtranscript].[metadata],
    [conversationtranscript].[ModifiedBy],
    [conversationtranscript].[ModifiedByName],
    [conversationtranscript].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([conversationtranscript].[ModifiedOn],
			us.TimeZoneCode),
        [conversationtranscript].[ModifiedOn],
    [conversationtranscript].[ModifiedOnBehalfBy],
    [conversationtranscript].[ModifiedOnBehalfByName],
    [conversationtranscript].[ModifiedOnBehalfByYomiName],
    [conversationtranscript].[name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([conversationtranscript].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [conversationtranscript].[OverriddenCreatedOn],
    [conversationtranscript].[OwnerId],
    --[conversationtranscript].[OwnerIdDsc]
    0,
    [conversationtranscript].[OwnerIdName],
    [conversationtranscript].[OwnerIdType],
    [conversationtranscript].[OwnerIdYomiName],
    [conversationtranscript].[OwningBusinessUnit],
    [conversationtranscript].[OwningTeam],
    [conversationtranscript].[OwningUser],
    [conversationtranscript].[SchemaType],
    [conversationtranscript].[SchemaVersion],
    [conversationtranscript].[statecode],
    statecodePLTable.Value,
    [conversationtranscript].[statuscode],
    statuscodePLTable.Value,
    [conversationtranscript].[TimeZoneRuleVersionNumber],
    [conversationtranscript].[UTCConversionTimeZoneCode],
    [conversationtranscript].[VersionNumber]
from conversationtranscript
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10041
		and [statecodePLTable].AttributeValue = [conversationtranscript].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10041
		and [statuscodePLTable].AttributeValue = [conversationtranscript].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10041) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[conversationtranscript].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10041
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
		[conversationtranscript].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10041)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[conversationtranscript].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[conversationtranscript].[conversationtranscriptId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10041
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredconversationtranscript] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredconversationtranscript] TO [CRMReaderRole]
    AS [dbo];

