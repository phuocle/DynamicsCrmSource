CREATE TABLE [dbo].[ProductBase]
(
[ProductId] [uniqueidentifier] NOT NULL,
[DefaultUoMScheduleId] [uniqueidentifier] NULL,
[SubjectId] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[DefaultUoMId] [uniqueidentifier] NULL,
[PriceLevelId] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ProductTypeCode] [int] NULL,
[ProductUrl] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[Price] [money] NULL,
[IsKit] [bit] NULL CONSTRAINT [Set_To_Zero137] DEFAULT ((0)),
[ProductNumber] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[Size] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[CurrentCost] [money] NULL,
[StockVolume] [decimal] (23, 10) NULL,
[StandardCost] [money] NULL,
[StockWeight] [decimal] (23, 10) NULL,
[QuantityDecimal] [int] NULL,
[QuantityOnHand] [decimal] (23, 10) NULL,
[IsStockItem] [bit] NULL,
[SupplierName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[VendorName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[VendorPartNumber] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[VersionNumber] [timestamp] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[CurrentCost_Base] [money] NULL,
[Price_Base] [money] NULL,
[StandardCost_Base] [money] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[StageId] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[ProductStructure] [int] NOT NULL CONSTRAINT [DF_ProductBase_ProductStructure] DEFAULT ((1)),
[VendorID] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ParentProductId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[ValidToDate] [datetime] NULL,
[ValidFromDate] [datetime] NULL,
[HierarchyPath] [nvarchar] (900) COLLATE Latin1_General_CI_AI NULL,
[ModifiedByExternalParty] [uniqueidentifier] NULL,
[CreatedByExternalParty] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductBase] ADD CONSTRAINT [cndx_PrimaryKey_Product] PRIMARY KEY CLUSTERED  ([ProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_hierarchypath] ON [dbo].[ProductBase] ([HierarchyPath]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[ProductBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentProductId] ON [dbo].[ProductBase] ([ParentProductId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductBase] ADD CONSTRAINT [AK1_ProductBase] UNIQUE NONCLUSTERED  ([ProductNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ProductTypeCode] ON [dbo].[ProductBase] ([ProductTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ProductBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_products] ON [dbo].[ProductBase] ([SubjectId]) WHERE ([SubjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ProductBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductBase] ADD CONSTRAINT [price_level_products] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[ProductBase] ADD CONSTRAINT [product_parent_product] FOREIGN KEY ([ParentProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductBase] ADD CONSTRAINT [subject_products] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
ALTER TABLE [dbo].[ProductBase] ADD CONSTRAINT [transactioncurrency_product] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ProductBase] ADD CONSTRAINT [unit_of_measurement_products] FOREIGN KEY ([DefaultUoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
GO
ALTER TABLE [dbo].[ProductBase] ADD CONSTRAINT [unit_of_measurement_schedule_products] FOREIGN KEY ([DefaultUoMScheduleId]) REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId])
GO
