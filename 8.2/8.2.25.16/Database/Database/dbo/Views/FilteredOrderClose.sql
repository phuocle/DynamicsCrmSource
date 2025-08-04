

--
-- report view for orderclose
--
create view dbo.[FilteredOrderClose] (
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
    [description],
    [importsequencenumber],
    [isbilled],
    [isbilledname],
    [isregularactivity],
    [isregularactivityname],
    [isworkflowcreated],
    [isworkflowcreatedname],
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
    [revision],
    [salesorderid],
    [salesorderiddsc],
    [salesorderidname],
    [salesorderidtype],
    [scheduleddurationminutes],
    [scheduledend],
    [scheduledendutc],
    [scheduledstart],
    [scheduledstartutc],
    [serviceid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [subcategory],
    [subject],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
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
    [OrderClose].[Description],
    [OrderClose].[ImportSequenceNumber],
    [OrderClose].[IsBilled],
    IsBilledPLTable.Value,
    [OrderClose].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [OrderClose].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
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
    [OrderClose].[Revision],
    [OrderClose].[SalesOrderId],
    --[OrderClose].[SalesOrderIdDsc]
    0,
    [OrderClose].[SalesOrderIdName],
    [OrderClose].[SalesOrderIdType],
    [OrderClose].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[ScheduledEnd],
			us.TimeZoneCode),
        [OrderClose].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OrderClose].[ScheduledStart],
			us.TimeZoneCode),
        [OrderClose].[ScheduledStart],
    [OrderClose].[ServiceId],
    [OrderClose].[StateCode],
    StateCodePLTable.Value,
    [OrderClose].[StatusCode],
    StatusCodePLTable.Value,
    [OrderClose].[Subcategory],
    [OrderClose].[Subject],
    [OrderClose].[TimeZoneRuleVersionNumber],
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
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4209
		and [IsBilledPLTable].AttributeValue = [OrderClose].[IsBilled]
		and [IsBilledPLTable].LangId = 
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
		[OrderClose].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
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
    ON OBJECT::[dbo].[FilteredOrderClose] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOrderClose] TO [CRMReaderRole]
    AS [dbo];

