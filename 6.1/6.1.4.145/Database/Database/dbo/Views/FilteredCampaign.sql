

--
-- report view for campaign
--
create view dbo.[FilteredCampaign] (
    [actualend],
    [actualendutc],
    [actualstart],
    [actualstartutc],
    [budgetedcost],
    [budgetedcost_base],
    [campaignid],
    [codename],
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
    [description],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [expectedresponse],
    [expectedrevenue],
    [expectedrevenue_base],
    [importsequencenumber],
    [istemplate],
    [istemplatename],
    [message],
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
    [objective],
    [othercost],
    [othercost_base],
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
    [pricelistdsc],
    [pricelistid],
    [pricelistname],
    [processid],
    [promotioncodename],
    [proposedend],
    [proposedendutc],
    [proposedstart],
    [proposedstartutc],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [totalactualcost],
    [totalactualcost_base],
    [totalcampaignactivityactualcost],
    [totalcampaignactivityactualcost_base],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [typecode],
    [typecodename],
    [utcconversiontimezonecode],
    [versionnumber],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    dbo.fn_UTCToTzCodeSpecificLocalTime([Campaign].[ActualEnd],
			us.TimeZoneCode),
        [Campaign].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Campaign].[ActualStart],
			us.TimeZoneCode),
        [Campaign].[ActualStart],
    [Campaign].[BudgetedCost],
    [Campaign].[BudgetedCost_Base],
    [Campaign].[CampaignId],
    [Campaign].[CodeName],
    [Campaign].[CreatedBy],
    --[Campaign].[CreatedByDsc]
    0,
    [Campaign].[CreatedByName],
    [Campaign].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Campaign].[CreatedOn],
			us.TimeZoneCode),
        [Campaign].[CreatedOn],
    [Campaign].[CreatedOnBehalfBy],
    --[Campaign].[CreatedOnBehalfByDsc]
    0,
    [Campaign].[CreatedOnBehalfByName],
    [Campaign].[CreatedOnBehalfByYomiName],
    [Campaign].[Description],
    cast([Campaign].[EntityImage] as varbinary(max)),
    [Campaign].[EntityImageId],
    [Campaign].[EntityImage_Timestamp],
    [Campaign].[EntityImage_URL],
    [Campaign].[ExchangeRate],
    [Campaign].[ExpectedResponse],
    [Campaign].[ExpectedRevenue],
    [Campaign].[ExpectedRevenue_Base],
    [Campaign].[ImportSequenceNumber],
    [Campaign].[IsTemplate],
    IsTemplatePLTable.Value,
    [Campaign].[Message],
    [Campaign].[ModifiedBy],
    --[Campaign].[ModifiedByDsc]
    0,
    [Campaign].[ModifiedByName],
    [Campaign].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Campaign].[ModifiedOn],
			us.TimeZoneCode),
        [Campaign].[ModifiedOn],
    [Campaign].[ModifiedOnBehalfBy],
    --[Campaign].[ModifiedOnBehalfByDsc]
    0,
    [Campaign].[ModifiedOnBehalfByName],
    [Campaign].[ModifiedOnBehalfByYomiName],
    [Campaign].[Name],
    [Campaign].[Objective],
    [Campaign].[OtherCost],
    [Campaign].[OtherCost_Base],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Campaign].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Campaign].[OverriddenCreatedOn],
    [Campaign].[OwnerId],
    --[Campaign].[OwnerIdDsc]
    0,
    [Campaign].[OwnerIdName],
    [Campaign].[OwnerIdType],
    [Campaign].[OwnerIdYomiName],
    [Campaign].[OwningBusinessUnit],
    [Campaign].[OwningTeam],
    [Campaign].[OwningUser],
    --[Campaign].[PriceListDsc]
    0,
    [Campaign].[PriceListId],
    [Campaign].[PriceListName],
    [Campaign].[ProcessId],
    [Campaign].[PromotionCodeName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Campaign].[ProposedEnd],
			us.TimeZoneCode),
        [Campaign].[ProposedEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Campaign].[ProposedStart],
			us.TimeZoneCode),
        [Campaign].[ProposedStart],
    [Campaign].[StageId],
    [Campaign].[StateCode],
    StateCodePLTable.Value,
    [Campaign].[StatusCode],
    StatusCodePLTable.Value,
    [Campaign].[TimeZoneRuleVersionNumber],
    [Campaign].[TotalActualCost],
    [Campaign].[TotalActualCost_Base],
    [Campaign].[TotalCampaignActivityActualCost],
    [Campaign].[TotalCampaignActivityActualCost_Base],
    [Campaign].[TransactionCurrencyId],
    --[Campaign].[TransactionCurrencyIdDsc]
    0,
    [Campaign].[TransactionCurrencyIdName],
    [Campaign].[TypeCode],
    TypeCodePLTable.Value,
    [Campaign].[UTCConversionTimeZoneCode],
    [Campaign].[VersionNumber],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from Campaign
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [Campaign].TransactionCurrencyId
    left outer join StringMap [IsTemplatePLTable] on 
		([IsTemplatePLTable].AttributeName = 'istemplate'
		and [IsTemplatePLTable].ObjectTypeCode = 4400
		and [IsTemplatePLTable].AttributeValue = [Campaign].[IsTemplate]
		and [IsTemplatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4400
		and [StateCodePLTable].AttributeValue = [Campaign].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4400
		and [StatusCodePLTable].AttributeValue = [Campaign].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TypeCodePLTable] on 
		([TypeCodePLTable].AttributeName = 'typecode'
		and [TypeCodePLTable].ObjectTypeCode = 4400
		and [TypeCodePLTable].AttributeValue = [Campaign].[TypeCode]
		and [TypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4400) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[Campaign].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 4400
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
		[Campaign].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4400)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Campaign].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Campaign].[CampaignId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 4400 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCampaign] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCampaign] TO [CRMReaderRole]
    AS [dbo];

