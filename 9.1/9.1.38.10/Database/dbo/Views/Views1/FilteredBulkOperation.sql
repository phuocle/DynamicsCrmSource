

--
-- report view for bulkoperation
--
create view dbo.[FilteredBulkOperation] 
(
    [activityadditionalparams],
    [activityid],
    [activitytypecode],
    [activitytypecodename],
    [actualdurationminutes],
    [actualend],
    [actualendutc],
    [actualstart],
    [actualstartutc],
    [bulkoperationnumber],
    [community],
    [communityname],
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
    [createdrecordtypecode],
    [createdrecordtypecodename],
    [deliverylastattemptedon],
    [deliverylastattemptedonutc],
    [deliveryprioritycode],
    [deliveryprioritycodename],
    [description],
    [errornumber],
    [exchangeitemid],
    [exchangerate],
    [exchangeweblink],
    [failurecount],
    [importsequencenumber],
    [instancetypecode],
    [instancetypecodename],
    [isbilled],
    [isbilledname],
    [ismapiprivate],
    [ismapiprivatename],
    [isregularactivity],
    [isregularactivityname],
    [isworkflowcreated],
    [isworkflowcreatedname],
    [lastonholdtime],
    [lastonholdtimeutc],
    [leftvoicemail],
    [leftvoicemailname],
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
    [onholdtime],
    [operationtypecode],
    [operationtypecodename],
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
    [parameters],
    [postponeactivityprocessinguntil],
    [postponeactivityprocessinguntilutc],
    [prioritycode],
    [prioritycodename],
    [processid],
    [regardingobjectid],
    [regardingobjectiddsc],
    [regardingobjectidname],
    [regardingobjectidyominame],
    [regardingobjecttypecode],
    [scheduleddurationminutes],
    [scheduledend],
    [scheduledendutc],
    [scheduledstart],
    [scheduledstartutc],
    [sendermailboxid],
    [sendermailboxidname],
    [senton],
    [sentonutc],
    [seriesid],
    [serviceid],
    [slaid],
    [slainvokedid],
    [slainvokedidname],
    [slaname],
    [sortdate],
    [sortdateutc],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [subject],
    [successcount],
    [targetedrecordtypecode],
    [targetedrecordtypecodename],
    [targetmemberscount],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber],
    [workflowinfo]
) with view_metadata as
select
    [BulkOperation].[ActivityAdditionalParams],
    [BulkOperation].[ActivityId],
    [BulkOperation].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [BulkOperation].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperation].[ActualEnd],
			us.TimeZoneCode),
        [BulkOperation].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperation].[ActualStart],
			us.TimeZoneCode),
        [BulkOperation].[ActualStart],
    [BulkOperation].[BulkOperationNumber],
    [BulkOperation].[Community],
    CommunityPLTable.Value,
    [BulkOperation].[CreatedBy],
    --[BulkOperation].[CreatedByDsc]
    0,
    [BulkOperation].[CreatedByName],
    [BulkOperation].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperation].[CreatedOn],
			us.TimeZoneCode),
        [BulkOperation].[CreatedOn],
    [BulkOperation].[CreatedOnBehalfBy],
    --[BulkOperation].[CreatedOnBehalfByDsc]
    0,
    [BulkOperation].[CreatedOnBehalfByName],
    [BulkOperation].[CreatedOnBehalfByYomiName],
    [BulkOperation].[CreatedRecordTypeCode],
    CreatedRecordTypeCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperation].[DeliveryLastAttemptedOn],
			us.TimeZoneCode),
        [BulkOperation].[DeliveryLastAttemptedOn],
    [BulkOperation].[DeliveryPriorityCode],
    DeliveryPriorityCodePLTable.Value,
    [BulkOperation].[Description],
    [BulkOperation].[ErrorNumber],
    [BulkOperation].[ExchangeItemId],
    [BulkOperation].[ExchangeRate],
    [BulkOperation].[ExchangeWebLink],
    [BulkOperation].[FailureCount],
    [BulkOperation].[ImportSequenceNumber],
    [BulkOperation].[InstanceTypeCode],
    InstanceTypeCodePLTable.Value,
    [BulkOperation].[IsBilled],
    IsBilledPLTable.Value,
    [BulkOperation].[IsMapiPrivate],
    IsMapiPrivatePLTable.Value,
    [BulkOperation].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [BulkOperation].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperation].[LastOnHoldTime],
			us.TimeZoneCode),
        [BulkOperation].[LastOnHoldTime],
    [BulkOperation].[LeftVoiceMail],
    LeftVoiceMailPLTable.Value,
    [BulkOperation].[ModifiedBy],
    --[BulkOperation].[ModifiedByDsc]
    0,
    [BulkOperation].[ModifiedByName],
    [BulkOperation].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperation].[ModifiedOn],
			us.TimeZoneCode),
        [BulkOperation].[ModifiedOn],
    [BulkOperation].[ModifiedOnBehalfBy],
    --[BulkOperation].[ModifiedOnBehalfByDsc]
    0,
    [BulkOperation].[ModifiedOnBehalfByName],
    [BulkOperation].[ModifiedOnBehalfByYomiName],
    [BulkOperation].[OnHoldTime],
    [BulkOperation].[OperationTypeCode],
    OperationTypeCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperation].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [BulkOperation].[OverriddenCreatedOn],
    [BulkOperation].[OwnerId],
    --[BulkOperation].[OwnerIdDsc]
    0,
    [BulkOperation].[OwnerIdName],
    [BulkOperation].[OwnerIdType],
    [BulkOperation].[OwnerIdYomiName],
    [BulkOperation].[OwningBusinessUnit],
    [BulkOperation].[OwningTeam],
    [BulkOperation].[OwningUser],
    [BulkOperation].[Parameters],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperation].[PostponeActivityProcessingUntil],
			us.TimeZoneCode),
        [BulkOperation].[PostponeActivityProcessingUntil],
    [BulkOperation].[PriorityCode],
    PriorityCodePLTable.Value,
    [BulkOperation].[ProcessId],
    [BulkOperation].[RegardingObjectId],
    --[BulkOperation].[RegardingObjectIdDsc]
    0,
    [BulkOperation].[RegardingObjectIdName],
    [BulkOperation].[RegardingObjectIdYomiName],
    [BulkOperation].[RegardingObjectTypeCode],
    [BulkOperation].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperation].[ScheduledEnd],
			us.TimeZoneCode),
        [BulkOperation].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperation].[ScheduledStart],
			us.TimeZoneCode),
        [BulkOperation].[ScheduledStart],
    [BulkOperation].[SenderMailboxId],
    [BulkOperation].[SenderMailboxIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperation].[SentOn],
			us.TimeZoneCode),
        [BulkOperation].[SentOn],
    [BulkOperation].[SeriesId],
    [BulkOperation].[ServiceId],
    [BulkOperation].[SLAId],
    [BulkOperation].[SLAInvokedId],
    [BulkOperation].[SLAInvokedIdName],
    [BulkOperation].[SLAName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperation].[SortDate],
			us.TimeZoneCode),
        [BulkOperation].[SortDate],
    [BulkOperation].[StageId],
    [BulkOperation].[StateCode],
    StateCodePLTable.Value,
    [BulkOperation].[StatusCode],
    StatusCodePLTable.Value,
    [BulkOperation].[Subject],
    [BulkOperation].[SuccessCount],
    [BulkOperation].[TargetedRecordTypeCode],
    TargetedRecordTypeCodePLTable.Value,
    [BulkOperation].[TargetMembersCount],
    [BulkOperation].[TimeZoneRuleVersionNumber],
    [BulkOperation].[TransactionCurrencyId],
    [BulkOperation].[TransactionCurrencyIdName],
    [BulkOperation].[TraversedPath],
    [BulkOperation].[UTCConversionTimeZoneCode],
    [BulkOperation].[VersionNumber],
    [BulkOperation].[WorkflowInfo]
