USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredSocialProfile]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for socialprofile
--
create view [dbo].[FilteredSocialProfile] (
    [blocked],
    [blockedname],
    [community],
    [communityname],
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customerid],
    [customeridname],
    [customeridtype],
    [customeridyominame],
    [exchangerate],
    [importsequencenumber],
    [influencescore],
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
    [profilefullname],
    [profilelink],
    [profilename],
    [socialprofileid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [uniqueprofileid],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [SocialProfile].[Blocked],
    BlockedPLTable.Value,
    [SocialProfile].[Community],
    CommunityPLTable.Value,
    [SocialProfile].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SocialProfile].[CreatedOn],
			us.TimeZoneCode),
        [SocialProfile].[CreatedOn],
    [SocialProfile].[CreatedOnBehalfBy],
    [SocialProfile].[CreatedOnBehalfByName],
    [SocialProfile].[CreatedOnBehalfByYomiName],
    [SocialProfile].[CustomerId],
    [SocialProfile].[CustomerIdName],
    [SocialProfile].[CustomerIdType],
    [SocialProfile].[CustomerIdYomiName],
    [SocialProfile].[ExchangeRate],
    [SocialProfile].[ImportSequenceNumber],
    [SocialProfile].[InfluenceScore],
    [SocialProfile].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SocialProfile].[ModifiedOn],
			us.TimeZoneCode),
        [SocialProfile].[ModifiedOn],
    [SocialProfile].[ModifiedOnBehalfBy],
    [SocialProfile].[ModifiedOnBehalfByName],
    [SocialProfile].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SocialProfile].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SocialProfile].[OverriddenCreatedOn],
    [SocialProfile].[OwnerId],
    [SocialProfile].[OwnerIdName],
    [SocialProfile].[OwnerIdType],
    [SocialProfile].[OwnerIdYomiName],
    [SocialProfile].[OwningBusinessUnit],
    [SocialProfile].[OwningTeam],
    [SocialProfile].[OwningUser],
    [SocialProfile].[ProfileFullName],
    [SocialProfile].[ProfileLink],
    [SocialProfile].[ProfileName],
    [SocialProfile].[SocialProfileId],
    [SocialProfile].[StateCode],
    StateCodePLTable.Value,
    [SocialProfile].[StatusCode],
    StatusCodePLTable.Value,
    [SocialProfile].[TimeZoneRuleVersionNumber],
    [SocialProfile].[TransactionCurrencyId],
    [SocialProfile].[TransactionCurrencyIdName],
    [SocialProfile].[UniqueProfileID],
    [SocialProfile].[UTCConversionTimeZoneCode],
    [SocialProfile].[VersionNumber]
from SocialProfile
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [BlockedPLTable] on 
		([BlockedPLTable].AttributeName = 'blocked'
		and [BlockedPLTable].ObjectTypeCode = 99
		and [BlockedPLTable].AttributeValue = [SocialProfile].[Blocked]
		and [BlockedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CommunityPLTable] on 
		([CommunityPLTable].AttributeName = 'community'
		and [CommunityPLTable].ObjectTypeCode = 99
		and [CommunityPLTable].AttributeValue = [SocialProfile].[Community]
		and [CommunityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 99
		and [StateCodePLTable].AttributeValue = [SocialProfile].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 99
		and [StatusCodePLTable].AttributeValue = [SocialProfile].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(99) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[SocialProfile].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 99))
		
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
		[SocialProfile].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 99)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[SocialProfile].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[SocialProfile].[SocialProfileId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 99))
	)
)

GO
