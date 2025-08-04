

--
-- report view for emailsignature
--
create view dbo.[FilteredEmailSignature] 
(
    [body],
    [componentstate],
    [createdby],
    [createdbydsc],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [emailsignatureid],
    [generationtypecode],
    [importsequencenumber],
    [iscustomizable],
    [isdefault],
    [isdefaultname],
    [ispersonal],
    [ispersonalname],
    [languagecode],
    [mimetype],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
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
    [presentationxml],
    [safehtml],
    [title]
) with view_metadata as
select
    [EmailSignature].[Body],
    [EmailSignature].[ComponentState],
    [EmailSignature].[CreatedBy],
    --[EmailSignature].[CreatedByDsc]
    0,
    [EmailSignature].[CreatedByName],
    [EmailSignature].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EmailSignature].[CreatedOn],
			us.TimeZoneCode),
        [EmailSignature].[CreatedOn],
    [EmailSignature].[CreatedOnBehalfBy],
    --[EmailSignature].[CreatedOnBehalfByDsc]
    0,
    [EmailSignature].[CreatedOnBehalfByName],
    [EmailSignature].[CreatedOnBehalfByYomiName],
    [EmailSignature].[Description],
    [EmailSignature].[EmailSignatureId],
    [EmailSignature].[GenerationTypeCode],
    [EmailSignature].[ImportSequenceNumber],
    [EmailSignature].[IsCustomizable],
    [EmailSignature].[IsDefault],
    IsDefaultPLTable.Value,
    [EmailSignature].[IsPersonal],
    IsPersonalPLTable.Value,
    [EmailSignature].[LanguageCode],
    [EmailSignature].[MimeType],
    [EmailSignature].[ModifiedBy],
    --[EmailSignature].[ModifiedByDsc]
    0,
    [EmailSignature].[ModifiedByName],
    [EmailSignature].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EmailSignature].[ModifiedOn],
			us.TimeZoneCode),
        [EmailSignature].[ModifiedOn],
    [EmailSignature].[ModifiedOnBehalfBy],
    --[EmailSignature].[ModifiedOnBehalfByDsc]
    0,
    [EmailSignature].[ModifiedOnBehalfByName],
    [EmailSignature].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EmailSignature].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [EmailSignature].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EmailSignature].[OverwriteTime],
			us.TimeZoneCode),
        [EmailSignature].[OverwriteTime],
    [EmailSignature].[OwnerId],
    --[EmailSignature].[OwnerIdDsc]
    0,
    [EmailSignature].[OwnerIdName],
    [EmailSignature].[OwnerIdType],
    [EmailSignature].[OwnerIdYomiName],
    [EmailSignature].[OwningBusinessUnit],
    [EmailSignature].[OwningTeam],
    [EmailSignature].[OwningUser],
    [EmailSignature].[PresentationXml],
    [EmailSignature].[SafeHtml],
    [EmailSignature].[Title]
from EmailSignature
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsDefaultPLTable] on 
		([IsDefaultPLTable].AttributeName = 'isdefault'
		and [IsDefaultPLTable].ObjectTypeCode = 9997
		and [IsDefaultPLTable].AttributeValue = [EmailSignature].[IsDefault]
		and [IsDefaultPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPersonalPLTable] on 
		([IsPersonalPLTable].AttributeName = 'ispersonal'
		and [IsPersonalPLTable].ObjectTypeCode = 9997
		and [IsPersonalPLTable].AttributeValue = [EmailSignature].[IsPersonal]
		and [IsPersonalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9997) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[EmailSignature].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9997
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
		[EmailSignature].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 9997)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[EmailSignature].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[EmailSignature].[EmailSignatureId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9997
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEmailSignature] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEmailSignature] TO [CRMReaderRole]
    AS [dbo];

