


--
-- base view for SalesOrder
--
create view dbo.[SalesOrder]
 (
    -- logical attributes
    [OpportunityIdName],
    [SLAInvokedIdName],
    [EntityImage],
    [SLAName],
    [CampaignIdName],
    [PriceLevelIdName],
    [EntityImage_Timestamp],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [QuoteIdName],
    [TransactionCurrencyIdName],
    [EntityImage_URL],

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
    [CustomerId],
    [DateFulfilled],
    [Description],
    [DiscountAmount],
    [TransactionCurrencyId],
    [ExchangeRate],
    [DiscountAmount_Base],
    [DiscountPercentage],
    [FreightAmount],
    [FreightAmount_Base],
    [FreightTermsCode],
    [IsPriceLocked],
    [LastBackofficeSubmit],
    [OpportunityId],
    [OrderNumber],
    [PaymentTermsCode],
    [PriceLevelId],
    [PricingErrorCode],
    [PriorityCode],
    [QuoteId],
    [RequestDeliveryBy],
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
    [SubmitDate],
    [SubmitStatus],
    [SubmitStatusDescription],
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
    [WillCall],
    [OnHoldTime],
    [LastOnHoldTime],
    [SLAId],
    [SLAInvokedId],
    [EntityImageId],
    [CustomerIdName],
    [CustomerIdType],
    [CustomerIdYomiName],
    [CampaignId],
    [SkipPriceCalculation]
) with view_metadata as
select
    -- logical attributes
    [opportunity_sales_orders].[Name],
    [sla_salesorder].[Name],
    [lk_salesorder_entityimage].[ImageData],
    [manualsla_salesorder].[Name],
    [campaign_orders].[Name],
    [price_level_orders].[Name],
    [lk_salesorder_entityimage].[ImageTimestamp],
    [lk_salesorderbase_createdby].[FullName],
    [lk_salesorderbase_createdby].[YomiFullName],
    [lk_salesorderbase_createdonbehalfby].[FullName],
    [lk_salesorderbase_createdonbehalfby].[YomiFullName],
    [lk_salesorderbase_modifiedby].[FullName],
    [lk_salesorderbase_modifiedby].[YomiFullName],
    [lk_salesorderbase_modifiedonbehalfby].[FullName],
    [lk_salesorderbase_modifiedonbehalfby].[YomiFullName],
    [quote_orders].[Name],
    [transactioncurrency_salesorder].[CurrencyName],
    [lk_salesorder_entityimage].[ImageURL],

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
    [SalesOrderBase].[CreatedOn],
    [SalesOrderBase].[CreatedBy],
    [SalesOrderBase].[ModifiedOn],
    [SalesOrderBase].[ModifiedBy],
    [SalesOrderBase].[CreatedOnBehalfBy],
    [SalesOrderBase].[ModifiedOnBehalfBy],
    [SalesOrderBase].[OwningBusinessUnit],
    [SalesOrderBase].[VersionNumber],
    [SalesOrderBase].[EmailAddress],
    [SalesOrderBase].[ImportSequenceNumber],
    [SalesOrderBase].[OverriddenCreatedOn],
    [SalesOrderBase].[TimeZoneRuleVersionNumber],
    [SalesOrderBase].[UTCConversionTimeZoneCode],
    [SalesOrderBase].[Name],
    [SalesOrderBase].[ProcessId],
    [SalesOrderBase].[StageId],
    [SalesOrderBase].[TraversedPath],
    [SalesOrderBase].[BillTo_AddressId],
    [SalesOrderBase].[BillTo_City],
    [SalesOrderBase].[BillTo_Composite],
    [SalesOrderBase].[BillTo_ContactName],
    [SalesOrderBase].[BillTo_Country],
    [SalesOrderBase].[BillTo_Fax],
    [SalesOrderBase].[BillTo_Line1],
    [SalesOrderBase].[BillTo_Line2],
    [SalesOrderBase].[BillTo_Line3],
    [SalesOrderBase].[BillTo_Name],
    [SalesOrderBase].[BillTo_PostalCode],
    [SalesOrderBase].[BillTo_StateOrProvince],
    [SalesOrderBase].[BillTo_Telephone],
    [SalesOrderBase].[CustomerId],
    [SalesOrderBase].[DateFulfilled],
    [SalesOrderBase].[Description],
    [SalesOrderBase].[DiscountAmount],
    [SalesOrderBase].[TransactionCurrencyId],
    [SalesOrderBase].[ExchangeRate],
    [SalesOrderBase].[DiscountAmount_Base],
    [SalesOrderBase].[DiscountPercentage],
    [SalesOrderBase].[FreightAmount],
    [SalesOrderBase].[FreightAmount_Base],
    [SalesOrderBase].[FreightTermsCode],
    [SalesOrderBase].[IsPriceLocked],
    [SalesOrderBase].[LastBackofficeSubmit],
    [SalesOrderBase].[OpportunityId],
    [SalesOrderBase].[OrderNumber],
    [SalesOrderBase].[PaymentTermsCode],
    [SalesOrderBase].[PriceLevelId],
    [SalesOrderBase].[PricingErrorCode],
    [SalesOrderBase].[PriorityCode],
    [SalesOrderBase].[QuoteId],
    [SalesOrderBase].[RequestDeliveryBy],
    [SalesOrderBase].[ShippingMethodCode],
    [SalesOrderBase].[ShipTo_AddressId],
    [SalesOrderBase].[ShipTo_City],
    [SalesOrderBase].[ShipTo_Composite],
    [SalesOrderBase].[ShipTo_ContactName],
    [SalesOrderBase].[ShipTo_Country],
    [SalesOrderBase].[ShipTo_Fax],
    [SalesOrderBase].[ShipTo_FreightTermsCode],
    [SalesOrderBase].[ShipTo_Line1],
    [SalesOrderBase].[ShipTo_Line2],
    [SalesOrderBase].[ShipTo_Line3],
    [SalesOrderBase].[ShipTo_Name],
    [SalesOrderBase].[ShipTo_PostalCode],
    [SalesOrderBase].[ShipTo_StateOrProvince],
    [SalesOrderBase].[ShipTo_Telephone],
    [SalesOrderBase].[StateCode],
    [SalesOrderBase].[StatusCode],
    [SalesOrderBase].[SubmitDate],
    [SalesOrderBase].[SubmitStatus],
    [SalesOrderBase].[SubmitStatusDescription],
    [SalesOrderBase].[TotalAmount],
    [SalesOrderBase].[TotalAmount_Base],
    [SalesOrderBase].[TotalAmountLessFreight],
    [SalesOrderBase].[TotalAmountLessFreight_Base],
    [SalesOrderBase].[TotalDiscountAmount],
    [SalesOrderBase].[TotalDiscountAmount_Base],
    [SalesOrderBase].[TotalLineItemAmount],
    [SalesOrderBase].[TotalLineItemAmount_Base],
    [SalesOrderBase].[TotalLineItemDiscountAmount],
    [SalesOrderBase].[TotalLineItemDiscountAmount_Base],
    [SalesOrderBase].[TotalTax],
    [SalesOrderBase].[TotalTax_Base],
    [SalesOrderBase].[WillCall],
    [SalesOrderBase].[OnHoldTime],
    [SalesOrderBase].[LastOnHoldTime],
    [SalesOrderBase].[SLAId],
    [SalesOrderBase].[SLAInvokedId],
    [SalesOrderBase].[EntityImageId],
    [SalesOrderBase].[CustomerIdName],
    [SalesOrderBase].[CustomerIdType],
    [SalesOrderBase].[CustomerIdYomiName],
    [SalesOrderBase].[CampaignId],
    [SalesOrderBase].[SkipPriceCalculation]
