

--
-- report view for email
--
create view dbo.[FilteredEmail] 
(
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
    [attachmentopencount],
    [baseconversationindexhash],
    [category],
    [compressed],
    [compressedname],
    [conversationindex],
    [conversationtrackingid],
    [correlatedactivityid],
    [correlatedactivityidname],
    [correlationmethod],
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
    [delayedemailsendtime],
    [delayedemailsendtimeutc],
    [deliveryattempts],
    [deliveryprioritycode],
    [deliveryprioritycodename],
    [deliveryreceiptrequested],
    [deliveryreceiptrequestedname],
    [description],
    [directioncode],
    [directioncodename],
    [emailreminderexpirytime],
    [emailreminderexpirytimeutc],
    [emailreminderstatus],
    [emailreminderstatusname],
    [emailremindertext],
    [emailremindertype],
    [emailremindertypename],
    [emailsender],
    [emailsendername],
    [emailsenderobjecttypecode],
    [emailsenderyominame],
    [emailtrackingid],
    [exchangerate],
    [followemailuserpreference],
    [followemailuserpreferencename],
    [importsequencenumber],
    [inreplyto],
    [isbilled],
    [isbilledname],
    [isemailfollowed],
    [isemailfollowedname],
    [isemailreminderset],
    [isemailremindersetname],
    [isregularactivity],
    [isregularactivityname],
    [isunsafe],
    [isworkflowcreated],
    [isworkflowcreatedname],
    [lastonholdtime],
    [lastonholdtimeutc],
    [lastopenedtime],
    [lastopenedtimeutc],
    [linksclickedcount],
    [messageid],
    [mimetype],
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
    [notifications],
    [notificationsname],
    [onholdtime],
    [opencount],
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
    [parentactivityid],
    [parentactivityidname],
    [postponeemailprocessinguntil],
    [postponeemailprocessinguntilutc],
    [prioritycode],
    [prioritycodename],
    [processid],
    [readreceiptrequested],
    [readreceiptrequestedname],
    [regardingobjectid],
    [regardingobjectiddsc],
    [regardingobjectidname],
    [regardingobjectidyominame],
    [regardingobjecttypecode],
    [reminderactioncardid],
    [replycount],
    [reservedforinternaluse],
    [safedescription],
    [scheduleddurationminutes],
    [scheduledend],
    [scheduledendutc],
    [scheduledstart],
    [scheduledstartutc],
    [sender],
    [sendermailboxid],
    [sendermailboxidname],
    [sendersaccount],
    [sendersaccountname],
    [sendersaccountobjecttypecode],
    [sendersaccountyominame],
    [senton],
    [sentonutc],
    [serviceid],
    [serviceidname],
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
    [submittedby],
    [templateid],
    [templateidname],
    [timezoneruleversionnumber],
    [torecipients],
    [trackingtoken],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [Email].[ActivityAdditionalParams],
    [Email].[ActivityId],
    [Email].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [Email].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[ActualEnd],
			us.TimeZoneCode),
        [Email].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[ActualStart],
			us.TimeZoneCode),
        [Email].[ActualStart],
    [Email].[AttachmentCount],
    [Email].[AttachmentOpenCount],
    [Email].[BaseConversationIndexHash],
    [Email].[Category],
    [Email].[Compressed],
    CompressedPLTable.Value,
    [Email].[ConversationIndex],
    [Email].[ConversationTrackingId],
    [Email].[CorrelatedActivityId],
    [Email].[CorrelatedActivityIdName],
    [Email].[CorrelationMethod],
    [Email].[CreatedBy],
    --[Email].[CreatedByDsc]
    0,
    [Email].[CreatedByName],
    [Email].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[CreatedOn],
			us.TimeZoneCode),
        [Email].[CreatedOn],
    [Email].[CreatedOnBehalfBy],
    --[Email].[CreatedOnBehalfByDsc]
    0,
    [Email].[CreatedOnBehalfByName],
    [Email].[CreatedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[DelayedEmailSendTime],
			us.TimeZoneCode),
        [Email].[DelayedEmailSendTime],
    [Email].[DeliveryAttempts],
    [Email].[DeliveryPriorityCode],
    DeliveryPriorityCodePLTable.Value,
    [Email].[DeliveryReceiptRequested],
    DeliveryReceiptRequestedPLTable.Value,
    [Email].[Description],
    [Email].[DirectionCode],
    DirectionCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[EmailReminderExpiryTime],
			us.TimeZoneCode),
        [Email].[EmailReminderExpiryTime],
    [Email].[EmailReminderStatus],
    EmailReminderStatusPLTable.Value,
    [Email].[EmailReminderText],
    [Email].[EmailReminderType],
    EmailReminderTypePLTable.Value,
    [Email].[EmailSender],
    [Email].[EmailSenderName],
    [Email].[EmailSenderObjectTypeCode],
    [Email].[EmailSenderYomiName],
    [Email].[EmailTrackingId],
    [Email].[ExchangeRate],
    [Email].[FollowEmailUserPreference],
    FollowEmailUserPreferencePLTable.Value,
    [Email].[ImportSequenceNumber],
    [Email].[InReplyTo],
    [Email].[IsBilled],
    IsBilledPLTable.Value,
    [Email].[IsEmailFollowed],
    IsEmailFollowedPLTable.Value,
    [Email].[IsEmailReminderSet],
    IsEmailReminderSetPLTable.Value,
    [Email].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [Email].[IsUnsafe],
    [Email].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[LastOnHoldTime],
			us.TimeZoneCode),
        [Email].[LastOnHoldTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[LastOpenedTime],
			us.TimeZoneCode),
        [Email].[LastOpenedTime],
    [Email].[LinksClickedCount],
    [Email].[MessageId],
    [Email].[MimeType],
    [Email].[ModifiedBy],
    --[Email].[ModifiedByDsc]
    0,
    [Email].[ModifiedByName],
    [Email].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[ModifiedOn],
			us.TimeZoneCode),
        [Email].[ModifiedOn],
    [Email].[ModifiedOnBehalfBy],
    --[Email].[ModifiedOnBehalfByDsc]
    0,
    [Email].[ModifiedOnBehalfByName],
    [Email].[ModifiedOnBehalfByYomiName],
    [Email].[Notifications],
    NotificationsPLTable.Value,
    [Email].[OnHoldTime],
    [Email].[OpenCount],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Email].[OverriddenCreatedOn],
    [Email].[OwnerId],
    --[Email].[OwnerIdDsc]
    0,
    [Email].[OwnerIdName],
    [Email].[OwnerIdType],
    [Email].[OwnerIdYomiName],
    [Email].[OwningBusinessUnit],
    [Email].[OwningTeam],
    [Email].[OwningUser],
    [Email].[ParentActivityId],
    [Email].[ParentActivityIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[PostponeEmailProcessingUntil],
			us.TimeZoneCode),
        [Email].[PostponeEmailProcessingUntil],
    [Email].[PriorityCode],
    PriorityCodePLTable.Value,
    [Email].[ProcessId],
    [Email].[ReadReceiptRequested],
    ReadReceiptRequestedPLTable.Value,
    [Email].[RegardingObjectId],
    --[Email].[RegardingObjectIdDsc]
    0,
    [Email].[RegardingObjectIdName],
    [Email].[RegardingObjectIdYomiName],
    [Email].[RegardingObjectTypeCode],
    [Email].[ReminderActionCardId],
    [Email].[ReplyCount],
    [Email].[ReservedForInternalUse],
    --[Email].[SafeDescription]
    cast(null as nvarchar),
    [Email].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[ScheduledEnd],
			us.TimeZoneCode),
        [Email].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[ScheduledStart],
			us.TimeZoneCode),
        [Email].[ScheduledStart],
    [Email].[Sender],
    [Email].[SenderMailboxId],
    [Email].[SenderMailboxIdName],
    [Email].[SendersAccount],
    [Email].[SendersAccountName],
    [Email].[SendersAccountObjectTypeCode],
    [Email].[SendersAccountYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[SentOn],
			us.TimeZoneCode),
        [Email].[SentOn],
    [Email].[ServiceId],
    [Email].[ServiceIdName],
    [Email].[SLAId],
    [Email].[SLAInvokedId],
    [Email].[SLAInvokedIdName],
    [Email].[SLAName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Email].[SortDate],
			us.TimeZoneCode),
        [Email].[SortDate],
    [Email].[StageId],
    [Email].[StateCode],
    StateCodePLTable.Value,
    [Email].[StatusCode],
    StatusCodePLTable.Value,
    [Email].[Subcategory],
    [Email].[Subject],
    [Email].[SubmittedBy],
    [Email].[TemplateId],
    [Email].[TemplateIdName],
    [Email].[TimeZoneRuleVersionNumber],
    [Email].[ToRecipients],
    [Email].[TrackingToken],
    [Email].[TransactionCurrencyId],
    [Email].[TransactionCurrencyIdName],
    [Email].[TraversedPath],
    [Email].[UTCConversionTimeZoneCode],
    [Email].[VersionNumber]
