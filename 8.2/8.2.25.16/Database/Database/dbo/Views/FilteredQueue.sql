

--
-- report view for queue
--
create view dbo.[FilteredQueue] (
    [allowemailcredentials],
    [allowemailcredentialsname],
    [businessunitid],
    [businessunitiddsc],
    [businessunitidname],
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
    [defaultmailbox],
    [defaultmailboxname],
    [description],
    [emailaddress],
    [emailpassword],
    [emailrouteraccessapproval],
    [emailrouteraccessapprovalname],
    [emailusername],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [ignoreunsolicitedemail],
    [ignoreunsolicitedemailname],
    [importsequencenumber],
    [incomingemaildeliverymethod],
    [incomingemaildeliverymethodname],
    [incomingemailfilteringmethod],
    [incomingemailfilteringmethodname],
    [isemailaddressapprovedbyo365admin],
    [isfaxqueue],
    [isfaxqueuename],
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
    [name],
    [numberofitems],
    [numberofmembers],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [outgoingemaildeliverymethod],
    [outgoingemaildeliverymethodname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [primaryuserid],
    [primaryuseriddsc],
    [primaryuseridname],
    [primaryuseridyominame],
    [queueid],
    [queuesemantics],
    [queuetypecode],
    [queuetypecodename],
    [queueviewtype],
    [queueviewtypename],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [versionnumber]
) with view_metadata as
select
    [Queue].[AllowEmailCredentials],
    AllowEmailCredentialsPLTable.Value,
    [Queue].[BusinessUnitId],
    --[Queue].[BusinessUnitIdDsc]
    0,
    [Queue].[BusinessUnitIdName],
    [Queue].[CreatedBy],
    --[Queue].[CreatedByDsc]
    0,
    [Queue].[CreatedByName],
    [Queue].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Queue].[CreatedOn],
			us.TimeZoneCode),
        [Queue].[CreatedOn],
    [Queue].[CreatedOnBehalfBy],
    --[Queue].[CreatedOnBehalfByDsc]
    0,
    [Queue].[CreatedOnBehalfByName],
    [Queue].[CreatedOnBehalfByYomiName],
    [Queue].[DefaultMailbox],
    [Queue].[DefaultMailboxName],
    [Queue].[Description],
    [Queue].[EMailAddress],
    [Queue].[EmailPassword],
    [Queue].[EmailRouterAccessApproval],
    EmailRouterAccessApprovalPLTable.Value,
    [Queue].[EmailUsername],
    cast([Queue].[EntityImage] as varbinary(max)),
    [Queue].[EntityImageId],
    [Queue].[EntityImage_Timestamp],
    [Queue].[EntityImage_URL],
    [Queue].[ExchangeRate],
    [Queue].[IgnoreUnsolicitedEmail],
    IgnoreUnsolicitedEmailPLTable.Value,
    [Queue].[ImportSequenceNumber],
    [Queue].[IncomingEmailDeliveryMethod],
    IncomingEmailDeliveryMethodPLTable.Value,
    [Queue].[IncomingEmailFilteringMethod],
    IncomingEmailFilteringMethodPLTable.Value,
    [Queue].[IsEmailAddressApprovedByO365Admin],
    [Queue].[IsFaxQueue],
    IsFaxQueuePLTable.Value,
    [Queue].[ModifiedBy],
    --[Queue].[ModifiedByDsc]
    0,
    [Queue].[ModifiedByName],
    [Queue].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Queue].[ModifiedOn],
			us.TimeZoneCode),
        [Queue].[ModifiedOn],
    [Queue].[ModifiedOnBehalfBy],
    --[Queue].[ModifiedOnBehalfByDsc]
    0,
    [Queue].[ModifiedOnBehalfByName],
    [Queue].[ModifiedOnBehalfByYomiName],
    [Queue].[Name],
    [Queue].[NumberOfItems],
    [Queue].[NumberOfMembers],
    [Queue].[OrganizationId],
    --[Queue].[OrganizationIdDsc]
    0,
    [Queue].[OrganizationIdName],
    [Queue].[OutgoingEmailDeliveryMethod],
    OutgoingEmailDeliveryMethodPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Queue].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Queue].[OverriddenCreatedOn],
    [Queue].[OwnerId],
    [Queue].[OwnerIdName],
    [Queue].[OwnerIdType],
    [Queue].[OwnerIdYomiName],
    [Queue].[OwningBusinessUnit],
    [Queue].[OwningTeam],
    [Queue].[OwningUser],
    [Queue].[PrimaryUserId],
    --[Queue].[PrimaryUserIdDsc]
    0,
    [Queue].[PrimaryUserIdName],
    [Queue].[PrimaryUserIdYomiName],
    [Queue].[QueueId],
    [Queue].[QueueSemantics],
    [Queue].[QueueTypeCode],
    QueueTypeCodePLTable.Value,
    [Queue].[QueueViewType],
    QueueViewTypePLTable.Value,
    [Queue].[StateCode],
    StateCodePLTable.Value,
    [Queue].[StatusCode],
    StatusCodePLTable.Value,
    [Queue].[TransactionCurrencyId],
    [Queue].[TransactionCurrencyIdName],
    [Queue].[VersionNumber]
