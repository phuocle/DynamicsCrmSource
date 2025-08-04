SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for task
--
create view [dbo].[FilteredTask] (
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
    [crmtaskassigneduniqueid],
    [description],
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
    [percentcomplete],
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
    [Task].[ActivityAdditionalParams],
    [Task].[ActivityId],
    [Task].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [Task].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Task].[ActualEnd],
			us.TimeZoneCode),
        [Task].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Task].[ActualStart],
			us.TimeZoneCode),
        [Task].[ActualStart],
    [Task].[Category],
    [Task].[CreatedBy],
    --[Task].[CreatedByDsc]
    0,
    [Task].[CreatedByName],
    [Task].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Task].[CreatedOn],
			us.TimeZoneCode),
        [Task].[CreatedOn],
    [Task].[CreatedOnBehalfBy],
    --[Task].[CreatedOnBehalfByDsc]
    0,
    [Task].[CreatedOnBehalfByName],
    [Task].[CreatedOnBehalfByYomiName],
    [Task].[CrmTaskAssignedUniqueId],
    [Task].[Description],
    [Task].[ExchangeRate],
    [Task].[ImportSequenceNumber],
    [Task].[IsBilled],
    IsBilledPLTable.Value,
    [Task].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [Task].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Task].[LastOnHoldTime],
			us.TimeZoneCode),
        [Task].[LastOnHoldTime],
    [Task].[ModifiedBy],
    --[Task].[ModifiedByDsc]
    0,
    [Task].[ModifiedByName],
    [Task].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Task].[ModifiedOn],
			us.TimeZoneCode),
        [Task].[ModifiedOn],
    [Task].[ModifiedOnBehalfBy],
    --[Task].[ModifiedOnBehalfByDsc]
    0,
    [Task].[ModifiedOnBehalfByName],
    [Task].[ModifiedOnBehalfByYomiName],
    [Task].[OnHoldTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Task].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Task].[OverriddenCreatedOn],
    [Task].[OwnerId],
    --[Task].[OwnerIdDsc]
    0,
    [Task].[OwnerIdName],
    [Task].[OwnerIdType],
    [Task].[OwnerIdYomiName],
    [Task].[OwningBusinessUnit],
    [Task].[OwningTeam],
    [Task].[OwningUser],
    [Task].[PercentComplete],
    [Task].[PriorityCode],
    PriorityCodePLTable.Value,
    [Task].[ProcessId],
    [Task].[RegardingObjectId],
    --[Task].[RegardingObjectIdDsc]
    0,
    [Task].[RegardingObjectIdName],
    [Task].[RegardingObjectIdYomiName],
    [Task].[RegardingObjectTypeCode],
    [Task].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Task].[ScheduledEnd],
			us.TimeZoneCode),
        [Task].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Task].[ScheduledStart],
			us.TimeZoneCode),
        [Task].[ScheduledStart],
    [Task].[ServiceId],
    [Task].[SLAId],
    [Task].[SLAInvokedId],
    [Task].[SLAInvokedIdName],
    [Task].[SLAName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Task].[SortDate],
			us.TimeZoneCode),
        [Task].[SortDate],
    [Task].[StageId],
    [Task].[StateCode],
    StateCodePLTable.Value,
    [Task].[StatusCode],
    StatusCodePLTable.Value,
    [Task].[Subcategory],
    [Task].[Subject],
    [Task].[TimeZoneRuleVersionNumber],
    [Task].[TransactionCurrencyId],
    [Task].[TransactionCurrencyIdName],
    [Task].[TraversedPath],
    [Task].[UTCConversionTimeZoneCode],
    [Task].[VersionNumber]
from Task
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4212
		and [ActivityTypeCodePLTable].AttributeValue = [Task].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4212
		and [IsBilledPLTable].AttributeValue = [Task].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4212
		and [IsRegularActivityPLTable].AttributeValue = [Task].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4212
		and [IsWorkflowCreatedPLTable].AttributeValue = [Task].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4212
		and [PriorityCodePLTable].AttributeValue = [Task].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4212
		and [StateCodePLTable].AttributeValue = [Task].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4212
		and [StatusCodePLTable].AttributeValue = [Task].[StatusCode]
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
	[Task].OwnerId in 
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
		[Task].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Task].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Task].[ActivityId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 4200))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredTask] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredTask] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
