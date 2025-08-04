


--
-- base view for ProductSubstitute
--
create view dbo.[ProductSubstitute]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ProductIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [SubstitutedProductIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [ProductSubstituteId],
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
    [ProductId],
    [SalesRelationshipType],
    [statecode],
    [statuscode],
    [SubstitutedProductId],
    [Direction],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [transactioncurrency_ProductSubstitute].[CurrencyName],
    [organization_ProductSubstitute].[Name],
    [lk_ProductSubstitute_createdby].[FullName],
    [lk_ProductSubstitute_createdby].[YomiFullName],
    [product_ProductSubstitute_productid].[Name],
    [lk_ProductSubstitute_modifiedby].[FullName],
    [lk_ProductSubstitute_modifiedby].[YomiFullName],
    [product_ProductSubstitute_substitutedproductid].[Name],
    [lk_ProductSubstitute_modifiedonbehalfby].[FullName],
    [lk_ProductSubstitute_modifiedonbehalfby].[YomiFullName],
    [lk_ProductSubstitute_createdonbehalfby].[FullName],
    [lk_ProductSubstitute_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [ProductSubstituteBase].[ProductSubstituteId],
    [ProductSubstituteBase].[CreatedOn],
    [ProductSubstituteBase].[CreatedBy],
    [ProductSubstituteBase].[ModifiedOn],
    [ProductSubstituteBase].[ModifiedBy],
    [ProductSubstituteBase].[CreatedOnBehalfBy],
    [ProductSubstituteBase].[ModifiedOnBehalfBy],
    [ProductSubstituteBase].[OrganizationId],
    [ProductSubstituteBase].[VersionNumber],
    [ProductSubstituteBase].[ImportSequenceNumber],
    [ProductSubstituteBase].[OverriddenCreatedOn],
    [ProductSubstituteBase].[TimeZoneRuleVersionNumber],
    [ProductSubstituteBase].[UTCConversionTimeZoneCode],
    [ProductSubstituteBase].[Name],
    [ProductSubstituteBase].[ProductId],
    [ProductSubstituteBase].[SalesRelationshipType],
    [ProductSubstituteBase].[statecode],
    [ProductSubstituteBase].[statuscode],
    [ProductSubstituteBase].[SubstitutedProductId],
    [ProductSubstituteBase].[Direction],
    [ProductSubstituteBase].[ExchangeRate],
    [ProductSubstituteBase].[TransactionCurrencyId]
from [ProductSubstituteBase] 
    left join [SystemUserBase] [lk_ProductSubstitute_createdby] on ([ProductSubstituteBase].[CreatedBy] = [lk_ProductSubstitute_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ProductSubstitute_createdonbehalfby] on ([ProductSubstituteBase].[CreatedOnBehalfBy] = [lk_ProductSubstitute_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ProductSubstitute_modifiedby] on ([ProductSubstituteBase].[ModifiedBy] = [lk_ProductSubstitute_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ProductSubstitute_modifiedonbehalfby] on ([ProductSubstituteBase].[ModifiedOnBehalfBy] = [lk_ProductSubstitute_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_ProductSubstitute] on ([ProductSubstituteBase].[OrganizationId] = [organization_ProductSubstitute].[OrganizationId])
    left join [ProductBase] [product_ProductSubstitute_productid] on ([ProductSubstituteBase].[ProductId] = [product_ProductSubstitute_productid].[ProductId])
    left join [ProductBase] [product_ProductSubstitute_substitutedproductid] on ([ProductSubstituteBase].[SubstitutedProductId] = [product_ProductSubstitute_substitutedproductid].[ProductId])
    left join [TransactionCurrencyBase] [transactioncurrency_ProductSubstitute] on ([ProductSubstituteBase].[TransactionCurrencyId] = [transactioncurrency_ProductSubstitute].[TransactionCurrencyId])
