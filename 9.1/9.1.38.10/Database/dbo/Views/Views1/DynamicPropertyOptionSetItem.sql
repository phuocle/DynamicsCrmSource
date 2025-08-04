


--
-- base view for DynamicPropertyOptionSetItem
--
create view dbo.[DynamicPropertyOptionSetItem]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [DynamicPropertyIdName],
    [OrganizationIdName],
    [TransactionCurrencyIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],

    -- physical attributes
    [DynamicPropertyOptionSetValueId],
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
    [DynamicPropertyOptionName],
    [DynamicPropertyOptionValue],
    [DynamicPropertyOptionDescription],
    [DynamicPropertyId],
    [DynamicPropertyOptionSetValueSequenceNumber],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_DynamicPropertyOptionSetItem_modifiedby].[FullName],
    [lk_DynamicPropertyOptionSetItem_modifiedby].[YomiFullName],
    [lk_DynamicPropertyOptionSetItem_createdonbehalfby].[FullName],
    [lk_DynamicPropertyOptionSetItem_createdonbehalfby].[YomiFullName],
    [DynamicProperty_DynamicPropertyOptionSetItem].[Name],
    [DynamicPropertyOptionSetItem_organization].[Name],
    [DynamicPropertyOptionSetItem_TransactionCurrency].[CurrencyName],
    [lk_DynamicPropertyOptionSetItem_modifiedonbehalfby].[FullName],
    [lk_DynamicPropertyOptionSetItem_modifiedonbehalfby].[YomiFullName],
    [lk_DynamicPropertyOptionSetItem_createdby].[FullName],
    [lk_DynamicPropertyOptionSetItem_createdby].[YomiFullName],

    -- physical attribute
    [DynamicPropertyOptionSetItemBase].[DynamicPropertyOptionSetValueId],
    [DynamicPropertyOptionSetItemBase].[CreatedOn],
    [DynamicPropertyOptionSetItemBase].[CreatedBy],
    [DynamicPropertyOptionSetItemBase].[ModifiedOn],
    [DynamicPropertyOptionSetItemBase].[ModifiedBy],
    [DynamicPropertyOptionSetItemBase].[CreatedOnBehalfBy],
    [DynamicPropertyOptionSetItemBase].[ModifiedOnBehalfBy],
    [DynamicPropertyOptionSetItemBase].[OrganizationId],
    [DynamicPropertyOptionSetItemBase].[VersionNumber],
    [DynamicPropertyOptionSetItemBase].[ImportSequenceNumber],
    [DynamicPropertyOptionSetItemBase].[OverriddenCreatedOn],
    [DynamicPropertyOptionSetItemBase].[TimeZoneRuleVersionNumber],
    [DynamicPropertyOptionSetItemBase].[UTCConversionTimeZoneCode],
    [DynamicPropertyOptionSetItemBase].[DynamicPropertyOptionName],
    [DynamicPropertyOptionSetItemBase].[DynamicPropertyOptionValue],
    [DynamicPropertyOptionSetItemBase].[DynamicPropertyOptionDescription],
    [DynamicPropertyOptionSetItemBase].[DynamicPropertyId],
    [DynamicPropertyOptionSetItemBase].[DynamicPropertyOptionSetValueSequenceNumber],
    [DynamicPropertyOptionSetItemBase].[ExchangeRate],
    [DynamicPropertyOptionSetItemBase].[TransactionCurrencyId]
from [DynamicPropertyOptionSetItemBase] 
    left join [DynamicPropertyBase] [DynamicProperty_DynamicPropertyOptionSetItem] on ([DynamicPropertyOptionSetItemBase].[DynamicPropertyId] = [DynamicProperty_DynamicPropertyOptionSetItem].[DynamicPropertyId])
    left join [OrganizationBase] [DynamicPropertyOptionSetItem_organization] on ([DynamicPropertyOptionSetItemBase].[OrganizationId] = [DynamicPropertyOptionSetItem_organization].[OrganizationId])
    left join [TransactionCurrencyBase] [DynamicPropertyOptionSetItem_TransactionCurrency] on ([DynamicPropertyOptionSetItemBase].[TransactionCurrencyId] = [DynamicPropertyOptionSetItem_TransactionCurrency].[TransactionCurrencyId])
    left join [SystemUserBase] [lk_DynamicPropertyOptionSetItem_createdby] on ([DynamicPropertyOptionSetItemBase].[CreatedBy] = [lk_DynamicPropertyOptionSetItem_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicPropertyOptionSetItem_createdonbehalfby] on ([DynamicPropertyOptionSetItemBase].[CreatedOnBehalfBy] = [lk_DynamicPropertyOptionSetItem_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicPropertyOptionSetItem_modifiedby] on ([DynamicPropertyOptionSetItemBase].[ModifiedBy] = [lk_DynamicPropertyOptionSetItem_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicPropertyOptionSetItem_modifiedonbehalfby] on ([DynamicPropertyOptionSetItemBase].[ModifiedOnBehalfBy] = [lk_DynamicPropertyOptionSetItem_modifiedonbehalfby].[SystemUserId])
