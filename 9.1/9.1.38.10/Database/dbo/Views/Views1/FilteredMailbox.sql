

--
-- report view for mailbox
--
create view dbo.[FilteredMailbox] 
(
    [actdeliverymethod],
    [actdeliverymethodname],
    [actstatus],
    [actstatusname],
    [allowemailconnectortousecredentials],
    [allowemailconnectortousecredentialsname],
    [averagetotalduration],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [credentialinfo],
    [emailaddress],
    [emailrouteraccessapproval],
    [emailrouteraccessapprovalname],
    [emailserverprofile],
    [emailserverprofilename],
    [enabledforact],
    [enabledforactname],
    [enabledforincomingemail],
    [enabledforincomingemailname],
    [enabledforoutgoingemail],
    [enabledforoutgoingemailname],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [ewsurl],
    [exchangecontactsimportcompletedon],
    [exchangecontactsimportcompletedonutc],
    [exchangecontactsimportstatus],
    [exchangesyncstatexml],
    [exchangesyncstatexmlfileref],
    [exchangesyncstatexmlfileref_name],
    [folderhierarchy],
    [forcedunlockcount],
    [hostid],
    [incomingemaildeliverymethod],
    [incomingemaildeliverymethodname],
    [incomingemailstatus],
    [incomingemailstatusname],
    [isactsyncorgflagset],
    [isdataencryptionkeyset],
    [isemailaddressapprovedbyo365admin],
    [isexchangecontactsimportscheduled],
    [isforwardmailbox],
    [isforwardmailboxname],
    [isoauthaccesstokenset],
    [isoauthrefreshtokenset],
    [ispasswordset],
    [isserviceaccount],
    [itemsfailedforlastsync],
    [itemsprocessedforlastsync],
    [lastautodiscoveredon],
    [lastautodiscoveredonutc],
    [lastduration],
    [lastmailboxforcedunlockoccurredon],
    [lastmailboxforcedunlockoccurredonutc],
    [lastsuccessfulsynccompletedon],
    [lastsuccessfulsynccompletedonutc],
    [lastsyncerror],
    [lastsyncerrorcode],
    [lastsyncerrorcount],
    [lastsyncerrormachinename],
    [lastsyncerroroccurredon],
    [lastsyncerroroccurredonutc],
    [lastsyncstartedon],
    [lastsyncstartedonutc],
    [mailboxid],
    [mailboxprocessingcontext],
    [mailboxstatus],
    [mailboxstatusname],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [noactcount],
    [noemailcount],
    [oauthtokenexpireson],
    [oauthtokenexpiresonutc],
    [officeappsdeploymentcompleteon],
    [officeappsdeploymentcompleteonutc],
    [officeappsdeploymenterror],
    [officeappsdeploymentscheduled],
    [officeappsdeploymentscheduledname],
    [officeappsdeploymentstatus],
    [organizationid],
    [organizationidname],
    [orgmarkedasprimaryforexchangesync],
    [outgoingemaildeliverymethod],
    [outgoingemaildeliverymethodname],
    [outgoingemailstatus],
    [outgoingemailstatusname],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningbusinessunitname],
    [owningteam],
    [owninguser],
    [postponemailboxprocessinguntil],
    [postponemailboxprocessinguntilutc],
    [postponeofficeappsdeploymentuntil],
    [postponeofficeappsdeploymentuntilutc],
    [postponesendinguntil],
    [postponesendinguntilutc],
    [postponetestemailconfigurationuntil],
    [postponetestemailconfigurationuntilutc],
    [processanddeleteemails],
    [processanddeleteemailsname],
    [processedtimes],
    [processemailreceivedafter],
    [processemailreceivedafterutc],
    [processinglastattemptedon],
    [processinglastattemptedonutc],
    [processingstatecode],
    [receivingpostponeduntil],
    [receivingpostponeduntilutc],
    [receivingpostponeduntilforact],
    [receivingpostponeduntilforactutc],
    [regardingobjectid],
    [regardingobjectidname],
    [regardingobjecttypecode],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [testemailconfigurationretrycount],
    [testemailconfigurationscheduled],
    [testemailconfigurationscheduledname],
    [testmailboxaccesscompletedon],
    [testmailboxaccesscompletedonutc],
    [timezoneruleversionnumber],
    [transientfailurecount],
    [undeliverablefolder],
    [username],
    [utcconversiontimezonecode],
    [verboseloggingenabled],
    [versionnumber]
) with view_metadata as
select
    [Mailbox].[ACTDeliveryMethod],
    ACTDeliveryMethodPLTable.Value,
    [Mailbox].[ACTStatus],
    ACTStatusPLTable.Value,
    [Mailbox].[AllowEmailConnectorToUseCredentials],
    AllowEmailConnectorToUseCredentialsPLTable.Value,
    [Mailbox].[AverageTotalDuration],
    [Mailbox].[CreatedBy],
    [Mailbox].[CreatedByName],
    [Mailbox].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[CreatedOn],
			us.TimeZoneCode),
        [Mailbox].[CreatedOn],
    [Mailbox].[CreatedOnBehalfBy],
    [Mailbox].[CreatedOnBehalfByName],
    [Mailbox].[CreatedOnBehalfByYomiName],
    [Mailbox].[CredentialInfo],
    [Mailbox].[EmailAddress],
    [Mailbox].[EmailRouterAccessApproval],
    EmailRouterAccessApprovalPLTable.Value,
    [Mailbox].[EmailServerProfile],
    [Mailbox].[EmailServerProfileName],
    [Mailbox].[EnabledForACT],
    EnabledForACTPLTable.Value,
    [Mailbox].[EnabledForIncomingEmail],
    EnabledForIncomingEmailPLTable.Value,
    [Mailbox].[EnabledForOutgoingEmail],
    EnabledForOutgoingEmailPLTable.Value,
    cast([Mailbox].[EntityImage] as varbinary(max)),
    [Mailbox].[EntityImageId],
    [Mailbox].[EntityImage_Timestamp],
    [Mailbox].[EntityImage_URL],
    [Mailbox].[EWSURL],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[ExchangeContactsImportCompletedOn],
			us.TimeZoneCode),
        [Mailbox].[ExchangeContactsImportCompletedOn],
    [Mailbox].[ExchangeContactsImportStatus],
    [Mailbox].[ExchangeSyncStateXml],
    [Mailbox].[ExchangeSyncStateXmlFileRef],
    [Mailbox].[ExchangeSyncStateXmlFileRef_Name],
    [Mailbox].[FolderHierarchy],
    [Mailbox].[ForcedUnlockCount],
    [Mailbox].[HostId],
    [Mailbox].[IncomingEmailDeliveryMethod],
    IncomingEmailDeliveryMethodPLTable.Value,
    [Mailbox].[IncomingEmailStatus],
    IncomingEmailStatusPLTable.Value,
    [Mailbox].[IsACTSyncOrgFlagSet],
    [Mailbox].[IsDataEncryptionKeySet],
    [Mailbox].[IsEmailAddressApprovedByO365Admin],
    [Mailbox].[IsExchangeContactsImportScheduled],
    [Mailbox].[IsForwardMailbox],
    IsForwardMailboxPLTable.Value,
    [Mailbox].[IsOauthAccessTokenSet],
    [Mailbox].[IsOauthRefreshTokenSet],
    [Mailbox].[IsPasswordSet],
    [Mailbox].[IsServiceAccount],
    [Mailbox].[ItemsFailedForLastSync],
    [Mailbox].[ItemsProcessedForLastSync],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[LastAutoDiscoveredOn],
			us.TimeZoneCode),
        [Mailbox].[LastAutoDiscoveredOn],
    [Mailbox].[LastDuration],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[LastMailboxForcedUnlockOccurredOn],
			us.TimeZoneCode),
        [Mailbox].[LastMailboxForcedUnlockOccurredOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[LastSuccessfulSyncCompletedOn],
			us.TimeZoneCode),
        [Mailbox].[LastSuccessfulSyncCompletedOn],
    [Mailbox].[LastSyncError],
    [Mailbox].[LastSyncErrorCode],
    [Mailbox].[LastSyncErrorCount],
    [Mailbox].[LastSyncErrorMachineName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[LastSyncErrorOccurredOn],
			us.TimeZoneCode),
        [Mailbox].[LastSyncErrorOccurredOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[LastSyncStartedOn],
			us.TimeZoneCode),
        [Mailbox].[LastSyncStartedOn],
    [Mailbox].[MailboxId],
    [Mailbox].[MailboxProcessingContext],
    [Mailbox].[MailboxStatus],
    MailboxStatusPLTable.Value,
    [Mailbox].[ModifiedBy],
    [Mailbox].[ModifiedByName],
    [Mailbox].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[ModifiedOn],
			us.TimeZoneCode),
        [Mailbox].[ModifiedOn],
    [Mailbox].[ModifiedOnBehalfBy],
    [Mailbox].[ModifiedOnBehalfByName],
    [Mailbox].[ModifiedOnBehalfByYomiName],
    [Mailbox].[Name],
    [Mailbox].[NoACTCount],
    [Mailbox].[NoEmailCount],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[OauthTokenExpiresOn],
			us.TimeZoneCode),
        [Mailbox].[OauthTokenExpiresOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[OfficeAppsDeploymentCompleteOn],
			us.TimeZoneCode),
        [Mailbox].[OfficeAppsDeploymentCompleteOn],
    [Mailbox].[OfficeAppsDeploymentError],
    [Mailbox].[OfficeAppsDeploymentScheduled],
    OfficeAppsDeploymentScheduledPLTable.Value,
    [Mailbox].[OfficeAppsDeploymentStatus],
    [Mailbox].[OrganizationId],
    [Mailbox].[OrganizationIdName],
    [Mailbox].[OrgMarkedAsPrimaryForExchangeSync],
    [Mailbox].[OutgoingEmailDeliveryMethod],
    OutgoingEmailDeliveryMethodPLTable.Value,
    [Mailbox].[OutgoingEmailStatus],
    OutgoingEmailStatusPLTable.Value,
    [Mailbox].[OwnerId],
    [Mailbox].[OwnerIdName],
    [Mailbox].[OwnerIdType],
    [Mailbox].[OwnerIdYomiName],
    [Mailbox].[OwningBusinessUnit],
    [Mailbox].[OwningBusinessUnitName],
    [Mailbox].[OwningTeam],
    [Mailbox].[OwningUser],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[PostponeMailboxProcessingUntil],
			us.TimeZoneCode),
        [Mailbox].[PostponeMailboxProcessingUntil],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[PostponeOfficeAppsDeploymentUntil],
			us.TimeZoneCode),
        [Mailbox].[PostponeOfficeAppsDeploymentUntil],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[PostponeSendingUntil],
			us.TimeZoneCode),
        [Mailbox].[PostponeSendingUntil],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[PostponeTestEmailConfigurationUntil],
			us.TimeZoneCode),
        [Mailbox].[PostponeTestEmailConfigurationUntil],
    [Mailbox].[ProcessAndDeleteEmails],
    ProcessAndDeleteEmailsPLTable.Value,
    [Mailbox].[ProcessedTimes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[ProcessEmailReceivedAfter],
			us.TimeZoneCode),
        [Mailbox].[ProcessEmailReceivedAfter],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[ProcessingLastAttemptedOn],
			us.TimeZoneCode),
        [Mailbox].[ProcessingLastAttemptedOn],
    [Mailbox].[ProcessingStateCode],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[ReceivingPostponedUntil],
			us.TimeZoneCode),
        [Mailbox].[ReceivingPostponedUntil],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[ReceivingPostponedUntilForACT],
			us.TimeZoneCode),
        [Mailbox].[ReceivingPostponedUntilForACT],
    [Mailbox].[RegardingObjectId],
    [Mailbox].[RegardingObjectIdName],
    [Mailbox].[RegardingObjectTypeCode],
    [Mailbox].[StateCode],
    StateCodePLTable.Value,
    [Mailbox].[StatusCode],
    StatusCodePLTable.Value,
    [Mailbox].[TestEmailConfigurationRetryCount],
    [Mailbox].[TestEmailConfigurationScheduled],
    TestEmailConfigurationScheduledPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Mailbox].[TestMailboxAccessCompletedOn],
			us.TimeZoneCode),
        [Mailbox].[TestMailboxAccessCompletedOn],
    [Mailbox].[TimeZoneRuleVersionNumber],
    [Mailbox].[TransientFailureCount],
    [Mailbox].[UndeliverableFolder],
    [Mailbox].[Username],
    [Mailbox].[UTCConversionTimeZoneCode],
    [Mailbox].[VerboseLoggingEnabled],
    [Mailbox].[VersionNumber]
