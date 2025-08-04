


--
-- base view for DynamicPropertyAssociation
--
create view dbo.[DynamicPropertyAssociation]
 (
    -- logical attributes
    [DynamicPropertyIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [RegardingObjectIdName],

    -- physical attributes
    [DynamicPropertyAssociationId],
    [RegardingObjectid],
    [VersionNumber],
    [DynamicPropertyId],
    [AssociationStatus],
    [InheritanceState],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [ExchangeRate],
    [TransactionCurrencyId],
    [RegardingObjectTypeCode]
) with view_metadata as
select
    -- logical attributes
    [Dynamicproperty_DynamicPropertyAssociation].[Name],
    [lk_DynamicPropertyAssociationattribute_ModifiedOnBehalfBy].[FullName],
    [lk_DynamicPropertyAssociationattribute_ModifiedOnBehalfBy].[YomiFullName],
    [lk_DynamicPropertyAssociationattribute_createdby].[FullName],
    [lk_DynamicPropertyAssociationattribute_createdby].[YomiFullName],
    [lk_DynamicPropertyAssociationattribute_ModifiedBy].[FullName],
    [lk_DynamicPropertyAssociationattribute_ModifiedBy].[YomiFullName],
    [DynamicPropertyAssociation_organization].[Name],
    [lk_DynamicPropertyAssociationattribute_CreatedOnBehalfBy].[FullName],
    [lk_DynamicPropertyAssociationattribute_CreatedOnBehalfBy].[YomiFullName],
    [DynamicPropertyAssociation_TransactionCurrency].[CurrencyName],
    [Product_DynamicPropertyAssociation].[Name],

    -- physical attribute
    [DynamicPropertyAssociationBase].[DynamicPropertyAssociationId],
    [DynamicPropertyAssociationBase].[RegardingObjectid],
    [DynamicPropertyAssociationBase].[VersionNumber],
    [DynamicPropertyAssociationBase].[DynamicPropertyId],
    [DynamicPropertyAssociationBase].[AssociationStatus],
    [DynamicPropertyAssociationBase].[InheritanceState],
    [DynamicPropertyAssociationBase].[CreatedBy],
    [DynamicPropertyAssociationBase].[CreatedOn],
    [DynamicPropertyAssociationBase].[CreatedOnBehalfBy],
    [DynamicPropertyAssociationBase].[ModifiedBy],
    [DynamicPropertyAssociationBase].[ModifiedOn],
    [DynamicPropertyAssociationBase].[ModifiedOnBehalfBy],
    [DynamicPropertyAssociationBase].[OrganizationId],
    [DynamicPropertyAssociationBase].[ImportSequenceNumber],
    [DynamicPropertyAssociationBase].[OverriddenCreatedOn],
    [DynamicPropertyAssociationBase].[ExchangeRate],
    [DynamicPropertyAssociationBase].[TransactionCurrencyId],
    [DynamicPropertyAssociationBase].[RegardingObjectTypeCode]
from [DynamicPropertyAssociationBase] 
    left join [DynamicPropertyBase] [Dynamicproperty_DynamicPropertyAssociation] on ([DynamicPropertyAssociationBase].[DynamicPropertyId] = [Dynamicproperty_DynamicPropertyAssociation].[DynamicPropertyId])
    left join [OrganizationBase] [DynamicPropertyAssociation_organization] with(nolock) on ([DynamicPropertyAssociationBase].[OrganizationId] = [DynamicPropertyAssociation_organization].[OrganizationId])
    left join [TransactionCurrencyBase] [DynamicPropertyAssociation_TransactionCurrency] on ([DynamicPropertyAssociationBase].[TransactionCurrencyId] = [DynamicPropertyAssociation_TransactionCurrency].[TransactionCurrencyId])
    left join [SystemUserBase] [lk_DynamicPropertyAssociationattribute_createdby] with(nolock) on ([DynamicPropertyAssociationBase].[CreatedBy] = [lk_DynamicPropertyAssociationattribute_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicPropertyAssociationattribute_CreatedOnBehalfBy] with(nolock) on ([DynamicPropertyAssociationBase].[CreatedOnBehalfBy] = [lk_DynamicPropertyAssociationattribute_CreatedOnBehalfBy].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicPropertyAssociationattribute_ModifiedBy] with(nolock) on ([DynamicPropertyAssociationBase].[ModifiedBy] = [lk_DynamicPropertyAssociationattribute_ModifiedBy].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicPropertyAssociationattribute_ModifiedOnBehalfBy] with(nolock) on ([DynamicPropertyAssociationBase].[ModifiedOnBehalfBy] = [lk_DynamicPropertyAssociationattribute_ModifiedOnBehalfBy].[SystemUserId])
    left join [ProductBase] [Product_DynamicPropertyAssociation] on ([DynamicPropertyAssociationBase].[RegardingObjectid] = [Product_DynamicPropertyAssociation].[ProductId])
