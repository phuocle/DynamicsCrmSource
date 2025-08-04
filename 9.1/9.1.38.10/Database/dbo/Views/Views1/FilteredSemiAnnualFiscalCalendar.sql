

--
-- report view for semiannualfiscalcalendar
--
create view dbo.[FilteredSemiAnnualFiscalCalendar] (
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
    [effectiveon],
    [effectiveonutc],
    [exchangerate],
    [firsthalf],
    [firsthalf_base],
    [fiscalperiodtype],
    [importsequencenumber],
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
    [salespersonid],
    [salespersoniddsc],
    [salespersonidname],
    [salespersonidyominame],
    [secondhalf],
    [secondhalf_base],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [userfiscalcalendarid],
    [utcconversiontimezonecode],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [UserFiscalCalendar].[BusinessUnitId],
    --[UserFiscalCalendar].[BusinessUnitIdDsc]
    0,
    [UserFiscalCalendar].[BusinessUnitIdName],
    [UserFiscalCalendar].[CreatedBy],
    --[UserFiscalCalendar].[CreatedByDsc]
    0,
    [UserFiscalCalendar].[CreatedByName],
    [UserFiscalCalendar].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UserFiscalCalendar].[CreatedOn],
			us.TimeZoneCode),
        [UserFiscalCalendar].[CreatedOn],
    [UserFiscalCalendar].[CreatedOnBehalfBy],
    --[UserFiscalCalendar].[CreatedOnBehalfByDsc]
    0,
    [UserFiscalCalendar].[CreatedOnBehalfByName],
    [UserFiscalCalendar].[CreatedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UserFiscalCalendar].[EffectiveOn],
			us.TimeZoneCode),
        [UserFiscalCalendar].[EffectiveOn],
    [UserFiscalCalendar].[ExchangeRate],
    [UserFiscalCalendar].[Period1],
    [UserFiscalCalendar].[Period1_Base],
    [UserFiscalCalendar].[FiscalPeriodType],
    [UserFiscalCalendar].[ImportSequenceNumber],
    [UserFiscalCalendar].[ModifiedBy],
    --[UserFiscalCalendar].[ModifiedByDsc]
    0,
    [UserFiscalCalendar].[ModifiedByName],
    [UserFiscalCalendar].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UserFiscalCalendar].[ModifiedOn],
			us.TimeZoneCode),
        [UserFiscalCalendar].[ModifiedOn],
    [UserFiscalCalendar].[ModifiedOnBehalfBy],
    --[UserFiscalCalendar].[ModifiedOnBehalfByDsc]
    0,
    [UserFiscalCalendar].[ModifiedOnBehalfByName],
    [UserFiscalCalendar].[ModifiedOnBehalfByYomiName],
    [UserFiscalCalendar].[SalesPersonId],
    --[UserFiscalCalendar].[SalesPersonIdDsc]
    0,
    [UserFiscalCalendar].[SalesPersonIdName],
    [UserFiscalCalendar].[SalesPersonIdYomiName],
    [UserFiscalCalendar].[Period7],
    [UserFiscalCalendar].[Period7_Base],
    [UserFiscalCalendar].[TimeZoneRuleVersionNumber],
    [UserFiscalCalendar].[TransactionCurrencyId],
    --[UserFiscalCalendar].[TransactionCurrencyIdDsc]
    0,
    [UserFiscalCalendar].[TransactionCurrencyIdName],
    [UserFiscalCalendar].[UserFiscalCalendarId],
    [UserFiscalCalendar].[UTCConversionTimeZoneCode],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from UserFiscalCalendar
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [UserFiscalCalendar].TransactionCurrencyId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(8) pdm
where
(
    
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[UserFiscalCalendar].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 8)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[UserFiscalCalendar].[BusinessUnitId] is not null 
	) 
)

)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSemiAnnualFiscalCalendar] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSemiAnnualFiscalCalendar] TO [CRMReaderRole]
    AS [dbo];

