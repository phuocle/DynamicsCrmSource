SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for workflowdependency
--
create view [dbo].[FilteredWorkflowDependency] (
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
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 4703))
		
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
		[WorkflowDependency].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4703)
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
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 4703))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredWorkflowDependency] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredWorkflowDependency] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
