SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for workflowlog
--
create view [dbo].[FilteredWorkflowLog] (
    [activityname],
    [asyncoperationid],
    [asyncoperationidname],
    [childworkflowinstanceid],
    [childworkflowinstanceidname],
    [childworkflowinstanceobjecttypecode],
    [completedon],
    [completedonutc],
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
    [duration],
    [errorcode],
    [interactionactivityresult],
    [message],
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
    [objecttypecode],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [regardingobjectid],
    [regardingobjectiddsc],
    [regardingobjectidname],
    [regardingobjectidyominame],
    [regardingobjecttypecode],
    [stagename],
    [startedon],
    [startedonutc],
    [status],
    [statusname],
    [stepname],
    [workflowlogid]
) with view_metadata as
select
    [WorkflowLog].[ActivityName],
    [WorkflowLog].[AsyncOperationId],
    [WorkflowLog].[AsyncOperationIdName],
    [WorkflowLog].[ChildWorkflowInstanceId],
    [WorkflowLog].[ChildWorkflowInstanceIdName],
    [WorkflowLog].[ChildWorkflowInstanceObjectTypeCode],
    dbo.fn_UTCToTzCodeSpecificLocalTime([WorkflowLog].[CompletedOn],
			us.TimeZoneCode),
        [WorkflowLog].[CompletedOn],
    [WorkflowLog].[CreatedBy],
    --[WorkflowLog].[CreatedByDsc]
    0,
    [WorkflowLog].[CreatedByName],
    [WorkflowLog].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([WorkflowLog].[CreatedOn],
			us.TimeZoneCode),
        [WorkflowLog].[CreatedOn],
    [WorkflowLog].[CreatedOnBehalfBy],
    --[WorkflowLog].[CreatedOnBehalfByDsc]
    0,
    [WorkflowLog].[CreatedOnBehalfByName],
    [WorkflowLog].[CreatedOnBehalfByYomiName],
    [WorkflowLog].[Description],
    [WorkflowLog].[Duration],
    [WorkflowLog].[ErrorCode],
    [WorkflowLog].[InteractionActivityResult],
    [WorkflowLog].[Message],
    [WorkflowLog].[ModifiedBy],
    --[WorkflowLog].[ModifiedByDsc]
    0,
    [WorkflowLog].[ModifiedByName],
    [WorkflowLog].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([WorkflowLog].[ModifiedOn],
			us.TimeZoneCode),
        [WorkflowLog].[ModifiedOn],
    [WorkflowLog].[ModifiedOnBehalfBy],
    --[WorkflowLog].[ModifiedOnBehalfByDsc]
    0,
    [WorkflowLog].[ModifiedOnBehalfByName],
    [WorkflowLog].[ModifiedOnBehalfByYomiName],
    [WorkflowLog].[ObjectTypeCode],
    [WorkflowLog].[OwnerId],
    [WorkflowLog].[OwnerIdType],
    [WorkflowLog].[OwningBusinessUnit],
    [WorkflowLog].[OwningTeam],
    [WorkflowLog].[OwningUser],
    [WorkflowLog].[RegardingObjectId],
    --[WorkflowLog].[RegardingObjectIdDsc]
    0,
    [WorkflowLog].[RegardingObjectIdName],
    [WorkflowLog].[RegardingObjectIdYomiName],
    [WorkflowLog].[RegardingObjectTypeCode],
    [WorkflowLog].[StageName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([WorkflowLog].[StartedOn],
			us.TimeZoneCode),
        [WorkflowLog].[StartedOn],
    [WorkflowLog].[Status],
    StatusPLTable.Value,
    [WorkflowLog].[StepName],
    [WorkflowLog].[WorkflowLogId]
from WorkflowLog
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StatusPLTable] on 
		([StatusPLTable].AttributeName = 'status'
		and [StatusPLTable].ObjectTypeCode = 4706
		and [StatusPLTable].AttributeValue = [WorkflowLog].[Status]
		and [StatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4700) pdm1
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4710) pdm2
where
(
	-- privilege check
	((pdm1.PrivilegeDepthMask is not null or pdm2.PrivilegeDepthMask is not null) and
	(
	-- Owner check returns only principals with Basic Read privilege for entity respecting hierarchical security modelling at both Org level and entity level
	-- 1. Check If HSM is enabled for Org and all the security Objects. If true then join with SystemUserManagerMap
		
		exists  (
				select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				) 
		and 
		not exists (
				select 1 from HierarchySecurityConfiguration where ObjectTypeCode in (4700,4710)
				   )
		and 
		[WorkflowLog].OwnerId in 

		(select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK) 
			join SystemUserPrincipals sup WITH (NOLOCK) 
			on pem.PrincipalId = sup.PrincipalId 
			
			join SystemUserManagerMap smp WITH (NOLOCK)
			on sup.SystemUserId = smp.SystemUserId
			where smp.ParentSystemUserId = u.SystemUserId
			 -- Join with SystemUserManagerMap to get child user records for HSM
				and pem.ObjectTypeCode in ( case
    when WorkflowLog.ObjectTypeCode = 4700 then 4700
    when WorkflowLog.ObjectTypeCode = 4710 then 4710 end)) 
	)
		or 
		(
		-- Check (If HSM is enabled for Org and disabled for all the security objects) OR (HSM is diabled for the Org).If true, then check only SystemUserPrincipals.
		 
	   ((exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				)
		 and	(	-- check if HSM is disabled for all security objects, by checking if count of security objects is equal to count of
					-- HierarchySecurityConfiguration records containing objectTypeCodes in _securityObjectTypeCodes
					(select count(*) from HierarchySecurityConfiguration where ObjectTypeCode in (4700,4710)) = 2
				))
		 or 
		 exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 0	
				))
		 and 
		 [WorkflowLog].OwnerId in 
		
		  (select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK) 
			  join SystemUserPrincipals sup WITH (NOLOCK) 
			  on pem.PrincipalId = sup.PrincipalId 
				where sup.SystemUserId = u.SystemUserId
					and pem.ObjectTypeCode in ( case
    when WorkflowLog.ObjectTypeCode = 4700 then 4700
    when WorkflowLog.ObjectTypeCode = 4710 then 4710 end))
		)
			or
			(
			  -- Check If HSM is enabled for Org and is enabled for some if not all security objects, do separate check for HSM for each security object.
			
		   exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				  )
			and  
			[WorkflowLog].OwnerId in 
			
			(select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK) 
				join SystemUserPrincipals sup WITH (NOLOCK) 
				on pem.PrincipalId = sup.PrincipalId 
				
			join SystemUserManagerMap smp WITH (NOLOCK)
			on sup.SystemUserId = smp.SystemUserId
			where smp.ParentSystemUserId = u.SystemUserId
			 -- Join with SystemUserManagerMap to get child user records for HSM
					--Check if HSM is excluded for each security ObjectTypeCode separately
					and pem.ObjectTypeCode in ( case
    when WorkflowLog.ObjectTypeCode = 4700 and not exists (select 1 from HierarchySecurityConfiguration where ObjectTypeCode = 4700) then 4700
    when WorkflowLog.ObjectTypeCode = 4710 and not exists (select 1 from HierarchySecurityConfiguration where ObjectTypeCode = 4710) then 4710 end)) 
			) 
	)
		
	-- role based access
	or 
	