from Queue
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AllowEmailCredentialsPLTable] on 
		([AllowEmailCredentialsPLTable].AttributeName = 'allowemailcredentials'
		and [AllowEmailCredentialsPLTable].ObjectTypeCode = 2020
		and [AllowEmailCredentialsPLTable].AttributeValue = [Queue].[AllowEmailCredentials]
		and [AllowEmailCredentialsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EmailRouterAccessApprovalPLTable] on 
		([EmailRouterAccessApprovalPLTable].AttributeName = 'emailrouteraccessapproval'
		and [EmailRouterAccessApprovalPLTable].ObjectTypeCode = 2020
		and [EmailRouterAccessApprovalPLTable].AttributeValue = [Queue].[EmailRouterAccessApproval]
		and [EmailRouterAccessApprovalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IgnoreUnsolicitedEmailPLTable] on 
		([IgnoreUnsolicitedEmailPLTable].AttributeName = 'ignoreunsolicitedemail'
		and [IgnoreUnsolicitedEmailPLTable].ObjectTypeCode = 2020
		and [IgnoreUnsolicitedEmailPLTable].AttributeValue = [Queue].[IgnoreUnsolicitedEmail]
		and [IgnoreUnsolicitedEmailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IncomingEmailDeliveryMethodPLTable] on 
		([IncomingEmailDeliveryMethodPLTable].AttributeName = 'incomingemaildeliverymethod'
		and [IncomingEmailDeliveryMethodPLTable].ObjectTypeCode = 2020
		and [IncomingEmailDeliveryMethodPLTable].AttributeValue = [Queue].[IncomingEmailDeliveryMethod]
		and [IncomingEmailDeliveryMethodPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IncomingEmailFilteringMethodPLTable] on 
		([IncomingEmailFilteringMethodPLTable].AttributeName = 'incomingemailfilteringmethod'
		and [IncomingEmailFilteringMethodPLTable].ObjectTypeCode = 2020
		and [IncomingEmailFilteringMethodPLTable].AttributeValue = [Queue].[IncomingEmailFilteringMethod]
		and [IncomingEmailFilteringMethodPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsFaxQueuePLTable] on 
		([IsFaxQueuePLTable].AttributeName = 'isfaxqueue'
		and [IsFaxQueuePLTable].ObjectTypeCode = 2020
		and [IsFaxQueuePLTable].AttributeValue = [Queue].[IsFaxQueue]
		and [IsFaxQueuePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OutgoingEmailDeliveryMethodPLTable] on 
		([OutgoingEmailDeliveryMethodPLTable].AttributeName = 'outgoingemaildeliverymethod'
		and [OutgoingEmailDeliveryMethodPLTable].ObjectTypeCode = 2020
		and [OutgoingEmailDeliveryMethodPLTable].AttributeValue = [Queue].[OutgoingEmailDeliveryMethod]
		and [OutgoingEmailDeliveryMethodPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [QueueTypeCodePLTable] on 
		([QueueTypeCodePLTable].AttributeName = 'queuetypecode'
		and [QueueTypeCodePLTable].ObjectTypeCode = 2020
		and [QueueTypeCodePLTable].AttributeValue = [Queue].[QueueTypeCode]
		and [QueueTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [QueueViewTypePLTable] on 
		([QueueViewTypePLTable].AttributeName = 'queueviewtype'
		and [QueueViewTypePLTable].ObjectTypeCode = 2020
		and [QueueViewTypePLTable].AttributeValue = [Queue].[QueueViewType]
		and [QueueViewTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 2020
		and [StateCodePLTable].AttributeValue = [Queue].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 2020
		and [StatusCodePLTable].AttributeValue = [Queue].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(2020) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[Queue].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 2020
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
		[Queue].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 2020)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Queue].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Queue].[QueueId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 2020
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredQueue] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredQueue] TO [CRMReaderRole]
    AS [dbo];

