

--
-- report view for appointment
--
create view dbo.[FilteredAppointment] (
    [activityadditionalparams],
    [activityid],
    [activitytypecode],
    [activitytypecodename],
    [actualdurationminutes],
    [actualend],
    [actualendutc],
    [actualstart],
    [actualstartutc],
    [attachmentcount],
    [attachmenterrors],
    [attachmenterrorsname],
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
    [exchangerate],
    [globalobjectid],
    [importsequencenumber],
    [instancetypecode],
    [instancetypecodename],
    [isalldayevent],
    [isalldayeventname],
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
    [location],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedfieldsmask],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [onholdtime],
    [originalstartdate],
    [originalstartdateutc],
    [outlookownerapptid],
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
    [Appointment].[ActivityAdditionalParams],
    [Appointment].[ActivityId],
    [Appointment].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [Appointment].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Appointment].[ActualEnd],
			us.TimeZoneCode),
        [Appointment].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Appointment].[ActualStart],
			us.TimeZoneCode),
        [Appointment].[ActualStart],
    [Appointment].[AttachmentCount],
    [Appointment].[AttachmentErrors],
    AttachmentErrorsPLTable.Value,
    [Appointment].[Category],
    [Appointment].[CreatedBy],
    --[Appointment].[CreatedByDsc]
    0,
    [Appointment].[CreatedByName],
    [Appointment].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Appointment].[CreatedOn],
			us.TimeZoneCode),
        [Appointment].[CreatedOn],
    [Appointment].[CreatedOnBehalfBy],
    --[Appointment].[CreatedOnBehalfByDsc]
    0,
    [Appointment].[CreatedOnBehalfByName],
    [Appointment].[CreatedOnBehalfByYomiName],
    [Appointment].[Description],
    [Appointment].[ExchangeRate],
    [Appointment].[GlobalObjectId],
    [Appointment].[ImportSequenceNumber],
    [Appointment].[InstanceTypeCode],
    InstanceTypeCodePLTable.Value,
    [Appointment].[IsAllDayEvent],
    IsAllDayEventPLTable.Value,
    [Appointment].[IsBilled],
    IsBilledPLTable.Value,
    [Appointment].[IsMapiPrivate],
    IsMapiPrivatePLTable.Value,
    [Appointment].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [Appointment].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Appointment].[LastOnHoldTime],
			us.TimeZoneCode),
        [Appointment].[LastOnHoldTime],
    [Appointment].[Location],
    [Appointment].[ModifiedBy],
    --[Appointment].[ModifiedByDsc]
    0,
    [Appointment].[ModifiedByName],
    [Appointment].[ModifiedByYomiName],
    [Appointment].[ModifiedFieldsMask],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Appointment].[ModifiedOn],
			us.TimeZoneCode),
        [Appointment].[ModifiedOn],
    [Appointment].[ModifiedOnBehalfBy],
    --[Appointment].[ModifiedOnBehalfByDsc]
    0,
    [Appointment].[ModifiedOnBehalfByName],
    [Appointment].[ModifiedOnBehalfByYomiName],
    [Appointment].[OnHoldTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Appointment].[OriginalStartDate],
			us.TimeZoneCode),
        [Appointment].[OriginalStartDate],
    [Appointment].[OutlookOwnerApptId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Appointment].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Appointment].[OverriddenCreatedOn],
    [Appointment].[OwnerId],
    --[Appointment].[OwnerIdDsc]
    0,
    [Appointment].[OwnerIdName],
    [Appointment].[OwnerIdType],
    [Appointment].[OwnerIdYomiName],
    [Appointment].[OwningBusinessUnit],
    [Appointment].[OwningTeam],
    [Appointment].[OwningUser],
    [Appointment].[PriorityCode],
    PriorityCodePLTable.Value,
    [Appointment].[ProcessId],
    [Appointment].[RegardingObjectId],
    --[Appointment].[RegardingObjectIdDsc]
    0,
    [Appointment].[RegardingObjectIdName],
    [Appointment].[RegardingObjectIdYomiName],
    [Appointment].[RegardingObjectTypeCode],
    [Appointment].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Appointment].[ScheduledEnd],
			us.TimeZoneCode),
        [Appointment].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Appointment].[ScheduledStart],
			us.TimeZoneCode),
        [Appointment].[ScheduledStart],
    [Appointment].[SeriesId],
    [Appointment].[ServiceId],
    [Appointment].[SLAId],
    [Appointment].[SLAInvokedId],
    [Appointment].[SLAInvokedIdName],
    [Appointment].[SLAName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Appointment].[SortDate],
			us.TimeZoneCode),
        [Appointment].[SortDate],
    [Appointment].[StageId],
    [Appointment].[StateCode],
    StateCodePLTable.Value,
    [Appointment].[StatusCode],
    StatusCodePLTable.Value,
    [Appointment].[Subcategory],
    [Appointment].[Subject],
    [Appointment].[TimeZoneRuleVersionNumber],
    [Appointment].[TransactionCurrencyId],
    [Appointment].[TransactionCurrencyIdName],
    [Appointment].[TraversedPath],
    [Appointment].[UTCConversionTimeZoneCode],
    [Appointment].[VersionNumber]
from Appointment
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4201
		and [ActivityTypeCodePLTable].AttributeValue = [Appointment].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [AttachmentErrorsPLTable] on 
		([AttachmentErrorsPLTable].AttributeName = 'attachmenterrors'
		and [AttachmentErrorsPLTable].ObjectTypeCode = 4201
		and [AttachmentErrorsPLTable].AttributeValue = [Appointment].[AttachmentErrors]
		and [AttachmentErrorsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InstanceTypeCodePLTable] on 
		([InstanceTypeCodePLTable].AttributeName = 'instancetypecode'
		and [InstanceTypeCodePLTable].ObjectTypeCode = 4201
		and [InstanceTypeCodePLTable].AttributeValue = [Appointment].[InstanceTypeCode]
		and [InstanceTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsAllDayEventPLTable] on 
		([IsAllDayEventPLTable].AttributeName = 'isalldayevent'
		and [IsAllDayEventPLTable].ObjectTypeCode = 4201
		and [IsAllDayEventPLTable].AttributeValue = [Appointment].[IsAllDayEvent]
		and [IsAllDayEventPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4201
		and [IsBilledPLTable].AttributeValue = [Appointment].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsMapiPrivatePLTable] on 
		([IsMapiPrivatePLTable].AttributeName = 'ismapiprivate'
		and [IsMapiPrivatePLTable].ObjectTypeCode = 4201
		and [IsMapiPrivatePLTable].AttributeValue = [Appointment].[IsMapiPrivate]
		and [IsMapiPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4201
		and [IsRegularActivityPLTable].AttributeValue = [Appointment].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4201
		and [IsWorkflowCreatedPLTable].AttributeValue = [Appointment].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4201
		and [PriorityCodePLTable].AttributeValue = [Appointment].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4201
		and [StateCodePLTable].AttributeValue = [Appointment].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4201
		and [StatusCodePLTable].AttributeValue = [Appointment].[StatusCode]
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
	[Appointment].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
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
		[Appointment].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Appointment].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Appointment].[ActivityId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 4200
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppointment] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppointment] TO [CRMReaderRole]
    AS [dbo];

