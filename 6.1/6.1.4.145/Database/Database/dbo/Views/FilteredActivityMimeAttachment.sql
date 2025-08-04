

--
-- report view for activitymimeattachment
--
create view dbo.[FilteredActivityMimeAttachment] (
    [activityid],
    [activitymimeattachmentid],
    [activitymimeattachmentidunique],
    [attachmentcontentid],
    [attachmentid],
    [attachmentnumber],
    [body],
    [componentstate],
    [filename],
    [filesize],
    [ismanaged],
    [ismanagedname],
    [mimetype],
    [objectid],
    [objecttypecode],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [solutionid],
    [subject],
    [versionnumber]
) with view_metadata as
select
    [ActivityAttachment].[ActivityId],
    [ActivityAttachment].[ActivityMimeAttachmentId],
    [ActivityAttachment].[ActivityMimeAttachmentIdUnique],
    [ActivityAttachment].[AttachmentContentId],
    [ActivityAttachment].[AttachmentId],
    [ActivityAttachment].[AttachmentNumber],
    [ActivityAttachment].[Body],
    [ActivityAttachment].[ComponentState],
    [ActivityAttachment].[FileName],
    [ActivityAttachment].[FileSize],
    [ActivityAttachment].[IsManaged],
    IsManagedPLTable.Value,
    [ActivityAttachment].[MimeType],
    [ActivityAttachment].[ObjectId],
    [ActivityAttachment].[ObjectTypeCode],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityAttachment].[OverwriteTime],
			us.TimeZoneCode),
        [ActivityAttachment].[OverwriteTime],
    [ActivityAttachment].[OwnerId],
    [ActivityAttachment].[OwnerIdType],
    [ActivityAttachment].[OwningBusinessUnit],
    [ActivityAttachment].[OwningUser],
    [ActivityAttachment].[SolutionId],
    [ActivityAttachment].[Subject],
    [ActivityAttachment].[VersionNumber]
from ActivityAttachment
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 1001
		and [IsManagedPLTable].AttributeValue = [ActivityAttachment].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4202) pdm1
where
(
	-- privilege check
	(pdm1.PrivilegeDepthMask is not null) and
	(
	
	-- Owner check
	--
	[ActivityAttachment].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode in ( case
    when ActivityAttachment.ObjectTypeCode = 4202 then 4202 end)
	)	

		
	-- role based access
	or 
	
exists
(
	select 1 where
	(
		-- deep/local security
		(((pdm1.PrivilegeDepthMask & 0x4) != 0) or ((pdm1.PrivilegeDepthMask & 0x2) != 0)) and [ActivityAttachment].[ObjectTypeCode] = 4202 and
		[ActivityAttachment].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4202)
	) 
	or
	(
		-- global security
		((pdm1.PrivilegeDepthMask & 0x8) != 0 and [ActivityAttachment].[ObjectTypeCode] = 4202) and 
		[ActivityAttachment].[OwningBusinessUnit] is not null 
	) 
)
	
	-- object shared to the user 
	or 
	[ActivityAttachment].[ActivityId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and POA.ObjectTypeCode =
				( case
    when pdm1.PrivilegeDepthMask is not null and ActivityAttachment.ObjectTypeCode = 4202 then 4200
 end) and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredActivityMimeAttachment] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredActivityMimeAttachment] TO [CRMReaderRole]
    AS [dbo];

