USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SalesOrderDetail]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for SalesOrderDetail
--
create view [dbo].[SalesOrderDetail]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [UoMIdName],
    [OwnerId],
    [OwnerIdType],
    [SalesOrderStateCode],
    [OwningBusinessUnit],
    [SalesOrderIsPriceLocked],
    [OwningUser],
    [SalesOrderIdName],
    [SalesRepIdYomiName],
    [SalesRepIdName],
    [ProductIdName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [SalesOrderDetailId],
    [SalesOrderId],
    [SalesRepId],
    [IsProductOverridden],
    [IsCopied],
    [QuantityShipped],
    [LineItemNumber],
    [QuantityBackordered],
    [UoMId],
    [QuantityCancelled],
    [ProductId],
    [RequestDeliveryBy],
    [Quantity],
    [PricingErrorCode],
    [ManualDiscountAmount],
    [ProductDescription],
    [VolumeDiscountAmount],
    [PricePerUnit],
    [BaseAmount],
    [ExtendedAmount],
    [Description],
    [IsPriceOverridden],
    [ShipTo_Name],
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
    [ShipTo_ContactName],
    [VersionNumber],
    [ShipTo_AddressId],
    [TimeZoneRuleVersionNumber],
    [ImportSequenceNumber],
    [UTCConversionTimeZoneCode],
    [ExchangeRate],
    [OverriddenCreatedOn],
    [TransactionCurrencyId],
    [BaseAmount_Base],
    [PricePerUnit_Base],
    [VolumeDiscountAmount_Base],
    [ExtendedAmount_Base],
    [Tax_Base],
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
    [lk_salesorderdetailbase_modifiedonbehalfby].[YomiFullName],
    [lk_salesorderdetailbase_modifiedonbehalfby].[FullName],
    [lk_salesorderdetailbase_modifiedby].[YomiFullName],
    [lk_salesorderdetailbase_modifiedby].[FullName],
    [lk_salesorderdetailbase_createdonbehalfby].[FullName],
    [lk_salesorderdetailbase_createdonbehalfby].[YomiFullName],
    [lk_salesorderdetailbase_createdby].[YomiFullName],
    [lk_salesorderdetailbase_createdby].[FullName],
    [unit_of_measurement_order_details].[Name],
    [order_details].[OwnerId],
    [order_details].[OwnerIdType],
    [order_details].[StateCode],
    [order_details].[OwningBusinessUnit],
    [order_details].[IsPriceLocked],
    case when [order_details].OwnerIdType = 8
    then [order_details].OwnerId
    else null
    end,
    [order_details].[Name],
    [system_user_salesorderdetail].[YomiFullName],
    [system_user_salesorderdetail].[FullName],
    [product_order_details].[Name],
    [transactioncurrency_salesorderdetail].[CurrencyName],

    -- physical attribute
    [SalesOrderDetailBase].[SalesOrderDetailId],
    [SalesOrderDetailBase].[SalesOrderId],
    [SalesOrderDetailBase].[SalesRepId],
    [SalesOrderDetailBase].[IsProductOverridden],
    [SalesOrderDetailBase].[IsCopied],
    [SalesOrderDetailBase].[QuantityShipped],
    [SalesOrderDetailBase].[LineItemNumber],
    [SalesOrderDetailBase].[QuantityBackordered],
    [SalesOrderDetailBase].[UoMId],
    [SalesOrderDetailBase].[QuantityCancelled],
    [SalesOrderDetailBase].[ProductId],
    [SalesOrderDetailBase].[RequestDeliveryBy],
    [SalesOrderDetailBase].[Quantity],
    [SalesOrderDetailBase].[PricingErrorCode],
    [SalesOrderDetailBase].[ManualDiscountAmount],
    [SalesOrderDetailBase].[ProductDescription],
    [SalesOrderDetailBase].[VolumeDiscountAmount],
    [SalesOrderDetailBase].[PricePerUnit],
    [SalesOrderDetailBase].[BaseAmount],
    [SalesOrderDetailBase].[ExtendedAmount],
    [SalesOrderDetailBase].[Description],
    [SalesOrderDetailBase].[IsPriceOverridden],
    [SalesOrderDetailBase].[ShipTo_Name],
    [SalesOrderDetailBase].[Tax],
    [SalesOrderDetailBase].[CreatedOn],
    [SalesOrderDetailBase].[ShipTo_Line1],
    [SalesOrderDetailBase].[CreatedBy],
    [SalesOrderDetailBase].[ModifiedBy],
    [SalesOrderDetailBase].[ShipTo_Line2],
    [SalesOrderDetailBase].[ShipTo_Line3],
    [SalesOrderDetailBase].[ModifiedOn],
    [SalesOrderDetailBase].[ShipTo_City],
    [SalesOrderDetailBase].[ShipTo_StateOrProvince],
    [SalesOrderDetailBase].[ShipTo_Country],
    [SalesOrderDetailBase].[ShipTo_PostalCode],
    [SalesOrderDetailBase].[WillCall],
    [SalesOrderDetailBase].[ShipTo_Telephone],
    [SalesOrderDetailBase].[ShipTo_Fax],
    [SalesOrderDetailBase].[ShipTo_FreightTermsCode],
    [SalesOrderDetailBase].[ShipTo_ContactName],
    [SalesOrderDetailBase].[VersionNumber],
    [SalesOrderDetailBase].[ShipTo_AddressId],
    [SalesOrderDetailBase].[TimeZoneRuleVersionNumber],
    [SalesOrderDetailBase].[ImportSequenceNumber],
    [SalesOrderDetailBase].[UTCConversionTimeZoneCode],
    [SalesOrderDetailBase].[ExchangeRate],
    [SalesOrderDetailBase].[OverriddenCreatedOn],
    [SalesOrderDetailBase].[TransactionCurrencyId],
    [SalesOrderDetailBase].[BaseAmount_Base],
    [SalesOrderDetailBase].[PricePerUnit_Base],
    [SalesOrderDetailBase].[VolumeDiscountAmount_Base],
    [SalesOrderDetailBase].[ExtendedAmount_Base],
    [SalesOrderDetailBase].[Tax_Base],
    [SalesOrderDetailBase].[ManualDiscountAmount_Base],
    [SalesOrderDetailBase].[CreatedOnBehalfBy],
    [SalesOrderDetailBase].[ModifiedOnBehalfBy],
    [SalesOrderDetailBase].[SequenceNumber],
    [SalesOrderDetailBase].[ParentBundleId],
    [SalesOrderDetailBase].[ProductTypeCode],
    [SalesOrderDetailBase].[PropertyConfigurationStatus],
    [SalesOrderDetailBase].[ProductAssociationId]
from [SalesOrderDetailBase] 
    left join [SystemUserBase] [lk_salesorderdetailbase_createdby] with(nolock) on ([SalesOrderDetailBase].[CreatedBy] = [lk_salesorderdetailbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_salesorderdetailbase_createdonbehalfby] with(nolock) on ([SalesOrderDetailBase].[CreatedOnBehalfBy] = [lk_salesorderdetailbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_salesorderdetailbase_modifiedby] with(nolock) on ([SalesOrderDetailBase].[ModifiedBy] = [lk_salesorderdetailbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_salesorderdetailbase_modifiedonbehalfby] with(nolock) on ([SalesOrderDetailBase].[ModifiedOnBehalfBy] = [lk_salesorderdetailbase_modifiedonbehalfby].[SystemUserId])
    left join [SalesOrderBase] [order_details] on ([SalesOrderDetailBase].[SalesOrderId] = [order_details].[SalesOrderId])
    left join [ProductBase] [product_order_details] on ([SalesOrderDetailBase].[ProductId] = [product_order_details].[ProductId])
    left join [SystemUserBase] [system_user_salesorderdetail] with(nolock) on ([SalesOrderDetailBase].[SalesRepId] = [system_user_salesorderdetail].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_salesorderdetail] on ([SalesOrderDetailBase].[TransactionCurrencyId] = [transactioncurrency_salesorderdetail].[TransactionCurrencyId])
    left join [UoMBase] [unit_of_measurement_order_details] on ([SalesOrderDetailBase].[UoMId] = [unit_of_measurement_order_details].[UoMId])

GO
