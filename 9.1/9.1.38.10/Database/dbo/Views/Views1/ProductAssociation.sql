


--
-- base view for ProductAssociation
--
create view dbo.[ProductAssociation]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [OrganizationIdName],
    [TransactionCurrencyIdName],
    [AssociatedProductIdName],
    [UoMIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ProductIdName],

    -- physical attributes
    [ProductAssociationId],
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
    [AssociatedProduct],
    [ProductId],
    [Quantity],
    [ProductIsRequired],
    [UoMId],
    [statecode],
    [statuscode],
    [PropertyCustomizationStatus],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_ProductAssociation_createdonbehalfby].[FullName],
    [lk_ProductAssociation_createdonbehalfby].[YomiFullName],
    [lk_ProductAssociate_createdby].[FullName],
    [lk_ProductAssociate_createdby].[YomiFullName],
    [organization_ProductAssociation].[OrganizationId],
    [transactioncurrency_ProductAssociation].[CurrencyName],
    [Product_ProductAssociation_AssocProd].[Name],
    [unit_of_measurement_productassociation].[Name],
    [lk_ProductAssociation_modifiedby].[FullName],
    [lk_ProductAssociation_modifiedby].[YomiFullName],
    [lk_ProductAssociation_modifiedonbehalfby].[FullName],
    [lk_ProductAssociation_modifiedonbehalfby].[YomiFullName],
    [Product_ProductAssociation_Prod].[Name],

    -- physical attribute
    [ProductAssociationBase].[ProductAssociationId],
    [ProductAssociationBase].[CreatedOn],
    [ProductAssociationBase].[CreatedBy],
    [ProductAssociationBase].[ModifiedOn],
    [ProductAssociationBase].[ModifiedBy],
    [ProductAssociationBase].[CreatedOnBehalfBy],
    [ProductAssociationBase].[ModifiedOnBehalfBy],
    [ProductAssociationBase].[OrganizationId],
    [ProductAssociationBase].[VersionNumber],
    [ProductAssociationBase].[ImportSequenceNumber],
    [ProductAssociationBase].[OverriddenCreatedOn],
    [ProductAssociationBase].[TimeZoneRuleVersionNumber],
    [ProductAssociationBase].[UTCConversionTimeZoneCode],
    [ProductAssociationBase].[AssociatedProduct],
    [ProductAssociationBase].[ProductId],
    [ProductAssociationBase].[Quantity],
    [ProductAssociationBase].[ProductIsRequired],
    [ProductAssociationBase].[UoMId],
    [ProductAssociationBase].[statecode],
    [ProductAssociationBase].[statuscode],
    [ProductAssociationBase].[PropertyCustomizationStatus],
    [ProductAssociationBase].[ExchangeRate],
    [ProductAssociationBase].[TransactionCurrencyId]
from [ProductAssociationBase] 
    left join [SystemUserBase] [lk_ProductAssociate_createdby] on ([ProductAssociationBase].[CreatedBy] = [lk_ProductAssociate_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ProductAssociation_createdonbehalfby] on ([ProductAssociationBase].[CreatedOnBehalfBy] = [lk_ProductAssociation_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ProductAssociation_modifiedby] on ([ProductAssociationBase].[ModifiedBy] = [lk_ProductAssociation_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ProductAssociation_modifiedonbehalfby] on ([ProductAssociationBase].[ModifiedOnBehalfBy] = [lk_ProductAssociation_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_ProductAssociation] on ([ProductAssociationBase].[OrganizationId] = [organization_ProductAssociation].[OrganizationId])
    left join [ProductBase] [Product_ProductAssociation_AssocProd] on ([ProductAssociationBase].[AssociatedProduct] = [Product_ProductAssociation_AssocProd].[ProductId])
    left join [ProductBase] [Product_ProductAssociation_Prod] on ([ProductAssociationBase].[ProductId] = [Product_ProductAssociation_Prod].[ProductId])
    left join [TransactionCurrencyBase] [transactioncurrency_ProductAssociation] on ([ProductAssociationBase].[TransactionCurrencyId] = [transactioncurrency_ProductAssociation].[TransactionCurrencyId])
    left join [UoMBase] [unit_of_measurement_productassociation] on ([ProductAssociationBase].[UoMId] = [unit_of_measurement_productassociation].[UoMId])
