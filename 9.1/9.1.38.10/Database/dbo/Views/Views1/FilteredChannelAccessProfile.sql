

--
-- report view for channelaccessprofile
--
create view dbo.[FilteredChannelAccessProfile] 
(
    [candeletename],
    [channelaccessprofileid],
    [channelaccessprofileidunique],
    [componentstate],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [emailaccess],
    [emailaccessname],
    [exchangerate],
    [facebookaccess],
    [facebookaccessname],
    [haveprivilegeschanged],
    [haveprivilegeschangedname],
    [importsequencenumber],
    [introducedversion],
    [isguestprofile],
    [ismanaged],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [phoneaccess],
    [phoneaccessname],
    [rateknowledgearticles],
    [rateknowledgearticlesname],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [submitfeedback],
    [submitfeedbackname],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [twitteraccess],
    [twitteraccessname],
    [utcconversiontimezonecode],
    [versionnumber],
    [viewarticlerating],
    [viewarticleratingname],
    [viewknowledgearticles],
    [viewknowledgearticlesname],
    [webaccess],
    [webaccessname]
) with view_metadata as
select
    IsGuestProfilePLTable.Value,
    [ChannelAccessProfile].[ChannelAccessProfileId],
    [ChannelAccessProfile].[ChannelAccessProfileIdUnique],
    [ChannelAccessProfile].[ComponentState],
    [ChannelAccessProfile].[CreatedBy],
    [ChannelAccessProfile].[CreatedByName],
    [ChannelAccessProfile].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelAccessProfile].[CreatedOn],
			us.TimeZoneCode),
        [ChannelAccessProfile].[CreatedOn],
    [ChannelAccessProfile].[CreatedOnBehalfBy],
    [ChannelAccessProfile].[CreatedOnBehalfByName],
    [ChannelAccessProfile].[CreatedOnBehalfByYomiName],
    [ChannelAccessProfile].[EmailAccess],
    EmailAccessPLTable.Value,
    [ChannelAccessProfile].[ExchangeRate],
    [ChannelAccessProfile].[FacebookAccess],
    FacebookAccessPLTable.Value,
    [ChannelAccessProfile].[HavePrivilegesChanged],
    HavePrivilegesChangedPLTable.Value,
    [ChannelAccessProfile].[ImportSequenceNumber],
    [ChannelAccessProfile].[IntroducedVersion],
    [ChannelAccessProfile].[IsGuestProfile],
    [ChannelAccessProfile].[IsManaged],
    [ChannelAccessProfile].[ModifiedBy],
    [ChannelAccessProfile].[ModifiedByName],
    [ChannelAccessProfile].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelAccessProfile].[ModifiedOn],
			us.TimeZoneCode),
        [ChannelAccessProfile].[ModifiedOn],
    [ChannelAccessProfile].[ModifiedOnBehalfBy],
    [ChannelAccessProfile].[ModifiedOnBehalfByName],
    [ChannelAccessProfile].[ModifiedOnBehalfByYomiName],
    [ChannelAccessProfile].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelAccessProfile].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ChannelAccessProfile].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelAccessProfile].[OverwriteTime],
			us.TimeZoneCode),
        [ChannelAccessProfile].[OverwriteTime],
    [ChannelAccessProfile].[OwnerId],
    [ChannelAccessProfile].[OwnerIdName],
    [ChannelAccessProfile].[OwnerIdType],
    [ChannelAccessProfile].[OwnerIdYomiName],
    [ChannelAccessProfile].[OwningBusinessUnit],
    [ChannelAccessProfile].[OwningTeam],
    [ChannelAccessProfile].[OwningUser],
    [ChannelAccessProfile].[PhoneAccess],
    PhoneAccessPLTable.Value,
    [ChannelAccessProfile].[RateKnowledgeArticles],
    RateKnowledgeArticlesPLTable.Value,
    [ChannelAccessProfile].[SolutionId],
    [ChannelAccessProfile].[StateCode],
    StateCodePLTable.Value,
    [ChannelAccessProfile].[StatusCode],
    StatusCodePLTable.Value,
    [ChannelAccessProfile].[SubmitFeedback],
    SubmitFeedbackPLTable.Value,
    [ChannelAccessProfile].[TimeZoneRuleVersionNumber],
    [ChannelAccessProfile].[TransactionCurrencyId],
    [ChannelAccessProfile].[TransactionCurrencyIdName],
    [ChannelAccessProfile].[TwitterAccess],
    TwitterAccessPLTable.Value,
    [ChannelAccessProfile].[UTCConversionTimeZoneCode],
    [ChannelAccessProfile].[VersionNumber],
    [ChannelAccessProfile].[ViewArticleRating],
    ViewArticleRatingPLTable.Value,
    [ChannelAccessProfile].[ViewKnowledgeArticles],
    ViewKnowledgeArticlesPLTable.Value,
    [ChannelAccessProfile].[WebAccess],
    WebAccessPLTable.Value
