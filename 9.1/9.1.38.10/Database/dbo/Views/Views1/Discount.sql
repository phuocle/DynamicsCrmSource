


--
-- base view for Discount
--
create view dbo.[Discount]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [OrganizationId],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [IsAmountType],
    [DiscountTypeIdName],

    -- physical attributes
    [DiscountId],
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
    [Name],
    [Amount],
    [TransactionCurrencyId],
    [ExchangeRate],
    [Amount_Base],
    [DiscountTypeId],
    [HighQuantity],
    [LowQuantity],
    [Percentage],
    [StatusCode]
) with view_metadata as
select
    -- logical attributes
    [transactioncurrency_discount].[CurrencyName],
    [discount_type_discounts].[OrganizationId],
    [lk_discountbase_createdby].[FullName],
    [lk_discountbase_createdby].[YomiFullName],
    [lk_discountbase_createdonbehalfby].[FullName],
    [lk_discountbase_createdonbehalfby].[YomiFullName],
    [lk_discountbase_modifiedby].[FullName],
    [lk_discountbase_modifiedby].[YomiFullName],
    [lk_discountbase_modifiedonbehalfby].[FullName],
    [lk_discountbase_modifiedonbehalfby].[YomiFullName],
    [discount_type_discounts].[IsAmountType],
    [discount_type_discounts].[Name],

    -- physical attribute
    [DiscountBase].[DiscountId],
    [DiscountBase].[CreatedOn],
    [DiscountBase].[CreatedBy],
    [DiscountBase].[ModifiedOn],
    [DiscountBase].[ModifiedBy],
    [DiscountBase].[CreatedOnBehalfBy],
    [DiscountBase].[ModifiedOnBehalfBy],
    [DiscountBase].[VersionNumber],
    [DiscountBase].[ImportSequenceNumber],
    [DiscountBase].[OverriddenCreatedOn],
    [DiscountBase].[TimeZoneRuleVersionNumber],
    [DiscountBase].[UTCConversionTimeZoneCode],
    [DiscountBase].[Name],
    [DiscountBase].[Amount],
    [DiscountBase].[TransactionCurrencyId],
    [DiscountBase].[ExchangeRate],
    [DiscountBase].[Amount_Base],
    [DiscountBase].[DiscountTypeId],
    [DiscountBase].[HighQuantity],
    [DiscountBase].[LowQuantity],
    [DiscountBase].[Percentage],
    [DiscountBase].[StatusCode]
from [DiscountBase] 
    left join [DiscountTypeBase] [discount_type_discounts] on ([DiscountBase].[DiscountTypeId] = [discount_type_discounts].[DiscountTypeId])
    left join [SystemUserBase] [lk_discountbase_createdby] on ([DiscountBase].[CreatedBy] = [lk_discountbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_discountbase_createdonbehalfby] on ([DiscountBase].[CreatedOnBehalfBy] = [lk_discountbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_discountbase_modifiedby] on ([DiscountBase].[ModifiedBy] = [lk_discountbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_discountbase_modifiedonbehalfby] on ([DiscountBase].[ModifiedOnBehalfBy] = [lk_discountbase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_discount] on ([DiscountBase].[TransactionCurrencyId] = [transactioncurrency_discount].[TransactionCurrencyId])