from Mailbox
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ACTDeliveryMethodPLTable] on 
		([ACTDeliveryMethodPLTable].AttributeName = 'actdeliverymethod'
		and [ACTDeliveryMethodPLTable].ObjectTypeCode = 9606
		and [ACTDeliveryMethodPLTable].AttributeValue = [Mailbox].[ACTDeliveryMethod]
		and [ACTDeliveryMethodPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ACTStatusPLTable] on 
		([ACTStatusPLTable].AttributeName = 'actstatus'
		and [ACTStatusPLTable].ObjectTypeCode = 9606
		and [ACTStatusPLTable].AttributeValue = [Mailbox].[ACTStatus]
		and [ACTStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [AllowEmailConnectorToUseCredentialsPLTable] on 
		([AllowEmailConnectorToUseCredentialsPLTable].AttributeName = 'allowemailconnectortousecredentials'
		and [AllowEmailConnectorToUseCredentialsPLTable].ObjectTypeCode = 9606
		and [AllowEmailConnectorToUseCredentialsPLTable].AttributeValue = [Mailbox].[AllowEmailConnectorToUseCredentials]
		and [AllowEmailConnectorToUseCredentialsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EmailRouterAccessApprovalPLTable] on 
		([EmailRouterAccessApprovalPLTable].AttributeName = 'emailrouteraccessapproval'
		and [EmailRouterAccessApprovalPLTable].ObjectTypeCode = 9606
		and [EmailRouterAccessApprovalPLTable].AttributeValue = [Mailbox].[EmailRouterAccessApproval]
		and [EmailRouterAccessApprovalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EnabledForACTPLTable] on 
		([EnabledForACTPLTable].AttributeName = 'enabledforact'
		and [EnabledForACTPLTable].ObjectTypeCode = 9606
		and [EnabledForACTPLTable].AttributeValue = [Mailbox].[EnabledForACT]
		and [EnabledForACTPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EnabledForIncomingEmailPLTable] on 
		([EnabledForIncomingEmailPLTable].AttributeName = 'enabledforincomingemail'
		and [EnabledForIncomingEmailPLTable].ObjectTypeCode = 9606
		and [EnabledForIncomingEmailPLTable].AttributeValue = [Mailbox].[EnabledForIncomingEmail]
		and [EnabledForIncomingEmailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EnabledForOutgoingEmailPLTable] on 
		([EnabledForOutgoingEmailPLTable].AttributeName = 'enabledforoutgoingemail'
		and [EnabledForOutgoingEmailPLTable].ObjectTypeCode = 9606
		and [EnabledForOutgoingEmailPLTable].AttributeValue = [Mailbox].[EnabledForOutgoingEmail]
		and [EnabledForOutgoingEmailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IncomingEmailDeliveryMethodPLTable] on 
		([IncomingEmailDeliveryMethodPLTable].AttributeName = 'incomingemaildeliverymethod'
		and [IncomingEmailDeliveryMethodPLTable].ObjectTypeCode = 9606
		and [IncomingEmailDeliveryMethodPLTable].AttributeValue = [Mailbox].[IncomingEmailDeliveryMethod]
		and [IncomingEmailDeliveryMethodPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IncomingEmailStatusPLTable] on 
		([IncomingEmailStatusPLTable].AttributeName = 'incomingemailstatus'
		and [IncomingEmailStatusPLTable].ObjectTypeCode = 9606
		and [IncomingEmailStatusPLTable].AttributeValue = [Mailbox].[IncomingEmailStatus]
		and [IncomingEmailStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsForwardMailboxPLTable] on 
		([IsForwardMailboxPLTable].AttributeName = 'isforwardmailbox'
		and [IsForwardMailboxPLTable].ObjectTypeCode = 9606
		and [IsForwardMailboxPLTable].AttributeValue = [Mailbox].[IsForwardMailbox]
		and [IsForwardMailboxPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [MailboxStatusPLTable] on 
		([MailboxStatusPLTable].AttributeName = 'mailboxstatus'
		and [MailboxStatusPLTable].ObjectTypeCode = 9606
		and [MailboxStatusPLTable].AttributeValue = [Mailbox].[MailboxStatus]
		and [MailboxStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OfficeAppsDeploymentScheduledPLTable] on 
		([OfficeAppsDeploymentScheduledPLTable].AttributeName = 'officeappsdeploymentscheduled'
		and [OfficeAppsDeploymentScheduledPLTable].ObjectTypeCode = 9606
		and [OfficeAppsDeploymentScheduledPLTable].AttributeValue = [Mailbox].[OfficeAppsDeploymentScheduled]
		and [OfficeAppsDeploymentScheduledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OfficeAppsDeploymentStatusPLTable] on 
		([OfficeAppsDeploymentStatusPLTable].AttributeName = 'officeappsdeploymentstatus'
		and [OfficeAppsDeploymentStatusPLTable].ObjectTypeCode = 9606
		and [OfficeAppsDeploymentStatusPLTable].AttributeValue = [Mailbox].[OfficeAppsDeploymentStatus]
		and [OfficeAppsDeploymentStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OutgoingEmailDeliveryMethodPLTable] on 
		([OutgoingEmailDeliveryMethodPLTable].AttributeName = 'outgoingemaildeliverymethod'
		and [OutgoingEmailDeliveryMethodPLTable].ObjectTypeCode = 9606
		and [OutgoingEmailDeliveryMethodPLTable].AttributeValue = [Mailbox].[OutgoingEmailDeliveryMethod]
		and [OutgoingEmailDeliveryMethodPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OutgoingEmailStatusPLTable] on 
		([OutgoingEmailStatusPLTable].AttributeName = 'outgoingemailstatus'
		and [OutgoingEmailStatusPLTable].ObjectTypeCode = 9606
		and [OutgoingEmailStatusPLTable].AttributeValue = [Mailbox].[OutgoingEmailStatus]
		and [OutgoingEmailStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ProcessAndDeleteEmailsPLTable] on 
		([ProcessAndDeleteEmailsPLTable].AttributeName = 'processanddeleteemails'
		and [ProcessAndDeleteEmailsPLTable].ObjectTypeCode = 9606
		and [ProcessAndDeleteEmailsPLTable].AttributeValue = [Mailbox].[ProcessAndDeleteEmails]
		and [ProcessAndDeleteEmailsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9606
		and [StateCodePLTable].AttributeValue = [Mailbox].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9606
		and [StatusCodePLTable].AttributeValue = [Mailbox].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TestEmailConfigurationScheduledPLTable] on 
		([TestEmailConfigurationScheduledPLTable].AttributeName = 'testemailconfigurationscheduled'
		and [TestEmailConfigurationScheduledPLTable].ObjectTypeCode = 9606
		and [TestEmailConfigurationScheduledPLTable].AttributeValue = [Mailbox].[TestEmailConfigurationScheduled]
		and [TestEmailConfigurationScheduledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9606) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[Mailbox].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9606
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
		[Mailbox].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 9606)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Mailbox].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Mailbox].[MailboxId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9606
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredMailbox] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredMailbox] TO [CRMReaderRole]
    AS [dbo];

