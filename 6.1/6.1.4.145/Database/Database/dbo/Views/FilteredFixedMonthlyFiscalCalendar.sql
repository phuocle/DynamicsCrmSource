

--
-- report view for fixedmonthlyfiscalcalendar
--
create view dbo.[FilteredFixedMonthlyFiscalCalendar] (
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
    [fiscalperiodtype],
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
    [period1],
    [period10],
    [period10_base],
    [period11],
    [period11_base],
    [period12],
    [period12_base],
    [period13],
    [period13_base],
    [period1_base],
    [period2],
    [period2_base],
    [period3],
    [period3_base],
    [period4],
    [period4_base],
    [period5],
    [period5_base],
    [period6],
    [period6_base],
    [period7],
    [period7_base],
    [period8],
    [period8_base],
    [period9],
    [period9_base],
    [salespersonid],
    [salespersoniddsc],
    [salespersonidname],
    [salespersonidyominame],
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
    [UserFiscalCalendar].[FiscalPeriodType],
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
    [UserFiscalCalendar].[Period1],
    [UserFiscalCalendar].[Period10],
    [UserFiscalCalendar].[Period10_Base],
    [UserFiscalCalendar].[Period11],
    [UserFiscalCalendar].[Period11_Base],
    [UserFiscalCalendar].[Period12],
    [UserFiscalCalendar].[Period12_Base],
    [UserFiscalCalendar].[Period13],
    [UserFiscalCalendar].[Period13_Base],
    [UserFiscalCalendar].[Period1_Base],
    [UserFiscalCalendar].[Period2],
    [UserFiscalCalendar].[Period2_Base],
    [UserFiscalCalendar].[Period3],
    [UserFiscalCalendar].[Period3_Base],
    [UserFiscalCalendar].[Period4],
    [UserFiscalCalendar].[Period4_Base],
    [UserFiscalCalendar].[Period5],
    [UserFiscalCalendar].[Period5_Base],
    [UserFiscalCalendar].[Period6],
    [UserFiscalCalendar].[Period6_Base],
    [UserFiscalCalendar].[Period7],
    [UserFiscalCalendar].[Period7_Base],
    [UserFiscalCalendar].[Period8],
    [UserFiscalCalendar].[Period8_Base],
    [UserFiscalCalendar].[Period9],
    [UserFiscalCalendar].[Period9_Base],
    [UserFiscalCalendar].[SalesPersonId],
    --[UserFiscalCalendar].[SalesPersonIdDsc]
    0,
    [UserFiscalCalendar].[SalesPersonIdName],
    [UserFiscalCalendar].[SalesPersonIdYomiName],
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
		[UserFiscalCalendar].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 8)
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
    ON OBJECT::[dbo].[FilteredFixedMonthlyFiscalCalendar] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredFixedMonthlyFiscalCalendar] TO [CRMReaderRole]
    AS [dbo];