from [SalesOrderBase] 
    left join [CampaignBase] [campaign_orders] on ([SalesOrderBase].[CampaignId] = [campaign_orders].[CampaignId])
    left join [ImageDescriptor] [lk_salesorder_entityimage] on ([SalesOrderBase].[EntityImageId] = [lk_salesorder_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_salesorderbase_createdby] on ([SalesOrderBase].[CreatedBy] = [lk_salesorderbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_salesorderbase_createdonbehalfby] on ([SalesOrderBase].[CreatedOnBehalfBy] = [lk_salesorderbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_salesorderbase_modifiedby] on ([SalesOrderBase].[ModifiedBy] = [lk_salesorderbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_salesorderbase_modifiedonbehalfby] on ([SalesOrderBase].[ModifiedOnBehalfBy] = [lk_salesorderbase_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_salesorder] on ([SalesOrderBase].[SLAId] = [manualsla_salesorder].[SLAId] and [manualsla_salesorder].OverwriteTime = 0 and [manualsla_salesorder].ComponentState = 0)
    left join [OpportunityBase] [opportunity_sales_orders] on ([SalesOrderBase].[OpportunityId] = [opportunity_sales_orders].[OpportunityId])
    left join [PriceLevelBase] [price_level_orders] on ([SalesOrderBase].[PriceLevelId] = [price_level_orders].[PriceLevelId])
    left join [QuoteBase] [quote_orders] on ([SalesOrderBase].[QuoteId] = [quote_orders].[QuoteId])
    left join [SLABase] [sla_salesorder] on ([SalesOrderBase].[SLAInvokedId] = [sla_salesorder].[SLAId] and [sla_salesorder].OverwriteTime = 0 and [sla_salesorder].ComponentState = 0)
    left join [TransactionCurrencyBase] [transactioncurrency_salesorder] on ([SalesOrderBase].[TransactionCurrencyId] = [transactioncurrency_salesorder].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([SalesOrderBase].OwnerId = XXowner.OwnerId)
