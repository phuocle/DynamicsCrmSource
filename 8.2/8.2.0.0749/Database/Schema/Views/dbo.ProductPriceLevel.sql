SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for ProductPriceLevel
--
create view [dbo].[ProductPriceLevel]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [DiscountTypeIdName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [UoMScheduleIdName],
    [PriceLevelIdName],
    [OrganizationId],
    [UoMIdName],
    [TransactionCurrencyIdName],
    [ProductIdName],
    [ProductNumber],

    -- physical attributes
    [PriceLevelId],
    [ProductPriceLevelId],
    [UoMId],
    [UoMScheduleId],
    [DiscountTypeId],
    [ProductId],
    [Percentage],
    [Amount],
    [CreatedOn],
    [QuantitySellingCode],
    [RoundingPolicyCode],
    [ModifiedOn],
    [PricingMethodCode],
    [RoundingOptionCode],
    [RoundingOptionAmount],
    [VersionNumber],
    [CreatedBy],
    [ModifiedBy],
    [ExchangeRate],
    [TransactionCurrencyId],
    [OverriddenCreatedOn],
    [ImportSequenceNumber],
    [Amount_Base],
    [RoundingOptionAmount_Base],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ProcessId],
    [StageId],
    [TraversedPath]
) with view_metadata as
select
    -- logical attributes
    [lk_productpricelevelbase_modifiedonbehalfby].[YomiFullName],
    [lk_productpricelevelbase_modifiedonbehalfby].[FullName],
    [discount_type_product_price_levels].[Name],
    [lk_productpricelevelbase_modifiedby].[YomiFullName],
    [lk_productpricelevelbase_modifiedby].[FullName],
    [lk_productpricelevelbase_createdby].[YomiFullName],
    [lk_productpricelevelbase_createdby].[FullName],
    [lk_productpricelevelbase_createdonbehalfby].[FullName],
    [lk_productpricelevelbase_createdonbehalfby].[YomiFullName],
    [unit_of_measure_schedule_product_price_level].[Name],
    [price_level_product_price_levels].[Name],
    [price_level_product_price_levels].[OrganizationId],
    [unit_of_measurement_product_price_levels].[Name],
    [transactioncurrency_productpricelevel].[CurrencyName],
    [product_price_levels].[Name],
    [product_price_levels].[ProductNumber],

    -- physical attribute
    [ProductPriceLevelBase].[PriceLevelId],
    [ProductPriceLevelBase].[ProductPriceLevelId],
    [ProductPriceLevelBase].[UoMId],
    [ProductPriceLevelBase].[UoMScheduleId],
    [ProductPriceLevelBase].[DiscountTypeId],
    [ProductPriceLevelBase].[ProductId],
    [ProductPriceLevelBase].[Percentage],
    [ProductPriceLevelBase].[Amount],
    [ProductPriceLevelBase].[CreatedOn],
    [ProductPriceLevelBase].[QuantitySellingCode],
    [ProductPriceLevelBase].[RoundingPolicyCode],
    [ProductPriceLevelBase].[ModifiedOn],
    [ProductPriceLevelBase].[PricingMethodCode],
    [ProductPriceLevelBase].[RoundingOptionCode],
    [ProductPriceLevelBase].[RoundingOptionAmount],
    [ProductPriceLevelBase].[VersionNumber],
    [ProductPriceLevelBase].[CreatedBy],
    [ProductPriceLevelBase].[ModifiedBy],
    [ProductPriceLevelBase].[ExchangeRate],
    [ProductPriceLevelBase].[TransactionCurrencyId],
    [ProductPriceLevelBase].[OverriddenCreatedOn],
    [ProductPriceLevelBase].[ImportSequenceNumber],
    [ProductPriceLevelBase].[Amount_Base],
    [ProductPriceLevelBase].[RoundingOptionAmount_Base],
    [ProductPriceLevelBase].[CreatedOnBehalfBy],
    [ProductPriceLevelBase].[ModifiedOnBehalfBy],
    [ProductPriceLevelBase].[ProcessId],
    [ProductPriceLevelBase].[StageId],
    [ProductPriceLevelBase].[TraversedPath]
from [ProductPriceLevelBase] 
    left join [DiscountTypeBase] [discount_type_product_price_levels] on ([ProductPriceLevelBase].[DiscountTypeId] = [discount_type_product_price_levels].[DiscountTypeId])
    left join [SystemUserBase] [lk_productpricelevelbase_createdby] with(nolock) on ([ProductPriceLevelBase].[CreatedBy] = [lk_productpricelevelbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_productpricelevelbase_createdonbehalfby] with(nolock) on ([ProductPriceLevelBase].[CreatedOnBehalfBy] = [lk_productpricelevelbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_productpricelevelbase_modifiedby] with(nolock) on ([ProductPriceLevelBase].[ModifiedBy] = [lk_productpricelevelbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_productpricelevelbase_modifiedonbehalfby] with(nolock) on ([ProductPriceLevelBase].[ModifiedOnBehalfBy] = [lk_productpricelevelbase_modifiedonbehalfby].[SystemUserId])
    left join [PriceLevelBase] [price_level_product_price_levels] on ([ProductPriceLevelBase].[PriceLevelId] = [price_level_product_price_levels].[PriceLevelId])
    left join [ProductBase] [product_price_levels] on ([ProductPriceLevelBase].[ProductId] = [product_price_levels].[ProductId])
    left join [TransactionCurrencyBase] [transactioncurrency_productpricelevel] on ([ProductPriceLevelBase].[TransactionCurrencyId] = [transactioncurrency_productpricelevel].[TransactionCurrencyId])
    left join [UoMScheduleBase] [unit_of_measure_schedule_product_price_level] on ([ProductPriceLevelBase].[UoMScheduleId] = [unit_of_measure_schedule_product_price_level].[UoMScheduleId])
    left join [UoMBase] [unit_of_measurement_product_price_levels] on ([ProductPriceLevelBase].[UoMId] = [unit_of_measurement_product_price_levels].[UoMId])
GO
