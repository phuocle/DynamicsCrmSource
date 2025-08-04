


--
-- base view for Quote
--
create view dbo.[Quote]
 (
    -- logical attributes
    [CampaignIdName],
    [CreatedOnBehalfByYomiName],
    [PriceLevelIdName],
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [OpportunityIdName],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [TransactionCurrencyIdName],

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
    [OwningBusinessUnit],
    [PriceLevelId],
    [OpportunityId],
    [QuoteNumber],
    [RevisionNumber],
    [Name],
    [PricingErrorCode],
    [Description],
    [DiscountAmount],
    [FreightAmount],
    [TotalAmount],
    [TotalLineItemAmount],
    [TotalLineItemDiscountAmount],
    [TotalAmountLessFreight],
    [EffectiveFrom],
    [TotalTax],
    [TotalDiscountAmount],
    [EffectiveTo],
    [ExpiresOn],
    [ClosedOn],
    [RequestDeliveryBy],
    [ShippingMethodCode],
    [PaymentTermsCode],
    [FreightTermsCode],
    [CreatedBy],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [StateCode],
    [StatusCode],
    [ShipTo_Name],
    [VersionNumber],
    [ShipTo_Line1],
    [ShipTo_Line2],
    [ShipTo_Line3],
    [ShipTo_City],
    [ShipTo_StateOrProvince],
    [ShipTo_Country],
    [ShipTo_PostalCode],
    [WillCall],
    [ShipTo_Telephone],
    [BillTo_Name],
    [ShipTo_FreightTermsCode],
    [ShipTo_Fax],
    [BillTo_Line1],
    [BillTo_Line2],
    [BillTo_Line3],
    [BillTo_City],
    [BillTo_StateOrProvince],
    [BillTo_Country],
    [BillTo_PostalCode],
    [BillTo_Telephone],
    [BillTo_Fax],
    [DiscountPercentage],
    [CustomerId],
    [CustomerIdName],
    [CustomerIdType],
    [CampaignId],
    [ShipTo_AddressId],
    [ShipTo_ContactName],
    [BillTo_AddressId],
    [BillTo_ContactName],
    [TimeZoneRuleVersionNumber],
    [UniqueDscId],
    [ImportSequenceNumber],
    [ExchangeRate],
    [OverriddenCreatedOn],
    [UTCConversionTimeZoneCode],
    [TransactionCurrencyId],
    [TotalLineItemDiscountAmount_Base],
    [TotalAmountLessFreight_Base],
    [DiscountAmount_Base],
    [FreightAmount_Base],
    [TotalAmount_Base],
    [TotalDiscountAmount_Base],
    [TotalTax_Base],
    [TotalLineItemAmount_Base],
    [CustomerIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [BillTo_Composite],
    [ShipTo_Composite],
    [ProcessId],
    [StageId]
) with view_metadata as
select
    -- logical attributes
    [campaign_quotes].[Name],
    [lk_quotebase_createdonbehalfby].[YomiFullName],
    [price_level_quotes].[Name],
    [lk_quotebase_modifiedonbehalfby].[FullName],
    [lk_quotebase_modifiedby].[YomiFullName],
    [lk_quotebase_createdby].[FullName],
    [opportunity_quotes].[Name],
    [lk_quotebase_createdonbehalfby].[FullName],
    [lk_quotebase_createdby].[YomiFullName],
    [lk_quotebase_modifiedonbehalfby].[YomiFullName],
    [lk_quotebase_modifiedby].[FullName],
    [transactioncurrency_quote].[CurrencyName],

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
    [QuoteBase].[OwningBusinessUnit],
    [QuoteBase].[PriceLevelId],
    [QuoteBase].[OpportunityId],
    [QuoteBase].[QuoteNumber],
    [QuoteBase].[RevisionNumber],
    [QuoteBase].[Name],
    [QuoteBase].[PricingErrorCode],
    [QuoteBase].[Description],
    [QuoteBase].[DiscountAmount],
    [QuoteBase].[FreightAmount],
    [QuoteBase].[TotalAmount],
    [QuoteBase].[TotalLineItemAmount],
    [QuoteBase].[TotalLineItemDiscountAmount],
    [QuoteBase].[TotalAmountLessFreight],
    [QuoteBase].[EffectiveFrom],
    [QuoteBase].[TotalTax],
    [QuoteBase].[TotalDiscountAmount],
    [QuoteBase].[EffectiveTo],
    [QuoteBase].[ExpiresOn],
    [QuoteBase].[ClosedOn],
    [QuoteBase].[RequestDeliveryBy],
    [QuoteBase].[ShippingMethodCode],
    [QuoteBase].[PaymentTermsCode],
    [QuoteBase].[FreightTermsCode],
    [QuoteBase].[CreatedBy],
    [QuoteBase].[CreatedOn],
    [QuoteBase].[ModifiedBy],
    [QuoteBase].[ModifiedOn],
    [QuoteBase].[StateCode],
    [QuoteBase].[StatusCode],
    [QuoteBase].[ShipTo_Name],
    [QuoteBase].[VersionNumber],
    [QuoteBase].[ShipTo_Line1],
    [QuoteBase].[ShipTo_Line2],
    [QuoteBase].[ShipTo_Line3],
    [QuoteBase].[ShipTo_City],
    [QuoteBase].[ShipTo_StateOrProvince],
    [QuoteBase].[ShipTo_Country],
    [QuoteBase].[ShipTo_PostalCode],
    [QuoteBase].[WillCall],
    [QuoteBase].[ShipTo_Telephone],
    [QuoteBase].[BillTo_Name],
    [QuoteBase].[ShipTo_FreightTermsCode],
    [QuoteBase].[ShipTo_Fax],
    [QuoteBase].[BillTo_Line1],
    [QuoteBase].[BillTo_Line2],
    [QuoteBase].[BillTo_Line3],
    [QuoteBase].[BillTo_City],
    [QuoteBase].[BillTo_StateOrProvince],
    [QuoteBase].[BillTo_Country],
    [QuoteBase].[BillTo_PostalCode],
    [QuoteBase].[BillTo_Telephone],
    [QuoteBase].[BillTo_Fax],
    [QuoteBase].[DiscountPercentage],
    [QuoteBase].[CustomerId],
    [QuoteBase].[CustomerIdName],
    [QuoteBase].[CustomerIdType],
    [QuoteBase].[CampaignId],
    [QuoteBase].[ShipTo_AddressId],
    [QuoteBase].[ShipTo_ContactName],
    [QuoteBase].[BillTo_AddressId],
    [QuoteBase].[BillTo_ContactName],
    [QuoteBase].[TimeZoneRuleVersionNumber],
    [QuoteBase].[UniqueDscId],
    [QuoteBase].[ImportSequenceNumber],
    [QuoteBase].[ExchangeRate],
    [QuoteBase].[OverriddenCreatedOn],
    [QuoteBase].[UTCConversionTimeZoneCode],
    [QuoteBase].[TransactionCurrencyId],
    [QuoteBase].[TotalLineItemDiscountAmount_Base],
    [QuoteBase].[TotalAmountLessFreight_Base],
    [QuoteBase].[DiscountAmount_Base],
    [QuoteBase].[FreightAmount_Base],
    [QuoteBase].[TotalAmount_Base],
    [QuoteBase].[TotalDiscountAmount_Base],
    [QuoteBase].[TotalTax_Base],
    [QuoteBase].[TotalLineItemAmount_Base],
    [QuoteBase].[CustomerIdYomiName],
    [QuoteBase].[CreatedOnBehalfBy],
    [QuoteBase].[ModifiedOnBehalfBy],
    [QuoteBase].[BillTo_Composite],
    [QuoteBase].[ShipTo_Composite],
    [QuoteBase].[ProcessId],
    [QuoteBase].[StageId]
from [QuoteBase] 
    left join [CampaignBase] [campaign_quotes] on ([QuoteBase].[CampaignId] = [campaign_quotes].[CampaignId])
    left join [SystemUserBase] [lk_quotebase_createdby] with(nolock) on ([QuoteBase].[CreatedBy] = [lk_quotebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_quotebase_createdonbehalfby] with(nolock) on ([QuoteBase].[CreatedOnBehalfBy] = [lk_quotebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_quotebase_modifiedby] with(nolock) on ([QuoteBase].[ModifiedBy] = [lk_quotebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_quotebase_modifiedonbehalfby] with(nolock) on ([QuoteBase].[ModifiedOnBehalfBy] = [lk_quotebase_modifiedonbehalfby].[SystemUserId])
    left join [OpportunityBase] [opportunity_quotes] on ([QuoteBase].[OpportunityId] = [opportunity_quotes].[OpportunityId])
    left join [PriceLevelBase] [price_level_quotes] on ([QuoteBase].[PriceLevelId] = [price_level_quotes].[PriceLevelId])
    left join [TransactionCurrencyBase] [transactioncurrency_quote] on ([QuoteBase].[TransactionCurrencyId] = [transactioncurrency_quote].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([QuoteBase].OwnerId = XXowner.OwnerId)
