CREATE TABLE [dbo].[SalesOrderDetailBase] (
    [SalesOrderDetailId]        UNIQUEIDENTIFIER NOT NULL,
    [SalesOrderId]              UNIQUEIDENTIFIER NOT NULL,
    [SalesRepId]                UNIQUEIDENTIFIER NULL,
    [IsProductOverridden]       BIT              CONSTRAINT [Set_To_Zero146] DEFAULT ((0)) NULL,
    [IsCopied]                  BIT              NULL,
    [QuantityShipped]           DECIMAL (23, 10) NULL,
    [LineItemNumber]            INT              NULL,
    [QuantityBackordered]       DECIMAL (23, 10) NULL,
    [UoMId]                     UNIQUEIDENTIFIER NULL,
    [QuantityCancelled]         DECIMAL (23, 10) NULL,
    [ProductId]                 UNIQUEIDENTIFIER NULL,
    [RequestDeliveryBy]         DATETIME         NULL,
    [Quantity]                  DECIMAL (23, 10) NULL,
    [PricingErrorCode]          INT              NULL,
    [ManualDiscountAmount]      MONEY            NULL,
    [ProductDescription]        NVARCHAR (500)   NULL,
    [VolumeDiscountAmount]      MONEY            NULL,
    [PricePerUnit]              MONEY            NULL,
    [BaseAmount]                MONEY            NULL,
    [ExtendedAmount]            MONEY            NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [IsPriceOverridden]         BIT              NULL,
    [ShipTo_Name]               NVARCHAR (200)   NULL,
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
    [ShipTo_ContactName]        NVARCHAR (150)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ShipTo_AddressId]          UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [BaseAmount_Base]           MONEY            NULL,
    [PricePerUnit_Base]         MONEY            NULL,
    [VolumeDiscountAmount_Base] MONEY            NULL,
    [ExtendedAmount_Base]       MONEY            NULL,
    [Tax_Base]                  MONEY            NULL,
    [ManualDiscountAmount_Base] MONEY            NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [SequenceNumber]            INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_SalesOrderDetail] PRIMARY KEY NONCLUSTERED ([SalesOrderDetailId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [order_details] FOREIGN KEY ([SalesOrderId]) REFERENCES [dbo].[SalesOrderBase] ([SalesOrderId]) NOT FOR REPLICATION,
    CONSTRAINT [product_order_details] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]) NOT FOR REPLICATION,
    CONSTRAINT [system_user_salesorderdetail] FOREIGN KEY ([SalesRepId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_salesorderdetail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [unit_of_measurement_order_details] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SalesOrderDetailBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE CLUSTERED INDEX [cndx_for_cascaderelationship_order_details]
    ON [dbo].[SalesOrderDetailBase]([SalesOrderId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_salesorderdetail]
    ON [dbo].[SalesOrderDetailBase]([SalesRepId] ASC) WHERE ([SalesRepId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SalesOrderDetailBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_order_details]
    ON [dbo].[SalesOrderDetailBase]([ProductId] ASC) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ProductId]
    ON [dbo].[SalesOrderDetailBase]([ProductId] ASC) WITH (FILLFACTOR = 80);

