

--
-- report view for activitypointer
--
create view dbo.[FilteredActivityPointer] (
    [activityid],
    [activitytypecode],
    [activitytypecodename],
    [actualdurationminutes],
    [actualend],
    [actualendutc],
    [actualstart],
    [actualstartutc],
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
    [deliverylastattemptedon],
    [deliverylastattemptedonutc],
    [deliveryprioritycode],
    [deliveryprioritycodename],
    [description],
    [exchangerate],
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
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
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
    [serviceiddsc],
    [serviceidname],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [subject],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ActivityPointer].[ActivityId],
    [ActivityPointer].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [ActivityPointer].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityPointer].[ActualEnd],
			us.TimeZoneCode),
        [ActivityPointer].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityPointer].[ActualStart],
			us.TimeZoneCode),
        [ActivityPointer].[ActualStart],
    [ActivityPointer].[Community],
    CommunityPLTable.Value,
    [ActivityPointer].[CreatedBy],
    --[ActivityPointer].[CreatedByDsc]
    0,
    [ActivityPointer].[CreatedByName],
    [ActivityPointer].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityPointer].[CreatedOn],
			us.TimeZoneCode),
        [ActivityPointer].[CreatedOn],
    [ActivityPointer].[CreatedOnBehalfBy],
    --[ActivityPointer].[CreatedOnBehalfByDsc]
    0,
    [ActivityPointer].[CreatedOnBehalfByName],
    [ActivityPointer].[CreatedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityPointer].[DeliveryLastAttemptedOn],
			us.TimeZoneCode),
        [ActivityPointer].[DeliveryLastAttemptedOn],
    [ActivityPointer].[DeliveryPriorityCode],
    DeliveryPriorityCodePLTable.Value,
    [ActivityPointer].[Description],
    [ActivityPointer].[ExchangeRate],
    [ActivityPointer].[InstanceTypeCode],
    InstanceTypeCodePLTable.Value,
    [ActivityPointer].[IsBilled],
    IsBilledPLTable.Value,
    [ActivityPointer].[IsMapiPrivate],
    IsMapiPrivatePLTable.Value,
    [ActivityPointer].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [ActivityPointer].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    [ActivityPointer].[LeftVoiceMail],
    LeftVoiceMailPLTable.Value,
    [ActivityPointer].[ModifiedBy],
    --[ActivityPointer].[ModifiedByDsc]
    0,
    [ActivityPointer].[ModifiedByName],
    [ActivityPointer].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityPointer].[ModifiedOn],
			us.TimeZoneCode),
        [ActivityPointer].[ModifiedOn],
    [ActivityPointer].[ModifiedOnBehalfBy],
    --[ActivityPointer].[ModifiedOnBehalfByDsc]
    0,
    [ActivityPointer].[ModifiedOnBehalfByName],
    [ActivityPointer].[ModifiedOnBehalfByYomiName],
    [ActivityPointer].[OwnerId],
    --[ActivityPointer].[OwnerIdDsc]
    0,
    [ActivityPointer].[OwnerIdName],
    [ActivityPointer].[OwnerIdType],
    [ActivityPointer].[OwnerIdYomiName],
    [ActivityPointer].[OwningBusinessUnit],
    [ActivityPointer].[OwningTeam],
    [ActivityPointer].[OwningUser],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityPointer].[PostponeActivityProcessingUntil],
			us.TimeZoneCode),
        [ActivityPointer].[PostponeActivityProcessingUntil],
    [ActivityPointer].[PriorityCode],
    PriorityCodePLTable.Value,
    [ActivityPointer].[ProcessId],
    [ActivityPointer].[RegardingObjectId],
    --[ActivityPointer].[RegardingObjectIdDsc]
    0,
    [ActivityPointer].[RegardingObjectIdName],
    [ActivityPointer].[RegardingObjectIdYomiName],
    [ActivityPointer].[RegardingObjectTypeCode],
    [ActivityPointer].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityPointer].[ScheduledEnd],
			us.TimeZoneCode),
        [ActivityPointer].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityPointer].[ScheduledStart],
			us.TimeZoneCode),
        [ActivityPointer].[ScheduledStart],
    [ActivityPointer].[SenderMailboxId],
    [ActivityPointer].[SenderMailboxIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityPointer].[SentOn],
			us.TimeZoneCode),
        [ActivityPointer].[SentOn],
    [ActivityPointer].[SeriesId],
    [ActivityPointer].[ServiceId],
    --[ActivityPointer].[ServiceIdDsc]
    0,
    [ActivityPointer].[ServiceIdName],
    [ActivityPointer].[StageId],
    [ActivityPointer].[StateCode],
    StateCodePLTable.Value,
    [ActivityPointer].[StatusCode],
    StatusCodePLTable.Value,
    [ActivityPointer].[Subject],
    [ActivityPointer].[TimeZoneRuleVersionNumber],
    [ActivityPointer].[TransactionCurrencyId],
    [ActivityPointer].[TransactionCurrencyIdName],
    [ActivityPointer].[UTCConversionTimeZoneCode],
    [ActivityPointer].[VersionNumber]
