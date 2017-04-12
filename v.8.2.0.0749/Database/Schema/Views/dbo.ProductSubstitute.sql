SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for ProductSubstitute
--
create view [dbo].[ProductSubstitute]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [SubstitutedProductIdName],
    [OrganizationIdName],
    [ProductIdName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [ProductId],
    [SubstitutedProductId],
    [ProductSubstituteId],
    [VersionNumber],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [CreatedOn],
    [statecode],
    [statuscode],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [CreatedBy],
    [ExchangeRate],
    [TransactionCurrencyId],
    [SalesRelationshipType],
    [ModifiedOn],
    [OrganizationId],
    [Direction]
) with view_metadata as
select
    -- logical attributes
    [lk_ProductSubstitute_modifiedonbehalfby].[FullName],
    [lk_ProductSubstitute_modifiedonbehalfby].[YomiFullName],
    [lk_ProductSubstitute_modifiedby].[FullName],
    [lk_ProductSubstitute_modifiedby].[YomiFullName],
    [lk_ProductSubstitute_createdonbehalfby].[FullName],
    [lk_ProductSubstitute_createdonbehalfby].[YomiFullName],
    [lk_ProductSubstitute_createdby].[FullName],
    [lk_ProductSubstitute_createdby].[YomiFullName],
    [product_ProductSubstitute_substitutedproductid].[Name],
    [organization_ProductSubstitute].[Name],
    [product_ProductSubstitute_productid].[Name],
    [transactioncurrency_ProductSubstitute].[CurrencyName],

    -- physical attribute
    [ProductSubstituteBase].[ProductId],
    [ProductSubstituteBase].[SubstitutedProductId],
    [ProductSubstituteBase].[ProductSubstituteId],
    [ProductSubstituteBase].[VersionNumber],
    [ProductSubstituteBase].[ModifiedBy],
    [ProductSubstituteBase].[CreatedOnBehalfBy],
    [ProductSubstituteBase].[ModifiedOnBehalfBy],
    [ProductSubstituteBase].[CreatedOn],
    [ProductSubstituteBase].[statecode],
    [ProductSubstituteBase].[statuscode],
    [ProductSubstituteBase].[ImportSequenceNumber],
    [ProductSubstituteBase].[OverriddenCreatedOn],
    [ProductSubstituteBase].[TimeZoneRuleVersionNumber],
    [ProductSubstituteBase].[UTCConversionTimeZoneCode],
    [ProductSubstituteBase].[CreatedBy],
    [ProductSubstituteBase].[ExchangeRate],
    [ProductSubstituteBase].[TransactionCurrencyId],
    [ProductSubstituteBase].[SalesRelationshipType],
    [ProductSubstituteBase].[ModifiedOn],
    [ProductSubstituteBase].[OrganizationId],
    [ProductSubstituteBase].[Direction]
from [ProductSubstituteBase] 
    left join [SystemUserBase] [lk_ProductSubstitute_createdby] with(nolock) on ([ProductSubstituteBase].[CreatedBy] = [lk_ProductSubstitute_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ProductSubstitute_createdonbehalfby] with(nolock) on ([ProductSubstituteBase].[CreatedOnBehalfBy] = [lk_ProductSubstitute_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ProductSubstitute_modifiedby] with(nolock) on ([ProductSubstituteBase].[ModifiedBy] = [lk_ProductSubstitute_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ProductSubstitute_modifiedonbehalfby] with(nolock) on ([ProductSubstituteBase].[ModifiedOnBehalfBy] = [lk_ProductSubstitute_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_ProductSubstitute] with(nolock) on ([ProductSubstituteBase].[OrganizationId] = [organization_ProductSubstitute].[OrganizationId])
    left join [ProductBase] [product_ProductSubstitute_productid] on ([ProductSubstituteBase].[ProductId] = [product_ProductSubstitute_productid].[ProductId])
    left join [ProductBase] [product_ProductSubstitute_substitutedproductid] on ([ProductSubstituteBase].[SubstitutedProductId] = [product_ProductSubstitute_substitutedproductid].[ProductId])
    left join [TransactionCurrencyBase] [transactioncurrency_ProductSubstitute] on ([ProductSubstituteBase].[TransactionCurrencyId] = [transactioncurrency_ProductSubstitute].[TransactionCurrencyId])
GO
