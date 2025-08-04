

--
-- report view for quoteclose
--
create view dbo.[FilteredQuoteClose] 
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
    [quoteid],
    [quoteidname],
    [quoteidtype],
    [quotenumber],
    [regardingobjectid],
    [regardingobjectiddsc],
    [regardingobjectidname],
    [regardingobjectidyominame],
    [regardingobjecttypecode],
    [revision],
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
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [QuoteClose].[ActivityAdditionalParams],
    [QuoteClose].[ActivityId],
    [QuoteClose].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [QuoteClose].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[ActualEnd],
			us.TimeZoneCode),
        [QuoteClose].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[ActualStart],
			us.TimeZoneCode),
        [QuoteClose].[ActualStart],
    [QuoteClose].[Category],
    [QuoteClose].[Community],
    CommunityPLTable.Value,
    [QuoteClose].[CreatedBy],
    --[QuoteClose].[CreatedByDsc]
    0,
    [QuoteClose].[CreatedByExternalParty],
    [QuoteClose].[CreatedByExternalPartyName],
    [QuoteClose].[CreatedByExternalPartyYomiName],
    [QuoteClose].[CreatedByName],
    [QuoteClose].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[CreatedOn],
			us.TimeZoneCode),
        [QuoteClose].[CreatedOn],
    [QuoteClose].[CreatedOnBehalfBy],
    --[QuoteClose].[CreatedOnBehalfByDsc]
    0,
    [QuoteClose].[CreatedOnBehalfByName],
    [QuoteClose].[CreatedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[DeliveryLastAttemptedOn],
			us.TimeZoneCode),
        [QuoteClose].[DeliveryLastAttemptedOn],
    [QuoteClose].[DeliveryPriorityCode],
    DeliveryPriorityCodePLTable.Value,
    [QuoteClose].[Description],
    [QuoteClose].[ExchangeItemId],
    [QuoteClose].[ExchangeRate],
    [QuoteClose].[ExchangeWebLink],
    [QuoteClose].[ImportSequenceNumber],
    [QuoteClose].[InstanceTypeCode],
    InstanceTypeCodePLTable.Value,
    [QuoteClose].[IsBilled],
    IsBilledPLTable.Value,
    [QuoteClose].[IsMapiPrivate],
    IsMapiPrivatePLTable.Value,
    [QuoteClose].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [QuoteClose].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[LastOnHoldTime],
			us.TimeZoneCode),
        [QuoteClose].[LastOnHoldTime],
    [QuoteClose].[LeftVoiceMail],
    LeftVoiceMailPLTable.Value,
    [QuoteClose].[ModifiedBy],
    --[QuoteClose].[ModifiedByDsc]
    0,
    [QuoteClose].[ModifiedByExternalParty],
    [QuoteClose].[ModifiedByExternalPartyName],
    [QuoteClose].[ModifiedByExternalPartyYomiName],
    [QuoteClose].[ModifiedByName],
    [QuoteClose].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[ModifiedOn],
			us.TimeZoneCode),
        [QuoteClose].[ModifiedOn],
    [QuoteClose].[ModifiedOnBehalfBy],
    --[QuoteClose].[ModifiedOnBehalfByDsc]
    0,
    [QuoteClose].[ModifiedOnBehalfByName],
    [QuoteClose].[ModifiedOnBehalfByYomiName],
    [QuoteClose].[OnHoldTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [QuoteClose].[OverriddenCreatedOn],
    [QuoteClose].[OwnerId],
    --[QuoteClose].[OwnerIdDsc]
    0,
    [QuoteClose].[OwnerIdName],
    [QuoteClose].[OwnerIdType],
    [QuoteClose].[OwnerIdYomiName],
    [QuoteClose].[OwningBusinessUnit],
    [QuoteClose].[OwningTeam],
    [QuoteClose].[OwningUser],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[PostponeActivityProcessingUntil],
			us.TimeZoneCode),
        [QuoteClose].[PostponeActivityProcessingUntil],
    [QuoteClose].[PriorityCode],
    PriorityCodePLTable.Value,
    [QuoteClose].[ProcessId],
    [QuoteClose].[QuoteId],
    [QuoteClose].[QuoteIdName],
    [QuoteClose].[QuoteIdType],
    [QuoteClose].[QuoteNumber],
    [QuoteClose].[RegardingObjectId],
    --[QuoteClose].[RegardingObjectIdDsc]
    0,
    [QuoteClose].[RegardingObjectIdName],
    [QuoteClose].[RegardingObjectIdYomiName],
    [QuoteClose].[RegardingObjectTypeCode],
    [QuoteClose].[Revision],
    [QuoteClose].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[ScheduledEnd],
			us.TimeZoneCode),
        [QuoteClose].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[ScheduledStart],
			us.TimeZoneCode),
        [QuoteClose].[ScheduledStart],
    [QuoteClose].[SenderMailboxId],
    [QuoteClose].[SenderMailboxIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[SentOn],
			us.TimeZoneCode),
        [QuoteClose].[SentOn],
    [QuoteClose].[SeriesId],
    [QuoteClose].[ServiceId],
    [QuoteClose].[ServiceIdName],
    [QuoteClose].[SLAId],
    [QuoteClose].[SLAInvokedId],
    [QuoteClose].[SLAInvokedIdName],
    [QuoteClose].[SLAName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[SortDate],
			us.TimeZoneCode),
        [QuoteClose].[SortDate],
    [QuoteClose].[StageId],
    [QuoteClose].[StateCode],
    StateCodePLTable.Value,
    [QuoteClose].[StatusCode],
    StatusCodePLTable.Value,
    [QuoteClose].[Subcategory],
    [QuoteClose].[Subject],
    [QuoteClose].[TimeZoneRuleVersionNumber],
    [QuoteClose].[TransactionCurrencyId],
    [QuoteClose].[TransactionCurrencyIdName],
    [QuoteClose].[TraversedPath],
    [QuoteClose].[UTCConversionTimeZoneCode],
    [QuoteClose].[VersionNumber]
