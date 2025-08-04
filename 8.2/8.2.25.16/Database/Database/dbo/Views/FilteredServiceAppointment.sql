

--
-- report view for serviceappointment
--
create view dbo.[FilteredServiceAppointment] (
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
    [exchangerate],
    [importsequencenumber],
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
    [prioritycode],
    [prioritycodename],
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
    [serviceiddsc],
    [serviceidname],
    [siteid],
    [siteiddsc],
    [siteidname],
    [slaid],
    [slainvokedid],
    [slainvokedidname],
    [slaname],
    [sortdate],
    [sortdateutc],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [subcategory],
    [subject],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ServiceAppointment].[ActivityAdditionalParams],
    [ServiceAppointment].[ActivityId],
    [ServiceAppointment].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [ServiceAppointment].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceAppointment].[ActualEnd],
			us.TimeZoneCode),
        [ServiceAppointment].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceAppointment].[ActualStart],
			us.TimeZoneCode),
        [ServiceAppointment].[ActualStart],
    [ServiceAppointment].[Category],
    [ServiceAppointment].[CreatedBy],
    --[ServiceAppointment].[CreatedByDsc]
    0,
    [ServiceAppointment].[CreatedByName],
    [ServiceAppointment].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceAppointment].[CreatedOn],
			us.TimeZoneCode),
        [ServiceAppointment].[CreatedOn],
    [ServiceAppointment].[CreatedOnBehalfBy],
    --[ServiceAppointment].[CreatedOnBehalfByDsc]
    0,
    [ServiceAppointment].[CreatedOnBehalfByName],
    [ServiceAppointment].[CreatedOnBehalfByYomiName],
    [ServiceAppointment].[Description],
    [ServiceAppointment].[ExchangeRate],
    [ServiceAppointment].[ImportSequenceNumber],
    [ServiceAppointment].[IsAllDayEvent],
    IsAllDayEventPLTable.Value,
    [ServiceAppointment].[IsBilled],
    IsBilledPLTable.Value,
    [ServiceAppointment].[IsMapiPrivate],
    IsMapiPrivatePLTable.Value,
    [ServiceAppointment].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [ServiceAppointment].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceAppointment].[LastOnHoldTime],
			us.TimeZoneCode),
        [ServiceAppointment].[LastOnHoldTime],
    [ServiceAppointment].[Location],
    [ServiceAppointment].[ModifiedBy],
    --[ServiceAppointment].[ModifiedByDsc]
    0,
    [ServiceAppointment].[ModifiedByName],
    [ServiceAppointment].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceAppointment].[ModifiedOn],
			us.TimeZoneCode),
        [ServiceAppointment].[ModifiedOn],
    [ServiceAppointment].[ModifiedOnBehalfBy],
    --[ServiceAppointment].[ModifiedOnBehalfByDsc]
    0,
    [ServiceAppointment].[ModifiedOnBehalfByName],
    [ServiceAppointment].[ModifiedOnBehalfByYomiName],
    [ServiceAppointment].[OnHoldTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceAppointment].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ServiceAppointment].[OverriddenCreatedOn],
    [ServiceAppointment].[OwnerId],
    --[ServiceAppointment].[OwnerIdDsc]
    0,
    [ServiceAppointment].[OwnerIdName],
    [ServiceAppointment].[OwnerIdType],
    [ServiceAppointment].[OwnerIdYomiName],
    [ServiceAppointment].[OwningBusinessUnit],
    [ServiceAppointment].[OwningTeam],
    [ServiceAppointment].[OwningUser],
    [ServiceAppointment].[PriorityCode],
    PriorityCodePLTable.Value,
    [ServiceAppointment].[RegardingObjectId],
    --[ServiceAppointment].[RegardingObjectIdDsc]
    0,
    [ServiceAppointment].[RegardingObjectIdName],
    [ServiceAppointment].[RegardingObjectIdYomiName],
    [ServiceAppointment].[RegardingObjectTypeCode],
    [ServiceAppointment].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceAppointment].[ScheduledEnd],
			us.TimeZoneCode),
        [ServiceAppointment].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceAppointment].[ScheduledStart],
			us.TimeZoneCode),
        [ServiceAppointment].[ScheduledStart],
    [ServiceAppointment].[ServiceId],
    --[ServiceAppointment].[ServiceIdDsc]
    0,
    [ServiceAppointment].[ServiceIdName],
    [ServiceAppointment].[SiteId],
    --[ServiceAppointment].[SiteIdDsc]
    0,
    [ServiceAppointment].[SiteIdName],
    [ServiceAppointment].[SLAId],
    [ServiceAppointment].[SLAInvokedId],
    [ServiceAppointment].[SLAInvokedIdName],
    [ServiceAppointment].[SLAName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ServiceAppointment].[SortDate],
			us.TimeZoneCode),
        [ServiceAppointment].[SortDate],
    [ServiceAppointment].[StateCode],
    StateCodePLTable.Value,
    [ServiceAppointment].[StatusCode],
    StatusCodePLTable.Value,
    [ServiceAppointment].[Subcategory],
    [ServiceAppointment].[Subject],
    [ServiceAppointment].[TimeZoneRuleVersionNumber],
    [ServiceAppointment].[TransactionCurrencyId],
    [ServiceAppointment].[TransactionCurrencyIdName],
    [ServiceAppointment].[UTCConversionTimeZoneCode],
    [ServiceAppointment].[VersionNumber]
from ServiceAppointment
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4214
		and [ActivityTypeCodePLTable].AttributeValue = [ServiceAppointment].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsAllDayEventPLTable] on 
		([IsAllDayEventPLTable].AttributeName = 'isalldayevent'
		and [IsAllDayEventPLTable].ObjectTypeCode = 4214
		and [IsAllDayEventPLTable].AttributeValue = [ServiceAppointment].[IsAllDayEvent]
		and [IsAllDayEventPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4214
		and [IsBilledPLTable].AttributeValue = [ServiceAppointment].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsMapiPrivatePLTable] on 
		([IsMapiPrivatePLTable].AttributeName = 'ismapiprivate'
		and [IsMapiPrivatePLTable].ObjectTypeCode = 4214
		and [IsMapiPrivatePLTable].AttributeValue = [ServiceAppointment].[IsMapiPrivate]
		and [IsMapiPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4214
		and [IsRegularActivityPLTable].AttributeValue = [ServiceAppointment].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4214
		and [IsWorkflowCreatedPLTable].AttributeValue = [ServiceAppointment].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4214
		and [PriorityCodePLTable].AttributeValue = [ServiceAppointment].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4214
		and [StateCodePLTable].AttributeValue = [ServiceAppointment].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4214
		and [StatusCodePLTable].AttributeValue = [ServiceAppointment].[StatusCode]
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
	[ServiceAppointment].OwnerId in 
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
		[ServiceAppointment].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ServiceAppointment].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ServiceAppointment].[ActivityId] in 
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
    ON OBJECT::[dbo].[FilteredServiceAppointment] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredServiceAppointment] TO [CRMReaderRole]
    AS [dbo];

