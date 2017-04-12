SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for DynamicPropertyOptionSetItem
--
create view [dbo].[DynamicPropertyOptionSetItem]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [OrganizationIdName],
    [DynamicPropertyIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OverriddenCreatedOn],
    [DynamicPropertyOptionName],
    [DynamicPropertyOptionValue],
    [DynamicPropertyOptionDescription],
    [DynamicPropertyId],
    [DynamicPropertyOptionSetValueId],
    [VersionNumber],
    [OrganizationId],
    [ImportSequenceNumber],
    [ExchangeRate],
    [TransactionCurrencyId],
    [DynamicPropertyOptionSetValueSequenceNumber]
) with view_metadata as
select
    -- logical attributes
    [lk_DynamicPropertyOptionSetItem_modifiedonbehalfby].[YomiFullName],
    [lk_DynamicPropertyOptionSetItem_modifiedonbehalfby].[FullName],
    [lk_DynamicPropertyOptionSetItem_modifiedby].[YomiFullName],
    [lk_DynamicPropertyOptionSetItem_modifiedby].[FullName],
    [lk_DynamicPropertyOptionSetItem_createdonbehalfby].[YomiFullName],
    [lk_DynamicPropertyOptionSetItem_createdonbehalfby].[FullName],
    [DynamicPropertyOptionSetItem_organization].[Name],
    [DynamicProperty_DynamicPropertyOptionSetItem].[Name],
    [lk_DynamicPropertyOptionSetItem_createdby].[FullName],
    [lk_DynamicPropertyOptionSetItem_createdby].[YomiFullName],
    [DynamicPropertyOptionSetItem_TransactionCurrency].[CurrencyName],

    -- physical attribute
    [DynamicPropertyOptionSetItemBase].[CreatedBy],
    [DynamicPropertyOptionSetItemBase].[CreatedOn],
    [DynamicPropertyOptionSetItemBase].[CreatedOnBehalfBy],
    [DynamicPropertyOptionSetItemBase].[ModifiedBy],
    [DynamicPropertyOptionSetItemBase].[ModifiedOn],
    [DynamicPropertyOptionSetItemBase].[ModifiedOnBehalfBy],
    [DynamicPropertyOptionSetItemBase].[OverriddenCreatedOn],
    [DynamicPropertyOptionSetItemBase].[DynamicPropertyOptionName],
    [DynamicPropertyOptionSetItemBase].[DynamicPropertyOptionValue],
    [DynamicPropertyOptionSetItemBase].[DynamicPropertyOptionDescription],
    [DynamicPropertyOptionSetItemBase].[DynamicPropertyId],
    [DynamicPropertyOptionSetItemBase].[DynamicPropertyOptionSetValueId],
    [DynamicPropertyOptionSetItemBase].[VersionNumber],
    [DynamicPropertyOptionSetItemBase].[OrganizationId],
    [DynamicPropertyOptionSetItemBase].[ImportSequenceNumber],
    [DynamicPropertyOptionSetItemBase].[ExchangeRate],
    [DynamicPropertyOptionSetItemBase].[TransactionCurrencyId],
    [DynamicPropertyOptionSetItemBase].[DynamicPropertyOptionSetValueSequenceNumber]
from [DynamicPropertyOptionSetItemBase] 
    left join [DynamicPropertyBase] [DynamicProperty_DynamicPropertyOptionSetItem] on ([DynamicPropertyOptionSetItemBase].[DynamicPropertyId] = [DynamicProperty_DynamicPropertyOptionSetItem].[DynamicPropertyId])
    left join [OrganizationBase] [DynamicPropertyOptionSetItem_organization] with(nolock) on ([DynamicPropertyOptionSetItemBase].[OrganizationId] = [DynamicPropertyOptionSetItem_organization].[OrganizationId])
    left join [TransactionCurrencyBase] [DynamicPropertyOptionSetItem_TransactionCurrency] on ([DynamicPropertyOptionSetItemBase].[TransactionCurrencyId] = [DynamicPropertyOptionSetItem_TransactionCurrency].[TransactionCurrencyId])
    left join [SystemUserBase] [lk_DynamicPropertyOptionSetItem_createdby] with(nolock) on ([DynamicPropertyOptionSetItemBase].[CreatedBy] = [lk_DynamicPropertyOptionSetItem_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicPropertyOptionSetItem_createdonbehalfby] with(nolock) on ([DynamicPropertyOptionSetItemBase].[CreatedOnBehalfBy] = [lk_DynamicPropertyOptionSetItem_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicPropertyOptionSetItem_modifiedby] with(nolock) on ([DynamicPropertyOptionSetItemBase].[ModifiedBy] = [lk_DynamicPropertyOptionSetItem_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicPropertyOptionSetItem_modifiedonbehalfby] with(nolock) on ([DynamicPropertyOptionSetItemBase].[ModifiedOnBehalfBy] = [lk_DynamicPropertyOptionSetItem_modifiedonbehalfby].[SystemUserId])
GO
