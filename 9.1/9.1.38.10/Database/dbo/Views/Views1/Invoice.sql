


--
-- base view for Invoice
--
create view dbo.[Invoice]
 (
    -- logical attributes
    [EntityImage_Timestamp],
    [TransactionCurrencyIdName],
    [SLAName],
    [EntityImage],
    [EntityImage_URL],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [SalesOrderIdName],
    [SLAInvokedIdName],
    [OpportunityIdName],
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
    [InvoiceId],
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
    [BillTo_City],
    [BillTo_Composite],
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
    [DateDelivered],
    [Description],
    [DiscountAmount],
    [TransactionCurrencyId],
    [ExchangeRate],
    [DiscountAmount_Base],
    [DiscountPercentage],
    [DueDate],
    [FreightAmount],
    [FreightAmount_Base],
    [InvoiceNumber],
    [IsPriceLocked],
    [LastBackofficeSubmit],
    [OpportunityId],
    [PaymentTermsCode],
    [PriceLevelId],
    [PricingErrorCode],
    [PriorityCode],
    [SalesOrderId],
    [ShippingMethodCode],
    [ShipTo_City],
    [ShipTo_Composite],
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
    [WillCall],
    [SLAId],
    [SLAInvokedId],
    [OnHoldTime],
    [LastOnHoldTime],
    [EntityImageId],
    [CustomerIdName],
    [CustomerIdType],
    [CustomerIdYomiName],
    [SkipPriceCalculation]
) with view_metadata as
select
    -- logical attributes
    [lk_invoice_entityimage].[ImageTimestamp],
    [transactioncurrency_invoice].[CurrencyName],
    [manualsla_invoice].[Name],
    [lk_invoice_entityimage].[ImageData],
    [lk_invoice_entityimage].[ImageURL],
    [lk_invoicebase_createdby].[FullName],
    [lk_invoicebase_createdby].[YomiFullName],
    [lk_invoicebase_createdonbehalfby].[FullName],
    [lk_invoicebase_createdonbehalfby].[YomiFullName],
    [lk_invoicebase_modifiedby].[FullName],
    [lk_invoicebase_modifiedby].[YomiFullName],
    [lk_invoicebase_modifiedonbehalfby].[FullName],
    [lk_invoicebase_modifiedonbehalfby].[YomiFullName],
    [order_invoices].[Name],
    [sla_invoice].[Name],
    [opportunity_invoices].[Name],
    [price_level_invoices].[Name],

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
    [InvoiceBase].[CreatedOn],
    [InvoiceBase].[CreatedBy],
    [InvoiceBase].[ModifiedOn],
    [InvoiceBase].[ModifiedBy],
    [InvoiceBase].[CreatedOnBehalfBy],
    [InvoiceBase].[ModifiedOnBehalfBy],
    [InvoiceBase].[OwningBusinessUnit],
    [InvoiceBase].[VersionNumber],
    [InvoiceBase].[EmailAddress],
    [InvoiceBase].[ImportSequenceNumber],
    [InvoiceBase].[OverriddenCreatedOn],
    [InvoiceBase].[TimeZoneRuleVersionNumber],
    [InvoiceBase].[UTCConversionTimeZoneCode],
    [InvoiceBase].[Name],
    [InvoiceBase].[ProcessId],
    [InvoiceBase].[StageId],
    [InvoiceBase].[TraversedPath],
    [InvoiceBase].[BillTo_City],
    [InvoiceBase].[BillTo_Composite],
    [InvoiceBase].[BillTo_Country],
    [InvoiceBase].[BillTo_Fax],
    [InvoiceBase].[BillTo_Line1],
    [InvoiceBase].[BillTo_Line2],
    [InvoiceBase].[BillTo_Line3],
    [InvoiceBase].[BillTo_Name],
    [InvoiceBase].[BillTo_PostalCode],
    [InvoiceBase].[BillTo_StateOrProvince],
    [InvoiceBase].[BillTo_Telephone],
    [InvoiceBase].[CustomerId],
    [InvoiceBase].[DateDelivered],
    [InvoiceBase].[Description],
    [InvoiceBase].[DiscountAmount],
    [InvoiceBase].[TransactionCurrencyId],
    [InvoiceBase].[ExchangeRate],
    [InvoiceBase].[DiscountAmount_Base],
    [InvoiceBase].[DiscountPercentage],
    [InvoiceBase].[DueDate],
    [InvoiceBase].[FreightAmount],
    [InvoiceBase].[FreightAmount_Base],
    [InvoiceBase].[InvoiceNumber],
    [InvoiceBase].[IsPriceLocked],
    [InvoiceBase].[LastBackofficeSubmit],
    [InvoiceBase].[OpportunityId],
    [InvoiceBase].[PaymentTermsCode],
    [InvoiceBase].[PriceLevelId],
    [InvoiceBase].[PricingErrorCode],
    [InvoiceBase].[PriorityCode],
    [InvoiceBase].[SalesOrderId],
    [InvoiceBase].[ShippingMethodCode],
    [InvoiceBase].[ShipTo_City],
    [InvoiceBase].[ShipTo_Composite],
    [InvoiceBase].[ShipTo_Country],
    [InvoiceBase].[ShipTo_Fax],
    [InvoiceBase].[ShipTo_FreightTermsCode],
    [InvoiceBase].[ShipTo_Line1],
    [InvoiceBase].[ShipTo_Line2],
    [InvoiceBase].[ShipTo_Line3],
    [InvoiceBase].[ShipTo_Name],
    [InvoiceBase].[ShipTo_PostalCode],
    [InvoiceBase].[ShipTo_StateOrProvince],
    [InvoiceBase].[ShipTo_Telephone],
    [InvoiceBase].[StateCode],
    [InvoiceBase].[StatusCode],
    [InvoiceBase].[TotalAmount],
    [InvoiceBase].[TotalAmount_Base],
    [InvoiceBase].[TotalAmountLessFreight],
    [InvoiceBase].[TotalAmountLessFreight_Base],
    [InvoiceBase].[TotalDiscountAmount],
    [InvoiceBase].[TotalDiscountAmount_Base],
    [InvoiceBase].[TotalLineItemAmount],
    [InvoiceBase].[TotalLineItemAmount_Base],
    [InvoiceBase].[TotalLineItemDiscountAmount],
    [InvoiceBase].[TotalLineItemDiscountAmount_Base],
    [InvoiceBase].[TotalTax],
    [InvoiceBase].[TotalTax_Base],
    [InvoiceBase].[WillCall],
    [InvoiceBase].[SLAId],
    [InvoiceBase].[SLAInvokedId],
    [InvoiceBase].[OnHoldTime],
    [InvoiceBase].[LastOnHoldTime],
    [InvoiceBase].[EntityImageId],
    [InvoiceBase].[CustomerIdName],
    [InvoiceBase].[CustomerIdType],
    [InvoiceBase].[CustomerIdYomiName],
    [InvoiceBase].[SkipPriceCalculation]
