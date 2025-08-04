

--
-- report view for list
--
create view dbo.[FilteredList] (
    [checkfordonotsendmmonlistmembersname],
    [cost],
    [cost_base],
    [createdby],
    [createdbydsc],
    [createdbyname],
    [createdbyyominame],
    [createdfromcode],
    [createdfromcodename],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [donotsendonoptout],
    [exchangerate],
    [ignoreinactivelistmembers],
    [ignoreinactivelistmembersname],
    [importsequencenumber],
    [lastusedon],
    [lastusedonutc],
    [listid],
    [listname],
    [lockstatus],
    [lockstatusname],
    [membercount],
    [membertype],
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
    [processid],
    [purpose],
    [query],
    [source],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [type],
    [typename],
    [utcconversiontimezonecode],
    [versionnumber],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    DoNotSendOnOptOutPLTable.Value,
    [List].[Cost],
    [List].[Cost_Base],
    [List].[CreatedBy],
    --[List].[CreatedByDsc]
    0,
    [List].[CreatedByName],
    [List].[CreatedByYomiName],
    [List].[CreatedFromCode],
    CreatedFromCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([List].[CreatedOn],
			us.TimeZoneCode),
        [List].[CreatedOn],
    [List].[CreatedOnBehalfBy],
    --[List].[CreatedOnBehalfByDsc]
    0,
    [List].[CreatedOnBehalfByName],
    [List].[CreatedOnBehalfByYomiName],
    [List].[Description],
    [List].[DoNotSendOnOptOut],
    [List].[ExchangeRate],
    [List].[IgnoreInactiveListMembers],
    IgnoreInactiveListMembersPLTable.Value,
    [List].[ImportSequenceNumber],
    dbo.fn_UTCToTzCodeSpecificLocalTime([List].[LastUsedOn],
			us.TimeZoneCode),
        [List].[LastUsedOn],
    [List].[ListId],
    [List].[ListName],
    [List].[LockStatus],
    LockStatusPLTable.Value,
    [List].[MemberCount],
    [List].[MemberType],
    [List].[ModifiedBy],
    --[List].[ModifiedByDsc]
    0,
    [List].[ModifiedByName],
    [List].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([List].[ModifiedOn],
			us.TimeZoneCode),
        [List].[ModifiedOn],
    [List].[ModifiedOnBehalfBy],
    --[List].[ModifiedOnBehalfByDsc]
    0,
    [List].[ModifiedOnBehalfByName],
    [List].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([List].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [List].[OverriddenCreatedOn],
    [List].[OwnerId],
    --[List].[OwnerIdDsc]
    0,
    [List].[OwnerIdName],
    [List].[OwnerIdType],
    [List].[OwnerIdYomiName],
    [List].[OwningBusinessUnit],
    [List].[OwningTeam],
    [List].[OwningUser],
    [List].[ProcessId],
    [List].[Purpose],
    [List].[Query],
    [List].[Source],
    [List].[StageId],
    [List].[StateCode],
    StateCodePLTable.Value,
    [List].[StatusCode],
    StatusCodePLTable.Value,
    [List].[TimeZoneRuleVersionNumber],
    [List].[TransactionCurrencyId],
    --[List].[TransactionCurrencyIdDsc]
    0,
    [List].[TransactionCurrencyIdName],
    [List].[Type],
    TypePLTable.Value,
    [List].[UTCConversionTimeZoneCode],
    [List].[VersionNumber],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from List
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [List].TransactionCurrencyId
    left outer join StringMap [DoNotSendOnOptOutPLTable] on 
		([DoNotSendOnOptOutPLTable].AttributeName = 'donotsendonoptout'
		and [DoNotSendOnOptOutPLTable].ObjectTypeCode = 4300
		and [DoNotSendOnOptOutPLTable].AttributeValue = [List].[DoNotSendOnOptOut]
		and [DoNotSendOnOptOutPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CreatedFromCodePLTable] on 
		([CreatedFromCodePLTable].AttributeName = 'createdfromcode'
		and [CreatedFromCodePLTable].ObjectTypeCode = 4300
		and [CreatedFromCodePLTable].AttributeValue = [List].[CreatedFromCode]
		and [CreatedFromCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IgnoreInactiveListMembersPLTable] on 
		([IgnoreInactiveListMembersPLTable].AttributeName = 'ignoreinactivelistmembers'
		and [IgnoreInactiveListMembersPLTable].ObjectTypeCode = 4300
		and [IgnoreInactiveListMembersPLTable].AttributeValue = [List].[IgnoreInactiveListMembers]
		and [IgnoreInactiveListMembersPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LockStatusPLTable] on 
		([LockStatusPLTable].AttributeName = 'lockstatus'
		and [LockStatusPLTable].ObjectTypeCode = 4300
		and [LockStatusPLTable].AttributeValue = [List].[LockStatus]
		and [LockStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4300
		and [StateCodePLTable].AttributeValue = [List].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4300
		and [StatusCodePLTable].AttributeValue = [List].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TypePLTable] on 
		([TypePLTable].AttributeName = 'type'
		and [TypePLTable].ObjectTypeCode = 4300
		and [TypePLTable].AttributeValue = [List].[Type]
		and [TypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4300) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[List].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 4300
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
		[List].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4300)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[List].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[List].[ListId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 4300 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredList] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredList] TO [CRMReaderRole]
    AS [dbo];