from Email
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4202
		and [ActivityTypeCodePLTable].AttributeValue = [Email].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CompressedPLTable] on 
		([CompressedPLTable].AttributeName = 'compressed'
		and [CompressedPLTable].ObjectTypeCode = 4202
		and [CompressedPLTable].AttributeValue = [Email].[Compressed]
		and [CompressedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DeliveryPriorityCodePLTable] on 
		([DeliveryPriorityCodePLTable].AttributeName = 'deliveryprioritycode'
		and [DeliveryPriorityCodePLTable].ObjectTypeCode = 4202
		and [DeliveryPriorityCodePLTable].AttributeValue = [Email].[DeliveryPriorityCode]
		and [DeliveryPriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DeliveryReceiptRequestedPLTable] on 
		([DeliveryReceiptRequestedPLTable].AttributeName = 'deliveryreceiptrequested'
		and [DeliveryReceiptRequestedPLTable].ObjectTypeCode = 4202
		and [DeliveryReceiptRequestedPLTable].AttributeValue = [Email].[DeliveryReceiptRequested]
		and [DeliveryReceiptRequestedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DirectionCodePLTable] on 
		([DirectionCodePLTable].AttributeName = 'directioncode'
		and [DirectionCodePLTable].ObjectTypeCode = 4202
		and [DirectionCodePLTable].AttributeValue = [Email].[DirectionCode]
		and [DirectionCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EmailReminderStatusPLTable] on 
		([EmailReminderStatusPLTable].AttributeName = 'emailreminderstatus'
		and [EmailReminderStatusPLTable].ObjectTypeCode = 4202
		and [EmailReminderStatusPLTable].AttributeValue = [Email].[EmailReminderStatus]
		and [EmailReminderStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EmailReminderTypePLTable] on 
		([EmailReminderTypePLTable].AttributeName = 'emailremindertype'
		and [EmailReminderTypePLTable].ObjectTypeCode = 4202
		and [EmailReminderTypePLTable].AttributeValue = [Email].[EmailReminderType]
		and [EmailReminderTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FollowEmailUserPreferencePLTable] on 
		([FollowEmailUserPreferencePLTable].AttributeName = 'followemailuserpreference'
		and [FollowEmailUserPreferencePLTable].ObjectTypeCode = 4202
		and [FollowEmailUserPreferencePLTable].AttributeValue = [Email].[FollowEmailUserPreference]
		and [FollowEmailUserPreferencePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4202
		and [IsBilledPLTable].AttributeValue = [Email].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsEmailFollowedPLTable] on 
		([IsEmailFollowedPLTable].AttributeName = 'isemailfollowed'
		and [IsEmailFollowedPLTable].ObjectTypeCode = 4202
		and [IsEmailFollowedPLTable].AttributeValue = [Email].[IsEmailFollowed]
		and [IsEmailFollowedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsEmailReminderSetPLTable] on 
		([IsEmailReminderSetPLTable].AttributeName = 'isemailreminderset'
		and [IsEmailReminderSetPLTable].ObjectTypeCode = 4202
		and [IsEmailReminderSetPLTable].AttributeValue = [Email].[IsEmailReminderSet]
		and [IsEmailReminderSetPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4202
		and [IsRegularActivityPLTable].AttributeValue = [Email].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4202
		and [IsWorkflowCreatedPLTable].AttributeValue = [Email].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [NotificationsPLTable] on 
		([NotificationsPLTable].AttributeName = 'notifications'
		and [NotificationsPLTable].ObjectTypeCode = 4202
		and [NotificationsPLTable].AttributeValue = [Email].[Notifications]
		and [NotificationsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 4202
		and [PriorityCodePLTable].AttributeValue = [Email].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ReadReceiptRequestedPLTable] on 
		([ReadReceiptRequestedPLTable].AttributeName = 'readreceiptrequested'
		and [ReadReceiptRequestedPLTable].ObjectTypeCode = 4202
		and [ReadReceiptRequestedPLTable].AttributeValue = [Email].[ReadReceiptRequested]
		and [ReadReceiptRequestedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4202
		and [StateCodePLTable].AttributeValue = [Email].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4202
		and [StatusCodePLTable].AttributeValue = [Email].[StatusCode]
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
	[Email].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
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
		[Email].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Email].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Email].[ActivityId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 4200
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEmail] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEmail] TO [CRMReaderRole]
    AS [dbo];

