


--
-- base view for Quote
--
create view dbo.[Quote]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [CampaignIdName],
    [SLAName],
    [PriceLevelIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [SLAInvokedIdName],
    [OpportunityIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,


	[AccountId],
	[AccountIdName],
	[AccountIdYomiName],
	[ContactId],
	[ContactIdName],
	[ContactIdYomiName],
    -- physical attributes
    [QuoteId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [VersionNumber],
    [EmailAddress],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [BillTo_AddressId],
    [BillTo_City],
    [BillTo_Composite],
    [BillTo_ContactName],
    [BillTo_Country],
    [BillTo_Fax],
    [BillTo_Line1],
    [BillTo_Line2],
    [BillTo_Line3],
    [BillTo_Name],
    [BillTo_PostalCode],
    [BillTo_StateOrProvince],
    [BillTo_Telephone],
    [ClosedOn],
    [CustomerId],
    [Description],
    [DiscountAmount],
    [TransactionCurrencyId],
    [ExchangeRate],
    [DiscountAmount_Base],
    [DiscountPercentage],
    [EffectiveFrom],
    [EffectiveTo],
    [ExpiresOn],
    [FreightAmount],
    [FreightAmount_Base],
    [FreightTermsCode],
    [OpportunityId],
    [PaymentTermsCode],
    [PriceLevelId],
    [PricingErrorCode],
    [QuoteNumber],
    [RequestDeliveryBy],
    [RevisionNumber],
    [ShippingMethodCode],
    [ShipTo_AddressId],
    [ShipTo_City],
    [ShipTo_Composite],
    [ShipTo_ContactName],
    [ShipTo_Country],
    [ShipTo_Fax],
    [ShipTo_FreightTermsCode],
    [ShipTo_Line1],
    [ShipTo_Line2],
    [ShipTo_Line3],
    [ShipTo_Name],
    [ShipTo_PostalCode],
    [ShipTo_StateOrProvince],
    [ShipTo_Telephone],
    [StateCode],
    [StatusCode],
    [TotalAmount],
    [TotalAmount_Base],
    [TotalAmountLessFreight],
    [TotalAmountLessFreight_Base],
    [TotalDiscountAmount],
    [TotalDiscountAmount_Base],
    [TotalLineItemAmount],
    [TotalLineItemAmount_Base],
    [TotalLineItemDiscountAmount],
    [TotalLineItemDiscountAmount_Base],
    [TotalTax],
    [TotalTax_Base],
    [UniqueDscId],
    [WillCall],
    [OnHoldTime],
    [LastOnHoldTime],
    [SLAId],
    [SLAInvokedId],
    [CustomerIdName],
    [CustomerIdType],
    [CustomerIdYomiName],
    [CampaignId],
    [SkipPriceCalculation]
) with view_metadata as
select
    -- logical attributes
    [transactioncurrency_quote].[CurrencyName],
    [campaign_quotes].[Name],
    [manualsla_quote].[Name],
    [price_level_quotes].[Name],
    [lk_quotebase_createdby].[FullName],
    [lk_quotebase_createdby].[YomiFullName],
    [lk_quotebase_createdonbehalfby].[FullName],
    [lk_quotebase_createdonbehalfby].[YomiFullName],
    [lk_quotebase_modifiedby].[FullName],
    [lk_quotebase_modifiedby].[YomiFullName],
    [lk_quotebase_modifiedonbehalfby].[FullName],
    [lk_quotebase_modifiedonbehalfby].[YomiFullName],
    [sla_quote].[Name],
    [opportunity_quotes].[Name],

    -- ownership entries
    OwnerId = [QuoteBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,


	[AccountId] = case 
		when [QuoteBase].[CustomerIdType] = 1 AND [QuoteBase].[CustomerId] IS NOT NULL then [QuoteBase].[CustomerId]
		else NULL
		end,
	[AccountIdName] = case 
		when [QuoteBase].[CustomerIdType] = 1 AND [QuoteBase].[CustomerId] IS NOT NULL then [QuoteBase].[CustomerIdName]
		else NULL
		end,
	[AccountIdYomiName] = case 
		when [QuoteBase].[CustomerIdType] = 1 AND [QuoteBase].[CustomerId] IS NOT NULL then [QuoteBase].[CustomerIdYomiName]
		else NULL
		end,
	[ContactId] = case 
		when [QuoteBase].[CustomerIdType] = 2 AND [QuoteBase].[CustomerId] IS NOT NULL then [QuoteBase].[CustomerId]
		else NULL
		end,
	[ContactIdName] = case 
		when [QuoteBase].[CustomerIdType] = 2 AND [QuoteBase].[CustomerId] IS NOT NULL then [QuoteBase].[CustomerIdName]
		else NULL
		end,
	[ContactIdYomiName] = case 
		when [QuoteBase].[CustomerIdType] = 2 AND [QuoteBase].[CustomerId] IS NOT NULL then [QuoteBase].[CustomerIdYomiName]
		else NULL
		end,
    -- physical attribute
    [QuoteBase].[QuoteId],
    [QuoteBase].[CreatedOn],
    [QuoteBase].[CreatedBy],
    [QuoteBase].[ModifiedOn],
    [QuoteBase].[ModifiedBy],
    [QuoteBase].[CreatedOnBehalfBy],
    [QuoteBase].[ModifiedOnBehalfBy],
    [QuoteBase].[OwningBusinessUnit],
    [QuoteBase].[VersionNumber],
    [QuoteBase].[EmailAddress],
    [QuoteBase].[ImportSequenceNumber],
    [QuoteBase].[OverriddenCreatedOn],
    [QuoteBase].[TimeZoneRuleVersionNumber],
    [QuoteBase].[UTCConversionTimeZoneCode],
    [QuoteBase].[Name],
    [QuoteBase].[ProcessId],
    [QuoteBase].[StageId],
    [QuoteBase].[TraversedPath],
    [QuoteBase].[BillTo_AddressId],
    [QuoteBase].[BillTo_City],
    [QuoteBase].[BillTo_Composite],
    [QuoteBase].[BillTo_ContactName],
    [QuoteBase].[BillTo_Country],
    [QuoteBase].[BillTo_Fax],
    [QuoteBase].[BillTo_Line1],
    [QuoteBase].[BillTo_Line2],
    [QuoteBase].[BillTo_Line3],
    [QuoteBase].[BillTo_Name],
    [QuoteBase].[BillTo_PostalCode],
    [QuoteBase].[BillTo_StateOrProvince],
    [QuoteBase].[BillTo_Telephone],
    [QuoteBase].[ClosedOn],
    [QuoteBase].[CustomerId],
    [QuoteBase].[Description],
    [QuoteBase].[DiscountAmount],
    [QuoteBase].[TransactionCurrencyId],
    [QuoteBase].[ExchangeRate],
    [QuoteBase].[DiscountAmount_Base],
    [QuoteBase].[DiscountPercentage],
    [QuoteBase].[EffectiveFrom],
    [QuoteBase].[EffectiveTo],
    [QuoteBase].[ExpiresOn],
    [QuoteBase].[FreightAmount],
    [QuoteBase].[FreightAmount_Base],
    [QuoteBase].[FreightTermsCode],
    [QuoteBase].[OpportunityId],
    [QuoteBase].[PaymentTermsCode],
    [QuoteBase].[PriceLevelId],
    [QuoteBase].[PricingErrorCode],
    [QuoteBase].[QuoteNumber],
    [QuoteBase].[RequestDeliveryBy],
    [QuoteBase].[RevisionNumber],
    [QuoteBase].[ShippingMethodCode],
    [QuoteBase].[ShipTo_AddressId],
    [QuoteBase].[ShipTo_City],
    [QuoteBase].[ShipTo_Composite],
    [QuoteBase].[ShipTo_ContactName],
    [QuoteBase].[ShipTo_Country],
    [QuoteBase].[ShipTo_Fax],
    [QuoteBase].[ShipTo_FreightTermsCode],
    [QuoteBase].[ShipTo_Line1],
    [QuoteBase].[ShipTo_Line2],
    [QuoteBase].[ShipTo_Line3],
    [QuoteBase].[ShipTo_Name],
    [QuoteBase].[ShipTo_PostalCode],
    [QuoteBase].[ShipTo_StateOrProvince],
    [QuoteBase].[ShipTo_Telephone],
    [QuoteBase].[StateCode],
    [QuoteBase].[StatusCode],
    [QuoteBase].[TotalAmount],
    [QuoteBase].[TotalAmount_Base],
    [QuoteBase].[TotalAmountLessFreight],
    [QuoteBase].[TotalAmountLessFreight_Base],
    [QuoteBase].[TotalDiscountAmount],
    [QuoteBase].[TotalDiscountAmount_Base],
    [QuoteBase].[TotalLineItemAmount],
    [QuoteBase].[TotalLineItemAmount_Base],
    [QuoteBase].[TotalLineItemDiscountAmount],
    [QuoteBase].[TotalLineItemDiscountAmount_Base],
    [QuoteBase].[TotalTax],
    [QuoteBase].[TotalTax_Base],
    [QuoteBase].[UniqueDscId],
    [QuoteBase].[WillCall],
    [QuoteBase].[OnHoldTime],
    [QuoteBase].[LastOnHoldTime],
    [QuoteBase].[SLAId],
    [QuoteBase].[SLAInvokedId],
    [QuoteBase].[CustomerIdName],
    [QuoteBase].[CustomerIdType],
    [QuoteBase].[CustomerIdYomiName],
    [QuoteBase].[CampaignId],
    [QuoteBase].[SkipPriceCalculation]
from [QuoteBase] 
    left join [CampaignBase] [campaign_quotes] on ([QuoteBase].[CampaignId] = [campaign_quotes].[CampaignId])
    left join [SystemUserBase] [lk_quotebase_createdby] on ([QuoteBase].[CreatedBy] = [lk_quotebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_quotebase_createdonbehalfby] on ([QuoteBase].[CreatedOnBehalfBy] = [lk_quotebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_quotebase_modifiedby] on ([QuoteBase].[ModifiedBy] = [lk_quotebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_quotebase_modifiedonbehalfby] on ([QuoteBase].[ModifiedOnBehalfBy] = [lk_quotebase_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_quote] on ([QuoteBase].[SLAId] = [manualsla_quote].[SLAId] and [manualsla_quote].OverwriteTime = 0 and [manualsla_quote].ComponentState = 0)
    left join [OpportunityBase] [opportunity_quotes] on ([QuoteBase].[OpportunityId] = [opportunity_quotes].[OpportunityId])
    left join [PriceLevelBase] [price_level_quotes] on ([QuoteBase].[PriceLevelId] = [price_level_quotes].[PriceLevelId])
    left join [SLABase] [sla_quote] on ([QuoteBase].[SLAInvokedId] = [sla_quote].[SLAId] and [sla_quote].OverwriteTime = 0 and [sla_quote].ComponentState = 0)
    left join [TransactionCurrencyBase] [transactioncurrency_quote] on ([QuoteBase].[TransactionCurrencyId] = [transactioncurrency_quote].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([QuoteBase].OwnerId = XXowner.OwnerId)
