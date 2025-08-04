CREATE TABLE [dbo].[SalesOrderDetailBase] (
    [SalesOrderDetailId]          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                   DATETIME         NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [ImportSequenceNumber]        INT              NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [BaseAmount]                  MONEY            NULL,
    [TransactionCurrencyId]       UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                DECIMAL (23, 10) NULL,
    [BaseAmount_Base]             MONEY            NULL,
    [Description]                 NVARCHAR (MAX)   NULL,
    [ExtendedAmount]              MONEY            NULL,
    [ExtendedAmount_Base]         MONEY            NULL,
    [IsCopied]                    BIT              NULL,
    [IsPriceOverridden]           BIT              NULL,
    [IsProductOverridden]         BIT              CONSTRAINT [DF_SalesOrderDetailBase_IsProductOverridden] DEFAULT ((0)) NULL,
    [LineItemNumber]              INT              NULL,
    [ManualDiscountAmount]        MONEY            NULL,
    [ManualDiscountAmount_Base]   MONEY            NULL,
    [ParentBundleId]              UNIQUEIDENTIFIER NULL,
    [ProductAssociationId]        UNIQUEIDENTIFIER NULL,
    [ProductTypeCode]             INT              CONSTRAINT [DF_SalesOrderDetailBase_ProductTypeCode] DEFAULT ((1)) NOT NULL,
    [PricePerUnit]                MONEY            NULL,
    [PricePerUnit_Base]           MONEY            NULL,
    [PricingErrorCode]            INT              NULL,
    [ProductDescription]          NVARCHAR (500)   NULL,
    [ProductName]                 NVARCHAR (1000)  NULL,
    [ProductId]                   UNIQUEIDENTIFIER NULL,
    [Quantity]                    DECIMAL (23, 10) NULL,
    [QuantityBackordered]         DECIMAL (23, 10) NULL,
    [QuantityCancelled]           DECIMAL (23, 10) NULL,
    [QuantityShipped]             DECIMAL (23, 10) NULL,
    [RequestDeliveryBy]           DATETIME         NULL,
    [SalesOrderId]                UNIQUEIDENTIFIER NOT NULL,
    [SalesRepId]                  UNIQUEIDENTIFIER NULL,
    [ShipTo_AddressId]            UNIQUEIDENTIFIER NULL,
    [ShipTo_City]                 NVARCHAR (80)    NULL,
    [ShipTo_ContactName]          NVARCHAR (150)   NULL,
    [ShipTo_Country]              NVARCHAR (80)    NULL,
    [ShipTo_Fax]                  NVARCHAR (50)    NULL,
    [ShipTo_FreightTermsCode]     INT              NULL,
    [ShipTo_Line1]                NVARCHAR (4000)  NULL,
    [ShipTo_Line2]                NVARCHAR (4000)  NULL,
    [ShipTo_Line3]                NVARCHAR (4000)  NULL,
    [ShipTo_Name]                 NVARCHAR (200)   NULL,
    [ShipTo_PostalCode]           NVARCHAR (20)    NULL,
    [ShipTo_StateOrProvince]      NVARCHAR (50)    NULL,
    [ShipTo_Telephone]            NVARCHAR (50)    NULL,
    [Tax]                         MONEY            NULL,
    [Tax_Base]                    MONEY            NULL,
    [UoMId]                       UNIQUEIDENTIFIER NULL,
    [VolumeDiscountAmount]        MONEY            NULL,
    [VolumeDiscountAmount_Base]   MONEY            NULL,
    [WillCall]                    BIT              NULL,
    [SequenceNumber]              INT              NULL,
    [PropertyConfigurationStatus] INT              CONSTRAINT [DF_SalesOrderDetailBase_PropertyConfigurationStatus] DEFAULT ((2)) NOT NULL,
    [QuoteDetailId]               UNIQUEIDENTIFIER NULL,
    [SalesOrderDetailName]        NVARCHAR (500)   NULL,
    [ParentBundleIdRef]           UNIQUEIDENTIFIER NULL,
    [SkipPriceCalculation]        INT              NULL,
    [ProductNumber]               NVARCHAR (100)   NULL,
    CONSTRAINT [cndx_PrimaryKey_SalesOrderDetail] PRIMARY KEY CLUSTERED ([SalesOrderDetailId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [msdyn_quotedetail_salesorderdetail] FOREIGN KEY ([QuoteDetailId]) REFERENCES [dbo].[QuoteDetailBase] ([QuoteDetailId]),
    CONSTRAINT [order_details] FOREIGN KEY ([SalesOrderId]) REFERENCES [dbo].[SalesOrderBase] ([SalesOrderId]),
    CONSTRAINT [product_order_details] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [productAssociation_salesorder_details] FOREIGN KEY ([ProductAssociationId]) REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId]),
    CONSTRAINT [salesorderdetail_parent_salesorderdetail] FOREIGN KEY ([ParentBundleId]) REFERENCES [dbo].[SalesOrderDetailBase] ([SalesOrderDetailId]),
    CONSTRAINT [salesorderdetail_parentref_salesorderdetail] FOREIGN KEY ([ParentBundleIdRef]) REFERENCES [dbo].[SalesOrderDetailBase] ([SalesOrderDetailId]),
    CONSTRAINT [system_user_salesorderdetail] FOREIGN KEY ([SalesRepId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [transactioncurrency_salesorderdetail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [unit_of_measurement_order_details] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SalesOrderDetailBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SalesOrderDetailBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SalesOrderDetailBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleIdRef]
    ON [dbo].[SalesOrderDetailBase]([ParentBundleIdRef] ASC) WHERE ([ParentBundleIdRef] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_salesorderdetail]
    ON [dbo].[SalesOrderDetailBase]([SalesRepId] ASC) WHERE ([SalesRepId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [cndx_for_cascaderelationship_order_details]
    ON [dbo].[SalesOrderDetailBase]([SalesOrderId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_order_details]
    ON [dbo].[SalesOrderDetailBase]([ProductId] ASC) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleId]
    ON [dbo].[SalesOrderDetailBase]([ParentBundleId] ASC) WHERE ([ParentBundleId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ProductId]
    ON [dbo].[SalesOrderDetailBase]([ProductId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_114F87BEDD6D4AA0921689BB218E2BCF]
    ON [dbo].[SalesOrderDetailBase]([SalesOrderDetailId] ASC)
    INCLUDE([ProductId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