from [InvoiceBase] 
    left join [ImageDescriptor] [lk_invoice_entityimage] on ([InvoiceBase].[EntityImageId] = [lk_invoice_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_invoicebase_createdby] on ([InvoiceBase].[CreatedBy] = [lk_invoicebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_invoicebase_createdonbehalfby] on ([InvoiceBase].[CreatedOnBehalfBy] = [lk_invoicebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_invoicebase_modifiedby] on ([InvoiceBase].[ModifiedBy] = [lk_invoicebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_invoicebase_modifiedonbehalfby] on ([InvoiceBase].[ModifiedOnBehalfBy] = [lk_invoicebase_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_invoice] on ([InvoiceBase].[SLAId] = [manualsla_invoice].[SLAId] and [manualsla_invoice].OverwriteTime = 0 and [manualsla_invoice].ComponentState = 0)
    left join [OpportunityBase] [opportunity_invoices] on ([InvoiceBase].[OpportunityId] = [opportunity_invoices].[OpportunityId])
    left join [SalesOrderBase] [order_invoices] on ([InvoiceBase].[SalesOrderId] = [order_invoices].[SalesOrderId])
    left join [PriceLevelBase] [price_level_invoices] on ([InvoiceBase].[PriceLevelId] = [price_level_invoices].[PriceLevelId])
    left join [SLABase] [sla_invoice] on ([InvoiceBase].[SLAInvokedId] = [sla_invoice].[SLAId] and [sla_invoice].OverwriteTime = 0 and [sla_invoice].ComponentState = 0)
    left join [TransactionCurrencyBase] [transactioncurrency_invoice] on ([InvoiceBase].[TransactionCurrencyId] = [transactioncurrency_invoice].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([InvoiceBase].OwnerId = XXowner.OwnerId)
