

--
-- report view for workflowdependency
--
create view dbo.[FilteredWorkflowDependency] 
(
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
    [customentityname],
    [dependentattributename],
    [dependententityname],
    [entityattributes],
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
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [parametername],
    [parametertype],
    [relatedattributename],
    [relatedentityname],
    [sdkmessageid],
    [type],
    [typename],
    [versionnumber],
    [workflowdependencyid],
    [workflowid]
) with view_metadata as
select
    [WorkflowDependency].[CreatedBy],
    --[WorkflowDependency].[CreatedByDsc]
    0,
    [WorkflowDependency].[CreatedByName],
    [WorkflowDependency].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([WorkflowDependency].[CreatedOn],
			us.TimeZoneCode),
        [WorkflowDependency].[CreatedOn],
    [WorkflowDependency].[CreatedOnBehalfBy],
    --[WorkflowDependency].[CreatedOnBehalfByDsc]
    0,
    [WorkflowDependency].[CreatedOnBehalfByName],
    [WorkflowDependency].[CreatedOnBehalfByYomiName],
    [WorkflowDependency].[CustomEntityName],
    [WorkflowDependency].[DependentAttributeName],
    [WorkflowDependency].[DependentEntityName],
    [WorkflowDependency].[EntityAttributes],
    [WorkflowDependency].[ModifiedBy],
    --[WorkflowDependency].[ModifiedByDsc]
    0,
    [WorkflowDependency].[ModifiedByName],
    [WorkflowDependency].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([WorkflowDependency].[ModifiedOn],
			us.TimeZoneCode),
        [WorkflowDependency].[ModifiedOn],
    [WorkflowDependency].[ModifiedOnBehalfBy],
    --[WorkflowDependency].[ModifiedOnBehalfByDsc]
    0,
    [WorkflowDependency].[ModifiedOnBehalfByName],
    [WorkflowDependency].[ModifiedOnBehalfByYomiName],
    [WorkflowDependency].[OwnerId],
    [WorkflowDependency].[OwnerIdType],
    [WorkflowDependency].[OwningBusinessUnit],
    [WorkflowDependency].[OwningUser],
    [WorkflowDependency].[ParameterName],
    [WorkflowDependency].[ParameterType],
    [WorkflowDependency].[RelatedAttributeName],
    [WorkflowDependency].[RelatedEntityName],
    [WorkflowDependency].[SdkMessageId],
    [WorkflowDependency].[Type],
    TypePLTable.Value,
    [WorkflowDependency].[VersionNumber],
    [WorkflowDependency].[WorkflowDependencyId],
    [WorkflowDependency].[WorkflowId]
from WorkflowDependency
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [TypePLTable] on 
		([TypePLTable].AttributeName = 'type'
		and [TypePLTable].ObjectTypeCode = 4704
		and [TypePLTable].AttributeValue = [WorkflowDependency].[Type]
		and [TypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4703) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[WorkflowDependency].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 4703
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
		[WorkflowDependency].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4703)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[WorkflowDependency].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[WorkflowDependency].[WorkflowId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 4703
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredWorkflowDependency] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredWorkflowDependency] TO [CRMReaderRole]
    AS [dbo];

