

--
-- report view for interactionforemail
--
create view dbo.[FilteredInteractionForEmail] (
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [emailactivityid],
    [emailinteractionreplyid],
    [emailinteractiontime],
    [emailinteractiontimeutc],
    [exchangerate],
    [importsequencenumber],
    [interactedcomponenttext],
    [interactionforemailid],
    [interactionlocation],
    [interactionrepliedby],
    [interactionreplyid],
    [interactiontype],
    [interactiontypename],
    [interactionuseragent],
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
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [InteractionForEmail].[CreatedBy],
    [InteractionForEmail].[CreatedByName],
    [InteractionForEmail].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InteractionForEmail].[CreatedOn],
			us.TimeZoneCode),
        [InteractionForEmail].[CreatedOn],
    [InteractionForEmail].[CreatedOnBehalfBy],
    [InteractionForEmail].[CreatedOnBehalfByName],
    [InteractionForEmail].[CreatedOnBehalfByYomiName],
    [InteractionForEmail].[EmailActivityId],
    [InteractionForEmail].[EmailInteractionReplyId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InteractionForEmail].[EmailInteractionTime],
			us.TimeZoneCode),
        [InteractionForEmail].[EmailInteractionTime],
    [InteractionForEmail].[ExchangeRate],
    [InteractionForEmail].[ImportSequenceNumber],
    [InteractionForEmail].[InteractedComponentText],
    [InteractionForEmail].[InteractionForEmailId],
    [InteractionForEmail].[InteractionLocation],
    [InteractionForEmail].[InteractionRepliedBy],
    [InteractionForEmail].[InteractionReplyId],
    [InteractionForEmail].[InteractionType],
    InteractionTypePLTable.Value,
    [InteractionForEmail].[InteractionUserAgent],
    [InteractionForEmail].[ModifiedBy],
    [InteractionForEmail].[ModifiedByName],
    [InteractionForEmail].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InteractionForEmail].[ModifiedOn],
			us.TimeZoneCode),
        [InteractionForEmail].[ModifiedOn],
    [InteractionForEmail].[ModifiedOnBehalfBy],
    [InteractionForEmail].[ModifiedOnBehalfByName],
    [InteractionForEmail].[ModifiedOnBehalfByYomiName],
    [InteractionForEmail].[name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([InteractionForEmail].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [InteractionForEmail].[OverriddenCreatedOn],
    [InteractionForEmail].[OwnerId],
    [InteractionForEmail].[OwnerIdName],
    [InteractionForEmail].[OwnerIdType],
    [InteractionForEmail].[OwnerIdYomiName],
    [InteractionForEmail].[OwningBusinessUnit],
    [InteractionForEmail].[OwningTeam],
    [InteractionForEmail].[OwningUser],
    [InteractionForEmail].[statecode],
    statecodePLTable.Value,
    [InteractionForEmail].[statuscode],
    statuscodePLTable.Value,
    [InteractionForEmail].[TimeZoneRuleVersionNumber],
    [InteractionForEmail].[TransactionCurrencyId],
    [InteractionForEmail].[TransactionCurrencyIdName],
    [InteractionForEmail].[UTCConversionTimeZoneCode],
    [InteractionForEmail].[VersionNumber]
from InteractionForEmail
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [InteractionTypePLTable] on 
		([InteractionTypePLTable].AttributeName = 'interactiontype'
		and [InteractionTypePLTable].ObjectTypeCode = 9986
		and [InteractionTypePLTable].AttributeValue = [InteractionForEmail].[InteractionType]
		and [InteractionTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 9986
		and [statecodePLTable].AttributeValue = [InteractionForEmail].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 9986
		and [statuscodePLTable].AttributeValue = [InteractionForEmail].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9986) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[InteractionForEmail].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9986
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
		[InteractionForEmail].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9986)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[InteractionForEmail].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[InteractionForEmail].[InteractionForEmailId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9986
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredInteractionForEmail] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredInteractionForEmail] TO [CRMReaderRole]
    AS [dbo];

