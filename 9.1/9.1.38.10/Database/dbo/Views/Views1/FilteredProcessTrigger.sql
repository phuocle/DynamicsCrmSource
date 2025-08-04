

--
-- report view for processtrigger
--
create view dbo.[FilteredProcessTrigger] 
(
    [componentstate],
    [controlname],
    [controltype],
    [controltypename],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [event],
    [formid],
    [formidname],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
    [methodid],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [pipelinestage],
    [primaryentitytypecode],
    [primaryentitytypecodename],
    [processid],
    [processidname],
    [processtriggerid],
    [processtriggeridunique],
    [scope],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [ProcessTrigger].[ComponentState],
    [ProcessTrigger].[ControlName],
    [ProcessTrigger].[ControlType],
    ControlTypePLTable.Value,
    [ProcessTrigger].[CreatedBy],
    [ProcessTrigger].[CreatedByName],
    [ProcessTrigger].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProcessTrigger].[CreatedOn],
			us.TimeZoneCode),
        [ProcessTrigger].[CreatedOn],
    [ProcessTrigger].[CreatedOnBehalfBy],
    [ProcessTrigger].[CreatedOnBehalfByName],
    [ProcessTrigger].[CreatedOnBehalfByYomiName],
    [ProcessTrigger].[Event],
    [ProcessTrigger].[FormId],
    [ProcessTrigger].[FormIdName],
    [ProcessTrigger].[IsCustomizable],
    [ProcessTrigger].[IsManaged],
    IsManagedPLTable.Value,
    [ProcessTrigger].[MethodId],
    [ProcessTrigger].[ModifiedBy],
    [ProcessTrigger].[ModifiedByName],
    [ProcessTrigger].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProcessTrigger].[ModifiedOn],
			us.TimeZoneCode),
        [ProcessTrigger].[ModifiedOn],
    [ProcessTrigger].[ModifiedOnBehalfBy],
    [ProcessTrigger].[ModifiedOnBehalfByName],
    [ProcessTrigger].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProcessTrigger].[OverwriteTime],
			us.TimeZoneCode),
        [ProcessTrigger].[OverwriteTime],
    [ProcessTrigger].[OwnerId],
    [ProcessTrigger].[OwnerIdType],
    [ProcessTrigger].[OwningBusinessUnit],
    [ProcessTrigger].[OwningUser],
    [ProcessTrigger].[PipelineStage],
    [ProcessTrigger].[PrimaryEntityTypeCode],
    PrimaryEntityTypeCodePLTable.Value,
    [ProcessTrigger].[ProcessId],
    [ProcessTrigger].[ProcessIdName],
    [ProcessTrigger].[ProcessTriggerId],
    [ProcessTrigger].[ProcessTriggerIdUnique],
    [ProcessTrigger].[Scope],
    [ProcessTrigger].[SolutionId],
    [ProcessTrigger].[VersionNumber]
from ProcessTrigger
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ControlTypePLTable] on 
		([ControlTypePLTable].AttributeName = 'controltype'
		and [ControlTypePLTable].ObjectTypeCode = 4712
		and [ControlTypePLTable].AttributeValue = [ProcessTrigger].[ControlType]
		and [ControlTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4712
		and [IsManagedPLTable].AttributeValue = [ProcessTrigger].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PrimaryEntityTypeCodePLTable] on 
		([PrimaryEntityTypeCodePLTable].AttributeName = 'primaryentitytypecode'
		and [PrimaryEntityTypeCodePLTable].ObjectTypeCode = 4712
		and [PrimaryEntityTypeCodePLTable].AttributeValue = [ProcessTrigger].[PrimaryEntityTypeCode]
		and [PrimaryEntityTypeCodePLTable].LangId = 
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
	[ProcessTrigger].OwnerId in 
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
		[ProcessTrigger].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4703)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ProcessTrigger].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ProcessTrigger].[ProcessId] in 
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
    ON OBJECT::[dbo].[FilteredProcessTrigger] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProcessTrigger] TO [CRMReaderRole]
    AS [dbo];

