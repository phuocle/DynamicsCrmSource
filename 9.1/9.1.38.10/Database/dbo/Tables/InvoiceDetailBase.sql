CREATE TABLE [dbo].[InvoiceDetailBase] (
    [InvoiceDetailId]             UNIQUEIDENTIFIER NOT NULL,
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
    [ActualDeliveryOn]            DATETIME         NULL,
    [BaseAmount]                  MONEY            NULL,
    [TransactionCurrencyId]       UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                DECIMAL (23, 10) NULL,
    [BaseAmount_Base]             MONEY            NULL,
    [Description]                 NVARCHAR (MAX)   NULL,
    [ExtendedAmount]              MONEY            NULL,
    [ExtendedAmount_Base]         MONEY            NULL,
    [InvoiceId]                   UNIQUEIDENTIFIER NOT NULL,
    [IsCopied]                    BIT              NULL,
    [IsPriceOverridden]           BIT              NULL,
    [IsProductOverridden]         BIT              CONSTRAINT [DF_InvoiceDetailBase_IsProductOverridden] DEFAULT ((0)) NULL,
    [LineItemNumber]              INT              NULL,
    [ManualDiscountAmount]        MONEY            NULL,
    [ManualDiscountAmount_Base]   MONEY            NULL,
    [ParentBundleId]              UNIQUEIDENTIFIER NULL,
    [ProductAssociationId]        UNIQUEIDENTIFIER NULL,
    [ProductTypeCode]             INT              CONSTRAINT [DF_InvoiceDetailBase_ProductTypeCode] DEFAULT ((1)) NOT NULL,
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
    [SalesRepId]                  UNIQUEIDENTIFIER NULL,
    [ShippingTrackingNumber]      NVARCHAR (100)   NULL,
    [ShipTo_City]                 NVARCHAR (80)    NULL,
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
    [PropertyConfigurationStatus] INT              CONSTRAINT [DF_InvoiceDetailBase_PropertyConfigurationStatus] DEFAULT ((2)) NOT NULL,
    [InvoiceDetailName]           NVARCHAR (500)   NULL,
    [SalesOrderDetailId]          UNIQUEIDENTIFIER NULL,
    [ParentBundleIdRef]           UNIQUEIDENTIFIER NULL,
    [SkipPriceCalculation]        INT              NULL,
    [ProductNumber]               NVARCHAR (100)   NULL,
    CONSTRAINT [cndx_PrimaryKey_InvoiceDetail] PRIMARY KEY CLUSTERED ([InvoiceDetailId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [invoice_details] FOREIGN KEY ([InvoiceId]) REFERENCES [dbo].[InvoiceBase] ([InvoiceId]),
    CONSTRAINT [invoicedetail_parent_invoicedetail] FOREIGN KEY ([ParentBundleId]) REFERENCES [dbo].[InvoiceDetailBase] ([InvoiceDetailId]),
    CONSTRAINT [invoicedetail_parentref_invoicedetail] FOREIGN KEY ([ParentBundleIdRef]) REFERENCES [dbo].[InvoiceDetailBase] ([InvoiceDetailId]),
    CONSTRAINT [msdyn_salesorderdetail_invoicedetail] FOREIGN KEY ([SalesOrderDetailId]) REFERENCES [dbo].[SalesOrderDetailBase] ([SalesOrderDetailId]),
    CONSTRAINT [product_invoice_details] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [productAssociation_invoice_details] FOREIGN KEY ([ProductAssociationId]) REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId]),
    CONSTRAINT [system_user_invoicedetail] FOREIGN KEY ([SalesRepId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [transactioncurrency_invoicedetail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [unit_of_measurement_invoice_details] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[InvoiceDetailBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[InvoiceDetailBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[InvoiceDetailBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_invoicedetail]
    ON [dbo].[InvoiceDetailBase]([SalesRepId] ASC) WHERE ([SalesRepId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleIdRef]
    ON [dbo].[InvoiceDetailBase]([ParentBundleIdRef] ASC) WHERE ([ParentBundleIdRef] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_invoice_details]
    ON [dbo].[InvoiceDetailBase]([ProductId] ASC) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [cndx_for_cascaderelationship_invoice_details]
    ON [dbo].[InvoiceDetailBase]([InvoiceId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleId]
    ON [dbo].[InvoiceDetailBase]([ParentBundleId] ASC) WHERE ([ParentBundleId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9A25FCDB15B5457092086EF9B800DEC8]
    ON [dbo].[InvoiceDetailBase]([InvoiceDetailId] ASC)
    INCLUDE([ProductId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ProductId]
    ON [dbo].[InvoiceDetailBase]([ProductId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

