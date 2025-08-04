

--
-- report view for orderclose
--
create view dbo.[FilteredOrderClose] 
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
    [ordernumber],
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
    [revision],
    [salesorderid],
    [salesorderidname],
    [salesorderidtype],
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
    [OrderClose].[ActivityAdditionalParams],
    [OrderClose].[ActivityId],
    [OrderClose].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [OrderClose].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[ActualEnd],
			us.TimeZoneCode),
        [OrderClose].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[ActualStart],
			us.TimeZoneCode),
        [OrderClose].[ActualStart],
    [OrderClose].[Category],
    [OrderClose].[Community],
    CommunityPLTable.Value,
    [OrderClose].[CreatedBy],
    --[OrderClose].[CreatedByDsc]
    0,
    [OrderClose].[CreatedByExternalParty],
    [OrderClose].[CreatedByExternalPartyName],
    [OrderClose].[CreatedByExternalPartyYomiName],
    [OrderClose].[CreatedByName],
    [OrderClose].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[CreatedOn],
			us.TimeZoneCode),
        [OrderClose].[CreatedOn],
    [OrderClose].[CreatedOnBehalfBy],
    --[OrderClose].[CreatedOnBehalfByDsc]
    0,
    [OrderClose].[CreatedOnBehalfByName],
    [OrderClose].[CreatedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[DeliveryLastAttemptedOn],
			us.TimeZoneCode),
        [OrderClose].[DeliveryLastAttemptedOn],
    [OrderClose].[DeliveryPriorityCode],
    DeliveryPriorityCodePLTable.Value,
    [OrderClose].[Description],
    [OrderClose].[ExchangeItemId],
    [OrderClose].[ExchangeRate],
    [OrderClose].[ExchangeWebLink],
    [OrderClose].[ImportSequenceNumber],
    [OrderClose].[InstanceTypeCode],
    InstanceTypeCodePLTable.Value,
    [OrderClose].[IsBilled],
    IsBilledPLTable.Value,
    [OrderClose].[IsMapiPrivate],
    IsMapiPrivatePLTable.Value,
    [OrderClose].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [OrderClose].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[LastOnHoldTime],
			us.TimeZoneCode),
        [OrderClose].[LastOnHoldTime],
    [OrderClose].[LeftVoiceMail],
    LeftVoiceMailPLTable.Value,
    [OrderClose].[ModifiedBy],
    --[OrderClose].[ModifiedByDsc]
    0,
    [OrderClose].[ModifiedByExternalParty],
    [OrderClose].[ModifiedByExternalPartyName],
    [OrderClose].[ModifiedByExternalPartyYomiName],
    [OrderClose].[ModifiedByName],
    [OrderClose].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[ModifiedOn],
			us.TimeZoneCode),
        [OrderClose].[ModifiedOn],
    [OrderClose].[ModifiedOnBehalfBy],
    --[OrderClose].[ModifiedOnBehalfByDsc]
    0,
    [OrderClose].[ModifiedOnBehalfByName],
    [OrderClose].[ModifiedOnBehalfByYomiName],
    [OrderClose].[OnHoldTime],
    [OrderClose].[OrderNumber],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [OrderClose].[OverriddenCreatedOn],
    [OrderClose].[OwnerId],
    --[OrderClose].[OwnerIdDsc]
    0,
    [OrderClose].[OwnerIdName],
    [OrderClose].[OwnerIdType],
    [OrderClose].[OwnerIdYomiName],
    [OrderClose].[OwningBusinessUnit],
    [OrderClose].[OwningTeam],
    [OrderClose].[OwningUser],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[PostponeActivityProcessingUntil],
			us.TimeZoneCode),
        [OrderClose].[PostponeActivityProcessingUntil],
    [OrderClose].[PriorityCode],
    PriorityCodePLTable.Value,
    [OrderClose].[ProcessId],
    [OrderClose].[RegardingObjectId],
    --[OrderClose].[RegardingObjectIdDsc]
    0,
    [OrderClose].[RegardingObjectIdName],
    [OrderClose].[RegardingObjectIdYomiName],
    [OrderClose].[RegardingObjectTypeCode],
    [OrderClose].[Revision],
    [OrderClose].[SalesOrderId],
    [OrderClose].[SalesOrderIdName],
    [OrderClose].[SalesOrderIdType],
    [OrderClose].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[ScheduledEnd],
			us.TimeZoneCode),
        [OrderClose].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[ScheduledStart],
			us.TimeZoneCode),
        [OrderClose].[ScheduledStart],
    [OrderClose].[SenderMailboxId],
    [OrderClose].[SenderMailboxIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[SentOn],
			us.TimeZoneCode),
        [OrderClose].[SentOn],
    [OrderClose].[SeriesId],
    [OrderClose].[ServiceId],
    [OrderClose].[ServiceIdName],
    [OrderClose].[SLAId],
    [OrderClose].[SLAInvokedId],
    [OrderClose].[SLAInvokedIdName],
    [OrderClose].[SLAName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[SortDate],
			us.TimeZoneCode),
        [OrderClose].[SortDate],
    [OrderClose].[StageId],
    [OrderClose].[StateCode],
    StateCodePLTable.Value,
    [OrderClose].[StatusCode],
    StatusCodePLTable.Value,
    [OrderClose].[Subcategory],
    [OrderClose].[Subject],
    [OrderClose].[TimeZoneRuleVersionNumber],
    [OrderClose].[TransactionCurrencyId],
    [OrderClose].[TransactionCurrencyIdName],
    [OrderClose].[TraversedPath],
    [OrderClose].[UTCConversionTimeZoneCode],
    [OrderClose].[VersionNumber]
