

--
-- report view for processstage
--
create view dbo.[FilteredProcessStage] 
(
    [clientdata],
    [connector],
    [istrigger],
    [istriggername],
    [operationid],
    [operationkind],
    [operationkindname],
    [operationtype],
    [operationtypename],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [primaryentitytypecode],
    [primaryentitytypecodename],
    [processid],
    [processidname],
    [processstageid],
    [stagecategory],
    [stagecategoryname],
    [stagename],
    [versionnumber]
) with view_metadata as
select
    [ProcessStage].[ClientData],
    [ProcessStage].[Connector],
    [ProcessStage].[IsTrigger],
    IsTriggerPLTable.Value,
    [ProcessStage].[OperationId],
    [ProcessStage].[OperationKind],
    OperationKindPLTable.Value,
    [ProcessStage].[OperationType],
    OperationTypePLTable.Value,
    [ProcessStage].[OwnerId],
    [ProcessStage].[OwnerIdType],
    [ProcessStage].[OwningBusinessUnit],
    [ProcessStage].[PrimaryEntityTypeCode],
    PrimaryEntityTypeCodePLTable.Value,
    [ProcessStage].[ProcessId],
    [ProcessStage].[ProcessIdName],
    [ProcessStage].[ProcessStageId],
    [ProcessStage].[StageCategory],
    StageCategoryPLTable.Value,
    [ProcessStage].[StageName],
    [ProcessStage].[VersionNumber]
from ProcessStage
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsTriggerPLTable] on 
		([IsTriggerPLTable].AttributeName = 'istrigger'
		and [IsTriggerPLTable].ObjectTypeCode = 4724
		and [IsTriggerPLTable].AttributeValue = [ProcessStage].[IsTrigger]
		and [IsTriggerPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OperationKindPLTable] on 
		([OperationKindPLTable].AttributeName = 'operationkind'
		and [OperationKindPLTable].ObjectTypeCode = 4724
		and [OperationKindPLTable].AttributeValue = [ProcessStage].[OperationKind]
		and [OperationKindPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OperationTypePLTable] on 
		([OperationTypePLTable].AttributeName = 'operationtype'
		and [OperationTypePLTable].ObjectTypeCode = 4724
		and [OperationTypePLTable].AttributeValue = [ProcessStage].[OperationType]
		and [OperationTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PrimaryEntityTypeCodePLTable] on 
		([PrimaryEntityTypeCodePLTable].AttributeName = 'primaryentitytypecode'
		and [PrimaryEntityTypeCodePLTable].ObjectTypeCode = 4724
		and [PrimaryEntityTypeCodePLTable].AttributeValue = [ProcessStage].[PrimaryEntityTypeCode]
		and [PrimaryEntityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StageCategoryPLTable] on 
		([StageCategoryPLTable].AttributeName = 'stagecategory'
		and [StageCategoryPLTable].ObjectTypeCode = 4724
		and [StageCategoryPLTable].AttributeValue = [ProcessStage].[StageCategory]
		and [StageCategoryPLTable].LangId = 
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
	[ProcessStage].OwnerId in 
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
		[ProcessStage].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4703)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ProcessStage].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ProcessStage].[ProcessId] in 
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
    ON OBJECT::[dbo].[FilteredProcessStage] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProcessStage] TO [CRMReaderRole]
    AS [dbo];

