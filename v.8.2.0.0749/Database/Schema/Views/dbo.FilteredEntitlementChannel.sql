SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for entitlementchannel
--
create view [dbo].[FilteredEntitlementChannel] (
    [channel],
    [channelname],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [entitlementchannelid],
    [entitlementid],
    [entitlementidname],
    [exchangerate],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [remainingterms],
    [timezoneruleversionnumber],
    [totalterms],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [EntitlementChannel].[Channel],
    ChannelPLTable.Value,
    [EntitlementChannel].[CreatedBy],
    [EntitlementChannel].[CreatedByName],
    [EntitlementChannel].[CreatedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([EntitlementChannel].[CreatedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
        [EntitlementChannel].[CreatedOn],
    [EntitlementChannel].[CreatedOnBehalfBy],
    [EntitlementChannel].[CreatedOnBehalfByName],
    [EntitlementChannel].[CreatedOnBehalfByYomiName],
    [EntitlementChannel].[EntitlementChannelId],
    [EntitlementChannel].[EntitlementId],
    [EntitlementChannel].[EntitlementIdName],
    [EntitlementChannel].[ExchangeRate],
    [EntitlementChannel].[ImportSequenceNumber],
    [EntitlementChannel].[ModifiedBy],
    [EntitlementChannel].[ModifiedByName],
    [EntitlementChannel].[ModifiedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([EntitlementChannel].[ModifiedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
        [EntitlementChannel].[ModifiedOn],
    [EntitlementChannel].[ModifiedOnBehalfBy],
    [EntitlementChannel].[ModifiedOnBehalfByName],
    [EntitlementChannel].[ModifiedOnBehalfByYomiName],
    [EntitlementChannel].[Name],
    [EntitlementChannel].[OrganizationId],
    [EntitlementChannel].[OrganizationIdName],
    dbo.fn_UTCToTzSpecificLocalTime([EntitlementChannel].[OverriddenCreatedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
        [EntitlementChannel].[OverriddenCreatedOn],
    [EntitlementChannel].[OwnerId],
    [EntitlementChannel].[OwnerIdType],
    [EntitlementChannel].[OwningBusinessUnit],
    [EntitlementChannel].[OwningUser],
    [EntitlementChannel].[RemainingTerms],
    [EntitlementChannel].[TimeZoneRuleVersionNumber],
    [EntitlementChannel].[TotalTerms],
    [EntitlementChannel].[TransactionCurrencyId],
    [EntitlementChannel].[TransactionCurrencyIdName],
    [EntitlementChannel].[UTCConversionTimeZoneCode],
    [EntitlementChannel].[VersionNumber]
from EntitlementChannel
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ChannelPLTable] on 
		([ChannelPLTable].AttributeName = 'channel'
		and [ChannelPLTable].ObjectTypeCode = 9701
		and [ChannelPLTable].AttributeValue = [EntitlementChannel].[Channel]
		and [ChannelPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9700) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[EntitlementChannel].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 9700))
		
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
		[EntitlementChannel].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9700)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[EntitlementChannel].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[EntitlementChannel].[EntitlementId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 9700))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredEntitlementChannel] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredEntitlementChannel] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
