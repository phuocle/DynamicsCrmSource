

--
-- report view for incident
--
create view dbo.[FilteredIncident] (
    [accountid],
    [accountiddsc],
    [accountidname],
    [accountidyominame],
    [activitiescomplete],
    [activitiescompletename],
    [actualserviceunits],
    [billedserviceunits],
    [blockedprofile],
    [blockedprofilename],
    [caseorigincode],
    [caseorigincodename],
    [casetypecode],
    [casetypecodename],
    [checkemail],
    [checkemailname],
    [contactid],
    [contactiddsc],
    [contactidname],
    [contactidyominame],
    [contractdetailid],
    [contractdetailiddsc],
    [contractdetailidname],
    [contractid],
    [contractiddsc],
    [contractidname],
    [contractservicelevelcode],
    [contractservicelevelcodename],
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
    [customercontacted],
    [customerid],
    [customeriddsc],
    [customeridname],
    [customeridtype],
    [customeridyominame],
    [customersatisfactioncode],
    [customersatisfactioncodename],
    [decremententitlementterm],
    [decremententitlementtermname],
    [description],
    [entitlementid],
    [entitlementidname],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [escalatedon],
    [escalatedonutc],
    [exchangerate],
    [existingcase],
    [firstresponsebykpiid],
    [firstresponsebykpiidname],
    [firstresponsesent],
    [firstresponsesentname],
    [firstresponseslastatus],
    [firstresponseslastatusname],
    [followupby],
    [followupbyutc],
    [followuptaskcreated],
    [followuptaskcreatedname],
    [importsequencenumber],
    [incidentid],
    [incidentstagecode],
    [incidentstagecodename],
    [influencescore],
    [isdecrementing],
    [isdecrementingname],
    [isescalated],
    [isescalatedname],
    [kbarticleid],
    [kbarticleiddsc],
    [kbarticleidname],
    [lastonholdtime],
    [lastonholdtimeutc],
    [masterid],
    [masteridname],
    [merged],
    [mergedname],
    [messagetypecode],
    [messagetypecodename],
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
    [numberofchildincidents],
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
    [parentcaseid],
    [parentcaseidname],
    [primarycontactid],
    [primarycontactidname],
    [primarycontactidyominame],
    [prioritycode],
    [prioritycodename],
    [processid],
    [productid],
    [productiddsc],
    [productidname],
    [productserialnumber],
    [resolveby],
    [resolvebyutc],
    [resolvebykpiid],
    [resolvebykpiidname],
    [resolvebyslastatus],
    [resolvebyslastatusname],
    [responseby],
    [responsebyutc],
    [responsiblecontactid],
    [responsiblecontactiddsc],
    [responsiblecontactidname],
    [responsiblecontactidyominame],
    [routecase],
    [sentimentvalue],
    [servicestage],
    [servicestagename],
    [severitycode],
    [severitycodename],
    [slaid],
    [slainvokedid],
    [slainvokedidname],
    [slaname],
    [socialprofileid],
    [socialprofileidname],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [subjectid],
    [subjectiddsc],
    [subjectidname],
    [ticketnumber],
    [timezoneruleversionnumber],
    [title],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [Incident].[AccountId],
    --[Incident].[AccountIdDsc]
    0,
    [Incident].[AccountIdName],
    [Incident].[AccountIdYomiName],
    [Incident].[ActivitiesComplete],
    ActivitiesCompletePLTable.Value,
    [Incident].[ActualServiceUnits],
    [Incident].[BilledServiceUnits],
    [Incident].[BlockedProfile],
    BlockedProfilePLTable.Value,
    [Incident].[CaseOriginCode],
    CaseOriginCodePLTable.Value,
    [Incident].[CaseTypeCode],
    CaseTypeCodePLTable.Value,
    [Incident].[CheckEmail],
    CheckEmailPLTable.Value,
    [Incident].[ContactId],
    --[Incident].[ContactIdDsc]
    0,
    [Incident].[ContactIdName],
    [Incident].[ContactIdYomiName],
    [Incident].[ContractDetailId],
    --[Incident].[ContractDetailIdDsc]
    0,
    [Incident].[ContractDetailIdName],
    [Incident].[ContractId],
    --[Incident].[ContractIdDsc]
    0,
    [Incident].[ContractIdName],
    [Incident].[ContractServiceLevelCode],
    ContractServiceLevelCodePLTable.Value,
    [Incident].[CreatedBy],
    --[Incident].[CreatedByDsc]
    0,
    [Incident].[CreatedByExternalParty],
    [Incident].[CreatedByExternalPartyName],
    [Incident].[CreatedByExternalPartyYomiName],
    [Incident].[CreatedByName],
    [Incident].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Incident].[CreatedOn],
			us.TimeZoneCode),
        [Incident].[CreatedOn],
    [Incident].[CreatedOnBehalfBy],
    --[Incident].[CreatedOnBehalfByDsc]
    0,
    [Incident].[CreatedOnBehalfByName],
    [Incident].[CreatedOnBehalfByYomiName],
    [Incident].[CustomerContacted],
    [Incident].[CustomerId],
    --[Incident].[CustomerIdDsc]
    0,
    [Incident].[CustomerIdName],
    [Incident].[CustomerIdType],
    [Incident].[CustomerIdYomiName],
    [Incident].[CustomerSatisfactionCode],
    CustomerSatisfactionCodePLTable.Value,
    [Incident].[DecrementEntitlementTerm],
    DecrementEntitlementTermPLTable.Value,
    [Incident].[Description],
    [Incident].[EntitlementId],
    [Incident].[EntitlementIdName],
    cast([Incident].[EntityImage] as varbinary(max)),
    [Incident].[EntityImageId],
    [Incident].[EntityImage_Timestamp],
    [Incident].[EntityImage_URL],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Incident].[EscalatedOn],
			us.TimeZoneCode),
        [Incident].[EscalatedOn],
    [Incident].[ExchangeRate],
    [Incident].[ExistingCase],
    [Incident].[FirstResponseByKPIId],
    [Incident].[FirstResponseByKPIIdName],
    [Incident].[FirstResponseSent],
    FirstResponseSentPLTable.Value,
    [Incident].[FirstResponseSLAStatus],
    FirstResponseSLAStatusPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Incident].[FollowupBy],
			us.TimeZoneCode),
        [Incident].[FollowupBy],
    [Incident].[FollowUpTaskCreated],
    FollowUpTaskCreatedPLTable.Value,
    [Incident].[ImportSequenceNumber],
    [Incident].[IncidentId],
    [Incident].[IncidentStageCode],
    IncidentStageCodePLTable.Value,
    [Incident].[InfluenceScore],
    [Incident].[IsDecrementing],
    IsDecrementingPLTable.Value,
    [Incident].[IsEscalated],
    IsEscalatedPLTable.Value,
    [Incident].[KbArticleId],
    --[Incident].[KbArticleIdDsc]
    0,
    [Incident].[KbArticleIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Incident].[LastOnHoldTime],
			us.TimeZoneCode),
        [Incident].[LastOnHoldTime],
    [Incident].[MasterId],
    [Incident].[MasterIdName],
    [Incident].[Merged],
    MergedPLTable.Value,
    [Incident].[MessageTypeCode],
    MessageTypeCodePLTable.Value,
    [Incident].[ModifiedBy],
    --[Incident].[ModifiedByDsc]
    0,
    [Incident].[ModifiedByExternalParty],
    [Incident].[ModifiedByExternalPartyName],
    [Incident].[ModifiedByExternalPartyYomiName],
    [Incident].[ModifiedByName],
    [Incident].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Incident].[ModifiedOn],
			us.TimeZoneCode),
        [Incident].[ModifiedOn],
    [Incident].[ModifiedOnBehalfBy],
    --[Incident].[ModifiedOnBehalfByDsc]
    0,
    [Incident].[ModifiedOnBehalfByName],
    [Incident].[ModifiedOnBehalfByYomiName],
    [Incident].[NumberOfChildIncidents],
    [Incident].[OnHoldTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Incident].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Incident].[OverriddenCreatedOn],
    [Incident].[OwnerId],
    --[Incident].[OwnerIdDsc]
    0,
    [Incident].[OwnerIdName],
    [Incident].[OwnerIdType],
    [Incident].[OwnerIdYomiName],
    [Incident].[OwningBusinessUnit],
    [Incident].[OwningTeam],
    [Incident].[OwningUser],
    [Incident].[ParentCaseId],
    [Incident].[ParentCaseIdName],
    [Incident].[PrimaryContactId],
    [Incident].[PrimaryContactIdName],
    [Incident].[PrimaryContactIdYomiName],
    [Incident].[PriorityCode],
    PriorityCodePLTable.Value,
    [Incident].[ProcessId],
    [Incident].[ProductId],
    --[Incident].[ProductIdDsc]
    0,
    [Incident].[ProductIdName],
    [Incident].[ProductSerialNumber],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Incident].[ResolveBy],
			us.TimeZoneCode),
        [Incident].[ResolveBy],
    [Incident].[ResolveByKPIId],
    [Incident].[ResolveByKPIIdName],
    [Incident].[ResolveBySLAStatus],
    ResolveBySLAStatusPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Incident].[ResponseBy],
			us.TimeZoneCode),
        [Incident].[ResponseBy],
    [Incident].[ResponsibleContactId],
    --[Incident].[ResponsibleContactIdDsc]
    0,
    [Incident].[ResponsibleContactIdName],
    [Incident].[ResponsibleContactIdYomiName],
    [Incident].[RouteCase],
    [Incident].[SentimentValue],
    [Incident].[ServiceStage],
    ServiceStagePLTable.Value,
    [Incident].[SeverityCode],
    SeverityCodePLTable.Value,
    [Incident].[SLAId],
    [Incident].[SLAInvokedId],
    [Incident].[SLAInvokedIdName],
    [Incident].[SLAName],
    [Incident].[SocialProfileId],
    [Incident].[SocialProfileIdName],
    [Incident].[StageId],
    [Incident].[StateCode],
    StateCodePLTable.Value,
    [Incident].[StatusCode],
    StatusCodePLTable.Value,
    [Incident].[SubjectId],
    --[Incident].[SubjectIdDsc]
    0,
    [Incident].[SubjectIdName],
    [Incident].[TicketNumber],
    [Incident].[TimeZoneRuleVersionNumber],
    [Incident].[Title],
    [Incident].[TransactionCurrencyId],
    [Incident].[TransactionCurrencyIdName],
    [Incident].[TraversedPath],
    [Incident].[UTCConversionTimeZoneCode],
    [Incident].[VersionNumber]
