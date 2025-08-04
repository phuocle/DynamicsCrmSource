


--
-- base view for DynamicPropertyAssociation
--
create view dbo.[DynamicPropertyAssociation]
 (
    -- logical attributes
    [OrganizationIdName],
    [TransactionCurrencyIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [RegardingObjectIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [DynamicPropertyIdName],

    -- physical attributes
    [DynamicPropertyAssociationId],
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
    [RegardingObjectid],
    [DynamicPropertyId],
    [AssociationStatus],
    [InheritanceState],
    [ExchangeRate],
    [TransactionCurrencyId],
    [RegardingObjectTypeCode],
    [RegardingObjectIdYomiName]
) with view_metadata as
select
    -- logical attributes
    [DynamicPropertyAssociation_organization].[Name],
    [DynamicPropertyAssociation_TransactionCurrency].[CurrencyName],
    [lk_DynamicPropertyAssociationattribute_ModifiedOnBehalfBy].[FullName],
    [lk_DynamicPropertyAssociationattribute_ModifiedOnBehalfBy].[YomiFullName],
    [lk_DynamicPropertyAssociationattribute_CreatedOnBehalfBy].[FullName],
    [lk_DynamicPropertyAssociationattribute_CreatedOnBehalfBy].[YomiFullName],
    [Product_DynamicPropertyAssociation].[Name],
    [lk_DynamicPropertyAssociationattribute_createdby].[FullName],
    [lk_DynamicPropertyAssociationattribute_createdby].[YomiFullName],
    [lk_DynamicPropertyAssociationattribute_ModifiedBy].[FullName],
    [lk_DynamicPropertyAssociationattribute_ModifiedBy].[YomiFullName],
    [Dynamicproperty_DynamicPropertyAssociation].[Name],

    -- physical attribute
    [DynamicPropertyAssociationBase].[DynamicPropertyAssociationId],
    [DynamicPropertyAssociationBase].[CreatedOn],
    [DynamicPropertyAssociationBase].[CreatedBy],
    [DynamicPropertyAssociationBase].[ModifiedOn],
    [DynamicPropertyAssociationBase].[ModifiedBy],
    [DynamicPropertyAssociationBase].[CreatedOnBehalfBy],
    [DynamicPropertyAssociationBase].[ModifiedOnBehalfBy],
    [DynamicPropertyAssociationBase].[OrganizationId],
    [DynamicPropertyAssociationBase].[VersionNumber],
    [DynamicPropertyAssociationBase].[ImportSequenceNumber],
    [DynamicPropertyAssociationBase].[OverriddenCreatedOn],
    [DynamicPropertyAssociationBase].[TimeZoneRuleVersionNumber],
    [DynamicPropertyAssociationBase].[UTCConversionTimeZoneCode],
    [DynamicPropertyAssociationBase].[Name],
    [DynamicPropertyAssociationBase].[RegardingObjectid],
    [DynamicPropertyAssociationBase].[DynamicPropertyId],
    [DynamicPropertyAssociationBase].[AssociationStatus],
    [DynamicPropertyAssociationBase].[InheritanceState],
    [DynamicPropertyAssociationBase].[ExchangeRate],
    [DynamicPropertyAssociationBase].[TransactionCurrencyId],
    [DynamicPropertyAssociationBase].[RegardingObjectTypeCode],
    [DynamicPropertyAssociationBase].[RegardingObjectIdYomiName]
from [DynamicPropertyAssociationBase] 
    left join [DynamicPropertyBase] [Dynamicproperty_DynamicPropertyAssociation] on ([DynamicPropertyAssociationBase].[DynamicPropertyId] = [Dynamicproperty_DynamicPropertyAssociation].[DynamicPropertyId])
    left join [OrganizationBase] [DynamicPropertyAssociation_organization] on ([DynamicPropertyAssociationBase].[OrganizationId] = [DynamicPropertyAssociation_organization].[OrganizationId])
    left join [TransactionCurrencyBase] [DynamicPropertyAssociation_TransactionCurrency] on ([DynamicPropertyAssociationBase].[TransactionCurrencyId] = [DynamicPropertyAssociation_TransactionCurrency].[TransactionCurrencyId])
    left join [SystemUserBase] [lk_DynamicPropertyAssociationattribute_createdby] on ([DynamicPropertyAssociationBase].[CreatedBy] = [lk_DynamicPropertyAssociationattribute_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicPropertyAssociationattribute_CreatedOnBehalfBy] on ([DynamicPropertyAssociationBase].[CreatedOnBehalfBy] = [lk_DynamicPropertyAssociationattribute_CreatedOnBehalfBy].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicPropertyAssociationattribute_ModifiedBy] on ([DynamicPropertyAssociationBase].[ModifiedBy] = [lk_DynamicPropertyAssociationattribute_ModifiedBy].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicPropertyAssociationattribute_ModifiedOnBehalfBy] on ([DynamicPropertyAssociationBase].[ModifiedOnBehalfBy] = [lk_DynamicPropertyAssociationattribute_ModifiedOnBehalfBy].[SystemUserId])
    left join [ProductBase] [Product_DynamicPropertyAssociation] on ([DynamicPropertyAssociationBase].[RegardingObjectid] = [Product_DynamicPropertyAssociation].[ProductId])