from OrderClose
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4209
		and [ActivityTypeCodePLTable].AttributeValue = [OrderClose].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CommunityPLTable] on 
		([CommunityPLTable].AttributeName = 'community'
		and [CommunityPLTable].ObjectTypeCode = 4209
		and [CommunityPLTable].AttributeValue = [OrderClose].[Community]
		and [CommunityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DeliveryPriorityCodePLTable] on 
		([DeliveryPriorityCodePLTable].AttributeName = 'deliveryprioritycode'
		and [DeliveryPriorityCodePLTable].ObjectTypeCode = 4209
		and [DeliveryPriorityCodePLTable].AttributeValue = [OrderClose].[DeliveryPriorityCode]
		and [DeliveryPriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InstanceTypeCodePLTable] on 
		([InstanceTypeCodePLTable].AttributeName = 'instancetypecode'
		and [InstanceTypeCodePLTable].ObjectTypeCode = 4209
		and [InstanceTypeCodePLTable].AttributeValue = [OrderClose].[InstanceTypeCode]
		and [InstanceTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4209
		and [IsBilledPLTable].AttributeValue = [OrderClose].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsMapiPrivatePLTable] on 
		([IsMapiPrivatePLTable].AttributeName = 'ismapiprivate'
		and [IsMapiPrivatePLTable].ObjectTypeCode = 4209
		and [IsMapiPrivatePLTable].AttributeValue = [OrderClose].[IsMapiPrivate]
		and [IsMapiPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4209
		and [IsRegularActivityPLTable].AttributeValue = [OrderClose].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4209
		and [IsWorkflowCreatedPLTable].AttributeValue = [OrderClose].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LeftVoiceMailPLTable] on 
		([LeftVoiceMailPLTable].AttributeName = 'leftvoicemail'
		and [LeftVoiceMailPLTable].ObjectTypeCode = 4209
		and [LeftVoiceMailPLTable].AttributeValue = [OrderClose].[LeftVoiceMail]
		and [LeftVoiceMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4209
		and [PriorityCodePLTable].AttributeValue = [OrderClose].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4209
		and [StateCodePLTable].AttributeValue = [OrderClose].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4209
		and [StatusCodePLTable].AttributeValue = [OrderClose].[StatusCode]
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
	[OrderClose].OwnerId in 
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
		[OrderClose].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[OrderClose].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[OrderClose].[ActivityId] in 
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
    ON OBJECT::[dbo].[FilteredOrderClose] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOrderClose] TO [CRMReaderRole]
    AS [dbo];

