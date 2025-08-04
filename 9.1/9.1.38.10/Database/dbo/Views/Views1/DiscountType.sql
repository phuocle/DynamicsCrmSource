


--
-- base view for DiscountType
--
create view dbo.[DiscountType]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],

    -- physical attributes
    [DiscountTypeId],
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
    [Description],
    [IsAmountType],
    [StateCode],
    [StatusCode],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [transactioncurrency_discounttype].[CurrencyName],
    [lk_discounttypebase_createdby].[FullName],
    [lk_discounttypebase_createdby].[YomiFullName],
    [lk_discounttypebase_createdonbehalfby].[FullName],
    [lk_discounttypebase_createdonbehalfby].[YomiFullName],
    [lk_discounttypebase_modifiedby].[FullName],
    [lk_discounttypebase_modifiedby].[YomiFullName],
    [lk_discounttypebase_modifiedonbehalfby].[FullName],
    [lk_discounttypebase_modifiedonbehalfby].[YomiFullName],
    [organization_discount_types].[Name],

    -- physical attribute
    [DiscountTypeBase].[DiscountTypeId],
    [DiscountTypeBase].[CreatedOn],
    [DiscountTypeBase].[CreatedBy],
    [DiscountTypeBase].[ModifiedOn],
    [DiscountTypeBase].[ModifiedBy],
    [DiscountTypeBase].[CreatedOnBehalfBy],
    [DiscountTypeBase].[ModifiedOnBehalfBy],
    [DiscountTypeBase].[OrganizationId],
    [DiscountTypeBase].[VersionNumber],
    [DiscountTypeBase].[ImportSequenceNumber],
    [DiscountTypeBase].[OverriddenCreatedOn],
    [DiscountTypeBase].[TimeZoneRuleVersionNumber],
    [DiscountTypeBase].[UTCConversionTimeZoneCode],
    [DiscountTypeBase].[Name],
    [DiscountTypeBase].[Description],
    [DiscountTypeBase].[IsAmountType],
    [DiscountTypeBase].[StateCode],
    [DiscountTypeBase].[StatusCode],
    [DiscountTypeBase].[TransactionCurrencyId]
from [DiscountTypeBase] 
    left join [SystemUserBase] [lk_discounttypebase_createdby] on ([DiscountTypeBase].[CreatedBy] = [lk_discounttypebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_discounttypebase_createdonbehalfby] on ([DiscountTypeBase].[CreatedOnBehalfBy] = [lk_discounttypebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_discounttypebase_modifiedby] on ([DiscountTypeBase].[ModifiedBy] = [lk_discounttypebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_discounttypebase_modifiedonbehalfby] on ([DiscountTypeBase].[ModifiedOnBehalfBy] = [lk_discounttypebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_discount_types] on ([DiscountTypeBase].[OrganizationId] = [organization_discount_types].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_discounttype] on ([DiscountTypeBase].[TransactionCurrencyId] = [transactioncurrency_discounttype].[TransactionCurrencyId])
