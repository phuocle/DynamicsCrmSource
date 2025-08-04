

--
-- report view for externalpartyitem
--
create view dbo.[FilteredExternalPartyItem] (
    [channelaccessprofileid],
    [channelaccessprofileidname],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [exchangerate],
    [externalpartyid],
    [externalpartyidname],
    [externalpartyitemid],
    [importsequencenumber],
    [introducedversion],
    [lastdisabledon],
    [lastdisabledonutc],
    [lastenabledon],
    [lastenabledonutc],
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
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [regardingobjectid],
    [regardingobjectiddsc],
    [regardingobjectidname],
    [regardingobjectidyominame],
    [regardingobjecttypecode],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [versionnumber]
) with view_metadata as
select
    [ExternalPartyItem].[ChannelAccessProfileId],
    [ExternalPartyItem].[ChannelAccessProfileIdName],
    [ExternalPartyItem].[CreatedBy],
    [ExternalPartyItem].[CreatedByName],
    [ExternalPartyItem].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExternalPartyItem].[CreatedOn],
			us.TimeZoneCode),
        [ExternalPartyItem].[CreatedOn],
    [ExternalPartyItem].[CreatedOnBehalfBy],
    [ExternalPartyItem].[CreatedOnBehalfByName],
    [ExternalPartyItem].[CreatedOnBehalfByYomiName],
    [ExternalPartyItem].[ExchangeRate],
    [ExternalPartyItem].[ExternalPartyId],
    [ExternalPartyItem].[ExternalPartyIdName],
    [ExternalPartyItem].[ExternalPartyItemId],
    [ExternalPartyItem].[ImportSequenceNumber],
    [ExternalPartyItem].[IntroducedVersion],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExternalPartyItem].[LastDisabledOn],
			us.TimeZoneCode),
        [ExternalPartyItem].[LastDisabledOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExternalPartyItem].[LastEnabledOn],
			us.TimeZoneCode),
        [ExternalPartyItem].[LastEnabledOn],
    [ExternalPartyItem].[ModifiedBy],
    [ExternalPartyItem].[ModifiedByName],
    [ExternalPartyItem].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExternalPartyItem].[ModifiedOn],
			us.TimeZoneCode),
        [ExternalPartyItem].[ModifiedOn],
    [ExternalPartyItem].[ModifiedOnBehalfBy],
    [ExternalPartyItem].[ModifiedOnBehalfByName],
    [ExternalPartyItem].[ModifiedOnBehalfByYomiName],
    [ExternalPartyItem].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExternalPartyItem].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ExternalPartyItem].[OverriddenCreatedOn],
    [ExternalPartyItem].[OwnerId],
    [ExternalPartyItem].[OwnerIdType],
    [ExternalPartyItem].[OwningBusinessUnit],
    [ExternalPartyItem].[OwningUser],
    [ExternalPartyItem].[RegardingObjectId],
    --[ExternalPartyItem].[RegardingObjectIdDsc]
    0,
    [ExternalPartyItem].[RegardingObjectIdName],
    [ExternalPartyItem].[RegardingObjectIdYomiName],
    [ExternalPartyItem].[RegardingObjectTypeCode],
    [ExternalPartyItem].[StateCode],
    StateCodePLTable.Value,
    [ExternalPartyItem].[StatusCode],
    StatusCodePLTable.Value,
    [ExternalPartyItem].[TransactionCurrencyId],
    [ExternalPartyItem].[TransactionCurrencyIdName],
    [ExternalPartyItem].[VersionNumber]
from ExternalPartyItem
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9987
		and [StateCodePLTable].AttributeValue = [ExternalPartyItem].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9987
		and [StatusCodePLTable].AttributeValue = [ExternalPartyItem].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(3008) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[ExternalPartyItem].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 3008
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
		[ExternalPartyItem].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 3008)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ExternalPartyItem].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ExternalPartyItem].[ExternalPartyId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 3008
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredExternalPartyItem] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredExternalPartyItem] TO [CRMReaderRole]
    AS [dbo];

