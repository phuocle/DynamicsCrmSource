CREATE TABLE [dbo].[QuoteDetailBase] (
    [QuoteDetailId]               UNIQUEIDENTIFIER NOT NULL,
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
    [IsPriceOverridden]           BIT              NULL,
    [IsProductOverridden]         BIT              CONSTRAINT [DF_QuoteDetailBase_IsProductOverridden] DEFAULT ((0)) NULL,
    [LineItemNumber]              INT              NULL,
    [ManualDiscountAmount]        MONEY            NULL,
    [ManualDiscountAmount_Base]   MONEY            NULL,
    [ParentBundleId]              UNIQUEIDENTIFIER NULL,
    [ProductAssociationId]        UNIQUEIDENTIFIER NULL,
    [ProductTypeCode]             INT              CONSTRAINT [DF_QuoteDetailBase_ProductTypeCode] DEFAULT ((1)) NOT NULL,
    [PricePerUnit]                MONEY            NULL,
    [PricePerUnit_Base]           MONEY            NULL,
    [PricingErrorCode]            INT              NULL,
    [ProductDescription]          NVARCHAR (500)   NULL,
    [ProductName]                 NVARCHAR (1000)  NULL,
    [ProductId]                   UNIQUEIDENTIFIER NULL,
    [Quantity]                    DECIMAL (23, 10) NULL,
    [QuoteId]                     UNIQUEIDENTIFIER NOT NULL,
    [RequestDeliveryBy]           DATETIME         NULL,
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
    [PropertyConfigurationStatus] INT              CONSTRAINT [DF_QuoteDetailBase_PropertyConfigurationStatus] DEFAULT ((2)) NOT NULL,
    [QuoteDetailName]             NVARCHAR (500)   NULL,
    [ParentBundleIdRef]           UNIQUEIDENTIFIER NULL,
    [SkipPriceCalculation]        INT              NULL,
    [ProductNumber]               NVARCHAR (100)   NULL,
    CONSTRAINT [cndx_PrimaryKey_QuoteDetail] PRIMARY KEY CLUSTERED ([QuoteDetailId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [product_quote_details] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [productAssociation_quote_details] FOREIGN KEY ([ProductAssociationId]) REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId]),
    CONSTRAINT [quote_details] FOREIGN KEY ([QuoteId]) REFERENCES [dbo].[QuoteBase] ([QuoteId]),
    CONSTRAINT [quotedetail_parent_quotedetail] FOREIGN KEY ([ParentBundleId]) REFERENCES [dbo].[QuoteDetailBase] ([QuoteDetailId]),
    CONSTRAINT [quotedetail_parentref_quotedetail] FOREIGN KEY ([ParentBundleIdRef]) REFERENCES [dbo].[QuoteDetailBase] ([QuoteDetailId]),
    CONSTRAINT [system_user_quotedetail] FOREIGN KEY ([SalesRepId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [transactioncurrency_quotedetail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [unit_of_measurement_quote_details] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[QuoteDetailBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[QuoteDetailBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[QuoteDetailBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleId]
    ON [dbo].[QuoteDetailBase]([ParentBundleId] ASC) WHERE ([ParentBundleId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_quote_details]
    ON [dbo].[QuoteDetailBase]([ProductId] ASC) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [cndx_for_cascaderelationship_quote_details]
    ON [dbo].[QuoteDetailBase]([QuoteId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleIdRef]
    ON [dbo].[QuoteDetailBase]([ParentBundleIdRef] ASC) WHERE ([ParentBundleIdRef] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_quotedetail]
    ON [dbo].[QuoteDetailBase]([SalesRepId] ASC) WHERE ([SalesRepId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ProductId]
    ON [dbo].[QuoteDetailBase]([ProductId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_3369D6BC51304017BD3B05F2B3D054E2]
    ON [dbo].[QuoteDetailBase]([QuoteDetailId] ASC)
    INCLUDE([ProductId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

