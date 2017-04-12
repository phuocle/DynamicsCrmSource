SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for opportunityclose
--
create view [dbo].[FilteredOpportunityClose] (
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
    [competitorid],
    [competitoriddsc],
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
    [description],
    [exchangerate],
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
    [opportunityid],
    [opportunityiddsc],
    [opportunityidname],
    [opportunityidtype],
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
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
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
    [OpportunityClose].[CompetitorId],
    --[OpportunityClose].[CompetitorIdDsc]
    0,
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
    [OpportunityClose].[Description],
    [OpportunityClose].[ExchangeRate],
    [OpportunityClose].[ImportSequenceNumber],
    [OpportunityClose].[IsBilled],
    IsBilledPLTable.Value,
    [OpportunityClose].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [OpportunityClose].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
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
    [OpportunityClose].[OpportunityId],
    --[OpportunityClose].[OpportunityIdDsc]
    0,
    [OpportunityClose].[OpportunityIdName],
    [OpportunityClose].[OpportunityIdType],
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
    [OpportunityClose].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[ScheduledEnd],
			us.TimeZoneCode),
        [OpportunityClose].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityClose].[ScheduledStart],
			us.TimeZoneCode),
        [OpportunityClose].[ScheduledStart],
    [OpportunityClose].[ServiceId],
    [OpportunityClose].[StateCode],
    StateCodePLTable.Value,
    [OpportunityClose].[StatusCode],
    StatusCodePLTable.Value,
    [OpportunityClose].[Subcategory],
    [OpportunityClose].[Subject],
    [OpportunityClose].[TimeZoneRuleVersionNumber],
    [OpportunityClose].[TransactionCurrencyId],
    --[OpportunityClose].[TransactionCurrencyIdDsc]
    0,
    [OpportunityClose].[TransactionCurrencyIdName],
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
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4208
		and [IsBilledPLTable].AttributeValue = [OpportunityClose].[IsBilled]
		and [IsBilledPLTable].LangId = 
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
		[OpportunityClose].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
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
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 4200))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredOpportunityClose] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredOpportunityClose] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
