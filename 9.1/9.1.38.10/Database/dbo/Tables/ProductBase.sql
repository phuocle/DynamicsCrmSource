CREATE TABLE [dbo].[ProductBase] (
    [ProductId]                 UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [VendorID]                  NVARCHAR (100)   NULL,
    [ValidFromDate]             DATETIME         NULL,
    [ValidToDate]               DATETIME         NULL,
    [CurrentCost]               MONEY            NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [CurrentCost_Base]          MONEY            NULL,
    [DefaultUoMId]              UNIQUEIDENTIFIER NULL,
    [DefaultUoMScheduleId]      UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [IsKit]                     BIT              CONSTRAINT [DF_ProductBase_IsKit] DEFAULT ((0)) NULL,
    [IsStockItem]               BIT              NULL,
    [ParentProductId]           UNIQUEIDENTIFIER NULL,
    [Price]                     MONEY            NULL,
    [Price_Base]                MONEY            NULL,
    [ProductStructure]          INT              CONSTRAINT [DF_ProductBase_ProductStructure] DEFAULT ((1)) NOT NULL,
    [ProductNumber]             NVARCHAR (100)   NOT NULL,
    [ProductTypeCode]           INT              NULL,
    [ProductUrl]                NVARCHAR (255)   NULL,
    [QuantityDecimal]           INT              NULL,
    [QuantityOnHand]            DECIMAL (23, 10) NULL,
    [Size]                      NVARCHAR (200)   NULL,
    [StandardCost]              MONEY            NULL,
    [StandardCost_Base]         MONEY            NULL,
    [StateCode]                 INT              NOT NULL,
    [StatusCode]                INT              NULL,
    [StockVolume]               DECIMAL (23, 10) NULL,
    [StockWeight]               DECIMAL (23, 10) NULL,
    [SupplierName]              NVARCHAR (100)   NULL,
    [VendorName]                NVARCHAR (100)   NULL,
    [VendorPartNumber]          NVARCHAR (100)   NULL,
    [HierarchyPath]             NVARCHAR (900)   NULL,
    [PriceLevelId]              UNIQUEIDENTIFIER NULL,
    [SubjectId]                 UNIQUEIDENTIFIER NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    [CreatedByExternalParty]    UNIQUEIDENTIFIER NULL,
    [ModifiedByExternalParty]   UNIQUEIDENTIFIER NULL,
    [IsReparented]              BIT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Product] PRIMARY KEY CLUSTERED ([ProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [price_level_products] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]),
    CONSTRAINT [product_parent_product] FOREIGN KEY ([ParentProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [subject_products] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId]),
    CONSTRAINT [transactioncurrency_product] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [unit_of_measurement_products] FOREIGN KEY ([DefaultUoMId]) REFERENCES [dbo].[UoMBase] ([UoMId]),
    CONSTRAINT [unit_of_measurement_schedule_products] FOREIGN KEY ([DefaultUoMScheduleId]) REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId]),
    CONSTRAINT [AK1_ProductBase] UNIQUE NONCLUSTERED ([ProductNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ProductBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ProductBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProductBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ProductBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_hierarchypath]
    ON [dbo].[ProductBase]([HierarchyPath] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[ProductBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ProductTypeCode]
    ON [dbo].[ProductBase]([ProductTypeCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentProductId]
    ON [dbo].[ProductBase]([ParentProductId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_products]
    ON [dbo].[ProductBase]([SubjectId] ASC) WHERE ([SubjectId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_1AA93C16E1E345CCA9AE83D9EC18FF9C]
    ON [dbo].[ProductBase]([ProductId] ASC)
    INCLUDE([Name], [ProductNumber], [HierarchyPath], [ProductTypeCode], [Description], [StateCode], [ProductStructure], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_1AA93C16E1E345CCA9AE83D9EC18FF9C]
    ON [dbo].[ProductBase]([ProductId] ASC)
    INCLUDE([ProductNumber], [Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_price_level_products]
    ON [dbo].[ProductBase]([PriceLevelId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_unit_of_measurement_schedule_products]
    ON [dbo].[ProductBase]([DefaultUoMScheduleId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_unit_of_measurement_products]
    ON [dbo].[ProductBase]([DefaultUoMId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

