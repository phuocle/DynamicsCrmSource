

--
-- report view for emailserverprofile
--
create view dbo.[FilteredEmailServerProfile] (
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [emailserverprofileid],
    [encodingcodepage],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangeversion],
    [exchangeversionname],
    [incomingauthenticationprotocol],
    [incomingauthenticationprotocolname],
    [incomingcredentialretrieval],
    [incomingcredentialretrievalname],
    [incomingpartnerapplication],
    [incomingpartnerapplicationname],
    [incomingportnumber],
    [incomingserverlocation],
    [incominguseimpersonation],
    [incominguseimpersonationname],
    [incomingusername],
    [incomingusessl],
    [incomingusesslname],
    [isincomingpasswordset],
    [isoutgoingpasswordset],
    [maxconcurrentconnections],
    [minpollingintervalinminutes],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [moveundeliveredemails],
    [moveundeliveredemailsname],
    [name],
    [organizationid],
    [organizationidname],
    [outgoingauthenticationprotocol],
    [outgoingauthenticationprotocolname],
    [outgoingautograntdelegateaccess],
    [outgoingautograntdelegateaccessname],
    [outgoingcredentialretrieval],
    [outgoingcredentialretrievalname],
    [outgoingpartnerapplication],
    [outgoingpartnerapplicationname],
    [outgoingportnumber],
    [outgoingserverlocation],
    [outgoinguseimpersonation],
    [outgoinguseimpersonationname],
    [outgoingusername],
    [outgoingusessl],
    [outgoingusesslname],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningbusinessunitname],
    [owningteam],
    [owninguser],
    [processemailsreceivedafter],
    [processemailsreceivedafterutc],
    [servertype],
    [servertypename],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [useautodiscover],
    [useautodiscovername],
    [usesamesettingsforoutgoingconnections],
    [usesamesettingsforoutgoingconnectionsname],
    [utcconversiontimezonecode]
) with view_metadata as
select
    [EmailServerProfile].[CreatedBy],
    [EmailServerProfile].[CreatedByName],
    [EmailServerProfile].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EmailServerProfile].[CreatedOn],
			us.TimeZoneCode),
        [EmailServerProfile].[CreatedOn],
    [EmailServerProfile].[CreatedOnBehalfBy],
    [EmailServerProfile].[CreatedOnBehalfByName],
    [EmailServerProfile].[CreatedOnBehalfByYomiName],
    [EmailServerProfile].[Description],
    [EmailServerProfile].[EmailServerProfileId],
    [EmailServerProfile].[EncodingCodePage],
    cast([EmailServerProfile].[EntityImage] as varbinary(max)),
    [EmailServerProfile].[EntityImageId],
    [EmailServerProfile].[EntityImage_Timestamp],
    [EmailServerProfile].[EntityImage_URL],
    [EmailServerProfile].[ExchangeVersion],
    ExchangeVersionPLTable.Value,
    [EmailServerProfile].[IncomingAuthenticationProtocol],
    IncomingAuthenticationProtocolPLTable.Value,
    [EmailServerProfile].[IncomingCredentialRetrieval],
    IncomingCredentialRetrievalPLTable.Value,
    [EmailServerProfile].[IncomingPartnerApplication],
    [EmailServerProfile].[IncomingPartnerApplicationName],
    [EmailServerProfile].[IncomingPortNumber],
    [EmailServerProfile].[IncomingServerLocation],
    [EmailServerProfile].[IncomingUseImpersonation],
    IncomingUseImpersonationPLTable.Value,
    [EmailServerProfile].[IncomingUserName],
    [EmailServerProfile].[IncomingUseSSL],
    IncomingUseSSLPLTable.Value,
    [EmailServerProfile].[IsIncomingPasswordSet],
    [EmailServerProfile].[IsOutgoingPasswordSet],
    [EmailServerProfile].[MaxConcurrentConnections],
    [EmailServerProfile].[MinPollingIntervalInMinutes],
    [EmailServerProfile].[ModifiedBy],
    [EmailServerProfile].[ModifiedByName],
    [EmailServerProfile].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EmailServerProfile].[ModifiedOn],
			us.TimeZoneCode),
        [EmailServerProfile].[ModifiedOn],
    [EmailServerProfile].[ModifiedOnBehalfBy],
    [EmailServerProfile].[ModifiedOnBehalfByName],
    [EmailServerProfile].[ModifiedOnBehalfByYomiName],
    [EmailServerProfile].[MoveUndeliveredEmails],
    MoveUndeliveredEmailsPLTable.Value,
    [EmailServerProfile].[Name],
    [EmailServerProfile].[OrganizationId],
    [EmailServerProfile].[OrganizationIdName],
    [EmailServerProfile].[OutgoingAuthenticationProtocol],
    OutgoingAuthenticationProtocolPLTable.Value,
    [EmailServerProfile].[OutgoingAutoGrantDelegateAccess],
    OutgoingAutoGrantDelegateAccessPLTable.Value,
    [EmailServerProfile].[OutgoingCredentialRetrieval],
    OutgoingCredentialRetrievalPLTable.Value,
    [EmailServerProfile].[OutgoingPartnerApplication],
    [EmailServerProfile].[OutgoingPartnerApplicationName],
    [EmailServerProfile].[OutgoingPortNumber],
    [EmailServerProfile].[OutgoingServerLocation],
    [EmailServerProfile].[OutgoingUseImpersonation],
    OutgoingUseImpersonationPLTable.Value,
    [EmailServerProfile].[OutgoingUsername],
    [EmailServerProfile].[OutgoingUseSSL],
    OutgoingUseSSLPLTable.Value,
    [EmailServerProfile].[OwnerId],
    [EmailServerProfile].[OwnerIdName],
    [EmailServerProfile].[OwnerIdType],
    [EmailServerProfile].[OwnerIdYomiName],
    [EmailServerProfile].[OwningBusinessUnit],
    [EmailServerProfile].[OwningBusinessUnitName],
    [EmailServerProfile].[OwningTeam],
    [EmailServerProfile].[OwningUser],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EmailServerProfile].[ProcessEmailsReceivedAfter],
			us.TimeZoneCode),
        [EmailServerProfile].[ProcessEmailsReceivedAfter],
    [EmailServerProfile].[ServerType],
    ServerTypePLTable.Value,
    [EmailServerProfile].[StateCode],
    StateCodePLTable.Value,
    [EmailServerProfile].[StatusCode],
    StatusCodePLTable.Value,
    [EmailServerProfile].[TimeZoneRuleVersionNumber],
    [EmailServerProfile].[UseAutoDiscover],
    UseAutoDiscoverPLTable.Value,
    [EmailServerProfile].[UseSameSettingsForOutgoingConnections],
    UseSameSettingsForOutgoingConnectionsPLTable.Value,
    [EmailServerProfile].[UTCConversionTimeZoneCode]