from ActivityPointer
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4200
		and [ActivityTypeCodePLTable].AttributeValue = [ActivityPointer].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CommunityPLTable] on 
		([CommunityPLTable].AttributeName = 'community'
		and [CommunityPLTable].ObjectTypeCode = 4200
		and [CommunityPLTable].AttributeValue = [ActivityPointer].[Community]
		and [CommunityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DeliveryPriorityCodePLTable] on 
		([DeliveryPriorityCodePLTable].AttributeName = 'deliveryprioritycode'
		and [DeliveryPriorityCodePLTable].ObjectTypeCode = 4200
		and [DeliveryPriorityCodePLTable].AttributeValue = [ActivityPointer].[DeliveryPriorityCode]
		and [DeliveryPriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InstanceTypeCodePLTable] on 
		([InstanceTypeCodePLTable].AttributeName = 'instancetypecode'
		and [InstanceTypeCodePLTable].ObjectTypeCode = 4200
		and [InstanceTypeCodePLTable].AttributeValue = [ActivityPointer].[InstanceTypeCode]
		and [InstanceTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4200
		and [IsBilledPLTable].AttributeValue = [ActivityPointer].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsMapiPrivatePLTable] on 
		([IsMapiPrivatePLTable].AttributeName = 'ismapiprivate'
		and [IsMapiPrivatePLTable].ObjectTypeCode = 4200
		and [IsMapiPrivatePLTable].AttributeValue = [ActivityPointer].[IsMapiPrivate]
		and [IsMapiPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4200
		and [IsRegularActivityPLTable].AttributeValue = [ActivityPointer].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4200
		and [IsWorkflowCreatedPLTable].AttributeValue = [ActivityPointer].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LeftVoiceMailPLTable] on 
		([LeftVoiceMailPLTable].AttributeName = 'leftvoicemail'
		and [LeftVoiceMailPLTable].ObjectTypeCode = 4200
		and [LeftVoiceMailPLTable].AttributeValue = [ActivityPointer].[LeftVoiceMail]
		and [LeftVoiceMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4200
		and [PriorityCodePLTable].AttributeValue = [ActivityPointer].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = ActivityPointer.ActivityTypeCode
		and [StateCodePLTable].AttributeValue = [ActivityPointer].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = ActivityPointer.ActivityTypeCode
		and [StatusCodePLTable].AttributeValue = [ActivityPointer].[StatusCode]
		and [StatusCodePLTable].LangId = 
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
	--
	[ActivityPointer].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
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
		[ActivityPointer].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ActivityPointer].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ActivityPointer].[ActivityId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 4200 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredActivityPointer] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredActivityPointer] TO [CRMReaderRole]
    AS [dbo];

