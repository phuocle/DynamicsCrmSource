


--
-- base view for CardType
--
create view dbo.[CardType]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [CardTypeId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OverriddenCreatedOn],
    [Priority],
    [VersionNumber],
    [CardName],
    [ImportSequenceNumber],
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
    [PublisherName],
    [IsBaseCard],
    [GroupCategory],
    [AdaptiveCardTemplate]
) with view_metadata as
select
    -- logical attributes
    [lk_cardtype_createdby].[FullName],
    [lk_cardtype_createdby].[YomiFullName],
    [lk_cardtype_createdonbehalfby].[FullName],
    [lk_cardtype_createdonbehalfby].[YomiFullName],
    [lk_cardtype_modifiedby].[FullName],
    [lk_cardtype_modifiedby].[YomiFullName],
    [lk_cardtype_modifiedonbehalfby].[FullName],
    [lk_cardtype_modifiedonbehalfby].[YomiFullName],
    [transactioncurrency_cardtype].[CurrencyName],

    -- physical attribute
    [CardTypeBase].[CardTypeId],
    [CardTypeBase].[CreatedOn],
    [CardTypeBase].[CreatedBy],
    [CardTypeBase].[ModifiedOn],
    [CardTypeBase].[ModifiedBy],
    [CardTypeBase].[CreatedOnBehalfBy],
    [CardTypeBase].[ModifiedOnBehalfBy],
    [CardTypeBase].[OverriddenCreatedOn],
    [CardTypeBase].[Priority],
    [CardTypeBase].[VersionNumber],
    [CardTypeBase].[CardName],
    [CardTypeBase].[ImportSequenceNumber],
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
    [CardTypeBase].[PublisherName],
    [CardTypeBase].[IsBaseCard],
    [CardTypeBase].[GroupCategory],
    [CardTypeBase].[AdaptiveCardTemplate]
from [CardTypeBase] 
    left join [SystemUserBase] [lk_cardtype_createdby] on ([CardTypeBase].[CreatedBy] = [lk_cardtype_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_cardtype_createdonbehalfby] on ([CardTypeBase].[CreatedOnBehalfBy] = [lk_cardtype_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_cardtype_modifiedby] on ([CardTypeBase].[ModifiedBy] = [lk_cardtype_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_cardtype_modifiedonbehalfby] on ([CardTypeBase].[ModifiedOnBehalfBy] = [lk_cardtype_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_cardtype] on ([CardTypeBase].[TransactionCurrencyId] = [transactioncurrency_cardtype].[TransactionCurrencyId])