from BulkOperation
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4406
		and [ActivityTypeCodePLTable].AttributeValue = [BulkOperation].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CommunityPLTable] on 
		([CommunityPLTable].AttributeName = 'community'
		and [CommunityPLTable].ObjectTypeCode = 4406
		and [CommunityPLTable].AttributeValue = [BulkOperation].[Community]
		and [CommunityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CreatedRecordTypeCodePLTable] on 
		([CreatedRecordTypeCodePLTable].AttributeName = 'createdrecordtypecode'
		and [CreatedRecordTypeCodePLTable].ObjectTypeCode = 4406
		and [CreatedRecordTypeCodePLTable].AttributeValue = [BulkOperation].[CreatedRecordTypeCode]
		and [CreatedRecordTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DeliveryPriorityCodePLTable] on 
		([DeliveryPriorityCodePLTable].AttributeName = 'deliveryprioritycode'
		and [DeliveryPriorityCodePLTable].ObjectTypeCode = 4406
		and [DeliveryPriorityCodePLTable].AttributeValue = [BulkOperation].[DeliveryPriorityCode]
		and [DeliveryPriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InstanceTypeCodePLTable] on 
		([InstanceTypeCodePLTable].AttributeName = 'instancetypecode'
		and [InstanceTypeCodePLTable].ObjectTypeCode = 4406
		and [InstanceTypeCodePLTable].AttributeValue = [BulkOperation].[InstanceTypeCode]
		and [InstanceTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4406
		and [IsBilledPLTable].AttributeValue = [BulkOperation].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsMapiPrivatePLTable] on 
		([IsMapiPrivatePLTable].AttributeName = 'ismapiprivate'
		and [IsMapiPrivatePLTable].ObjectTypeCode = 4406
		and [IsMapiPrivatePLTable].AttributeValue = [BulkOperation].[IsMapiPrivate]
		and [IsMapiPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4406
		and [IsRegularActivityPLTable].AttributeValue = [BulkOperation].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4406
		and [IsWorkflowCreatedPLTable].AttributeValue = [BulkOperation].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LeftVoiceMailPLTable] on 
		([LeftVoiceMailPLTable].AttributeName = 'leftvoicemail'
		and [LeftVoiceMailPLTable].ObjectTypeCode = 4406
		and [LeftVoiceMailPLTable].AttributeValue = [BulkOperation].[LeftVoiceMail]
		and [LeftVoiceMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OperationTypeCodePLTable] on 
		([OperationTypeCodePLTable].AttributeName = 'operationtypecode'
		and [OperationTypeCodePLTable].ObjectTypeCode = 4406
		and [OperationTypeCodePLTable].AttributeValue = [BulkOperation].[OperationTypeCode]
		and [OperationTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4406
		and [PriorityCodePLTable].AttributeValue = [BulkOperation].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4406
		and [StateCodePLTable].AttributeValue = [BulkOperation].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4406
		and [StatusCodePLTable].AttributeValue = [BulkOperation].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TargetedRecordTypeCodePLTable] on 
		([TargetedRecordTypeCodePLTable].AttributeName = 'targetedrecordtypecode'
		and [TargetedRecordTypeCodePLTable].ObjectTypeCode = 4406
		and [TargetedRecordTypeCodePLTable].AttributeValue = [BulkOperation].[TargetedRecordTypeCode]
		and [TargetedRecordTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4200) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[BulkOperation].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 4200
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
		[BulkOperation].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[BulkOperation].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[BulkOperation].[ActivityId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 4200
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBulkOperation] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBulkOperation] TO [CRMReaderRole]
    AS [dbo];

