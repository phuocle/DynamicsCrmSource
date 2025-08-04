

--
-- report view for annotation
--
create view dbo.[FilteredAnnotation] (
    [annotationid],
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
    [documentbody],
    [filename],
    [filesize],
    [importsequencenumber],
    [isdocument],
    [isdocumentname],
    [isprivatename],
    [langid],
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
    [notetext],
    [objectid],
    [objectidtypecode],
    [objecttypecode],
    [objecttypecodename],
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
    [stepid],
    [subject],
    [versionnumber]
) with view_metadata as
select
    [Annotation].[AnnotationId],
    [Annotation].[CreatedBy],
    --[Annotation].[CreatedByDsc]
    0,
    [Annotation].[CreatedByName],
    [Annotation].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Annotation].[CreatedOn],
			us.TimeZoneCode),
        [Annotation].[CreatedOn],
    [Annotation].[CreatedOnBehalfBy],
    --[Annotation].[CreatedOnBehalfByDsc]
    0,
    [Annotation].[CreatedOnBehalfByName],
    [Annotation].[CreatedOnBehalfByYomiName],
    [Annotation].[DocumentBody],
    [Annotation].[FileName],
    [Annotation].[FileSize],
    [Annotation].[ImportSequenceNumber],
    [Annotation].[IsDocument],
    IsDocumentPLTable.Value,
    IsPrivatePLTable.Value,
    [Annotation].[LangId],
    [Annotation].[MimeType],
    [Annotation].[ModifiedBy],
    --[Annotation].[ModifiedByDsc]
    0,
    [Annotation].[ModifiedByName],
    [Annotation].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Annotation].[ModifiedOn],
			us.TimeZoneCode),
        [Annotation].[ModifiedOn],
    [Annotation].[ModifiedOnBehalfBy],
    --[Annotation].[ModifiedOnBehalfByDsc]
    0,
    [Annotation].[ModifiedOnBehalfByName],
    [Annotation].[ModifiedOnBehalfByYomiName],
    [Annotation].[NoteText],
    [Annotation].[ObjectId],
    [Annotation].[ObjectIdTypeCode],
    [Annotation].[ObjectTypeCode],
    ObjectTypeCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Annotation].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Annotation].[OverriddenCreatedOn],
    [Annotation].[OwnerId],
    --[Annotation].[OwnerIdDsc]
    0,
    [Annotation].[OwnerIdName],
    [Annotation].[OwnerIdType],
    [Annotation].[OwnerIdYomiName],
    [Annotation].[OwningBusinessUnit],
    [Annotation].[OwningTeam],
    [Annotation].[OwningUser],
    [Annotation].[StepId],
    [Annotation].[Subject],
    [Annotation].[VersionNumber]
from Annotation
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsDocumentPLTable] on 
		([IsDocumentPLTable].AttributeName = 'isdocument'
		and [IsDocumentPLTable].ObjectTypeCode = 5
		and [IsDocumentPLTable].AttributeValue = [Annotation].[IsDocument]
		and [IsDocumentPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPrivatePLTable] on 
		([IsPrivatePLTable].AttributeName = 'isprivate'
		and [IsPrivatePLTable].ObjectTypeCode = 5
		and [IsPrivatePLTable].AttributeValue = [Annotation].[IsPrivate]
		and [IsPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ObjectTypeCodePLTable] on 
		([ObjectTypeCodePLTable].AttributeName = 'objecttypecode'
		and [ObjectTypeCodePLTable].ObjectTypeCode = 5
		and [ObjectTypeCodePLTable].AttributeValue = [Annotation].[ObjectTypeCode]
		and [ObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(5) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[Annotation].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 5
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
		[Annotation].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 5)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Annotation].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Annotation].[AnnotationId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 5
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAnnotation] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAnnotation] TO [CRMReaderRole]
    AS [dbo];

