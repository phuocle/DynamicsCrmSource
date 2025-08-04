

--
-- report view for entitlementchannel
--
create view dbo.[FilteredEntitlementChannel] 
(
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
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
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
    dbo.fn_UTCToTzCodeSpecificLocalTime([EntitlementChannel].[CreatedOn],
			us.TimeZoneCode),
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
    dbo.fn_UTCToTzCodeSpecificLocalTime([EntitlementChannel].[ModifiedOn],
			us.TimeZoneCode),
        [EntitlementChannel].[ModifiedOn],
    [EntitlementChannel].[ModifiedOnBehalfBy],
    [EntitlementChannel].[ModifiedOnBehalfByName],
    [EntitlementChannel].[ModifiedOnBehalfByYomiName],
    [EntitlementChannel].[Name],
    [EntitlementChannel].[OrganizationId],
    [EntitlementChannel].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EntitlementChannel].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [EntitlementChannel].[OverriddenCreatedOn],
    [EntitlementChannel].[OwnerId],
    --[EntitlementChannel].[OwnerIdDsc]
    0,
    [EntitlementChannel].[OwnerIdName],
    [EntitlementChannel].[OwnerIdType],
    [EntitlementChannel].[OwnerIdYomiName],
    [EntitlementChannel].[OwningBusinessUnit],
    [EntitlementChannel].[OwningTeam],
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
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[EntitlementChannel].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9700
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
		[EntitlementChannel].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 9700)
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
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9700
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementChannel] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementChannel] TO [CRMReaderRole]
    AS [dbo];

