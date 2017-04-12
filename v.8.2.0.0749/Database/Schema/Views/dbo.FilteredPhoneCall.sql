SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for phonecall
--
create view [dbo].[FilteredPhoneCall] (
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
    [description],
    [directioncode],
    [directioncodename],
    [exchangerate],
    [importsequencenumber],
    [isbilled],
    [isbilledname],
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
    [phonenumber],
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
    [PhoneCall].[ActivityAdditionalParams],
    [PhoneCall].[ActivityId],
    [PhoneCall].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [PhoneCall].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneCall].[ActualEnd],
			us.TimeZoneCode),
        [PhoneCall].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneCall].[ActualStart],
			us.TimeZoneCode),
        [PhoneCall].[ActualStart],
    [PhoneCall].[Category],
    [PhoneCall].[CreatedBy],
    --[PhoneCall].[CreatedByDsc]
    0,
    [PhoneCall].[CreatedByName],
    [PhoneCall].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneCall].[CreatedOn],
			us.TimeZoneCode),
        [PhoneCall].[CreatedOn],
    [PhoneCall].[CreatedOnBehalfBy],
    --[PhoneCall].[CreatedOnBehalfByDsc]
    0,
    [PhoneCall].[CreatedOnBehalfByName],
    [PhoneCall].[CreatedOnBehalfByYomiName],
    [PhoneCall].[Description],
    [PhoneCall].[DirectionCode],
    DirectionCodePLTable.Value,
    [PhoneCall].[ExchangeRate],
    [PhoneCall].[ImportSequenceNumber],
    [PhoneCall].[IsBilled],
    IsBilledPLTable.Value,
    [PhoneCall].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [PhoneCall].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneCall].[LastOnHoldTime],
			us.TimeZoneCode),
        [PhoneCall].[LastOnHoldTime],
    [PhoneCall].[LeftVoiceMail],
    LeftVoiceMailPLTable.Value,
    [PhoneCall].[ModifiedBy],
    --[PhoneCall].[ModifiedByDsc]
    0,
    [PhoneCall].[ModifiedByName],
    [PhoneCall].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneCall].[ModifiedOn],
			us.TimeZoneCode),
        [PhoneCall].[ModifiedOn],
    [PhoneCall].[ModifiedOnBehalfBy],
    --[PhoneCall].[ModifiedOnBehalfByDsc]
    0,
    [PhoneCall].[ModifiedOnBehalfByName],
    [PhoneCall].[ModifiedOnBehalfByYomiName],
    [PhoneCall].[OnHoldTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneCall].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [PhoneCall].[OverriddenCreatedOn],
    [PhoneCall].[OwnerId],
    --[PhoneCall].[OwnerIdDsc]
    0,
    [PhoneCall].[OwnerIdName],
    [PhoneCall].[OwnerIdType],
    [PhoneCall].[OwnerIdYomiName],
    [PhoneCall].[OwningBusinessUnit],
    [PhoneCall].[OwningTeam],
    [PhoneCall].[OwningUser],
    [PhoneCall].[PhoneNumber],
    [PhoneCall].[PriorityCode],
    PriorityCodePLTable.Value,
    [PhoneCall].[ProcessId],
    [PhoneCall].[RegardingObjectId],
    --[PhoneCall].[RegardingObjectIdDsc]
    0,
    [PhoneCall].[RegardingObjectIdName],
    [PhoneCall].[RegardingObjectIdYomiName],
    [PhoneCall].[RegardingObjectTypeCode],
    [PhoneCall].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneCall].[ScheduledEnd],
			us.TimeZoneCode),
        [PhoneCall].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneCall].[ScheduledStart],
			us.TimeZoneCode),
        [PhoneCall].[ScheduledStart],
    [PhoneCall].[ServiceId],
    [PhoneCall].[SLAId],
    [PhoneCall].[SLAInvokedId],
    [PhoneCall].[SLAInvokedIdName],
    [PhoneCall].[SLAName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PhoneCall].[SortDate],
			us.TimeZoneCode),
        [PhoneCall].[SortDate],
    [PhoneCall].[StageId],
    [PhoneCall].[StateCode],
    StateCodePLTable.Value,
    [PhoneCall].[StatusCode],
    StatusCodePLTable.Value,
    [PhoneCall].[Subcategory],
    [PhoneCall].[Subject],
    [PhoneCall].[TimeZoneRuleVersionNumber],
    [PhoneCall].[TransactionCurrencyId],
    [PhoneCall].[TransactionCurrencyIdName],
    [PhoneCall].[TraversedPath],
    [PhoneCall].[UTCConversionTimeZoneCode],
    [PhoneCall].[VersionNumber]
from PhoneCall
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4210
		and [ActivityTypeCodePLTable].AttributeValue = [PhoneCall].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DirectionCodePLTable] on 
		([DirectionCodePLTable].AttributeName = 'directioncode'
		and [DirectionCodePLTable].ObjectTypeCode = 4210
		and [DirectionCodePLTable].AttributeValue = [PhoneCall].[DirectionCode]
		and [DirectionCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4210
		and [IsBilledPLTable].AttributeValue = [PhoneCall].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4210
		and [IsRegularActivityPLTable].AttributeValue = [PhoneCall].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4210
		and [IsWorkflowCreatedPLTable].AttributeValue = [PhoneCall].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LeftVoiceMailPLTable] on 
		([LeftVoiceMailPLTable].AttributeName = 'leftvoicemail'
		and [LeftVoiceMailPLTable].ObjectTypeCode = 4210
		and [LeftVoiceMailPLTable].AttributeValue = [PhoneCall].[LeftVoiceMail]
		and [LeftVoiceMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4210
		and [PriorityCodePLTable].AttributeValue = [PhoneCall].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4210
		and [StateCodePLTable].AttributeValue = [PhoneCall].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4210
		and [StatusCodePLTable].AttributeValue = [PhoneCall].[StatusCode]
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
	[PhoneCall].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 4200))
		
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
		[PhoneCall].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[PhoneCall].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[PhoneCall].[ActivityId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 4200))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredPhoneCall] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredPhoneCall] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
