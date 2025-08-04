

--
-- report view for callbackregistration
--
create view dbo.[FilteredCallbackRegistration] 
(
    [callbackregistrationid],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [entityname],
    [filterexpression],
    [filteringattributes],
    [message],
    [messagename],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owningbusinessunit],
    [owningbusinessunitname],
    [owningteam],
    [owninguser],
    [postponeuntil],
    [runas],
    [runasname],
    [scope],
    [scopename],
    [version],
    [versionname]
) with view_metadata as
select
    [CallbackRegistration].[CallbackRegistrationId],
    [CallbackRegistration].[CreatedBy],
    [CallbackRegistration].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CallbackRegistration].[CreatedOn],
			us.TimeZoneCode),
        [CallbackRegistration].[CreatedOn],
    [CallbackRegistration].[CreatedOnBehalfBy],
    [CallbackRegistration].[CreatedOnBehalfByName],
    [CallbackRegistration].[CreatedOnBehalfByYomiName],
    [CallbackRegistration].[EntityName],
    [CallbackRegistration].[FilterExpression],
    [CallbackRegistration].[FilteringAttributes],
    [CallbackRegistration].[Message],
    MessagePLTable.Value,
    [CallbackRegistration].[ModifiedBy],
    [CallbackRegistration].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CallbackRegistration].[ModifiedOn],
			us.TimeZoneCode),
        [CallbackRegistration].[ModifiedOn],
    [CallbackRegistration].[ModifiedOnBehalfBy],
    [CallbackRegistration].[ModifiedOnBehalfByName],
    [CallbackRegistration].[ModifiedOnBehalfByYomiName],
    [CallbackRegistration].[Name],
    [CallbackRegistration].[OwnerId],
    [CallbackRegistration].[OwnerIdName],
    [CallbackRegistration].[OwnerIdType],
    [CallbackRegistration].[OwningBusinessUnit],
    [CallbackRegistration].[OwningBusinessUnitName],
    [CallbackRegistration].[OwningTeam],
    [CallbackRegistration].[OwningUser],
    [CallbackRegistration].[PostponeUntil],
    [CallbackRegistration].[RunAs],
    RunAsPLTable.Value,
    [CallbackRegistration].[Scope],
    ScopePLTable.Value,
    [CallbackRegistration].[Version],
    VersionPLTable.Value
from CallbackRegistration
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [MessagePLTable] on 
		([MessagePLTable].AttributeName = 'message'
		and [MessagePLTable].ObjectTypeCode = 301
		and [MessagePLTable].AttributeValue = [CallbackRegistration].[Message]
		and [MessagePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [RunAsPLTable] on 
		([RunAsPLTable].AttributeName = 'runas'
		and [RunAsPLTable].ObjectTypeCode = 301
		and [RunAsPLTable].AttributeValue = [CallbackRegistration].[RunAs]
		and [RunAsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ScopePLTable] on 
		([ScopePLTable].AttributeName = 'scope'
		and [ScopePLTable].ObjectTypeCode = 301
		and [ScopePLTable].AttributeValue = [CallbackRegistration].[Scope]
		and [ScopePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [VersionPLTable] on 
		([VersionPLTable].AttributeName = 'version'
		and [VersionPLTable].ObjectTypeCode = 301
		and [VersionPLTable].AttributeValue = [CallbackRegistration].[Version]
		and [VersionPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(301) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[CallbackRegistration].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 301
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
		[CallbackRegistration].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 301)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[CallbackRegistration].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[CallbackRegistration].[CallbackRegistrationId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 301
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCallbackRegistration] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCallbackRegistration] TO [CRMReaderRole]
    AS [dbo];

