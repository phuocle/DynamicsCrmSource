USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[InvoiceDetail]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for InvoiceDetail
--
create view [dbo].[InvoiceDetail]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [OwnerId],
    [OwnerIdType],
    [InvoiceIsPriceLocked],
    [InvoiceIdName],
    [OwningUser],
    [InvoiceStateCode],
    [OwningBusinessUnit],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [SalesRepIdYomiName],
    [SalesRepIdName],
    [TransactionCurrencyIdName],
    [ProductIdName],
    [UoMIdName],

    -- physical attributes
    [InvoiceDetailId],
    [SalesRepId],
    [IsProductOverridden],
    [LineItemNumber],
    [IsCopied],
    [InvoiceId],
    [QuantityBackordered],
    [UoMId],
    [ProductId],
    [ActualDeliveryOn],
    [Quantity],
    [ManualDiscountAmount],
    [ProductDescription],
    [VolumeDiscountAmount],
    [PricePerUnit],
    [BaseAmount],
    [QuantityCancelled],
    [ShippingTrackingNumber],
    [ExtendedAmount],
    [Description],
    [IsPriceOverridden],
    [ShipTo_Name],
    [PricingErrorCode],
    [Tax],
    [CreatedOn],
    [ShipTo_Line1],
    [CreatedBy],
    [ModifiedBy],
    [ShipTo_Line2],
    [ShipTo_Line3],
    [ModifiedOn],
    [ShipTo_City],
    [ShipTo_StateOrProvince],
    [ShipTo_Country],
    [ShipTo_PostalCode],
    [WillCall],
    [ShipTo_Telephone],
    [ShipTo_Fax],
    [ShipTo_FreightTermsCode],
    [QuantityShipped],
    [VersionNumber],
    [ExchangeRate],
    [TransactionCurrencyId],
    [UTCConversionTimeZoneCode],
    [TimeZoneRuleVersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [VolumeDiscountAmount_Base],
    [BaseAmount_Base],
    [PricePerUnit_Base],
    [Tax_Base],
    [ExtendedAmount_Base],
    [ManualDiscountAmount_Base],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [SequenceNumber],
    [ParentBundleId],
    [ProductTypeCode],
    [PropertyConfigurationStatus],
    [ProductAssociationId]
) with view_metadata as
select
    -- logical attributes
    [lk_invoicedetailbase_createdby].[YomiFullName],
    [lk_invoicedetailbase_createdby].[FullName],
    [lk_invoicedetailbase_modifiedby].[FullName],
    [lk_invoicedetailbase_modifiedby].[YomiFullName],
    [lk_invoicedetailbase_modifiedonbehalfby].[YomiFullName],
    [lk_invoicedetailbase_modifiedonbehalfby].[FullName],
    [invoice_details].[OwnerId],
    [invoice_details].[OwnerIdType],
    [invoice_details].[IsPriceLocked],
    [invoice_details].[Name],
    case when [invoice_details].OwnerIdType = 8
    then [invoice_details].OwnerId
    else null
    end,
    [invoice_details].[StateCode],
    [invoice_details].[OwningBusinessUnit],
    [lk_invoicedetailbase_createdonbehalfby].[FullName],
    [lk_invoicedetailbase_createdonbehalfby].[YomiFullName],
    [system_user_invoicedetail].[YomiFullName],
    [system_user_invoicedetail].[FullName],
    [transactioncurrency_invoicedetail].[CurrencyName],
    [product_invoice_details].[Name],
    [unit_of_measurement_invoice_details].[Name],

    -- physical attribute
    [InvoiceDetailBase].[InvoiceDetailId],
    [InvoiceDetailBase].[SalesRepId],
    [InvoiceDetailBase].[IsProductOverridden],
    [InvoiceDetailBase].[LineItemNumber],
    [InvoiceDetailBase].[IsCopied],
    [InvoiceDetailBase].[InvoiceId],
    [InvoiceDetailBase].[QuantityBackordered],
    [InvoiceDetailBase].[UoMId],
    [InvoiceDetailBase].[ProductId],
    [InvoiceDetailBase].[ActualDeliveryOn],
    [InvoiceDetailBase].[Quantity],
    [InvoiceDetailBase].[ManualDiscountAmount],
    [InvoiceDetailBase].[ProductDescription],
    [InvoiceDetailBase].[VolumeDiscountAmount],
    [InvoiceDetailBase].[PricePerUnit],
    [InvoiceDetailBase].[BaseAmount],
    [InvoiceDetailBase].[QuantityCancelled],
    [InvoiceDetailBase].[ShippingTrackingNumber],
    [InvoiceDetailBase].[ExtendedAmount],
    [InvoiceDetailBase].[Description],
    [InvoiceDetailBase].[IsPriceOverridden],
    [InvoiceDetailBase].[ShipTo_Name],
    [InvoiceDetailBase].[PricingErrorCode],
    [InvoiceDetailBase].[Tax],
    [InvoiceDetailBase].[CreatedOn],
    [InvoiceDetailBase].[ShipTo_Line1],
    [InvoiceDetailBase].[CreatedBy],
    [InvoiceDetailBase].[ModifiedBy],
    [InvoiceDetailBase].[ShipTo_Line2],
    [InvoiceDetailBase].[ShipTo_Line3],
    [InvoiceDetailBase].[ModifiedOn],
    [InvoiceDetailBase].[ShipTo_City],
    [InvoiceDetailBase].[ShipTo_StateOrProvince],
    [InvoiceDetailBase].[ShipTo_Country],
    [InvoiceDetailBase].[ShipTo_PostalCode],
    [InvoiceDetailBase].[WillCall],
    [InvoiceDetailBase].[ShipTo_Telephone],
    [InvoiceDetailBase].[ShipTo_Fax],
    [InvoiceDetailBase].[ShipTo_FreightTermsCode],
    [InvoiceDetailBase].[QuantityShipped],
    [InvoiceDetailBase].[VersionNumber],
    [InvoiceDetailBase].[ExchangeRate],
    [InvoiceDetailBase].[TransactionCurrencyId],
    [InvoiceDetailBase].[UTCConversionTimeZoneCode],
    [InvoiceDetailBase].[TimeZoneRuleVersionNumber],
    [InvoiceDetailBase].[ImportSequenceNumber],
    [InvoiceDetailBase].[OverriddenCreatedOn],
    [InvoiceDetailBase].[VolumeDiscountAmount_Base],
    [InvoiceDetailBase].[BaseAmount_Base],
    [InvoiceDetailBase].[PricePerUnit_Base],
    [InvoiceDetailBase].[Tax_Base],
    [InvoiceDetailBase].[ExtendedAmount_Base],
    [InvoiceDetailBase].[ManualDiscountAmount_Base],
    [InvoiceDetailBase].[CreatedOnBehalfBy],
    [InvoiceDetailBase].[ModifiedOnBehalfBy],
    [InvoiceDetailBase].[SequenceNumber],
    [InvoiceDetailBase].[ParentBundleId],
    [InvoiceDetailBase].[ProductTypeCode],
    [InvoiceDetailBase].[PropertyConfigurationStatus],
    [InvoiceDetailBase].[ProductAssociationId]
