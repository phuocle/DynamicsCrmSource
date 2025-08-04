CREATE TABLE [dbo].[ProductBase] (
    [ProductId]                 UNIQUEIDENTIFIER NOT NULL,
    [DefaultUoMScheduleId]      UNIQUEIDENTIFIER NULL,
    [SubjectId]                 UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [DefaultUoMId]              UNIQUEIDENTIFIER NULL,
    [PriceLevelId]              UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [ProductTypeCode]           INT              NULL,
    [ProductUrl]                NVARCHAR (255)   NULL,
    [Price]                     MONEY            NULL,
    [IsKit]                     BIT              CONSTRAINT [Set_To_Zero137] DEFAULT ((0)) NULL,
    [ProductNumber]             NVARCHAR (100)   NOT NULL,
    [Size]                      NVARCHAR (200)   NULL,
    [CurrentCost]               MONEY            NULL,
    [StockVolume]               DECIMAL (23, 10) NULL,
    [StandardCost]              MONEY            NULL,
    [StockWeight]               DECIMAL (23, 10) NULL,
    [QuantityDecimal]           INT              NULL,
    [QuantityOnHand]            DECIMAL (23, 10) NULL,
    [IsStockItem]               BIT              NULL,
    [SupplierName]              NVARCHAR (100)   NULL,
    [VendorName]                NVARCHAR (100)   NULL,
    [VendorPartNumber]          NVARCHAR (100)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [CurrentCost_Base]          MONEY            NULL,
    [Price_Base]                MONEY            NULL,
    [StandardCost_Base]         MONEY            NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Product] PRIMARY KEY CLUSTERED ([ProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [price_level_products] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]) NOT FOR REPLICATION,
    CONSTRAINT [subject_products] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_product] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [unit_of_measurement_products] FOREIGN KEY ([DefaultUoMId]) REFERENCES [dbo].[UoMBase] ([UoMId]) NOT FOR REPLICATION,
    CONSTRAINT [unit_of_measurement_schedule_products] FOREIGN KEY ([DefaultUoMScheduleId]) REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId]) NOT FOR REPLICATION,
    CONSTRAINT [AK1_ProductBase] UNIQUE NONCLUSTERED ([ProductNumber] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ProductBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_ProductTypeCode]
    ON [dbo].[ProductBase]([ProductTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ProductBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_products]
    ON [dbo].[ProductBase]([SubjectId] ASC) WHERE ([SubjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[ProductBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProductBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

