

--
-- report view for letter
--
create view dbo.[FilteredLetter] (
    [activityid],
    [activitytypecode],
    [activitytypecodename],
    [actualdurationminutes],
    [actualend],
    [actualendutc],
    [actualstart],
    [actualstartutc],
    [address],
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
    [Letter].[ActivityId],
    [Letter].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [Letter].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Letter].[ActualEnd],
			us.TimeZoneCode),
        [Letter].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Letter].[ActualStart],
			us.TimeZoneCode),
        [Letter].[ActualStart],
    [Letter].[Address],
    [Letter].[Category],
    [Letter].[CreatedBy],
    --[Letter].[CreatedByDsc]
    0,
    [Letter].[CreatedByName],
    [Letter].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Letter].[CreatedOn],
			us.TimeZoneCode),
        [Letter].[CreatedOn],
    [Letter].[CreatedOnBehalfBy],
    --[Letter].[CreatedOnBehalfByDsc]
    0,
    [Letter].[CreatedOnBehalfByName],
    [Letter].[CreatedOnBehalfByYomiName],
    [Letter].[Description],
    [Letter].[DirectionCode],
    DirectionCodePLTable.Value,
    [Letter].[ExchangeRate],
    [Letter].[ImportSequenceNumber],
    [Letter].[IsBilled],
    IsBilledPLTable.Value,
    [Letter].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [Letter].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Letter].[LastOnHoldTime],
			us.TimeZoneCode),
        [Letter].[LastOnHoldTime],
    [Letter].[ModifiedBy],
    --[Letter].[ModifiedByDsc]
    0,
    [Letter].[ModifiedByName],
    [Letter].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Letter].[ModifiedOn],
			us.TimeZoneCode),
        [Letter].[ModifiedOn],
    [Letter].[ModifiedOnBehalfBy],
    --[Letter].[ModifiedOnBehalfByDsc]
    0,
    [Letter].[ModifiedOnBehalfByName],
    [Letter].[ModifiedOnBehalfByYomiName],
    [Letter].[OnHoldTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Letter].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Letter].[OverriddenCreatedOn],
    [Letter].[OwnerId],
    --[Letter].[OwnerIdDsc]
    0,
    [Letter].[OwnerIdName],
    [Letter].[OwnerIdType],
    [Letter].[OwnerIdYomiName],
    [Letter].[OwningBusinessUnit],
    [Letter].[OwningTeam],
    [Letter].[OwningUser],
    [Letter].[PriorityCode],
    PriorityCodePLTable.Value,
    [Letter].[ProcessId],
    [Letter].[RegardingObjectId],
    --[Letter].[RegardingObjectIdDsc]
    0,
    [Letter].[RegardingObjectIdName],
    [Letter].[RegardingObjectIdYomiName],
    [Letter].[RegardingObjectTypeCode],
    [Letter].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Letter].[ScheduledEnd],
			us.TimeZoneCode),
        [Letter].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Letter].[ScheduledStart],
			us.TimeZoneCode),
        [Letter].[ScheduledStart],
    [Letter].[ServiceId],
    [Letter].[SLAId],
    [Letter].[SLAInvokedId],
    [Letter].[SLAInvokedIdName],
    [Letter].[SLAName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Letter].[SortDate],
			us.TimeZoneCode),
        [Letter].[SortDate],
    [Letter].[StageId],
    [Letter].[StateCode],
    StateCodePLTable.Value,
    [Letter].[StatusCode],
    StatusCodePLTable.Value,
    [Letter].[Subcategory],
    [Letter].[Subject],
    [Letter].[TimeZoneRuleVersionNumber],
    [Letter].[TransactionCurrencyId],
    [Letter].[TransactionCurrencyIdName],
    [Letter].[TraversedPath],
    [Letter].[UTCConversionTimeZoneCode],
    [Letter].[VersionNumber]
from Letter
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4207
		and [ActivityTypeCodePLTable].AttributeValue = [Letter].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DirectionCodePLTable] on 
		([DirectionCodePLTable].AttributeName = 'directioncode'
		and [DirectionCodePLTable].ObjectTypeCode = 4207
		and [DirectionCodePLTable].AttributeValue = [Letter].[DirectionCode]
		and [DirectionCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4207
		and [IsBilledPLTable].AttributeValue = [Letter].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4207
		and [IsRegularActivityPLTable].AttributeValue = [Letter].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4207
		and [IsWorkflowCreatedPLTable].AttributeValue = [Letter].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4207
		and [PriorityCodePLTable].AttributeValue = [Letter].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4207
		and [StateCodePLTable].AttributeValue = [Letter].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4207
		and [StatusCodePLTable].AttributeValue = [Letter].[StatusCode]
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
	[Letter].OwnerId in 
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
		[Letter].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Letter].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Letter].[ActivityId] in 
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
    ON OBJECT::[dbo].[FilteredLetter] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLetter] TO [CRMReaderRole]
    AS [dbo];