exists
(
	select 1 where
	(
		-- deep/local security
		(((pdm1.PrivilegeDepthMask & 0x4) != 0) or ((pdm1.PrivilegeDepthMask & 0x2) != 0)) and [WorkflowLog].[ObjectTypeCode] = 4700 and
		[WorkflowLog].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4700)
	) 
	or
	(
		-- global security
		((pdm1.PrivilegeDepthMask & 0x8) != 0 and [WorkflowLog].[ObjectTypeCode] = 4700) and 
		[WorkflowLog].[OwningBusinessUnit] is not null 
	) 
or
	(
		-- deep/local security
		(((pdm2.PrivilegeDepthMask & 0x4) != 0) or ((pdm2.PrivilegeDepthMask & 0x2) != 0)) and [WorkflowLog].[ObjectTypeCode] = 4710 and
		[WorkflowLog].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4710)
	) 
	or
	(
		-- global security
		((pdm2.PrivilegeDepthMask & 0x8) != 0 and [WorkflowLog].[ObjectTypeCode] = 4710) and 
		[WorkflowLog].[OwningBusinessUnit] is not null 
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
			select 1 from HierarchySecurityConfiguration where ObjectTypeCode in (4700,4710)
			   )
	and 
	[WorkflowLog].[AsyncOperationId] in 
		
		(select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK)
			on POA.PrincipalId = sup.PrincipalId
			
			join SystemUserManagerMap smp WITH (NOLOCK)
			on sup.SystemUserId = smp.SystemUserId
			where smp.ParentSystemUserId = u.SystemUserId
			 -- Join with SystemUserManagerMap to get child user records for HSM
					 and POA.ObjectTypeCode = ( case
    when pdm1.PrivilegeDepthMask is not null and WorkflowLog.ObjectTypeCode = 4700 then 4700
    when pdm2.PrivilegeDepthMask is not null and WorkflowLog.ObjectTypeCode = 4710 then 4710
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
					(select count(*) from HierarchySecurityConfiguration where ObjectTypeCode in (4700,4710)) = 2
				))
		 or 
		 exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 0	
				))
			and 
			[WorkflowLog].[AsyncOperationId] in 
				
			(select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
				join SystemUserPrincipals sup WITH (NOLOCK)
				on POA.PrincipalId = sup.PrincipalId
				where sup.SystemUserId = u.SystemUserId
						 and POA.ObjectTypeCode = ( case
    when pdm1.PrivilegeDepthMask is not null and WorkflowLog.ObjectTypeCode = 4700 then 4700
    when pdm2.PrivilegeDepthMask is not null and WorkflowLog.ObjectTypeCode = 4710 then 4710
 end) and
						((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1)
	 )
		or
		 ( 	-- Check If HSM is enabled for Org and is enabled for some if not all security objects, do separate check for HSM for each security object.
			
		   exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				  )
			and 
			[WorkflowLog].[AsyncOperationId] in 

			(select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK) 
				join SystemUserPrincipals sup WITH (NOLOCK) 
				on POA.PrincipalId = sup.PrincipalId
				
			join SystemUserManagerMap smp WITH (NOLOCK)
			on sup.SystemUserId = smp.SystemUserId
			where smp.ParentSystemUserId = u.SystemUserId
			 -- Join with SystemUserManagerMap to get child user records for HSM
					--Check if HSM is excluded for each security ObjectTypeCode separately
					and POA.ObjectTypeCode = ( case
    when pdm1.PrivilegeDepthMask is not null and WorkflowLog.ObjectTypeCode = 4700 and not exists (select 1 from HierarchySecurityConfiguration where ObjectTypeCode = 4700) then 4700
    when pdm2.PrivilegeDepthMask is not null and WorkflowLog.ObjectTypeCode = 4710 and not exists (select 1 from HierarchySecurityConfiguration where ObjectTypeCode = 4710) then 4710
 end) and
					((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1)
		 ) 
	)
GO
GRANT SELECT ON  [dbo].[FilteredWorkflowLog] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredWorkflowLog] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