from Incident
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivitiesCompletePLTable] on 
		([ActivitiesCompletePLTable].AttributeName = 'activitiescomplete'
		and [ActivitiesCompletePLTable].ObjectTypeCode = 112
		and [ActivitiesCompletePLTable].AttributeValue = [Incident].[ActivitiesComplete]
		and [ActivitiesCompletePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [BlockedProfilePLTable] on 
		([BlockedProfilePLTable].AttributeName = 'blockedprofile'
		and [BlockedProfilePLTable].ObjectTypeCode = 112
		and [BlockedProfilePLTable].AttributeValue = [Incident].[BlockedProfile]
		and [BlockedProfilePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CaseOriginCodePLTable] on 
		([CaseOriginCodePLTable].AttributeName = 'caseorigincode'
		and [CaseOriginCodePLTable].ObjectTypeCode = 112
		and [CaseOriginCodePLTable].AttributeValue = [Incident].[CaseOriginCode]
		and [CaseOriginCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CaseTypeCodePLTable] on 
		([CaseTypeCodePLTable].AttributeName = 'casetypecode'
		and [CaseTypeCodePLTable].ObjectTypeCode = 112
		and [CaseTypeCodePLTable].AttributeValue = [Incident].[CaseTypeCode]
		and [CaseTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CheckEmailPLTable] on 
		([CheckEmailPLTable].AttributeName = 'checkemail'
		and [CheckEmailPLTable].ObjectTypeCode = 112
		and [CheckEmailPLTable].AttributeValue = [Incident].[CheckEmail]
		and [CheckEmailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ContractServiceLevelCodePLTable] on 
		([ContractServiceLevelCodePLTable].AttributeName = 'contractservicelevelcode'
		and [ContractServiceLevelCodePLTable].ObjectTypeCode = 112
		and [ContractServiceLevelCodePLTable].AttributeValue = [Incident].[ContractServiceLevelCode]
		and [ContractServiceLevelCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CustomerSatisfactionCodePLTable] on 
		([CustomerSatisfactionCodePLTable].AttributeName = 'customersatisfactioncode'
		and [CustomerSatisfactionCodePLTable].ObjectTypeCode = 112
		and [CustomerSatisfactionCodePLTable].AttributeValue = [Incident].[CustomerSatisfactionCode]
		and [CustomerSatisfactionCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DecrementEntitlementTermPLTable] on 
		([DecrementEntitlementTermPLTable].AttributeName = 'decremententitlementterm'
		and [DecrementEntitlementTermPLTable].ObjectTypeCode = 112
		and [DecrementEntitlementTermPLTable].AttributeValue = [Incident].[DecrementEntitlementTerm]
		and [DecrementEntitlementTermPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FirstResponseSentPLTable] on 
		([FirstResponseSentPLTable].AttributeName = 'firstresponsesent'
		and [FirstResponseSentPLTable].ObjectTypeCode = 112
		and [FirstResponseSentPLTable].AttributeValue = [Incident].[FirstResponseSent]
		and [FirstResponseSentPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FirstResponseSLAStatusPLTable] on 
		([FirstResponseSLAStatusPLTable].AttributeName = 'firstresponseslastatus'
		and [FirstResponseSLAStatusPLTable].ObjectTypeCode = 112
		and [FirstResponseSLAStatusPLTable].AttributeValue = [Incident].[FirstResponseSLAStatus]
		and [FirstResponseSLAStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FollowUpTaskCreatedPLTable] on 
		([FollowUpTaskCreatedPLTable].AttributeName = 'followuptaskcreated'
		and [FollowUpTaskCreatedPLTable].ObjectTypeCode = 112
		and [FollowUpTaskCreatedPLTable].AttributeValue = [Incident].[FollowUpTaskCreated]
		and [FollowUpTaskCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IncidentStageCodePLTable] on 
		([IncidentStageCodePLTable].AttributeName = 'incidentstagecode'
		and [IncidentStageCodePLTable].ObjectTypeCode = 112
		and [IncidentStageCodePLTable].AttributeValue = [Incident].[IncidentStageCode]
		and [IncidentStageCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsDecrementingPLTable] on 
		([IsDecrementingPLTable].AttributeName = 'isdecrementing'
		and [IsDecrementingPLTable].ObjectTypeCode = 112
		and [IsDecrementingPLTable].AttributeValue = [Incident].[IsDecrementing]
		and [IsDecrementingPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsEscalatedPLTable] on 
		([IsEscalatedPLTable].AttributeName = 'isescalated'
		and [IsEscalatedPLTable].ObjectTypeCode = 112
		and [IsEscalatedPLTable].AttributeValue = [Incident].[IsEscalated]
		and [IsEscalatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [MergedPLTable] on 
		([MergedPLTable].AttributeName = 'merged'
		and [MergedPLTable].ObjectTypeCode = 112
		and [MergedPLTable].AttributeValue = [Incident].[Merged]
		and [MergedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [MessageTypeCodePLTable] on 
		([MessageTypeCodePLTable].AttributeName = 'messagetypecode'
		and [MessageTypeCodePLTable].ObjectTypeCode = 112
		and [MessageTypeCodePLTable].AttributeValue = [Incident].[MessageTypeCode]
		and [MessageTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 112
		and [PriorityCodePLTable].AttributeValue = [Incident].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ResolveBySLAStatusPLTable] on 
		([ResolveBySLAStatusPLTable].AttributeName = 'resolvebyslastatus'
		and [ResolveBySLAStatusPLTable].ObjectTypeCode = 112
		and [ResolveBySLAStatusPLTable].AttributeValue = [Incident].[ResolveBySLAStatus]
		and [ResolveBySLAStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ServiceStagePLTable] on 
		([ServiceStagePLTable].AttributeName = 'servicestage'
		and [ServiceStagePLTable].ObjectTypeCode = 112
		and [ServiceStagePLTable].AttributeValue = [Incident].[ServiceStage]
		and [ServiceStagePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SeverityCodePLTable] on 
		([SeverityCodePLTable].AttributeName = 'severitycode'
		and [SeverityCodePLTable].ObjectTypeCode = 112
		and [SeverityCodePLTable].AttributeValue = [Incident].[SeverityCode]
		and [SeverityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 112
		and [StateCodePLTable].AttributeValue = [Incident].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 112
		and [StatusCodePLTable].AttributeValue = [Incident].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(112) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[Incident].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 112
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
		[Incident].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 112)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Incident].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Incident].[IncidentId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 112
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredIncident] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredIncident] TO [CRMReaderRole]
    AS [dbo];

