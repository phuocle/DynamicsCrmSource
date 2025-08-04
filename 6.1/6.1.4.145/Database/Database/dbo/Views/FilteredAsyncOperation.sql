

--
-- report view for asyncoperation
--
create view dbo.[FilteredAsyncOperation] (
    [asyncoperationid],
    [completedon],
    [completedonutc],
    [correlationid],
    [correlationupdatedtime],
    [correlationupdatedtimeutc],
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
    [data],
    [dependencytoken],
    [depth],
    [errorcode],
    [executiontimespan],
    [friendlymessage],
    [hostid],
    [iswaitingforevent],
    [message],
    [messagename],
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
    [name],
    [operationtype],
    [operationtypename],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningextensionid],
    [owningextensionidname],
    [owningextensiontypecode],
    [owningteam],
    [owninguser],
    [postponeuntil],
    [postponeuntilutc],
    [primaryentitytype],
    [primaryentitytypename],
    [recurrencepattern],
    [recurrencestarttime],
    [recurrencestarttimeutc],
    [regardingobjectid],
    [regardingobjectiddsc],
    [regardingobjectidname],
    [regardingobjectidyominame],
    [regardingobjecttypecode],
    [requestid],
    [retrycount],
    [sequence],
    [startedon],
    [startedonutc],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [subtype],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [workflowactivationid],
    [workflowactivationiddsc],
    [workflowactivationidname],
    [workflowstagename]
) with view_metadata as
select
    [AsyncOperation].[AsyncOperationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AsyncOperation].[CompletedOn],
			us.TimeZoneCode),
        [AsyncOperation].[CompletedOn],
    [AsyncOperation].[CorrelationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AsyncOperation].[CorrelationUpdatedTime],
			us.TimeZoneCode),
        [AsyncOperation].[CorrelationUpdatedTime],
    [AsyncOperation].[CreatedBy],
    --[AsyncOperation].[CreatedByDsc]
    0,
    [AsyncOperation].[CreatedByName],
    [AsyncOperation].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AsyncOperation].[CreatedOn],
			us.TimeZoneCode),
        [AsyncOperation].[CreatedOn],
    [AsyncOperation].[CreatedOnBehalfBy],
    --[AsyncOperation].[CreatedOnBehalfByDsc]
    0,
    [AsyncOperation].[CreatedOnBehalfByName],
    [AsyncOperation].[CreatedOnBehalfByYomiName],
    [AsyncOperation].[Data],
    [AsyncOperation].[DependencyToken],
    [AsyncOperation].[Depth],
    [AsyncOperation].[ErrorCode],
    [AsyncOperation].[ExecutionTimeSpan],
    [AsyncOperation].[FriendlyMessage],
    [AsyncOperation].[HostId],
    [AsyncOperation].[IsWaitingForEvent],
    [AsyncOperation].[Message],
    [AsyncOperation].[MessageName],
    [AsyncOperation].[ModifiedBy],
    --[AsyncOperation].[ModifiedByDsc]
    0,
    [AsyncOperation].[ModifiedByName],
    [AsyncOperation].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AsyncOperation].[ModifiedOn],
			us.TimeZoneCode),
        [AsyncOperation].[ModifiedOn],
    [AsyncOperation].[ModifiedOnBehalfBy],
    --[AsyncOperation].[ModifiedOnBehalfByDsc]
    0,
    [AsyncOperation].[ModifiedOnBehalfByName],
    [AsyncOperation].[ModifiedOnBehalfByYomiName],
    [AsyncOperation].[Name],
    [AsyncOperation].[OperationType],
    OperationTypePLTable.Value,
    [AsyncOperation].[OwnerId],
    --[AsyncOperation].[OwnerIdDsc]
    0,
    [AsyncOperation].[OwnerIdName],
    [AsyncOperation].[OwnerIdType],
    [AsyncOperation].[OwnerIdYomiName],
    [AsyncOperation].[OwningBusinessUnit],
    [AsyncOperation].[OwningExtensionId],
    [AsyncOperation].[OwningExtensionIdName],
    [AsyncOperation].[OwningExtensionTypeCode],
    [AsyncOperation].[OwningTeam],
    [AsyncOperation].[OwningUser],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AsyncOperation].[PostponeUntil],
			us.TimeZoneCode),
        [AsyncOperation].[PostponeUntil],
    [AsyncOperation].[PrimaryEntityType],
    PrimaryEntityTypePLTable.Value,
    [AsyncOperation].[RecurrencePattern],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AsyncOperation].[RecurrenceStartTime],
			us.TimeZoneCode),
        [AsyncOperation].[RecurrenceStartTime],
    [AsyncOperation].[RegardingObjectId],
    --[AsyncOperation].[RegardingObjectIdDsc]
    0,
    [AsyncOperation].[RegardingObjectIdName],
    [AsyncOperation].[RegardingObjectIdYomiName],
    [AsyncOperation].[RegardingObjectTypeCode],
    [AsyncOperation].[RequestId],
    [AsyncOperation].[RetryCount],
    [AsyncOperation].[Sequence],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AsyncOperation].[StartedOn],
			us.TimeZoneCode),
        [AsyncOperation].[StartedOn],
    [AsyncOperation].[StateCode],
    StateCodePLTable.Value,
    [AsyncOperation].[StatusCode],
    StatusCodePLTable.Value,
    [AsyncOperation].[Subtype],
    [AsyncOperation].[TimeZoneRuleVersionNumber],
    [AsyncOperation].[UTCConversionTimeZoneCode],
    [AsyncOperation].[WorkflowActivationId],
    --[AsyncOperation].[WorkflowActivationIdDsc]
    0,
    [AsyncOperation].[WorkflowActivationIdName],
    [AsyncOperation].[WorkflowStageName]
from AsyncOperation
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [OperationTypePLTable] on 
		([OperationTypePLTable].AttributeName = 'operationtype'
		and [OperationTypePLTable].ObjectTypeCode = 4700
		and [OperationTypePLTable].AttributeValue = [AsyncOperation].[OperationType]
		and [OperationTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PrimaryEntityTypePLTable] on 
		([PrimaryEntityTypePLTable].AttributeName = 'primaryentitytype'
		and [PrimaryEntityTypePLTable].ObjectTypeCode = 4700
		and [PrimaryEntityTypePLTable].AttributeValue = [AsyncOperation].[PrimaryEntityType]
		and [PrimaryEntityTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4700
		and [StateCodePLTable].AttributeValue = [AsyncOperation].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4700
		and [StatusCodePLTable].AttributeValue = [AsyncOperation].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4700) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[AsyncOperation].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 4700
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
		[AsyncOperation].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4700)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[AsyncOperation].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[AsyncOperation].[AsyncOperationId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 4700 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAsyncOperation] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAsyncOperation] TO [CRMReaderRole]
    AS [dbo];

