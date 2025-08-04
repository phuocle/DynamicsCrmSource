


--
-- base view for TransactionCurrency
--
create view dbo.[TransactionCurrency]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [EntityImage_URL],
    [EntityImage],
    [EntityImage_Timestamp],
    [CreatedByYomiName],

    -- physical attributes
    [StatusCode],
    [ModifiedOn],
    [StateCode],
    [VersionNumber],
    [ModifiedBy],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [CreatedOn],
    [TransactionCurrencyId],
    [ExchangeRate],
    [CurrencySymbol],
    [UniqueDscId],
    [CurrencyName],
    [CreatedBy],
    [ISOCurrencyCode],
    [OrganizationId],
    [CurrencyPrecision],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [lk_transactioncurrencybase_createdby].[FullName],
    [lk_transactioncurrencybase_createdonbehalfby].[YomiFullName],
    [lk_transactioncurrencybase_modifiedby].[FullName],
    [lk_transactioncurrencybase_modifiedonbehalfby].[FullName],
    [lk_transactioncurrencybase_modifiedby].[YomiFullName],
    [lk_transactioncurrencybase_modifiedonbehalfby].[YomiFullName],
    [lk_transactioncurrencybase_createdonbehalfby].[FullName],
    [lk_transactioncurrency_entityimage].[ImageURL],
    [lk_transactioncurrency_entityimage].[ImageData],
    [lk_transactioncurrency_entityimage].[ImageTimestamp],
    [lk_transactioncurrencybase_createdby].[YomiFullName],

    -- physical attribute
    [TransactionCurrencyBase].[StatusCode],
    [TransactionCurrencyBase].[ModifiedOn],
    [TransactionCurrencyBase].[StateCode],
    [TransactionCurrencyBase].[VersionNumber],
    [TransactionCurrencyBase].[ModifiedBy],
    [TransactionCurrencyBase].[ImportSequenceNumber],
    [TransactionCurrencyBase].[OverriddenCreatedOn],
    [TransactionCurrencyBase].[CreatedOn],
    [TransactionCurrencyBase].[TransactionCurrencyId],
    [TransactionCurrencyBase].[ExchangeRate],
    [TransactionCurrencyBase].[CurrencySymbol],
    [TransactionCurrencyBase].[UniqueDscId],
    [TransactionCurrencyBase].[CurrencyName],
    [TransactionCurrencyBase].[CreatedBy],
    [TransactionCurrencyBase].[ISOCurrencyCode],
    [TransactionCurrencyBase].[OrganizationId],
    [TransactionCurrencyBase].[CurrencyPrecision],
    [TransactionCurrencyBase].[CreatedOnBehalfBy],
    [TransactionCurrencyBase].[ModifiedOnBehalfBy],
    [TransactionCurrencyBase].[EntityImageId]
from [TransactionCurrencyBase] 
    left join [ImageDescriptor] [lk_transactioncurrency_entityimage] on ([TransactionCurrencyBase].[EntityImageId] = [lk_transactioncurrency_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_transactioncurrencybase_createdby] with(nolock) on ([TransactionCurrencyBase].[CreatedBy] = [lk_transactioncurrencybase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_transactioncurrencybase_createdonbehalfby] with(nolock) on ([TransactionCurrencyBase].[CreatedOnBehalfBy] = [lk_transactioncurrencybase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_transactioncurrencybase_modifiedby] with(nolock) on ([TransactionCurrencyBase].[ModifiedBy] = [lk_transactioncurrencybase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_transactioncurrencybase_modifiedonbehalfby] with(nolock) on ([TransactionCurrencyBase].[ModifiedOnBehalfBy] = [lk_transactioncurrencybase_modifiedonbehalfby].[SystemUserId])
