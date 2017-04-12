SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for ProductAssociation
--
create view [dbo].[ProductAssociation]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedByName],
    [TransactionCurrencyIdName],
    [OrganizationIdName],
    [ProductIdName],
    [UoMIdName],
    [AssociatedProductIdName],

    -- physical attributes
    [AssociatedProduct],
    [ProductId],
    [ProductAssociationId],
    [VersionNumber],
    [Quantity],
    [ProductIsRequired],
    [UoMId],
    [ExchangeRate],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TransactionCurrencyId],
    [OrganizationId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [statecode],
    [statuscode],
    [PropertyCustomizationStatus]
) with view_metadata as
select
    -- logical attributes
    [lk_ProductAssociation_createdonbehalfby].[FullName],
    [lk_ProductAssociation_createdonbehalfby].[YomiFullName],
    [lk_ProductAssociation_modifiedby].[YomiFullName],
    [lk_ProductAssociation_modifiedby].[FullName],
    [lk_ProductAssociation_modifiedonbehalfby].[YomiFullName],
    [lk_ProductAssociation_modifiedonbehalfby].[FullName],
    [lk_ProductAssociate_createdby].[YomiFullName],
    [lk_ProductAssociate_createdby].[FullName],
    [transactioncurrency_ProductAssociation].[CurrencyName],
    [organization_ProductAssociation].[OrganizationId],
    [Product_ProductAssociation_Prod].[Name],
    [unit_of_measurement_productassociation].[Name],
    [Product_ProductAssociation_AssocProd].[Name],

    -- physical attribute
    [ProductAssociationBase].[AssociatedProduct],
    [ProductAssociationBase].[ProductId],
    [ProductAssociationBase].[ProductAssociationId],
    [ProductAssociationBase].[VersionNumber],
    [ProductAssociationBase].[Quantity],
    [ProductAssociationBase].[ProductIsRequired],
    [ProductAssociationBase].[UoMId],
    [ProductAssociationBase].[ExchangeRate],
    [ProductAssociationBase].[ImportSequenceNumber],
    [ProductAssociationBase].[OverriddenCreatedOn],
    [ProductAssociationBase].[TransactionCurrencyId],
    [ProductAssociationBase].[OrganizationId],
    [ProductAssociationBase].[CreatedBy],
    [ProductAssociationBase].[CreatedOn],
    [ProductAssociationBase].[CreatedOnBehalfBy],
    [ProductAssociationBase].[ModifiedBy],
    [ProductAssociationBase].[ModifiedOn],
    [ProductAssociationBase].[ModifiedOnBehalfBy],
    [ProductAssociationBase].[statecode],
    [ProductAssociationBase].[statuscode],
    [ProductAssociationBase].[PropertyCustomizationStatus]
from [ProductAssociationBase] 
    left join [SystemUserBase] [lk_ProductAssociate_createdby] with(nolock) on ([ProductAssociationBase].[CreatedBy] = [lk_ProductAssociate_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ProductAssociation_createdonbehalfby] with(nolock) on ([ProductAssociationBase].[CreatedOnBehalfBy] = [lk_ProductAssociation_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ProductAssociation_modifiedby] with(nolock) on ([ProductAssociationBase].[ModifiedBy] = [lk_ProductAssociation_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ProductAssociation_modifiedonbehalfby] with(nolock) on ([ProductAssociationBase].[ModifiedOnBehalfBy] = [lk_ProductAssociation_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_ProductAssociation] with(nolock) on ([ProductAssociationBase].[OrganizationId] = [organization_ProductAssociation].[OrganizationId])
    left join [ProductBase] [Product_ProductAssociation_AssocProd] on ([ProductAssociationBase].[AssociatedProduct] = [Product_ProductAssociation_AssocProd].[ProductId])
    left join [ProductBase] [Product_ProductAssociation_Prod] on ([ProductAssociationBase].[ProductId] = [Product_ProductAssociation_Prod].[ProductId])
    left join [TransactionCurrencyBase] [transactioncurrency_ProductAssociation] on ([ProductAssociationBase].[TransactionCurrencyId] = [transactioncurrency_ProductAssociation].[TransactionCurrencyId])
    left join [UoMBase] [unit_of_measurement_productassociation] on ([ProductAssociationBase].[UoMId] = [unit_of_measurement_productassociation].[UoMId])
GO
