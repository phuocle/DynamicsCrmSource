

--
-- report view for monthlyfiscalcalendar
--
create view dbo.[FilteredMonthlyFiscalCalendar] (
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
    [month1],
    [month10],
    [month10_base],
    [month11],
    [month11_base],
    [month12],
    [month12_base],
    [month1_base],
    [month2],
    [month2_base],
    [month3],
    [month3_base],
    [month4],
    [month4_base],
    [month5],
    [month5_base],
    [month6],
    [month6_base],
    [month7],
    [month7_base],
    [month8],
    [month8_base],
    [month9],
    [month9_base],
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
    dbo.fn_UTCToTzSpecificLocalTime([UserFiscalCalendar].[CreatedOn], 
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
        [UserFiscalCalendar].[CreatedOn],
    [UserFiscalCalendar].[CreatedOnBehalfBy],
    --[UserFiscalCalendar].[CreatedOnBehalfByDsc]
    0,
    [UserFiscalCalendar].[CreatedOnBehalfByName],
    [UserFiscalCalendar].[CreatedOnBehalfByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([UserFiscalCalendar].[EffectiveOn], 
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
        [UserFiscalCalendar].[EffectiveOn],
    [UserFiscalCalendar].[ExchangeRate],
    [UserFiscalCalendar].[FiscalPeriodType],
    [UserFiscalCalendar].[ModifiedBy],
    --[UserFiscalCalendar].[ModifiedByDsc]
    0,
    [UserFiscalCalendar].[ModifiedByName],
    [UserFiscalCalendar].[ModifiedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([UserFiscalCalendar].[ModifiedOn], 
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
    ON OBJECT::[dbo].[FilteredMonthlyFiscalCalendar] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredMonthlyFiscalCalendar] TO [CRMReaderRole]
    AS [dbo];

