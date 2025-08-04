CREATE TABLE [dbo].[OpportunityProductBase] (
    [OpportunityProductId]        UNIQUEIDENTIFIER NOT NULL,
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
    [IsProductOverridden]         BIT              CONSTRAINT [DF_OpportunityProductBase_IsProductOverridden] DEFAULT ((0)) NULL,
    [LineItemNumber]              INT              NULL,
    [ManualDiscountAmount]        MONEY            NULL,
    [ManualDiscountAmount_Base]   MONEY            NULL,
    [OpportunityId]               UNIQUEIDENTIFIER NOT NULL,
    [ParentBundleId]              UNIQUEIDENTIFIER NULL,
    [ProductAssociationId]        UNIQUEIDENTIFIER NULL,
    [ProductTypeCode]             INT              CONSTRAINT [DF_OpportunityProductBase_ProductTypeCode] DEFAULT ((1)) NOT NULL,
    [PricePerUnit]                MONEY            NULL,
    [PricePerUnit_Base]           MONEY            NULL,
    [PricingErrorCode]            INT              NULL,
    [ProductDescription]          NVARCHAR (500)   NULL,
    [ProductName]                 NVARCHAR (1000)  NULL,
    [ProductId]                   UNIQUEIDENTIFIER NULL,
    [Quantity]                    DECIMAL (23, 10) CONSTRAINT [DF_OpportunityProductBase_Quantity] DEFAULT ((0)) NULL,
    [Tax]                         MONEY            NULL,
    [Tax_Base]                    MONEY            NULL,
    [UoMId]                       UNIQUEIDENTIFIER NULL,
    [VolumeDiscountAmount]        MONEY            NULL,
    [VolumeDiscountAmount_Base]   MONEY            NULL,
    [SequenceNumber]              INT              NULL,
    [PropertyConfigurationStatus] INT              CONSTRAINT [DF_OpportunityProductBase_PropertyConfigurationStatus] DEFAULT ((2)) NOT NULL,
    [EntityImageId]               UNIQUEIDENTIFIER NULL,
    [OpportunityProductName]      NVARCHAR (500)   NULL,
    [ParentBundleIdRef]           UNIQUEIDENTIFIER NULL,
    [SkipPriceCalculation]        INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_OpportunityProduct] PRIMARY KEY CLUSTERED ([OpportunityProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [opportunity_products] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [opportunityproduct_parent_opportunityproduct] FOREIGN KEY ([ParentBundleId]) REFERENCES [dbo].[OpportunityProductBase] ([OpportunityProductId]),
    CONSTRAINT [opportunityproduct_parentref_opportunityproduct] FOREIGN KEY ([ParentBundleIdRef]) REFERENCES [dbo].[OpportunityProductBase] ([OpportunityProductId]),
    CONSTRAINT [product_opportunities] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]),
    CONSTRAINT [productAssociation_opportunity_product] FOREIGN KEY ([ProductAssociationId]) REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId]),
    CONSTRAINT [transactioncurrency_opportunityproduct] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [unit_of_measurement_opportunity_products] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[OpportunityProductBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[OpportunityProductBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OpportunityProductBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_products]
    ON [dbo].[OpportunityProductBase]([ProductId] ASC) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleIdRef]
    ON [dbo].[OpportunityProductBase]([ParentBundleIdRef] ASC) WHERE ([ParentBundleIdRef] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [cndx_for_cascaderelationship_product_opportunities]
    ON [dbo].[OpportunityProductBase]([OpportunityId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_OpportunityProduct_modifiedon]
    ON [dbo].[OpportunityProductBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleId]
    ON [dbo].[OpportunityProductBase]([ParentBundleId] ASC) WHERE ([ParentBundleId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_EA123FA141284746BC28D40F26FD6F9B]
    ON [dbo].[OpportunityProductBase]([OpportunityProductId] ASC)
    INCLUDE([ProductId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_EA123FA141284746BC28D40F26FD6F9B]
    ON [dbo].[OpportunityProductBase]([OpportunityProductId] ASC)
    INCLUDE([ProductDescription]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ProductId]
    ON [dbo].[OpportunityProductBase]([ProductId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ProductDescription]
    ON [dbo].[OpportunityProductBase]([ProductDescription] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

