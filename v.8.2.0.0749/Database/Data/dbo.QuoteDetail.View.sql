USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[QuoteDetail]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for QuoteDetail
--
create view [dbo].[QuoteDetail]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OwnerId],
    [OwnerIdType],
    [OwningUser],
    [QuoteIdName],
    [OwningBusinessUnit],
    [QuoteStateCode],
    [TransactionCurrencyIdName],
    [ProductIdName],
    [SalesRepIdName],
    [SalesRepIdYomiName],
    [UoMIdName],

    -- physical attributes
    [QuoteDetailId],
    [QuoteId],
    [SalesRepId],
    [LineItemNumber],
    [UoMId],
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
    [ShipTo_Name],
    [IsPriceOverridden],
    [Tax],
    [ShipTo_Line1],
    [CreatedOn],
    [ShipTo_Line2],
    [CreatedBy],
    [ModifiedBy],
    [ShipTo_Line3],
    [ShipTo_City],
    [ModifiedOn],
    [ShipTo_StateOrProvince],
    [ShipTo_Country],
    [ShipTo_PostalCode],
    [WillCall],
    [IsProductOverridden],
    [ShipTo_Telephone],
    [ShipTo_Fax],
    [ShipTo_FreightTermsCode],
    [ShipTo_AddressId],
    [ShipTo_ContactName],
    [VersionNumber],
    [ImportSequenceNumber],
    [UTCConversionTimeZoneCode],
    [OverriddenCreatedOn],
    [TransactionCurrencyId],
    [ExchangeRate],
    [TimeZoneRuleVersionNumber],
    [Tax_Base],
    [ExtendedAmount_Base],
    [PricePerUnit_Base],
    [BaseAmount_Base],
    [ManualDiscountAmount_Base],
    [VolumeDiscountAmount_Base],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [SequenceNumber],
    [PropertyConfigurationStatus],
    [ProductAssociationId],
    [ParentBundleId],
    [ProductTypeCode]
) with view_metadata as
select
    -- logical attributes
    [lk_quotedetailbase_createdonbehalfby].[FullName],
    [lk_quotedetailbase_createdonbehalfby].[YomiFullName],
    [lk_quotedetailbase_modifiedonbehalfby].[FullName],
    [lk_quotedetailbase_modifiedonbehalfby].[YomiFullName],
    [lk_quotedetailbase_createdby].[FullName],
    [lk_quotedetailbase_createdby].[YomiFullName],
    [lk_quotedetailbase_modifiedby].[FullName],
    [lk_quotedetailbase_modifiedby].[YomiFullName],
    [quote_details].[OwnerId],
    [quote_details].[OwnerIdType],
    case when [quote_details].OwnerIdType = 8
    then [quote_details].OwnerId
    else null
    end,
    [quote_details].[Name],
    [quote_details].[OwningBusinessUnit],
    [quote_details].[StateCode],
    [transactioncurrency_quotedetail].[CurrencyName],
    [product_quote_details].[Name],
    [system_user_quotedetail].[FullName],
    [system_user_quotedetail].[YomiFullName],
    [unit_of_measurement_quote_details].[Name],

    -- physical attribute
    [QuoteDetailBase].[QuoteDetailId],
    [QuoteDetailBase].[QuoteId],
    [QuoteDetailBase].[SalesRepId],
    [QuoteDetailBase].[LineItemNumber],
    [QuoteDetailBase].[UoMId],
    [QuoteDetailBase].[ProductId],
    [QuoteDetailBase].[RequestDeliveryBy],
    [QuoteDetailBase].[Quantity],
    [QuoteDetailBase].[PricingErrorCode],
    [QuoteDetailBase].[ManualDiscountAmount],
    [QuoteDetailBase].[ProductDescription],
    [QuoteDetailBase].[VolumeDiscountAmount],
    [QuoteDetailBase].[PricePerUnit],
    [QuoteDetailBase].[BaseAmount],
    [QuoteDetailBase].[ExtendedAmount],
    [QuoteDetailBase].[Description],
    [QuoteDetailBase].[ShipTo_Name],
    [QuoteDetailBase].[IsPriceOverridden],
    [QuoteDetailBase].[Tax],
    [QuoteDetailBase].[ShipTo_Line1],
    [QuoteDetailBase].[CreatedOn],
    [QuoteDetailBase].[ShipTo_Line2],
    [QuoteDetailBase].[CreatedBy],
    [QuoteDetailBase].[ModifiedBy],
    [QuoteDetailBase].[ShipTo_Line3],
    [QuoteDetailBase].[ShipTo_City],
    [QuoteDetailBase].[ModifiedOn],
    [QuoteDetailBase].[ShipTo_StateOrProvince],
    [QuoteDetailBase].[ShipTo_Country],
    [QuoteDetailBase].[ShipTo_PostalCode],
    [QuoteDetailBase].[WillCall],
    [QuoteDetailBase].[IsProductOverridden],
    [QuoteDetailBase].[ShipTo_Telephone],
    [QuoteDetailBase].[ShipTo_Fax],
    [QuoteDetailBase].[ShipTo_FreightTermsCode],
    [QuoteDetailBase].[ShipTo_AddressId],
    [QuoteDetailBase].[ShipTo_ContactName],
    [QuoteDetailBase].[VersionNumber],
    [QuoteDetailBase].[ImportSequenceNumber],
    [QuoteDetailBase].[UTCConversionTimeZoneCode],
    [QuoteDetailBase].[OverriddenCreatedOn],
    [QuoteDetailBase].[TransactionCurrencyId],
    [QuoteDetailBase].[ExchangeRate],
    [QuoteDetailBase].[TimeZoneRuleVersionNumber],
    [QuoteDetailBase].[Tax_Base],
    [QuoteDetailBase].[ExtendedAmount_Base],
    [QuoteDetailBase].[PricePerUnit_Base],
    [QuoteDetailBase].[BaseAmount_Base],
    [QuoteDetailBase].[ManualDiscountAmount_Base],
    [QuoteDetailBase].[VolumeDiscountAmount_Base],
    [QuoteDetailBase].[CreatedOnBehalfBy],
    [QuoteDetailBase].[ModifiedOnBehalfBy],
    [QuoteDetailBase].[SequenceNumber],
    [QuoteDetailBase].[PropertyConfigurationStatus],
    [QuoteDetailBase].[ProductAssociationId],
    [QuoteDetailBase].[ParentBundleId],
    [QuoteDetailBase].[ProductTypeCode]
