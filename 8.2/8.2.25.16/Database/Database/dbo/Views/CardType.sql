


--
-- base view for CardType
--
create view dbo.[CardType]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [CardTypeId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [CardName],
    [IsEnabled],
    [ScheduleTime],
    [LastSyncTime],
    [ExchangeRate],
    [TransactionCurrencyId],
    [SoftTitle],
    [SummaryText],
    [GroupType],
    [HasSnoozeDismiss],
    [CardType],
    [Actions],
    [StringCardOption],
    [IntCardOption],
    [BoolCardOption],
    [IsPreviewCard],
    [IsLiveOnly],
    [CardTypeIcon],
    [ClientAvailability],
    [IsBaseCard]
) with view_metadata as
select
    -- logical attributes
    [lk_cardtype_modifiedby].[FullName],
    [lk_cardtype_modifiedby].[YomiFullName],
    [lk_cardtype_modifiedonbehalfby].[FullName],
    [lk_cardtype_modifiedonbehalfby].[YomiFullName],
    [lk_cardtype_createdby].[FullName],
    [lk_cardtype_createdby].[YomiFullName],
    [lk_cardtype_createdonbehalfby].[FullName],
    [lk_cardtype_createdonbehalfby].[YomiFullName],
    [transactioncurrency_cardtype].[CurrencyName],

    -- physical attribute
    [CardTypeBase].[CardTypeId],
    [CardTypeBase].[CreatedOn],
    [CardTypeBase].[CreatedBy],
    [CardTypeBase].[ModifiedOn],
    [CardTypeBase].[ModifiedBy],
    [CardTypeBase].[CreatedOnBehalfBy],
    [CardTypeBase].[ModifiedOnBehalfBy],
    [CardTypeBase].[VersionNumber],
    [CardTypeBase].[CardName],
    [CardTypeBase].[IsEnabled],
    [CardTypeBase].[ScheduleTime],
    [CardTypeBase].[LastSyncTime],
    [CardTypeBase].[ExchangeRate],
    [CardTypeBase].[TransactionCurrencyId],
    [CardTypeBase].[SoftTitle],
    [CardTypeBase].[SummaryText],
    [CardTypeBase].[GroupType],
    [CardTypeBase].[HasSnoozeDismiss],
    [CardTypeBase].[CardType],
    [CardTypeBase].[Actions],
    [CardTypeBase].[StringCardOption],
    [CardTypeBase].[IntCardOption],
    [CardTypeBase].[BoolCardOption],
    [CardTypeBase].[IsPreviewCard],
    [CardTypeBase].[IsLiveOnly],
    [CardTypeBase].[CardTypeIcon],
    [CardTypeBase].[ClientAvailability],
    [CardTypeBase].[IsBaseCard]
from [CardTypeBase] 
    left join [SystemUserBase] [lk_cardtype_createdby] with(nolock) on ([CardTypeBase].[CreatedBy] = [lk_cardtype_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_cardtype_createdonbehalfby] with(nolock) on ([CardTypeBase].[CreatedOnBehalfBy] = [lk_cardtype_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_cardtype_modifiedby] with(nolock) on ([CardTypeBase].[ModifiedBy] = [lk_cardtype_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_cardtype_modifiedonbehalfby] with(nolock) on ([CardTypeBase].[ModifiedOnBehalfBy] = [lk_cardtype_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_cardtype] on ([CardTypeBase].[TransactionCurrencyId] = [transactioncurrency_cardtype].[TransactionCurrencyId])
