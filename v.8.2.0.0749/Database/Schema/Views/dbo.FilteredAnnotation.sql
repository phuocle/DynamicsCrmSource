SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for annotation
--
create view [dbo].[FilteredAnnotation] (
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
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 5))
		
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
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 5))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredAnnotation] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredAnnotation] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
