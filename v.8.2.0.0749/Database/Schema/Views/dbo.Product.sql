SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for Product
--
create view [dbo].[Product]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByExternalPartyName],
    [CreatedByExternalPartyYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedByExternalPartyYomiName],
    [ModifiedByExternalPartyName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [EntityImage_Timestamp],
    [EntityImage],
    [EntityImage_URL],
    [TransactionCurrencyIdName],
    [OrganizationIdName],
    [ParentProductIdName],
    [SubjectIdName],
    [DefaultUoMScheduleIdName],
    [PriceLevelIdName],
    [DefaultUoMIdName],

    -- physical attributes
    [ProductId],
    [DefaultUoMScheduleId],
    [SubjectId],
    [OrganizationId],
    [Name],
    [DefaultUoMId],
    [PriceLevelId],
    [Description],
    [ProductTypeCode],
    [ProductUrl],
    [Price],
    [IsKit],
    [ProductNumber],
    [Size],
    [CurrentCost],
    [StockVolume],
    [StandardCost],
    [StockWeight],
    [QuantityDecimal],
    [QuantityOnHand],
    [IsStockItem],
    [SupplierName],
    [VendorName],
    [VendorPartNumber],
    [CreatedOn],
    [ModifiedOn],
    [CreatedBy],
    [StateCode],
    [ModifiedBy],
    [StatusCode],
    [VersionNumber],
    [OverriddenCreatedOn],
    [TransactionCurrencyId],
    [ExchangeRate],
    [UTCConversionTimeZoneCode],
    [ImportSequenceNumber],
    [TimeZoneRuleVersionNumber],
    [CurrentCost_Base],
    [Price_Base],
    [StandardCost_Base],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [EntityImageId],
    [ProcessId],
    [StageId],
    [ParentProductId],
    [ProductStructure],
    [VendorID],
    [TraversedPath],
    [ValidFromDate],
    [ValidToDate],
    [HierarchyPath],
    [CreatedByExternalParty],
    [ModifiedByExternalParty]
) with view_metadata as
select
    -- logical attributes
    [lk_productbase_modifiedby].[YomiFullName],
    [lk_productbase_modifiedby].[FullName],
    [lk_productbase_modifiedonbehalfby].[YomiFullName],
    [lk_productbase_modifiedonbehalfby].[FullName],
    [lk_externalparty_product_createdby].[FullName],
    [lk_externalparty_product_createdby].[YomiFullName],
    [lk_productbase_createdby].[YomiFullName],
    [lk_productbase_createdby].[FullName],
    [lk_externalparty_product_modifiedby].[YomiFullName],
    [lk_externalparty_product_modifiedby].[FullName],
    [lk_productbase_createdonbehalfby].[YomiFullName],
    [lk_productbase_createdonbehalfby].[FullName],
    [lk_product_entityimage].[ImageTimestamp],
    [lk_product_entityimage].[ImageData],
    [lk_product_entityimage].[ImageURL],
    [transactioncurrency_product].[CurrencyName],
    [organization_products].[Name],
    [product_parent_product].[Name],
    [subject_products].[Title],
    [unit_of_measurement_schedule_products].[Name],
    [price_level_products].[Name],
    [unit_of_measurement_products].[Name],

    -- physical attribute
    [ProductBase].[ProductId],
    [ProductBase].[DefaultUoMScheduleId],
    [ProductBase].[SubjectId],
    [ProductBase].[OrganizationId],
    [ProductBase].[Name],
    [ProductBase].[DefaultUoMId],
    [ProductBase].[PriceLevelId],
    [ProductBase].[Description],
    [ProductBase].[ProductTypeCode],
    [ProductBase].[ProductUrl],
    [ProductBase].[Price],
    [ProductBase].[IsKit],
    [ProductBase].[ProductNumber],
    [ProductBase].[Size],
    [ProductBase].[CurrentCost],
    [ProductBase].[StockVolume],
    [ProductBase].[StandardCost],
    [ProductBase].[StockWeight],
    [ProductBase].[QuantityDecimal],
    [ProductBase].[QuantityOnHand],
    [ProductBase].[IsStockItem],
    [ProductBase].[SupplierName],
    [ProductBase].[VendorName],
    [ProductBase].[VendorPartNumber],
    [ProductBase].[CreatedOn],
    [ProductBase].[ModifiedOn],
    [ProductBase].[CreatedBy],
    [ProductBase].[StateCode],
    [ProductBase].[ModifiedBy],
    [ProductBase].[StatusCode],
    [ProductBase].[VersionNumber],
    [ProductBase].[OverriddenCreatedOn],
    [ProductBase].[TransactionCurrencyId],
    [ProductBase].[ExchangeRate],
    [ProductBase].[UTCConversionTimeZoneCode],
    [ProductBase].[ImportSequenceNumber],
    [ProductBase].[TimeZoneRuleVersionNumber],
    [ProductBase].[CurrentCost_Base],
    [ProductBase].[Price_Base],
    [ProductBase].[StandardCost_Base],
    [ProductBase].[CreatedOnBehalfBy],
    [ProductBase].[ModifiedOnBehalfBy],
    [ProductBase].[EntityImageId],
    [ProductBase].[ProcessId],
    [ProductBase].[StageId],
    [ProductBase].[ParentProductId],
    [ProductBase].[ProductStructure],
    [ProductBase].[VendorID],
    [ProductBase].[TraversedPath],
    [ProductBase].[ValidFromDate],
    [ProductBase].[ValidToDate],
    [ProductBase].[HierarchyPath],
    [ProductBase].[CreatedByExternalParty],
    [ProductBase].[ModifiedByExternalParty]
from [ProductBase] 
    left join [ExternalPartyBase] [lk_externalparty_product_createdby] on ([ProductBase].[CreatedByExternalParty] = [lk_externalparty_product_createdby].[ExternalPartyId])
    left join [ExternalPartyBase] [lk_externalparty_product_modifiedby] on ([ProductBase].[ModifiedByExternalParty] = [lk_externalparty_product_modifiedby].[ExternalPartyId])
    left join [ImageDescriptor] [lk_product_entityimage] on ([ProductBase].[EntityImageId] = [lk_product_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_productbase_createdby] with(nolock) on ([ProductBase].[CreatedBy] = [lk_productbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_productbase_createdonbehalfby] with(nolock) on ([ProductBase].[CreatedOnBehalfBy] = [lk_productbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_productbase_modifiedby] with(nolock) on ([ProductBase].[ModifiedBy] = [lk_productbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_productbase_modifiedonbehalfby] with(nolock) on ([ProductBase].[ModifiedOnBehalfBy] = [lk_productbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_products] with(nolock) on ([ProductBase].[OrganizationId] = [organization_products].[OrganizationId])
    left join [PriceLevelBase] [price_level_products] on ([ProductBase].[PriceLevelId] = [price_level_products].[PriceLevelId])
    left join [ProductBase] [product_parent_product] on ([ProductBase].[ParentProductId] = [product_parent_product].[ProductId])
    left join [SubjectBase] [subject_products] on ([ProductBase].[SubjectId] = [subject_products].[SubjectId])
    left join [TransactionCurrencyBase] [transactioncurrency_product] on ([ProductBase].[TransactionCurrencyId] = [transactioncurrency_product].[TransactionCurrencyId])
    left join [UoMBase] [unit_of_measurement_products] on ([ProductBase].[DefaultUoMId] = [unit_of_measurement_products].[UoMId])
    left join [UoMScheduleBase] [unit_of_measurement_schedule_products] on ([ProductBase].[DefaultUoMScheduleId] = [unit_of_measurement_schedule_products].[UoMScheduleId])
GO