from [InvoiceDetailBase] 
    left join [InvoiceBase] [invoice_details] on ([InvoiceDetailBase].[InvoiceId] = [invoice_details].[InvoiceId])
    left join [SystemUserBase] [lk_invoicedetailbase_createdby] with(nolock) on ([InvoiceDetailBase].[CreatedBy] = [lk_invoicedetailbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_invoicedetailbase_createdonbehalfby] with(nolock) on ([InvoiceDetailBase].[CreatedOnBehalfBy] = [lk_invoicedetailbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_invoicedetailbase_modifiedby] with(nolock) on ([InvoiceDetailBase].[ModifiedBy] = [lk_invoicedetailbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_invoicedetailbase_modifiedonbehalfby] with(nolock) on ([InvoiceDetailBase].[ModifiedOnBehalfBy] = [lk_invoicedetailbase_modifiedonbehalfby].[SystemUserId])
    left join [ProductBase] [product_invoice_details] on ([InvoiceDetailBase].[ProductId] = [product_invoice_details].[ProductId])
    left join [SystemUserBase] [system_user_invoicedetail] with(nolock) on ([InvoiceDetailBase].[SalesRepId] = [system_user_invoicedetail].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_invoicedetail] on ([InvoiceDetailBase].[TransactionCurrencyId] = [transactioncurrency_invoicedetail].[TransactionCurrencyId])
    left join [UoMBase] [unit_of_measurement_invoice_details] on ([InvoiceDetailBase].[UoMId] = [unit_of_measurement_invoice_details].[UoMId])

GO
