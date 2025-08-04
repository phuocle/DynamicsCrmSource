


--
-- base view for SalesOrder
--
create view dbo.[SalesOrder]
 (
    -- logical attributes
    [EntityImage_URL],
    [EntityImage],
    [ModifiedOnBehalfByName],
    [OpportunityIdName],
    [QuoteIdName],
    [CampaignIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [EntityImage_Timestamp],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [TransactionCurrencyIdName],
    [CreatedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [PriceLevelIdName],

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
    [SalesOrderId],
    [OpportunityId],
    [QuoteId],
    [PriorityCode],
    [SubmitStatus],
    [SubmitDate],
    [OwningBusinessUnit],
    [SubmitStatusDescription],
    [PriceLevelId],
    [LastBackofficeSubmit],
    [OrderNumber],
    [Name],
    [PricingErrorCode],
    [Description],
    [DiscountAmount],
    [FreightAmount],
    [TotalAmount],
    [TotalLineItemAmount],
    [TotalLineItemDiscountAmount],
    [TotalAmountLessFreight],
    [TotalDiscountAmount],
    [RequestDeliveryBy],
    [TotalTax],
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
    [BillTo_ContactName],
    [CampaignId],
    [BillTo_AddressId],
    [ShipTo_AddressId],
    [IsPriceLocked],
    [DateFulfilled],
    [ShipTo_ContactName],
    [UTCConversionTimeZoneCode],
    [TransactionCurrencyId],
    [TimeZoneRuleVersionNumber],
    [ImportSequenceNumber],
    [ExchangeRate],
    [OverriddenCreatedOn],
    [TotalLineItemAmount_Base],
    [TotalDiscountAmount_Base],
    [TotalAmountLessFreight_Base],
    [TotalAmount_Base],
    [DiscountAmount_Base],
    [FreightAmount_Base],
    [TotalLineItemDiscountAmount_Base],
    [TotalTax_Base],
    [CustomerIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [BillTo_Composite],
    [ShipTo_Composite],
    [ProcessId],
    [StageId],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [lk_salesorder_entityimage].[ImageURL],
    [lk_salesorder_entityimage].[ImageData],
    [lk_salesorderbase_modifiedonbehalfby].[FullName],
    [opportunity_sales_orders].[Name],
    [quote_orders].[Name],
    [campaign_orders].[Name],
    [lk_salesorderbase_modifiedonbehalfby].[YomiFullName],
    [lk_salesorderbase_modifiedby].[FullName],
    [lk_salesorder_entityimage].[ImageTimestamp],
    [lk_salesorderbase_modifiedby].[YomiFullName],
    [lk_salesorderbase_createdonbehalfby].[FullName],
    [transactioncurrency_salesorder].[CurrencyName],
    [lk_salesorderbase_createdby].[YomiFullName],
    [lk_salesorderbase_createdonbehalfby].[YomiFullName],
    [lk_salesorderbase_createdby].[FullName],
    [price_level_orders].[Name],

    -- ownership entries
    OwnerId = [SalesOrderBase].OwnerId,
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
		when [SalesOrderBase].[CustomerIdType] = 1 AND [SalesOrderBase].[CustomerId] IS NOT NULL then [SalesOrderBase].[CustomerId]
		else NULL
		end,
	[AccountIdName] = case 
		when [SalesOrderBase].[CustomerIdType] = 1 AND [SalesOrderBase].[CustomerId] IS NOT NULL then [SalesOrderBase].[CustomerIdName]
		else NULL
		end,
	[AccountIdYomiName] = case 
		when [SalesOrderBase].[CustomerIdType] = 1 AND [SalesOrderBase].[CustomerId] IS NOT NULL then [SalesOrderBase].[CustomerIdYomiName]
		else NULL
		end,
	[ContactId] = case 
		when [SalesOrderBase].[CustomerIdType] = 2 AND [SalesOrderBase].[CustomerId] IS NOT NULL then [SalesOrderBase].[CustomerId]
		else NULL
		end,
	[ContactIdName] = case 
		when [SalesOrderBase].[CustomerIdType] = 2 AND [SalesOrderBase].[CustomerId] IS NOT NULL then [SalesOrderBase].[CustomerIdName]
		else NULL
		end,
	[ContactIdYomiName] = case 
		when [SalesOrderBase].[CustomerIdType] = 2 AND [SalesOrderBase].[CustomerId] IS NOT NULL then [SalesOrderBase].[CustomerIdYomiName]
		else NULL
		end,
    -- physical attribute
    [SalesOrderBase].[SalesOrderId],
    [SalesOrderBase].[OpportunityId],
    [SalesOrderBase].[QuoteId],
    [SalesOrderBase].[PriorityCode],
    [SalesOrderBase].[SubmitStatus],
    [SalesOrderBase].[SubmitDate],
    [SalesOrderBase].[OwningBusinessUnit],
    [SalesOrderBase].[SubmitStatusDescription],
    [SalesOrderBase].[PriceLevelId],
    [SalesOrderBase].[LastBackofficeSubmit],
    [SalesOrderBase].[OrderNumber],
    [SalesOrderBase].[Name],
    [SalesOrderBase].[PricingErrorCode],
    [SalesOrderBase].[Description],
    [SalesOrderBase].[DiscountAmount],
    [SalesOrderBase].[FreightAmount],
    [SalesOrderBase].[TotalAmount],
    [SalesOrderBase].[TotalLineItemAmount],
    [SalesOrderBase].[TotalLineItemDiscountAmount],
    [SalesOrderBase].[TotalAmountLessFreight],
    [SalesOrderBase].[TotalDiscountAmount],
    [SalesOrderBase].[RequestDeliveryBy],
    [SalesOrderBase].[TotalTax],
    [SalesOrderBase].[ShippingMethodCode],
    [SalesOrderBase].[PaymentTermsCode],
    [SalesOrderBase].[FreightTermsCode],
    [SalesOrderBase].[CreatedBy],
    [SalesOrderBase].[CreatedOn],
    [SalesOrderBase].[ModifiedBy],
    [SalesOrderBase].[ModifiedOn],
    [SalesOrderBase].[StateCode],
    [SalesOrderBase].[StatusCode],
    [SalesOrderBase].[ShipTo_Name],
    [SalesOrderBase].[VersionNumber],
    [SalesOrderBase].[ShipTo_Line1],
    [SalesOrderBase].[ShipTo_Line2],
    [SalesOrderBase].[ShipTo_Line3],
    [SalesOrderBase].[ShipTo_City],
    [SalesOrderBase].[ShipTo_StateOrProvince],
    [SalesOrderBase].[ShipTo_Country],
    [SalesOrderBase].[ShipTo_PostalCode],
    [SalesOrderBase].[WillCall],
    [SalesOrderBase].[ShipTo_Telephone],
    [SalesOrderBase].[BillTo_Name],
    [SalesOrderBase].[ShipTo_FreightTermsCode],
    [SalesOrderBase].[ShipTo_Fax],
    [SalesOrderBase].[BillTo_Line1],
    [SalesOrderBase].[BillTo_Line2],
    [SalesOrderBase].[BillTo_Line3],
    [SalesOrderBase].[BillTo_City],
    [SalesOrderBase].[BillTo_StateOrProvince],
    [SalesOrderBase].[BillTo_Country],
    [SalesOrderBase].[BillTo_PostalCode],
    [SalesOrderBase].[BillTo_Telephone],
    [SalesOrderBase].[BillTo_Fax],
    [SalesOrderBase].[DiscountPercentage],
    [SalesOrderBase].[CustomerId],
    [SalesOrderBase].[CustomerIdName],
    [SalesOrderBase].[CustomerIdType],
    [SalesOrderBase].[BillTo_ContactName],
    [SalesOrderBase].[CampaignId],
    [SalesOrderBase].[BillTo_AddressId],
    [SalesOrderBase].[ShipTo_AddressId],
    [SalesOrderBase].[IsPriceLocked],
    [SalesOrderBase].[DateFulfilled],
    [SalesOrderBase].[ShipTo_ContactName],
    [SalesOrderBase].[UTCConversionTimeZoneCode],
    [SalesOrderBase].[TransactionCurrencyId],
    [SalesOrderBase].[TimeZoneRuleVersionNumber],
    [SalesOrderBase].[ImportSequenceNumber],
    [SalesOrderBase].[ExchangeRate],
    [SalesOrderBase].[OverriddenCreatedOn],
    [SalesOrderBase].[TotalLineItemAmount_Base],
    [SalesOrderBase].[TotalDiscountAmount_Base],
    [SalesOrderBase].[TotalAmountLessFreight_Base],
    [SalesOrderBase].[TotalAmount_Base],
    [SalesOrderBase].[DiscountAmount_Base],
    [SalesOrderBase].[FreightAmount_Base],
    [SalesOrderBase].[TotalLineItemDiscountAmount_Base],
    [SalesOrderBase].[TotalTax_Base],
    [SalesOrderBase].[CustomerIdYomiName],
    [SalesOrderBase].[CreatedOnBehalfBy],
    [SalesOrderBase].[ModifiedOnBehalfBy],
    [SalesOrderBase].[BillTo_Composite],
    [SalesOrderBase].[ShipTo_Composite],
    [SalesOrderBase].[ProcessId],
    [SalesOrderBase].[StageId],
    [SalesOrderBase].[EntityImageId]
from [SalesOrderBase] 
    left join [CampaignBase] [campaign_orders] on ([SalesOrderBase].[CampaignId] = [campaign_orders].[CampaignId])
    left join [ImageDescriptor] [lk_salesorder_entityimage] on ([SalesOrderBase].[EntityImageId] = [lk_salesorder_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_salesorderbase_createdby] with(nolock) on ([SalesOrderBase].[CreatedBy] = [lk_salesorderbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_salesorderbase_createdonbehalfby] with(nolock) on ([SalesOrderBase].[CreatedOnBehalfBy] = [lk_salesorderbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_salesorderbase_modifiedby] with(nolock) on ([SalesOrderBase].[ModifiedBy] = [lk_salesorderbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_salesorderbase_modifiedonbehalfby] with(nolock) on ([SalesOrderBase].[ModifiedOnBehalfBy] = [lk_salesorderbase_modifiedonbehalfby].[SystemUserId])
    left join [OpportunityBase] [opportunity_sales_orders] on ([SalesOrderBase].[OpportunityId] = [opportunity_sales_orders].[OpportunityId])
    left join [PriceLevelBase] [price_level_orders] on ([SalesOrderBase].[PriceLevelId] = [price_level_orders].[PriceLevelId])
    left join [QuoteBase] [quote_orders] on ([SalesOrderBase].[QuoteId] = [quote_orders].[QuoteId])
    left join [TransactionCurrencyBase] [transactioncurrency_salesorder] on ([SalesOrderBase].[TransactionCurrencyId] = [transactioncurrency_salesorder].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([SalesOrderBase].OwnerId = XXowner.OwnerId)