from ChannelAccessProfile
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsGuestProfilePLTable] on 
		([IsGuestProfilePLTable].AttributeName = 'isguestprofile'
		and [IsGuestProfilePLTable].ObjectTypeCode = 3005
		and [IsGuestProfilePLTable].AttributeValue = [ChannelAccessProfile].[IsGuestProfile]
		and [IsGuestProfilePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EmailAccessPLTable] on 
		([EmailAccessPLTable].AttributeName = 'emailaccess'
		and [EmailAccessPLTable].ObjectTypeCode = 3005
		and [EmailAccessPLTable].AttributeValue = [ChannelAccessProfile].[EmailAccess]
		and [EmailAccessPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FacebookAccessPLTable] on 
		([FacebookAccessPLTable].AttributeName = 'facebookaccess'
		and [FacebookAccessPLTable].ObjectTypeCode = 3005
		and [FacebookAccessPLTable].AttributeValue = [ChannelAccessProfile].[FacebookAccess]
		and [FacebookAccessPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [HavePrivilegesChangedPLTable] on 
		([HavePrivilegesChangedPLTable].AttributeName = 'haveprivilegeschanged'
		and [HavePrivilegesChangedPLTable].ObjectTypeCode = 3005
		and [HavePrivilegesChangedPLTable].AttributeValue = [ChannelAccessProfile].[HavePrivilegesChanged]
		and [HavePrivilegesChangedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PhoneAccessPLTable] on 
		([PhoneAccessPLTable].AttributeName = 'phoneaccess'
		and [PhoneAccessPLTable].ObjectTypeCode = 3005
		and [PhoneAccessPLTable].AttributeValue = [ChannelAccessProfile].[PhoneAccess]
		and [PhoneAccessPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [RateKnowledgeArticlesPLTable] on 
		([RateKnowledgeArticlesPLTable].AttributeName = 'rateknowledgearticles'
		and [RateKnowledgeArticlesPLTable].ObjectTypeCode = 3005
		and [RateKnowledgeArticlesPLTable].AttributeValue = [ChannelAccessProfile].[RateKnowledgeArticles]
		and [RateKnowledgeArticlesPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 3005
		and [StateCodePLTable].AttributeValue = [ChannelAccessProfile].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 3005
		and [StatusCodePLTable].AttributeValue = [ChannelAccessProfile].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SubmitFeedbackPLTable] on 
		([SubmitFeedbackPLTable].AttributeName = 'submitfeedback'
		and [SubmitFeedbackPLTable].ObjectTypeCode = 3005
		and [SubmitFeedbackPLTable].AttributeValue = [ChannelAccessProfile].[SubmitFeedback]
		and [SubmitFeedbackPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TwitterAccessPLTable] on 
		([TwitterAccessPLTable].AttributeName = 'twitteraccess'
		and [TwitterAccessPLTable].ObjectTypeCode = 3005
		and [TwitterAccessPLTable].AttributeValue = [ChannelAccessProfile].[TwitterAccess]
		and [TwitterAccessPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ViewArticleRatingPLTable] on 
		([ViewArticleRatingPLTable].AttributeName = 'viewarticlerating'
		and [ViewArticleRatingPLTable].ObjectTypeCode = 3005
		and [ViewArticleRatingPLTable].AttributeValue = [ChannelAccessProfile].[ViewArticleRating]
		and [ViewArticleRatingPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ViewKnowledgeArticlesPLTable] on 
		([ViewKnowledgeArticlesPLTable].AttributeName = 'viewknowledgearticles'
		and [ViewKnowledgeArticlesPLTable].ObjectTypeCode = 3005
		and [ViewKnowledgeArticlesPLTable].AttributeValue = [ChannelAccessProfile].[ViewKnowledgeArticles]
		and [ViewKnowledgeArticlesPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [WebAccessPLTable] on 
		([WebAccessPLTable].AttributeName = 'webaccess'
		and [WebAccessPLTable].ObjectTypeCode = 3005
		and [WebAccessPLTable].AttributeValue = [ChannelAccessProfile].[WebAccess]
		and [WebAccessPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(3005) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[ChannelAccessProfile].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 3005
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
		[ChannelAccessProfile].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 3005)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ChannelAccessProfile].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ChannelAccessProfile].[ChannelAccessProfileId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 3005
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredChannelAccessProfile] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredChannelAccessProfile] TO [CRMReaderRole]
    AS [dbo];

