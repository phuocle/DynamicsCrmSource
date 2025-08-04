

--
-- report view for opportunityclose
--
create view dbo.[FilteredOpportunityClose] 
(
    [activityadditionalparams],
    [activityid],
    [activitytypecode],
    [activitytypecodename],
    [actualdurationminutes],
    [actualend],
    [actualendutc],
    [actualrevenue],
    [actualrevenue_base],
    [actualstart],
    [actualstartutc],
    [category],
    [community],
    [communityname],
    [competitorid],
    [competitoridname],
    [competitoridyominame],
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
    [opportunityid],
    [opportunityidname],
    [opportunityidtype],
    [opportunitystatecode],
    [opportunitystatecodename],
    [opportunitystatuscode],
    [opportunitystatuscodename],
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
    [versionnumber],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [OpportunityClose].[ActivityAdditionalParams],
    [OpportunityClose].[ActivityId],
    [OpportunityClose].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [OpportunityClose].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[ActualEnd],
			us.TimeZoneCode),
        [OpportunityClose].[ActualEnd],
    [OpportunityClose].[ActualRevenue],
    [OpportunityClose].[ActualRevenue_Base],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[ActualStart],
			us.TimeZoneCode),
        [OpportunityClose].[ActualStart],
    [OpportunityClose].[Category],
    [OpportunityClose].[Community],
    CommunityPLTable.Value,
    [OpportunityClose].[CompetitorId],
    [OpportunityClose].[CompetitorIdName],
    [OpportunityClose].[CompetitorIdYomiName],
    [OpportunityClose].[CreatedBy],
    --[OpportunityClose].[CreatedByDsc]
    0,
    [OpportunityClose].[CreatedByExternalParty],
    [OpportunityClose].[CreatedByExternalPartyName],
    [OpportunityClose].[CreatedByExternalPartyYomiName],
    [OpportunityClose].[CreatedByName],
    [OpportunityClose].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[CreatedOn],
			us.TimeZoneCode),
        [OpportunityClose].[CreatedOn],
    [OpportunityClose].[CreatedOnBehalfBy],
    --[OpportunityClose].[CreatedOnBehalfByDsc]
    0,
    [OpportunityClose].[CreatedOnBehalfByName],
    [OpportunityClose].[CreatedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[DeliveryLastAttemptedOn],
			us.TimeZoneCode),
        [OpportunityClose].[DeliveryLastAttemptedOn],
    [OpportunityClose].[DeliveryPriorityCode],
    DeliveryPriorityCodePLTable.Value,
    [OpportunityClose].[Description],
    [OpportunityClose].[ExchangeItemId],
    [OpportunityClose].[ExchangeRate],
    [OpportunityClose].[ExchangeWebLink],
    [OpportunityClose].[ImportSequenceNumber],
    [OpportunityClose].[InstanceTypeCode],
    InstanceTypeCodePLTable.Value,
    [OpportunityClose].[IsBilled],
    IsBilledPLTable.Value,
    [OpportunityClose].[IsMapiPrivate],
    IsMapiPrivatePLTable.Value,
    [OpportunityClose].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [OpportunityClose].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[LastOnHoldTime],
			us.TimeZoneCode),
        [OpportunityClose].[LastOnHoldTime],
    [OpportunityClose].[LeftVoiceMail],
    LeftVoiceMailPLTable.Value,
    [OpportunityClose].[ModifiedBy],
    --[OpportunityClose].[ModifiedByDsc]
    0,
    [OpportunityClose].[ModifiedByExternalParty],
    [OpportunityClose].[ModifiedByExternalPartyName],
    [OpportunityClose].[ModifiedByExternalPartyYomiName],
    [OpportunityClose].[ModifiedByName],
    [OpportunityClose].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[ModifiedOn],
			us.TimeZoneCode),
        [OpportunityClose].[ModifiedOn],
    [OpportunityClose].[ModifiedOnBehalfBy],
    --[OpportunityClose].[ModifiedOnBehalfByDsc]
    0,
    [OpportunityClose].[ModifiedOnBehalfByName],
    [OpportunityClose].[ModifiedOnBehalfByYomiName],
    [OpportunityClose].[OnHoldTime],
    [OpportunityClose].[OpportunityId],
    [OpportunityClose].[OpportunityIdName],
    [OpportunityClose].[OpportunityIdType],
    [OpportunityClose].[OpportunityStateCode],
    OpportunityStateCodePLTable.Value,
    [OpportunityClose].[OpportunityStatusCode],
    OpportunityStatusCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [OpportunityClose].[OverriddenCreatedOn],
    [OpportunityClose].[OwnerId],
    --[OpportunityClose].[OwnerIdDsc]
    0,
    [OpportunityClose].[OwnerIdName],
    [OpportunityClose].[OwnerIdType],
    [OpportunityClose].[OwnerIdYomiName],
    [OpportunityClose].[OwningBusinessUnit],
    [OpportunityClose].[OwningTeam],
    [OpportunityClose].[OwningUser],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[PostponeActivityProcessingUntil],
			us.TimeZoneCode),
        [OpportunityClose].[PostponeActivityProcessingUntil],
    [OpportunityClose].[PriorityCode],
    PriorityCodePLTable.Value,
    [OpportunityClose].[ProcessId],
    [OpportunityClose].[RegardingObjectId],
    --[OpportunityClose].[RegardingObjectIdDsc]
    0,
    [OpportunityClose].[RegardingObjectIdName],
    [OpportunityClose].[RegardingObjectIdYomiName],
    [OpportunityClose].[RegardingObjectTypeCode],
    [OpportunityClose].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[ScheduledEnd],
			us.TimeZoneCode),
        [OpportunityClose].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[ScheduledStart],
			us.TimeZoneCode),
        [OpportunityClose].[ScheduledStart],
    [OpportunityClose].[SenderMailboxId],
    [OpportunityClose].[SenderMailboxIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[SentOn],
			us.TimeZoneCode),
        [OpportunityClose].[SentOn],
    [OpportunityClose].[SeriesId],
    [OpportunityClose].[ServiceId],
    [OpportunityClose].[ServiceIdName],
    [OpportunityClose].[SLAId],
    [OpportunityClose].[SLAInvokedId],
    [OpportunityClose].[SLAInvokedIdName],
    [OpportunityClose].[SLAName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[SortDate],
			us.TimeZoneCode),
        [OpportunityClose].[SortDate],
    [OpportunityClose].[StageId],
    [OpportunityClose].[StateCode],
    StateCodePLTable.Value,
    [OpportunityClose].[StatusCode],
    StatusCodePLTable.Value,
    [OpportunityClose].[Subcategory],
    [OpportunityClose].[Subject],
    [OpportunityClose].[TimeZoneRuleVersionNumber],
    [OpportunityClose].[TransactionCurrencyId],
    [OpportunityClose].[TransactionCurrencyIdName],
    [OpportunityClose].[TraversedPath],
    [OpportunityClose].[UTCConversionTimeZoneCode],
    [OpportunityClose].[VersionNumber],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from OpportunityClose
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [OpportunityClose].TransactionCurrencyId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4208
		and [ActivityTypeCodePLTable].AttributeValue = [OpportunityClose].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CommunityPLTable] on 
		([CommunityPLTable].AttributeName = 'community'
		and [CommunityPLTable].ObjectTypeCode = 4208
		and [CommunityPLTable].AttributeValue = [OpportunityClose].[Community]
		and [CommunityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DeliveryPriorityCodePLTable] on 
		([DeliveryPriorityCodePLTable].AttributeName = 'deliveryprioritycode'
		and [DeliveryPriorityCodePLTable].ObjectTypeCode = 4208
		and [DeliveryPriorityCodePLTable].AttributeValue = [OpportunityClose].[DeliveryPriorityCode]
		and [DeliveryPriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InstanceTypeCodePLTable] on 
		([InstanceTypeCodePLTable].AttributeName = 'instancetypecode'
		and [InstanceTypeCodePLTable].ObjectTypeCode = 4208
		and [InstanceTypeCodePLTable].AttributeValue = [OpportunityClose].[InstanceTypeCode]
		and [InstanceTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4208
		and [IsBilledPLTable].AttributeValue = [OpportunityClose].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsMapiPrivatePLTable] on 
		([IsMapiPrivatePLTable].AttributeName = 'ismapiprivate'
		and [IsMapiPrivatePLTable].ObjectTypeCode = 4208
		and [IsMapiPrivatePLTable].AttributeValue = [OpportunityClose].[IsMapiPrivate]
		and [IsMapiPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4208
		and [IsRegularActivityPLTable].AttributeValue = [OpportunityClose].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4208
		and [IsWorkflowCreatedPLTable].AttributeValue = [OpportunityClose].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LeftVoiceMailPLTable] on 
		([LeftVoiceMailPLTable].AttributeName = 'leftvoicemail'
		and [LeftVoiceMailPLTable].ObjectTypeCode = 4208
		and [LeftVoiceMailPLTable].AttributeValue = [OpportunityClose].[LeftVoiceMail]
		and [LeftVoiceMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OpportunityStateCodePLTable] on 
		([OpportunityStateCodePLTable].AttributeName = 'opportunitystatecode'
		and [OpportunityStateCodePLTable].ObjectTypeCode = 4208
		and [OpportunityStateCodePLTable].AttributeValue = [OpportunityClose].[OpportunityStateCode]
		and [OpportunityStateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OpportunityStatusCodePLTable] on 
		([OpportunityStatusCodePLTable].AttributeName = 'opportunitystatuscode'
		and [OpportunityStatusCodePLTable].ObjectTypeCode = 4208
		and [OpportunityStatusCodePLTable].AttributeValue = [OpportunityClose].[OpportunityStatusCode]
		and [OpportunityStatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4208
		and [PriorityCodePLTable].AttributeValue = [OpportunityClose].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4208
		and [StateCodePLTable].AttributeValue = [OpportunityClose].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4208
		and [StatusCodePLTable].AttributeValue = [OpportunityClose].[StatusCode]
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
	[OpportunityClose].OwnerId in 
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
		[OpportunityClose].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[OpportunityClose].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[OpportunityClose].[ActivityId] in 
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
    ON OBJECT::[dbo].[FilteredOpportunityClose] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOpportunityClose] TO [CRMReaderRole]
    AS [dbo];

