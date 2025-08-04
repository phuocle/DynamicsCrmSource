

--
-- report view for convertruleitem
--
create view dbo.[FilteredConvertRuleItem] 
(
    [componentstate],
    [conditionid],
    [conditionxml],
    [convertruleid],
    [convertruleidname],
    [convertruleitemid],
    [convertruleitemidunique],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [exchangerate],
    [ismanaged],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [primarycreateentitylogicalname],
    [propertiesxml],
    [queueid],
    [queueidname],
    [sequencenumber],
    [solutionid],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [versionnumber],
    [workflowid],
    [workflowidname]
) with view_metadata as
select
    [ConvertRuleItem].[ComponentState],
    [ConvertRuleItem].[ConditionId],
    [ConvertRuleItem].[ConditionXml],
    [ConvertRuleItem].[ConvertRuleId],
    [ConvertRuleItem].[ConvertRuleIdName],
    [ConvertRuleItem].[ConvertRuleItemId],
    [ConvertRuleItem].[ConvertRuleItemIdUnique],
    [ConvertRuleItem].[CreatedBy],
    [ConvertRuleItem].[CreatedByName],
    [ConvertRuleItem].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConvertRuleItem].[CreatedOn],
			us.TimeZoneCode),
        [ConvertRuleItem].[CreatedOn],
    [ConvertRuleItem].[CreatedOnBehalfBy],
    [ConvertRuleItem].[CreatedOnBehalfByName],
    [ConvertRuleItem].[CreatedOnBehalfByYomiName],
    [ConvertRuleItem].[Description],
    [ConvertRuleItem].[ExchangeRate],
    [ConvertRuleItem].[IsManaged],
    [ConvertRuleItem].[ModifiedBy],
    [ConvertRuleItem].[ModifiedByName],
    [ConvertRuleItem].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConvertRuleItem].[ModifiedOn],
			us.TimeZoneCode),
        [ConvertRuleItem].[ModifiedOn],
    [ConvertRuleItem].[ModifiedOnBehalfBy],
    [ConvertRuleItem].[ModifiedOnBehalfByName],
    [ConvertRuleItem].[ModifiedOnBehalfByYomiName],
    [ConvertRuleItem].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConvertRuleItem].[OverwriteTime],
			us.TimeZoneCode),
        [ConvertRuleItem].[OverwriteTime],
    [ConvertRuleItem].[OwnerId],
    [ConvertRuleItem].[OwnerIdType],
    [ConvertRuleItem].[OwningBusinessUnit],
    [ConvertRuleItem].[OwningUser],
    [ConvertRuleItem].[PrimaryCreateEntityLogicalName],
    [ConvertRuleItem].[PropertiesXml],
    [ConvertRuleItem].[QueueId],
    [ConvertRuleItem].[QueueIdName],
    [ConvertRuleItem].[SequenceNumber],
    [ConvertRuleItem].[SolutionId],
    [ConvertRuleItem].[TransactionCurrencyId],
    [ConvertRuleItem].[TransactionCurrencyIdName],
    [ConvertRuleItem].[VersionNumber],
    [ConvertRuleItem].[WorkflowId],
    [ConvertRuleItem].[WorkflowIdName]
from ConvertRuleItem
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9300) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[ConvertRuleItem].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9300
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
		[ConvertRuleItem].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 9300)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ConvertRuleItem].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ConvertRuleItem].[ConvertRuleId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9300
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredConvertRuleItem] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredConvertRuleItem] TO [CRMReaderRole]
    AS [dbo];