from QuoteClose
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4211
		and [ActivityTypeCodePLTable].AttributeValue = [QuoteClose].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CommunityPLTable] on 
		([CommunityPLTable].AttributeName = 'community'
		and [CommunityPLTable].ObjectTypeCode = 4211
		and [CommunityPLTable].AttributeValue = [QuoteClose].[Community]
		and [CommunityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DeliveryPriorityCodePLTable] on 
		([DeliveryPriorityCodePLTable].AttributeName = 'deliveryprioritycode'
		and [DeliveryPriorityCodePLTable].ObjectTypeCode = 4211
		and [DeliveryPriorityCodePLTable].AttributeValue = [QuoteClose].[DeliveryPriorityCode]
		and [DeliveryPriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InstanceTypeCodePLTable] on 
		([InstanceTypeCodePLTable].AttributeName = 'instancetypecode'
		and [InstanceTypeCodePLTable].ObjectTypeCode = 4211
		and [InstanceTypeCodePLTable].AttributeValue = [QuoteClose].[InstanceTypeCode]
		and [InstanceTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4211
		and [IsBilledPLTable].AttributeValue = [QuoteClose].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsMapiPrivatePLTable] on 
		([IsMapiPrivatePLTable].AttributeName = 'ismapiprivate'
		and [IsMapiPrivatePLTable].ObjectTypeCode = 4211
		and [IsMapiPrivatePLTable].AttributeValue = [QuoteClose].[IsMapiPrivate]
		and [IsMapiPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4211
		and [IsRegularActivityPLTable].AttributeValue = [QuoteClose].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4211
		and [IsWorkflowCreatedPLTable].AttributeValue = [QuoteClose].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LeftVoiceMailPLTable] on 
		([LeftVoiceMailPLTable].AttributeName = 'leftvoicemail'
		and [LeftVoiceMailPLTable].ObjectTypeCode = 4211
		and [LeftVoiceMailPLTable].AttributeValue = [QuoteClose].[LeftVoiceMail]
		and [LeftVoiceMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4211
		and [PriorityCodePLTable].AttributeValue = [QuoteClose].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4211
		and [StateCodePLTable].AttributeValue = [QuoteClose].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4211
		and [StatusCodePLTable].AttributeValue = [QuoteClose].[StatusCode]
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
	[QuoteClose].OwnerId in 
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
		[QuoteClose].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[QuoteClose].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[QuoteClose].[ActivityId] in 
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
    ON OBJECT::[dbo].[FilteredQuoteClose] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredQuoteClose] TO [CRMReaderRole]
    AS [dbo];

