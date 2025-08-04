


--
-- base view for ProductPriceLevel
--
create view dbo.[ProductPriceLevel]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [UoMIdName],
    [UoMScheduleIdName],
    [ProductIdName],
    [DiscountTypeIdName],
    [PriceLevelIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ProductNumber],
    [OrganizationId],

    -- physical attributes
    [ProductPriceLevelId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [Amount],
    [TransactionCurrencyId],
    [ExchangeRate],
    [Amount_Base],
    [Percentage],
    [PriceLevelId],
    [PricingMethodCode],
    [ProductId],
    [QuantitySellingCode],
    [RoundingOptionAmount],
    [RoundingOptionAmount_Base],
    [RoundingOptionCode],
    [RoundingPolicyCode],
    [UoMId],
    [UoMScheduleId],
    [DiscountTypeId]
) with view_metadata as
select
    -- logical attributes
    [transactioncurrency_productpricelevel].[CurrencyName],
    [unit_of_measurement_product_price_levels].[Name],
    [unit_of_measure_schedule_product_price_level].[Name],
    [product_price_levels].[Name],
    [discount_type_product_price_levels].[Name],
    [price_level_product_price_levels].[Name],
    [lk_productpricelevelbase_createdby].[FullName],
    [lk_productpricelevelbase_createdby].[YomiFullName],
    [lk_productpricelevelbase_createdonbehalfby].[FullName],
    [lk_productpricelevelbase_createdonbehalfby].[YomiFullName],
    [lk_productpricelevelbase_modifiedby].[FullName],
    [lk_productpricelevelbase_modifiedby].[YomiFullName],
    [lk_productpricelevelbase_modifiedonbehalfby].[FullName],
    [lk_productpricelevelbase_modifiedonbehalfby].[YomiFullName],
    [product_price_levels].[ProductNumber],
    [price_level_product_price_levels].[OrganizationId],

    -- physical attribute
    [ProductPriceLevelBase].[ProductPriceLevelId],
    [ProductPriceLevelBase].[CreatedOn],
    [ProductPriceLevelBase].[CreatedBy],
    [ProductPriceLevelBase].[ModifiedOn],
    [ProductPriceLevelBase].[ModifiedBy],
    [ProductPriceLevelBase].[CreatedOnBehalfBy],
    [ProductPriceLevelBase].[ModifiedOnBehalfBy],
    [ProductPriceLevelBase].[VersionNumber],
    [ProductPriceLevelBase].[ImportSequenceNumber],
    [ProductPriceLevelBase].[OverriddenCreatedOn],
    [ProductPriceLevelBase].[TimeZoneRuleVersionNumber],
    [ProductPriceLevelBase].[UTCConversionTimeZoneCode],
    [ProductPriceLevelBase].[ProcessId],
    [ProductPriceLevelBase].[StageId],
    [ProductPriceLevelBase].[TraversedPath],
    [ProductPriceLevelBase].[Amount],
    [ProductPriceLevelBase].[TransactionCurrencyId],
    [ProductPriceLevelBase].[ExchangeRate],
    [ProductPriceLevelBase].[Amount_Base],
    [ProductPriceLevelBase].[Percentage],
    [ProductPriceLevelBase].[PriceLevelId],
    [ProductPriceLevelBase].[PricingMethodCode],
    [ProductPriceLevelBase].[ProductId],
    [ProductPriceLevelBase].[QuantitySellingCode],
    [ProductPriceLevelBase].[RoundingOptionAmount],
    [ProductPriceLevelBase].[RoundingOptionAmount_Base],
    [ProductPriceLevelBase].[RoundingOptionCode],
    [ProductPriceLevelBase].[RoundingPolicyCode],
    [ProductPriceLevelBase].[UoMId],
    [ProductPriceLevelBase].[UoMScheduleId],
    [ProductPriceLevelBase].[DiscountTypeId]
from [ProductPriceLevelBase] 
    left join [DiscountTypeBase] [discount_type_product_price_levels] on ([ProductPriceLevelBase].[DiscountTypeId] = [discount_type_product_price_levels].[DiscountTypeId])
    left join [SystemUserBase] [lk_productpricelevelbase_createdby] on ([ProductPriceLevelBase].[CreatedBy] = [lk_productpricelevelbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_productpricelevelbase_createdonbehalfby] on ([ProductPriceLevelBase].[CreatedOnBehalfBy] = [lk_productpricelevelbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_productpricelevelbase_modifiedby] on ([ProductPriceLevelBase].[ModifiedBy] = [lk_productpricelevelbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_productpricelevelbase_modifiedonbehalfby] on ([ProductPriceLevelBase].[ModifiedOnBehalfBy] = [lk_productpricelevelbase_modifiedonbehalfby].[SystemUserId])
    left join [PriceLevelBase] [price_level_product_price_levels] on ([ProductPriceLevelBase].[PriceLevelId] = [price_level_product_price_levels].[PriceLevelId])
    left join [ProductBase] [product_price_levels] on ([ProductPriceLevelBase].[ProductId] = [product_price_levels].[ProductId])
    left join [TransactionCurrencyBase] [transactioncurrency_productpricelevel] on ([ProductPriceLevelBase].[TransactionCurrencyId] = [transactioncurrency_productpricelevel].[TransactionCurrencyId])
    left join [UoMScheduleBase] [unit_of_measure_schedule_product_price_level] on ([ProductPriceLevelBase].[UoMScheduleId] = [unit_of_measure_schedule_product_price_level].[UoMScheduleId])
    left join [UoMBase] [unit_of_measurement_product_price_levels] on ([ProductPriceLevelBase].[UoMId] = [unit_of_measurement_product_price_levels].[UoMId])
