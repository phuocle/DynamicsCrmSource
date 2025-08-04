

--
-- report view for template
--
create view dbo.[FilteredTemplate] (
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
    [generationtypecode],
    [importsequencenumber],
    [introducedversion],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
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
    [solutionid],
    [subject],
    [subjectpresentationxml],
    [templateid],
    [templateidunique],
    [templatetypecode],
    [templatetypecodename],
    [title],
    [versionnumber]
) with view_metadata as
select
    [Template].[Body],
    [Template].[ComponentState],
    [Template].[CreatedBy],
    --[Template].[CreatedByDsc]
    0,
    [Template].[CreatedByName],
    [Template].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Template].[CreatedOn],
			us.TimeZoneCode),
        [Template].[CreatedOn],
    [Template].[CreatedOnBehalfBy],
    --[Template].[CreatedOnBehalfByDsc]
    0,
    [Template].[CreatedOnBehalfByName],
    [Template].[CreatedOnBehalfByYomiName],
    [Template].[Description],
    [Template].[GenerationTypeCode],
    [Template].[ImportSequenceNumber],
    [Template].[IntroducedVersion],
    [Template].[IsCustomizable],
    [Template].[IsManaged],
    IsManagedPLTable.Value,
    [Template].[IsPersonal],
    IsPersonalPLTable.Value,
    [Template].[LanguageCode],
    [Template].[MimeType],
    [Template].[ModifiedBy],
    --[Template].[ModifiedByDsc]
    0,
    [Template].[ModifiedByName],
    [Template].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Template].[ModifiedOn],
			us.TimeZoneCode),
        [Template].[ModifiedOn],
    [Template].[ModifiedOnBehalfBy],
    --[Template].[ModifiedOnBehalfByDsc]
    0,
    [Template].[ModifiedOnBehalfByName],
    [Template].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Template].[OverwriteTime],
			us.TimeZoneCode),
        [Template].[OverwriteTime],
    [Template].[OwnerId],
    --[Template].[OwnerIdDsc]
    0,
    [Template].[OwnerIdName],
    [Template].[OwnerIdType],
    [Template].[OwnerIdYomiName],
    [Template].[OwningBusinessUnit],
    [Template].[OwningTeam],
    [Template].[OwningUser],
    [Template].[PresentationXml],
    [Template].[SolutionId],
    [Template].[Subject],
    [Template].[SubjectPresentationXml],
    [Template].[TemplateId],
    [Template].[TemplateIdUnique],
    [Template].[TemplateTypeCode],
    TemplateTypeCodePLTable.Value,
    [Template].[Title],
    [Template].[VersionNumber]
from Template
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 2010
		and [IsManagedPLTable].AttributeValue = [Template].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPersonalPLTable] on 
		([IsPersonalPLTable].AttributeName = 'ispersonal'
		and [IsPersonalPLTable].ObjectTypeCode = 2010
		and [IsPersonalPLTable].AttributeValue = [Template].[IsPersonal]
		and [IsPersonalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TemplateTypeCodePLTable] on 
		([TemplateTypeCodePLTable].AttributeName = 'templatetypecode'
		and [TemplateTypeCodePLTable].ObjectTypeCode = 2010
		and [TemplateTypeCodePLTable].AttributeValue = [Template].[TemplateTypeCode]
		and [TemplateTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(2010) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[Template].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 2010
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
		[Template].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 2010)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Template].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Template].[TemplateId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 2010 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTemplate] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTemplate] TO [CRMReaderRole]
    AS [dbo];

