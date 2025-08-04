

--
-- report view for incidentresolution
--
create view dbo.[FilteredIncidentResolution] 
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
    [category],
    [community],
    [communityname],
    [createdby],
    [createdbydsc],
    [createdbyexternalparty],
    [createdbyexternalpartyname],
    [createdbyexternalpartyyominame],
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
    [exchangeitemid],
    [exchangerate],
    [exchangeweblink],
    [importsequencenumber],
    [incidentid],
    [incidentidname],
    [incidentidtype],
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
    [modifiedbyexternalparty],
    [modifiedbyexternalpartyname],
    [modifiedbyexternalpartyyominame],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [onholdtime],
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
    [resolutiontypecode],
    [resolutiontypecodename],
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
    [serviceidname],
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
    [subcategory],
    [subject],
    [timespent],
    [timezoneruleversionnumber],
    [totaltimespent],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [IncidentResolution].[ActivityAdditionalParams],
    [IncidentResolution].[ActivityId],
    [IncidentResolution].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [IncidentResolution].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[ActualEnd],
			us.TimeZoneCode),
        [IncidentResolution].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[ActualStart],
			us.TimeZoneCode),
        [IncidentResolution].[ActualStart],
    [IncidentResolution].[Category],
    [IncidentResolution].[Community],
    CommunityPLTable.Value,
    [IncidentResolution].[CreatedBy],
    --[IncidentResolution].[CreatedByDsc]
    0,
    [IncidentResolution].[CreatedByExternalParty],
    [IncidentResolution].[CreatedByExternalPartyName],
    [IncidentResolution].[CreatedByExternalPartyYomiName],
    [IncidentResolution].[CreatedByName],
    [IncidentResolution].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[CreatedOn],
			us.TimeZoneCode),
        [IncidentResolution].[CreatedOn],
    [IncidentResolution].[CreatedOnBehalfBy],
    --[IncidentResolution].[CreatedOnBehalfByDsc]
    0,
    [IncidentResolution].[CreatedOnBehalfByName],
    [IncidentResolution].[CreatedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[DeliveryLastAttemptedOn],
			us.TimeZoneCode),
        [IncidentResolution].[DeliveryLastAttemptedOn],
    [IncidentResolution].[DeliveryPriorityCode],
    DeliveryPriorityCodePLTable.Value,
    [IncidentResolution].[Description],
    [IncidentResolution].[ExchangeItemId],
    [IncidentResolution].[ExchangeRate],
    [IncidentResolution].[ExchangeWebLink],
    [IncidentResolution].[ImportSequenceNumber],
    [IncidentResolution].[IncidentId],
    [IncidentResolution].[IncidentIdName],
    [IncidentResolution].[IncidentIdType],
    [IncidentResolution].[InstanceTypeCode],
    InstanceTypeCodePLTable.Value,
    [IncidentResolution].[IsBilled],
    IsBilledPLTable.Value,
    [IncidentResolution].[IsMapiPrivate],
    IsMapiPrivatePLTable.Value,
    [IncidentResolution].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [IncidentResolution].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[LastOnHoldTime],
			us.TimeZoneCode),
        [IncidentResolution].[LastOnHoldTime],
    [IncidentResolution].[LeftVoiceMail],
    LeftVoiceMailPLTable.Value,
    [IncidentResolution].[ModifiedBy],
    --[IncidentResolution].[ModifiedByDsc]
    0,
    [IncidentResolution].[ModifiedByExternalParty],
    [IncidentResolution].[ModifiedByExternalPartyName],
    [IncidentResolution].[ModifiedByExternalPartyYomiName],
    [IncidentResolution].[ModifiedByName],
    [IncidentResolution].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[ModifiedOn],
			us.TimeZoneCode),
        [IncidentResolution].[ModifiedOn],
    [IncidentResolution].[ModifiedOnBehalfBy],
    --[IncidentResolution].[ModifiedOnBehalfByDsc]
    0,
    [IncidentResolution].[ModifiedOnBehalfByName],
    [IncidentResolution].[ModifiedOnBehalfByYomiName],
    [IncidentResolution].[OnHoldTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [IncidentResolution].[OverriddenCreatedOn],
    [IncidentResolution].[OwnerId],
    --[IncidentResolution].[OwnerIdDsc]
    0,
    [IncidentResolution].[OwnerIdName],
    [IncidentResolution].[OwnerIdType],
    [IncidentResolution].[OwnerIdYomiName],
    [IncidentResolution].[OwningBusinessUnit],
    [IncidentResolution].[OwningTeam],
    [IncidentResolution].[OwningUser],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[PostponeActivityProcessingUntil],
			us.TimeZoneCode),
        [IncidentResolution].[PostponeActivityProcessingUntil],
    [IncidentResolution].[PriorityCode],
    PriorityCodePLTable.Value,
    [IncidentResolution].[ProcessId],
    [IncidentResolution].[RegardingObjectId],
    --[IncidentResolution].[RegardingObjectIdDsc]
    0,
    [IncidentResolution].[RegardingObjectIdName],
    [IncidentResolution].[RegardingObjectIdYomiName],
    [IncidentResolution].[RegardingObjectTypeCode],
    [IncidentResolution].[ResolutionTypeCode],
    ResolutionTypeCodePLTable.Value,
    [IncidentResolution].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[ScheduledEnd],
			us.TimeZoneCode),
        [IncidentResolution].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[ScheduledStart],
			us.TimeZoneCode),
        [IncidentResolution].[ScheduledStart],
    [IncidentResolution].[SenderMailboxId],
    [IncidentResolution].[SenderMailboxIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[SentOn],
			us.TimeZoneCode),
        [IncidentResolution].[SentOn],
    [IncidentResolution].[SeriesId],
    [IncidentResolution].[ServiceId],
    [IncidentResolution].[ServiceIdName],
    [IncidentResolution].[SLAId],
    [IncidentResolution].[SLAInvokedId],
    [IncidentResolution].[SLAInvokedIdName],
    [IncidentResolution].[SLAName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[SortDate],
			us.TimeZoneCode),
        [IncidentResolution].[SortDate],
    [IncidentResolution].[StageId],
    [IncidentResolution].[StateCode],
    StateCodePLTable.Value,
    [IncidentResolution].[StatusCode],
    StatusCodePLTable.Value,
    [IncidentResolution].[Subcategory],
    [IncidentResolution].[Subject],
    [IncidentResolution].[TimeSpent],
    [IncidentResolution].[TimeZoneRuleVersionNumber],
    [IncidentResolution].[TotalTimeSpent],
    [IncidentResolution].[TransactionCurrencyId],
    [IncidentResolution].[TransactionCurrencyIdName],
    [IncidentResolution].[TraversedPath],
    [IncidentResolution].[UTCConversionTimeZoneCode],
    [IncidentResolution].[VersionNumber]
