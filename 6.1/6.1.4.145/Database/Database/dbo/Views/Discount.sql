


--
-- base view for Discount
--
create view dbo.[Discount]
 (
    -- logical attributes
    [DiscountTypeIdName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OrganizationId],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [CreatedByName],
    [ModifiedByName],
    [IsAmountType],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [DiscountId],
    [DiscountTypeId],
    [LowQuantity],
    [HighQuantity],
    [Percentage],
    [Amount],
    [StatusCode],
    [CreatedOn],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [OverriddenCreatedOn],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ImportSequenceNumber],
    [Amount_Base],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [discount_type_discounts].[Name],
    [lk_discountbase_modifiedonbehalfby].[FullName],
    [lk_discountbase_createdonbehalfby].[YomiFullName],
    [discount_type_discounts].[OrganizationId],
    [lk_discountbase_modifiedonbehalfby].[YomiFullName],
    [lk_discountbase_modifiedby].[YomiFullName],
    [lk_discountbase_createdby].[FullName],
    [lk_discountbase_modifiedby].[FullName],
    [discount_type_discounts].[IsAmountType],
    [lk_discountbase_createdby].[YomiFullName],
    [lk_discountbase_createdonbehalfby].[FullName],
    [transactioncurrency_discount].[CurrencyName],

    -- physical attribute
    [DiscountBase].[DiscountId],
    [DiscountBase].[DiscountTypeId],
    [DiscountBase].[LowQuantity],
    [DiscountBase].[HighQuantity],
    [DiscountBase].[Percentage],
    [DiscountBase].[Amount],
    [DiscountBase].[StatusCode],
    [DiscountBase].[CreatedOn],
    [DiscountBase].[CreatedBy],
    [DiscountBase].[ModifiedBy],
    [DiscountBase].[ModifiedOn],
    [DiscountBase].[VersionNumber],
    [DiscountBase].[OverriddenCreatedOn],
    [DiscountBase].[TransactionCurrencyId],
    [DiscountBase].[ExchangeRate],
    [DiscountBase].[ImportSequenceNumber],
    [DiscountBase].[Amount_Base],
    [DiscountBase].[CreatedOnBehalfBy],
    [DiscountBase].[ModifiedOnBehalfBy]
from [DiscountBase] 
    left join [DiscountTypeBase] [discount_type_discounts] on ([DiscountBase].[DiscountTypeId] = [discount_type_discounts].[DiscountTypeId])
    left join [SystemUserBase] [lk_discountbase_createdby] with(nolock) on ([DiscountBase].[CreatedBy] = [lk_discountbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_discountbase_createdonbehalfby] with(nolock) on ([DiscountBase].[CreatedOnBehalfBy] = [lk_discountbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_discountbase_modifiedby] with(nolock) on ([DiscountBase].[ModifiedBy] = [lk_discountbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_discountbase_modifiedonbehalfby] with(nolock) on ([DiscountBase].[ModifiedOnBehalfBy] = [lk_discountbase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_discount] on ([DiscountBase].[TransactionCurrencyId] = [transactioncurrency_discount].[TransactionCurrencyId])
