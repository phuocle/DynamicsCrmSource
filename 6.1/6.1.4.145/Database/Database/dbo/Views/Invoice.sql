


--
-- base view for Invoice
--
create view dbo.[Invoice]
 (
    -- logical attributes
    [OpportunityIdName],
    [ModifiedByName],
    [CreatedByYomiName],
    [SalesOrderIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [EntityImage],
    [EntityImage_Timestamp],
    [PriceLevelIdName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [EntityImage_URL],
    [ModifiedByYomiName],
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
    [InvoiceId],
    [OpportunityId],
    [PriorityCode],
    [SalesOrderId],
    [OwningBusinessUnit],
    [LastBackofficeSubmit],
    [PriceLevelId],
    [InvoiceNumber],
    [Name],
    [Description],
    [DiscountAmount],
    [FreightAmount],
    [TotalAmount],
    [TotalLineItemAmount],
    [TotalLineItemDiscountAmount],
    [TotalAmountLessFreight],
    [TotalDiscountAmount],
    [CreatedBy],
    [TotalTax],
    [ShippingMethodCode],
    [PaymentTermsCode],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [StateCode],
    [StatusCode],
    [ShipTo_Name],
    [VersionNumber],
    [PricingErrorCode],
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
    [IsPriceLocked],
    [DateDelivered],
    [DueDate],
    [TimeZoneRuleVersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [ExchangeRate],
    [UTCConversionTimeZoneCode],
    [TransactionCurrencyId],
    [TotalLineItemAmount_Base],
    [TotalLineItemDiscountAmount_Base],
    [TotalTax_Base],
    [TotalAmountLessFreight_Base],
    [DiscountAmount_Base],
    [TotalAmount_Base],
    [FreightAmount_Base],
    [TotalDiscountAmount_Base],
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
    [opportunity_invoices].[Name],
    [lk_invoicebase_modifiedby].[FullName],
    [lk_invoicebase_createdby].[YomiFullName],
    [order_invoices].[Name],
    [lk_invoicebase_createdonbehalfby].[FullName],
    [lk_invoicebase_createdonbehalfby].[YomiFullName],
    [lk_invoice_entityimage].[ImageData],
    [lk_invoice_entityimage].[ImageTimestamp],
    [price_level_invoices].[Name],
    [lk_invoicebase_modifiedonbehalfby].[YomiFullName],
    [lk_invoicebase_createdby].[FullName],
    [lk_invoicebase_modifiedonbehalfby].[FullName],
    [lk_invoice_entityimage].[ImageURL],
    [lk_invoicebase_modifiedby].[YomiFullName],
    [transactioncurrency_invoice].[CurrencyName],

    -- ownership entries
    OwnerId = [InvoiceBase].OwnerId,
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
		when [InvoiceBase].[CustomerIdType] = 1 AND [InvoiceBase].[CustomerId] IS NOT NULL then [InvoiceBase].[CustomerId]
		else NULL
		end,
	[AccountIdName] = case 
		when [InvoiceBase].[CustomerIdType] = 1 AND [InvoiceBase].[CustomerId] IS NOT NULL then [InvoiceBase].[CustomerIdName]
		else NULL
		end,
	[AccountIdYomiName] = case 
		when [InvoiceBase].[CustomerIdType] = 1 AND [InvoiceBase].[CustomerId] IS NOT NULL then [InvoiceBase].[CustomerIdYomiName]
		else NULL
		end,
	[ContactId] = case 
		when [InvoiceBase].[CustomerIdType] = 2 AND [InvoiceBase].[CustomerId] IS NOT NULL then [InvoiceBase].[CustomerId]
		else NULL
		end,
	[ContactIdName] = case 
		when [InvoiceBase].[CustomerIdType] = 2 AND [InvoiceBase].[CustomerId] IS NOT NULL then [InvoiceBase].[CustomerIdName]
		else NULL
		end,
	[ContactIdYomiName] = case 
		when [InvoiceBase].[CustomerIdType] = 2 AND [InvoiceBase].[CustomerId] IS NOT NULL then [InvoiceBase].[CustomerIdYomiName]
		else NULL
		end,
    -- physical attribute
    [InvoiceBase].[InvoiceId],
    [InvoiceBase].[OpportunityId],
    [InvoiceBase].[PriorityCode],
    [InvoiceBase].[SalesOrderId],
    [InvoiceBase].[OwningBusinessUnit],
    [InvoiceBase].[LastBackofficeSubmit],
    [InvoiceBase].[PriceLevelId],
    [InvoiceBase].[InvoiceNumber],
    [InvoiceBase].[Name],
    [InvoiceBase].[Description],
    [InvoiceBase].[DiscountAmount],
    [InvoiceBase].[FreightAmount],
    [InvoiceBase].[TotalAmount],
    [InvoiceBase].[TotalLineItemAmount],
    [InvoiceBase].[TotalLineItemDiscountAmount],
    [InvoiceBase].[TotalAmountLessFreight],
    [InvoiceBase].[TotalDiscountAmount],
    [InvoiceBase].[CreatedBy],
    [InvoiceBase].[TotalTax],
    [InvoiceBase].[ShippingMethodCode],
    [InvoiceBase].[PaymentTermsCode],
    [InvoiceBase].[CreatedOn],
    [InvoiceBase].[ModifiedBy],
    [InvoiceBase].[ModifiedOn],
    [InvoiceBase].[StateCode],
    [InvoiceBase].[StatusCode],
    [InvoiceBase].[ShipTo_Name],
    [InvoiceBase].[VersionNumber],
    [InvoiceBase].[PricingErrorCode],
    [InvoiceBase].[ShipTo_Line1],
    [InvoiceBase].[ShipTo_Line2],
    [InvoiceBase].[ShipTo_Line3],
    [InvoiceBase].[ShipTo_City],
    [InvoiceBase].[ShipTo_StateOrProvince],
    [InvoiceBase].[ShipTo_Country],
    [InvoiceBase].[ShipTo_PostalCode],
    [InvoiceBase].[WillCall],
    [InvoiceBase].[ShipTo_Telephone],
    [InvoiceBase].[BillTo_Name],
    [InvoiceBase].[ShipTo_FreightTermsCode],
    [InvoiceBase].[ShipTo_Fax],
    [InvoiceBase].[BillTo_Line1],
    [InvoiceBase].[BillTo_Line2],
    [InvoiceBase].[BillTo_Line3],
    [InvoiceBase].[BillTo_City],
    [InvoiceBase].[BillTo_StateOrProvince],
    [InvoiceBase].[BillTo_Country],
    [InvoiceBase].[BillTo_PostalCode],
    [InvoiceBase].[BillTo_Telephone],
    [InvoiceBase].[BillTo_Fax],
    [InvoiceBase].[DiscountPercentage],
    [InvoiceBase].[CustomerId],
    [InvoiceBase].[CustomerIdName],
    [InvoiceBase].[CustomerIdType],
    [InvoiceBase].[IsPriceLocked],
    [InvoiceBase].[DateDelivered],
    [InvoiceBase].[DueDate],
    [InvoiceBase].[TimeZoneRuleVersionNumber],
    [InvoiceBase].[ImportSequenceNumber],
    [InvoiceBase].[OverriddenCreatedOn],
    [InvoiceBase].[ExchangeRate],
    [InvoiceBase].[UTCConversionTimeZoneCode],
    [InvoiceBase].[TransactionCurrencyId],
    [InvoiceBase].[TotalLineItemAmount_Base],
    [InvoiceBase].[TotalLineItemDiscountAmount_Base],
    [InvoiceBase].[TotalTax_Base],
    [InvoiceBase].[TotalAmountLessFreight_Base],
    [InvoiceBase].[DiscountAmount_Base],
    [InvoiceBase].[TotalAmount_Base],
    [InvoiceBase].[FreightAmount_Base],
    [InvoiceBase].[TotalDiscountAmount_Base],
    [InvoiceBase].[CustomerIdYomiName],
    [InvoiceBase].[CreatedOnBehalfBy],
    [InvoiceBase].[ModifiedOnBehalfBy],
    [InvoiceBase].[BillTo_Composite],
    [InvoiceBase].[ShipTo_Composite],
    [InvoiceBase].[ProcessId],
    [InvoiceBase].[StageId],
    [InvoiceBase].[EntityImageId]
from [InvoiceBase] 
    left join [ImageDescriptor] [lk_invoice_entityimage] on ([InvoiceBase].[EntityImageId] = [lk_invoice_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_invoicebase_createdby] with(nolock) on ([InvoiceBase].[CreatedBy] = [lk_invoicebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_invoicebase_createdonbehalfby] with(nolock) on ([InvoiceBase].[CreatedOnBehalfBy] = [lk_invoicebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_invoicebase_modifiedby] with(nolock) on ([InvoiceBase].[ModifiedBy] = [lk_invoicebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_invoicebase_modifiedonbehalfby] with(nolock) on ([InvoiceBase].[ModifiedOnBehalfBy] = [lk_invoicebase_modifiedonbehalfby].[SystemUserId])
    left join [OpportunityBase] [opportunity_invoices] on ([InvoiceBase].[OpportunityId] = [opportunity_invoices].[OpportunityId])
    left join [SalesOrderBase] [order_invoices] on ([InvoiceBase].[SalesOrderId] = [order_invoices].[SalesOrderId])
    left join [PriceLevelBase] [price_level_invoices] on ([InvoiceBase].[PriceLevelId] = [price_level_invoices].[PriceLevelId])
    left join [TransactionCurrencyBase] [transactioncurrency_invoice] on ([InvoiceBase].[TransactionCurrencyId] = [transactioncurrency_invoice].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([InvoiceBase].OwnerId = XXowner.OwnerId)
