

--
-- report view for socialactivity
--
create view dbo.[FilteredSocialActivities] (
    [activityid],
    [activitytypecode],
    [activitytypecodename],
    [actualdurationminutes],
    [actualend],
    [actualendutc],
    [actualstart],
    [actualstartutc],
    [community],
    [communityname],
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [directioncode],
    [directioncodename],
    [exchangerate],
    [importsequencenumber],
    [inresponseto],
    [isbilled],
    [isbilledname],
    [isregularactivity],
    [isregularactivityname],
    [isworkflowcreated],
    [isworkflowcreatedname],
    [modifiedby],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [postauthor],
    [postauthoraccount],
    [postauthoraccountname],
    [postauthoraccounttype],
    [postauthoraccountyominame],
    [postauthorname],
    [postauthortype],
    [postauthoryominame],
    [postedbyname],
    [postedon],
    [postedonutc],
    [postfromprofileid],
    [postid],
    [postmessagetype],
    [postmessagetypename],
    [posttoprofileid],
    [posturl],
    [prioritycode],
    [prioritycodename],
    [processid],
    [regardingobjectid],
    [regardingobjectidname],
    [regardingobjectidyominame],
    [regardingobjecttypecode],
    [scheduleddurationminutes],
    [scheduledend],
    [scheduledendutc],
    [scheduledstart],
    [scheduledstartutc],
    [sentimentvalue],
    [serviceid],
    [socialadditionalparams],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [subject],
    [threadid],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode]
) with view_metadata as
select
    [SocialActivity].[ActivityId],
    [SocialActivity].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [SocialActivity].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SocialActivity].[ActualEnd],
			us.TimeZoneCode),
        [SocialActivity].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SocialActivity].[ActualStart],
			us.TimeZoneCode),
        [SocialActivity].[ActualStart],
    [SocialActivity].[Community],
    CommunityPLTable.Value,
    [SocialActivity].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SocialActivity].[CreatedOn],
			us.TimeZoneCode),
        [SocialActivity].[CreatedOn],
    [SocialActivity].[CreatedOnBehalfBy],
    [SocialActivity].[CreatedOnBehalfByName],
    [SocialActivity].[CreatedOnBehalfByYomiName],
    [SocialActivity].[Description],
    [SocialActivity].[DirectionCode],
    DirectionCodePLTable.Value,
    [SocialActivity].[ExchangeRate],
    [SocialActivity].[ImportSequenceNumber],
    [SocialActivity].[InResponseTo],
    [SocialActivity].[IsBilled],
    IsBilledPLTable.Value,
    [SocialActivity].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [SocialActivity].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    [SocialActivity].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SocialActivity].[ModifiedOn],
			us.TimeZoneCode),
        [SocialActivity].[ModifiedOn],
    [SocialActivity].[ModifiedOnBehalfBy],
    [SocialActivity].[ModifiedOnBehalfByName],
    [SocialActivity].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SocialActivity].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SocialActivity].[OverriddenCreatedOn],
    [SocialActivity].[OwnerId],
    [SocialActivity].[OwnerIdName],
    [SocialActivity].[OwnerIdType],
    [SocialActivity].[OwnerIdYomiName],
    [SocialActivity].[OwningBusinessUnit],
    [SocialActivity].[OwningTeam],
    [SocialActivity].[OwningUser],
    [SocialActivity].[PostAuthor],
    [SocialActivity].[PostAuthorAccount],
    [SocialActivity].[PostAuthorAccountName],
    [SocialActivity].[PostAuthorAccountType],
    [SocialActivity].[PostAuthorAccountYomiName],
    [SocialActivity].[PostAuthorName],
    [SocialActivity].[PostAuthorType],
    [SocialActivity].[PostAuthorYomiName],
    [SocialActivity].[PostFromProfileIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SocialActivity].[PostedOn],
			us.TimeZoneCode),
        [SocialActivity].[PostedOn],
    [SocialActivity].[PostFromProfileId],
    [SocialActivity].[PostId],
    [SocialActivity].[PostMessageType],
    PostMessageTypePLTable.Value,
    [SocialActivity].[PostToProfileId],
    [SocialActivity].[PostURL],
    [SocialActivity].[PriorityCode],
    PriorityCodePLTable.Value,
    [SocialActivity].[ProcessId],
    [SocialActivity].[RegardingObjectId],
    [SocialActivity].[RegardingObjectIdName],
    [SocialActivity].[RegardingObjectIdYomiName],
    [SocialActivity].[RegardingObjectTypeCode],
    [SocialActivity].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SocialActivity].[ScheduledEnd],
			us.TimeZoneCode),
        [SocialActivity].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SocialActivity].[ScheduledStart],
			us.TimeZoneCode),
        [SocialActivity].[ScheduledStart],
    [SocialActivity].[SentimentValue],
    [SocialActivity].[ServiceId],
    [SocialActivity].[SocialAdditionalParams],
    [SocialActivity].[StageId],
    [SocialActivity].[StateCode],
    StateCodePLTable.Value,
    [SocialActivity].[StatusCode],
    StatusCodePLTable.Value,
    [SocialActivity].[Subject],
    [SocialActivity].[ThreadId],
    [SocialActivity].[TimeZoneRuleVersionNumber],
    [SocialActivity].[TransactionCurrencyId],
    [SocialActivity].[TransactionCurrencyIdName],
    [SocialActivity].[UTCConversionTimeZoneCode]
from SocialActivity
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4216
		and [ActivityTypeCodePLTable].AttributeValue = [SocialActivity].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CommunityPLTable] on 
		([CommunityPLTable].AttributeName = 'community'
		and [CommunityPLTable].ObjectTypeCode = 4216
		and [CommunityPLTable].AttributeValue = [SocialActivity].[Community]
		and [CommunityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DirectionCodePLTable] on 
		([DirectionCodePLTable].AttributeName = 'directioncode'
		and [DirectionCodePLTable].ObjectTypeCode = 4216
		and [DirectionCodePLTable].AttributeValue = [SocialActivity].[DirectionCode]
		and [DirectionCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4216
		and [IsBilledPLTable].AttributeValue = [SocialActivity].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4216
		and [IsRegularActivityPLTable].AttributeValue = [SocialActivity].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4216
		and [IsWorkflowCreatedPLTable].AttributeValue = [SocialActivity].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PostMessageTypePLTable] on 
		([PostMessageTypePLTable].AttributeName = 'postmessagetype'
		and [PostMessageTypePLTable].ObjectTypeCode = 4216
		and [PostMessageTypePLTable].AttributeValue = [SocialActivity].[PostMessageType]
		and [PostMessageTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4216
		and [PriorityCodePLTable].AttributeValue = [SocialActivity].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4216
		and [StateCodePLTable].AttributeValue = [SocialActivity].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4216
		and [StatusCodePLTable].AttributeValue = [SocialActivity].[StatusCode]
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
	[SocialActivity].OwnerId in 
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
		[SocialActivity].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[SocialActivity].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[SocialActivity].[ActivityId] in 
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
    ON OBJECT::[dbo].[FilteredSocialActivities] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSocialActivities] TO [CRMReaderRole]
    AS [dbo];