from [QuoteDetailBase] 
    left join [SystemUserBase] [lk_quotedetailbase_createdby] with(nolock) on ([QuoteDetailBase].[CreatedBy] = [lk_quotedetailbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_quotedetailbase_createdonbehalfby] with(nolock) on ([QuoteDetailBase].[CreatedOnBehalfBy] = [lk_quotedetailbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_quotedetailbase_modifiedby] with(nolock) on ([QuoteDetailBase].[ModifiedBy] = [lk_quotedetailbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_quotedetailbase_modifiedonbehalfby] with(nolock) on ([QuoteDetailBase].[ModifiedOnBehalfBy] = [lk_quotedetailbase_modifiedonbehalfby].[SystemUserId])
    left join [ProductBase] [product_quote_details] on ([QuoteDetailBase].[ProductId] = [product_quote_details].[ProductId])
    left join [QuoteBase] [quote_details] on ([QuoteDetailBase].[QuoteId] = [quote_details].[QuoteId])
    left join [SystemUserBase] [system_user_quotedetail] with(nolock) on ([QuoteDetailBase].[SalesRepId] = [system_user_quotedetail].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_quotedetail] on ([QuoteDetailBase].[TransactionCurrencyId] = [transactioncurrency_quotedetail].[TransactionCurrencyId])
    left join [UoMBase] [unit_of_measurement_quote_details] on ([QuoteDetailBase].[UoMId] = [unit_of_measurement_quote_details].[UoMId])

GO
