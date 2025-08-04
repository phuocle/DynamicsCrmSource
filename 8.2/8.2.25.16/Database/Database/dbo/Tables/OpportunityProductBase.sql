CREATE TABLE [dbo].[OpportunityProductBase] (
    [ProductId]                   UNIQUEIDENTIFIER NULL,
    [OpportunityProductId]        UNIQUEIDENTIFIER NOT NULL,
    [PricingErrorCode]            INT              NULL,
    [IsProductOverridden]         BIT              CONSTRAINT [Set_To_Zero122] DEFAULT ((0)) NULL,
    [IsPriceOverridden]           BIT              NULL,
    [PricePerUnit]                MONEY            NULL,
    [OpportunityId]               UNIQUEIDENTIFIER NOT NULL,
    [BaseAmount]                  MONEY            NULL,
    [ExtendedAmount]              MONEY            NULL,
    [UoMId]                       UNIQUEIDENTIFIER NULL,
    [ManualDiscountAmount]        MONEY            NULL,
    [Quantity]                    DECIMAL (23, 10) CONSTRAINT [Set_To_Zero123] DEFAULT ((0)) NULL,
    [CreatedOn]                   DATETIME         NULL,
    [VolumeDiscountAmount]        MONEY            NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [Tax]                         MONEY            NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [ProductDescription]          NVARCHAR (500)   NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [Description]                 NVARCHAR (MAX)   NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [ImportSequenceNumber]        INT              NULL,
    [ExchangeRate]                DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]       UNIQUEIDENTIFIER NULL,
    [BaseAmount_Base]             MONEY            NULL,
    [ManualDiscountAmount_Base]   MONEY            NULL,
    [VolumeDiscountAmount_Base]   MONEY            NULL,
    [PricePerUnit_Base]           MONEY            NULL,
    [Tax_Base]                    MONEY            NULL,
    [ExtendedAmount_Base]         MONEY            NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [LineItemNumber]              INT              NULL,
    [EntityImageId]               UNIQUEIDENTIFIER NULL,
    [SequenceNumber]              INT              NULL,
    [ProductTypeCode]             INT              CONSTRAINT [DF_OpportunityProductBase_ProductTypeCode] DEFAULT ((1)) NOT NULL,
    [ParentBundleId]              UNIQUEIDENTIFIER NULL,
    [PropertyConfigurationStatus] INT              CONSTRAINT [DF_OpportunityProductBase_PropertyConfigurationStatus] DEFAULT ((2)) NOT NULL,
    [ProductAssociationId]        UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_OpportunityProduct] PRIMARY KEY CLUSTERED ([OpportunityProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [opportunity_products] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [opportunityproduct_parent_opportunityproduct] FOREIGN KEY ([ParentBundleId]) REFERENCES [dbo].[OpportunityProductBase] ([OpportunityProductId]),
    CONSTRAINT [product_opportunities] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]),
    CONSTRAINT [productAssociation_opportunity_product] FOREIGN KEY ([ProductAssociationId]) REFERENCES [dbo].[ProductAssociationBase] ([ProductAssociationId]),
    CONSTRAINT [transactioncurrency_opportunityproduct] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [unit_of_measurement_opportunity_products] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[OpportunityProductBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [cndx_for_cascaderelationship_product_opportunities]
    ON [dbo].[OpportunityProductBase]([OpportunityId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OpportunityProductBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentBundleId]
    ON [dbo].[OpportunityProductBase]([ParentBundleId] ASC) WHERE ([ParentBundleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_products]
    ON [dbo].[OpportunityProductBase]([ProductId] ASC) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_OpportunityProduct_modifiedon]
    ON [dbo].[OpportunityProductBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 80);