from IncidentResolution
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4206
		and [ActivityTypeCodePLTable].AttributeValue = [IncidentResolution].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CommunityPLTable] on 
		([CommunityPLTable].AttributeName = 'community'
		and [CommunityPLTable].ObjectTypeCode = 4206
		and [CommunityPLTable].AttributeValue = [IncidentResolution].[Community]
		and [CommunityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DeliveryPriorityCodePLTable] on 
		([DeliveryPriorityCodePLTable].AttributeName = 'deliveryprioritycode'
		and [DeliveryPriorityCodePLTable].ObjectTypeCode = 4206
		and [DeliveryPriorityCodePLTable].AttributeValue = [IncidentResolution].[DeliveryPriorityCode]
		and [DeliveryPriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InstanceTypeCodePLTable] on 
		([InstanceTypeCodePLTable].AttributeName = 'instancetypecode'
		and [InstanceTypeCodePLTable].ObjectTypeCode = 4206
		and [InstanceTypeCodePLTable].AttributeValue = [IncidentResolution].[InstanceTypeCode]
		and [InstanceTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4206
		and [IsBilledPLTable].AttributeValue = [IncidentResolution].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsMapiPrivatePLTable] on 
		([IsMapiPrivatePLTable].AttributeName = 'ismapiprivate'
		and [IsMapiPrivatePLTable].ObjectTypeCode = 4206
		and [IsMapiPrivatePLTable].AttributeValue = [IncidentResolution].[IsMapiPrivate]
		and [IsMapiPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4206
		and [IsRegularActivityPLTable].AttributeValue = [IncidentResolution].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4206
		and [IsWorkflowCreatedPLTable].AttributeValue = [IncidentResolution].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LeftVoiceMailPLTable] on 
		([LeftVoiceMailPLTable].AttributeName = 'leftvoicemail'
		and [LeftVoiceMailPLTable].ObjectTypeCode = 4206
		and [LeftVoiceMailPLTable].AttributeValue = [IncidentResolution].[LeftVoiceMail]
		and [LeftVoiceMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4206
		and [PriorityCodePLTable].AttributeValue = [IncidentResolution].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ResolutionTypeCodePLTable] on 
		([ResolutionTypeCodePLTable].AttributeName = 'resolutiontypecode'
		and [ResolutionTypeCodePLTable].ObjectTypeCode = 4206
		and [ResolutionTypeCodePLTable].AttributeValue = [IncidentResolution].[ResolutionTypeCode]
		and [ResolutionTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4206
		and [StateCodePLTable].AttributeValue = [IncidentResolution].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4206
		and [StatusCodePLTable].AttributeValue = [IncidentResolution].[StatusCode]
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
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[IncidentResolution].OwnerId in 
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
		[IncidentResolution].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[IncidentResolution].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[IncidentResolution].[ActivityId] in 
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
    ON OBJECT::[dbo].[FilteredIncidentResolution] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredIncidentResolution] TO [CRMReaderRole]
    AS [dbo];

