

--
-- report view for activitymimeattachment
--
create view dbo.[FilteredActivityMimeAttachment] 
(
    [activityid],
    [activitymimeattachmentid],
    [activitymimeattachmentidunique],
    [activitysubject],
    [anonymouslink],
    [attachmentcontentid],
    [attachmentid],
    [attachmentnumber],
    [body],
    [componentstate],
    [filename],
    [filesize],
    [isfollowed],
    [isfollowedname],
    [ismanaged],
    [ismanagedname],
    [mimetype],
    [objectid],
    [objecttypecode],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneridname],
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
    [ActivityAttachment].[ActivitySubject],
    [ActivityAttachment].[AnonymousLink],
    [ActivityAttachment].[AttachmentContentId],
    [ActivityAttachment].[AttachmentId],
    [ActivityAttachment].[AttachmentNumber],
    [ActivityAttachment].[Body],
    [ActivityAttachment].[ComponentState],
    [ActivityAttachment].[FileName],
    [ActivityAttachment].[FileSize],
    [ActivityAttachment].[IsFollowed],
    IsFollowedPLTable.Value,
    [ActivityAttachment].[IsManaged],
    IsManagedPLTable.Value,
    [ActivityAttachment].[MimeType],
    [ActivityAttachment].[ObjectId],
    [ActivityAttachment].[ObjectTypeCode],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityAttachment].[OverwriteTime],
			us.TimeZoneCode),
        [ActivityAttachment].[OverwriteTime],
    [ActivityAttachment].[OwnerId],
    [ActivityAttachment].[OwnerIdName],
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
    left outer join StringMap [IsFollowedPLTable] on 
		([IsFollowedPLTable].AttributeName = 'isfollowed'
		and [IsFollowedPLTable].ObjectTypeCode = 1001
		and [IsFollowedPLTable].AttributeValue = [ActivityAttachment].[IsFollowed]
		and [IsFollowedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
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
	((pdm1.PrivilegeDepthMask is not null) and
	(
	-- Owner check returns only principals with Basic Read privilege for entity respecting hierarchical security modelling at both Org level and entity level
	-- 1. Check If HSM is enabled for Org and all the security Objects. If true then join with SystemUserManagerMap
		
		exists  (
				select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				) 
		and 
		not exists (
				select 1 from HierarchySecurityConfiguration where ObjectTypeCode in (4202)
				   )
		and 
		[ActivityAttachment].OwnerId in 

		(select pem.PrincipalId from PrincipalEntityMap pem  
			join SystemUserPrincipals sup  
			on pem.PrincipalId = sup.PrincipalId 
			
			join SystemUserManagerMap smp 
			on sup.SystemUserId = smp.SystemUserId
			where smp.ParentSystemUserId = u.SystemUserId
			 -- Join with SystemUserManagerMap to get child user records for HSM
				and pem.ObjectTypeCode in ( case
    when ActivityAttachment.ObjectTypeCode = 4202 then 4202 end)) 
	)
		or 
		(
		-- Check (If HSM is enabled for Org and disabled for all the security objects) OR (HSM is diabled for the Org).If true, then check only SystemUserPrincipals.
		 
	   ((exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				)
		 and	(	-- check if HSM is disabled for all security objects, by checking if count of security objects is equal to count of
					-- HierarchySecurityConfiguration records containing objectTypeCodes in _securityObjectTypeCodes
					(select count(*) from HierarchySecurityConfiguration where ObjectTypeCode in (4202)) = 1
				))
		 or 
		 exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 0	
				))
		 and 
		 [ActivityAttachment].OwnerId in 
		
		  (select pem.PrincipalId from PrincipalEntityMap pem  
			  join SystemUserPrincipals sup  
			  on pem.PrincipalId = sup.PrincipalId 
				where sup.SystemUserId = u.SystemUserId
					and pem.ObjectTypeCode in ( case
    when ActivityAttachment.ObjectTypeCode = 4202 then 4202 end))
		)
			or
			(
			  -- Check If HSM is enabled for Org and is enabled for some if not all security objects, do separate check for HSM for each security object.
			
		   exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				  )
			and  
			[ActivityAttachment].OwnerId in 
			
			(select pem.PrincipalId from PrincipalEntityMap pem  
				join SystemUserPrincipals sup  
				on pem.PrincipalId = sup.PrincipalId 
				
			join SystemUserManagerMap smp 
			on sup.SystemUserId = smp.SystemUserId
			where smp.ParentSystemUserId = u.SystemUserId
			 -- Join with SystemUserManagerMap to get child user records for HSM
					--Check if HSM is excluded for each security ObjectTypeCode separately
					and pem.ObjectTypeCode in ( case
    when ActivityAttachment.ObjectTypeCode = 4202 and not exists (select 1 from HierarchySecurityConfiguration where ObjectTypeCode = 4202) then 4202 end)) 
			) 
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
	( 	-- Check if HSM is enabled for the org and for all the security objects, If true then join with SystemUserManagerMap
	exists  (
			select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
			) 
	and 
	not exists (
			select 1 from HierarchySecurityConfiguration where ObjectTypeCode in (4202)
			   )
	and 
	[ActivityAttachment].[ActivityId] in 
		
		(select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup 
			on POA.PrincipalId = sup.PrincipalId
			
			join SystemUserManagerMap smp 
			on sup.SystemUserId = smp.SystemUserId
			where smp.ParentSystemUserId = u.SystemUserId
			 -- Join with SystemUserManagerMap to get child user records for HSM
					 and POA.ObjectTypeCode = ( case
    when pdm1.PrivilegeDepthMask is not null and ActivityAttachment.ObjectTypeCode = 4202 then 4200
 end) and
					((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1)
	)
	or
	 ( -- Check (If HSM is enabled for Org and HSM is disabled for all the security objects) OR (HSM is diabled for the Org).If true, then check only SystemUserPrincipals.
		
		((exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				 )
		 and	(	-- check if HSM is disabled for all security objects, by checking if count of security objects is equal to count of
					-- HierarchySecurityConfiguration records containing objectTypeCodes in _securityObjectTypeCodes
					(select count(*) from HierarchySecurityConfiguration where ObjectTypeCode in (4202)) = 1
				))
		 or 
		 exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 0	
				))
			and 
			[ActivityAttachment].[ActivityId] in 
				
			(select POA.ObjectId from PrincipalObjectAccess POA 
				join SystemUserPrincipals sup 
				on POA.PrincipalId = sup.PrincipalId
				where sup.SystemUserId = u.SystemUserId
						 and POA.ObjectTypeCode = ( case
    when pdm1.PrivilegeDepthMask is not null and ActivityAttachment.ObjectTypeCode = 4202 then 4200
 end) and
						((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1)
	 )
		or
		 ( 	-- Check If HSM is enabled for Org and is enabled for some if not all security objects, do separate check for HSM for each security object.
			
		   exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				  )
			and 
			[ActivityAttachment].[ActivityId] in 

			(select POA.ObjectId from PrincipalObjectAccess POA  
				join SystemUserPrincipals sup  
				on POA.PrincipalId = sup.PrincipalId
				
			join SystemUserManagerMap smp 
			on sup.SystemUserId = smp.SystemUserId
			where smp.ParentSystemUserId = u.SystemUserId
			 -- Join with SystemUserManagerMap to get child user records for HSM
					--Check if HSM is excluded for each security ObjectTypeCode separately
					and POA.ObjectTypeCode = ( case
    when pdm1.PrivilegeDepthMask is not null and ActivityAttachment.ObjectTypeCode = 4202 and not exists (select 1 from HierarchySecurityConfiguration where ObjectTypeCode = 4202) then 4200
 end) and
					((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1)
		 ) 
	)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredActivityMimeAttachment] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredActivityMimeAttachment] TO [CRMReaderRole]
    AS [dbo];

