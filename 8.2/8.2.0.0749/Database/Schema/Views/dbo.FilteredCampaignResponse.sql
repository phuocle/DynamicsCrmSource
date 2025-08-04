SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for campaignresponse
--
create view [dbo].[FilteredCampaignResponse] (
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
    [channeltypecode],
    [channeltypecodename],
    [companyname],
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
    [emailaddress],
    [exchangerate],
    [fax],
    [firstname],
    [importsequencenumber],
    [isbilled],
    [isbilledname],
    [isregularactivity],
    [isregularactivityname],
    [isworkflowcreated],
    [isworkflowcreatedname],
    [lastname],
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
    [originatingactivitydsc],
    [originatingactivityid],
    [originatingactivityidtypecode],
    [originatingactivityname],
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
    [promotioncodename],
    [receivedon],
    [receivedonutc],
    [regardingobjectid],
    [regardingobjectiddsc],
    [regardingobjectidname],
    [regardingobjectidyominame],
    [regardingobjecttypecode],
    [responsecode],
    [responsecodename],
    [scheduleddurationminutes],
    [scheduledend],
    [scheduledendutc],
    [scheduledstart],
    [scheduledstartutc],
    [serviceid],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [subcategory],
    [subject],
    [telephone],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber],
    [yomicompanyname],
    [yomifirstname],
    [yomilastname]
) with view_metadata as
select
    [CampaignResponse].[ActivityAdditionalParams],
    [CampaignResponse].[ActivityId],
    [CampaignResponse].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [CampaignResponse].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CampaignResponse].[ActualEnd],
			us.TimeZoneCode),
        [CampaignResponse].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CampaignResponse].[ActualStart],
			us.TimeZoneCode),
        [CampaignResponse].[ActualStart],
    [CampaignResponse].[Category],
    [CampaignResponse].[ChannelTypeCode],
    ChannelTypeCodePLTable.Value,
    [CampaignResponse].[CompanyName],
    [CampaignResponse].[CreatedBy],
    --[CampaignResponse].[CreatedByDsc]
    0,
    [CampaignResponse].[CreatedByName],
    [CampaignResponse].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CampaignResponse].[CreatedOn],
			us.TimeZoneCode),
        [CampaignResponse].[CreatedOn],
    [CampaignResponse].[CreatedOnBehalfBy],
    --[CampaignResponse].[CreatedOnBehalfByDsc]
    0,
    [CampaignResponse].[CreatedOnBehalfByName],
    [CampaignResponse].[CreatedOnBehalfByYomiName],
    [CampaignResponse].[Description],
    [CampaignResponse].[EMailAddress],
    [CampaignResponse].[ExchangeRate],
    [CampaignResponse].[Fax],
    [CampaignResponse].[FirstName],
    [CampaignResponse].[ImportSequenceNumber],
    [CampaignResponse].[IsBilled],
    IsBilledPLTable.Value,
    [CampaignResponse].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [CampaignResponse].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    [CampaignResponse].[LastName],
    [CampaignResponse].[ModifiedBy],
    --[CampaignResponse].[ModifiedByDsc]
    0,
    [CampaignResponse].[ModifiedByName],
    [CampaignResponse].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CampaignResponse].[ModifiedOn],
			us.TimeZoneCode),
        [CampaignResponse].[ModifiedOn],
    [CampaignResponse].[ModifiedOnBehalfBy],
    --[CampaignResponse].[ModifiedOnBehalfByDsc]
    0,
    [CampaignResponse].[ModifiedOnBehalfByName],
    [CampaignResponse].[ModifiedOnBehalfByYomiName],
    --[CampaignResponse].[OriginatingActivityDsc]
    0,
    [CampaignResponse].[OriginatingActivityId],
    [CampaignResponse].[OriginatingActivityIdTypeCode],
    [CampaignResponse].[OriginatingActivityName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CampaignResponse].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CampaignResponse].[OverriddenCreatedOn],
    [CampaignResponse].[OwnerId],
    --[CampaignResponse].[OwnerIdDsc]
    0,
    [CampaignResponse].[OwnerIdName],
    [CampaignResponse].[OwnerIdType],
    [CampaignResponse].[OwnerIdYomiName],
    [CampaignResponse].[OwningBusinessUnit],
    [CampaignResponse].[OwningTeam],
    [CampaignResponse].[OwningUser],
    [CampaignResponse].[PriorityCode],
    PriorityCodePLTable.Value,
    [CampaignResponse].[ProcessId],
    [CampaignResponse].[PromotionCodeName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CampaignResponse].[ReceivedOn],
			us.TimeZoneCode),
        [CampaignResponse].[ReceivedOn],
    [CampaignResponse].[RegardingObjectId],
    --[CampaignResponse].[RegardingObjectIdDsc]
    0,
    [CampaignResponse].[RegardingObjectIdName],
    [CampaignResponse].[RegardingObjectIdYomiName],
    [CampaignResponse].[RegardingObjectTypeCode],
    [CampaignResponse].[ResponseCode],
    ResponseCodePLTable.Value,
    [CampaignResponse].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CampaignResponse].[ScheduledEnd],
			us.TimeZoneCode),
        [CampaignResponse].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CampaignResponse].[ScheduledStart],
			us.TimeZoneCode),
        [CampaignResponse].[ScheduledStart],
    [CampaignResponse].[ServiceId],
    [CampaignResponse].[StageId],
    [CampaignResponse].[StateCode],
    StateCodePLTable.Value,
    [CampaignResponse].[StatusCode],
    StatusCodePLTable.Value,
    [CampaignResponse].[Subcategory],
    [CampaignResponse].[Subject],
    [CampaignResponse].[Telephone],
    [CampaignResponse].[TimeZoneRuleVersionNumber],
    [CampaignResponse].[TransactionCurrencyId],
    [CampaignResponse].[TransactionCurrencyIdName],
    [CampaignResponse].[TraversedPath],
    [CampaignResponse].[UTCConversionTimeZoneCode],
    [CampaignResponse].[VersionNumber],
    [CampaignResponse].[YomiCompanyName],
    [CampaignResponse].[YomiFirstName],
    [CampaignResponse].[YomiLastName]
from CampaignResponse
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4401
		and [ActivityTypeCodePLTable].AttributeValue = [CampaignResponse].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ChannelTypeCodePLTable] on 
		([ChannelTypeCodePLTable].AttributeName = 'channeltypecode'
		and [ChannelTypeCodePLTable].ObjectTypeCode = 4401
		and [ChannelTypeCodePLTable].AttributeValue = [CampaignResponse].[ChannelTypeCode]
		and [ChannelTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4401
		and [IsBilledPLTable].AttributeValue = [CampaignResponse].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4401
		and [IsRegularActivityPLTable].AttributeValue = [CampaignResponse].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4401
		and [IsWorkflowCreatedPLTable].AttributeValue = [CampaignResponse].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4401
		and [PriorityCodePLTable].AttributeValue = [CampaignResponse].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ResponseCodePLTable] on 
		([ResponseCodePLTable].AttributeName = 'responsecode'
		and [ResponseCodePLTable].ObjectTypeCode = 4401
		and [ResponseCodePLTable].AttributeValue = [CampaignResponse].[ResponseCode]
		and [ResponseCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4401
		and [StateCodePLTable].AttributeValue = [CampaignResponse].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4401
		and [StatusCodePLTable].AttributeValue = [CampaignResponse].[StatusCode]
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
	[CampaignResponse].OwnerId in 
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
		[CampaignResponse].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[CampaignResponse].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[CampaignResponse].[ActivityId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 4200))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredCampaignResponse] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredCampaignResponse] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
