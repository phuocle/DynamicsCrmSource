

--
-- report view for quoteclose
--
create view dbo.[FilteredQuoteClose] (
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
    [importsequencenumber],
    [isbilled],
    [isbilledname],
    [isregularactivity],
    [isregularactivityname],
    [isworkflowcreated],
    [isworkflowcreatedname],
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
    [quoteid],
    [quoteiddsc],
    [quoteidname],
    [quoteidtype],
    [quotenumber],
    [revision],
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
    [QuoteClose].[CreatedBy],
    --[QuoteClose].[CreatedByDsc]
    0,
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
    [QuoteClose].[Description],
    [QuoteClose].[ImportSequenceNumber],
    [QuoteClose].[IsBilled],
    IsBilledPLTable.Value,
    [QuoteClose].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [QuoteClose].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    [QuoteClose].[ModifiedBy],
    --[QuoteClose].[ModifiedByDsc]
    0,
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
    [QuoteClose].[QuoteId],
    --[QuoteClose].[QuoteIdDsc]
    0,
    [QuoteClose].[QuoteIdName],
    [QuoteClose].[QuoteIdType],
    [QuoteClose].[QuoteNumber],
    [QuoteClose].[Revision],
    [QuoteClose].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[ScheduledEnd],
			us.TimeZoneCode),
        [QuoteClose].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QuoteClose].[ScheduledStart],
			us.TimeZoneCode),
        [QuoteClose].[ScheduledStart],
    [QuoteClose].[ServiceId],
    [QuoteClose].[StateCode],
    StateCodePLTable.Value,
    [QuoteClose].[StatusCode],
    StatusCodePLTable.Value,
    [QuoteClose].[Subcategory],
    [QuoteClose].[Subject],
    [QuoteClose].[TimeZoneRuleVersionNumber],
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
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4211
		and [IsBilledPLTable].AttributeValue = [QuoteClose].[IsBilled]
		and [IsBilledPLTable].LangId = 
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
	--
	[QuoteClose].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
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
		[QuoteClose].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
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
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 4200 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredQuoteClose] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredQuoteClose] TO [CRMReaderRole]
    AS [dbo];

