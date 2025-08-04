


--
-- base view for PriceLevel
--
create view dbo.[PriceLevel]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [OrganizationIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [CreatedByName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [PriceLevelId],
    [OrganizationId],
    [Name],
    [Description],
    [ShippingMethodCode],
    [BeginDate],
    [PaymentMethodCode],
    [FreightTermsCode],
    [EndDate],
    [CreatedBy],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [StateCode],
    [VersionNumber],
    [StatusCode],
    [ImportSequenceNumber],
    [TransactionCurrencyId],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ExchangeRate]
) with view_metadata as
select
    -- logical attributes
    [lk_pricelevelbase_modifiedby].[YomiFullName],
    [organization_price_levels].[Name],
    [lk_pricelevelbase_modifiedonbehalfby].[YomiFullName],
    [lk_pricelevelbase_modifiedonbehalfby].[FullName],
    [lk_pricelevelbase_createdby].[YomiFullName],
    [lk_pricelevelbase_createdonbehalfby].[YomiFullName],
    [lk_pricelevelbase_createdonbehalfby].[FullName],
    [lk_pricelevelbase_modifiedby].[FullName],
    [lk_pricelevelbase_createdby].[FullName],
    [transactioncurrency_pricelevel].[CurrencyName],

    -- physical attribute
    [PriceLevelBase].[PriceLevelId],
    [PriceLevelBase].[OrganizationId],
    [PriceLevelBase].[Name],
    [PriceLevelBase].[Description],
    [PriceLevelBase].[ShippingMethodCode],
    [PriceLevelBase].[BeginDate],
    [PriceLevelBase].[PaymentMethodCode],
    [PriceLevelBase].[FreightTermsCode],
    [PriceLevelBase].[EndDate],
    [PriceLevelBase].[CreatedBy],
    [PriceLevelBase].[CreatedOn],
    [PriceLevelBase].[ModifiedBy],
    [PriceLevelBase].[ModifiedOn],
    [PriceLevelBase].[StateCode],
    [PriceLevelBase].[VersionNumber],
    [PriceLevelBase].[StatusCode],
    [PriceLevelBase].[ImportSequenceNumber],
    [PriceLevelBase].[TransactionCurrencyId],
    [PriceLevelBase].[OverriddenCreatedOn],
    [PriceLevelBase].[TimeZoneRuleVersionNumber],
    [PriceLevelBase].[UTCConversionTimeZoneCode],
    [PriceLevelBase].[CreatedOnBehalfBy],
    [PriceLevelBase].[ModifiedOnBehalfBy],
    [PriceLevelBase].[ExchangeRate]
from [PriceLevelBase] 
    left join [SystemUserBase] [lk_pricelevelbase_createdby] with(nolock) on ([PriceLevelBase].[CreatedBy] = [lk_pricelevelbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_pricelevelbase_createdonbehalfby] with(nolock) on ([PriceLevelBase].[CreatedOnBehalfBy] = [lk_pricelevelbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_pricelevelbase_modifiedby] with(nolock) on ([PriceLevelBase].[ModifiedBy] = [lk_pricelevelbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_pricelevelbase_modifiedonbehalfby] with(nolock) on ([PriceLevelBase].[ModifiedOnBehalfBy] = [lk_pricelevelbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_price_levels] with(nolock) on ([PriceLevelBase].[OrganizationId] = [organization_price_levels].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_pricelevel] on ([PriceLevelBase].[TransactionCurrencyId] = [transactioncurrency_pricelevel].[TransactionCurrencyId])
