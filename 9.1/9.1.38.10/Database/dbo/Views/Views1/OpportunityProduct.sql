


--
-- base view for OpportunityProduct
--
create view dbo.[OpportunityProduct]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [OwningBusinessUnit],
    [EntityImage_Timestamp],
    [OpportunityStateCode],
    [ProductIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [OwningUser],
    [OpportunityIdName],
    [EntityImage],
    [EntityImage_URL],
    [UoMIdName],

    -- ownership entries
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwningTeam,

    -- physical attributes
    [OpportunityProductId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [BaseAmount],
    [TransactionCurrencyId],
    [ExchangeRate],
    [BaseAmount_Base],
    [Description],
    [ExtendedAmount],
    [ExtendedAmount_Base],
    [IsPriceOverridden],
    [IsProductOverridden],
    [LineItemNumber],
    [ManualDiscountAmount],
    [ManualDiscountAmount_Base],
    [OpportunityId],
    [ParentBundleId],
    [ProductAssociationId],
    [ProductTypeCode],
    [PricePerUnit],
    [PricePerUnit_Base],
    [PricingErrorCode],
    [ProductDescription],
    [ProductName],
    [ProductId],
    [Quantity],
    [Tax],
    [Tax_Base],
    [UoMId],
    [VolumeDiscountAmount],
    [VolumeDiscountAmount_Base],
    [SequenceNumber],
    [PropertyConfigurationStatus],
    [EntityImageId],
    [OpportunityProductName],
    [ParentBundleIdRef],
    [SkipPriceCalculation]
) with view_metadata as
select
    -- logical attributes
    [product_opportunities].[OwnerId],
    [product_opportunities].[OwnerIdType],
    [product_opportunities].[OwningBusinessUnit],
    [lk_opportunityproduct_entityimage].[ImageTimestamp],
    [product_opportunities].[StateCode],
    [opportunity_products].[Name],
    [lk_opportunityproductbase_createdby].[FullName],
    [lk_opportunityproductbase_createdby].[YomiFullName],
    [lk_opportunityproductbase_createdonbehalfby].[FullName],
    [lk_opportunityproductbase_createdonbehalfby].[YomiFullName],
    [lk_opportunityproductbase_modifiedby].[FullName],
    [lk_opportunityproductbase_modifiedby].[YomiFullName],
    [lk_opportunityproductbase_modifiedonbehalfby].[FullName],
    [lk_opportunityproductbase_modifiedonbehalfby].[YomiFullName],
    [transactioncurrency_opportunityproduct].[CurrencyName],
    case when [product_opportunities].OwnerIdType = 8
    then [product_opportunities].OwnerId
    else null
    end,
    [product_opportunities].[Name],
    [lk_opportunityproduct_entityimage].[ImageData],
    [lk_opportunityproduct_entityimage].[ImageURL],
    [unit_of_measurement_opportunity_products].[Name],

    -- ownership entries
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [OpportunityProductBase].[OpportunityProductId],
    [OpportunityProductBase].[CreatedOn],
    [OpportunityProductBase].[CreatedBy],
    [OpportunityProductBase].[ModifiedOn],
    [OpportunityProductBase].[ModifiedBy],
    [OpportunityProductBase].[CreatedOnBehalfBy],
    [OpportunityProductBase].[ModifiedOnBehalfBy],
    [OpportunityProductBase].[VersionNumber],
    [OpportunityProductBase].[ImportSequenceNumber],
    [OpportunityProductBase].[OverriddenCreatedOn],
    [OpportunityProductBase].[TimeZoneRuleVersionNumber],
    [OpportunityProductBase].[UTCConversionTimeZoneCode],
    [OpportunityProductBase].[BaseAmount],
    [OpportunityProductBase].[TransactionCurrencyId],
    [OpportunityProductBase].[ExchangeRate],
    [OpportunityProductBase].[BaseAmount_Base],
    [OpportunityProductBase].[Description],
    [OpportunityProductBase].[ExtendedAmount],
    [OpportunityProductBase].[ExtendedAmount_Base],
    [OpportunityProductBase].[IsPriceOverridden],
    [OpportunityProductBase].[IsProductOverridden],
    [OpportunityProductBase].[LineItemNumber],
    [OpportunityProductBase].[ManualDiscountAmount],
    [OpportunityProductBase].[ManualDiscountAmount_Base],
    [OpportunityProductBase].[OpportunityId],
    [OpportunityProductBase].[ParentBundleId],
    [OpportunityProductBase].[ProductAssociationId],
    [OpportunityProductBase].[ProductTypeCode],
    [OpportunityProductBase].[PricePerUnit],
    [OpportunityProductBase].[PricePerUnit_Base],
    [OpportunityProductBase].[PricingErrorCode],
    [OpportunityProductBase].[ProductDescription],
    [OpportunityProductBase].[ProductName],
    [OpportunityProductBase].[ProductId],
    [OpportunityProductBase].[Quantity],
    [OpportunityProductBase].[Tax],
    [OpportunityProductBase].[Tax_Base],
    [OpportunityProductBase].[UoMId],
    [OpportunityProductBase].[VolumeDiscountAmount],
    [OpportunityProductBase].[VolumeDiscountAmount_Base],
    [OpportunityProductBase].[SequenceNumber],
    [OpportunityProductBase].[PropertyConfigurationStatus],
    [OpportunityProductBase].[EntityImageId],
    [OpportunityProductBase].[OpportunityProductName],
    [OpportunityProductBase].[ParentBundleIdRef],
    [OpportunityProductBase].[SkipPriceCalculation]
from [OpportunityProductBase] 
    left join [ImageDescriptor] [lk_opportunityproduct_entityimage] on ([OpportunityProductBase].[EntityImageId] = [lk_opportunityproduct_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_opportunityproductbase_createdby] on ([OpportunityProductBase].[CreatedBy] = [lk_opportunityproductbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunityproductbase_createdonbehalfby] on ([OpportunityProductBase].[CreatedOnBehalfBy] = [lk_opportunityproductbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunityproductbase_modifiedby] on ([OpportunityProductBase].[ModifiedBy] = [lk_opportunityproductbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunityproductbase_modifiedonbehalfby] on ([OpportunityProductBase].[ModifiedOnBehalfBy] = [lk_opportunityproductbase_modifiedonbehalfby].[SystemUserId])
    left join [ProductBase] [opportunity_products] on ([OpportunityProductBase].[ProductId] = [opportunity_products].[ProductId])
    left join [OpportunityBase] [product_opportunities] on ([OpportunityProductBase].[OpportunityId] = [product_opportunities].[OpportunityId])
    left join [TransactionCurrencyBase] [transactioncurrency_opportunityproduct] on ([OpportunityProductBase].[TransactionCurrencyId] = [transactioncurrency_opportunityproduct].[TransactionCurrencyId])
    left join [UoMBase] [unit_of_measurement_opportunity_products] on ([OpportunityProductBase].[UoMId] = [unit_of_measurement_opportunity_products].[UoMId])
    left join OwnerBase XXowner on ([product_opportunities].OwnerId = XXowner.OwnerId)
