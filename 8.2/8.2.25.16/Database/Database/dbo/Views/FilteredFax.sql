

--
-- report view for fax
--
create view dbo.[FilteredFax] (
    [activityid],
    [activitytypecode],
    [activitytypecodename],
    [actualdurationminutes],
    [actualend],
    [actualendutc],
    [actualstart],
    [actualstartutc],
    [billingcode],
    [category],
    [coverpagename],
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
    [faxnumber],
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
    [numberofpages],
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
    [tsid],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [Fax].[ActivityId],
    [Fax].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [Fax].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Fax].[ActualEnd],
			us.TimeZoneCode),
        [Fax].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Fax].[ActualStart],
			us.TimeZoneCode),
        [Fax].[ActualStart],
    [Fax].[BillingCode],
    [Fax].[Category],
    [Fax].[CoverPageName],
    [Fax].[CreatedBy],
    --[Fax].[CreatedByDsc]
    0,
    [Fax].[CreatedByName],
    [Fax].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Fax].[CreatedOn],
			us.TimeZoneCode),
        [Fax].[CreatedOn],
    [Fax].[CreatedOnBehalfBy],
    --[Fax].[CreatedOnBehalfByDsc]
    0,
    [Fax].[CreatedOnBehalfByName],
    [Fax].[CreatedOnBehalfByYomiName],
    [Fax].[Description],
    [Fax].[DirectionCode],
    DirectionCodePLTable.Value,
    [Fax].[ExchangeRate],
    [Fax].[FaxNumber],
    [Fax].[ImportSequenceNumber],
    [Fax].[IsBilled],
    IsBilledPLTable.Value,
    [Fax].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [Fax].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Fax].[LastOnHoldTime],
			us.TimeZoneCode),
        [Fax].[LastOnHoldTime],
    [Fax].[ModifiedBy],
    --[Fax].[ModifiedByDsc]
    0,
    [Fax].[ModifiedByName],
    [Fax].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Fax].[ModifiedOn],
			us.TimeZoneCode),
        [Fax].[ModifiedOn],
    [Fax].[ModifiedOnBehalfBy],
    --[Fax].[ModifiedOnBehalfByDsc]
    0,
    [Fax].[ModifiedOnBehalfByName],
    [Fax].[ModifiedOnBehalfByYomiName],
    [Fax].[NumberOfPages],
    [Fax].[OnHoldTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Fax].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Fax].[OverriddenCreatedOn],
    [Fax].[OwnerId],
    --[Fax].[OwnerIdDsc]
    0,
    [Fax].[OwnerIdName],
    [Fax].[OwnerIdType],
    [Fax].[OwnerIdYomiName],
    [Fax].[OwningBusinessUnit],
    [Fax].[OwningTeam],
    [Fax].[OwningUser],
    [Fax].[PriorityCode],
    PriorityCodePLTable.Value,
    [Fax].[ProcessId],
    [Fax].[RegardingObjectId],
    --[Fax].[RegardingObjectIdDsc]
    0,
    [Fax].[RegardingObjectIdName],
    [Fax].[RegardingObjectIdYomiName],
    [Fax].[RegardingObjectTypeCode],
    [Fax].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Fax].[ScheduledEnd],
			us.TimeZoneCode),
        [Fax].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Fax].[ScheduledStart],
			us.TimeZoneCode),
        [Fax].[ScheduledStart],
    [Fax].[ServiceId],
    [Fax].[SLAId],
    [Fax].[SLAInvokedId],
    [Fax].[SLAInvokedIdName],
    [Fax].[SLAName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Fax].[SortDate],
			us.TimeZoneCode),
        [Fax].[SortDate],
    [Fax].[StageId],
    [Fax].[StateCode],
    StateCodePLTable.Value,
    [Fax].[StatusCode],
    StatusCodePLTable.Value,
    [Fax].[Subcategory],
    [Fax].[Subject],
    [Fax].[TimeZoneRuleVersionNumber],
    [Fax].[TransactionCurrencyId],
    [Fax].[TransactionCurrencyIdName],
    [Fax].[TraversedPath],
    [Fax].[Tsid],
    [Fax].[UTCConversionTimeZoneCode],
    [Fax].[VersionNumber]
from Fax
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4204
		and [ActivityTypeCodePLTable].AttributeValue = [Fax].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DirectionCodePLTable] on 
		([DirectionCodePLTable].AttributeName = 'directioncode'
		and [DirectionCodePLTable].ObjectTypeCode = 4204
		and [DirectionCodePLTable].AttributeValue = [Fax].[DirectionCode]
		and [DirectionCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4204
		and [IsBilledPLTable].AttributeValue = [Fax].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4204
		and [IsRegularActivityPLTable].AttributeValue = [Fax].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4204
		and [IsWorkflowCreatedPLTable].AttributeValue = [Fax].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4204
		and [PriorityCodePLTable].AttributeValue = [Fax].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4204
		and [StateCodePLTable].AttributeValue = [Fax].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4204
		and [StatusCodePLTable].AttributeValue = [Fax].[StatusCode]
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
	[Fax].OwnerId in 
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
		[Fax].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Fax].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Fax].[ActivityId] in 
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
    ON OBJECT::[dbo].[FilteredFax] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredFax] TO [CRMReaderRole]
    AS [dbo];

