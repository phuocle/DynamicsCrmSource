


--
-- base view for OpportunityProduct
--
create view dbo.[OpportunityProduct]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [EntityImage_URL],
    [EntityImage],
    [EntityImage_Timestamp],
    [UoMIdName],
    [TransactionCurrencyIdName],
    [OwnerId],
    [OwnerIdType],
    [OwningBusinessUnit],
    [OpportunityStateCode],
    [OpportunityIdName],
    [OwningUser],
    [ProductIdName],

    -- physical attributes
    [ProductId],
    [OpportunityProductId],
    [PricingErrorCode],
    [IsProductOverridden],
    [IsPriceOverridden],
    [PricePerUnit],
    [OpportunityId],
    [BaseAmount],
    [ExtendedAmount],
    [UoMId],
    [ManualDiscountAmount],
    [Quantity],
    [CreatedOn],
    [VolumeDiscountAmount],
    [CreatedBy],
    [Tax],
    [ModifiedBy],
    [ProductDescription],
    [ModifiedOn],
    [Description],
    [VersionNumber],
    [OverriddenCreatedOn],
    [UTCConversionTimeZoneCode],
    [TimeZoneRuleVersionNumber],
    [ImportSequenceNumber],
    [ExchangeRate],
    [TransactionCurrencyId],
    [BaseAmount_Base],
    [ManualDiscountAmount_Base],
    [VolumeDiscountAmount_Base],
    [PricePerUnit_Base],
    [Tax_Base],
    [ExtendedAmount_Base],
    [LineItemNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [SequenceNumber],
    [EntityImageId],
    [ParentBundleId],
    [ProductTypeCode],
    [PropertyConfigurationStatus],
    [ProductAssociationId]
) with view_metadata as
select
    -- logical attributes
    [lk_opportunityproductbase_modifiedonbehalfby].[FullName],
    [lk_opportunityproductbase_modifiedonbehalfby].[YomiFullName],
    [lk_opportunityproductbase_createdby].[FullName],
    [lk_opportunityproductbase_createdby].[YomiFullName],
    [lk_opportunityproductbase_modifiedby].[YomiFullName],
    [lk_opportunityproductbase_modifiedby].[FullName],
    [lk_opportunityproductbase_createdonbehalfby].[YomiFullName],
    [lk_opportunityproductbase_createdonbehalfby].[FullName],
    [lk_opportunityproduct_entityimage].[ImageURL],
    [lk_opportunityproduct_entityimage].[ImageData],
    [lk_opportunityproduct_entityimage].[ImageTimestamp],
    [unit_of_measurement_opportunity_products].[Name],
    [transactioncurrency_opportunityproduct].[CurrencyName],
    [product_opportunities].[OwnerId],
    [product_opportunities].[OwnerIdType],
    [product_opportunities].[OwningBusinessUnit],
    [product_opportunities].[StateCode],
    [product_opportunities].[Name],
    case when [product_opportunities].OwnerIdType = 8
    then [product_opportunities].OwnerId
    else null
    end,
    [opportunity_products].[Name],

    -- physical attribute
    [OpportunityProductBase].[ProductId],
    [OpportunityProductBase].[OpportunityProductId],
    [OpportunityProductBase].[PricingErrorCode],
    [OpportunityProductBase].[IsProductOverridden],
    [OpportunityProductBase].[IsPriceOverridden],
    [OpportunityProductBase].[PricePerUnit],
    [OpportunityProductBase].[OpportunityId],
    [OpportunityProductBase].[BaseAmount],
    [OpportunityProductBase].[ExtendedAmount],
    [OpportunityProductBase].[UoMId],
    [OpportunityProductBase].[ManualDiscountAmount],
    [OpportunityProductBase].[Quantity],
    [OpportunityProductBase].[CreatedOn],
    [OpportunityProductBase].[VolumeDiscountAmount],
    [OpportunityProductBase].[CreatedBy],
    [OpportunityProductBase].[Tax],
    [OpportunityProductBase].[ModifiedBy],
    [OpportunityProductBase].[ProductDescription],
    [OpportunityProductBase].[ModifiedOn],
    [OpportunityProductBase].[Description],
    [OpportunityProductBase].[VersionNumber],
    [OpportunityProductBase].[OverriddenCreatedOn],
    [OpportunityProductBase].[UTCConversionTimeZoneCode],
    [OpportunityProductBase].[TimeZoneRuleVersionNumber],
    [OpportunityProductBase].[ImportSequenceNumber],
    [OpportunityProductBase].[ExchangeRate],
    [OpportunityProductBase].[TransactionCurrencyId],
    [OpportunityProductBase].[BaseAmount_Base],
    [OpportunityProductBase].[ManualDiscountAmount_Base],
    [OpportunityProductBase].[VolumeDiscountAmount_Base],
    [OpportunityProductBase].[PricePerUnit_Base],
    [OpportunityProductBase].[Tax_Base],
    [OpportunityProductBase].[ExtendedAmount_Base],
    [OpportunityProductBase].[LineItemNumber],
    [OpportunityProductBase].[CreatedOnBehalfBy],
    [OpportunityProductBase].[ModifiedOnBehalfBy],
    [OpportunityProductBase].[SequenceNumber],
    [OpportunityProductBase].[EntityImageId],
    [OpportunityProductBase].[ParentBundleId],
    [OpportunityProductBase].[ProductTypeCode],
    [OpportunityProductBase].[PropertyConfigurationStatus],
    [OpportunityProductBase].[ProductAssociationId]
from [OpportunityProductBase] 
    left join [ImageDescriptor] [lk_opportunityproduct_entityimage] on ([OpportunityProductBase].[EntityImageId] = [lk_opportunityproduct_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_opportunityproductbase_createdby] with(nolock) on ([OpportunityProductBase].[CreatedBy] = [lk_opportunityproductbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunityproductbase_createdonbehalfby] with(nolock) on ([OpportunityProductBase].[CreatedOnBehalfBy] = [lk_opportunityproductbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunityproductbase_modifiedby] with(nolock) on ([OpportunityProductBase].[ModifiedBy] = [lk_opportunityproductbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunityproductbase_modifiedonbehalfby] with(nolock) on ([OpportunityProductBase].[ModifiedOnBehalfBy] = [lk_opportunityproductbase_modifiedonbehalfby].[SystemUserId])
    left join [ProductBase] [opportunity_products] on ([OpportunityProductBase].[ProductId] = [opportunity_products].[ProductId])
    left join [OpportunityBase] [product_opportunities] on ([OpportunityProductBase].[OpportunityId] = [product_opportunities].[OpportunityId])
    left join [TransactionCurrencyBase] [transactioncurrency_opportunityproduct] on ([OpportunityProductBase].[TransactionCurrencyId] = [transactioncurrency_opportunityproduct].[TransactionCurrencyId])
    left join [UoMBase] [unit_of_measurement_opportunity_products] on ([OpportunityProductBase].[UoMId] = [unit_of_measurement_opportunity_products].[UoMId])
