CREATE TABLE [dbo].[InvoiceDetailBase] (
    [InvoiceDetailId]           UNIQUEIDENTIFIER NOT NULL,
    [SalesRepId]                UNIQUEIDENTIFIER NULL,
    [IsProductOverridden]       BIT              CONSTRAINT [Set_To_Zero114] DEFAULT ((0)) NULL,
    [LineItemNumber]            INT              NULL,
    [IsCopied]                  BIT              NULL,
    [InvoiceId]                 UNIQUEIDENTIFIER NOT NULL,
    [QuantityBackordered]       DECIMAL (23, 10) NULL,
    [UoMId]                     UNIQUEIDENTIFIER NULL,
    [ProductId]                 UNIQUEIDENTIFIER NULL,
    [ActualDeliveryOn]          DATETIME         NULL,
    [Quantity]                  DECIMAL (23, 10) NULL,
    [ManualDiscountAmount]      MONEY            NULL,
    [ProductDescription]        NVARCHAR (500)   NULL,
    [VolumeDiscountAmount]      MONEY            NULL,
    [PricePerUnit]              MONEY            NULL,
    [BaseAmount]                MONEY            NULL,
    [QuantityCancelled]         DECIMAL (23, 10) NULL,
    [ShippingTrackingNumber]    NVARCHAR (100)   NULL,
    [ExtendedAmount]            MONEY            NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [IsPriceOverridden]         BIT              NULL,
    [ShipTo_Name]               NVARCHAR (200)   NULL,
    [PricingErrorCode]          INT              NULL,
    [Tax]                       MONEY            NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ShipTo_Line1]              NVARCHAR (4000)  NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ShipTo_Line2]              NVARCHAR (4000)  NULL,
    [ShipTo_Line3]              NVARCHAR (4000)  NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ShipTo_City]               NVARCHAR (80)    NULL,
    [ShipTo_StateOrProvince]    NVARCHAR (50)    NULL,
    [ShipTo_Country]            NVARCHAR (80)    NULL,
    [ShipTo_PostalCode]         NVARCHAR (20)    NULL,
    [WillCall]                  BIT              NULL,
    [ShipTo_Telephone]          NVARCHAR (50)    NULL,
    [ShipTo_Fax]                NVARCHAR (50)    NULL,
    [ShipTo_FreightTermsCode]   INT              NULL,
    [QuantityShipped]           DECIMAL (23, 10) NULL,
    [VersionNumber]             ROWVERSION       NOT NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [VolumeDiscountAmount_Base] MONEY            NULL,
    [BaseAmount_Base]           MONEY            NULL,
    [PricePerUnit_Base]         MONEY            NULL,
    [Tax_Base]                  MONEY            NULL,
    [ExtendedAmount_Base]       MONEY            NULL,
    [ManualDiscountAmount_Base] MONEY            NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [SequenceNumber]            INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_InvoiceDetail] PRIMARY KEY NONCLUSTERED ([InvoiceDetailId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [invoice_details] FOREIGN KEY ([InvoiceId]) REFERENCES [dbo].[InvoiceBase] ([InvoiceId]) NOT FOR REPLICATION,
    CONSTRAINT [product_invoice_details] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]) NOT FOR REPLICATION,
    CONSTRAINT [system_user_invoicedetail] FOREIGN KEY ([SalesRepId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_invoicedetail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [unit_of_measurement_invoice_details] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[InvoiceDetailBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE CLUSTERED INDEX [cndx_for_cascaderelationship_invoice_details]
    ON [dbo].[InvoiceDetailBase]([InvoiceId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_invoice_details]
    ON [dbo].[InvoiceDetailBase]([ProductId] ASC) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_invoicedetail]
    ON [dbo].[InvoiceDetailBase]([SalesRepId] ASC) WHERE ([SalesRepId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[InvoiceDetailBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ProductId]
    ON [dbo].[InvoiceDetailBase]([ProductId] ASC) WITH (FILLFACTOR = 80);