from EmailServerProfile
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ExchangeVersionPLTable] on 
		([ExchangeVersionPLTable].AttributeName = 'exchangeversion'
		and [ExchangeVersionPLTable].ObjectTypeCode = 9605
		and [ExchangeVersionPLTable].AttributeValue = [EmailServerProfile].[ExchangeVersion]
		and [ExchangeVersionPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IncomingAuthenticationProtocolPLTable] on 
		([IncomingAuthenticationProtocolPLTable].AttributeName = 'incomingauthenticationprotocol'
		and [IncomingAuthenticationProtocolPLTable].ObjectTypeCode = 9605
		and [IncomingAuthenticationProtocolPLTable].AttributeValue = [EmailServerProfile].[IncomingAuthenticationProtocol]
		and [IncomingAuthenticationProtocolPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IncomingCredentialRetrievalPLTable] on 
		([IncomingCredentialRetrievalPLTable].AttributeName = 'incomingcredentialretrieval'
		and [IncomingCredentialRetrievalPLTable].ObjectTypeCode = 9605
		and [IncomingCredentialRetrievalPLTable].AttributeValue = [EmailServerProfile].[IncomingCredentialRetrieval]
		and [IncomingCredentialRetrievalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IncomingUseImpersonationPLTable] on 
		([IncomingUseImpersonationPLTable].AttributeName = 'incominguseimpersonation'
		and [IncomingUseImpersonationPLTable].ObjectTypeCode = 9605
		and [IncomingUseImpersonationPLTable].AttributeValue = [EmailServerProfile].[IncomingUseImpersonation]
		and [IncomingUseImpersonationPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IncomingUseSSLPLTable] on 
		([IncomingUseSSLPLTable].AttributeName = 'incomingusessl'
		and [IncomingUseSSLPLTable].ObjectTypeCode = 9605
		and [IncomingUseSSLPLTable].AttributeValue = [EmailServerProfile].[IncomingUseSSL]
		and [IncomingUseSSLPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [MoveUndeliveredEmailsPLTable] on 
		([MoveUndeliveredEmailsPLTable].AttributeName = 'moveundeliveredemails'
		and [MoveUndeliveredEmailsPLTable].ObjectTypeCode = 9605
		and [MoveUndeliveredEmailsPLTable].AttributeValue = [EmailServerProfile].[MoveUndeliveredEmails]
		and [MoveUndeliveredEmailsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OutgoingAuthenticationProtocolPLTable] on 
		([OutgoingAuthenticationProtocolPLTable].AttributeName = 'outgoingauthenticationprotocol'
		and [OutgoingAuthenticationProtocolPLTable].ObjectTypeCode = 9605
		and [OutgoingAuthenticationProtocolPLTable].AttributeValue = [EmailServerProfile].[OutgoingAuthenticationProtocol]
		and [OutgoingAuthenticationProtocolPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OutgoingAutoGrantDelegateAccessPLTable] on 
		([OutgoingAutoGrantDelegateAccessPLTable].AttributeName = 'outgoingautograntdelegateaccess'
		and [OutgoingAutoGrantDelegateAccessPLTable].ObjectTypeCode = 9605
		and [OutgoingAutoGrantDelegateAccessPLTable].AttributeValue = [EmailServerProfile].[OutgoingAutoGrantDelegateAccess]
		and [OutgoingAutoGrantDelegateAccessPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OutgoingCredentialRetrievalPLTable] on 
		([OutgoingCredentialRetrievalPLTable].AttributeName = 'outgoingcredentialretrieval'
		and [OutgoingCredentialRetrievalPLTable].ObjectTypeCode = 9605
		and [OutgoingCredentialRetrievalPLTable].AttributeValue = [EmailServerProfile].[OutgoingCredentialRetrieval]
		and [OutgoingCredentialRetrievalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OutgoingUseImpersonationPLTable] on 
		([OutgoingUseImpersonationPLTable].AttributeName = 'outgoinguseimpersonation'
		and [OutgoingUseImpersonationPLTable].ObjectTypeCode = 9605
		and [OutgoingUseImpersonationPLTable].AttributeValue = [EmailServerProfile].[OutgoingUseImpersonation]
		and [OutgoingUseImpersonationPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OutgoingUseSSLPLTable] on 
		([OutgoingUseSSLPLTable].AttributeName = 'outgoingusessl'
		and [OutgoingUseSSLPLTable].ObjectTypeCode = 9605
		and [OutgoingUseSSLPLTable].AttributeValue = [EmailServerProfile].[OutgoingUseSSL]
		and [OutgoingUseSSLPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ServerTypePLTable] on 
		([ServerTypePLTable].AttributeName = 'servertype'
		and [ServerTypePLTable].ObjectTypeCode = 9605
		and [ServerTypePLTable].AttributeValue = [EmailServerProfile].[ServerType]
		and [ServerTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9605
		and [StateCodePLTable].AttributeValue = [EmailServerProfile].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9605
		and [StatusCodePLTable].AttributeValue = [EmailServerProfile].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [UseAutoDiscoverPLTable] on 
		([UseAutoDiscoverPLTable].AttributeName = 'useautodiscover'
		and [UseAutoDiscoverPLTable].ObjectTypeCode = 9605
		and [UseAutoDiscoverPLTable].AttributeValue = [EmailServerProfile].[UseAutoDiscover]
		and [UseAutoDiscoverPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [UseSameSettingsForOutgoingConnectionsPLTable] on 
		([UseSameSettingsForOutgoingConnectionsPLTable].AttributeName = 'usesamesettingsforoutgoingconnections'
		and [UseSameSettingsForOutgoingConnectionsPLTable].ObjectTypeCode = 9605
		and [UseSameSettingsForOutgoingConnectionsPLTable].AttributeValue = [EmailServerProfile].[UseSameSettingsForOutgoingConnections]
		and [UseSameSettingsForOutgoingConnectionsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9605) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[EmailServerProfile].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9605
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
		[EmailServerProfile].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9605)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[EmailServerProfile].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[EmailServerProfile].[EmailServerProfileId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 9605 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEmailServerProfile] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEmailServerProfile] TO [CRMReaderRole]
    AS [dbo];

