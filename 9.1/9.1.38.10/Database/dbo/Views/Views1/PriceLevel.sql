


--
-- base view for PriceLevel
--
create view dbo.[PriceLevel]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [OrganizationIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- physical attributes
    [PriceLevelId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [BeginDate],
    [Description],
    [EndDate],
    [FreightTermsCode],
    [PaymentMethodCode],
    [ShippingMethodCode],
    [StateCode],
    [StatusCode],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [transactioncurrency_pricelevel].[CurrencyName],
    [organization_price_levels].[Name],
    [lk_pricelevelbase_modifiedonbehalfby].[FullName],
    [lk_pricelevelbase_modifiedonbehalfby].[YomiFullName],
    [lk_pricelevelbase_createdonbehalfby].[FullName],
    [lk_pricelevelbase_createdonbehalfby].[YomiFullName],
    [lk_pricelevelbase_createdby].[FullName],
    [lk_pricelevelbase_createdby].[YomiFullName],
    [lk_pricelevelbase_modifiedby].[FullName],
    [lk_pricelevelbase_modifiedby].[YomiFullName],

    -- physical attribute
    [PriceLevelBase].[PriceLevelId],
    [PriceLevelBase].[CreatedOn],
    [PriceLevelBase].[CreatedBy],
    [PriceLevelBase].[ModifiedOn],
    [PriceLevelBase].[ModifiedBy],
    [PriceLevelBase].[CreatedOnBehalfBy],
    [PriceLevelBase].[ModifiedOnBehalfBy],
    [PriceLevelBase].[OrganizationId],
    [PriceLevelBase].[VersionNumber],
    [PriceLevelBase].[ImportSequenceNumber],
    [PriceLevelBase].[OverriddenCreatedOn],
    [PriceLevelBase].[TimeZoneRuleVersionNumber],
    [PriceLevelBase].[UTCConversionTimeZoneCode],
    [PriceLevelBase].[Name],
    [PriceLevelBase].[BeginDate],
    [PriceLevelBase].[Description],
    [PriceLevelBase].[EndDate],
    [PriceLevelBase].[FreightTermsCode],
    [PriceLevelBase].[PaymentMethodCode],
    [PriceLevelBase].[ShippingMethodCode],
    [PriceLevelBase].[StateCode],
    [PriceLevelBase].[StatusCode],
    [PriceLevelBase].[ExchangeRate],
    [PriceLevelBase].[TransactionCurrencyId]
from [PriceLevelBase] 
    left join [SystemUserBase] [lk_pricelevelbase_createdby] on ([PriceLevelBase].[CreatedBy] = [lk_pricelevelbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_pricelevelbase_createdonbehalfby] on ([PriceLevelBase].[CreatedOnBehalfBy] = [lk_pricelevelbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_pricelevelbase_modifiedby] on ([PriceLevelBase].[ModifiedBy] = [lk_pricelevelbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_pricelevelbase_modifiedonbehalfby] on ([PriceLevelBase].[ModifiedOnBehalfBy] = [lk_pricelevelbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_price_levels] on ([PriceLevelBase].[OrganizationId] = [organization_price_levels].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_pricelevel] on ([PriceLevelBase].[TransactionCurrencyId] = [transactioncurrency_pricelevel].[TransactionCurrencyId])
