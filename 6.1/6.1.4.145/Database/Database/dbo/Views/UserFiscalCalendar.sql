


--
-- base view for UserFiscalCalendar
--
create view dbo.[UserFiscalCalendar]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [BusinessUnitIdName],
    [CreatedByYomiName],
    [CreatedByName],
    [BusinessUnitId],
    [SalesPersonIdYomiName],
    [SalesPersonIdName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [UserFiscalCalendarId],
    [SalesPersonId],
    [FiscalPeriodType],
    [EffectiveOn],
    [Period1],
    [Period2],
    [Period3],
    [Period4],
    [Period5],
    [Period6],
    [Period7],
    [Period8],
    [Period9],
    [Period10],
    [Period11],
    [Period12],
    [Period13],
    [CreatedBy],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [ImportSequenceNumber],
    [TransactionCurrencyId],
    [UTCConversionTimeZoneCode],
    [ExchangeRate],
    [TimeZoneRuleVersionNumber],
    [Period4_Base],
    [Period11_Base],
    [Period3_Base],
    [Period1_Base],
    [Period6_Base],
    [Period8_Base],
    [Period9_Base],
    [Period7_Base],
    [Period5_Base],
    [Period13_Base],
    [Period10_Base],
    [Period12_Base],
    [Period2_Base],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_userfiscalcalendar_modifiedonbehalfby].[YomiFullName],
    [lk_userfiscalcalendar_createdonbehalfby].[FullName],
    [lk_userfiscalcalendar_modifiedby].[YomiFullName],
    [lk_userfiscalcalendar_modifiedonbehalfby].[FullName],
    [lk_userfiscalcalendar_businessunit].[Name],
    [lk_userfiscalcalendar_createdby].[YomiFullName],
    [lk_userfiscalcalendar_createdby].[FullName],
    [system_user_quotas].[BusinessUnitId],
    [system_user_quotas].[YomiFullName],
    [system_user_quotas].[FullName],
    [lk_userfiscalcalendar_modifiedby].[FullName],
    [lk_userfiscalcalendar_createdonbehalfby].[YomiFullName],
    [transactioncurrency_userfiscalcalendar].[CurrencyName],

    -- physical attribute
    [UserFiscalCalendarBase].[UserFiscalCalendarId],
    [UserFiscalCalendarBase].[SalesPersonId],
    [UserFiscalCalendarBase].[FiscalPeriodType],
    [UserFiscalCalendarBase].[EffectiveOn],
    [UserFiscalCalendarBase].[Period1],
    [UserFiscalCalendarBase].[Period2],
    [UserFiscalCalendarBase].[Period3],
    [UserFiscalCalendarBase].[Period4],
    [UserFiscalCalendarBase].[Period5],
    [UserFiscalCalendarBase].[Period6],
    [UserFiscalCalendarBase].[Period7],
    [UserFiscalCalendarBase].[Period8],
    [UserFiscalCalendarBase].[Period9],
    [UserFiscalCalendarBase].[Period10],
    [UserFiscalCalendarBase].[Period11],
    [UserFiscalCalendarBase].[Period12],
    [UserFiscalCalendarBase].[Period13],
    [UserFiscalCalendarBase].[CreatedBy],
    [UserFiscalCalendarBase].[CreatedOn],
    [UserFiscalCalendarBase].[ModifiedBy],
    [UserFiscalCalendarBase].[ModifiedOn],
    [UserFiscalCalendarBase].[ImportSequenceNumber],
    [UserFiscalCalendarBase].[TransactionCurrencyId],
    [UserFiscalCalendarBase].[UTCConversionTimeZoneCode],
    [UserFiscalCalendarBase].[ExchangeRate],
    [UserFiscalCalendarBase].[TimeZoneRuleVersionNumber],
    [UserFiscalCalendarBase].[Period4_Base],
    [UserFiscalCalendarBase].[Period11_Base],
    [UserFiscalCalendarBase].[Period3_Base],
    [UserFiscalCalendarBase].[Period1_Base],
    [UserFiscalCalendarBase].[Period6_Base],
    [UserFiscalCalendarBase].[Period8_Base],
    [UserFiscalCalendarBase].[Period9_Base],
    [UserFiscalCalendarBase].[Period7_Base],
    [UserFiscalCalendarBase].[Period5_Base],
    [UserFiscalCalendarBase].[Period13_Base],
    [UserFiscalCalendarBase].[Period10_Base],
    [UserFiscalCalendarBase].[Period12_Base],
    [UserFiscalCalendarBase].[Period2_Base],
    [UserFiscalCalendarBase].[CreatedOnBehalfBy],
    [UserFiscalCalendarBase].[ModifiedOnBehalfBy]
from [UserFiscalCalendarBase] 
    left join [SystemUserBase] [lk_userfiscalcalendar_createdby] with(nolock) on ([UserFiscalCalendarBase].[CreatedBy] = [lk_userfiscalcalendar_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_userfiscalcalendar_createdonbehalfby] with(nolock) on ([UserFiscalCalendarBase].[CreatedOnBehalfBy] = [lk_userfiscalcalendar_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_userfiscalcalendar_modifiedby] with(nolock) on ([UserFiscalCalendarBase].[ModifiedBy] = [lk_userfiscalcalendar_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_userfiscalcalendar_modifiedonbehalfby] with(nolock) on ([UserFiscalCalendarBase].[ModifiedOnBehalfBy] = [lk_userfiscalcalendar_modifiedonbehalfby].[SystemUserId])
    left join [SystemUserBase] [system_user_quotas] with(nolock) on ([UserFiscalCalendarBase].[SalesPersonId] = [system_user_quotas].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_userfiscalcalendar] on ([UserFiscalCalendarBase].[TransactionCurrencyId] = [transactioncurrency_userfiscalcalendar].[TransactionCurrencyId])
    left join [BusinessUnitBase] [lk_userfiscalcalendar_businessunit] on ([system_user_quotas].[BusinessUnitId] = [lk_userfiscalcalendar_businessunit].[BusinessUnitId])
